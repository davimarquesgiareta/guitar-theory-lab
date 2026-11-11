import { noteToMidi, midiToNote, pitchClassIndex } from "./notes";
import type {
  FretPosition,
  Note,
  PitchClass,
  Tuning,
  TuningName,
} from "./types";

export const TUNINGS: Record<TuningName, Tuning> = {
  standard: {
    id: "standard",
    name: "Padrão (E A D G B E)",
    notes: [
      { pitchClass: "E", octave: 2 }, // 6
      { pitchClass: "A", octave: 2 }, // 5
      { pitchClass: "D", octave: 3 }, // 4
      { pitchClass: "G", octave: 3 }, // 3
      { pitchClass: "B", octave: 3 }, // 2
      { pitchClass: "E", octave: 4 }, // 1
    ],
  },
  "drop-d": {
    id: "drop-d",
    name: "Drop D",
    notes: [
      { pitchClass: "D", octave: 2 },
      { pitchClass: "A", octave: 2 },
      { pitchClass: "D", octave: 3 },
      { pitchClass: "G", octave: 3 },
      { pitchClass: "B", octave: 3 },
      { pitchClass: "E", octave: 4 },
    ],
  },
  "half-step-down": {
    id: "half-step-down",
    name: "Meio tom abaixo",
    notes: [
      { pitchClass: "D#", octave: 2 },
      { pitchClass: "G#", octave: 2 },
      { pitchClass: "C#", octave: 3 },
      { pitchClass: "F#", octave: 3 },
      { pitchClass: "A#", octave: 3 },
      { pitchClass: "D#", octave: 4 },
    ],
  },
};

export function getOpenStringNote(
  tuning: Tuning,
  stringNumber: number,
): Note {
  // stringNumber: 1 (high) .. 6 (low)
  return tuning.notes[6 - stringNumber];
}

export function noteAtFret(
  tuning: Tuning,
  stringNumber: number,
  fret: number,
): Note {
  const open = getOpenStringNote(tuning, stringNumber);
  return midiToNote(noteToMidi(open) + fret);
}

export function buildFretboardMap(
  tuning: Tuning = TUNINGS.standard,
  frets = 15,
): FretPosition[] {
  const positions: FretPosition[] = [];
  for (let string = 6; string >= 1; string -= 1) {
    for (let fret = 0; fret <= frets; fret += 1) {
      const note = noteAtFret(tuning, string, fret);
      positions.push({
        string,
        fret,
        pitchClass: note.pitchClass,
        octave: note.octave,
      });
    }
  }
  return positions;
}

export function findPositionsForPitchClass(
  pitchClass: PitchClass,
  tuning: Tuning = TUNINGS.standard,
  frets = 15,
): FretPosition[] {
  return buildFretboardMap(tuning, frets).filter(
    (p) => p.pitchClass === pitchClass,
  );
}

export function annotateDegrees(
  positions: FretPosition[],
  degreeMap: Map<PitchClass, string>,
): FretPosition[] {
  return positions
    .filter((p) => degreeMap.has(p.pitchClass))
    .map((p) => ({
      ...p,
      degree: degreeMap.get(p.pitchClass),
    }));
}

export function isRootDegree(degree?: string): boolean {
  return degree === "1" || degree === "R";
}

export function stringLabel(stringNumber: number): string {
  const labels = ["", "e", "B", "G", "D", "A", "E"];
  return labels[stringNumber] ?? String(stringNumber);
}

export function fretMarkerDots(fret: number): number {
  if ([3, 5, 7, 9, 15, 17, 19, 21].includes(fret)) return 1;
  if (fret === 12 || fret === 24) return 2;
  return 0;
}

export function sortPositionsLowToHigh(a: FretPosition, b: FretPosition): number {
  const midiA = noteToMidi({ pitchClass: a.pitchClass, octave: a.octave });
  const midiB = noteToMidi({ pitchClass: b.pitchClass, octave: b.octave });
  return midiA - midiB || pitchClassIndex(a.pitchClass) - pitchClassIndex(b.pitchClass);
}
