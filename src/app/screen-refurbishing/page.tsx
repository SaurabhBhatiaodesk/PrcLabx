import React from "react";
import Screen from "./screen-refurbishing";

export const metadata = {
  title: "Screen Refurbishing Service - Mobile Screen Repair | Labx Repair",
  description:
    "Labx Repair offers professional screen refurbishing service & mobile screen repair. Restore cracked or damaged screens with expert care. Get your screen fixed today!",
  keywords: [
    "Screen Refurbishing Service",
    "Mobile Screen Repair ",

  ],
  openGraph: {
    title: "Screen Refurbishing Service - Mobile Screen Repair | Labx Repair",
    description:
      "Labx Repair offers professional screen refurbishing service & mobile screen repair. Restore cracked or damaged screens with expert care. Get your screen fixed today!",
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
    title: "Screen Refurbishing Service - Mobile Screen Repair | Labx Repair",
    description:
      "Labx Repair offers professional screen refurbishing service & mobile screen repair. Restore cracked or damaged screens with expert care. Get your screen fixed today!",
    images: ["https://example.com/path-to-your-image.jpg"], // Replace with your image URL
  },
  alternates: {
    canonical: "https://labxrepair.com.au/screen-refurbishing",
  },
};

const page = () => {
  return (
    <>
      <div>
        <Screen />
      </div>
    </>
  );
};

export default page;
