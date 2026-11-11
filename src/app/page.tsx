import Link from "next/link";
import { ArrowRight, Guitar, Headphones, Map } from "lucide-react";
import { TRACKS, levelLabel } from "@/lib/curriculum/tracks";

export default function HomePage() {
  const featured = TRACKS.slice(0, 3);

  return (
    <div>
      <section className="relative overflow-hidden">
        <div className="hero-grid pointer-events-none absolute inset-0 opacity-40" />
        <div className="relative mx-auto max-w-6xl px-4 sm:px-6 pt-16 pb-20 sm:pt-24 sm:pb-28">
          <p className="font-[family-name:var(--font-display)] text-4xl sm:text-6xl md:text-7xl text-[var(--fg)] tracking-tight max-w-3xl leading-[1.05]">
            Guitar Theory{" "}
            <span className="text-[var(--accent)]">Lab</span>
          </p>
          <p className="mt-5 max-w-xl text-[var(--muted-strong)] text-base sm:text-lg leading-relaxed">
            Teoria musical didática no braço da guitarra — trilhas progressivas,
            fretboard interativo e treinos práticos do blues ao jazz.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link href="/trilhas" className="btn-primary">
              Começar pelas trilhas <ArrowRight className="size-4" />
            </Link>
            <Link href="/laboratorio" className="btn-secondary">
              Abrir laboratório
            </Link>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 sm:px-6 pb-16">
        <div className="grid gap-6 sm:grid-cols-3">
          <Feature
            icon={<Map className="size-5" />}
            title="Trilhas guiadas"
            body="Capítulos curtos, na ordem certa: cromático → intervalos → campo harmônico → CAGED → modos → blues/jazz."
          />
          <Feature
            icon={<Guitar className="size-5" />}
            title="Braço vivo"
            body="Escalas, acordes e arpejos com graus coloridos. Clique para ouvir cada nota."
          />
          <Feature
            icon={<Headphones className="size-5" />}
            title="Prática ativa"
            body="Memória do braço, laboratório livre e exercícios ligados a cada capítulo."
          />
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 sm:px-6 pb-20">
        <div className="mb-6 flex items-end justify-between gap-4">
          <div>
            <h2 className="font-[family-name:var(--font-display)] text-3xl text-[var(--fg)]">
              Trilhas em destaque
            </h2>
            <p className="mt-1 text-sm text-[var(--muted)]">
              Comece em Fundamentos se estiver revisando a base.
            </p>
          </div>
          <Link
            href="/trilhas"
            className="text-sm text-[var(--accent)] hover:underline"
          >
            Ver todas
          </Link>
        </div>

        <div className="grid gap-4 md:grid-cols-3">
          {featured.map((track) => (
            <Link
              key={track.id}
              href={`/trilhas/${track.id}`}
              className="group rounded-2xl border border-[var(--line)] bg-[var(--surface)] p-5 transition hover:border-[color-mix(in_oklab,var(--accent)_40%,var(--line))]"
            >
              <div className="flex items-center justify-between gap-2">
                <span
                  className="size-2.5 rounded-full"
                  style={{ background: track.accent }}
                />
                <span className="text-[11px] uppercase tracking-wider text-[var(--muted)]">
                  {levelLabel(track.level)}
                </span>
              </div>
              <h3 className="mt-4 font-[family-name:var(--font-display)] text-2xl text-[var(--fg)] group-hover:text-[var(--accent)] transition-colors">
                {track.title}
              </h3>
              <p className="mt-2 text-sm text-[var(--muted)] leading-relaxed">
                {track.tagline}
              </p>
              <p className="mt-4 text-xs text-[var(--muted)]">
                {track.chapters.length} capítulos
              </p>
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
}

function Feature({
  icon,
  title,
  body,
}: {
  icon: React.ReactNode;
  title: string;
  body: string;
}) {
  return (
    <div className="rounded-2xl border border-[var(--line)] bg-[color-mix(in_oklab,var(--surface)_70%,transparent)] p-5">
      <div className="mb-3 text-[var(--accent)]">{icon}</div>
      <h3 className="font-[family-name:var(--font-display)] text-xl text-[var(--fg)]">
        {title}
      </h3>
      <p className="mt-2 text-sm text-[var(--muted)] leading-relaxed">{body}</p>
    </div>
  );
}
