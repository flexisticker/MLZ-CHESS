# Grübelschach

Schach gegen einen grübelnden Gegner am Tisch – als **eine einzige HTML-Datei** (`index.html`).
Nachbau des Schachspiels aus Nova (Glas-Optik), aber ohne Server: Der Gegner rechnet direkt im Browser.

## Starten

- `index.html` per Doppelklick im Browser öffnen (Chrome, Edge, Firefox, Safari) – fertig.
- Oder online über GitHub Pages: Einstellungen → Pages → Branch `main`, Ordner `/`.
- Internet braucht es nur für die Schriften (Orbitron/Rajdhani); ohne Netz nimmt der Browser eine Ersatzschrift.

## Was drin ist

- **10 Gegner** von „Kalle Knautsch“ (Stufe 1, spielt fast zufällig) bis „Der Toaster“ (Stufe 10, rechnet ~3 s).
  Stufen 1–7 spielen absichtlich schwach (Anteil Zufallszüge + „gut genug“-Züge), 8–10 suchen ernsthaft.
- **Grübelndes Männchen** am Tisch: kratzt sich am Kinn, Augen wandern, Denkblasen, ab Stufe 8 rauchender Kopf
  und Schweißtropfen, Glühbirne kurz vor dem Zug. Freut sich, ärgert sich, weint, tanzt. Antippen = pieksen.
- **Sprüche** zu Schlagen, Schach, Patzer, starke Züge, Rochade, Umwandlung, Sieg/Niederlage, Langeweile, Tipps.
  Optional vorgelesen (Knopf „Stimme“, deutsche Systemstimme).
- **Effekte:** gleitende Figuren, geschlagene Figuren fliegen weg, Funken, Wackeln, Stempel „SCHACH!“, Konfetti, Regenwolke.
- **Quatsch-Modus:** Taube fliegt übers Bild, Schnecke kriecht am Brett entlang, Niesen (Figuren wackeln),
  UFO klaut den Kaffee, Stufe 1–2 schläft manchmal ein.
- Figuren: Kristall (wie Nova), Klassik, Zoo. Tipp, Zug zurück, Brett drehen, Aufgeben, Vollbild.
- Partie, Einstellungen und Bilanz je Gegner bleiben im Browser gespeichert (localStorage).

## Technik

- Eigene Zuggenerierung + Alpha-Beta-Suche mit Ruhesuche in `ENGINE()` (zwischen `/*ENGINE-START*/` und `/*ENGINE-END*/`),
  läuft im Web Worker, damit die Animationen flüssig bleiben.
- Test der Zugregeln: `node tests/perft.js` (Perft-Standardstellungen inkl. Rochade, en passant, Umwandlung).
- Klänge per WebAudio erzeugt, Grafiken als SVG/CSS – keine externen Dateien.
