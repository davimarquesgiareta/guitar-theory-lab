import type { AccidentalPreference, Note, PitchClass } from "./types";

export const CHROMATIC_SHARP: PitchClass[] = [
  "C",
  "C#",
  "D",
  "D#",
  "E",
  "F",
  "F#",
  "G",
  "G#",
  "A",
  "A#",
  "B",
];

export const CHROMATIC_FLAT = [
  "C",
  "Db",
  "D",
  "Eb",
  "E",
  "F",
  "Gb",
  "G",
  "Ab",
  "A",
  "Bb",
  "B",
] as const;

const ENHARMONIC_TO_SHARP: Record<string, PitchClass> = {
  C: "C",
  "C#": "C#",
  Db: "C#",
  D: "D",
  "D#": "D#",
  Eb: "D#",
  E: "E",
  Fb: "E",
  "E#": "F",
  F: "F",
  "F#": "F#",
  Gb: "F#",
  G: "G",
  "G#": "G#",
  Ab: "G#",
  A: "A",
  "A#": "A#",
  Bb: "A#",
  B: "B",
  Cb: "B",
  "B#": "C",
};

export function normalizePitchClass(raw: string): PitchClass {
  const key = raw.trim();
  const mapped = ENHARMONIC_TO_SHARP[key];
  if (!mapped) {
    throw new Error(`Nota inválida: ${raw}`);
  }
  return mapped;
}

export function pitchClassIndex(pc: PitchClass): number {
  return CHROMATIC_SHARP.indexOf(pc);
}

export function displayPitchClass(
  pc: PitchClass,
  preference: AccidentalPreference = "sharp",
): string {
  if (preference === "sharp") return pc;
  const idx = pitchClassIndex(pc);
  return CHROMATIC_FLAT[idx];
}

export function transposePitchClass(
  pc: PitchClass,
  semitones: number,
): PitchClass {
  const idx = pitchClassIndex(pc);
  const next = ((idx + semitones) % 12 + 12) % 12;
  return CHROMATIC_SHARP[next];
}

export function noteToMidi(note: Note): number {
  return (note.octave + 1) * 12 + pitchClassIndex(note.pitchClass);
}

export function midiToNote(midi: number): Note {
  const pitchClass = CHROMATIC_SHARP[((midi % 12) + 12) % 12];
  const octave = Math.floor(midi / 12) - 1;
  return { pitchClass, octave };
}

export function transposeNote(note: Note, semitones: number): Note {
  return midiToNote(noteToMidi(note) + semitones);
}

export function intervalSemitones(from: PitchClass, to: PitchClass): number {
  return (pitchClassIndex(to) - pitchClassIndex(from) + 12) % 12;
}

export function parseNoteName(input: string): Note {
  const match = input.trim().match(/^([A-Ga-g])([#b]?)(-?\d+)$/);
  if (!match) {
    throw new Error(`Formato de nota inválido: ${input}`);
  }
  const [, letter, accidental, octaveStr] = match;
  const pitchClass = normalizePitchClass(`${letter.toUpperCase()}${accidental}`);
  return { pitchClass, octave: Number(octaveStr) };
}
