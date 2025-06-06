export const dynamic = "force-dynamic";

export async function GET(req: Request): Promise<Response> {
  // List of URLs to be included in the sitemap
   const staticUrls = [
    "https://www.prcrepair.com.au/api/web-urls",
    "https://www.prcrepair.com.au/api/blogs-urls",
  ];

  // Helper function to escape special characters in URLs
  const escapeXml = (unsafe: string): string => {
    return unsafe
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;")
      .replace(/'/g, "&apos;");
  };

  const urls: string[] = [...staticUrls];

  // Build the XML for the sitemap
  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
    <sitemapindex xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
      ${urls
        .map((url) => {
          return `
        <sitemap>
          <loc>${escapeXml(url)}</loc>
        </sitemap>`;
        })
        .join("")}
    </sitemapindex>`;

  // Return the sitemap as an XML response
  return new Response(sitemap, {
    headers: {
      "Content-Type": "application/xml",
    },
  });
}
