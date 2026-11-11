"use client";

import { create } from "zustand";
import { persist } from "zustand/middleware";

interface ProgressState {
  completedChapters: string[];
  markComplete: (trackId: string, chapterId: string) => void;
  isComplete: (trackId: string, chapterId: string) => boolean;
  trackProgress: (trackId: string, totalChapters: number) => number;
}

function key(trackId: string, chapterId: string) {
  return `${trackId}:${chapterId}`;
}

export const useProgressStore = create<ProgressState>()(
  persist(
    (set, get) => ({
      completedChapters: [],
      markComplete: (trackId, chapterId) => {
        const k = key(trackId, chapterId);
        const current = get().completedChapters;
        if (current.includes(k)) return;
        set({ completedChapters: [...current, k] });
      },
      isComplete: (trackId, chapterId) =>
        get().completedChapters.includes(key(trackId, chapterId)),
      trackProgress: (trackId, totalChapters) => {
        if (totalChapters === 0) return 0;
        const done = get().completedChapters.filter((k) =>
          k.startsWith(`${trackId}:`),
        ).length;
        return Math.round((done / totalChapters) * 100);
      },
    }),
    { name: "gtl-progress" },
  ),
);
