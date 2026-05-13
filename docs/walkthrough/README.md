# Walkthrough / libro: Lexroom marketing replica

Percorso ordinato che **insegna lo stack** (HTML/CSS, JS, TypeScript, React, Next.js App Router, Tailwind v4, Motion) **e** lo applica al clone in questa repo. Ogni capitolo “prodotto” lega scelte di design a file reali.

## Struttura della cartella

| Cartella | Contenuto |
|----------|-----------|
| [meta](./meta/) | Modello didattico (come usare il libro) |
| [fundamentals](./fundamentals/) | Capitoli **A01–A06** (stack prima del prodotto) |
| [brief-layout](./brief-layout/) | **01–04** — brief, dipendenze, token, shell Next |
| [hero-motion](./hero-motion/) | **05–09** — hero, motion, video, magnetic play |
| [sections-forms](./sections-forms/) | **10–12** — sezioni, features, form demo |
| [quality](./quality/) | **13–15** — a11y, performance, polish |
| [reference](./reference/) | Glossario e decision log |

Nella root di `walkthrough/` restano **indice**, **checkpoint** e **indice per stack** (file che attraversano più parti).

## Prima di iniziare

1. Leggi **[Come funziona questo libro](./meta/how-the-book-works.md)** (modello Parte A / Parte B, esercizi, limiti).
2. Se parti da zero su questo stack: completa **A01 → A06** in [`fundamentals/`](./fundamentals/), poi **[Checkpoint I](./CHECKPOINTS.md)**.
3. Indice per tecnologia: **[STACK-INDEX](./STACK-INDEX.md)**.

## Parte 0 — Meta

| Capitolo | Contenuto |
|----------|-----------|
| [README](./README.md) | Questo file (indice + mappa cartelle) |
| [Come funziona questo libro](./meta/how-the-book-works.md) | Prerequisiti, due strati, ordine di lettura |

## Parte I — Fondamenti stack (A01–A06)

Percorso in [`fundamentals/`](./fundamentals/).

| Capitolo | Contenuto |
|----------|-----------|
| [A01](./fundamentals/A01-web-platform-primer.md) | DOM, CSS, layout, DevTools |
| [A02](./fundamentals/A02-javascript-modules-and-async.md) | Moduli, `async`/`await`, `fetch` |
| [A03](./fundamentals/A03-typescript-and-react-shaped.md) | TS, React, `"use client"`, hook |
| [A04](./fundamentals/A04-next-app-router.md) | `app/`, layout, page, API route |
| [A05](./fundamentals/A05-tailwind-v4-and-globals.md) | Tailwind v4, `@theme`, `globals.css` |
| [A06](./fundamentals/A06-framer-motion-primer.md) | Motion: scroll, transform, spring, RM |

**→ [Checkpoint I](./CHECKPOINTS.md)**

## Parte II — Prodotto, stack nel progetto, shell (01–04)

Percorso in [`brief-layout/`](./brief-layout/).

| Capitolo | Contenuto |
|----------|-----------|
| [01](./brief-layout/01-design-brief.md) | Brief, tono, anti-goal |
| [02](./brief-layout/02-stack-and-constraints.md) | Dipendenze, vincoli replica, “dove sta la verità” |
| [03](./brief-layout/03-design-tokens.md) | Token, easing, reduced motion in CSS |
| [04](./brief-layout/04-layout-shell.md) | Layout Next, header/footer, provider |

**→ [Checkpoint II](./CHECKPOINTS.md)**

## Parte III — Hero, video, motion interattivo (05–09)

Percorso in [`hero-motion/`](./hero-motion/).

| Capitolo | Contenuto |
|----------|-----------|
| [05](./hero-motion/05-hero-narrative.md) | Gerarchia contenuti hero |
| [06](./hero-motion/06-hero-implementation.md) | Scroll stage, transform, stacking |
| [07](./hero-motion/07-motion-philosophy.md) | Quando animare, hover, RM |
| [08](./hero-motion/08-video-modal.md) | Portal, Vimeo, iframe |
| [09](./hero-motion/09-magnetic-play.md) | Freccia play, spring, pointer |

**→ [Checkpoint III](./CHECKPOINTS.md)**

## Parte IV — Ritmo pagina, features, form (10–12)

Percorso in [`sections-forms/`](./sections-forms/).

| Capitolo | Contenuto |
|----------|-----------|
| [10](./sections-forms/10-sections-rhythm.md) | `Section`, anchor, heading |
| [11](./sections-forms/11-features-bento.md) | Bento, spotlight, preview |
| [12](./sections-forms/12-forms-and-states.md) | `DemoRequestForm`, API `/api/demo` |

**→ [Checkpoint IV](./CHECKPOINTS.md)**

## Parte V — Accessibilità, performance, polish (13–15)

Percorso in [`quality/`](./quality/).

| Capitolo | Contenuto |
|----------|-----------|
| [13](./quality/13-accessibility.md) | Focus, motion ridotta, contrasto |
| [14](./quality/14-performance-checklist.md) | Transform, third-party, LCP |
| [15](./quality/15-polish-pass.md) | Checklist finale, build/lint |

**→ [Checkpoint V](./CHECKPOINTS.md)**

## Riferimenti trasversali

- [CHECKPOINTS](./CHECKPOINTS.md) — verifiche tra le parti  
- [STACK-INDEX](./STACK-INDEX.md) — indice per stack  
- [GLOSSARY](./reference/GLOSSARY.md) — glossario  
- [DECISIONS](./reference/DECISIONS.md) — decision log  

## Materiale esterno (non ufficiale ma utile)

- [animations.dev](https://animations.dev/) — motion come craft  
- [easing.dev](https://easing.dev/) — curve di easing  

Le **fonti ufficiali** (MDN, React, Next, Tailwind, Motion) sono linkate dentro ogni capitolo in **Approfondimento ufficiale**.
