# 04 — Layout shell

> **Schema del libro:** [Parte A](#parte-a--concetto) = layout Next e guscio UI; [Parte B](#parte-b--nel-repo) = file reali. Next: [A04](../fundamentals/A04-next-app-router.md).

## Obiettivo

Sapere **cosa** avvolge tutte le pagine: font, meta, header, footer, provider motion.

## Parte A — Concetto

In **App Router**, `layout.tsx` definisce un guscio **persistente** per un segmento di rotta: ideale per font globali, shell HTML, provider. Le **`page.tsx`** sono il contenuto specifico. Annidare layout (`app/layout.tsx` → `app/en/layout.tsx`) è il modo standard di avere **locale** o sezioni con header diversi senza duplicare tutto.

## Parte B — Nel repo

- `app/layout.tsx` — `html`/`body`, font, `MotionConfig` (riduced motion globale per Motion), children.
- `app/en/layout.tsx` — layout specifico locale (header/footer EN).
- `components/layout/SiteHeader.tsx`, `SiteFooter.tsx` — navigazione e link legali.

### Decisione di design

La shell deve dare **continuità** (stesso header su scroll) e **uscita** chiara (footer con privacy, terms, copyright anno dinamico).

## Approfondimento ufficiale

- [Next.js: Layouts and Pages](https://nextjs.org/docs/app/building-your-application/routing/pages-and-layouts)
- [Next.js: Font Optimization](https://nextjs.org/docs/app/building-your-application/optimizing/fonts)

## Esercizio

Traccia il flusso: `app/en/page.tsx` → quali `layout` lo wrappano? Disegna un albero a 4 livelli su carta o in un issue.

**Criteri di successo:** albero con `app/layout`, `app/en/layout`, `page`, almeno un componente layout (header/footer) indicato come figlio.

## Prossimo

[05-hero-narrative](../hero-motion/05-hero-narrative.md)
