import React from 'react'
import B2BRepairServices from './B2BRepairServices'

export const metadata = {
  title: "B2B Mobile Phone Repair Service - Bulk Device Repair | Labx Repair",
  description:
    "Labx Repair offers expert B2B phone repair service and bulk device repair for businesses. Get fast, reliable maintenance & quality repairs for all your devices today!",
  keywords: ["B2B Phone Repair Service", "Bulk Device Repair"],
  openGraph: {
    title: "B2B Mobile Phone Repair Service - Bulk Device Repair | Labx Repair",
    description:
      "Labx Repair offers expert B2B phone repair service and bulk device repair for businesses. Get fast, reliable maintenance & quality repairs for all your devices today!",
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
    title: "B2B Mobile Phone Repair Service - Bulk Device Repair | Labx Repair",
    description:
      "Labx Repair offers expert B2B phone repair service and bulk device repair for businesses. Get fast, reliable maintenance & quality repairs for all your devices today!",
    images: ["https://example.com/path-to-your-image.jpg"], // Replace with your image URL
  },
  alternates: {
    canonical: "https://labxrepair.com.au/b2b-repair-services",
  },
};

const page = () => {
  return (
    <div>
        <B2BRepairServices/>
    </div>
  )
}

export default page