import dynamic from "next/dynamic";
import React from "react";

const Breadcrumb = dynamic(
  () => import("../../components/Breadcrumb/Breadcrumb"),
  { ssr: false }
);

const CourseHighlights = dynamic(
  () => import("./CourseHighlights/CourseHighlights"),
  { ssr: false }
);

const Form = dynamic(() => import("../../components/Form/Form"), {
  ssr: false,
});

const GoogleReviews = dynamic(
  () => import("../../components/GoogleReviews/GoogleReviews"),
  { ssr: false }
);

export const metadata = {
  title: "Mobile Phone Repair Course - Phone Repair Course | Labx Repair",
  description:
    "Labx Repair provides the best mobile repair training with phone repair course. Learn hands-on skills from experts, get certified, & start your career with confidence.",
  keywords: [
    "Mobile Repair Training",
    "Phone Repair Course",
  ],
  openGraph: {
    title: "Mobile Phone Repair Course - Phone Repair Course | Labx Repair",
    description:
      "Labx Repair provides the best mobile repair training with phone repair course. Learn hands-on skills from experts, get certified, & start your career with confidence.",
    url: "/",
    type: "website",

    images: [
      {
        url: "",
        width: 1200,
        height: 630,
        alt: "LabX Tech Solutions Banner",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Mobile Phone Repair Course - Phone Repair Course | Labx Repair",
    description:
      "Labx Repair provides the best mobile repair training with phone repair course. Learn hands-on skills from experts, get certified, & start your career with confidence.",
    images: ["https://example.com/path-to-your-image.jpg"],
  },
  alternates: {
    canonical: "https://labxrepair.com.au/training",
  },
};
const Training = () => {
  return (
    <>
      <div>
        <Breadcrumb
          pageName="Master the Art of Mobile Phone Repair"
          pageDescription="Join LabX's comprehensive mobile phone repairing course to acquire essential skills and certifications. Transform your passion for technology into a rewarding career, and make a difference in people’s lives through mobile phone repair services!"
          backgroundImage="/Images/BannerImages/traningback.png"
          AdminImage="/Images/adminimage.png"
          link="/training"
          buttonname="Join Course"
          scrollId="Kickstart"
          scrollOffSet={34 * 5}
        />
        <CourseHighlights />
        <Form />
        <GoogleReviews />
      </div>
    </>
  );
};

export default Training;
