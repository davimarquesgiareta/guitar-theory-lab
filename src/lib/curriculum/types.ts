import type { ChordQuality, PitchClass, ScaleId } from "@/lib/music/types";

export type TrackLevel = "iniciante" | "intermediario" | "avancado";

export type LessonBlock =
  | { type: "text"; title?: string; body: string }
  | { type: "list"; title?: string; items: string[] }
  | { type: "tip"; body: string }
  | { type: "practice"; body: string }
  | {
      type: "fretboard";
      title?: string;
      root: PitchClass;
      mode: "scale" | "chord" | "notes";
      scaleId?: ScaleId;
      chordQuality?: ChordQuality;
      highlightNotes?: PitchClass[];
      frets?: number;
    };

export interface Chapter {
  id: string;
  title: string;
  summary: string;
  durationMin: number;
  blocks: LessonBlock[];
  practiceHref?: string;
}

export interface Track {
  id: string;
  title: string;
  tagline: string;
  description: string;
  level: TrackLevel;
  accent: string;
  chapters: Chapter[];
}
