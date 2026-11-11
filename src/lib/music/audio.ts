"use client";

import type { Note } from "./types";
import { noteToMidi } from "./notes";

let toneModule: typeof import("tone") | null = null;
let synth: import("tone").Synth | null = null;

async function getTone() {
  if (!toneModule) {
    toneModule = await import("tone");
  }
  return toneModule;
}

async function ensureSynth() {
  const Tone = await getTone();
  if (Tone.getContext().state !== "running") {
    await Tone.start();
  }
  if (!synth) {
    synth = new Tone.Synth({
      oscillator: { type: "triangle" },
      envelope: { attack: 0.01, decay: 0.2, sustain: 0.2, release: 0.4 },
    }).toDestination();
  }
  return { Tone, synth };
}

export function midiToFrequency(midi: number): number {
  return 440 * Math.pow(2, (midi - 69) / 12);
}

export async function playNote(note: Note, duration = "8n") {
  const { Tone, synth: active } = await ensureSynth();
  const freq = midiToFrequency(noteToMidi(note));
  active.triggerAttackRelease(freq, duration, Tone.now());
}

export async function playPitchClass(
  pitchClass: Note["pitchClass"],
  octave = 3,
  duration = "8n",
) {
  await playNote({ pitchClass, octave }, duration);
}

export async function playSequence(
  notes: Note[],
  gapSeconds = 0.22,
  duration = "8n",
) {
  const { Tone, synth: active } = await ensureSynth();
  const now = Tone.now() + 0.05;
  notes.forEach((note, i) => {
    const freq = midiToFrequency(noteToMidi(note));
    active.triggerAttackRelease(freq, duration, now + i * gapSeconds);
  });
}
