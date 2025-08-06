import dynamic from "next/dynamic";
import React from "react";
const DataRecovery = dynamic(() => import('./DataRecovery'), { ssr: false });

// import DataRecovery from "./DataRecovery";
import "./data.css";

export const metadata = {
  title: "Data Recovery - Mobile Phone Data Recovery | Phone Repair Center",
  description:
    "Phone Repair Center offers expert data recovery services, specializing in mobile data recovery. Restore lost files, photos, & important data safely & efficiently. ",
  keywords: ["Data Recovery Services", "Mobile Data Recovery"],
  openGraph: {
    title: "Data Recovery - Mobile Phone Data Recovery | Phone Repair Center",
    description:
      "Phone Repair Center offers expert data recovery services, specializing in mobile data recovery. Restore lost files, photos, & important data safely & efficiently. ",
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
    title: "Data Recovery - Mobile Phone Data Recovery | Phone Repair Center",
    description:
      "Phone Repair Center offers expert data recovery services, specializing in mobile data recovery. Restore lost files, photos, & important data safely & efficiently. ",
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
        <DataRecovery />
      </div>
    </>
  );
};

export default page;
