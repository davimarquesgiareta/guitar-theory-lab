"use client";

import { Fretboard } from "@/components/fretboard/Fretboard";
import { CHORDS } from "@/lib/music/chords";
import { SCALES } from "@/lib/music/scales";
import { CHROMATIC_SHARP, displayPitchClass } from "@/lib/music/notes";
import { playPitchClass, playSequence } from "@/lib/music/audio";
import { getScaleNotes } from "@/lib/music/scales";
import { getChordNotes } from "@/lib/music/chords";
import { useLabStore } from "@/store/labStore";
import type { ChordQuality, PitchClass, ScaleId } from "@/lib/music/types";
import { Play } from "lucide-react";

export function LabStudio() {
  const {
    root,
    mode,
    scaleId,
    chordQuality,
    frets,
    setRoot,
    setMode,
    setScaleId,
    setChordQuality,
    setFrets,
  } = useLabStore();

  async function playAll() {
    const pcs =
      mode === "scale"
        ? getScaleNotes(root, scaleId)
        : getChordNotes(root, chordQuality);
    const notes = pcs.map((pitchClass, i) => ({
      pitchClass,
      octave: 3 + Math.floor(i / 7),
    }));
    await playSequence(notes, mode === "chord" ? 0.35 : 0.18);
  }

  return (
    <div className="space-y-6">
      <div className="flex flex-wrap gap-3">
        <Field label="Tônica">
          <select
            value={root}
            onChange={(e) => setRoot(e.target.value as PitchClass)}
            className="select"
          >
            {CHROMATIC_SHARP.map((n) => (
              <option key={n} value={n}>
                {displayPitchClass(n)}
              </option>
            ))}
          </select>
        </Field>

        <Field label="Modo">
          <select
            value={mode}
            onChange={(e) => setMode(e.target.value as "scale" | "chord")}
            className="select"
          >
            <option value="scale">Escala</option>
            <option value="chord">Acorde / arpejo</option>
          </select>
        </Field>

        {mode === "scale" ? (
          <Field label="Escala">
            <select
              value={scaleId}
              onChange={(e) => setScaleId(e.target.value as ScaleId)}
              className="select"
            >
              {Object.values(SCALES).map((s) => (
                <option key={s.id} value={s.id}>
                  {s.namePt}
                </option>
              ))}
            </select>
          </Field>
        ) : (
          <Field label="Qualidade">
            <select
              value={chordQuality}
              onChange={(e) => setChordQuality(e.target.value as ChordQuality)}
              className="select"
            >
              {Object.values(CHORDS).map((c) => (
                <option key={c.id} value={c.id}>
                  {c.namePt} ({c.symbol || "maj"})
                </option>
              ))}
            </select>
          </Field>
        )}

        <Field label="Casas">
          <select
            value={frets}
            onChange={(e) => setFrets(Number(e.target.value))}
            className="select"
          >
            {[7, 12, 15, 17].map((n) => (
              <option key={n} value={n}>
                0–{n}
              </option>
            ))}
          </select>
        </Field>

        <div className="flex items-end gap-2">
          <button
            type="button"
            onClick={() => playPitchClass(root, 3, "4n")}
            className="btn-secondary"
          >
            Tônica
          </button>
          <button type="button" onClick={playAll} className="btn-primary">
            <Play className="size-3.5" /> Ouvir
          </button>
        </div>
      </div>

      <div className="rounded-xl border border-[var(--line)] bg-[var(--surface)] p-3 sm:p-4">
        <Fretboard
          root={root}
          mode={mode}
          scaleId={scaleId}
          chordQuality={chordQuality}
          frets={frets}
        />
      </div>
    </div>
  );
}

function Field({
  label,
  children,
}: {
  label: string;
  children: React.ReactNode;
}) {
  return (
    <label className="flex flex-col gap-1.5 text-xs text-[var(--muted)]">
      {label}
      {children}
    </label>
  );
}
