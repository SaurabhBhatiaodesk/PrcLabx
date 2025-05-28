import React from "react";

import Contact from "./contact";

export const metadata = {
  title: "Pricing |  Affordable Repair Services and Courses | Labx Repair",
  description:
    "At LabX Repair, we offer cost-effective pricing for mobile phone repairs. Our services include screen repairs, phone repair course , , mobile repair training.& more.",
  keywords: ["Mobile Repair Solutions", "Expert Device Repair"],
  openGraph: {
    title: "Pricing |  Affordable Repair Services and Courses | Labx Repair",
    description:
      "At LabX Repair, we offer cost-effective pricing for mobile phone repairs. Our services include screen repairs, phone repair course , , mobile repair training.& more.",
    url: "", // Replace with your actual page URL
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
    title: "Pricing |  Affordable Repair Services and Courses | Labx Repair",
    description:
      "At LabX Repair, we offer cost-effective pricing for mobile phone repairs. Our services include screen repairs, phone repair course , , mobile repair training.& more.",
    images: ["https://example.com/path-to-your-image.jpg"], // Replace with your image URL
  },
  alternates: {
    canonical: "https://labxrepair.com.au/data-recovery",
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
