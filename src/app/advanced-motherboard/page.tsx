import dynamic from "next/dynamic";
import React from "react";
// import MotherboardRepair from './motherboard-repair'
const MotherboardRepair = dynamic(() => import("./motherboard-repair"), {
  ssr: false,
});
export const metadata = {
  title: "Advanced Motherboard Repair | Micro Soldering (Level 1) | PRC ",
  description:
    "Master micro soldering & chip-level repairs with PRC Repair Level 1 course. Gain hands-on experience in diagnosing & fixing common motherboard issues in just 1 week.",
  // keywords: ["LabX", "tech solutions", "data recovery", "client reviews", "tech services"],
  openGraph: {
    title: "Advanced Motherboard Repair | Micro Soldering (Level 1) | PRC ",
    description:
      "Master micro soldering & chip-level repairs with PRC Repair Level 1 course. Gain hands-on experience in diagnosing & fixing common motherboard issues in just 1 week.",
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
    title: "Advanced Motherboard Repair | Micro Soldering (Level 1) | PRC ",
    description:
      "Master micro soldering & chip-level repairs with PRC Repair Level 1 course. Gain hands-on experience in diagnosing & fixing common motherboard issues in just 1 week.",
    images: ["https://example.com/path-to-your-image.jpg"], // Replace with your image URL
  },
};

const page = () => {
  return (
    <>
      <MotherboardRepair />
    </>
  );
};

export default page;
