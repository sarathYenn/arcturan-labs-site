# arcturan-labs-site

Home page for [arcturanlabs.com](https://arcturanlabs.com). Astro 4, static
build, deployed on Cloudflare Pages.

The blog is a **separate** site — `sarathYenn.github.io`, deployed to GitHub
Pages at `blog.arcturanlabs.com`. Neither GitHub Pages nor Cloudflare Pages
serves different content on two hostnames from one project, so the two sites are
two repos on purpose.

## Commands

| Action | Command |
|---|---|
| Dev server | `npm run dev` → http://localhost:4321 |
| Production build | `npm run build` → `dist/` |
| Preview the build | `npm run preview` |

No test suite and no linter, matching the blog repo.

## Where the content lives

`src/data/site.ts`. Adding a product, promoting one from `building` to
`shipped`, or changing the intro is an edit to that file — the page reads from
it and lays itself out. If you are editing markup to add a product, you are in
the wrong file.

## Deploying

Cloudflare Pages, connected to this repo:

| Setting | Value |
|---|---|
| Framework preset | Astro |
| Build command | `npm run build` |
| Output directory | `dist` |
| Node version | 20 or later |

Every pull request gets a preview URL, which is the reason this is on Cloudflare
Pages rather than GitHub Pages — the page is design-led and worth looking at
before merging.

### DNS

`arcturanlabs.com` is already on Cloudflare, so the apex needs no A-records:
add the custom domain in the Pages project and Cloudflare creates a flattened
CNAME. Add `www` as a second custom domain if you want it to resolve.

Do not point `blog.arcturanlabs.com` at this project. It belongs to the blog,
and attaching it here would serve this site's routes under that hostname.

## Design

Manga-page grammar — panels, gutters, halftone, hard ink rules — taken from what
the studio builds rather than invented. One accent (`#E5484D`), which echoes
genkos.app's own brand red.

Both themes are first-class: manga is ink on paper, so light is arguably the
truer mode. Tokens flip in `BaseLayout.astro`; components never branch on theme.
