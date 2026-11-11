"use client";

import { useCallback, useEffect, useMemo, useState } from "react";
import { CHROMATIC_SHARP, displayPitchClass } from "@/lib/music/notes";
import { noteAtFret, TUNINGS } from "@/lib/music/fretboard";
import { playPitchClass } from "@/lib/music/audio";
import type { PitchClass } from "@/lib/music/types";
import { RefreshCw, Volume2 } from "lucide-react";

function randomNote(pool: PitchClass[]): PitchClass {
  return pool[Math.floor(Math.random() * pool.length)];
}

export function NoteFinder() {
  const pool = useMemo(() => CHROMATIC_SHARP, []);
  const [target, setTarget] = useState<PitchClass>("A");
  const [score, setScore] = useState({ hits: 0, misses: 0 });
  const [feedback, setFeedback] = useState<string | null>(null);
  const [round, setRound] = useState(0);

  const next = useCallback(() => {
    setTarget(randomNote(pool));
    setFeedback(null);
    setRound((r) => r + 1);
  }, [pool]);

  useEffect(() => {
    next();
  }, [next]);

  async function handleGuess(string: number, fret: number) {
    const note = noteAtFret(TUNINGS.standard, string, fret);
    const correct = note.pitchClass === target;
    if (correct) {
      setScore((s) => ({ ...s, hits: s.hits + 1 }));
      setFeedback("Acertou!");
      await playPitchClass(note.pitchClass, note.octave);
      window.setTimeout(next, 550);
    } else {
      setScore((s) => ({ ...s, misses: s.misses + 1 }));
      setFeedback(
        `Era ${displayPitchClass(note.pitchClass)} — procure ${displayPitchClass(target)}`,
      );
    }
  }

  return (
    <div className="space-y-6">
      <div className="flex flex-wrap items-end justify-between gap-4">
        <div>
          <p className="text-xs uppercase tracking-wider text-[var(--muted)] mb-1">
            Encontre no braço
          </p>
          <p className="font-[family-name:var(--font-display)] text-5xl text-[var(--accent)]">
            {displayPitchClass(target)}
          </p>
        </div>
        <div className="flex items-center gap-4 text-sm text-[var(--muted)]">
          <span>
            Acertos <strong className="text-[var(--fg)]">{score.hits}</strong>
          </span>
          <span>
            Erros <strong className="text-[var(--fg)]">{score.misses}</strong>
          </span>
          <button
            type="button"
            onClick={() => playPitchClass(target, 3)}
            className="inline-flex items-center gap-1.5 rounded-md border border-[var(--line)] px-3 py-1.5 hover:bg-[var(--surface)]"
          >
            <Volume2 className="size-3.5" /> Ouvir
          </button>
          <button
            type="button"
            onClick={next}
            className="inline-flex items-center gap-1.5 rounded-md border border-[var(--line)] px-3 py-1.5 hover:bg-[var(--surface)]"
          >
            <RefreshCw className="size-3.5" /> Pular
          </button>
        </div>
      </div>

      {feedback && (
        <p
          className={`text-sm ${
            feedback.startsWith("Acertou")
              ? "text-[var(--accent)]"
              : "text-[var(--muted-strong)]"
          }`}
        >
          {feedback}
        </p>
      )}

      <ClickableBoard key={round} onGuess={handleGuess} />
    </div>
  );
}

function ClickableBoard({
  onGuess,
}: {
  onGuess: (string: number, fret: number) => void;
}) {
  const frets = 12;
  const cellW = 56;
  const cellH = 34;
  const nutW = 28;
  const labelW = 28;
  const width = labelW + nutW + frets * cellW;
  const height = 6 * cellH + 28;

  return (
    <div className="rounded-xl border border-[var(--line)] bg-[var(--surface)] p-3 sm:p-4 overflow-x-auto">
      <svg
        viewBox={`0 0 ${width} ${height}`}
        className="min-w-[720px] w-full h-auto"
      >
        <rect
          x={labelW}
          y={0}
          width={width - labelW}
          height={6 * cellH}
          fill="#1a1612"
          rx={6}
        />
        {Array.from({ length: frets + 1 }, (_, fret) => (
          <line
            key={fret}
            x1={labelW + nutW + fret * cellW}
            y1={4}
            x2={labelW + nutW + fret * cellW}
            y2={6 * cellH - 4}
            stroke={fret === 0 ? "#e8dcc8" : "#6b6358"}
            strokeWidth={fret === 0 ? 4 : 1.5}
          />
        ))}
        {Array.from({ length: 6 }, (_, i) => {
          const string = i + 1;
          const y = (string - 0.5) * cellH;
          return (
            <g key={string}>
              <text
                x={labelW / 2}
                y={y + 4}
                textAnchor="middle"
                fontSize={11}
                fill="#8a8276"
              >
                {["", "e", "B", "G", "D", "A", "E"][string]}
              </text>
              <line
                x1={labelW + 2}
                y1={y}
                x2={width - 4}
                y2={y}
                stroke="#c4b49a"
                strokeWidth={0.7 + (6 - string) * 0.35}
              />
              {Array.from({ length: frets + 1 }, (_, fret) => {
                const x =
                  fret === 0
                    ? labelW + nutW / 2
                    : labelW + nutW + (fret - 0.5) * cellW;
                return (
                  <circle
                    key={`${string}-${fret}`}
                    cx={x}
                    cy={y}
                    r={12}
                    fill="transparent"
                    className="cursor-pointer hover:fill-[color-mix(in_oklab,#e8a838_35%,transparent)]"
                    onClick={() => onGuess(string, fret)}
                  />
                );
              })}
            </g>
          );
        })}
      </svg>
      <p className="mt-2 text-xs text-[var(--muted)]">
        Clique em qualquer casa/corda. Dica: comece pelas cordas soltas e naturais.
      </p>
    </div>
  );
}
