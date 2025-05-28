import React from "react";
import Thankyou from "./Thankyou";
export const metadata = {
  title: "Mail in Mobile Phone Repair Service in Australia | Labx Repair",
  description:
    "Labx Repair provides a trusted mail-in phone repair service in Australia. Get fast, expert repairs for your device with quality service. Ship yours phone today!",
  keywords: ["mail in repair service", "Phone Repair Service"],

  openGraph: {
    title: "Mail in Mobile Phone Repair Service in Australia | Labx Repair",
    description:
      "Labx Repair provides a trusted mail-in phone repair service in Australia. Get fast, expert repairs for your device with quality service. Ship yours phone today!",
    url: "Images/aboutadmin.png", // Replace with your actual page URL
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
    title: "Mail in Mobile Phone Repair Service in Australia | Labx Repair",
    description:
      "Labx Repair provides a trusted mail-in phone repair service in Australia. Get fast, expert repairs for your device with quality service. Ship yours phone today!",
    images: "Images/aboutadmin.png", // Replace with your image URL
  },
  alternates: {
    canonical: "https://labxrepair.com.au/mail-in-repair/thank-you",
  },
};
const page = () => {
  return (
    <>
      <Thankyou />
    </>
  );
};

export default page;
