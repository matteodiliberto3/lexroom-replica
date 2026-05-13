# A05 — Tailwind CSS v4 + `globals.css` in questo progetto

## Obiettivo

Collegare **`@import "tailwindcss"`**, blocco **`@theme inline`**, variabili **`:root`**, e classi utility nei `.tsx`.

## Parte A — Concetti

### Tailwind v4 (stile “CSS-first”)

In v4 spesso configuri il design system **nel CSS** con `@theme` piuttosto che solo in `tailwind.config.js` (qui: `@tailwindcss/postcss` + import in `globals.css`).

### Utility vs componenti CSS

- **Utility** (`flex`, `gap-4`, `bg-brand`): veloci, coerenti se i token sono definiti bene.
- **CSS component** (`.reb-hero-experience`): quando serve overflow, stacking o selettori complessi ripetuti.

### `cn()` (clsx + tailwind-merge)

Funzione tipica per **unire** classi condizionalmente e risolvere conflitti tra classi Tailwind che si sovrascrivono.

## Parte B — Nel repo

1. Leggi l’inizio di `app/globals.css`: `@import "tailwindcss"`, `:root { ... }`, `@theme inline { ... }`.
2. Cerca `--ease-out-strong` e dove viene usato (transizioni bottoni, backdrop).
3. Apri un componente a caso in `components/ui/Button.tsx`: nota classi `bg-` / `text-` allineate ai token `--color-*`.

## Approfondimento ufficiale

- [Tailwind CSS v4](https://tailwindcss.com/docs)
- [Tailwind: Theme variables](https://tailwindcss.com/docs/theme)

## Esercizio

Trova **due** colori brand esposti come `--color-*` in `@theme` e citane **un** uso in un file `.tsx` (classe generata).

**Criteri di successo:** nome variabile + path file + frammento di className.

## Prossimo

[A06-framer-motion-primer](./A06-framer-motion-primer.md)
