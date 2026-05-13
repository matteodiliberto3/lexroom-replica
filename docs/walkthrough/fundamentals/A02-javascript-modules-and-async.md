# A02 — JavaScript moderno (moduli, `async`, errori)

## Obiettivo

Leggere e scrivere handler come nel form demo (`fetch`, `try/catch`, stato) senza confusione su `import`/`export`.

## Parte A — Concetti

### Moduli ES

`import { x } from "./file"` / `export function` — ogni file è un modulo con scope proprio. Next e TypeScript compilano verso bundle che il browser esegue.

### `async` / `await`

`async function` restituisce una Promise. `await` sospende la funzione finché la Promise non si risolve. Gli errori di rete o HTTP vanno gestiti con **`try/catch`** o `.catch()`.

### JSON e risposte HTTP

`const res = await fetch(url); const data = await res.json();` — controlla sempre `res.ok` o lo status prima di assumere successo (vedi pattern in `DemoRequestForm.tsx`).

## Parte B — Nel repo

Apri `components/home/DemoRequestForm.tsx`:

- Nota `useState` per `formState` e messaggi errore.
- Segui `fetch("/api/demo", { method: "POST", body: JSON.stringify(...) })`.
- Cosa succede se `throw new Error`? Dove viene mostrato il messaggio all’utente?

## Approfondimento ufficiale

- [MDN: JavaScript modules](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Modules)
- [MDN: async function](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/async_function)
- [MDN: Using the Fetch API](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch)

## Esercizio

Senza cambiare UX, aggiungi un `console.log` temporaneo dopo `res.json()` che stampi solo le **chiavi** dell’oggetto risposta in caso di successo; rimuovilo dopo il test.

**Criteri di successo:** vedi log in console al submit valido; nessun errore in console al submit invalido (o errori solo attesi).

## Prossimo

[A03-typescript-and-react-shaped](./A03-typescript-and-react-shaped.md)
