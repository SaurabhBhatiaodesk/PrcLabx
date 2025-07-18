interface BlogItem {
  _id: string;
  heading: string;
  content: string;
  pageTitle: string;
  metaDescription: string;
  pageKeywords: string;
  featuredImage: string[];
  status: boolean;
  createdAt: string;
  updatedAt: string;
}
 
interface Pagination {
  totalBlogs: number;
  currentPage: number;
  totalPages: number;
  hasNextPage: boolean;
  hasPrevPage: boolean;
}
 
interface ApiResponse {
  blogs: BlogItem[];
  pagination: Pagination;
}
 
export const dynamic = "force-dynamic";
 
export async function GET(req: Request): Promise<Response> {
  // Helper function to escape special characters in URLs
  const escapeXml = (unsafe: string): string => {
    return unsafe
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;")
      .replace(/'/g, "&apos;");
  };
 
  // Function to fetch dynamic URLs
  const fetchDynamicUrls = async (url: string, type: string): Promise<string[]> => {
    try {
      const response = await fetch(url);
      const result: ApiResponse = await response.json();
      if (!result || typeof result !== "object") {
        console.warn(`[${type}] Invalid JSON structure from ${url}`);
        return [];
      }
 
      switch (type) {
        case "blogs":
          if (Array.isArray(result.blogs)) {
            return result.blogs
              .filter((item) => item?.featuredImage && item.featuredImage.length > 0)
              .map(
                (item) => `https://www.prcrepair.com.au/blogs/${item.pageTitle}`
              );
          }
          break;
        default:
          console.warn(`[${type}] No handler for this type.`);
          return [];
      }
 
      console.warn(`[${type}] Data structure mismatch from ${url}`);
      return [];
    } catch (error) {
      console.error(`[${type}] Error fetching from ${url}:`, error);
      return [];
    }
  };
 
  // Fetch dynamic URLs from APIs
  const blogUrls = await fetchDynamicUrls(
    "https://prcbackend.prcrepair.com.au/api/admin/blogs?page=1&limit=2000",
    "blogs"
  );
 
  const urls: string[] = [...(blogUrls || [])];
 
  // Build the XML for the sitemap
  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
    <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
      ${urls
        .map((url) => {
          return `
        <url>
          <loc>${escapeXml(url)}</loc>
          <lastmod>${new Date().toISOString()}</lastmod>
          <changefreq>daily</changefreq>
          <priority>0.7</priority>
        </url>`;
        })
        .join("")}
    </urlset>`;
 
  // Return the sitemap as an XML response
  return new Response(sitemap, {
    headers: {
      "Content-Type": "application/xml",
    },
  });
}