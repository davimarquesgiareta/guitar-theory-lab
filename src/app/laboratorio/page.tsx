import { LabStudio } from "@/components/practice/LabStudio";

export const metadata = {
  title: "Laboratório | Guitar Theory Lab",
  description: "Explore escalas e acordes no braço da guitarra.",
};

export default function LaboratorioPage() {
  return (
    <div className="mx-auto max-w-6xl px-4 sm:px-6 py-12 sm:py-16">
      <header className="mb-8 max-w-2xl">
        <h1 className="font-[family-name:var(--font-display)] text-4xl sm:text-5xl text-[var(--fg)]">
          Laboratório
        </h1>
        <p className="mt-3 text-[var(--muted-strong)] leading-relaxed">
          Escolha tônica, escala ou acorde e veja o mapa no braço. Clique nas
          notas para ouvir — ideal para comparar modos e voicings.
        </p>
      </header>
      <LabStudio />
    </div>
  );
}
