# 15 — Polish pass (prima del “fatto”)

> **Schema del libro:** [Parte A](#parte-a--concetto) = definition of done; [Parte B](#parte-b--nel-repo) = checklist file e comandi. Checkpoint finale: [CHECKPOINTS](../CHECKPOINTS.md) “V”.

## Obiettivo

Ultimo giro **sistematico**, non estetico random.

## Parte A — Concetto

Il **polish** non è “più animazioni”: è coerenza copy, link rotti, meta social, build CI, smoke cross-browser. Un **Definition of Done** condiviso evita merge prematuri.

## Parte B — Nel repo

### Checklist (circa 1 ora)

- [ ] Copy: nessun “Lorem”, placeholder EN coerente col tono legale.
- [ ] Link footer: privacy, terms, status — URL reali o `href="#"` documentato come TODO.
- [ ] Anno copyright dinamico (`SiteFooter`).
- [ ] OG meta / title per `/en` (condivisione Slack/LinkedIn).
- [ ] `npm run lint` e `npm run build` verdi.
- [ ] Safari + Chrome + Firefox smoke (hero + modale).
- [ ] Mobile: niente overflow orizzontale, CTA raggiungibili.

### Chiusura

Se tutto ok, aggiorna [DECISIONS](../reference/DECISIONS.md) con data / owner del polish pass.

## Approfondimento ufficiale

- [Next.js: Metadata](https://nextjs.org/docs/app/building-your-application/optimizing/metadata)

## Esercizio

Esegui l’intera checklist sopra e spunta ogni voce (o apri ticket per eccezioni).

**Criteri di successo:** checklist completa al 100% o issue aperte per ogni voce non soddisfatta con owner.

## Fine percorso

Completa [Checkpoint V](../CHECKPOINTS.md). Torna all’[indice](../README.md) o ripeti l’esercizio del [capitolo 01](../brief-layout/01-design-brief.md) con un nuovo membro del team.
