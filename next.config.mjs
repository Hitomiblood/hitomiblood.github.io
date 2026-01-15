/** @type {import('next').NextConfig} */
const nextConfig = {
  /**
   * Configure Next.js to produce a static export.
   * This is perfect for deploying to static hosts like GitHub Pages.
   */
  output: 'export',

  /**
   * We don't need to set a `basePath` here because the repository name
   * is `hitomiblood.github.io`, which means it's a user/organization site
   * that will be served from the root of the domain.
   */
};

export default nextConfig;
