import type { Track } from "./types";

export const TRACKS: Track[] = [
  {
    id: "fundamentos",
    title: "Fundamentos",
    tagline: "Do cromático ao campo harmônico",
    description:
      "Base sólida para guitarristas: notas, intervalos, escala maior, tríades e por que certos acordes soam bem juntos — sempre no braço.",
    level: "iniciante",
    accent: "#e8a838",
    chapters: [
      {
        id: "cromatico",
        title: "As 12 notas e o cromático",
        summary: "O alfabeto da música ocidental em 12 passos.",
        durationMin: 8,
        blocks: [
          {
            type: "text",
            title: "Tudo começa em 12",
            body: "Na música ocidental existem apenas 12 classes de altura (pitch classes). Elas se repetem em oitavas: C, C#, D, D#, E, F, F#, G, G#, A, A#, B — e de novo C. Na guitarra, cada casa sobe exatamente um semitom.",
          },
          {
            type: "list",
            title: "Ideias-chave",
            items: [
              "Semitom = 1 casa na guitarra",
              "Tom = 2 casas (dois semitons)",
              "C# e Db são a mesma altura física (enarmônicos); o nome depende do contexto da tonalidade",
              "E–F e B–C são os únicos pares de notas naturais separados por semitom",
            ],
          },
          {
            type: "fretboard",
            title: "Todas as notas C no braço",
            root: "C",
            mode: "notes",
            highlightNotes: ["C"],
          },
          {
            type: "practice",
            body: "Escolha uma nota (comece por E, A, D, G, B, C). Encontre-a em cada corda até a casa 12. Depois treine no módulo Memória do Braço.",
          },
          {
            type: "tip",
            body: "Memorizar o braço não é decorar 72 casas de uma vez. É reconhecer padrões: a mesma nota sobe 1 corda e 5 casas (exceto entre G e B, que sobe 4).",
          },
        ],
        practiceHref: "/pratica/notas",
      },
      {
        id: "braco",
        title: "Mapa do braço (afinação padrão)",
        summary: "E–A–D–G–B–E e como navegar entre cordas.",
        durationMin: 10,
        blocks: [
          {
            type: "text",
            title: "Afinação padrão",
            body: "Da 6ª (mais grossa) para a 1ª (mais fina): E2 – A2 – D3 – G3 – B3 – E4. Entre cordas adjacentes o intervalo é de 5ª justa (7 semitons), exceto entre G e B, que é 3ª maior (4 semitons).",
          },
          {
            type: "list",
            title: "Atalhos úteis",
            items: [
              "Casa 5 da 6ª = corda A solta",
              "Casa 5 da 5ª = corda D solta",
              "Casa 5 da 4ª = corda G solta",
              "Casa 4 da 3ª = corda B solta",
              "Casa 5 da 2ª = corda E aguda solta",
            ],
          },
          {
            type: "fretboard",
            title: "Notas das cordas soltas",
            root: "E",
            mode: "notes",
            highlightNotes: ["E", "A", "D", "G", "B"],
            frets: 5,
          },
          {
            type: "practice",
            body: "Toque as cordas soltas e diga o nome em voz alta. Depois toque a casa 5 (ou 4 entre G–B) e confira se soa igual à próxima corda solta.",
          },
        ],
      },
      {
        id: "intervalos",
        title: "Intervalos: a gramática do som",
        summary: "Distâncias entre notas e o caráter de cada uma.",
        durationMin: 12,
        blocks: [
          {
            type: "text",
            title: "O que é um intervalo?",
            body: "Intervalo é a distância entre duas notas. Na prática da guitarra, você sente intervalos como formas no braço — e ouve como tensão, estabilidade ou cor emocional.",
          },
          {
            type: "list",
            title: "Intervalos essenciais (a partir da tônica)",
            items: [
              "2ª menor (1 semitom) — dissonante, “apertada”",
              "2ª maior (2) — passo melódico natural",
              "3ª menor (3) — cor menor",
              "3ª maior (4) — cor maior",
              "4ª justa (5) — estável, aberta",
              "Tritono / 4ª aum. / 5ª dim. (6) — tensão máxima",
              "5ª justa (7) — esqueleto de potência (power chord)",
              "6ª / 7ª — cor e direção harmônica",
            ],
          },
          {
            type: "fretboard",
            title: "Intervalos a partir de A (casas baixas)",
            root: "A",
            mode: "scale",
            scaleId: "major",
            frets: 7,
          },
          {
            type: "tip",
            body: "Power chord = tônica + 5ª (+ oitava opcional). É o intervalo de 5ª justa “empilhado” — por isso soa tão estável em rock e metal.",
          },
          {
            type: "practice",
            body: "Escolha uma tônica na 6ª corda. Toque 3ª maior (4 casas acima na mesma corda? melhor: formas de 2 cordas) e 3ª menor. Compare o clima. Depois faça o mesmo com 5ª justa.",
          },
        ],
      },
      {
        id: "escala-maior",
        title: "Escala maior (fórmula WWHWWWH)",
        summary: "Construa qualquer escala maior sem decorar listas.",
        durationMin: 14,
        blocks: [
          {
            type: "text",
            title: "Uma fórmula, todas as tonalidades",
            body: "A escala maior é Tom–Tom–Semitom–Tom–Tom–Tom–Semitom (WWHWWWH). Em C: C D E F G A B. Em G a fórmula força F#. Em F, força Bb. Você não “lembra sustenidos” — a fórmula os cria.",
          },
          {
            type: "list",
            title: "Graus da escala maior",
            items: [
              "1 — tônica (casa)",
              "2 — segunda",
              "3 — terça maior (define o clima maior)",
              "4 — quarta",
              "5 — quinta (suporte)",
              "6 — sexta",
              "7 — sétima maior (puxa para a tônica)",
            ],
          },
          {
            type: "fretboard",
            title: "C maior no braço",
            root: "C",
            mode: "scale",
            scaleId: "major",
          },
          {
            type: "fretboard",
            title: "G maior no braço",
            root: "G",
            mode: "scale",
            scaleId: "major",
          },
          {
            type: "practice",
            body: "Toque C maior em uma posição de 2 oitavas. Depois desloque o mesmo desenho para G (tome a tônica como âncora). Ouça que o “clima” permanece — só muda a altura.",
          },
        ],
      },
      {
        id: "triades",
        title: "Tríades: como nascem os acordes",
        summary: "Empilhe 1–3–5 e obtenha maior, menor, diminuta e aumentada.",
        durationMin: 12,
        blocks: [
          {
            type: "text",
            title: "Acorde = seleção de graus",
            body: "Uma tríade maior é 1–3–5 da escala maior. Menor: 1–b3–5. Diminuta: 1–b3–b5. Aumentada: 1–3–#5. Se você sabe a escala e os intervalos, você constrói qualquer acorde a partir da tônica.",
          },
          {
            type: "list",
            title: "Fórmulas rápidas",
            items: [
              "Maior = M3 + m3 (4 + 3 semitons)",
              "Menor = m3 + M3 (3 + 4)",
              "Diminuta = m3 + m3 (3 + 3)",
              "Aumentada = M3 + M3 (4 + 4)",
            ],
          },
          {
            type: "fretboard",
            title: "Tríade de C maior",
            root: "C",
            mode: "chord",
            chordQuality: "maj",
          },
          {
            type: "fretboard",
            title: "Tríade de A menor",
            root: "A",
            mode: "chord",
            chordQuality: "min",
          },
          {
            type: "practice",
            body: "No braço, isole só as notas 1, 3 e 5 de C. Toque como arpejo. Depois baixe a 3ª um semitom e ouça C virar Cm sem mudar o resto.",
          },
        ],
      },
      {
        id: "campo-harmonico",
        title: "Campo harmônico maior",
        summary: "Os 7 acordes que “moram” numa tonalidade.",
        durationMin: 15,
        blocks: [
          {
            type: "text",
            title: "Por que G, C e D soam juntos?",
            body: "Porque em G maior eles são V, I e… espere: C é IV e D é V. Em qualquer tom maior, os graus geram acordes diatônicos previsíveis. Em tétrades: Imaj7, iim7, iiim7, IVmaj7, V7, vim7, viiø7.",
          },
          {
            type: "list",
            title: "Em C maior",
            items: [
              "I — Cmaj7",
              "ii — Dm7",
              "iii — Em7",
              "IV — Fmaj7",
              "V — G7",
              "vi — Am7",
              "viiø — Bm7b5",
            ],
          },
          {
            type: "fretboard",
            title: "Notas de C maior (o “alfabeto” dos acordes)",
            root: "C",
            mode: "scale",
            scaleId: "major",
          },
          {
            type: "tip",
            body: "Progressões pop/rock clássicas usam I–V–vi–IV. Em C: C–G–Am–F. Mesma família, só muda a ordem e o protagonismo.",
          },
          {
            type: "practice",
            body: "Escolha uma música que você já toca. Identifique a tonalidade e rotule os acordes com algarismos romanos. Isso treina ouvido harmônico mais do que decorar shapes.",
          },
        ],
      },
    ],
  },
  {
    id: "caged",
    title: "CAGED & Braço Inteiro",
    tagline: "Cinco formas, o braço inteiro",
    description:
      "Sistema CAGED para conectar acordes, arpejos e escalas em qualquer região — sem ficar preso na casa 0–3.",
    level: "iniciante",
    accent: "#6db3a0",
    chapters: [
      {
        id: "visao-geral",
        title: "O que é o CAGED?",
        summary: "C, A, G, E, D como âncoras móveis.",
        durationMin: 10,
        blocks: [
          {
            type: "text",
            title: "Cinco formatos open-chord viram mapa",
            body: "CAGED usa as formas abertas de C, A, G, E e D como moldes. Cada molde se desloca pelo braço. A tônica muda de lugar, mas a geometria do acorde permanece. Com isso você toca o mesmo acorde em 5 regiões e liga arpejos/escalas entre elas.",
          },
          {
            type: "list",
            title: "Ordem no braço (subindo)",
            items: [
              "Forma C → forma A → forma G → forma E → forma D → (volta à C uma oitava acima)",
              "A tônica “salta” de corda/casa de forma previsível entre os moldes",
              "Use CAGED para acordes, depois para arpejos, depois para escalas",
            ],
          },
          {
            type: "fretboard",
            title: "C maior (referência)",
            root: "C",
            mode: "chord",
            chordQuality: "maj",
          },
          {
            type: "practice",
            body: "Toque C na forma aberta. Depois encontre outro C usando a forma A (barra). Não precisa ser limpo ainda — só reconheça onde está a tônica.",
          },
        ],
      },
      {
        id: "forma-e-a",
        title: "Formas E e A (as mais práticas)",
        summary: "Barrados essenciais e âncoras de tônica.",
        durationMin: 12,
        blocks: [
          {
            type: "text",
            title: "Por que começar por E e A?",
            body: "A forma E (barra na 6ª corda) e a forma A (barra na 5ª) cobrem a maior parte do repertório rock/pop. A tônica na 6ª ou na 5ª vira GPS: se você sabe o nome da casa, sabe o acorde.",
          },
          {
            type: "fretboard",
            title: "A maior — tons do acorde",
            root: "A",
            mode: "chord",
            chordQuality: "maj",
          },
          {
            type: "fretboard",
            title: "E maior — tons do acorde",
            root: "E",
            mode: "chord",
            chordQuality: "maj",
          },
          {
            type: "practice",
            body: "Toque G na forma E (barra casa 3) e G na forma A (barra casa 10). Compare o voicing. Depois arpegie 1–3–5 em cada forma.",
          },
        ],
      },
      {
        id: "conectando",
        title: "Conectando formas e arpejos",
        summary: "Do acorde isolado ao braço contínuo.",
        durationMin: 12,
        blocks: [
          {
            type: "text",
            title: "Horizontal + vertical",
            body: "CAGED brilha quando você deixa de pensar “um shape” e passa a pensar “rede de tônicas”. Entre duas formas vizinhas há notas compartilhadas — use-as como pontes no improvisação.",
          },
          {
            type: "fretboard",
            title: "Arpejo de D maior pelo braço",
            root: "D",
            mode: "chord",
            chordQuality: "maj",
          },
          {
            type: "tip",
            body: "Treino mínimo: escolha um acorde (ex.: D). Toque só as tônicas em todas as cordas. Depois acrescente 3ªs. Depois 5ªs. O braço vira legível.",
          },
          {
            type: "practice",
            body: "Grave um drone de D. Improviso só com notas do arpejo D–F#–A por 2 minutos, mudando de região a cada 4 compassos.",
          },
        ],
      },
    ],
  },
  {
    id: "escalas-modos",
    title: "Escalas & Modos",
    tagline: "Pentatônicas, blues e modos gregos",
    description:
      "Do vocabulário pentatônico aos modos da escala maior e menores harmônica/melódica — sempre com visualização no braço.",
    level: "intermediario",
    accent: "#d97757",
    chapters: [
      {
        id: "pentatonicas",
        title: "Pentatônicas maior e menor",
        summary: "Cinco notas, máximo de musicalidade.",
        durationMin: 12,
        blocks: [
          {
            type: "text",
            title: "Por que a pentatônica funciona tão bem?",
            body: "A pentatônica menor (1 b3 4 5 b7) remove semitons “perigosos” da escala menor. Isso reduz atrito com a harmonia e facilita frases cantáveis. A pentatônica maior (1 2 3 5 6) é a relativa “clara” — e no braço é o mesmo desenho deslocado.",
          },
          {
            type: "fretboard",
            title: "A pentatônica menor",
            root: "A",
            mode: "scale",
            scaleId: "pentatonic-minor",
          },
          {
            type: "fretboard",
            title: "C pentatônica maior (relativa de Am)",
            root: "C",
            mode: "scale",
            scaleId: "pentatonic-major",
          },
          {
            type: "tip",
            body: "Am pentatônica e C pentatônica maior usam as mesmas notas. O que muda é qual nota você trata como centro gravitacional.",
          },
          {
            type: "practice",
            body: "Toque o box 1 de Am pentatônica. Depois enfatize C como nota de resolução e sinta o clima “maior”.",
          },
        ],
      },
      {
        id: "blues-scale",
        title: "Escala de blues e a blue note",
        summary: "A b5 que dá o tempero.",
        durationMin: 10,
        blocks: [
          {
            type: "text",
            title: "Pentatônica + b5",
            body: "A escala de blues adiciona a quarta aumentada / quinta diminuta (b5) à pentatônica menor: 1 b3 4 b5 5 b7. Essa nota cria atrito expressivo — bends, slides e “quase” resoluções.",
          },
          {
            type: "fretboard",
            title: "A blues",
            root: "A",
            mode: "scale",
            scaleId: "blues",
          },
          {
            type: "practice",
            body: "No box de Am, acrescente a b5. Alterne frases que evitam a blue note com frases que a usam como passagem para 4 ou 5.",
          },
        ],
      },
      {
        id: "modos-gregos",
        title: "Modos gregos (visão prática)",
        summary: "Sete cores a partir da mesma escala maior.",
        durationMin: 16,
        blocks: [
          {
            type: "text",
            title: "Modo = centro + fórmula",
            body: "Os modos gregos são a escala maior começando em graus diferentes — ou, de forma mais útil no improviso, fórmulas com alterações características: Dórico (b3, 6 natural), Lídio (#4), Mixolídio (b7), etc.",
          },
          {
            type: "list",
            title: "Assinatura rápida",
            items: [
              "Jônico — maior “padrão”",
              "Dórico — menor com 6ª maior (groove, funk, jazz modal)",
              "Frígio — b2 (sabor espanhol/metal)",
              "Lídio — #4 (sonho, fusion)",
              "Mixolídio — b7 (dominantes, rock)",
              "Eólio — menor natural",
              "Lócrio — b5 (tensão, raro como centro)",
            ],
          },
          {
            type: "fretboard",
            title: "D dórico",
            root: "D",
            mode: "scale",
            scaleId: "dorian",
          },
          {
            type: "fretboard",
            title: "G mixolídio",
            root: "G",
            mode: "scale",
            scaleId: "mixolydian",
          },
          {
            type: "practice",
            body: "Grave um groove em Dm7. Improviso em D dórico enfatizando F (b3) e B (6). Depois troque para D eólio (use Bb) e compare.",
          },
        ],
      },
      {
        id: "menores-avancadas",
        title: "Menor harmônica e melódica",
        summary: "Tensão clássica e combustível do jazz/fusion.",
        durationMin: 12,
        blocks: [
          {
            type: "text",
            title: "Por que alterar a menor?",
            body: "A menor natural gera V menor. Subindo a 7ª (menor harmônica) nasce um V maior/dominante — cadência forte. A menor melódica sobe 6ª e 7ª (ascendente), abrindo modos usados em jazz (como o alterado/superlócrio).",
          },
          {
            type: "fretboard",
            title: "A menor harmônica",
            root: "A",
            mode: "scale",
            scaleId: "harmonic-minor",
          },
          {
            type: "fretboard",
            title: "A menor melódica",
            root: "A",
            mode: "scale",
            scaleId: "melodic-minor",
          },
          {
            type: "practice",
            body: "Em Am, toque E7 (V) resolvendo em Am. Use G# da harmônica nas frases de aproximação ao A.",
          },
        ],
      },
    ],
  },
  {
    id: "blues",
    title: "Blues",
    tagline: "Do 12 compassos ao blues jazzístico",
    description:
      "Forma, harmonia dominante, massa de notas e vocabulário para soar blues de verdade — não só “pentatônica em cima”.",
    level: "intermediario",
    accent: "#c45c3a",
    chapters: [
      {
        id: "12-compassos",
        title: "Blues de 12 compassos",
        summary: "I7–IV7–V7 e o turnaround.",
        durationMin: 12,
        blocks: [
          {
            type: "text",
            title: "A forma que define o estilo",
            body: "O blues tradicional de 12 compassos gira em dominantes: I7, IV7 e V7. Mesmo quando a tonalidade “é maior”, os acordes com b7 criam o atrito característico. O turnaround (compassos 11–12) prepara a volta ao I.",
          },
          {
            type: "list",
            title: "Mapa clássico em A",
            items: [
              "Compassos 1–4: A7",
              "5–6: D7 · 7–8: A7",
              "9: E7 · 10: D7 · 11–12: A7 (turnaround com E7)",
              "Variação quick-change: compasso 2 já vai para IV7",
            ],
          },
          {
            type: "fretboard",
            title: "A7 — tons do acorde",
            root: "A",
            mode: "chord",
            chordQuality: "dom7",
          },
          {
            type: "practice",
            body: "Toque só o baixo da progressão (tônicas) contando 12 compassos. Depois acrescente a 7ª menor de cada acorde no tempo forte.",
          },
        ],
      },
      {
        id: "massa-notas",
        title: "Massa de notas do blues",
        summary: "Misturar penta menor e maior sobre I7.",
        durationMin: 12,
        blocks: [
          {
            type: "text",
            title: "Maior + menor no mesmo tom",
            body: "Sobre A7, guitarristas misturam A pentatônica menor e A pentatônica maior. A 3ª maior (C#) “conversa” com a harmonia dominante; a b3 (C) cria o bend clássico em direção à 3ª maior.",
          },
          {
            type: "fretboard",
            title: "A penta menor",
            root: "A",
            mode: "scale",
            scaleId: "pentatonic-minor",
          },
          {
            type: "fretboard",
            title: "A penta maior",
            root: "A",
            mode: "scale",
            scaleId: "pentatonic-major",
          },
          {
            type: "tip",
            body: "No IV7 (D7), a 3ª maior do I (C#) vira nota de tensão — muitos players voltam a enfatizar a penta menor ou chord tones do IV.",
          },
          {
            type: "practice",
            body: "Em A7 estático, alterne 2 compassos só com penta menor e 2 com penta maior. Depois misture no mesmo fraseado.",
          },
        ],
      },
      {
        id: "blues-jazz",
        title: "Toque jazzístico no blues",
        summary: "ii–V, diminutos de passagem e quick-change.",
        durationMin: 12,
        blocks: [
          {
            type: "text",
            title: "Mesma forma, mais movimento",
            body: "O blues jazzístico mantém 12 compassos, mas enriquece: ii–V para o IV e para o I, diminutos cromáticos e substituições. O solista responde mirando chord tones nas mudanças.",
          },
          {
            type: "list",
            title: "Alvos úteis em A blues",
            items: [
              "Compasso 4 → Em7–A7 (ii–V para D7)",
              "Compasso 8/9 → Bm7–E7 (ii–V para A)",
              "Diminuto de passagem: C#dim7 entre A7 e D7 / Bm7",
            ],
          },
          {
            type: "fretboard",
            title: "E7 (V do A)",
            root: "E",
            mode: "chord",
            chordQuality: "dom7",
          },
          {
            type: "practice",
            body: "Na virada para D7, toque arpejo de Em7 → A7 → D7. Lento, metrônomo 60, priorizando a 3ª e a 7ª de cada acorde.",
          },
        ],
      },
    ],
  },
  {
    id: "jazz",
    title: "Jazz Essencial",
    tagline: "ii–V–I, tétrades e tensão",
    description:
      "Progressões centrais do jazz, voicings úteis na guitarra e o hábito de mirar notas do acorde.",
    level: "avancado",
    accent: "#7b8cff",
    chapters: [
      {
        id: "ii-v-i",
        title: "ii–V–I maior e menor",
        summary: "A progressão mais importante do jazz.",
        durationMin: 14,
        blocks: [
          {
            type: "text",
            title: "Cadência com destino",
            body: "ii–V–I é a maneira jazzística de caminhar para casa. Em C: Dm7–G7–Cmaj7. No menor: Dm7b5–G7alt–Cm7. O improviso melhora radicalmente quando você trata cada acorde como destino momentâneo de notas-alvo.",
          },
          {
            type: "fretboard",
            title: "Dm7",
            root: "D",
            mode: "chord",
            chordQuality: "min7",
          },
          {
            type: "fretboard",
            title: "G7",
            root: "G",
            mode: "chord",
            chordQuality: "dom7",
          },
          {
            type: "fretboard",
            title: "Cmaj7",
            root: "C",
            mode: "chord",
            chordQuality: "maj7",
          },
          {
            type: "practice",
            body: "Ciclo: toque arpejo de Dm7 (2 tempos), G7 (2 tempos), Cmaj7 (4 tempos). Só chord tones. Depois adicione approach cromático na 3ª de cada acorde.",
          },
        ],
      },
      {
        id: "extensoes",
        title: "Extensões e alterações",
        summary: "9, 11, 13 e o tempero do V7.",
        durationMin: 12,
        blocks: [
          {
            type: "text",
            title: "Além da tétrade",
            body: "Extensões (9, 11, 13) são notas da escala “acima” da 7ª. Em dominantes, alterações (b9 #9 #11 b13) aumentam tensão antes da resolução. Na guitarra, escolha voicings que cabem na mão — nem toda extensão precisa soar ao mesmo tempo.",
          },
          {
            type: "list",
            title: "Guia rápido",
            items: [
              "maj7 ama 9 e #11 (lídio)",
              "m7 ama 9 e 11",
              "7 (dominante) aceita 9/13 “doces” ou alterações “picantes”",
              "Tri-sub: troque G7 por Db7 (mesmo tritono 3–b7)",
            ],
          },
          {
            type: "fretboard",
            title: "G mixolídio (base do G7 diatônico)",
            root: "G",
            mode: "scale",
            scaleId: "mixolydian",
          },
          {
            type: "practice",
            body: "No V7, toque a tétrade e acrescente a 9ª como nota de passagem. Depois experimente b9 resolvendo na 5ª do I.",
          },
        ],
      },
      {
        id: "chord-tones",
        title: "Chord tone soloing",
        summary: "Mirar 1–3–5–7 no tempo forte.",
        durationMin: 12,
        blocks: [
          {
            type: "text",
            title: "Improviso com endereço",
            body: "Target notes: no ataque do acorde, priorize uma nota da tétrade (especialmente 3ª e 7ª, que definem qualidade). Entre os alvos, use escala, cromáticos e enclosures. Isso soa “dentro” mesmo com frases ousadas.",
          },
          {
            type: "tip",
            body: "Voice leading: a 7ª de um acorde frequentemente resolve na 3ª do próximo (ex.: C de Dm7 → B de G7 → B/C de Cmaj7).",
          },
          {
            type: "fretboard",
            title: "Cmaj7 — mapa de alvos",
            root: "C",
            mode: "chord",
            chordQuality: "maj7",
          },
          {
            type: "practice",
            body: "Backing ii–V–I lento. Regra: a primeira nota de cada acorde deve ser 3ª ou 7ª. Grave-se e confira.",
          },
        ],
      },
    ],
  },
  {
    id: "pratica",
    title: "Laboratório de Prática",
    tagline: "Treinos guiados e desafios",
    description:
      "Exercícios interativos para fixar o braço, ouvido e precisão — o complemento das trilhas teóricas.",
    level: "iniciante",
    accent: "#e8a838",
    chapters: [
      {
        id: "memoria-braco",
        title: "Memória do braço",
        summary: "Ache a nota sorteada no tempo.",
        durationMin: 8,
        blocks: [
          {
            type: "text",
            title: "Treino ativo > leitura passiva",
            body: "Você fixa o mapa do braço quando busca notas sob leve pressão de tempo. Comece com cordas soltas e naturais; depois inclua sustenidos e casas acima da 12.",
          },
          {
            type: "practice",
            body: "Abra o exercício Memória do Braço e faça 3 rounds de 60 segundos. Anote quais notas erram mais — treine só elas amanhã.",
          },
        ],
        practiceHref: "/pratica/notas",
      },
      {
        id: "laboratorio",
        title: "Laboratório visual",
        summary: "Explore escalas e acordes no fretboard livre.",
        durationMin: 10,
        blocks: [
          {
            type: "text",
            title: "Sandbox musical",
            body: "Use o laboratório para combinar tônica + escala/acorde e ouvir o resultado. É o lugar para responder “e se eu tocar Lídio em D?” sem medo.",
          },
          {
            type: "practice",
            body: "No laboratório, compare A eólio vs A dórico vs A menor harmônica. Liste 2 frases que só funcionam bem em cada uma.",
          },
        ],
        practiceHref: "/laboratorio",
      },
    ],
  },
];

export function getTrack(trackId: string) {
  return TRACKS.find((t) => t.id === trackId);
}

export function getChapter(trackId: string, chapterId: string) {
  const track = getTrack(trackId);
  if (!track) return null;
  const index = track.chapters.findIndex((c) => c.id === chapterId);
  if (index < 0) return null;
  return {
    track,
    chapter: track.chapters[index],
    prev: track.chapters[index - 1] ?? null,
    next: track.chapters[index + 1] ?? null,
    index,
  };
}

export function levelLabel(level: Track["level"]): string {
  switch (level) {
    case "iniciante":
      return "Iniciante";
    case "intermediario":
      return "Intermediário";
    case "avancado":
      return "Avançado";
  }
}
