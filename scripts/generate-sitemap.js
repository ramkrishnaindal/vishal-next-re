const fs = require("fs");
const globby = require("globby");

const generateSitemap = async () => {
  // Fetch all routes based on patterns
  // Your folder structure might be different so change bellow to match your needs
  const pages = await globby([
    "pages/**/*.{js,jsx,mdx}", // All routes inside /pages
    "_content/**/*.mdx", // All MDX files inside my /_content
    "!pages/**/[*.{js,jsx}]", // Ignore my dynamic route index Example /pages/blog/[slug].tsx
    "!pages/_*.{js,jsx}", // Ignore next.js files
    "!pages/api", // Ignore API routes
    "!pages/admin/[*.{js,jsx}]", // Ignore pages not meant to be indexed
  ]);

  const urlSet = pages
    .map((page) => {
      // Remove none route related parts of filename.
      const path = page
        .replace("pages", "")
        .replace("_content", "")
        .replace(/(.jsx|.js)/, "")
        .replace(".mdx", "");
      // Remove the word index from route
      const route = path === "/index" ? "" : path;
      // Build url portion of sitemap.xml
      return `<url><loc>https://localhost${route}</loc></url>`;
    })
    .join("");

  // Add urlSet to entire sitemap string
  const sitemap = `<?xml version="1.0" encoding="UTF-8"?><urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">${urlSet}</urlset>`;

  // Create sitemap file
  fs.writeFileSync("public/sitemap.xml", sitemap);
};

module.exports = generateSitemap;
