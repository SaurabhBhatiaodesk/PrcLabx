import dynamic from "next/dynamic";
import React from "react";
// import ExpertMotherBoardRepair from './ExpertMotherBoardRepair'
const ExpertMotherBoardRepair = dynamic(
  () => import("./ExpertMotherBoardRepair"),
  { ssr: false }
);

import "./Expert.css";

export const metadata = {
  title: "Expert Motherboard Repair | Micro Soldering (Level 2) | PRC ",
  description:
    "Advance your mobile phone repair skills with phone repair center Level 2 course. Master Face ID, baseband, NAND repairs, and dual-board systems in just 5 days.",
  keywords: [
    "LabX",
    "tech solutions",
    "data recovery",
    "client reviews",
    "tech services",
  ],
  openGraph: {
    title: "Expert Motherboard Repair | Micro Soldering (Level 2) | PRC ",
    description:
      "Advance your mobile phone repair skills with phone repair center Level 2 course. Master Face ID, baseband, NAND repairs, and dual-board systems in just 5 days.",
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
    title: "Expert Motherboard Repair | Micro Soldering (Level 2) | PRC ",
    description:
      "Advance your mobile phone repair skills with phone repair center Level 2 course. Master Face ID, baseband, NAND repairs, and dual-board systems in just 5 days.",
    images: ["https://example.com/path-to-your-image.jpg"], // Replace with your image URL
  },
  alternates: {
    canonical: "https://www.prcrepair.com.au/expert-motherboard-repair",
  },
};

const page = () => {
  return (
    <div>
      <ExpertMotherBoardRepair />
    </div>
  );
};

export default page;
