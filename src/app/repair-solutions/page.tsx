
import React from "react";
import RepairSolutions from "./repair-solutions";
import "./repair.css";

export const metadata = {
  title: "Mobile Phone Repair Solutions - Expert Phone & Device Repair ",
  description:
    "Phone repair center offers professional mobile phone repair   solutions with expert phone and device repair services. Get fast, reliable fixes for all mobile issues. Contact us today!",
  keywords: ["mobile phone repair   Solutions", "Expert Device Repair"],
  openGraph: {
    title: "Mobile Phone Repair Solutions - Expert Phone & Device Repair ",
    description:
      "Phone repair center offers professional mobile phone repair   solutions with expert phone and device repair services. Get fast, reliable fixes for all mobile issues. Contact us today!",
    url: "", // Replace with your actual page URL
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
    title: "Mobile Phone Repair Solutions - Expert Phone & Device Repair ",
    description:
      "Phone repair center offers professional mobile phone repair   solutions with expert phone and device repair services. Get fast, reliable fixes for all mobile issues. Contact us today!",
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
        <RepairSolutions />
      </div>
    </>
  );
};

export default page;
