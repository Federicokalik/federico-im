# federico.im — v2.0 (8-bit Synthwave)

Portfolio personale di **Federico Calicchia** (Web Designer & Developer, prov. Frosinone).
Redesign 2026 in stile **NES + synthwave Tokyo Night**.

Sito live: https://federico.im
Brand commerciale: [calicchia.design](https://calicchia.design)

## Stack

- **[Astro 6](https://astro.build/)** — static site generator (ClientRouter view transitions, Content Layer API)
- **[NES.css](https://github.com/nostalgic-css/NES.css)** v2.3.0 — chrome 8-bit (button, container, dialog, progress, badge, icon)
- **[Bulma](https://bulma.io)** v1.0.4 — utility grid/layout (componenti NES.css scopiano)
- **[Press Start 2P](https://fonts.google.com/specimen/Press+Start+2P)** + **[VT323](https://fonts.google.com/specimen/VT323)** — typography (self-hosted via `@fontsource`, niente CDN esterni)
- **Vanilla TS/JS** — niente React, niente framework client (zero Astro islands attive)

## Caratteristiche

- 🌃 **Synthwave hero** — sole stripey + griglia prospettica animata + ritratto pixelizzato con glow
- 👾 **Portfolio cartridge** — ogni progetto stilizzato come cartuccia NES in puro CSS
- 🎮 **RPG Character Sheet + Quest Log** — pagina Background con avatar, stats, skill bars, quest completate, education unlocked
- 📖 **Game Manual booklet** — pagine progetto come manuale di un gioco con `◀ PREV / NEXT ▶`
- 💀 **Game Over 404** — pixel pulse + "PRESS START TO CONTINUE"
- ⚡ **Boot screen** — animazione iniziale skippabile (~1.5s), `sessionStorage`-gated, off con `prefers-reduced-motion`
- 🔊 **Sound toggle** — Web Audio API square-wave beeps, default **OFF**, persistente in `localStorage`
- 📺 **CRT scanlines** — overlay globale, rispetta `prefers-reduced-motion`
- ⌨️ **Type-on hero title** — `steps()` keyframe animation con cursore lampeggiante
- 🔢 **Live counters** — `DAYS PLAYING` + `YEARS OF XP` + `LV XX` calcolati client-side dal 2016-01-01, no rebuild necessario
- ♿ **A11y** — skip-link, focus rings 3px lime, touch targets ≥44px, contrast AA verificato su body text, `prefers-reduced-motion`, ARIA labels, markup semantico, navigazione tastiera completa
- 🔒 **Privacy-first** — **100% cookieless**, zero tracking (no GA/GTM/Pixel/Hotjar/Sentry/Plausible/etc.), font self-hosted, no CDN esterni di terze parti

## Setup

```bash
npm install
npm run dev      # http://localhost:4321
npm run build    # static output in ./dist
npm run preview  # serve ./dist
```

Richiede Node 22+ (Astro 6).

## Struttura

```
src/
├── components/
│   ├── AudioToggle.astro        Toggle SOUND on/off + Web Audio engine
│   ├── BootScreen.astro         Schermata BIOS-style 1.5s
│   ├── CallToAction.astro       Wrapper nes-btn link
│   ├── ContactCTA.astro         Sezione "INSERT COIN / COLLABORIAMO?"
│   ├── Footer.astro             Rainbow border + social + DAYS PLAYING
│   ├── Grid.astro               CSS grid auto-fill
│   ├── Hero.astro               Title + tagline + slot (typeOn opzionale)
│   ├── Icon.astro + IconPaths.ts  SVG icons inline
│   ├── MainHead.astro           <head>: meta + CSS imports + boot flag
│   ├── Nav.astro                Menu NES con cursore pixel ▶, mobile drawer
│   ├── Pill.astro               Badge pixel (pink/blue/lime/violet)
│   ├── PortfolioPreview.astro   Cartuccia NES (CSS-only)
│   ├── Skills.astro             3 POWER-UPS nes-container
│   └── SynthwaveBackground.astro  Sole + griglia hero
├── content/
│   ├── config.ts                Schema content collection 'work'
│   └── work/                    8 progetti portfolio (Markdown)
├── layouts/
│   └── BaseLayout.astro         BootScreen + Nav + slot + Footer + counters JS
├── pages/
│   ├── 404.astro                Game Over
│   ├── background.astro         Character Sheet + Quest Log
│   ├── index.astro              Home (synthwave hero + power-ups + portfolio)
│   ├── privacy.astro            Privacy + cookie notice + accessibility statement
│   └── work/[slug].astro        Game manual booklet
└── styles/
    ├── global.css               Design tokens + reset + utility
    ├── nes-overrides.css        Tokyo Night palette su NES.css
    └── effects.css              Scanlines, sun, grid, cartridge, RPG, game-over
```

## Design tokens

Definiti in `src/styles/global.css` come CSS custom properties.

**Palette Tokyo Night** (dark synthwave only, no light theme):
- `--c-pink #ff2e88` · `--c-blue #3aafff` · `--c-lime #aaff00` · `--c-violet #c77dff`
- `--c-yellow #ffd166` · `--c-red #ff5c5c`
- Bg: `--c-bg #050714` · `--c-bg-elev #0a0e27` · `--c-surface #131634`

**Typography:**
- `--f-display: "Press Start 2P", "VT323", monospace` (H1-H2 + UI + button)
- `--f-body: "VT323", "PT Mono", monospace` (paragrafi + body)

**Spacing 4/8 grid:** `--sp-1 4px` ... `--sp-32 128px`

**Motion:** `--t-fast 120ms` · `--t-med 220ms` · `--t-slow 320ms` · `--ease-out` cubic-bezier soft

## Privacy & cookieless

- Nessun cookie impostato o letto (`document.cookie` mai usato)
- Nessun tracker (GA, GTM, Facebook Pixel, Hotjar, Mouseflow, Sentry, Plausible, Umami, ecc.)
- Font self-hosted via `@fontsource` — nessuna request a Google Fonts (zero IP leak)
- Nessun iframe o video cross-origin auto-caricato
- `localStorage` usato solo per due preferenze utente funzionali: `fk-audio` (sound on/off), `fk-boot-seen` (sessione)
- Nessun banner cookie necessario (Italian Garante 2021 guidelines)
- Pagina `/privacy` con informativa GDPR completa + accessibility statement

## Credits

Vecchio design (Astro 4 starter ufficiale): https://github.com/withastro/astro/tree/main/examples/portfolio
Redesign 2026: Claude Code + Federico.
