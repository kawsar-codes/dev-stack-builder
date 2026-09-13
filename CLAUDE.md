# Dev Stack Builder — project guide

This is Kawsar's Programming Hero **assignment A-5**. The full requirement list is in
`docs/ASSIGNMENT.md` — read it before building any feature, and check work against it.

## Who I am working with

Kawsar is an early-to-intermediate self-taught developer. Explain new concepts in **Bangla**,
step by step, with examples — but keep all code, file names and technical terms in English.
Explain *why* a piece of code is written that way, not just what it does. He is learning, so
prefer clear, readable code over clever code.

## Tech stack (already installed — do not add more without asking)

React 19 + TypeScript · Vite 8 · Tailwind CSS v4 · daisyUI 5 · react-toastify 11

## Things that are easy to get wrong here

- **Tailwind is v4, not v3.** There is no `tailwind.config.js` and no `content` array. Tailwind is
  wired up through the `@tailwindcss/vite` plugin in `vite.config.ts`, and everything else is
  configured inside `src/index.css` with `@import 'tailwindcss'`, `@plugin 'daisyui'`, `@theme`
  and `@utility`. Never create a v3-style config file.
- **The brand gradient is defined in exactly one place** — the three color variables in the
  `@theme` block of `src/index.css`. Use the `brand-gradient` utility for gradient backgrounds
  (buttons, logo badge) and `brand-gradient-text` for gradient text (brand name, hero heading).
  Never hardcode those colors anywhere else; changing those three values must re-theme the site.
- **Technology data must be fetched, never hardcoded.** It lives in `public/technologies.json`
  (15 items) and is loaded at runtime with `fetch('/technologies.json')` inside `useEffect`.
  Do not import it as a module and do not paste the array into a component.
- **Run npm commands only in Kawsar's own VS Code terminal** on his Mac. `node_modules` was once
  installed from a Linux environment and the native binaries did not work on macOS.

## Conventions

- One component per file in `src/components/`, named in PascalCase.
- Shared TypeScript types go in `src/types.ts`.
- No `any`. Type the technology object properly.
- No lorem ipsum — every piece of text must be real, relevant content.
- Commit often with meaningful messages (`feat:`, `fix:`, `style:`, `docs:`). The assignment
  requires at least 8 commits, so commit after each feature rather than all at once.

## Current state

Done:
- Repo set up and pushed to https://github.com/kawsar-codes/dev-stack-builder
- Vite + React + TS scaffolded, Tailwind v4 + daisyUI + react-toastify installed
- Brand gradient theme defined in `src/index.css`
- `public/technologies.json` created with 15 technologies across 7 categories
- `README.md` written (project name, description, tech list, 3 features). The 7 React questions
  at the bottom still say `_To be written._` — **Kawsar must answer those in his own words.**
  Help him phrase them, but do not silently write them for him.

Still to build:
- Navbar (sticky, with mobile hamburger menu)
- Hero / banner section
- Technology card grid (3 / 2 / 1 columns) loading from the JSON with a loading state
- "Your Stack" sidebar panel with add, duplicate warning, single remove and Remove All
- react-toastify alerts for every stack action
- Footer
- Responsive polish, then deploy (Netlify / Vercel / Cloudflare Pages)
