import TraningBanner from "@/components/TraningBanner/TraningBanner";
import TraningWillLearn from "@/components/TraningBanner/TraningWillLearn";
import React from "react";
// import ExpertChooseLab from "../../components/HomeCpmponents/WhyChooseLabX/ExpertChooseLab"
import BrokenRippedFirstTab from "./BrokenRippedFirstTab";
import BrokenRippedSecondTab from "./BrokenRippedSecondTab";
import BrokenCourseInstructors from "./BrokenCourseInstructors";
import BiginnerReviews from "@/components/GoogleReviews/BiginnerReviews";

import FrequentlyAskedQuestions from "@/components/FrequentlyAskedQuestions/FrequentlyAskedQuestions";
import MainHeading from "@/components/ManinHeading/MainHeading";
import FormCode from "@/components/Form/FormCode";
import Boxblock from "../../components/HomeCpmponents/WhyChooseLabX/Boxblock";
import rname from "../../../public/Images/icons/rname.png";
import jname from "../../../public/Images/icons/E.png";
import Iname from "../../../public/Images/icons/I.png";
import Nname from "../../../public/Images/icons/N.png";
import Sname from "../../../public/Images/icons/S.png";
import Aname from "../../../public/Images/icons/A.png";
import hname from "../../../public/Images/icons/h.png";
import Googletest from "../../../public/Images/icons/Googletest.svg";

const BrokenRippedPadsRepairJumbers = () => {
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
  const accordionData = [
    {
      title: "What is the duration of the training program?",
      content:
        "The training program lasts for 5 days, providing intensive hands-on experience and theoretical knowledge to master mobile phone repair   techniques efficiently.",
    },
    {
      title: "Do I need prior experience in mobile phone repairs?",
      content:
        "No prior experience is required. The course is designed for beginners, with step-by-step guidance to ensure you develop the necessary skills from scratch.",
    },
    {
      title: "What devices will I learn to repair?",
      content:
        "You will learn to repair iPhones, iPads, and Android devices, covering a range of common issues like screen, battery, and camera replacements.",
    },
    {
      title: "Are the tools and materials provided?",
      content:
        "Yes, all tools and materials required for the course, including practice devices, will be provided, allowing you to learn hands-on during the training.",
    },
    {
      title: "How can I register for the course?",
      content:
        "You can register for the mobile phone repair course through our website, where you can select a suitable date and complete the registration process securely online.",
    },
    {
      title: "What happens if I miss a class?",
      content:
        "If you miss a class, you can arrange to attend a make-up session. We ensure flexibility to help you complete your training.",
    },
    {
      title: "Will I be able to start my own repair business after this training?",
      content:
        "Absolutely! The phone repair course equips you with the skills needed to start your own mobile phone repair   business, offering practical insights into running a successful operation.",
    },
  ];
  return (
    <>
      <TraningBanner
        pageName=" Broken/ Ripped Pads Repair Jumbers "
        pageDescription=" "
        backgroundImage="/Images/BannerImages/mailinrepair.png"
        adminimagenew="/Images/adminimagenew.png"
        link="/broken-ripped-pads-repair-jumbers"
        courseName="Beginner"
        courseRating="4.7"
        courseHour="25 Hours"
        Duration="5 Days"
        Price="$1249 (Includes a free toolkit for each student)"
        buttonname="JOIN THIS COURSE"
      />


      <TraningWillLearn
        title="Course Highlights"
        Course="Phone Repair Course Format"
        paramtitle1="Essential Tools, Parts, and Screen Replacement"
        param1="Learn to use essential tools and parts for high-quality mobile phone repair  s. This phone fixing course covers effective screen replacement techniques for phones and iPads, helping you restore device appearance and functionality. Mastering these skills ensures efficient, professional screen repairs.
"
        paramtitle2="Battery and Charging Port Repairs"
        param2="Gain expertise in battery and charging port replacements for smartphones and tablets. You’ll learn safe removal, installation, and testing techniques that ensure proper power flow. These skills are essential for extending device lifespan and delivering reliable, long-lasting repairs.

"
        paramtitle3="Fault Diagnostics and Component Replacement"
        param3="Develop your diagnostic skills and learn to replace key components, including back glass, housings, cameras, and flashlights. This fixing phones course focuses on troubleshooting methods to efficiently fix faults, allowing you to improve device performance and maintain high repair standards.
"
        Courseformate1="Video Tutorials"
        Courseformate2="  5 Days Duration"
        Courseformate3="  Experienced Instructors"
        Courseformate4="  Free Toolkit"
        border="#26bd9aed"
      />
      <BrokenRippedFirstTab />
      <BrokenRippedSecondTab />
      <BrokenCourseInstructors />
      {/* <BrokenBlink /> */}
      


      {/* <ExpertChooseLab /> */}
      <Boxblock></Boxblock>
      <div className="container" id="broken-ripped-pads-repair-jumbers-id">
        <MainHeading Heading="Broken Ripped Pads Repair Jumbers" />
      </div>
      <FormCode />

      <FrequentlyAskedQuestions
        heading="Frequently Asked Questions (FAQs)"
        title="If you have any doubts, please refer to our FAQs for detailed answers and clarifications."
        accordionData={accordionData}
      />
     <BiginnerReviews reviews={reviewsData}  googletitle="Our Google Review"/>


    </>
  );
};

export default BrokenRippedPadsRepairJumbers;
