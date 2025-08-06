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

export const metadata = {
  title: "Mobile Repair Traning - Mobile Phone Repair | Phone Repair Center",
  description:
    "Phone Repair Center provides the best mobile phone repair training with phone repair course. Learn hands-on skills from experts, & start your career with confidence.",
  keywords: ["mobile phone repair   Training", "Phone Repair Course"],
  openGraph: {
    title: "Mobile Repair Traning - Mobile Phone Repair | Phone Repair Center",
    description:
      "Phone Repair Center provides the best mobile phone repair training with phone repair course. Learn hands-on skills from experts, & start your career with confidence.",
    url: "/",
    type: "website",

    images: [
      {
        url: "",
        width: 1200,
        height: 630,
        alt: "PRC Tech Solutions Banner",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Mobile Repair Traning - Mobile Phone Repair | Phone Repair Center",
    description:
      "Phone Repair Center provides the best mobile phone repair training with phone repair course. Learn hands-on skills from experts, & start your career with confidence.",
    images: ["https://example.com/path-to-your-image.jpg"],
  },
  alternates: {
    canonical: "https://www.prcrepair.com.au/training",
  },
};
const Training = () => {
  return (
    <>
      <div>
        <Breadcrumb
          pageName="Master the Art of Mobile Phone Repair"
          pageDescription="Join PRC comprehensive mobile phone repairing course to acquire essential skills and certifications. Transform your passion for technology into a rewarding career, and make a difference in people’s lives through mobile phone repair services!"
          backgroundImage="/Images/traningbg.webp"
          adminimagenew="/Images/adminimagenew.png"
          link="/training"
          buttonname="Join Course"
          scrollId="Kickstart"
          scrollOffSet={34 * 5}
          pageNamecolor="text-[#B2F5EA]"
        />
        <CourseHighlights />
        <Form />
      </div>
    </>
  );
};

export default Training;
