import { Suspense } from "react";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowRight, ExternalLink } from "lucide-react";
import { getChapter, TRACKS } from "@/lib/curriculum/tracks";
import { LessonBlocks } from "@/components/lesson/LessonBlocks";
import { ChapterProgressButton } from "@/components/lesson/ChapterProgressButton";

export function generateStaticParams() {
  return TRACKS.flatMap((track) =>
    track.chapters.map((chapter) => ({
      trackId: track.id,
      chapterId: chapter.id,
    })),
  );
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ trackId: string; chapterId: string }>;
}) {
  const { trackId, chapterId } = await params;
  const data = getChapter(trackId, chapterId);
  if (!data) return { title: "Capítulo | Guitar Theory Lab" };
  return {
    title: `${data.chapter.title} | ${data.track.title}`,
    description: data.chapter.summary,
  };
}

export default function ChapterPage({
  params,
}: {
  params: Promise<{ trackId: string; chapterId: string }>;
}) {
  return (
    <div className="mx-auto max-w-6xl px-4 sm:px-6 py-10 sm:py-14">
      <Suspense fallback={<ChapterSkeleton />}>
        <ChapterContent params={params} />
      </Suspense>
    </div>
  );
}

async function ChapterContent({
  params,
}: {
  params: Promise<{ trackId: string; chapterId: string }>;
}) {
  const { trackId, chapterId } = await params;
  const data = getChapter(trackId, chapterId);
  if (!data) notFound();

  const { track, chapter, prev, next, index } = data;

  return (
    <>
      <Link
        href={`/trilhas/${track.id}`}
        className="inline-flex items-center gap-1.5 text-sm text-[var(--muted)] hover:text-[var(--fg)]"
      >
        <ArrowLeft className="size-4" /> {track.title}
      </Link>

      <header className="mt-6 mb-10 max-w-3xl">
        <p className="text-xs uppercase tracking-wider text-[var(--muted)]">
          Capítulo {index + 1} de {track.chapters.length} · {chapter.durationMin}{" "}
          min
        </p>
        <h1 className="mt-2 font-[family-name:var(--font-display)] text-4xl sm:text-5xl text-[var(--fg)] leading-tight">
          {chapter.title}
        </h1>
        <p className="mt-3 text-[var(--muted-strong)]">{chapter.summary}</p>
        {chapter.practiceHref && (
          <Link
            href={chapter.practiceHref}
            className="mt-4 inline-flex items-center gap-1.5 text-sm text-[var(--accent)] hover:underline"
          >
            Ir para o exercício <ExternalLink className="size-3.5" />
          </Link>
        )}
      </header>

      <LessonBlocks blocks={chapter.blocks} />

      <div className="mt-12 flex flex-wrap items-center justify-between gap-4 border-t border-[var(--line)] pt-8">
        <ChapterProgressButton trackId={track.id} chapterId={chapter.id} />
        <div className="flex flex-wrap gap-3">
          {prev ? (
            <Link
              href={`/trilhas/${track.id}/${prev.id}`}
              className="btn-secondary"
            >
              <ArrowLeft className="size-4" /> {prev.title}
            </Link>
          ) : (
            <span />
          )}
          {next ? (
            <Link
              href={`/trilhas/${track.id}/${next.id}`}
              className="btn-primary"
            >
              {next.title} <ArrowRight className="size-4" />
            </Link>
          ) : (
            <Link href={`/trilhas/${track.id}`} className="btn-primary">
              Voltar à trilha
            </Link>
          )}
        </div>
      </div>
    </>
  );
}

function ChapterSkeleton() {
  return (
    <div className="animate-pulse space-y-6">
      <div className="h-4 w-40 rounded bg-[var(--surface)]" />
      <div className="h-12 w-3/4 max-w-xl rounded-lg bg-[var(--surface)]" />
      <div className="h-4 w-full max-w-lg rounded bg-[var(--surface)]" />
      <div className="h-48 rounded-xl bg-[var(--surface)]" />
      <div className="h-48 rounded-xl bg-[var(--surface)]" />
    </div>
  );
}
