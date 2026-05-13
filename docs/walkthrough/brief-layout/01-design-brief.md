# 01 — Design brief (prima di aprire l’IDE)

> **Schema del libro:** [Parte A](#parte-a--concetto) = cos’è un brief e perché serve; [Parte B](#parte-b--nel-repo) = contesto di *questa* replica. Modello completo: [Come funziona questo libro](../meta/how-the-book-works.md).

## Obiettivo del capitolo

Scrivere in una pagina **per chi** è il sito, **cosa** deve convincere l’utente, **cosa** non deve diventare. Senza questo, il codice tende a “feature parity” senza anima.

## Parte A — Concetto

Un **design brief** è un accordo leggero su audience, azioni primarie, tono e anti-goal. Non è il design system: è il **filtro** con cui valuti ogni PR (“questo aiuta la conversione demo o distrae?”). In team si aggiorna quando cambia posizionamento o mercato.

## Parte B — Nel repo

È una **replica / studio** della home marketing Lexroom in inglese (`/en`): hero legale, prova sociale, pricing, FAQ, richiesta demo. Non è l’app prodotto (`app.lexroom.ai`).

### Domande obbligatorie (da tenere in README di team o in `DECISIONS.md`)

1. **Audience**: avvocati, legal counsel, firm — decision maker o explorer?
2. **Azione primaria**: qui è **“Book a demo”** (CTA ripetuta, anchor `#demo`).
3. **Azione secondaria**: **video prodotto** — prova, non conversione immediata.
4. **Tono**: istituzionale + tech confident; evitare “startup generica” se il brand chiede sobrietà.
5. **Anti-goal**: non aggiungere pagine o flussi che il sito originale non suggerisce; non mascherare una demo con un wizard lungo.

### Decisioni di design (da documentare)

| Decisione | Motivo |
|-----------|--------|
| Una lingua per URL (`/en`) | Chiarezza; altre lingue possono essere “coming soon” nel clone. |
| Hero blu + serif display | Contrasto emotivo “serietà legale” vs corpo sans leggibile. |
| Video sotto hero, non solo embed in hero | Narrativa: prima promessa, poi prova visiva. |

## Approfondimento (non tecnico ma utile)

- [Nielsen Norman Group: UX goals](https://www.nngroup.com/articles/ux-goals/) — obiettivi misurabili lato utente.

## Esercizio

Scrivi 5 bullet “**Se sbagliamo X, l’utente crede Y**” (es. placeholder copy → “sito non finito”). Incollali in un issue o in [DECISIONS](../reference/DECISIONS.md).

**Criteri di successo:** 5 bullet coerenti con il tono legale; almeno 2 legati a trust/compliance.

## Prossimo

[02-stack-and-constraints](./02-stack-and-constraints.md)
