import { describe, expect, it } from "vitest";
import {
  diatonicChordsInMajor,
  getChordNotes,
  MAJOR_DIATONIC_SEVENTHS,
} from "./chords";

describe("chords", () => {
  it("tríade maior = 1 3 5", () => {
    expect(getChordNotes("C", "maj")).toEqual(["C", "E", "G"]);
    expect(getChordNotes("A", "maj")).toEqual(["A", "C#", "E"]);
  });

  it("tríade menor = 1 b3 5", () => {
    expect(getChordNotes("A", "min")).toEqual(["A", "C", "E"]);
    expect(getChordNotes("E", "min")).toEqual(["E", "G", "B"]);
  });

  it("tétrades principais", () => {
    expect(getChordNotes("C", "maj7")).toEqual(["C", "E", "G", "B"]);
    expect(getChordNotes("D", "min7")).toEqual(["D", "F", "A", "C"]);
    expect(getChordNotes("G", "dom7")).toEqual(["G", "B", "D", "F"]);
    expect(getChordNotes("B", "min7b5")).toEqual(["B", "D", "F", "A"]);
  });

  it("campo harmônico de C maior em tétrades", () => {
    const field = diatonicChordsInMajor("C");
    expect(field.map((c) => c.symbol)).toEqual([
      "Cmaj7",
      "Dm7",
      "Em7",
      "Fmaj7",
      "G7",
      "Am7",
      "Bm7b5",
    ]);
    expect(field.map((c) => c.quality)).toEqual(MAJOR_DIATONIC_SEVENTHS);
  });

  it("campo harmônico de G maior começa em Gmaj7 e tem V = D7", () => {
    const field = diatonicChordsInMajor("G");
    expect(field[0].symbol).toBe("Gmaj7");
    expect(field[4].symbol).toBe("D7");
    expect(field[5].symbol).toBe("Em7");
  });
});
