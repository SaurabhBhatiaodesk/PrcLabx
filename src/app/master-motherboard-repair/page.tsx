import dynamic from "next/dynamic";
import React from "react";
// import MasterMotherboardRepair from './MasterMotherboardRepair'
const MasterMotherboardRepair = dynamic(
  () => import("./MasterMotherboardRepair"),
  { ssr: false }
);

export const metadata = {
  title: "Master Motherboard Repair | PS5 Motherboard Repair Australia | PRC",
  description:
    "Advance your mobile repair skills with PRC Repair’s Level 3 course. Master complex motherboard repairs, data recovery, & micro soldering techniques in just 5 days.",
  keywords: [
    "PRC",
    "tech solutions",
    "data recovery",
    "client reviews",
    "tech services",
  ],
  openGraph: {
    title: "Master Motherboard Repair | PS5 Motherboard Repair Australia | PRC",
    description:
      "Advance your mobile repair skills with PRC Repair’s Level 3 course. Master complex motherboard repairs, data recovery, & micro soldering techniques in just 5 days.",
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
    title: "Master Motherboard Repair | PS5 Motherboard Repair Australia | PRC",
    description:
      "Advance your mobile repair skills with PRC Repair’s Level 3 course. Master complex motherboard repairs, data recovery, & micro soldering techniques in just 5 days.",
    images: ["https://example.com/path-to-your-image.jpg"], // Replace with your image URL
  },
  alternates: {
    canonical: "https://www.prcrepair.com.au/master-motherboard-repair",
  },
};

const page = () => {
  return (
    <div>
      <MasterMotherboardRepair />
    </div>
  );
};

export default page;
