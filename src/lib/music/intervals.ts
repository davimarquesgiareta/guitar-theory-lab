import type { IntervalQuality } from "./types";

export const INTERVAL_SEMITONES: Record<IntervalQuality, number> = {
  P1: 0,
  m2: 1,
  M2: 2,
  m3: 3,
  M3: 4,
  P4: 5,
  A4: 6,
  d5: 6,
  P5: 7,
  m6: 8,
  M6: 9,
  m7: 10,
  M7: 11,
  P8: 12,
};

export const INTERVAL_LABELS_PT: Record<IntervalQuality, string> = {
  P1: "Uníssono",
  m2: "2ª menor",
  M2: "2ª maior",
  m3: "3ª menor",
  M3: "3ª maior",
  P4: "4ª justa",
  A4: "4ª aumentada",
  d5: "5ª diminuta",
  P5: "5ª justa",
  m6: "6ª menor",
  M6: "6ª maior",
  m7: "7ª menor",
  M7: "7ª maior",
  P8: "Oitava",
};

export function qualityFromSemitones(semitones: number): IntervalQuality | null {
  const n = ((semitones % 12) + 12) % 12;
  const map: Record<number, IntervalQuality> = {
    0: "P1",
    1: "m2",
    2: "M2",
    3: "m3",
    4: "M3",
    5: "P4",
    6: "A4",
    7: "P5",
    8: "m6",
    9: "M6",
    10: "m7",
    11: "M7",
  };
  return map[n] ?? null;
}
