import React from "react";
import Thankyou from "./Thankyou";
export const metadata = {
  title: "PS5 Repair & Controller Repair | Expert PlayStation Repairs",
  description:
    "Get fast and reliable PS5 repair or PS5 controller repair at LabX Repair. Our experts offer professional PlayStation repairs to get your console back in action.",
  keywords: ["PS5 repair service", "Phone Repair Service"],

  openGraph: {
    title: "PS5 Repair & Controller Repair | Expert PlayStation Repairs",
    description:
      "Get fast and reliable PS5 repair or PS5 controller repair at LabX Repair. Our experts offer professional PlayStation repairs to get your console back in action.",
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
    title: "PS5 Repair & Controller Repair | Expert PlayStation Repairs",
    description:
      "Get fast and reliable PS5 repair or PS5 controller repair at LabX Repair. Our experts offer professional PlayStation repairs to get your console back in action.",
    images: "Images/aboutadmin.png", // Replace with your image URL
  },
  alternates: {
    canonical: "https://labxrepair.com.au/ps5-repair/thank-you",
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
