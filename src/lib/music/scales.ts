import { transposePitchClass } from "./notes";
import type { PitchClass, ScaleDefinition, ScaleId } from "./types";

export const SCALES: Record<ScaleId, ScaleDefinition> = {
  major: {
    id: "major",
    name: "Major (Ionian)",
    namePt: "Maior (Jônico)",
    intervals: [0, 2, 4, 5, 7, 9, 11],
    degrees: ["1", "2", "3", "4", "5", "6", "7"],
  },
  "natural-minor": {
    id: "natural-minor",
    name: "Natural Minor (Aeolian)",
    namePt: "Menor natural (Eólio)",
    intervals: [0, 2, 3, 5, 7, 8, 10],
    degrees: ["1", "2", "b3", "4", "5", "b6", "b7"],
  },
  "harmonic-minor": {
    id: "harmonic-minor",
    name: "Harmonic Minor",
    namePt: "Menor harmônica",
    intervals: [0, 2, 3, 5, 7, 8, 11],
    degrees: ["1", "2", "b3", "4", "5", "b6", "7"],
  },
  "melodic-minor": {
    id: "melodic-minor",
    name: "Melodic Minor",
    namePt: "Menor melódica",
    intervals: [0, 2, 3, 5, 7, 9, 11],
    degrees: ["1", "2", "b3", "4", "5", "6", "7"],
  },
  dorian: {
    id: "dorian",
    name: "Dorian",
    namePt: "Dórico",
    intervals: [0, 2, 3, 5, 7, 9, 10],
    degrees: ["1", "2", "b3", "4", "5", "6", "b7"],
  },
  phrygian: {
    id: "phrygian",
    name: "Phrygian",
    namePt: "Frígio",
    intervals: [0, 1, 3, 5, 7, 8, 10],
    degrees: ["1", "b2", "b3", "4", "5", "b6", "b7"],
  },
  lydian: {
    id: "lydian",
    name: "Lydian",
    namePt: "Lídio",
    intervals: [0, 2, 4, 6, 7, 9, 11],
    degrees: ["1", "2", "3", "#4", "5", "6", "7"],
  },
  mixolydian: {
    id: "mixolydian",
    name: "Mixolydian",
    namePt: "Mixolídio",
    intervals: [0, 2, 4, 5, 7, 9, 10],
    degrees: ["1", "2", "3", "4", "5", "6", "b7"],
  },
  locrian: {
    id: "locrian",
    name: "Locrian",
    namePt: "Lócrio",
    intervals: [0, 1, 3, 5, 6, 8, 10],
    degrees: ["1", "b2", "b3", "4", "b5", "b6", "b7"],
  },
  "pentatonic-major": {
    id: "pentatonic-major",
    name: "Major Pentatonic",
    namePt: "Pentatônica maior",
    intervals: [0, 2, 4, 7, 9],
    degrees: ["1", "2", "3", "5", "6"],
  },
  "pentatonic-minor": {
    id: "pentatonic-minor",
    name: "Minor Pentatonic",
    namePt: "Pentatônica menor",
    intervals: [0, 3, 5, 7, 10],
    degrees: ["1", "b3", "4", "5", "b7"],
  },
  blues: {
    id: "blues",
    name: "Blues",
    namePt: "Escala de blues",
    intervals: [0, 3, 5, 6, 7, 10],
    degrees: ["1", "b3", "4", "b5", "5", "b7"],
  },
};

export function getScaleNotes(root: PitchClass, scaleId: ScaleId): PitchClass[] {
  const scale = SCALES[scaleId];
  return scale.intervals.map((semitone) => transposePitchClass(root, semitone));
}

export function getScaleDegreeMap(
  root: PitchClass,
  scaleId: ScaleId,
): Map<PitchClass, string> {
  const scale = SCALES[scaleId];
  const map = new Map<PitchClass, string>();
  scale.intervals.forEach((semitone, i) => {
    map.set(transposePitchClass(root, semitone), scale.degrees[i]);
  });
  return map;
}
