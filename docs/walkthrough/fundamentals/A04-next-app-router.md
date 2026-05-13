# A04 — Next.js App Router (cartelle `app/`, layout, rotte)

## Obiettivo

Sapere **quale file** risponde a `/en`, come si annidano i `layout`, dove mettere CSS globale.

## Parte A — Concetti

### File-system routing

La cartella `app/` definisce le URL. `app/page.tsx` → `/`. `app/en/page.tsx` → `/en`.

### `layout.tsx` vs `page.tsx`

- **`layout`**: guscio condiviso (header ripetuto, font, provider). Non si remounta ad ogni navigazione interna alla stessa gerarchia.
- **`page`**: contenuto specifico della rotta.

### Metadati

Export `metadata` o `generateMetadata` da layout/page per `<title>` e Open Graph (vedi doc Next).

### API Routes

File `app/api/.../route.ts` espone handler HTTP. Il form demo chiama `/api/demo`.

## Parte B — Nel repo

Percorso suggerito (apri i file nell’ordine):

1. `app/layout.tsx` — font, `MotionConfig`, `body`.
2. `app/en/layout.tsx` — shell EN (header/footer).
3. `app/en/page.tsx` — composizione sezioni home.
4. `app/api/demo/route.ts` — cosa riceve e cosa risponde (anche mock).

## Approfondimento ufficiale

- [Next.js: App Router](https://nextjs.org/docs/app)
- [Next.js: Defining Routes](https://nextjs.org/docs/app/building-your-application/routing/defining-routes)
- [Next.js: Layouts and Pages](https://nextjs.org/docs/app/building-your-application/routing/pages-and-layouts)
- [Next.js: Route Handlers](https://nextjs.org/docs/app/building-your-application/routing/route-handlers)

## Esercizio

Aggiungi temporaneamente una rotta `app/test-book/page.tsx` con solo un `<h1>Test</h1>`, visita `/test-book`, poi elimina il file.

**Criteri di successo:** vedi la pagina in dev; dopo rimozione la rotta dà 404.

## Prossimo

[A05-tailwind-v4-and-globals](./A05-tailwind-v4-and-globals.md)
