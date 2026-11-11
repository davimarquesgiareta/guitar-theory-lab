import { describe, expect, it } from "vitest";
import {
  CHROMATIC_SHARP,
  displayPitchClass,
  intervalSemitones,
  midiToNote,
  normalizePitchClass,
  noteToMidi,
  parseNoteName,
  transposeNote,
  transposePitchClass,
} from "./notes";

describe("notes", () => {
  it("tem exatamente 12 pitch classes", () => {
    expect(CHROMATIC_SHARP).toHaveLength(12);
    expect(new Set(CHROMATIC_SHARP).size).toBe(12);
  });

  it("normaliza enarmônicos para sustenidos", () => {
    expect(normalizePitchClass("Db")).toBe("C#");
    expect(normalizePitchClass("Eb")).toBe("D#");
    expect(normalizePitchClass("Bb")).toBe("A#");
    expect(normalizePitchClass("Cb")).toBe("B");
    expect(normalizePitchClass("E#")).toBe("F");
  });

  it("transpõe pitch classes cromaticamente", () => {
    expect(transposePitchClass("C", 7)).toBe("G");
    expect(transposePitchClass("A", 3)).toBe("C");
    expect(transposePitchClass("C", -1)).toBe("B");
    expect(transposePitchClass("F", 12)).toBe("F");
  });

  it("converte MIDI corretamente (A4 = 69)", () => {
    expect(noteToMidi({ pitchClass: "A", octave: 4 })).toBe(69);
    expect(midiToNote(69)).toEqual({ pitchClass: "A", octave: 4 });
    expect(midiToNote(noteToMidi({ pitchClass: "E", octave: 2 }))).toEqual({
      pitchClass: "E",
      octave: 2,
    });
  });

  it("calcula intervalo em semitons dentro da oitava", () => {
    expect(intervalSemitones("C", "G")).toBe(7);
    expect(intervalSemitones("A", "C")).toBe(3);
    expect(intervalSemitones("E", "F")).toBe(1);
    expect(intervalSemitones("B", "C")).toBe(1);
  });

  it("exibe bemóis quando pedido", () => {
    expect(displayPitchClass("C#", "flat")).toBe("Db");
    expect(displayPitchClass("A#", "flat")).toBe("Bb");
    expect(displayPitchClass("G", "flat")).toBe("G");
  });

  it("parseia nomes de nota com oitava", () => {
    expect(parseNoteName("E2")).toEqual({ pitchClass: "E", octave: 2 });
    expect(parseNoteName("C#4")).toEqual({ pitchClass: "C#", octave: 4 });
    expect(parseNoteName("Bb3")).toEqual({ pitchClass: "A#", octave: 3 });
  });

  it("transpõe notas preservando oitava relativa", () => {
    expect(transposeNote({ pitchClass: "B", octave: 3 }, 1)).toEqual({
      pitchClass: "C",
      octave: 4,
    });
  });
});
