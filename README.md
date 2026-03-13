# Uplift — Compliment & Joke Generator

A feel-good web app that generates personalized compliments and jokes with a polished, animated UI.

## Features

- **Two modes** — switch between Compliments and Jokes
- **Personalized compliments** — optionally enter your name for a personal touch
- **Tap-to-reveal punchlines** — jokes hide the punchline until you tap
- **Favorites** — save items you love and manage them in a modal
- **Copy & Share** — copy to clipboard or share via the Web Share API (falls back to Twitter)
- **Dark mode** — toggle between light and dark themes
- **Animated background** — floating blobs, a particle canvas, and landscape image transitions on the card
- **Confetti burst** — fires on favoriting an item
- **Toast notifications** — feedback for copy, save, and reshuffle events
- **Fully accessible** — ARIA labels, live regions, focus management, and keyboard support

## Tech Stack

- Vanilla HTML, CSS, and JavaScript — no frameworks or dependencies
- Google Fonts: DM Serif Display & DM Sans
- Canvas API for the particle system
- CSS custom properties for theming
- Web Share API with Twitter fallback

## Project Structure

```
compliment-generator/
├── index.html       # App shell and markup
├── app.js           # All logic: data, state, DOM, events
├── styles.css       # Theming, layout, animations
├── favicon.svg      # SVG favicon
└── images/          # Landscape background images (WebP)
    ├── Landscape-1.webp
    ├── Landscape-2.webp
    ├── Landscape-3.webp
    ├── Landscape-4.webp
    └── Landscape-5.webp
```

## Getting Started

No build step required. Just open `index.html` in a browser:

```bash
open index.html
```

Or serve it with any static file server:

```bash
npx serve .
```

## Content

- **100+ compliments** across categories: emotional, professional, humorous, and kind-hearted
- **26 jokes** with setup/punchline format

All content cycles without repeats until the full pool is exhausted, then reshuffles automatically.
