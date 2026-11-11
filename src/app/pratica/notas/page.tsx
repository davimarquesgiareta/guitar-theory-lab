import Link from "next/link";
import { NoteFinder } from "@/components/practice/NoteFinder";

export const metadata = {
  title: "Memória do Braço | Guitar Theory Lab",
  description: "Treino interativo para memorizar notas no braço da guitarra.",
};

export default function NotaPracticePage() {
  return (
    <div className="mx-auto max-w-6xl px-4 sm:px-6 py-12 sm:py-16">
      <header className="mb-8 max-w-2xl">
        <p className="text-xs uppercase tracking-wider text-[var(--muted)] mb-2">
          Prática
        </p>
        <h1 className="font-[family-name:var(--font-display)] text-4xl sm:text-5xl text-[var(--fg)]">
          Memória do braço
        </h1>
        <p className="mt-3 text-[var(--muted-strong)] leading-relaxed">
          O app sorteia uma nota — você clica na casa correta. Combine com o
          capítulo{" "}
          <Link
            href="/trilhas/fundamentos/cromatico"
            className="text-[var(--accent)] hover:underline"
          >
            As 12 notas e o cromático
          </Link>
          .
        </p>
      </header>
      <NoteFinder />
    </div>
  );
}
