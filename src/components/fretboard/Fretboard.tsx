"use client";

import { useMemo, useState } from "react";
import {
  annotateDegrees,
  buildFretboardMap,
  fretMarkerDots,
  TUNINGS,
} from "@/lib/music/fretboard";
import { getChordDegreeMap } from "@/lib/music/chords";
import { getScaleDegreeMap } from "@/lib/music/scales";
import { playNote } from "@/lib/music/audio";
import { displayPitchClass } from "@/lib/music/notes";
import type {
  AccidentalPreference,
  ChordQuality,
  FretPosition,
  PitchClass,
  ScaleId,
} from "@/lib/music/types";

export type FretboardMode = "scale" | "chord" | "notes" | "custom";

export interface FretboardProps {
  root?: PitchClass;
  mode?: FretboardMode;
  scaleId?: ScaleId;
  chordQuality?: ChordQuality;
  highlightNotes?: PitchClass[];
  frets?: number;
  accidental?: AccidentalPreference;
  interactive?: boolean;
  showDegrees?: boolean;
  className?: string;
}

const DEGREE_COLORS: Record<string, string> = {
  "1": "#e8a838",
  R: "#e8a838",
  "3": "#6db3a0",
  b3: "#6db3a0",
  "5": "#d4a574",
  b5: "#c45c3a",
  "#5": "#c45c3a",
  "7": "#8b9cf7",
  b7: "#8b9cf7",
  b9: "#c45c3a",
  "#9": "#c45c3a",
  "#11": "#c45c3a",
  "#4": "#c45c3a",
  "2": "#9ca3af",
  "4": "#9ca3af",
  "6": "#9ca3af",
  b2: "#9ca3af",
  b6: "#9ca3af",
};

function colorForDegree(degree?: string): string {
  if (!degree) return "#94a3b8";
  return DEGREE_COLORS[degree] ?? "#94a3b8";
}

export function Fretboard({
  root = "C",
  mode = "scale",
  scaleId = "major",
  chordQuality = "maj",
  highlightNotes,
  frets = 15,
  accidental = "sharp",
  interactive = true,
  showDegrees = true,
  className = "",
}: FretboardProps) {
  const [active, setActive] = useState<string | null>(null);

  const marked = useMemo(() => {
    const all = buildFretboardMap(TUNINGS.standard, frets);
    if (mode === "notes" || mode === "custom") {
      const set = new Set(highlightNotes ?? []);
      return all
        .filter((p) => set.has(p.pitchClass))
        .map((p) => ({
          ...p,
          degree: p.pitchClass === root ? "1" : undefined,
        }));
    }
    const degreeMap =
      mode === "chord"
        ? getChordDegreeMap(root, chordQuality)
        : getScaleDegreeMap(root, scaleId);
    return annotateDegrees(all, degreeMap);
  }, [root, mode, scaleId, chordQuality, highlightNotes, frets]);

  const markedLookup = useMemo(() => {
    const map = new Map<string, FretPosition>();
    for (const p of marked) {
      map.set(`${p.string}-${p.fret}`, p);
    }
    return map;
  }, [marked]);

  const cellW = 56;
  const cellH = 34;
  const nutW = 28;
  const labelW = 28;
  const width = labelW + nutW + frets * cellW;
  const height = 6 * cellH + 28;

  async function onPress(pos: FretPosition) {
    if (!interactive) return;
    setActive(`${pos.string}-${pos.fret}`);
    await playNote({ pitchClass: pos.pitchClass, octave: pos.octave });
  }

  return (
    <div className={`fretboard-wrap overflow-x-auto ${className}`}>
      <svg
        viewBox={`0 0 ${width} ${height}`}
        className="min-w-[720px] w-full h-auto"
        role="img"
        aria-label="Braço da guitarra interativo"
      >
        <defs>
          <linearGradient id="wood" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#2a2218" />
            <stop offset="50%" stopColor="#1a1612" />
            <stop offset="100%" stopColor="#241c14" />
          </linearGradient>
        </defs>

        <rect
          x={labelW}
          y={0}
          width={width - labelW}
          height={6 * cellH}
          fill="url(#wood)"
          rx={6}
        />

        {/* frets */}
        {Array.from({ length: frets + 1 }, (_, fret) => {
          const x = labelW + nutW + fret * cellW;
          return (
            <line
              key={`fret-${fret}`}
              x1={x}
              y1={4}
              x2={x}
              y2={6 * cellH - 4}
              stroke={fret === 0 ? "#e8dcc8" : "#6b6358"}
              strokeWidth={fret === 0 ? 4 : 1.5}
            />
          );
        })}

        {/* strings */}
        {Array.from({ length: 6 }, (_, i) => {
          const string = i + 1;
          const y = (string - 0.5) * cellH;
          return (
            <g key={`string-${string}`}>
              <text
                x={labelW / 2}
                y={y + 4}
                textAnchor="middle"
                className="fill-[var(--muted)]"
                fontSize={11}
                fontFamily="var(--font-mono)"
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
                opacity={0.85}
              />
            </g>
          );
        })}

        {/* inlays */}
        {Array.from({ length: frets }, (_, i) => {
          const fret = i + 1;
          const dots = fretMarkerDots(fret);
          if (!dots) return null;
          const x = labelW + nutW + (fret - 0.5) * cellW;
          if (dots === 2) {
            return (
              <g key={`dot-${fret}`}>
                <circle cx={x} cy={2 * cellH} r={4} fill="#4a4338" />
                <circle cx={x} cy={4 * cellH} r={4} fill="#4a4338" />
              </g>
            );
          }
          return (
            <circle
              key={`dot-${fret}`}
              cx={x}
              cy={3 * cellH}
              r={4}
              fill="#4a4338"
            />
          );
        })}

        {/* fret numbers */}
        {Array.from({ length: frets }, (_, i) => {
          const fret = i + 1;
          const x = labelW + nutW + (fret - 0.5) * cellW;
          return (
            <text
              key={`num-${fret}`}
              x={x}
              y={6 * cellH + 18}
              textAnchor="middle"
              fontSize={10}
              className="fill-[var(--muted)]"
            >
              {fret}
            </text>
          );
        })}

        {/* note markers */}
        {Array.from({ length: 6 }, (_, si) =>
          Array.from({ length: frets + 1 }, (_, fret) => {
            const string = si + 1;
            const pos = markedLookup.get(`${string}-${fret}`);
            if (!pos) return null;
            const x =
              fret === 0
                ? labelW + nutW / 2
                : labelW + nutW + (fret - 0.5) * cellW;
            const y = (string - 0.5) * cellH;
            const id = `${string}-${fret}`;
            const isRoot = pos.degree === "1" || pos.degree === "R";
            const fill = colorForDegree(pos.degree);
            const label = showDegrees && pos.degree
              ? pos.degree
              : displayPitchClass(pos.pitchClass, accidental);

            return (
              <g
                key={id}
                className={interactive ? "cursor-pointer" : undefined}
                onClick={() => onPress(pos)}
              >
                <circle
                  cx={x}
                  cy={y}
                  r={isRoot ? 12 : 11}
                  fill={fill}
                  opacity={active === id ? 1 : 0.92}
                  stroke={isRoot ? "#fff6e0" : "transparent"}
                  strokeWidth={isRoot ? 2 : 0}
                />
                <text
                  x={x}
                  y={y + 4}
                  textAnchor="middle"
                  fontSize={10}
                  fontWeight={700}
                  fill="#12100c"
                  fontFamily="var(--font-sans)"
                >
                  {label}
                </text>
              </g>
            );
          }),
        )}
      </svg>

      <div className="mt-3 flex flex-wrap gap-3 text-xs text-[var(--muted)]">
        <Legend color="#e8a838" label="Tônica (1)" />
        <Legend color="#6db3a0" label="3ª" />
        <Legend color="#d4a574" label="5ª" />
        <Legend color="#8b9cf7" label="7ª" />
        <Legend color="#c45c3a" label="Alterações / blue notes" />
      </div>
    </div>
  );
}

function Legend({ color, label }: { color: string; label: string }) {
  return (
    <span className="inline-flex items-center gap-1.5">
      <span
        className="inline-block size-2.5 rounded-full"
        style={{ background: color }}
      />
      {label}
    </span>
  );
}
