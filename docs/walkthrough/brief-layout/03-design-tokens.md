# 03 — Design tokens (CSS, non solo Tailwind)

> **Schema del libro:** [Parte A](#parte-a--concetto) = token e cascade; [Parte B](#parte-b--nel-repo) = `globals.css` e `@theme`. Approfondimento Tailwind: [A05](../fundamentals/A05-tailwind-v4-and-globals.md).

## Obiettivo

Capire **dove** vivono colore, tipo, easing e radius così le modifiche sono coerenti e non “magic numbers” sparsi.

## Parte A — Concetto

I **design token** sono coppie nome/valore (colore, spazio, raggio, curva di easing) riusate in tutta l’UI. In CSS moderno spesso vivono in **`:root`** (variabili custom) e vengono **mapeggiati** in Tailwind tramite `@theme` così ottieni classi tipo `bg-brand` senza duplicare hex. Le media query **`prefers-reduced-motion`** riducono durate o disattivano animazioni: stesso token, comportamento diverso.

## Parte B — Nel repo

1. Apri `app/globals.css`: `@import "tailwindcss"` e `@theme inline { ... }` — i token Tailwind (es. `--color-brand-500`) sono collegati alle variabili.
2. Cerca variabili **`--ease-*`**, **`--shadow-*`**, **`--radius-*`**: servono a transizioni e card senza duplicare curve in ogni componente.
3. Per **hover / motion ridotta**, cerca `@media (prefers-reduced-motion: reduce)`: branch diversi (durata zero, animazioni off).

## Anti-pattern

- Hardcodare `#hex` in 20 file invece di un token o una utility `bg-brand-900`.
- Usare `transition: all` ovunque: costa repaint su proprietà non ottimizzate.

## Approfondimento ufficiale

- [MDN: Using CSS custom properties](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_cascading_variables/Using_CSS_custom_properties)
- [Tailwind: Theme variables](https://tailwindcss.com/docs/theme)

## Esercizio

Aggiungi **un solo** token semantico (es. `--surface-hero`) in `:root` e mappalo in `@theme` se serve una utility; usalo solo nel wrapper hero.

**Criteri di successo:** `npm run build` verde; in DevTools → Computed vedi il token applicato a un nodo hero.

## Prossimo

[04-layout-shell](./04-layout-shell.md)
