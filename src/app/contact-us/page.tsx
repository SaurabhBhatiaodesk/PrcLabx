import Breadcrumb from "@/components/Breadcrumb/Breadcrumb";
import React from "react";
import ContactUsForm from "./ContactUsForm";
import GoogleReviews from "@/components/GoogleReviews/GoogleReviews";
import YouTubeHome from "@/components/HomeCpmponents/YouTubeHome/YouTubeHome";
import FixLabx from "@/components/HomeCpmponents/FixLabx/FixLabx";


export const metadata = {
  title: "Contact Us Today - Mobile Phone Repair Training | Labx Repair",
  description: "Get in touch with LabX Repair for expert mobile phone repair course, Services & Training. Whether you need screen replacements, data recovery. Contact us today!",
  keywords: ["LabX", "tech solutions", "data recovery", "client reviews", "tech services"],
  openGraph: {
    title: "Contact Us Today - Mobile Phone Repair Training | Labx Repair",
    description: "Get in touch with LabX Repair for expert mobile phone repair course, Services & Training. Whether you need screen replacements, data recovery. Contact us today!",
    url: "Images/aboutadmin.png", 
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
    title: "Contact Us Today - Mobile Phone Repair Training | Labx Repair",
    description: "Get in touch with LabX Repair for expert mobile phone repair course, Services & Training. Whether you need screen replacements, data recovery. Contact us today!",
    images: "Images/aboutadmin.png",
  },
  alternates: {
    canonical: `https://labxrepair.com.au/about-us`,
  },

};
const page = () => {
  return (
    <>
      <div className="gkhidden button ">
        <Breadcrumb
          pageName="Contact Us"
          pageDescription="Contact Us For More Information "
          backgroundImage="/Images/BannerImages/contact-us.png"
          AdminImage="/Images/contactus.svg"
          link="/contact-us"
          buttonname="Request a Quote"
          scrollId = "contactId"
          scrollOffSet = {24 * 5}
        />
       
        </div>
          <ContactUsForm />
          <FixLabx/>
          <YouTubeHome />
          <GoogleReviews />
     
    
    </>
  );
};

export default page;
