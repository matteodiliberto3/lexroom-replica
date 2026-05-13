# 02 — Stack e vincoli

> **Schema del libro:** [Parte A](#parte-a--concetto) = cos’è uno “stack” e come leggerlo; [Parte B](#parte-b--nel-repo) = dipendenze e vincoli *di questo* clone. Fondamenti stack: [A01](../fundamentals/A01-web-platform-primer.md)–[A06](../fundamentals/A06-framer-motion-primer.md).

## Obiettivo

Sapere **cosa** il runtime ti dà e **cosa** non aspettarti, così non combatti il framework.

## Parte A — Concetto

Il **package.json** elenca dipendenze di runtime e di sviluppo: sono contratti di versione (semver). **Next** orchestra build, routing e rendering; **React** è la UI; **Tailwind** genera CSS da classi; **Motion** aggiunge animazione dichiarativa. Prima di debuggare un bug, verifica versione (`npm ls next`) e doc corrispondente.

## Parte B — Nel repo

### Stack (da `package.json`)

| Tecnologia | Versione indicativa | Ruolo |
|------------|---------------------|--------|
| **Next.js** | 16.x | App Router, `layout.tsx`, routing |
| **React** | 19.x | Server/Client Components |
| **Tailwind CSS** | 4.x | `@import "tailwindcss"`, `@theme inline` in CSS |
| **Framer Motion** | 12.x | Hero scroll, entrance, features, `Button` |
| **lucide-react** | 1.x | Icone nelle card features |
| **clsx** + **tailwind-merge** | — | `cn()` per classi condizionali |

### Vincoli di replica

- **Asset**: molte immagini e font arrivano da **CDN esterni** (Webflow / brand); il sito dipende da rete e CORS dove applicabile.
- **Video**: embed **Vimeo** via URL in `lib/site-config.ts` — autoplay gestito in codice all’apertura modale.
- **Non è il CMS originale**: aggiornare copy = toccare `content/en/*.ts` (o equivalente), non un pannello.

### Dove sta la “verità”

| Tipo | Path tipici |
|------|-------------|
| Copy EN | `content/en/home.ts`, `content/en/navigation.ts` |
| Config brand / URL | `lib/site-config.ts` |
| Shell globale | `app/layout.tsx`, `app/globals.css` |
| Pagina home | `app/en/page.tsx` |

## Approfondimento ufficiale

- [Next.js: Getting Started](https://nextjs.org/docs/app/getting-started)
- [React: Installation](https://react.dev/learn/installation)
- [Tailwind CSS](https://tailwindcss.com/docs)

## Esercizio

Da root repo: `npm run dev`, apri `/en`, elenca **3 dipendenze esterne** visibili in Network (CDN, Vimeo, font). Annota cosa succede se una fallisce.

**Criteri di successo:** elenco di 3 URL o host + una frase di impatto UX per ciascuno (es. font non caricato → FOIT/FOUT).

## Prossimo

[03-design-tokens](./03-design-tokens.md)
