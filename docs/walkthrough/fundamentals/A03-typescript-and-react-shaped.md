# A03 — TypeScript + React “a forma di questo repo”

## Obiettivo

Capire **file `.tsx`**, **props**, **`"use client"`**, e perché certi hook compaiono solo in certi file.

## Parte A — Concetti

### TypeScript in pillole

- **Tipi** descrivono forma di dati: `type Props = { title: string }`.
- **Inference**: spesso non serve annotare ogni variabile se il compilatore deduce da destrutturazione o return.
- Gli errori in IDE spesso sono **sinceri**: correggili prima di aggiungere `any`.

### React: componenti e JSX

Un componente è una **funzione** che restituisce **JSX** (sintassi che sembra HTML ma è chiamate a `React.createElement`). I dati entrano come **props**; lo stato mutabile locale usa **`useState`**.

### Server vs Client Components (Next)

- Senza `"use client"` in cima al file, il modulo è trattato come **Server Component** (default App Router): niente hook browser-only.
- Con **`"use client"`**, il bundle viene idrato sul client: qui vivono `useState`, `useEffect`, listener, Framer Motion scroll, ecc.

Regola pratica in questo repo: **layout e page** spesso server; **sezioni animate** e form → client.

### `useEffect`: usa con parsimonia

Serve per **sincronizzare con il mondo esterno** (subscribe, timer, fetch al mount). Evita di usarlo per derivare valori che puoi calcolare durante il render (`const x = a + b`). Il capitolo Features mostra un pattern per evitare `setState` in effect quando basta un valore derivato.

## Parte B — Nel repo

1. Apri `app/en/page.tsx`: nota se importa componenti da `components/home/`.
2. Apri `components/home/HeroSection.tsx`: la prima riga è `"use client"` — elenca **tre** hook o API “client-only” usate lì.
3. Apri `content/en/home.ts`: sono **dati** TypeScript, non componenti — cosa importa la home da lì?

## Approfondimento ufficiale

- [TypeScript Handbook](https://www.typescriptlang.org/docs/handbook/intro.html)
- [React: Learn](https://react.dev/learn)
- [Next.js: Server and Client Components](https://nextjs.org/docs/app/building-your-application/rendering/server-components)

## Esercizio

Crea un branch o cartella temporanea: duplica **solo** la struttura di un componente presentazionale (es. un `div` con props tipizzate) senza stato, e usalo da un altro file con import relativo. Non serve mergiare: esercizio locale.

**Criteri di successo:** `npm run build` resta verde (o rimuovi il file dopo il test documentando cosa hai imparato).

## Prossimo

[A04-next-app-router](./A04-next-app-router.md)
