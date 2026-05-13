# 11 — Features (bento + spotlight)

> **Schema del libro:** [Parte A](#parte-a--concetto) = griglia, stato derivato, effetti pointer; [Parte B](#parte-b--nel-repo) = `FeaturesSection.tsx`. React effects: [A03](../fundamentals/A03-typescript-and-react-shaped.md).

## Obiettivo

Griglia “bento” con **card** distinte, **icona**, **titolo**, **copy**; dove serve, **spotlight** che segue il mouse (solo pointer fine, no reduced motion).

## Parte A — Concetto

Un layout **bento** è una griglia CSS (spesso `grid-template-areas`) con celle di dimensione diversa. **Spotlight** (gradiente che segue il mouse) richiede listener pointer: va disabilitato con **reduced motion** e su coarse pointer. Per **typewriter** o preview animate, evita `setState` dentro `useEffect` solo per copiare uno stato che può essere **derivato** al render: riduce bug e soddisfa lint (`set-state-in-effect`).

## Parte B — Nel repo

### Componente

`components/home/FeaturesSection.tsx`

### Pattern

- Dati da `content/en/home.ts` (`features` o equivalente).
- **Typewriter / preview**: con `useReducedMotion`, pattern `displayValue` derivato; effect con early-return senza setState superfluo.
- **Class** `feature-bento-card` + CSS in `globals.css` per hover lift gated (`hover: hover` + `pointer: fine` dove definito).

## Anti-pattern

- Spotlight che gira su mobile: batteria + distrazione.
- Animazioni CSS infinite su tutte le card.

## Approfondimento ufficiale

- [React: You Might Not Need an Effect](https://react.dev/learn/you-might-not-need-an-effect)
- [MDN: CSS Grid](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_grid_layout)

## Esercizio

Disabilita una sola card dalla griglia via content file: la griglia deve ancora bilanciarsi (no buco strano) — se serve, usa `hidden` o riordina array.

**Criteri di successo:** screenshot o descrizione layout prima/dopo; nessun errore console.

## Prossimo

[12-forms-and-states](./12-forms-and-states.md)
