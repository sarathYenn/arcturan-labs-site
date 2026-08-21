# CLAUDE.md

Guidance for Claude Code working in this repository.

## What this repo is

The Arcturan Labs home page — `arcturanlabs.com`. Astro 4, static, on Cloudflare
Pages. One page today (`src/pages/index.astro`).

**Not** the blog. The blog is `~/Startups/sarathYenn.github.io`, a separate repo
on GitHub Pages at `blog.arcturanlabs.com`. Do not merge them; two hostnames
serving different content require two projects.

## Commands

`npm run dev` (4321) · `npm run build` → `dist/` · `npm run preview`.
No tests, no linter. Verify by building and looking at the page.

## Architecture

| File | Role |
|---|---|
| `src/data/site.ts` | **All content.** Studio copy, products, essay list. Change content here, never in markup. |
| `src/layouts/BaseLayout.astro` | HTML shell, design tokens on `:root`, nav, footer. |
| `src/pages/index.astro` | The page. Reads `site.ts` and lays itself out. |
| `public/logo.png` | The mark, cut out of the supplied lockup. 128px — it sits at 40px, and below ~40 the orbit rings collapse into noise, so do not shrink the slot. |
| `public/favicon.svg` | A *reduction* of the mark, not a copy — the full one is unreadable at 16px. See the note in the file before changing it. |
| `public/og-cover.jpg` | The full supplied lockup (mark + wordmark), cropped to 1.91:1 for social cards. |

Styling is scoped `<style>` per `.astro` file with CSS variables on `:root` —
same convention as the blog repo, so decisions can be shared between the sites.
There is no CSS framework.

## Design invariants

- **Two tones, both sampled off the logo.** `--accent` (cyan) for small marks —
  section numbers, the status dot, the CTA shadow — and `--deep` (navy) for
  large fields, currently just the splash gutter. Do not add a third hue. The
  page used genkos.app's red until the logo landed; red is the *product's*
  colour, and it stays with the product now that the company has its own.
  `--accent` is darkened from the mark's cyan in light mode so it clears 4.5:1
  at the 10–11px sizes it is actually used at — check contrast before retuning.
- **Both themes.** Tokens flip in `BaseLayout.astro`; components must not branch
  on theme. Light is ink on paper and is the truer mode for the medium.
- **Panel grammar.** 2px ink rules, offset hard shadows, halftone via CSS
  gradients (no image assets), 45° hatch for in-progress. Keep it CSS — it
  scales at any density and costs no requests.
- **The empty "In progress" section is deliberate**, not an oversight. It reads
  as focus. Populate `building` in `site.ts` and the copy switches to a list.

## Conventions

Branch → PR, never push to `main` — Cloudflare Pages builds a preview per PR,
which is the point of being there. Commit messages: imperative, lead with why.
