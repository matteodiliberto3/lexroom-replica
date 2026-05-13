# Come funziona questo libro (modello didattico)

## Cosa ti promette

Un percorso che alterna **insegnare lo stack** e **applicarlo al clone Lexroom**. Non sostituisce la documentazione ufficiale di Next/React/Tailwind/Motion: la **incornicia** con ordine, esercizi e punti d’ancora nel codice reale.

## Cosa non ti promette

- Non è un corso universitario completo su ogni argomento.
- Non garantisce un clone identico **solo** leggendo, senza scrivere codice e senza consultare le doc ufficiali quando indicato.

## Due strati in quasi ogni capitolo (dopo i fondamenti)

| Strato | Nome | Contenuto |
|--------|------|-----------|
| **A** | *Concetto / stack* | Idee trasferibili: cos’è, perché esiste, errore tipico. |
| **B** | *Nel nostro repo* | File, classi, pattern concreti di `lexroom-replica`. |

Nei capitoli **A01–A06** lo strato A è lungo e il B è minimo (esempi legati al repo). Nei capitoli **01–15** spesso trovi A breve + B esteso.

## Ordine di lettura consigliato

1. Se hai **già** fatto React + un po’ di Next: leggi [README indice](../README.md) → **01–15**; usa **A01–A06** in [`../fundamentals/`](../fundamentals/) come glossario quando incappi in un buco.
2. Se parti **da zero** su questo stack: **A01 → A06** per intero, poi **01 → 15** in ordine (vedi tabelle nel README).
3. In parallelo: IDE aperto sulla root del repo, `npm run dev`, DevTools (Elements + Network).

## Esercizi e criteri di successo

Ogni esercizio ha **criteri di successo** osservabili (comportamento, build, DevTools). Se non li soddisfi, ripeti il capitolo o la sezione “Approfondimento” prima di proseguire.

## Checkpoint

Dopo ogni *parte* del percorso (vedi [README indice](../README.md)), apri [CHECKPOINTS](../CHECKPOINTS.md) e completa il blocco corrispondente. È il modo in cui il libro “chiude” un argomento come farebbe un corso.

## Indice per tecnologia

Per trovare tutti i punti dove si parla di React, Next, ecc.: [STACK-INDEX](../STACK-INDEX.md).

## Mappa cartelle

| Cartella | Capitoli |
|----------|----------|
| `meta/` | Questo file |
| `fundamentals/` | A01–A06 |
| `brief-layout/` | 01–04 |
| `hero-motion/` | 05–09 |
| `sections-forms/` | 10–12 |
| `quality/` | 13–15 |
| `reference/` | Glossario, decision log |

## Prossimo

- Se sei nel percorso fondamenti: [A01-web-platform-primer](../fundamentals/A01-web-platform-primer.md)
- Se salti i fondamenti: [01-design-brief](../brief-layout/01-design-brief.md)
