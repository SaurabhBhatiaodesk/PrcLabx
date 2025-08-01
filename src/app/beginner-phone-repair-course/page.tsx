import dynamic from "next/dynamic";
import React from "react";
// import BeginnerCourse from './BeginnerCourse'
const BeginnerCourse = dynamic(() => import("./BeginnerCourse"), {
  ssr: false,
});
export const metadata = {
  title: "Beginner Phone Repair Course | Mobile Phone Repair Courses | PRC",
  description:
    "Kickstart your mobile repair journey with PRC Repair’s 5-day Beginner Course. Learn essential skills like screen replacements, camera repairs, and more. Visit today!",
  // keywords: ["LabX", "tech solutions", "data recovery", "client reviews", "tech services"],
  openGraph: {
    title: "Beginner Phone Repair Course | Mobile Phone Repair Courses | PRC",
    description:
      "Kickstart your mobile repair journey with PRC Repair’s 5-day Beginner Course. Learn essential skills like screen replacements, camera repairs, and more. Visit today!",
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
    title: "Beginner Phone Repair Course | Mobile Phone Repair Courses | PRC",
    description:
      "Kickstart your mobile repair journey with PRC Repair’s 5-day Beginner Course. Learn essential skills like screen replacements, camera repairs, and more. Visit today!",
    images: ["https://example.com/path-to-your-image.jpg"], // Replace with your image URL
  },
  alternates: {
    canonical: "https://www.prcrepair.com.au/beginner-phone-repair-course",
  },
};

const page = () => {
  return (
    <>
      <BeginnerCourse />
    </>
  );
};

export default page;
