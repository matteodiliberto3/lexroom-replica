# 07 — Filosofia del motion

> **Schema del libro:** [Parte A](#parte-a--concetto) = euristica motion; [Parte B](#parte-b--nel-repo) = dove si applica (CSS + Motion). Primer: [A06](../fundamentals/A06-framer-motion-primer.md).

## Obiettivo

Animare per **guidare attenzione e stato**, non per “mostrare che sappiamo usare Motion”.

## Parte A — Concetto

Le animazioni **entrance** danno respiro alla pagina ma non devono competere tra loro. Lo **scroll-linked** motion ha senso quando rinforza una metafora (profondità, rivelazione). **Hover** aggressivo su touch è dannoso: la media query **`(hover: hover) and (pointer: fine)`** limita micro-interazioni al desktop. **`prefers-reduced-motion`** è obbligatorio moralmente e spesso legalmente: riduci durate, elimina loop, mantieni contenuto identico.

## Parte B — Nel repo

### Regole pratiche (cerca in `globals.css` e nei componenti)

1. **Entrance**: leggero, una volta; stagger piccolo su liste (features, pricing cards).
2. **Scroll-linked**: hero video che “sale” con lo scroll.
3. **Hover**: micro-lift su card/bottoni con media query pointer/hover dove implementato.
4. **`prefers-reduced-motion`**: branch CSS; `useReducedMotion` / `MotionConfig` in `app/layout.tsx` per Motion.

## Anti-pattern

- Durate > 600ms su UI ripetitiva.
- Bounce su ogni card: nausea cognitiva.

## Approfondimento ufficiale

- [MDN: prefers-reduced-motion](https://developer.mozilla.org/en-US/docs/Web/CSS/@media/prefers-reduced-motion)
- [WCAG 2.2: Animation from interactions](https://www.w3.org/WAI/WCAG22/Understanding/animation-from-interactions.html) (contesto normativo)

## Esercizio

Disattiva motion ridotta in OS e confronta con attiva: annota **3 differenze** visibili nella home.

**Criteri di successo:** 3 bullet concreti (es. marquee ferma, shimmer off, hero scroll attenuato).

## Prossimo

[08-video-modal](./08-video-modal.md)
