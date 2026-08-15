import { createMDX } from 'fumadocs-mdx/next';

const withMDX = createMDX();

/** @type {import('next').NextConfig} */
const config = {
  output: 'export',
  reactStrictMode: true,
  // GitHub Pages project site: https://ahadkhan9.github.io/aspnet-mastery/
  basePath: '/aspnet-mastery',
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
};

export default withMDX(config);
