import { describe, expect, it } from "vitest";
import { CHORDS } from "@/lib/music/chords";
import { SCALES } from "@/lib/music/scales";
import { CHROMATIC_SHARP } from "@/lib/music/notes";
import { getChapter, getTrack, TRACKS } from "./tracks";
import type { LessonBlock } from "./types";

const INTERNAL_PATHS = new Set([
  "/pratica/notas",
  "/laboratorio",
  "/pratica",
  "/trilhas",
]);

describe("curriculum integrity", () => {
  it("tem trilhas com ids únicos", () => {
    const ids = TRACKS.map((t) => t.id);
    expect(ids.length).toBeGreaterThan(0);
    expect(new Set(ids).size).toBe(ids.length);
  });

  it("cada trilha tem capítulos com ids únicos e conteúdo", () => {
    for (const track of TRACKS) {
      expect(track.chapters.length).toBeGreaterThan(0);
      const chapterIds = track.chapters.map((c) => c.id);
      expect(new Set(chapterIds).size).toBe(chapterIds.length);

      for (const chapter of track.chapters) {
        expect(chapter.title.trim()).not.toBe("");
        expect(chapter.summary.trim()).not.toBe("");
        expect(chapter.durationMin).toBeGreaterThan(0);
        expect(chapter.blocks.length).toBeGreaterThan(0);
      }
    }
  });

  it("blocos de fretboard referenciam escalas/acordes válidos", () => {
    const pitchSet = new Set(CHROMATIC_SHARP);

    for (const track of TRACKS) {
      for (const chapter of track.chapters) {
        for (const block of chapter.blocks) {
          if (block.type !== "fretboard") continue;

          expect(pitchSet.has(block.root)).toBe(true);

          if (block.mode === "scale") {
            expect(block.scaleId).toBeDefined();
            expect(SCALES[block.scaleId!]).toBeDefined();
          }

          if (block.mode === "chord") {
            expect(block.chordQuality).toBeDefined();
            expect(CHORDS[block.chordQuality!]).toBeDefined();
          }

          if (block.mode === "notes") {
            expect(block.highlightNotes?.length).toBeGreaterThan(0);
            for (const note of block.highlightNotes ?? []) {
              expect(pitchSet.has(note)).toBe(true);
            }
          }
        }
      }
    }
  });

  it("links de prática internos apontam para rotas conhecidas", () => {
    for (const track of TRACKS) {
      for (const chapter of track.chapters) {
        if (!chapter.practiceHref) continue;
        expect(
          INTERNAL_PATHS.has(chapter.practiceHref) ||
            chapter.practiceHref.startsWith("/trilhas/"),
        ).toBe(true);
      }
    }
  });

  it("getTrack e getChapter resolvem todas as rotas geradas", () => {
    for (const track of TRACKS) {
      expect(getTrack(track.id)?.id).toBe(track.id);

      track.chapters.forEach((chapter, index) => {
        const data = getChapter(track.id, chapter.id);
        expect(data).not.toBeNull();
        expect(data!.chapter.id).toBe(chapter.id);
        expect(data!.index).toBe(index);
        expect(data!.prev?.id ?? null).toBe(
          track.chapters[index - 1]?.id ?? null,
        );
        expect(data!.next?.id ?? null).toBe(
          track.chapters[index + 1]?.id ?? null,
        );
      });
    }
  });

  it("todo bloco tem tipo suportado e texto não vazio quando aplicável", () => {
    const allowed = new Set([
      "text",
      "list",
      "tip",
      "practice",
      "fretboard",
    ]);

    for (const track of TRACKS) {
      for (const chapter of track.chapters) {
        for (const block of chapter.blocks as LessonBlock[]) {
          expect(allowed.has(block.type)).toBe(true);
          if (block.type === "text" || block.type === "tip" || block.type === "practice") {
            expect(block.body.trim().length).toBeGreaterThan(10);
          }
          if (block.type === "list") {
            expect(block.items.length).toBeGreaterThan(0);
          }
        }
      }
    }
  });
});
