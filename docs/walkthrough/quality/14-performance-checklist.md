# 14 — Performance (checklist breve)

> **Schema del libro:** [Parte A](#parte-a--concetto) = costo rendering e main thread; [Parte B](#parte-b--nel-repo) = cosa controllare nella home. Browser: [A01](../fundamentals/A01-web-platform-primer.md).

## Obiettivo

Evitare jank su hero scroll e LCP debole per font/immagini.

## Parte A — Concetto

Il **main thread** esegue JS, style, layout, paint. Animare proprietà costose (`width`, `top`) forza layout; **`transform`** e **`opacity`** sono tipicamente più economici (compositing). **Third-party** (iframe Vimeo, font remoti) spostano tempo di rete e parsing: caricarli **on-demand** riduce il lavoro iniziale. **LCP** dipende spesso dall’immagine o dal testo above-the-fold e dai font.

## Parte B — Nel repo

### Priorità di audit

1. **Animare solo** `transform` e `opacity` dove possibile (hero, card).
2. **Immagini**: dimensioni corrette, `loading` lazy sotto piega, formati moderni se self-hosted.
3. **Font**: subset, `display: swap`, evitare troppi weight (vedi `app/layout.tsx`).
4. **Third-party**: Vimeo solo dopo click modale.
5. **React**: componenti pesanti sotto piega con `dynamic()` se necessario.

## Approfondimento ufficiale

- [web.dev: Rendering performance](https://web.dev/articles/rendering-performance)
- [Next.js: Optimizing](https://nextjs.org/docs/app/building-your-application/optimizing)

## Esercizio

Chrome Performance: 5s recording mentre scrolli hero → nota long tasks > 50ms; indica componente sospetto.

**Criteri di successo:** almeno un long task con stack o nome funzione annotato (anche “anonimo” se correlato a Motion).

## Prossimo

[15-polish-pass](./15-polish-pass.md)
