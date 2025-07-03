"use client";
import React from "react";

import FrequentlyAskedQuestions from "@/components/FrequentlyAskedQuestions/FrequentlyAskedQuestions";
import TraningBanner from "@/components/TraningBanner/TraningBanner";
import TraningCourseInstructors from "@/components/TraningBanner/TraningCourseInstructors";
import TrainingTabMotherboard from "@/components/TraningBanner/TrainingTabMotherboard";
import TraningWillLearn from "@/components/TraningBanner/TraningWillLearn";
import backbanner from "../../../public/Images/Home/back-banner.svg"
import TrainingTabMotherboardsecond from "@/components/TraningBanner/TrainingTabMotherboardsecond";
import FormCode from "@/components/Form/FormCode";
import MainHeading from "@/components/ManinHeading/MainHeading";
import { usePathname } from "next/navigation";
import Boxblock from "../../components/HomeCpmponents/WhyChooseLabX/Boxblock";
import rname from "../../../public/Images/icons/rname.png";
import jname from "../../../public/Images/icons/E.png";
import Nname from "../../../public/Images/icons/N.png";
import Sname from "../../../public/Images/icons/S.png";
import Aname from "../../../public/Images/icons/A.png";
import hname from "../../../public/Images/icons/h.png";
import Googletest from "../../../public/Images/icons/Googletest.svg";
import BiginnerReviews from "@/components/GoogleReviews/BiginnerReviews";
import LightCources from "@/components/TraningBanner/LightCources";

const BeginnerCourse = () => {
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
  const pathname = usePathname();
  const accordionData = [
    {
      title: "1. Who is this course suitable for?",
      content:
        "This motherboard repair course is designed for individuals with basic device repair knowledge who want to advance their skills in motherboard repair and micro soldering techniques.",
    },
    {
      title: "2. Do I need prior experience in soldering?",
      content:
        "Basic soldering knowledge is helpful but not mandatory. The course starts with foundational techniques, gradually advancing to expert-level micro soldering skills.",
    },
    {
      title: "3. What tools will I learn to use?",
      content:
        "You’ll learn to work with precision tools like soldering stations, microscopes, multimeters, and hot air rework stations essential for motherboard-level repairs.",
    },
    {
      title: "4. What devices does the course cover?",
      content:
        "The micro soldering course covers a wide range of devices, including smartphones, tablets, and other electronics, focusing on advanced motherboard-level repairs",
    },
    {
      title: "5. Will I receive hands-on training?",
      content:
        "Yes, the course emphasizes hands-on practice, allowing you to work on real devices under expert guidance to build confidence and precision.",
    },
    {
      title: "6. Is certification provided after completion?",
      content:
        "Yes, students receive a recognized certification upon successful completion, showcasing their expertise in advanced motherboard repair and micro soldering.",
    },
    {
      title: "7. How long is the course?",
      content:
        "The Advanced Motherboard Repair – Micro Soldering course is one week long, offering intensive, hands-on training to build expertise within a focused timeframe.",
    },
  ];
  return (
    <>
      <TraningBanner
        pageName="Advanced Motherboard Repair – Micro Soldering (Level 1)"
        pageDescription="This course is designed and based on the highest industry standards and over 14 years of industry experience. It includes everything that anyone needs to be one of the best technicians or a successful business owner."
        backgroundImage="/Images/BannerImages/mailinrepair.png"
        adminimagenew="/Images/adminimagenew.png"
        link="/advanced-motherboard"
        courseName="Advanced"
        courseRating="4.7"
        courseHour="25 Hours"
        Duration=" 1 Week"
        Price="$2200"
        buttonname="JOIN THIS COURSE"
      />

      <TraningWillLearn
        title="Course Highlights"
        Course="Course Format"
        paramtitle1="Master Complex Repairs with Expert Guidance"
        param1="Learn to diagnose and repair damaged motherboards with advanced techniques. This hands-on training covers common issues like power problems, faulty connectors, and damaged circuits, all with expert instruction to build your repair confidence.
"
        paramtitle2="Precision Micro Soldering Skills"
        param2="Develop expert-level micro soldering skills required for repairing modern electronics. Learn to handle tiny components on circuit boards with precision, using specialized tools for soldering and rework, ensuring high-quality, professional repairs.

"
        paramtitle3="Troubleshooting & Diagnostics Techniques"
        param3="Gain proficiency in advanced troubleshooting techniques using tools like oscilloscopes, multimeters, and thermal cameras. Learn how to efficiently diagnose and repair complex motherboard issues, equipping you with the skills to tackle any electronic problem.
"
        Courseformate1="Video Tutorials"
        Courseformate2="   1 Week Duration"
        Courseformate3="   Experienced Instructors"
        Courseformate4=" "
        border="#56c1c1"
      />
          <section
    className="py-4 lg:py-[20px] bg-no-repeat bg-cover bg-center "
  style={{
    backgroundImage: `url(${backbanner.src})`,
  }}
>

   <TrainingTabMotherboard />
      <TrainingTabMotherboardsecond />
</section>
     

      <TraningCourseInstructors />
      {/* <MotherboardPhoneReapair /> */}
      <LightCources
        title=" Tools and Techniques Covered"
        discripation="The Screen Refurbishment Course offers hands-on learning with essential tools, including screen separators, OCA laminating equipment, vacuum laminators, and laser machines for precise repairs. Master techniques like LOCA UV glue application, ultrasonic cleaning, and polarizer film replacement. Learn to safely remove back glass and create flawless displays, equipping you with professional skills for LCD and OLED screen restoration."
      />
      {/* <AdvancedChooseLab /> */}
      {/* comment code */}
      <Boxblock></Boxblock>

      {pathname === "/beginner-phone-repair-course" ||
      pathname === "/advanced-motherboard" ||
      pathname === "/expert-motherboard-repair" ||
      pathname === "/master-motherboard-repair" ||
      pathname === "/professional-phone-screen" ? null : (
        <div className=" pt-3" id="mother-board">
          <MainHeading Heading="Advanced Motherboard Repair" />
          <FormCode />
        </div>
      )}
      <FrequentlyAskedQuestions
        heading="Frequently Asked Questions (FAQs)"
        title="If you have any doubts, please refer to our FAQs for detailed answers and clarifications."
        accordionData={accordionData}
      />
      {/* <MotherboardReviews /> */}
      <BiginnerReviews reviews={reviewsData}  googletitle="Our Google Reviews"/>
    </>
  );
};

export default BeginnerCourse;
