# A06 — Framer Motion (prima dello scroll hero)

## Obiettivo

Capire **`motion.*`**, valori animati, **scroll**, **spring**, e **`useReducedMotion`** così i capitoli 06–09 non sono magia.

## Parte A — Concetti

### `motion.div` vs `div`

`motion` avvolge elementi DOM e accetta props animate (`animate`, `whileHover`, `transition`) o collegamenti a valori esterni (`style={{ x }}`).

### `useScroll`

Legge lo scroll di un **elemento** o di `window` e produce valori reattivi (es. `scrollYProgress` tra 0 e 1) mentre l’utente scrolla.

### `useTransform`

Mappa un valore numerico (es. progress 0→1) in un altro (opacity, pixel, stringa `transform`). Spesso concatenato a `useScroll`.

### `useSpring`

“ammorbidisce” un valore numerico con fisica a molla — utile per il video hero e la freccia magnetica.

### Motion ridotta

`useReducedMotion()` restituisce `true` se l’utente preferisce meno animazioni: **rispetta** riducendo o saltando effetti. In parallelo, CSS `@media (prefers-reduced-motion: reduce)` per animazioni pure CSS.

## Parte B — Nel repo (anteprima)

- `HeroSection.tsx`: `useScroll` + `useSpring` + `useTransform` sulla progress bar dello “stadio” hero.
- `MagneticPlayArrow.tsx`: spring su coordinate puntatore.
- `app/layout.tsx`: `MotionConfig` globale (vedi doc Motion per `reducedMotion`).

Dopo questo capitolo, leggi in dettaglio [06-hero-implementation](../hero-motion/06-hero-implementation.md) e [09-magnetic-play](../hero-motion/09-magnetic-play.md).

## Approfondimento ufficiale

- [Motion for React (ex Framer Motion)](https://motion.dev/docs/react)
- [useScroll](https://motion.dev/docs/react-use-scroll)
- [useSpring](https://motion.dev/docs/react-use-spring)

## Esercizio

In dev, aggiungi temporaneamente un `motion.div` in una pagina di test con `animate={{ opacity: [0, 1] }}` e `transition={{ duration: 2, repeat: Infinity }}`; poi rimuovilo.

**Criteri di successo:** vedi il lampeggiamento in `/test-book` o rotta dedicata; nessun warning Motion in console.

## Prossimo

Fine **Parte I (fondamenti)** → [CHECKPOINTS](../CHECKPOINTS.md) “Checkpoint I”, poi [01-design-brief](../brief-layout/01-design-brief.md).
