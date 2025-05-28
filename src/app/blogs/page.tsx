import React from "react";
import Blogs from "./blog";
export const metadata = {
  title: "Mobile Phone Repair Blogs - Tips and Tutorials | Labx Repair",
  description:
    "Read our mobile phone repair blogs for tips & tutorials. Master phone screen repair & more with expert advice. Start learning now & improve your skills techniques!",
  keywords: ["LabX", "tech solutions", "data recovery", "client reviews", "tech services"],
  openGraph: {
    title: "Mobile Phone Repair Blogs - Tips and Tutorials | Labx Repair",
    description:
      "Read our mobile phone repair blogs for tips & tutorials. Master phone screen repair & more with expert advice. Start learning now & improve your skills techniques!",
    url: "/", // Replace with your actual page URL
    type: "website",
    images: [
      {
        url: "", // Replace with your image URL
        width: 1200,
        height: 630,
        alt: "LabX Tech Solutions Banner",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Mobile Phone Repair Blogs - Tips and Tutorials | Labx Repair",
    description:
      "Read our mobile phone repair blogs for tips & tutorials. Master phone screen repair & more with expert advice. Start learning now & improve your skills techniques!",
    images: ["https://example.com/path-to-your-image.jpg"], // Replace with your image URL
  },
  alternates: {
    canonical: "https://labxrepair.com.au/blogs",
  },
};

const page = () => {
  return (
    <>
      <div>
        <Blogs />
      </div>
    </>
  );
};

export default page;
