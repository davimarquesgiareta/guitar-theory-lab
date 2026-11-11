# AI Skill: Especialista em Teoria Musical e Desenvolvimento Frontend para Guitarra

## 1. Contexto e Objetivo do Projeto

Este projeto é um aplicativo web **Frontend** moderno e interativo focado no ensino, prática, visualização e treinamento de **teoria musical aplicada à guitarra**. O objetivo principal é transformar conceitos abstratos de música em ferramentas visuais, auditivas e práticas intuitivas no braço da guitarra (fretboard) para guitarristas de todos os níveis — do iniciante ao avançado em estilos como Blues, Jazz e Fusion.

## 2. Stack Tecnológica Recomendada (Padrão para o App)

* **Framework:** React.js / Next.js (com TypeScript para tipagem rigorosa de notas, acordes, escalas e rotinas de treino).

* **Estilização:** Tailwind CSS (design moderno, responsivo e com tema escuro/dark mode ideal para músicos).

* **Áudio / Teoria / Sintetizador:** `tone.js` ou Web Audio API (reprodução sonora de acordes, escalas, arpejos, metrônomo e backing tracks interativas em tempo real).

* **Ícones:** Lucide React.

* **Gerenciamento de Estado:** Zustand ou React Context (para controle de afinação, tonalidade, tempo do metrônomo, posição no braço e módulos de exercícios).

## 3. Base de Conhecimento de Teoria Musical & Guitarra (Domínio da IA)

Ao gerar código, componentes ou explicações neste projeto, a IA deve dominar e aplicar rigorosamente os seguintes conceitos musicais e técnicos:

### A. O Braço da Guitarra (Fretboard Mapping)

* **Afinação Padrão:** E-A-D-G-B-E (da 6ª corda mais grossa para a 1ª mais fina), com suporte a afinações alternativas (Drop D, Half Step Down, etc.).

* **Tratamento de Notas:** Sistema cromático com sustenidos ($\sharp$) e bemóis ($\flat$), com suporte a conversão enarmônica (ex: $C\sharp = D\flat$).

* **Visualização de Trastes:** Mapeamento dinâmico de casas (geralmente de 0 a 24), calculando automaticamente a posição exata das notas em qualquer corda.

### B. Graus e Intervalos

* **Intervalos Básicos:** Uníssono, 2ª (menor/maior), 3ª (menor/maior), 4ª (justa/aumentada), 5ª (justa/diminuída), 6ª (menor/maior), 7ª (menor/maior) e Oitava.

* **Fórmulas de Construção:** Fórmulas numéricas baseadas na escala maior natural (Ex: Tríade Maior = $1 - 3 - 5$; Tétrade com 7ª Maior = $1 - 3 - 5 - 7$).

### C. O Sistema CAGED

O app deve permitir visualizar acordes, arpejos e escalas nas 5 formas principais do sistema CAGED:

* **C-Shape** (Forma de Dó), **A-Shape** (Forma de Lá), **G-Shape** (Forma de Sol), **E-Shape** (Forma de Mi), **D-Shape** (Forma de Ré).

* *Aplicações:* Conexão entre as posições no braço, inversões de acordes e transposição fluida por todo o braço.

### D. Escalas e Modos Gregos

1. **Escala Maior Natural (Jônica)** e seus Modos Gregos:

   * Jônico ($1 - 2 - 3 - 4 - 5 - 6 - 7$)

   * Dórico ($1 - 2 - \flat 3 - 4 - 5 - 6 - \flat 7$)

   * Frígio ($1 - \flat 2 - \flat 3 - 4 - \flat 5 - \flat 6 - \flat 7$)

   * Lídio ($1 - 2 - 3 - \sharp 4 - 5 - 6 - 7$)

   * Mixolídio ($1 - 2 - 3 - 4 - 5 - 6 - \flat 7$)

   * Eólio / Menor Natural ($1 - 2 - \flat 3 - 4 - \flat 5 - \flat 6 - \flat 7$)

   * Locrio ($1 - \flat 2 - \flat 3 - 4 - \flat 5 - \flat 6 - \flat 7$)

2. **Pentatônicas e Blues:**

   * Pentatônica Maior ($1 - 2 - 3 - 5 - 6$)

   * Pentatônica Menor ($1 - \flat 3 - 4 - 5 - \flat 7$)

   * Escala de Blues ($1 - \flat 3 - 4 - \flat 5 - 5 - \flat 7$)

3. **Escalas Avançadas:**

   * Menor Harmônica ($1 - 2 - \flat 3 - 4 - 5 - \flat 6 - 7$)

   * Menor Melódica ($1 - 2 - \flat 3 - 4 - 5 - 6 - 7$)

   * Escala Simétrica/Diminuída (Tom-Semitom e Semitom-Tom) e Escala Hexatônica (Tons Inteiros).

### E. Campo Harmônico (Diatonic Harmony)

* **Campo Harmônico Maior (Tríades e Tétrades):**

  * I (Maj7), ii (m7), iii (m7), IV (Maj7), V (7), vi (m7), vii° ($m7\flat 5$).

* **Campo Harmônico Menor Natural:**

  * i (m7), ii° ($m7\flat 5$), III (Maj7), iv (m7), V (m7 ou 7 se harmônico), VI (Maj7), VII (7).

* **Empréstimo Modal (Modal Interchange):**

  * Mapeamento de acordes emprestados comuns vindos do modo menor paralelo para enriquecer progressões no modo maior (ex: $iv$, $\flat III$, $\flat VI$, $\flat VII$, $ii^\phi 7$).

## 4. Módulos Especiais por Estilo & Improviso

### A. Capítulo: Blues (Tradicional ao Moderno)

* **Estrutura do Blues de 12 Compassos (12-Bar Blues):** Progressões I7 - IV7 - V7 e o Turnaround clássico.

* **Massa de Notas do Blues:** Mistura da Pentatônica Menor com a Pentatônica Maior sobre o mesmo tom (Ex: tocar Penta Menor e Maior de A sobre um A7).

* **Blue Notes & Micro-bends:** Destaque para a $\flat 5$ e a flexão de 1/4 de tom na 3ª menor para a 3ª maior.

* **Blues Jazzístico (Quick-Change & Substituições):** Inclusão do acorde ii-V7 no Blues e uso de diminutos de passagem.

### B. Capítulo: Jazz & Jazz Fusion

* **Progressões Essenciais:**

  * ii - V - I Maior ($dm7 - G7 - Cmaj7$)

  * ii - V - i Menor ($dm7\flat 5 - G7(\flat 9) - cm7$)

* **Voicings e Drop 2 / Drop 3:** Acordes sem a 5ª, acordes com extensões (9ª, 11ª, 13ª) e alterações ($\sharp 9, \flat 9, \sharp 11, \flat 13$).

* **Substituição Tritonal (Tri-sub):** Substituir o acorde V7 por outro dominante a uma distância de tritono (ex: trocar $G7$ por $D\flat 7$).

* **Fusion Concepts:** Sobreposição de tríades (Upper Structures), escalas Pentatônicas alteradas e uso intensivo dos modos da Menor Melódica (ex: Super Lócrio / Alterado).

### C. Capítulo: Improvisação & Target Notes

* **Chord Tone Soloing:** Técnica de atingir notas da tríade/tétrade do acorde vigente no tempo forte do compasso (Target Notes).

* **Guia de Vozes (Voice Leading):** Conectar acordes da progressão movimentando as notas pela menor distância possível (ex: a 7ª de um acorde caindo na 3ª do próximo).

* **Tensão e Resolução:** Abordagens cromáticas (Approach Notes) e cercamento (Enclosure) antes de pousar na nota alvo.

## 5. Técnicas Avançadas & Mecânica de Execução

### A. Arpejos

* Visualização de arpejos por todo o braço (Tríades: Maior, Menor, Diminuta, Aumentada; Tétrades: Maj7, m7, 7, $m7\flat 5$, $\text{dim}7$).

* **Arpejos Invertidos:** Visualização com a tônica na 3ª, 5ª ou 7ª como nota mais grave.

* **Arpejos de 1, 2 e 3 notas por corda.**

### B. Sweep Picking (Swiping / Varredura)

* **Padrões de 3, 4 e 5 Cordas:** Formatos clássicos de arpejos para execução em sweep.

* **Economia de Movimento:** Orientação de palhetada (Down-down-down / Up-up-up) combinada com legato (Hammer-ons e Pull-offs) no topo do padrão.

* **Sincronia Mão Esquerda/Direita:** Exercícios focados em mutar as cordas não utilizadas com a palma da mão (palm mute) e o dedo da mão esquerda para evitar ressonância indesejada.

## 6. Módulo de Exercícios Práticos & Desafios

O app deve incluir uma seção interativa com os seguintes tipos de treino:

1. **Reconhecimento de Notas e Fretboard Memorization:**

   * O app sorteia uma nota e o usuário deve clicar na casa/corda correta em um tempo limite.

2. **Treino de Ouvido (Ear Training):**

   * Reprodução de um som (intervalo, acorde ou escala) para o usuário identificar visualmente no braço.

3. **Treinador de Sweep Picking & Velocidade:**

   * Exercícios tabulados com metrônomo progressivo (aumenta o BPM automaticamente a cada repetição limpa).

4. **Desafio de Chord Tone Soloing:**

   * Uma backing track toca e o usuário precisa acertar no braço as notas do acorde no momento exato da troca.

5. **Gerador de Licks e Padrões de Sequenciamento:**

   * Exercícios em grupos de 3, 4 ou 6 notas subindo/descendo escalas e arpejos.

## 7. Requisitos de Componentes e UI/UX no Frontend

1. **Interactive Fretboard (`Fretboard.tsx`):**

   * Renderizado em SVG/HTML flexível.

   * Modos de exibição: Escalas, Acordes, Arpejos, Padrões de Sweep.

   * Filtros de cores: Destacar Tônica, 3ª, 5ª, 7ª ou Tensões ($\flat 9, \sharp 11$).

2. **Player de Acompanhamento (`BackingTrackPlayer.tsx`):**

   * Metrônomo integrado com acelerador automático para treinos.

   * Gerador de backing tracks em loops simples usando `Tone.js`.

3. **Módulo de Treino Interativo (`PracticeStudio.tsx`):**

   * Tela dividida entre o exercício atual (instrução/tablatura visual) e o braço interativo.

4. **Design Limpo e Responsivo:** Tema escuro (Dark Mode) com alto contraste para visibilidade clara das posições dos dedos e intervalos.

## 8. Diretrizes para o Cursor AI

* Sempre que criar um componente relacionado à música, garanta que os cálculos de intervalos e notas estejam matematicamente corretos no array cromático (`['C', 'C#', 'D', 'D#', 'E', 'F', 'F#', 'G', 'G#', 'A', 'A#', 'B']`).

* Mantenha o código modular: separe a **lógica de teoria e exercícios** (ex: `utils/musicTheory.ts`, `utils/exerciseGenerator.ts`) da **camada de apresentação visual** (ex: `components/Fretboard.tsx`).

* Utilize TypeScript rigoroso com interfaces claras para `Note`, `Chord`, `Scale`, `Arpeggio`, `Exercise`, `PracticeRoutine` e `FretPosition`.