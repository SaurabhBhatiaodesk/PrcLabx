import { NextRequest, NextResponse } from "next/server";
import * as cheerio from "cheerio";

export async function GET(req: NextRequest): Promise<NextResponse> {
  const websiteUrl = "https://www.prcrepair.com.au/";
  let fetchedUrls: Set<string> = new Set();

  try {
    const response = await fetch(websiteUrl);
    const html = await response.text();
    const $ = cheerio.load(html);

    $("a").each((_, link) => {
      const url = $(link).attr("href") || "";
      if (url.trim().length > 0) {
        const fullUrl = url.startsWith("/")
          ? `${websiteUrl}${url.replace(/^\/+/, "")}`
          : url;
        if (fullUrl.startsWith(websiteUrl)) {
          fetchedUrls.add(fullUrl);
        }
      }
    });
  } catch (error) {
    console.error("Error fetching website URLs:", error);
  }

  const manualUrls = [
    "https://www.prcrepair.com.au",
    "https://www.prcrepair.com.au/expert-motherboard-repair",
    "https://www.prcrepair.com.au/beginner-phone-repair-course",
    "https://www.prcrepair.com.au/advanced-motherboard",
    "https://www.prcrepair.com.au/master-motherboard-repair",
    "https://www.prcrepair.com.au/professional-phone-screen",
    "https://www.prcrepair.com.au/price",
    "https://www.prcrepair.com.au/iphone-speaker-and-microphone-repair",
    "https://www.prcrepair.com.au/iphone-camera-replacement-service"
  ];
  manualUrls.forEach(url => fetchedUrls.add(url));
  fetchedUrls.add(websiteUrl);

  const lastMod = new Date().toISOString();

  const xmlSitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${Array.from(fetchedUrls)
  .reverse()
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
