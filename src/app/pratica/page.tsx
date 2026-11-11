import Link from "next/link";
import { Crosshair, FlaskConical } from "lucide-react";

export const metadata = {
  title: "Prática | Guitar Theory Lab",
  description: "Exercícios interativos de teoria e braço da guitarra.",
};

export default function PraticaPage() {
  return (
    <div className="mx-auto max-w-6xl px-4 sm:px-6 py-12 sm:py-16">
      <header className="mb-10 max-w-2xl">
        <h1 className="font-[family-name:var(--font-display)] text-4xl sm:text-5xl text-[var(--fg)]">
          Prática
        </h1>
        <p className="mt-3 text-[var(--muted-strong)]">
          Treinos curtos para fixar o que as trilhas ensinam.
        </p>
      </header>

      <div className="grid gap-4 sm:grid-cols-2">
        <Link
          href="/pratica/notas"
          className="rounded-2xl border border-[var(--line)] bg-[var(--surface)] p-6 hover:border-[color-mix(in_oklab,var(--accent)_35%,var(--line))] transition"
        >
          <Crosshair className="size-5 text-[var(--accent)] mb-3" />
          <h2 className="font-[family-name:var(--font-display)] text-2xl">
            Memória do braço
          </h2>
          <p className="mt-2 text-sm text-[var(--muted)]">
            Ache a nota sorteada em qualquer corda/casa.
          </p>
        </Link>
        <Link
          href="/laboratorio"
          className="rounded-2xl border border-[var(--line)] bg-[var(--surface)] p-6 hover:border-[color-mix(in_oklab,var(--accent)_35%,var(--line))] transition"
        >
          <FlaskConical className="size-5 text-[var(--accent)] mb-3" />
          <h2 className="font-[family-name:var(--font-display)] text-2xl">
            Laboratório
          </h2>
          <p className="mt-2 text-sm text-[var(--muted)]">
            Explore escalas e acordes com áudio no fretboard.
          </p>
        </Link>
      </div>
    </div>
  );
}
