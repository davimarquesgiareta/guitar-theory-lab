"use client";

import { useProgressStore } from "@/store/progressStore";

export function TrackProgressBar({
  trackId,
  total,
}: {
  trackId: string;
  total: number;
}) {
  const pct = useProgressStore((s) => s.trackProgress(trackId, total));

  return (
    <div className="space-y-1.5">
      <div className="flex justify-between text-xs text-[var(--muted)]">
        <span>Progresso</span>
        <span>{pct}%</span>
      </div>
      <div className="h-1.5 overflow-hidden rounded-full bg-[var(--line)]">
        <div
          className="h-full rounded-full bg-[var(--accent)] transition-all"
          style={{ width: `${pct}%` }}
        />
      </div>
    </div>
  );
}

export function ChapterDoneMark({
  trackId,
  chapterId,
}: {
  trackId: string;
  chapterId: string;
}) {
  const done = useProgressStore((s) => s.isComplete(trackId, chapterId));
  if (!done) return null;
  return (
    <span className="text-[11px] uppercase tracking-wider text-[var(--accent)]">
      Concluído
    </span>
  );
}
