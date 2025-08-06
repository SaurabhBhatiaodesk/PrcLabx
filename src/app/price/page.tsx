import React from "react";

import Contact from "./contact";
import "./price.css"
export const metadata = {
  title: "Mobile Phone Repair Services Australia | Phone Repair Center Price",
  description:
    "Explore PRC Repair’s affordable mobile phone repair services in Australia. Get transparent pricing for phone repairs, data recovery, fix iphone screen and more.",
  keywords: ["mobile phone repair   Solutions", "Expert Device Repair"],
  openGraph: {
    title: "Mobile Phone Repair Services Australia | Phone Repair Center Price",
    description:
      "Explore PRC Repair’s affordable mobile phone repair services in Australia. Get transparent pricing for phone repairs, data recovery, fix iphone screen and more.",
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
    title: "Mobile Phone Repair Services Australia | Phone Repair Center Price",
    description:
      "Explore PRC Repair’s affordable mobile phone repair services in Australia. Get transparent pricing for phone repairs, data recovery, fix iphone screen and more.",
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
