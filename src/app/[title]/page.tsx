import { Metadata } from "next";
import { Typography, Box } from "@mui/material";
import Link from "next/link";
import "./policy.css";
import Image from "next/image";
import YouTubeHome from "@/components/HomeCpmponents/YouTubeHome/YouTubeHome";
import rname from "../../../public/Images/icons/rname.png";
import jname from "../../../public/Images/icons/E.png";
import Nname from "../../../public/Images/icons/N.png";
import Sname from "../../../public/Images/icons/S.png";
import Aname from "../../../public/Images/icons/A.png";
import hname from "../../../public/Images/icons/h.png";
import Googletest from "../../../public/Images/icons/Googletest.svg";
import Line from "../../../public/Images/about/leap.svg"; // Function to fetch data from the server
import BiginnerReviews from "@/components/GoogleReviews/BiginnerReviews";
import MainHeading from "@/components/ManinHeading/MainHeading";
async function fetchPageData(title: string) {
  const apiUrl = process.env.NEXT_PUBLIC_LEAFYMANGO_API_URL;
  const res = await fetch(
    `${apiUrl}/api/admin/title/${encodeURIComponent(title)}`,
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
     const reviewsData = [
    {
      name: "Liam Foster",
      date: "September 12, 2023",
      profileImage: hname,
      logoImage: Googletest,
      rating: 5,
      param:
        "The course was incredibly detailed, and the hands-on practice helped me build confidence. The instructors were patient and knowledgeable, making even complex micro soldering techniques easy to understand.",
    },
    {
      name: "Emma Williams",
      date: "September 12, 2023",
      profileImage: rname,
      logoImage: Googletest,
      rating: 5,
      param:
        "This course transformed my skills! I can now confidently repair motherboards and handle advanced micro soldering tasks. Highly recommend it for anyone serious about electronics repair.",
    },
    {
      name: "Jack O'Connor",
      date: "September 12, 2023",
      profileImage: Sname,
      logoImage: Googletest,
      rating: 5,
      param:
        "The one-week intensive program was perfect. I learned advanced diagnostics and component replacement with expert guidance. The hands-on approach made everything clear and practical. Excellent experience!",
    },
    {
      name: "Chloe Brown",
      date: "October 5, 2023",
      profileImage: jname,
      logoImage: Googletest,
      rating: 5,
      param:
        "Fantastic course! The instructors were highly experienced, and their step-by-step guidance on micro soldering was invaluable. I feel ready to handle complex motherboard repairs now. ",
    },
    {
      name: "Oliver Harris",
      date: "November 1, 2023",
      profileImage: Aname,
      logoImage: Googletest,
      rating: 5,
      param:
        "The training exceeded my expectations. From using advanced tools to mastering micro soldering techniques, I gained practical skills that I can apply immediately. Great value for time and money!",
    },
    {
      name: "Sophie Clark",
      date: "November 1, 2023",
      profileImage: Nname,
      logoImage: Googletest,
      rating: 5,
      param:
        "A must-attend course for repair professionals. The small class size allowed personalized attention, and the hands-on exercises helped me master motherboard repairs quickly. Truly worth every minute!",
    },
  ];

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
              {/* <h1 className="text-secondary mb-0 text-3xl font-bold dark:text-white sm:text-4xl md:text-[40px] md:leading-[1.2] text-center">
                {formatPageName(page.pageName)}
                <Image
                  height="300"
                  width="400"
                  src={Line.src}
                  alt=" Phone repair center "
                  className="pb-3 m-auto"
                />
              </h1> */}
              <MainHeading Heading= {formatPageName(page.pageName)}  color="var(--prc)" svg_stroke="var(--alpha)" />
              {page.images.map((image: string, index: number) => (
                <Image
                  key={image}
                  src={image}
                  alt=" Phone repair center "
                  width="100"
                  height="100"
                  className="dynamic__img"
                />
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
         <BiginnerReviews reviews={reviewsData}  googletitle="Our Google Review"/>
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
