# Decision log (ADR leggeri)

Usa questo file per **1–3 righe** per decisione. Data + cosa + perché.

## Template

```
### YYYY-MM-DD — Titolo breve
**Decisione:** …
**Motivo:** …
**Alternative scartate:** …
```

## Esempi (da adattare al team)

### Portal per modale video
**Decisione:** `createPortal` su `document.body` per il layer video.  
**Motivo:** evita clip/stacking del hero con `overflow` e `transform`.  
**Alternative:** fixed dentro hero (bug su alcuni browser).

### Magnetic play solo desktop
**Decisione:** gate su media `(hover: hover) and (pointer: fine)`.  
**Motivo:** touch non beneficia del magnetic; risparmio CPU.

### Features + reduced motion
**Decisione:** niente typewriter state-driven in effect quando RM attivo.  
**Motivo:** conformità React lint e UX più calma.

---

Aggiungi nuove decisioni in cima alla sezione.

## Walkthrough “libro”

Il percorso didattico (fondamenti **A01–A06** + capitoli **01–15** + [CHECKPOINTS](../CHECKPOINTS.md)) è descritto in [README](../README.md). Aggiorna questo file quando cambi decisioni architetturali citate negli esercizi (es. spring magnetic, portal modale).

Torna all’[indice](../README.md).
