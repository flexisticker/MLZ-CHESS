# Grübelschach – Projektgedächtnis

- Kunde: Michael (Flexisticker), Deutsch, Du-Form. Wunsch 25.10.2026: Schach aus Nova (`flexisticker/nova-assistant`,
  Zweig `claude/loving-thompson-bdc8o1`, `plugins/schach.py` + Cockpit) als eigenständige HTML-App mit Sprüchen,
  lustigen Effekten, Stufen 1–10 (1 wirklich sehr leicht) und grübelndem Männchen am Tisch.
- Alles steckt in `index.html` (keine Build-Schritte). Engine = `ENGINE()`; Stufen-Tabellen `WEAK`/`STRONG`,
  Gegner-Typen `LEVELS`, Sprüche `L`, Effekte `SFX`/`burst`/`confetti`/`stamp`, Quatsch `pigeon/snail/sneeze/ufo`.
- Nach Änderungen: `node tests/perft.js` (alle OK) und im Browser bei 1280 px und 390 px prüfen.
- Grafiken/Sprüche bewusst selbst gezeichnet bzw. fest hinterlegt (fal.ai-Downloads sind in der Cloud-Sitzung gesperrt).
- Nicht getestet: echte Handys/Tablets (Touch, Sprachausgabe je Gerät), Spielstärke-Gefühl der Stufen.
