"use client";

import { Fretboard } from "@/components/fretboard/Fretboard";
import type { LessonBlock } from "@/lib/curriculum/types";
import { Lightbulb, Target } from "lucide-react";

export function LessonBlocks({ blocks }: { blocks: LessonBlock[] }) {
  return (
    <div className="flex flex-col gap-8">
      {blocks.map((block, i) => {
        switch (block.type) {
          case "text":
            return (
              <section key={i} className="max-w-2xl">
                {block.title && (
                  <h2 className="font-[family-name:var(--font-display)] text-2xl text-[var(--fg)] mb-3">
                    {block.title}
                  </h2>
                )}
                <p className="text-[var(--muted-strong)] leading-relaxed text-[15px] sm:text-base">
                  {block.body}
                </p>
              </section>
            );
          case "list":
            return (
              <section key={i} className="max-w-2xl">
                {block.title && (
                  <h3 className="mb-3 text-sm font-semibold uppercase tracking-wider text-[var(--accent)]">
                    {block.title}
                  </h3>
                )}
                <ul className="space-y-2">
                  {block.items.map((item) => (
                    <li
                      key={item}
                      className="flex gap-3 text-[var(--muted-strong)] text-[15px]"
                    >
                      <span className="mt-2 size-1.5 shrink-0 rounded-full bg-[var(--accent)]" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </section>
            );
          case "tip":
            return (
              <aside
                key={i}
                className="flex gap-3 rounded-xl border border-[var(--line)] bg-[var(--surface)] px-4 py-3 max-w-2xl"
              >
                <Lightbulb className="size-5 shrink-0 text-[var(--accent)] mt-0.5" />
                <p className="text-sm text-[var(--muted-strong)] leading-relaxed">
                  {block.body}
                </p>
              </aside>
            );
          case "practice":
            return (
              <aside
                key={i}
                className="flex gap-3 rounded-xl border border-[color-mix(in_oklab,var(--accent)_35%,var(--line))] bg-[color-mix(in_oklab,var(--accent)_10%,transparent)] px-4 py-3 max-w-2xl"
              >
                <Target className="size-5 shrink-0 text-[var(--accent)] mt-0.5" />
                <div>
                  <p className="text-xs font-semibold uppercase tracking-wider text-[var(--accent)] mb-1">
                    Prática
                  </p>
                  <p className="text-sm text-[var(--muted-strong)] leading-relaxed">
                    {block.body}
                  </p>
                </div>
              </aside>
            );
          case "fretboard":
            return (
              <section key={i} className="space-y-3">
                {block.title && (
                  <h3 className="font-[family-name:var(--font-display)] text-xl text-[var(--fg)]">
                    {block.title}
                  </h3>
                )}
                <div className="rounded-xl border border-[var(--line)] bg-[var(--surface)] p-3 sm:p-4">
                  <Fretboard
                    root={block.root}
                    mode={block.mode}
                    scaleId={block.scaleId}
                    chordQuality={block.chordQuality}
                    highlightNotes={block.highlightNotes}
                    frets={block.frets ?? 12}
                  />
                </div>
              </section>
            );
          default:
            return null;
        }
      })}
    </div>
  );
}
