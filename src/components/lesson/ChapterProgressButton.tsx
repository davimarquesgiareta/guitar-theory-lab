"use client";

import { Check } from "lucide-react";
import { useProgressStore } from "@/store/progressStore";

export function ChapterProgressButton({
  trackId,
  chapterId,
}: {
  trackId: string;
  chapterId: string;
}) {
  const isComplete = useProgressStore((s) => s.isComplete(trackId, chapterId));
  const markComplete = useProgressStore((s) => s.markComplete);

  return (
    <button
      type="button"
      onClick={() => markComplete(trackId, chapterId)}
      disabled={isComplete}
      className={`inline-flex items-center gap-2 rounded-lg px-4 py-2 text-sm font-medium transition ${
        isComplete
          ? "bg-[color-mix(in_oklab,var(--accent)_20%,transparent)] text-[var(--accent)]"
          : "bg-[var(--accent)] text-[var(--bg)] hover:brightness-110"
      }`}
    >
      <Check className="size-4" />
      {isComplete ? "Capítulo concluído" : "Marcar como concluído"}
    </button>
  );
}
