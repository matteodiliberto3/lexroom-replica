# A01 — Piattaforma web (HTML, CSS, browser) — Parte I fondamenti

> Capitolo **stack-first**. Dopo A01–A06 passa ai capitoli 01–15 del percorso prodotto.

## Obiettivo

Navigare una pagina con **DevTools** e capire **cosa** il browser fa quando leggi il nostro JSX compilato.

## Parte A — Concetti

### DOM

Il **DOM** è l’albero di nodi (elementi, testo) che il browser costruisce dall’HTML. React **aggiorna** quel DOM in risposta allo stato: non “ridisegna tutto da zero” ogni volta in modo naive, ma applica un diff.

### CSS: cascade e specificità

Le regole si combinano per **origine**, **specificità** e **ordine**. Se una classe Tailwind “non vince”, spesso è conflitto di specificità o ordine di `@layer`. In questo repo gran parte dello stile è **utility** + un po’ di CSS globale in `app/globals.css`.

### Layout: flusso, flex, grid

- **Block flow**: gli elementi blocco si impilano verticalmente.
- **Flexbox**: allineamento su un asse principale (header, righe di bottoni).
- **Grid**: griglie 2D (bento features, pricing).

### `transform`, `opacity`, `will-change`

Per animazioni fluide il browser può promuovere un layer composited. **Preferisci** animare `transform` e `opacity` rispetto a `top`/`width` quando devi evitare jank. Nei capitoli Motion useremo questo principio.

## Parte B — Nel repo

1. Avvia `npm run dev`, apri `/en`.
2. DevTools → **Elements**: espandi `<body>` e trova la hero. Nota classi tipo `reb-hero-*` e utility Tailwind mescolate.
3. **Computed**: seleziona un titolo hero e verifica `font-family` e `color` — da dove arrivano? (`globals.css`, `@theme`, utility.)

## Approfondimento ufficiale

- [MDN: DOM](https://developer.mozilla.org/en-US/docs/Web/API/Document_Object_Model)
- [MDN: CSS cascade](https://developer.mozilla.org/en-US/docs/Web/CSS/Cascade)
- [Learn CSS (web.dev)](https://web.dev/learn/css/)

## Esercizio

Con Elements, trova **un** nodo il cui `z-index` o `transform` su un **antenato** spiega perché un elemento figlio sembra “tagliato” o sotto ad altro.

**Criteri di successo:** screenshot o nota con: nome tag, classe, proprietà dell’antenato rilevante, una frase che spiega l’effetto.

## Prossimo

[A02-javascript-modules-and-async](./A02-javascript-modules-and-async.md)
