export type PitchClass =
  | "C"
  | "C#"
  | "D"
  | "D#"
  | "E"
  | "F"
  | "F#"
  | "G"
  | "G#"
  | "A"
  | "A#"
  | "B";

export type AccidentalPreference = "sharp" | "flat";

export type IntervalQuality =
  | "P1"
  | "m2"
  | "M2"
  | "m3"
  | "M3"
  | "P4"
  | "A4"
  | "d5"
  | "P5"
  | "m6"
  | "M6"
  | "m7"
  | "M7"
  | "P8";

export interface Note {
  pitchClass: PitchClass;
  /** MIDI-like octave; guitar open low E is typically 2 */
  octave: number;
}

export interface FretPosition {
  string: number; // 1 (high E) .. 6 (low E)
  fret: number; // 0 = open
  pitchClass: PitchClass;
  octave: number;
  degree?: string;
}

export type ScaleId =
  | "major"
  | "natural-minor"
  | "harmonic-minor"
  | "melodic-minor"
  | "dorian"
  | "phrygian"
  | "lydian"
  | "mixolydian"
  | "locrian"
  | "pentatonic-major"
  | "pentatonic-minor"
  | "blues";

export interface ScaleDefinition {
  id: ScaleId;
  name: string;
  namePt: string;
  intervals: number[]; // semitones from root
  degrees: string[];
}

export type ChordQuality =
  | "maj"
  | "min"
  | "dim"
  | "aug"
  | "maj7"
  | "min7"
  | "dom7"
  | "min7b5"
  | "dim7";

export interface ChordDefinition {
  id: ChordQuality;
  name: string;
  namePt: string;
  symbol: string;
  intervals: number[];
  degrees: string[];
}

export type TuningName = "standard" | "drop-d" | "half-step-down";

export interface Tuning {
  id: TuningName;
  name: string;
  /** From string 6 (low) to string 1 (high) */
  notes: Note[];
}

export type CagedShape = "C" | "A" | "G" | "E" | "D";
