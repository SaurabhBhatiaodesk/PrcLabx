import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest): Promise<NextResponse> {
  const websiteUrl = "https://labxrepair.com.au/";
  const blogApi = "https://labxbackend.labxrepair.com.au/api/admin/blogs?page=1&limit=1000";
  let blogUrls: Set<string> = new Set();

  try {
    const blogResponse = await fetch(blogApi);
    const { blogs } = await blogResponse.json();
    if (Array.isArray(blogs)) {
      blogs.forEach((blog: any) => {
        if (blog.pageTitle) {
          blogUrls.add(`${websiteUrl}blogs/${blog.pageTitle.replace(/\s+/g, "-").toLowerCase()}`);
        }
      });
    }
  } catch (error) {
    console.error("Error fetching blog URLs:", error);
  }

  const lastMod = new Date().toISOString();

  const xmlSitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${Array.from(blogUrls)
  .map(
    (url) => `
  <url>
    <loc>${url}</loc>
    <lastmod>${lastMod}</lastmod>
    <changefreq>daily</changefreq>
    <priority>0.8</priority>
  </url>`
  )
  .join("")}
</urlset>`;

  return new NextResponse(xmlSitemap, {
    headers: {
      "Content-Type": "application/xml",
    },
  });
}
