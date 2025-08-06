import Breadcrumb from "../../components/Breadcrumb/Breadcrumb";
import React from "react";
import ContactUsForm from "./ContactUsForm";

import YouTubeHome from "../../components/HomeCpmponents/YouTubeHome/YouTubeHome";
import FixLabx from "../../components/HomeCpmponents/FixLabx/FixLabx";
import BiginnerReviews from "../../components/GoogleReviews/BiginnerReviews";
import rname from "../../../public/Images/icons/rname.png";
import jname from "../../../public/Images/icons/E.png";
import Nname from "../../../public/Images/icons/N.png";
import Sname from "../../../public/Images/icons/S.png";
import Aname from "../../../public/Images/icons/A.png";
import hname from "../../../public/Images/icons/h.png";
import Googletest from "../../../public/Images/icons/Googletest.svg";

export const metadata = {
  title: "Contact Us Today - Mobile Phone Repair Course | Phone Repair Center",
  description: "Get in touch with Phone Repair Center for expert mobile phone repair course, Services & Training. Whether you need screen replacements, data recovery. Contact us today!",
  keywords: ["LabX", "tech solutions", "data recovery", "client reviews", "tech services"],
  openGraph: {
    title: "Contact Us Today - Mobile Phone Repair Course | Phone Repair Center",
    description: "Get in touch with Phone Repair Center for expert mobile phone repair course, Services & Training. Whether you need screen replacements, data recovery. Contact us today!",
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
    title: "Contact Us Today - Mobile Phone Repair Course | Phone Repair Center",
    description: "Get in touch with Phone Repair Center for expert mobile phone repair course, Services & Training. Whether you need screen replacements, data recovery. Contact us today!",
    images: "Images/aboutadmin.png",
  },
  alternates: {
    canonical: `https://www.prcrepair.com.au/about-us`,
  },

};
const page = () => {
   const reviewsData = [
    {
      name: "Liam Foster",
      date: "September 12, 2023",
      profileImage: hname,
      logoImage: Googletest,
      rating: 5,
      param:
        "The course was incredibly detailed, and the hands-on practice helped me build confidence. The instructors were patient and knowledgeable, making even complex micro soldering techniques easy to understand.",
    },
    {
      name: "Emma Williams",
      date: "September 12, 2023",
      profileImage: rname,
      logoImage: Googletest,
      rating: 5,
      param:
        "This course transformed my skills! I can now confidently repair motherboards and handle advanced micro soldering tasks. Highly recommend it for anyone serious about electronics repair.",
    },
    {
      name: "Jack O'Connor",
      date: "September 12, 2023",
      profileImage: Sname,
      logoImage: Googletest,
      rating: 5,
      param:
        "The one-week intensive program was perfect. I learned advanced diagnostics and component replacement with expert guidance. The hands-on approach made everything clear and practical. Excellent experience!",
    },
    {
      name: "Chloe Brown",
      date: "October 5, 2023",
      profileImage: jname,
      logoImage: Googletest,
      rating: 5,
      param:
        "Fantastic course! The instructors were highly experienced, and their step-by-step guidance on micro soldering was invaluable. I feel ready to handle complex motherboard repairs now. ",
    },
    {
      name: "Oliver Harris",
      date: "November 1, 2023",
      profileImage: Aname,
      logoImage: Googletest,
      rating: 5,
      param:
        "The training exceeded my expectations. From using advanced tools to mastering micro soldering techniques, I gained practical skills that I can apply immediately. Great value for time and money!",
    },
    {
      name: "Sophie Clark",
      date: "November 1, 2023",
      profileImage: Nname,
      logoImage: Googletest,
      rating: 5,
      param:
        "A must-attend course for repair professionals. The small class size allowed personalized attention, and the hands-on exercises helped me master motherboard repairs quickly. Truly worth every minute!",
    },
  ];
  return (
    <>
      <div className="gkhidden button ">
        <Breadcrumb
          pageName="Contact Us"
          pageDescription="Contact Us For More Information "
          backgroundImage="/Images/BannerImages/contactnew.webp"
          adminimagenew="/Images/contactus.svg"
          link="/contact-us"
          buttonname="Request a Quote"
          scrollId = "contactId"
          scrollOffSet = {24 * 5}
        />
       
        </div>
          <ContactUsForm />
          <FixLabx/>
          <YouTubeHome />
           <BiginnerReviews reviews={reviewsData}  googletitle="Our Google Review"/>
     
    
    </>
  );
};

export default page;
