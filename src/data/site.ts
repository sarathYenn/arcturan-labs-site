/**
 * Everything the home page says about the studio, in one place.
 *
 * The page reads from here and lays itself out. Adding a product, moving one
 * from `building` to `shipped`, or changing the intro is an edit to this file —
 * not to markup. That is deliberate: the next change to this site is far more
 * likely to be "we launched a thing" than "the grid should be different".
 */

export const studio = {
  name: 'Arcturan Labs',
  legalName: 'Arcturan Labs Inc.',
  location: 'Canada',
  // The headline. Short, concrete, and about what the studio does rather than
  // what it believes.
  headline: 'We build software that ships and keeps shipping.',
  intro:
    'A small engineering studio in Canada. We design, build and run our own ' +
    'products — and write down what breaks along the way.',
  email: 'hello@arcturanlabs.com',
  blogUrl: 'https://blog.arcturanlabs.com',
};

export type Product = {
  name: string;
  tagline: string;
  url: string;
  /** Short label rows shown under the tagline. Keep to three; more reads as a spec sheet. */
  facts: { label: string; value: string }[];
};

/** Live and public. One entry presented large beats three presented thinly. */
export const shipped: Product[] = [
  {
    name: 'genkos.app',
    tagline: 'Turn any story into manga — panel by panel.',
    url: 'https://genkos.app',
    facts: [
      { label: 'Live', value: 'Public, taking payments' },
      { label: 'Stack', value: 'FastAPI · Next.js · Postgres · Replicate' },
      { label: 'Model', value: 'Prepaid credits, first manga free' },
    ],
  },
];

/**
 * In progress. Empty is a valid and honest state — the page says "one thing at
 * a time" rather than hiding the section, because focus reads better than
 * absence. Add entries here and the copy switches to listing them.
 */
export const building: Product[] = [];

/**
 * Essays, newest first. Titles only — the blog owns the posts, this is a
 * pointer to them. Kept here rather than fetched so the site stays a static
 * build with no cross-site dependency at deploy time.
 */
export const writing: { title: string; slug: string }[] = [
  { title: "Diffusion Models Aren't LLMs", slug: 'diffusion-models-arent-llms' },
  { title: 'Agents in CI Fail Silently', slug: 'agents-in-ci-fail-silently' },
  { title: 'Seeds Fix Where, Not What', slug: 'seeds-fix-where-not-what' },
  { title: 'Why Boring Technology Usually Wins', slug: 'why-boring-tech-wins' },
  { title: 'Speculative Execution for Generative AI UX', slug: 'speculative-execution-for-generative-ux' },
  { title: 'Parallel Agents, Serial Reviews', slug: 'parallel-agents-serial-reviews' },
  { title: 'A Full Restaurant With a Cold Kitchen', slug: 'full-restaurant-cold-kitchen' },
  { title: "A Policy That Isn't a Gate Is a Suggestion", slug: 'policy-that-isnt-a-gate' },
  { title: 'Isolation Is a Configuration Property', slug: 'zero-upfront-multi-tier-deploy' },
];
