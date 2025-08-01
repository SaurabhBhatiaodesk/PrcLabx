import React from "react";
import WhatWeDo from "./what-we-do";
import "./whatWeDo.css";

export const metadata = {
  title: "Expert Mobile Phone Repairing in Australia | Phone Repair Center",
  description:
    "Explore PRC Repair's specialized services, including screen refurbishing, data recovery, advanced motherboard repairs, and professional training programs.",
  keywords: ["PRC", "tech solutions", "data recovery", "client reviews", "tech services"],
  openGraph: {
    title: "Expert Mobile Phone Repairing in Australia | Phone Repair Center",
    description:
      "Explore PRC Repair's specialized services, including screen refurbishing, data recovery, advanced motherboard repairs, and professional training programs.",
    url: "/", // Replace with your actual page URL
    type: "website",
    images: [
      {
        url: "", // Replace with your image URL
        width: 1200,
        height: 630,
        alt: "PRC Tech Solutions Banner",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Expert Mobile Phone Repairing in Australia | Phone Repair Center",
    description:
      "Explore PRC Repair's specialized services, including screen refurbishing, data recovery, advanced motherboard repairs, and professional training programs.",
    images: ["https://example.com/path-to-your-image.jpg"], // Replace with your image URL
  },
  alternates: {
    canonical: "https://prcrepair.com.au/what-we-do",
  },
};


















const page = () => {
  return (
    <>
      <div>
        <WhatWeDo />
      </div>
    </>
  );
};

export default page;
