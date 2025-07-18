import React from "react";

import Contact from "./contact";
import "./price.css"
export const metadata = {
  title: "Pricing |  Affordable Repair Services and Courses | Phone Repair Center ",
  description:
    "At Phone Repair Center , we offer cost-effective pricing for mobile phone repairs. Our services include screen repairs, phone repair course , , mobile phone repair   training.& more.",
  keywords: ["mobile phone repair   Solutions", "Expert Device Repair"],
  openGraph: {
    title: "Pricing |  Affordable Repair Services and Courses | Phone Repair Center ",
    description:
      "At Phone Repair Center , we offer cost-effective pricing for mobile phone repairs. Our services include screen repairs, phone repair course , , mobile phone repair   training.& more.",
    url: "", // Replace with your actual page URL
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
    title: "Pricing |  Affordable Repair Services and Courses | Phone Repair Center ",
    description:
      "At Phone Repair Center , we offer cost-effective pricing for mobile phone repairs. Our services include screen repairs, phone repair course , , mobile phone repair   training.& more.",
    images: ["https://example.com/path-to-your-image.jpg"], // Replace with your image URL
  },
  alternates: {
    canonical: "https://www.prcrepair.com.au/data-recovery",
  },
};

const page = () => {
  return (
    <>
      <div>
        <Contact />
      </div>
    </>
  );
};

export default page;
