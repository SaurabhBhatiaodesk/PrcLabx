import React from "react";
import Thankyou from "./Thankyou";
export const metadata = {
  title: "Data Recovery Services - Mobile Phone Data Recovery | Labx Repair",
  description:
    "LabX Repair provides expert data recovery services, specializing in mobile data recovery. Restore lost files, photos, & important data safely & efficiently. Help now!",
  keywords: ["Data Recovery Services", "Mobile Data Recovery"],
  openGraph: {
    title: "Data Recovery Services - Mobile Phone Data Recovery | Labx Repair",
    description:
      "LabX Repair provides expert data recovery services, specializing in mobile data recovery. Restore lost files, photos, & important data safely & efficiently. Help now!",
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
    title: "Data Recovery Services - Mobile Phone Data Recovery | Labx Repair",
    description:
      "LabX Repair provides expert data recovery services, specializing in mobile data recovery. Restore lost files, photos, & important data safely & efficiently. Help now!",
    images: ["https://example.com/path-to-your-image.jpg"], // Replace with your image URL
  },
  alternates: {
    canonical: "https://labxrepair.com.au/data-recovery/thank-you",
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
