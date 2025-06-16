"use client"
import FrequentlyAskedQuestions from "@/components/FrequentlyAskedQuestions/FrequentlyAskedQuestions";
import BeginnerPhoneRepaiCourseSale from "@/components/TraningBanner/LightCources";
import TraningBanner from "@/components/TraningBanner/TraningBanner";
import TraningCourseInstructors from "@/components/TraningBanner/TraningCourseInstructors";
import TraningTabBigner from "@/components/TraningBanner/TraningTabBigner";
import TraningTabBignersecond from "@/components/TraningBanner/TraningTabBignersecond";
import TraningWillLearn from "@/components/TraningBanner/TraningWillLearn";
// import BiginnerChooseLab from "@/components/HomeCpmponents/WhyChooseLabX/BiginnerChooseLab";
import BiginnerReviews from "@/components/GoogleReviews/BiginnerReviews";
import React from "react";
import TraningTabBignerThird from "@/components/TraningBanner/TraningTabBignerThird";
import MainHeading from "@/components/ManinHeading/MainHeading";
import FormCode from "@/components/Form/FormCode";
import { usePathname } from "next/navigation";
// import Boxblock from "@/components/HomeCpmponents/WhyChooseLabX/boxblock";
import rname from "../../../public/Images/icons/rname.png";
import jname from "../../../public/Images/icons/E.png";
import Nname from "../../../public/Images/icons/N.png";
import Sname from "../../../public/Images/icons/S.png";
import Aname from "../../../public/Images/icons/A.png";
import hname from "../../../public/Images/icons/h.png";
import Googletest from "../../../public/Images/icons/Googletest.svg";
import Boxblock from "../../components/HomeCpmponents/WhyChooseLabX/Boxblock";
import LightCources from "@/components/TraningBanner/LightCources";

const BeginnerCourse = () => {
  const accordionData = [
    {
      title: "What is the duration of the training program?",
      content:
        "The training program lasts for 5 days, providing intensive hands-on experience and theoretical knowledge to master mobile repair techniques efficiently.",
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
      title:
        "Will I be able to start my own repair business after this training?",
      content:
        "Absolutely! The phone repair course equips you with the skills needed to start your own mobile repair business, offering practical insights into running a successful operation.",
    },
  ];
    const reviewsData = [
    {
      name: "Harper Lee",
      date: "September 12, 2023",
      profileImage: hname,
      logoImage: Googletest,
      rating: 5,
      param: "This training was a game-changer! The hands-on approach made complex repairs easy to understand. I feel confident handling all device issues now!",
    },
    {
      name: "Mason Clarke",
      date: "September 20, 2023",
      profileImage: rname,
      logoImage: Googletest,
      rating: 5,
      param: "I’ve learned so much in just five days! The instructors were fantastic, and I can now repair phones and tablets with ease. Highly recommend!",
    },
    {
      name: "Mia S.",
      date: "September 29, 2023",
      profileImage: Sname,
      logoImage: Googletest,
      rating: 5,
      param: "The phone fixing course exceeded my expectations. I gained practical skills quickly and now offer repairs in my local area. This program is worth every penny!",
    },
    {
      name: "Ella Brown",
      date: "October 5, 2023",
      profileImage: jname,
      logoImage: Googletest,
      rating: 5,
      param: "Great experience! The training was thorough, with excellent instructor support. I can now confidently replace screens and batteries. Very helpful for anyone looking to start!",
    },
    {
      name: "Isla C.",
      date: "November 1, 2023",
      profileImage: Aname,
      logoImage: Googletest,
      rating: 5,
      param: "I had no prior experience, but this phone repairing course made everything so clear. The instructors were patient and skilled. I’m now repairing devices professionally!",
    },
    {
      name: "Lucas B.",
      date: "November 1, 2023",
      profileImage: Nname,
      logoImage: Googletest,
      rating: 5,
      param: "This phone fixing course gave me the confidence to open my own repair business. The lessons were clear, and I learned everything from diagnosing issues to completing repairs.",
    },
  ];
  const pathname = usePathname();



  return (
    <>
      <TraningBanner
        pageName="Beginner Phone Repair Course"
        pageDescription="This course is designed and based on the highest industry standards and over 14 years of industry experience. It includes everything that anyone needs to be one of the best technicians or a successful business owner."
        backgroundImage="/Images/BannerImages/mailinrepair.png"
        AdminImage="/Images/adminimage.png"
        link="/beginner-phone-repair-course"
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
        param1="Learn to use essential tools and parts for high-quality mobile repairs. This phone fixing course covers effective screen replacement techniques for phones and iPads, helping you restore device appearance and functionality. Mastering these skills ensures efficient, professional screen repairs.
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
        border="#EDE574"
      />
      <TraningTabBigner />


      <TraningTabBignersecond />
      <TraningTabBignerThird />
      <TraningCourseInstructors />
     
       <LightCources title=" Hands-On Learning for Real-World Skills" discripation="We provide comprehensive, hands-on demonstrations of each repair process, ensuring you understand the techniques and methods thoroughly. Following the demonstrations, you will have the opportunity to perform the same repairs independently under the close supervision of our expert trainers, allowing you to gain practical experience and confidence in your skills." />
      {/* <BiginnerChooseLab /> */}
    {/* comment code */}
          <Boxblock />


      {pathname === "/beginner-phone-repair-course" ||
      pathname === "/advanced-motherboard" ||
      pathname === "/expert-motherboard-repair" ||
      pathname === "/master-motherboard-repair" ||
      pathname === "/professional-phone-screen" ? null : (
        <>
      <div className=" container" id="beginner-phone-repair-course-id">
        <MainHeading Heading="Beginner Phone Repair Course" />
      </div>
        <FormCode />
        </>
      )}
      <FrequentlyAskedQuestions
        heading="Frequently Asked Questions (FAQs)"
        title="If you have any doubts, please refer to our FAQs for detailed answers and clarifications."
        accordionData={accordionData}
      />
       <BiginnerReviews reviews={reviewsData} googletitle="Our Google Review" />
    </>
  );
};

export default BeginnerCourse;
