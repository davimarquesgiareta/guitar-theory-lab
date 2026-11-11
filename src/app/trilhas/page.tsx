import Link from "next/link";
import { TRACKS, levelLabel } from "@/lib/curriculum/tracks";
import { TrackProgressBar } from "@/components/lesson/TrackProgress";

export const metadata = {
  title: "Trilhas | Guitar Theory Lab",
  description: "Trilhas didáticas de teoria musical para guitarra.",
};

export default function TrilhasPage() {
  return (
    <div className="mx-auto max-w-6xl px-4 sm:px-6 py-12 sm:py-16">
      <header className="max-w-2xl mb-10">
        <h1 className="font-[family-name:var(--font-display)] text-4xl sm:text-5xl text-[var(--fg)]">
          Trilhas de estudo
        </h1>
        <p className="mt-3 text-[var(--muted-strong)] leading-relaxed">
          Sequência pensada para construir repertório mental no braço: primeiro
          o mapa, depois as cores harmônicas, depois o vocabulário de estilo.
        </p>
      </header>

      <div className="grid gap-5">
        {TRACKS.map((track, index) => (
          <Link
            key={track.id}
            href={`/trilhas/${track.id}`}
            className="group rounded-2xl border border-[var(--line)] bg-[var(--surface)] p-5 sm:p-6 transition hover:border-[color-mix(in_oklab,var(--accent)_35%,var(--line))]"
          >
            <div className="flex flex-col gap-5 sm:flex-row sm:items-start sm:justify-between">
              <div className="min-w-0">
                <div className="flex flex-wrap items-center gap-3 text-xs text-[var(--muted)]">
                  <span className="font-mono">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <span
                    className="size-2 rounded-full"
                    style={{ background: track.accent }}
                  />
                  <span className="uppercase tracking-wider">
                    {levelLabel(track.level)}
                  </span>
                  <span>· {track.chapters.length} capítulos</span>
                </div>
                <h2 className="mt-3 font-[family-name:var(--font-display)] text-3xl text-[var(--fg)] group-hover:text-[var(--accent)] transition-colors">
                  {track.title}
                </h2>
                <p className="mt-1 text-sm text-[var(--accent-2)]">
                  {track.tagline}
                </p>
                <p className="mt-3 max-w-2xl text-sm text-[var(--muted)] leading-relaxed">
                  {track.description}
                </p>
              </div>
              <div className="w-full sm:w-44 shrink-0">
                <TrackProgressBar
                  trackId={track.id}
                  total={track.chapters.length}
                />
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
