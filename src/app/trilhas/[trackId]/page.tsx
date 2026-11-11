import { Suspense } from "react";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, Clock } from "lucide-react";
import {
  getTrack,
  levelLabel,
  TRACKS,
} from "@/lib/curriculum/tracks";
import {
  ChapterDoneMark,
  TrackProgressBar,
} from "@/components/lesson/TrackProgress";

export function generateStaticParams() {
  return TRACKS.map((t) => ({ trackId: t.id }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ trackId: string }>;
}) {
  const { trackId } = await params;
  const track = getTrack(trackId);
  if (!track) return { title: "Trilha | Guitar Theory Lab" };
  return {
    title: `${track.title} | Guitar Theory Lab`,
    description: track.description,
  };
}

export default function TrackPage({
  params,
}: {
  params: Promise<{ trackId: string }>;
}) {
  return (
    <div className="mx-auto max-w-6xl px-4 sm:px-6 py-12 sm:py-16">
      <Link
        href="/trilhas"
        className="inline-flex items-center gap-1.5 text-sm text-[var(--muted)] hover:text-[var(--fg)]"
      >
        <ArrowLeft className="size-4" /> Todas as trilhas
      </Link>
      <Suspense fallback={<TrackSkeleton />}>
        <TrackContent params={params} />
      </Suspense>
    </div>
  );
}

async function TrackContent({
  params,
}: {
  params: Promise<{ trackId: string }>;
}) {
  const { trackId } = await params;
  const track = getTrack(trackId);
  if (!track) notFound();

  const totalMin = track.chapters.reduce((acc, c) => acc + c.durationMin, 0);

  return (
    <>
      <header className="mt-6 mb-10 max-w-3xl">
        <div className="flex flex-wrap items-center gap-3 text-xs text-[var(--muted)]">
          <span
            className="size-2.5 rounded-full"
            style={{ background: track.accent }}
          />
          <span className="uppercase tracking-wider">
            {levelLabel(track.level)}
          </span>
          <span className="inline-flex items-center gap-1">
            <Clock className="size-3.5" /> ~{totalMin} min
          </span>
        </div>
        <h1 className="mt-3 font-[family-name:var(--font-display)] text-4xl sm:text-5xl text-[var(--fg)]">
          {track.title}
        </h1>
        <p className="mt-3 text-[var(--muted-strong)] leading-relaxed">
          {track.description}
        </p>
        <div className="mt-6 max-w-xs">
          <TrackProgressBar
            trackId={track.id}
            total={track.chapters.length}
          />
        </div>
      </header>

      <ol className="space-y-3">
        {track.chapters.map((chapter, i) => (
          <li key={chapter.id}>
            <Link
              href={`/trilhas/${track.id}/${chapter.id}`}
              className="flex flex-col gap-2 rounded-xl border border-[var(--line)] bg-[var(--surface)] px-4 py-4 sm:flex-row sm:items-center sm:justify-between sm:px-5 transition hover:border-[color-mix(in_oklab,var(--accent)_35%,var(--line))]"
            >
              <div className="flex gap-4 min-w-0">
                <span className="font-mono text-sm text-[var(--muted)] pt-0.5">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <div className="min-w-0">
                  <h2 className="font-[family-name:var(--font-display)] text-xl text-[var(--fg)]">
                    {chapter.title}
                  </h2>
                  <p className="mt-1 text-sm text-[var(--muted)]">
                    {chapter.summary}
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-3 pl-10 sm:pl-0">
                <ChapterDoneMark trackId={track.id} chapterId={chapter.id} />
                <span className="text-xs text-[var(--muted)]">
                  {chapter.durationMin} min
                </span>
              </div>
            </Link>
          </li>
        ))}
      </ol>
    </>
  );
}

function TrackSkeleton() {
  return (
    <div className="mt-6 animate-pulse space-y-6">
      <div className="h-10 w-64 rounded-lg bg-[var(--surface)]" />
      <div className="h-4 w-full max-w-xl rounded bg-[var(--surface)]" />
      <div className="space-y-3 pt-4">
        {Array.from({ length: 4 }, (_, i) => (
          <div key={i} className="h-20 rounded-xl bg-[var(--surface)]" />
        ))}
      </div>
    </div>
  );
}
