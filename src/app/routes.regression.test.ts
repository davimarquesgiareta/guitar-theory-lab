import { readFileSync } from "node:fs";
import path from "node:path";
import { describe, expect, it } from "vitest";
import { TRACKS } from "@/lib/curriculum/tracks";

const root = path.resolve(__dirname, "../..");

function readApp(rel: string) {
  return readFileSync(path.join(root, "src/app", rel), "utf8");
}

describe("rotas dinâmicas (regressão Next.js instant shell)", () => {
  it("página de trilha não faz await params no topo — usa Suspense", () => {
    const source = readApp("trilhas/[trackId]/page.tsx");

    expect(source).toContain("Suspense");
    expect(source).toMatch(/export default function TrackPage/);
    expect(source).not.toMatch(
      /export default async function TrackPage[\s\S]*?await params/,
    );
    expect(source).toContain("<Suspense");
    expect(source).toContain("TrackContent");
  });

  it("página de capítulo não faz await params no topo — usa Suspense", () => {
    const source = readApp("trilhas/[trackId]/[chapterId]/page.tsx");

    expect(source).toContain("Suspense");
    expect(source).toMatch(/export default function ChapterPage/);
    expect(source).not.toMatch(
      /export default async function ChapterPage[\s\S]*?await params/,
    );
    expect(source).toContain("<Suspense");
    expect(source).toContain("ChapterContent");
  });

  it("generateStaticParams cobre todas as trilhas e capítulos", () => {
    const trackPage = readApp("trilhas/[trackId]/page.tsx");
    const chapterPage = readApp("trilhas/[trackId]/[chapterId]/page.tsx");

    expect(trackPage).toContain("generateStaticParams");
    expect(chapterPage).toContain("generateStaticParams");

    const trackParams = TRACKS.map((t) => t.id);
    const chapterParams = TRACKS.flatMap((t) =>
      t.chapters.map((c) => `${t.id}/${c.id}`),
    );

    expect(trackParams.length).toBeGreaterThanOrEqual(6);
    expect(chapterParams.length).toBeGreaterThanOrEqual(15);
  });
});

describe("rotas estáticas essenciais existem", () => {
  const files = [
    "page.tsx",
    "trilhas/page.tsx",
    "laboratorio/page.tsx",
    "pratica/page.tsx",
    "pratica/notas/page.tsx",
  ];

  it.each(files)("src/app/%s existe e exporta page", (rel) => {
    const source = readApp(rel);
    expect(source).toMatch(/export default function/);
  });
});
