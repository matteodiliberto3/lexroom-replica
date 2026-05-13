# 06 — Hero: implementazione (DOM + scroll)

> **Schema del libro:** [Parte A](#parte-a--concetto) = scroll-linked motion e stacking; [Parte B](#parte-b--nel-repo) = `HeroSection.tsx` e CSS. Motion: [A06](../fundamentals/A06-framer-motion-primer.md).

## Obiettivo

Collegare **struttura HTML**, **stacking context** e **scroll-driven motion** senza bug visivi (overlay nero, clip errata).

## Parte A — Concetto

**`useScroll`** legge la posizione di scroll rispetto a un elemento o al viewport e produce un progress (0–1). **`useTransform`** mappa quel progress su opacity, translate, o una stringa **`transform`** composita. **`useSpring`** smussa il progress così il movimento non sembra agganciato ai pixel dello scroll. Un antenato con **`transform`** o **`filter`** può creare un **nuovo stacking context**: combinato con `overflow: hidden`, il modale fixed può comportarsi in modo strano — da qui l’uso di **portal** sul `body` (cap. [08](./08-video-modal.md)).

## Parte B — Nel repo

### Componente

`components/home/HeroSection.tsx`

### Pattern da riconoscere

1. **Scroll container** (`useRef` + `useScroll` di Motion): `target` e `offset` per mappare scroll → progress.
2. **Spring** (`useSpring` su progress): movimento meno “spreadsheet”, più organico.
3. **`useTransform`**: da progress a opacity, `y`, scale, **stringa `transform`** per il video (composizione esplicita evita conflitti con altre transform).
4. **Copy wrapper** vs **video stage**: layer separati così z-index e overflow sono prevedibili.
5. **Modal video**: `createPortal(..., document.body)` per uscire da overflow/stacking del hero.

### CSS di supporto

`app/globals.css` — classi tipo `.reb-hero-experience`, transizioni backdrop, `overflow-x` / `overflow-y` dove serve evitare clip del modale.

## Anti-pattern

- `position: fixed` dentro un antenato con `transform` senza portal: fixed diventa relativo a quel contenitore → bug difficili.
- Animare `top`/`left` invece di `transform` per il video.

## Approfondimento ufficiale

- [Motion: useScroll](https://motion.dev/docs/react-use-scroll)
- [Motion: useTransform](https://motion.dev/docs/react-use-transform)
- [MDN: Stacking context](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_positioned_layout/Understanding_z-index/Stacking_context)

## Esercizio

Con DevTools, ispeziona il nodo del video in scroll: elenca **tutte** le proprietà che cambiano tra inizio e metà hero (opacity, transform, filter).

**Criteri di successo:** elenco di ≥3 proprietà con valore “start” vs “mid” o nota “animata via Motion”.

## Prossimo

[07-motion-philosophy](./07-motion-philosophy.md)
