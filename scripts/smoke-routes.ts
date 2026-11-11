/**
 * Smoke test pós-build: sobe `next start`, visita rotas críticas e encerra.
 */
import { spawn, type ChildProcess } from "node:child_process";
import { setTimeout as delay } from "node:timers/promises";
import { TRACKS } from "../src/lib/curriculum/tracks";

const PORT = process.env.SMOKE_PORT || "3010";
const BASE = `http://127.0.0.1:${PORT}`;

const routes = [
  "/",
  "/trilhas",
  "/laboratorio",
  "/pratica",
  "/pratica/notas",
  ...TRACKS.map((t) => `/trilhas/${t.id}`),
  ...TRACKS.flatMap((t) =>
    t.chapters.map((c) => `/trilhas/${t.id}/${c.id}`),
  ),
];

function startServer(): { child: ChildProcess; getOutput: () => string } {
  const child = spawn("npx", ["next", "start", "-p", PORT], {
    stdio: ["ignore", "pipe", "pipe"],
    env: { ...process.env, PORT },
  });

  let output = "";
  child.stdout?.on("data", (chunk: Buffer) => {
    output += chunk.toString();
  });
  child.stderr?.on("data", (chunk: Buffer) => {
    output += chunk.toString();
  });

  return { child, getOutput: () => output };
}

async function waitForServer(timeoutMs = 25000) {
  const start = Date.now();
  while (Date.now() - start < timeoutMs) {
    try {
      const res = await fetch(BASE);
      if (res.ok || res.status >= 400) return;
    } catch {
      // ainda subindo
    }
    await delay(250);
  }
  throw new Error(`Servidor não respondeu em ${timeoutMs}ms (${BASE})`);
}

async function main() {
  const { child, getOutput } = startServer();

  const shutdown = () => {
    if (!child.killed) child.kill("SIGTERM");
  };

  process.on("exit", shutdown);
  process.on("SIGINT", () => {
    shutdown();
    process.exit(130);
  });

  try {
    await waitForServer();

    const failures: string[] = [];
    for (const route of routes) {
      try {
        const res = await fetch(`${BASE}${route}`);
        if (res.status !== 200) {
          failures.push(`${route} → HTTP ${res.status}`);
        }
      } catch (err) {
        const message = err instanceof Error ? err.message : String(err);
        failures.push(`${route} → ${message}`);
      }
    }

    if (failures.length) {
      console.error(
        "Smoke falhou:\n" + failures.map((f) => `  - ${f}`).join("\n"),
      );
      console.error("\nLog do servidor:\n" + getOutput());
      shutdown();
      await delay(400);
      process.exit(1);
    }

    console.log(`Smoke OK: ${routes.length} rotas com HTTP 200`);
    shutdown();
    await delay(400);
    process.exit(0);
  } catch (err) {
    console.error(err instanceof Error ? err.message : err);
    console.error(getOutput());
    shutdown();
    await delay(400);
    process.exit(1);
  }
}

main();
