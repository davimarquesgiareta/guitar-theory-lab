"use client";

import { create } from "zustand";
import type { ChordQuality, PitchClass, ScaleId } from "@/lib/music/types";

export type LabMode = "scale" | "chord";

interface LabState {
  root: PitchClass;
  mode: LabMode;
  scaleId: ScaleId;
  chordQuality: ChordQuality;
  frets: number;
  setRoot: (root: PitchClass) => void;
  setMode: (mode: LabMode) => void;
  setScaleId: (scaleId: ScaleId) => void;
  setChordQuality: (quality: ChordQuality) => void;
  setFrets: (frets: number) => void;
}

export const useLabStore = create<LabState>((set) => ({
  root: "A",
  mode: "scale",
  scaleId: "pentatonic-minor",
  chordQuality: "dom7",
  frets: 15,
  setRoot: (root) => set({ root }),
  setMode: (mode) => set({ mode }),
  setScaleId: (scaleId) => set({ scaleId }),
  setChordQuality: (chordQuality) => set({ chordQuality }),
  setFrets: (frets) => set({ frets }),
}));
