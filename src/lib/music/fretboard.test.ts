import { describe, expect, it } from "vitest";
import {
  annotateDegrees,
  buildFretboardMap,
  findPositionsForPitchClass,
  getOpenStringNote,
  noteAtFret,
  TUNINGS,
} from "./fretboard";
import { getScaleDegreeMap } from "./scales";

describe("fretboard", () => {
  it("afinação padrão EADGBE", () => {
    const t = TUNINGS.standard;
    expect(getOpenStringNote(t, 6)).toEqual({ pitchClass: "E", octave: 2 });
    expect(getOpenStringNote(t, 5)).toEqual({ pitchClass: "A", octave: 2 });
    expect(getOpenStringNote(t, 4)).toEqual({ pitchClass: "D", octave: 3 });
    expect(getOpenStringNote(t, 3)).toEqual({ pitchClass: "G", octave: 3 });
    expect(getOpenStringNote(t, 2)).toEqual({ pitchClass: "B", octave: 3 });
    expect(getOpenStringNote(t, 1)).toEqual({ pitchClass: "E", octave: 4 });
  });

  it("casa 5 da 6ª = A (corda 5 solta)", () => {
    expect(noteAtFret(TUNINGS.standard, 6, 5)).toEqual({
      pitchClass: "A",
      octave: 2,
    });
  });

  it("casa 4 da 3ª = B (corda 2 solta)", () => {
    expect(noteAtFret(TUNINGS.standard, 3, 4)).toEqual({
      pitchClass: "B",
      octave: 3,
    });
  });

  it("mapa do braço tem 6 cordas × (frets+1) posições", () => {
    const frets = 12;
    expect(buildFretboardMap(TUNINGS.standard, frets)).toHaveLength(
      6 * (frets + 1),
    );
  });

  it("encontra todas as posições de E até a 12ª casa", () => {
    const positions = findPositionsForPitchClass("E", TUNINGS.standard, 12);
    expect(positions.length).toBeGreaterThanOrEqual(6);
    expect(positions.every((p) => p.pitchClass === "E")).toBe(true);
    expect(positions.some((p) => p.string === 6 && p.fret === 0)).toBe(true);
    expect(positions.some((p) => p.string === 1 && p.fret === 0)).toBe(true);
  });

  it("anota graus da escala C maior no braço", () => {
    const map = getScaleDegreeMap("C", "major");
    const marked = annotateDegrees(
      buildFretboardMap(TUNINGS.standard, 5),
      map,
    );
    expect(marked.every((p) => p.degree)).toBe(true);
    const roots = marked.filter((p) => p.degree === "1");
    expect(roots.every((p) => p.pitchClass === "C")).toBe(true);
  });

  it("Drop D baixa a 6ª corda para D", () => {
    expect(getOpenStringNote(TUNINGS["drop-d"], 6).pitchClass).toBe("D");
    expect(getOpenStringNote(TUNINGS["drop-d"], 5).pitchClass).toBe("A");
  });
});
