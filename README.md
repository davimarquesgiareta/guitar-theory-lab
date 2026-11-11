# Guitar Theory Lab

Aplicação web de teoria musical aplicada à guitarra — trilhas didáticas, braço interativo e treinos práticos.

## Stack

- Next.js (App Router) + TypeScript
- Tailwind CSS
- Zustand (progresso e laboratório)
- Tone.js (áudio)
- Lucide React

## Desenvolvimento

```bash
npm install
npm run dev
```

Abra [http://localhost:3000](http://localhost:3000).

## Testes

```bash
npm test          # unitários (teoria, currículo, regressão de rotas)
npm run build     # build de produção
npm run test:smoke # sobe next start e valida HTTP 200 em todas as rotas
npm run verify    # test + build + smoke (garantia completa)
```

## Estrutura

- `src/lib/music` — motor de teoria (notas, escalas, acordes, fretboard)
- `src/lib/curriculum` — trilhas e capítulos
- `src/components/fretboard` — braço interativo
- `src/app/trilhas` — conteúdo didático
- `src/app/laboratorio` — sandbox visual/auditivo
- `src/app/pratica` — exercícios

## Trilhas

1. **Fundamentos** — cromático, braço, intervalos, escala maior, tríades, campo harmônico
2. **CAGED & Braço Inteiro** — formas e conexões
3. **Escalas & Modos** — pentatônicas, blues, modos, menores avançadas
4. **Blues** — 12 compassos, massa de notas, toque jazzístico
5. **Jazz Essencial** — ii–V–I, extensões, chord tones
6. **Laboratório de Prática** — treinos guiados
