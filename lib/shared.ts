export const appName = 'ASP.NET Core Mastery';
// GitHub Pages project site base path — must match next.config.mjs `basePath`.
// Client-side fetches (search, markdown copy) need it explicitly: basePath only
// rewrites server-rendered links, not string literals in client components.
export const siteBasePath = '/aspnet-mastery';
export const docsRoute = '/docs';
export const docsImageRoute = '/og/docs';
export const docsContentRoute = '/llms.mdx/docs';

// GitHub repo hosting this site (used for the "View on GitHub" links)
export const gitConfig = {
  user: 'ahadkhan9',
  repo: 'aspnet-mastery',
  branch: 'main',
};
