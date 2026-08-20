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

Styling is scoped `<style>` per `.astro` file with CSS variables on `:root` —
same convention as the blog repo, so decisions can be shared between the sites.
There is no CSS framework.

## Design invariants

- **One accent.** `--accent` only, echoing genkos.app's brand red. Adding a
  second hue breaks the ink-and-one-colour logic the whole page rests on.
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
