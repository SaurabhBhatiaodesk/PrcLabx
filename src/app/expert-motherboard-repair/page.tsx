import dynamic from "next/dynamic";
import React from "react";
// import ExpertMotherBoardRepair from './ExpertMotherBoardRepair'
const ExpertMotherBoardRepair = dynamic(
  () => import("./ExpertMotherBoardRepair"),
  { ssr: false }
);

import "./Expert.css";

export const metadata = {
  title: "LabX Repair Mobile Phone Services - Expert Repair & Training",
  description:
    "Explore LabX Repair for expert mobile repairs and training in Melbourne West by Bharat, specializing in screen refurbishment and motherboard solutions.",
  keywords: [
    "LabX",
    "tech solutions",
    "data recovery",
    "client reviews",
    "tech services",
  ],
  openGraph: {
    title: "Welcome to LabX - Your Trusted Tech Solutions",
    description:
      "Explore LabX Repair for expert mobile repairs and training in Melbourne West by Bharat, specializing in screen refurbishment and motherboard solutions.",
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
    title: "Welcome to LabX - Your Trusted Tech Solutions",
    description:
      "Explore LabX Repair for expert mobile repairs and training in Melbourne West by Bharat, specializing in screen refurbishment and motherboard solutions.",
    images: ["https://example.com/path-to-your-image.jpg"], // Replace with your image URL
  },
  alternates: {
    canonical: "https://labxrepair.com.au/expert-motherboard-repair",
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
