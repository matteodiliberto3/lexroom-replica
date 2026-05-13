# 13 — Accessibilità

> **Schema del libro:** [Parte A](#parte-a--concetto) = POUR / WCAG intro; [Parte B](#parte-b--nel-repo) = checklist su questa home. Motion ridotta: [07](../hero-motion/07-motion-philosophy.md).

## Obiettivo

Il sito deve essere usabile con **tastiera**, **screen reader**, **motion ridotta**.

## Parte A — Concetto

**Accessibilità** non è un plugin: è ordine di heading, nomi accessibili, focus visibile, contrasto, modali che non intrappolano il focus, rispetto di `prefers-reduced-motion`. La WCAG definisce criteri verificabili (es. contrasto minimo per testo normale/grande).

## Parte B — Nel repo

### Checklist rapida

- Ordine focus logico (header → main → footer).
- Modale video: focus trap, chiudi con Escape, ripristino focus (validare nel componente portal).
- `prefers-reduced-motion`: marquee, shimmer, hero scroll, spotlight — ridotti o off dove implementato.
- Contrasto testo su blu brand (soprattutto link secondari).
- Immagini decorative: `alt=""` o ruolo presentazionale.

### Strumenti

- Lighthouse a11y (indicativo).
- Tab-only pass sulla home.

## Approfondimento ufficiale

- [WCAG 2.2](https://www.w3.org/TR/WCAG22/)
- [WebAIM: Keyboard](https://webaim.org/techniques/keyboard/)

## Esercizio

Naviga dalla hero al footer solo con Tab: conta quanti focus “invisibili” o salti illogici trovi; apri issue per ciascuno.

**Criteri di successo:** elenco numerato di problemi (anche zero) con selettore o componente sospetto.

## Prossimo

[14-performance-checklist](./14-performance-checklist.md)
