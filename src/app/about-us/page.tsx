import React from "react";
import AboutUs from "./AboutUs";




export const metadata = {
  title: "About Us - Phone Repair Courses | Mobile Phone Repair Training",
  description: "About Labx Repair, We provide top-tier phone repair courses and mobile phone repair training. Learn phone screen repair and other essential skills with us today! refurbishment and motherboard solutions.",
  keywords: ["LabX", "tech solutions", "data recovery", "client reviews", "tech services"],
  openGraph: {
    title: "About Us - Phone Repair Courses | Mobile Phone Repair Training",
    description: "About Labx Repair, We provide top-tier phone repair courses and mobile phone repair training. Learn phone screen repair and other essential skills with us today! refurbishment and motherboard solutions.",
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
    title: "About Us - Phone Repair Courses | Mobile Phone Repair Training",
    description: "About Labx Repair, We provide top-tier phone repair courses and mobile phone repair training. Learn phone screen repair and other essential skills with us today! refurbishment and motherboard solutions.",
    images: ["https://example.com/path-to-your-image.jpg"],
  },
  alternates: {
    canonical: `https://labxrepair.com.au/about-us`,
  },

};

const page = () => {
  return (
    <>
      <div>
        <AboutUs />
      </div>
    </>
  );
};

export default page;
