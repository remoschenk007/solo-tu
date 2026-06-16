# solo tu — Webshop

Schwarzweiss, editorial, Giulia-Christen-Stil. Bild-getrieben.

## WICHTIG: Wie du die Seite ansiehst
Die Seite braucht ALLE Dateien im selben Ordner. Wenn du nur `index.html`
einzeln öffnest, fehlen CSS + Logo (= unstyled, blaue Links, Fragezeichen).

**Richtig lokal testen:**
1. Alle Dateien in einen Ordner legen
2. Terminal im Ordner: `python3 -m http.server`
3. Browser: http://localhost:8000

Oder direkt auf GitHub Pages deployen (siehe unten).

## Fotos einsetzen — der einzige offene Punkt
Überall wo ein Platzhalter steht (`data-ph="..."`), kommt dein Foto hin.
Such im CSS nach `[data-ph]` — dort ist die graue Platzhalter-Fläche definiert.

Pro Bildfläche: setz ein `background-image`. Beispiele:

**Hero** (index.html → `.hero-media`):
```css
.hero-media{background:url('img/hero.jpg') center/cover;}
```

**Bildpaar / Atelier / Produktkarten:** genauso — `background:url(...) center/cover`
auf `.pair-img`, `.atelier-img`, `.card-img`.

Lege deine Fotos in einen Unterordner `img/`. Empfehlung:
- Hero: schwarzes Shirt, Nahaufnahme Stoff, hochauflösend
- Bildpaar: 1× Detail (Naht/Kragen), 1× getragen/Körper
- Atelier: Hände/Werkstatt/Stoff
- Produktfotos: schwarzes Shirt auf schwarz, je Stück eins

## Dateien
- `index.html` — Startseite (Hero, Manifest, Bildpaar, Work, Featured, Atelier, Commission)
- `shop.html` — Shop + Warenkorb-Drawer
- `product.html` — Produktdetail (`?id=st-001`)
- `style.css` / `shop.css` / `product.css`
- `products.js` — Katalog (später Supabase)
- `main.js` / `shop.js` / `product.js`
- `logo.png` — dein Logo, transparent

## GitHub Pages
1. Repo `solo-tu` auf github.com/remoschenk007
2. Dateien rein, commit & push
3. Settings → Pages → Branch `main` → Save
4. Live: remoschenk007.github.io/solo-tu

## Danach
- Supabase: `products`-Tabelle, products.js → Fetch
- Stripe: checkout()-Funktion in shop.js
- Domain: solotu.ch
