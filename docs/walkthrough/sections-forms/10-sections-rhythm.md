# 10 — Ritmo delle sezioni

> **Schema del libro:** [Parte A](#parte-a--concetto) = heading e landmark HTML; [Parte B](#parte-b--nel-repo) = `Section.tsx`. React: [A03](../fundamentals/A03-typescript-and-react-shaped.md).

## Obiettivo

Ogni blocco marketing ha **padding verticale**, **titolo sezione**, **sottotitolo** — pattern ripetuto così l’utente non si perde.

## Parte A — Concetto

Le **sezioni** spezzano la pagina in unità cognitive. Un **`id` stabile** su ogni sezione consente deep link (`#pricing`) e CTA nel header. La gerarchia heading (`h1` una volta, poi `h2` per sezione) aiuta SEO e screen reader. Motion “entrance” per sezione deve restare **subordinato** al contenuto.

## Parte B — Nel repo

### Componente

`components/ui/Section.tsx`: wrapper con `id` per anchor (`#demo`, `#pricing`).

### Checklist per nuova sezione

- `id` univoco per deep link.
- Heading level corretto (`h2` per sezione dopo `h1` hero).
- Spaziatura coerente con sezioni adiacenti (non “aria vuota” random).

## Approfondimento ufficiale

- [MDN: heading elements](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/Heading_Elements)
- [Motion: motion values in view](https://motion.dev/docs/react-motion-component) (per entrance opzionali)

## Esercizio

Aggiungi una sezione placeholder con solo titolo + 2 righe copy usando `Section`; verifica anchor da URL `#tua-sezione`.

**Criteri di successo:** navigazione diretta a `#...` scrolla alla sezione; `h2` visibile in outline documento.

## Prossimo

[11-features-bento](./11-features-bento.md)
