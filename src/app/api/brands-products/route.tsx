export const dynamic = "force-dynamic";

interface Item {
  id: string;
  alias: string;
  data?: Item[];
  products?: Item[];
}

export async function GET(req: Request): Promise<Response> {
  const res = await fetch(`${process.env.NEXT_PUBLIC_LEAFYMANGO_API_URL}/api/sidebar-filter`);
  const baseData: Item[] = await res.json();

  const dynamicUrls = new Set<string>();

  for (const brand of baseData) {
    const b = brand.alias;
    dynamicUrls.add(`https://www.prcrepair.com.au/brands/${b}`);

    const categories = brand.data ?? brand.products ?? [];
    for (const cat of categories) {
      const c = cat.alias;
      dynamicUrls.add(`https://www.prcrepair.com.au/brands/${b}/${c}`);

      const seriesList = cat.data?.length ? cat.data : cat.products ?? [];
      for (const series of seriesList) {
        const s = series.alias;
        dynamicUrls.add(`https://www.prcrepair.com.au/brands/${b}/${c}/${s}`);

        const models = series.data?.length
          ? series.data
          : series.products ?? [];
        for (const model of models) {
          const m = model.alias;
          dynamicUrls.add(
            `https://www.prcrepair.com.au/brands/${b}/${c}/${s}/${m}`
          );

          const issues = model.data ?? [];
          for (const issue of issues) {
            const i = issue.alias;
            dynamicUrls.add(
              `https://www.prcrepair.com.au/brands/${b}/${c}/${s}/${m}/${i}`
            );
          }
        }
      }
    }
  }

  const allUrls = Array.from(dynamicUrls);

  const escapeXml = (u: string) =>
    u
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;")
      .replace(/'/g, "&apos;");
  const lastMod = new Date().toISOString();
  const xml =
    `<?xml version="1.0" encoding="UTF-8"?>\n` +
    `<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n` +
    allUrls
      .map(
        (u) => `<url>\n    <loc>${escapeXml(u)}</loc>\n
      <lastmod>${lastMod}</lastmod>
    <changefreq>daily</changefreq>
    <priority>0.9</priority>  </url>`
      )
      .join("\n") +
    `\n</urlset>`;

  return new Response(xml, {
    headers: { "Content-Type": "application/xml" },
  });
}
