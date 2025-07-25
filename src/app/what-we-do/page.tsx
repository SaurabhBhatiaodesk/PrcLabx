import React from "react";
import WhatWeDo from "./what-we-do";
import "./whatWeDo.css";

export const metadata = {
  title: "Phone Repair Center  Mobile Phone Services - Expert Repair & Training",
  description:
    "Explore Phone Repair Center  for expert mobile phone repairs and training in Melbourne West by Bharat, specializing in screen refurbishment and motherboard solutions.",
  keywords: ["PRC", "tech solutions", "data recovery", "client reviews", "tech services"],
  openGraph: {
    title: "Welcome to PRC - Your Trusted Tech Solutions",
    description:
      "Explore Phone Repair Center  for expert mobile phone repairs and training in Melbourne West by Bharat, specializing in screen refurbishment and motherboard solutions.",
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
    title: "Welcome to PRC - Your Trusted Tech Solutions",
    description:
      "Explore Phone Repair Center  for expert mobile phone repairs and training in Melbourne West by Bharat, specializing in screen refurbishment and motherboard solutions.",
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
