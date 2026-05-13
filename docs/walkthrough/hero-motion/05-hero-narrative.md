# 05 — Hero: narrativa (prima del DOM)

> **Schema del libro:** [Parte A](#parte-a--concetto) = gerarchia contenuti tipica landing; [Parte B](#parte-b--nel-repo) = come si riflette nel copy. Brief prodotto: [01](../brief-layout/01-design-brief.md).

## Obiettivo

Allineare **ordine di lettura** e **ordine visivo**: headline → sottotitolo → CTA → prova (loghi) → video come “second act”.

## Parte A — Concetto

In una **landing B2B**, l’utente scansiona in **F** o **Z**: la prima riga (headline) deve portare la promessa; il sottotesto riduce ambiguità; la CTA primaria deve essere visibile senza scroll su viewport tipici. Il video è **prova**, non concorrente della headline: se compete, abbassi comprensione e conversione.

## Parte B — Nel repo

### Gerarchia Lexroom-style (da confrontare con `content/en/home.ts`)

1. **Eyebrow** (opzionale): categoria / trust line breve.
2. **Headline**: promessa in una frase forte (serif grande).
3. **Subcopy**: chiarifica *per chi* e *cosa* senza diluire la headline.
4. **CTA row**: primaria (demo) + secondaria (video) se il brief lo chiede.
5. **Social proof**: loghi partner in marquee o griglia statica.
6. **Video block**: “vedi il prodotto” — spesso sotto la piega ma ancora above the fold su desktop largo.

### Errore comune

Mettere il video **dentro** la headline come elemento concorrente: due messaggi che urlano. Meglio **stadio** (scroll) o **sequenza** (video dopo copy) — vedi implementazione in [06](./06-hero-implementation.md).

## Approfondimento (UX copy)

- [NNGroup: Legibility](https://www.nngroup.com/articles/legibility-readability-comprehension/) — leggibilità vs comprensione.

## Esercizio

Rileggi `content/en/home.ts` (`hero` block) e segnala una frase che potresti accorciare del 30% senza perdere significato legale.

**Criteri di successo:** frase originale + versione accorciata + nota su cosa rischi di perdere (tono / precisione legale).

## Prossimo

[06-hero-implementation](./06-hero-implementation.md)
