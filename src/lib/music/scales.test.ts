import { describe, expect, it } from "vitest";
import { getScaleNotes, SCALES } from "./scales";

describe("scales", () => {
  it("C maior contém só naturais", () => {
    expect(getScaleNotes("C", "major")).toEqual([
      "C",
      "D",
      "E",
      "F",
      "G",
      "A",
      "B",
    ]);
  });

  it("G maior inclui F#", () => {
    expect(getScaleNotes("G", "major")).toEqual([
      "G",
      "A",
      "B",
      "C",
      "D",
      "E",
      "F#",
    ]);
  });

  it("F maior inclui Bb (A# no sistema interno)", () => {
    expect(getScaleNotes("F", "major")).toEqual([
      "F",
      "G",
      "A",
      "A#",
      "C",
      "D",
      "E",
    ]);
  });

  it("A menor natural é relativa de C maior", () => {
    expect(getScaleNotes("A", "natural-minor")).toEqual([
      "A",
      "B",
      "C",
      "D",
      "E",
      "F",
      "G",
    ]);
  });

  it("A pentatônica menor e C pentatônica maior compartilham notas", () => {
    const aMinor = new Set(getScaleNotes("A", "pentatonic-minor"));
    const cMajor = new Set(getScaleNotes("C", "pentatonic-major"));
    expect(aMinor).toEqual(cMajor);
  });

  it("escala de blues adiciona b5 à penta menor", () => {
    expect(getScaleNotes("A", "blues")).toEqual([
      "A",
      "C",
      "D",
      "D#",
      "E",
      "G",
    ]);
  });

  it("A menor harmônica sobe a 7ª", () => {
    expect(getScaleNotes("A", "harmonic-minor")).toEqual([
      "A",
      "B",
      "C",
      "D",
      "E",
      "F",
      "G#",
    ]);
  });

  it("todas as escalas têm intervals alinhados aos degrees", () => {
    for (const scale of Object.values(SCALES)) {
      expect(scale.intervals).toHaveLength(scale.degrees.length);
      expect(scale.intervals[0]).toBe(0);
      expect(new Set(scale.intervals).size).toBe(scale.intervals.length);
    }
  });

  it("fórmulas de modos batem com a assinatura clássica", () => {
    expect(getScaleNotes("D", "dorian")).toEqual([
      "D",
      "E",
      "F",
      "G",
      "A",
      "B",
      "C",
    ]);
    expect(getScaleNotes("G", "mixolydian")).toEqual([
      "G",
      "A",
      "B",
      "C",
      "D",
      "E",
      "F",
    ]);
    expect(getScaleNotes("F", "lydian")).toEqual([
      "F",
      "G",
      "A",
      "B",
      "C",
      "D",
      "E",
    ]);
  });
});
