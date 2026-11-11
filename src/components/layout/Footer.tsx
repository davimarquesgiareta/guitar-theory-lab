export function Footer() {
  return (
    <footer className="mt-auto border-t border-[var(--line)] py-8">
      <div className="mx-auto flex max-w-6xl flex-col gap-2 px-4 sm:px-6 sm:flex-row sm:items-center sm:justify-between">
        <p className="font-[family-name:var(--font-display)] text-sm text-[var(--fg)]">
          Guitar Theory Lab
        </p>
        <p className="text-xs text-[var(--muted)]">
          Teoria aplicada ao braço — do cromático ao jazz.
        </p>
      </div>
    </footer>
  );
}
