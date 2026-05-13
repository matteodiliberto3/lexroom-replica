# 12 — Form demo e stati

> **Schema del libro:** [Parte A](#parte-a--concetto) = form controllato, fetch, errori; [Parte B](#parte-b--nel-repo) = `DemoRequestForm` e API. JS async: [A02](../fundamentals/A02-javascript-modules-and-async.md).

## Obiettivo

Il form **#demo** è conversione: stati loading, success, error devono essere leggibili e non solo “toast”.

## Parte A — Concetto

Un **form controllato** lega ogni input a stato React (`value` + `onChange`). Alla submit: stato **loading**, chiamata **`fetch`** con `try/catch`, poi stato **success** o **error** con messaggio leggibile. Validazione lato client è UX; lato server è sicurezza — in questo repo l’API `/api/demo` può essere mock o reale a seconda dell’implementazione.

## Parte B — Nel repo

- `components/home/DemoRequestForm.tsx` — `id="demo"`, stati success/error, `fetch("/api/demo", ...)`.
- Copy e messaggi: `content/en/home.ts` (`demo`).
- Handler API: `app/api/demo/route.ts` (verifica corpo atteso e risposte).

### Checklist UX

- Label visibili, non solo placeholder.
- Errore vicino al campo; messaggio specifico (non “Invalid”).
- Success: cosa succede dopo (email inviata, call schedulata)?

## Approfondimento ufficiale

- [React: Forms](https://react.dev/reference/react-dom/components/form)
- [MDN: Form data validation](https://developer.mozilla.org/en-US/docs/Learn_web_development/Extensions/Forms/Form_validation)
- [Next.js: Route Handlers](https://nextjs.org/docs/app/building-your-application/routing/route-handlers)

## Esercizio

Compila il form con input invalido e cattura screenshot degli errori: valuta contrasto testo/sfondo (WCAG).

**Criteri di successo:** screenshot o rapporto “pass / fail” con ratio approssimativo o strumento usato.

## Prossimo

[13-accessibility](../quality/13-accessibility.md)
