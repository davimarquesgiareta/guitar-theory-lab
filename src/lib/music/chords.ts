import { transposePitchClass } from "./notes";
import type { ChordDefinition, ChordQuality, PitchClass } from "./types";

export const CHORDS: Record<ChordQuality, ChordDefinition> = {
  maj: {
    id: "maj",
    name: "Major triad",
    namePt: "Tríade maior",
    symbol: "",
    intervals: [0, 4, 7],
    degrees: ["1", "3", "5"],
  },
  min: {
    id: "min",
    name: "Minor triad",
    namePt: "Tríade menor",
    symbol: "m",
    intervals: [0, 3, 7],
    degrees: ["1", "b3", "5"],
  },
  dim: {
    id: "dim",
    name: "Diminished triad",
    namePt: "Tríade diminuta",
    symbol: "dim",
    intervals: [0, 3, 6],
    degrees: ["1", "b3", "b5"],
  },
  aug: {
    id: "aug",
    name: "Augmented triad",
    namePt: "Tríade aumentada",
    symbol: "aug",
    intervals: [0, 4, 8],
    degrees: ["1", "3", "#5"],
  },
  maj7: {
    id: "maj7",
    name: "Major 7",
    namePt: "Maior com sétima",
    symbol: "maj7",
    intervals: [0, 4, 7, 11],
    degrees: ["1", "3", "5", "7"],
  },
  min7: {
    id: "min7",
    name: "Minor 7",
    namePt: "Menor com sétima",
    symbol: "m7",
    intervals: [0, 3, 7, 10],
    degrees: ["1", "b3", "5", "b7"],
  },
  dom7: {
    id: "dom7",
    name: "Dominant 7",
    namePt: "Dominante com sétima",
    symbol: "7",
    intervals: [0, 4, 7, 10],
    degrees: ["1", "3", "5", "b7"],
  },
  min7b5: {
    id: "min7b5",
    name: "Half-diminished",
    namePt: "Meio-diminuto",
    symbol: "m7b5",
    intervals: [0, 3, 6, 10],
    degrees: ["1", "b3", "b5", "b7"],
  },
  dim7: {
    id: "dim7",
    name: "Diminished 7",
    namePt: "Diminuto com sétima",
    symbol: "dim7",
    intervals: [0, 3, 6, 9],
    degrees: ["1", "b3", "b5", "bb7"],
  },
};

/** Campo harmônico maior em tétrades */
export const MAJOR_DIATONIC_SEVENTHS: ChordQuality[] = [
  "maj7",
  "min7",
  "min7",
  "maj7",
  "dom7",
  "min7",
  "min7b5",
];

export const MAJOR_DIATONIC_ROMAN = ["I", "ii", "iii", "IV", "V", "vi", "viiø"] as const;

export function getChordNotes(
  root: PitchClass,
  quality: ChordQuality,
): PitchClass[] {
  return CHORDS[quality].intervals.map((s) => transposePitchClass(root, s));
}

export function getChordDegreeMap(
  root: PitchClass,
  quality: ChordQuality,
): Map<PitchClass, string> {
  const chord = CHORDS[quality];
  const map = new Map<PitchClass, string>();
  chord.intervals.forEach((semitone, i) => {
    map.set(transposePitchClass(root, semitone), chord.degrees[i]);
  });
  return map;
}

export function diatonicChordsInMajor(root: PitchClass): {
  roman: string;
  root: PitchClass;
  quality: ChordQuality;
  symbol: string;
}[] {
  const scaleDegrees = [0, 2, 4, 5, 7, 9, 11];
  return scaleDegrees.map((semi, i) => {
    const chordRoot = transposePitchClass(root, semi);
    const quality = MAJOR_DIATONIC_SEVENTHS[i];
    return {
      roman: MAJOR_DIATONIC_ROMAN[i],
      root: chordRoot,
      quality,
      symbol: `${chordRoot}${CHORDS[quality].symbol}`,
    };
  });
}
