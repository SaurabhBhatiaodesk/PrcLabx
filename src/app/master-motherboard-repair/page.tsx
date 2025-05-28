import dynamic from "next/dynamic";
import React from 'react'
// import MasterMotherboardRepair from './MasterMotherboardRepair'
const MasterMotherboardRepair = dynamic(() => import('./MasterMotherboardRepair'), { ssr: false });



export const metadata = {
  title: "LabX Repair Mobile Phone Services - Expert Repair & Training",
  description:
    "Explore LabX Repair for expert mobile repairs and training in Melbourne West by Bharat, specializing in screen refurbishment and motherboard solutions.",
  keywords: ["LabX", "tech solutions", "data recovery", "client reviews", "tech services"],
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
    canonical: "https://labxrepair.com.au/master-motherboard-repair",
  },
};



const page = () => {
  return (
    <div>
        <MasterMotherboardRepair/>
    </div>
  )
}

export default page
