# 09 — Magnetic play (freccia)

> **Schema del libro:** [Parte A](#parte-a--concetto) = spring + pointer; [Parte B](#parte-b--nel-repo) = componente dedicato. Motion: [A06](../fundamentals/A06-framer-motion-primer.md).

## Obiettivo

CTA “play” che **risponde al puntatore** con spring, senza hook globali invasivi.

## Parte A — Concetto

Un effetto **magnetic** sposta un elemento verso il cursore entro un raggio. In Motion si ottiene con valori animati (**`useSpring`**) aggiornati da eventi `pointermove` relativi al bounding box del bottone. Coalescing/throttling riduce lavoro per frame. Limitare l’effetto a **`hover` + `fine` pointer`** evita jitter su touch e risparmia batteria.

## Parte B — Nel repo

### Componente

`components/home/MagneticPlayArrow.tsx`

### Idee tecniche

- **Spring** (`useSpring`) su `x`/`y` derivati dalla posizione puntatore relativa al bottone.
- **Coalescing** / throttling pointer: meno re-render, motion fluida.
- **Gate**: solo desktop / `hover` + `fine` pointer — su mobile la freccia resta statica o leggermente animata via CSS.

## Anti-pattern

- `mousemove` su `window` senza cleanup.
- Magnetic su ogni elemento della pagina.

## Approfondimento ufficiale

- [Motion: useSpring](https://motion.dev/docs/react-use-spring)
- [MDN: Pointer events](https://developer.mozilla.org/en-US/docs/Web/API/Pointer_events)

## Esercizio

Riduci `stiffness` dello spring del 20%: nota differenza in “peso” della freccia; scegli valore e documenta in [DECISIONS](../reference/DECISIONS.md).

**Criteri di successo:** voce ADR o bullet in `DECISIONS.md` con valore numerico e motivazione soggettiva (“più morbido”, ecc.).

## Prossimo

[10-sections-rhythm](../sections-forms/10-sections-rhythm.md)
