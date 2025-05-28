import { Metadata } from "next";
import {
  Typography,
  Box,
  Grid,
  Card,
  CardMedia,
  CardContent,
} from "@mui/material";
import Link from "next/link";
import "./policy.css";
import Image from "next/image";
import YouTubeHome from "@/components/HomeCpmponents/YouTubeHome/YouTubeHome";
import GoogleReviews from "@/components/GoogleReviews/GoogleReviews";

import Line from "../../../public/Images/about/leap.svg"; // Function to fetch data from the server
async function fetchPageData(title: string) {
  const res = await fetch(
    `https://labxbackend.labxrepair.com.au/api/admin/title/${encodeURIComponent(
      title
    )}`,
    {
      cache: "no-store",
    }
  );
  if (!res.ok) {
    const errorData = await res.json().catch(() => null);
    throw new Error(errorData?.message || "Failed to fetch data");
  }
  return res.json();
}

// Generate metadata for dynamic SEO
export async function generateMetadata({
  params,
}: {
  params: { title: string };
}): Promise<Metadata> {
  try {
    const data = await fetchPageData(params.title);
    const page = data.data;
    console.log('page', page);

    return {
      title: page.seoPageTitle,
      description: page.pageDescription,
      keywords: page.pageKeywords,
      // Add keywords to the description
    };
  } catch (error) {
    return {
      title: "Page not found",
      description:
        (error as Error).message || "The requested page could not be found",
    };
  }
}

// Utility function to replace underscores with spaces
function formatPageName(pageName: string): string {
  return pageName.replace(/_/g, " ");
}

// Page component
export default async function PageDetail({
  params,
}: {
  params: { title: string };
}) {
  try {
    const data = await fetchPageData(params.title);
    const page = data.data;

    return (
      <>
        <section className="bg-no-repeat bg-cover p-0 relative">

          <div className="max-container overlap__term__data pt-8">
            <div className="grid lg:grid-cols-[5fr_3fr] items-center pt-3">
              <div className="w-full px-4">
                <div className="text-center lg:text-left">
                  <ul className="flex items-center lg:justify-start justify-center gap-[10px]">
                    <li>
                      <Link
                        href="/"
                        className="text-dark flex items-center gap-[10px] text-base font-medium dark:text-white"
                      >
                        Home
                      </Link>
                    </li>
                    <li>
                      <p className="text-body-color flex items-center gap-[10px] text-base font-medium mb-0">
                        <span className="text-body-color dark:text-dark-6">
                          /
                        </span>
                        {formatPageName(page.pageName)}
                      </p>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div>
              <h1 className="text-white mb-0 text-3xl font-bold dark:text-white sm:text-4xl md:text-[40px] md:leading-[1.2] text-center">
                {formatPageName(page.pageName)}
                <Image
                  height="300"
                  width="400"
                  src={Line.src}
                  alt=" labx repair "
                  className="pb-3 m-auto"
                />
              </h1>
              {page.images.map((image: string, index: number) => (
                <Image key={image} src={image} alt=" labx repair " width='100' height='100' className='dynamic__img' />
              ))}
            </div>
          </div>
        </section>
        <div className="max-container">
          <Box sx={{ backgroundColor: "000" }}>
            {/* Title Section */}

            <Box
              sx={{
                backgroundColor: "#000",
                color: "#fff",
                borderRadius: 2,
                boxShadow: "0px 4px 10px rgba(0,0,0,0.1)",
                padding: 3,
                marginTop: 4,
              }}
              dangerouslySetInnerHTML={{ __html: page.pageEditor }}
            />
          </Box>
        </div>

        <YouTubeHome />
        <GoogleReviews />
      </>
    );
  } catch (error) {
    const errorMessage =
      (error as Error).message ||
      "Error loading page details or page not found";
    return (
      <Box sx={{ padding: 4 }}>
        <Typography variant="h6" color="error">
          {errorMessage}
        </Typography>
      </Box>
    );
  }
}
