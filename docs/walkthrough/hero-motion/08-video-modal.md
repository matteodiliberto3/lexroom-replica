# 08 — Video modale (Vimeo + portal)

> **Schema del libro:** [Parte A](#parte-a--concetto) = portal React e dialog pattern; [Parte B](#parte-b--nel-repo) = flusso nel hero. React: [A03](../fundamentals/A03-typescript-and-react-shaped.md).

## Obiettivo

Aprire video **accessibile**, **sopra** tutto lo stacking, **senza** iframe zombie dopo chiusura.

## Parte A — Concetto

**`createPortal(children, domNode)`** monta i figli in un nodo DOM fuori dall’albero React corrente (tipicamente `document.body`). Utile per overlay che devono ignorare `overflow: hidden` degli avi. Un **dialog** modale richiede: ruolo `dialog`, `aria-modal`, focus gestito, chiusura con Escape. L’**iframe** Vimeo continua in background se non ne rimuovi `src`: svuotare `src` dopo un breve timeout è un pattern comune per fermare audio.

## Parte B — Nel repo

### Flusso

1. Click play → stato aperto → backdrop + dialog.
2. **Portal** su `document.body`: il modale non eredita overflow/stacking errato del hero.
3. **Iframe**: `src` all’apertura; su close, timeout breve prima di svuotare `src` per fermare audio/CPU.

### Config

`lib/site-config.ts` — `productVideoUrl` (Vimeo embed).

### A11y (verifica nel componente)

- `aria-modal`, `role="dialog"`, label per il bottone chiudi.
- Escape chiude; focus torna al trigger (pattern da validare).

## Approfondimento ufficiale

- [React: createPortal](https://react.dev/reference/react-dom/createPortal)
- [MDN: dialog role](https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Roles/dialog_role)

## Esercizio

Chiudi il modale durante playback: verifica che l’audio si fermi (tab non “fantasma”).

**Criteri di successo:** nota su comportamento osservato + eventuale conferma DevTools (iframe `src` vuoto dopo close).

## Prossimo

[09-magnetic-play](./09-magnetic-play.md)
