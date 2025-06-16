"use client";
import FrequentlyAskedQuestions from "@/components/FrequentlyAskedQuestions/FrequentlyAskedQuestions";
import BeginnerPhoneRepaiCourseSale from "@/components/TraningBanner/LightCources";
import TraningBanner from "@/components/TraningBanner/TraningBanner";
import TraningCourseInstructors from "@/components/TraningBanner/TraningCourseInstructors";
import TraningTabBigner from "@/components/TraningBanner/TraningTabBigner";
import TraningTabBignersecond from "@/components/TraningBanner/TraningTabBignersecond";
import TraningWillLearn from "@/components/TraningBanner/TraningWillLearn";
// import MasterReviews from "@/components/GoogleReviews/MasterReviews";
import React from "react";
import FristTraningTab from "../expert-motherboard-repair/FristTraningTab";
import TrainingInstructors from "../expert-motherboard-repair/TrainingInstructors";
import TraningSales from "../expert-motherboard-repair/TraningSales";

// import MasterChooseLab from "@/components/HomeCpmponents/WhyChooseLabX/MasterChooseLab";
import MasterTabFirsh from "./MasterTabFirsh";
import MasterTabSecond from "./MasterTabSecond";
import FormCode from "@/components/Form/FormCode";
import MainHeading from "@/components/ManinHeading/MainHeading";
import { usePathname } from "next/navigation";
import Boxblock from "../../components/HomeCpmponents/WhyChooseLabX/Boxblock";
import BiginnerReviews from "@/components/GoogleReviews/BiginnerReviews";
import rname from "../../../public/Images/icons/rname.png";
import jname from "../../../public/Images/icons/E.png";
import Iname from "../../../public/Images/icons/I.png";
import Nname from "../../../public/Images/icons/N.png";
import Sname from "../../../public/Images/icons/S.png";
import Aname from "../../../public/Images/icons/A.png";
import hname from "../../../public/Images/icons/h.png";
import Googletest from "../../../public/Images/icons/Googletest.svg";
import LightCources from "@/components/TraningBanner/LightCources";
const MasterMotherboardRepair = () => {
  const pathname = usePathname();
  const accordionData = [
    {
      title: "1. What will I learn in the Master Motherboard Repair course?",
      content:
        "You'll learn advanced micro soldering techniques, CPU reballing, board-level repairs, and how to troubleshoot and restore damaged mobile phone motherboards effectively.",
    },
    {
      title: "2. Is prior experience required for this course?",
      content:
        "While prior experience in basic mobile phone repair is beneficial, the micro soldering course is designed for both beginners and those looking to upgrade their soldering skills.",
    },
    {
      title: "3. What tools are needed for the course?",
      content:
        "You'll need a soldering iron, magnification tools, heat station, tweezers, and a multimeter. The course covers tool usage and setup in detail.",
    },
    {
      title: "4. How long is the motherboard repair course?",
      content:
        "The Master Motherboard Repair course lasts for five days. You'll get both theoretical knowledge and hands-on practical experience.",
    },
    {
      title:
        "5. Can I start my own repair business after completing the course?",
      content:
        "Yes, this course equips you with industry-standard skills that will prepare you to open a repair business or work as a professional technician.",
    },
    {
      title: "6. Will I get certification after completing the course?",
      content:
        "Yes, upon successful completion, you'll receive a certificate verifying your skills in micro soldering and motherboard repair, recognized in the mobile phone repair industry.",
    },
    {
      title: "7. Is this course suitable for data recovery specialists?",
      content:
        "Absolutely! This motherboard repair course is ideal for data recovery specialists, as it includes techniques to restore devices with critical board damage and recover valuable data.",
    },
  ];
const reviewsData = [
  {
    name: "Tommy Harris",
    date: "September 12, 2023",
    profileImage: hname,
    logoImage: Googletest,
    rating: 5,
    param:
      "This motherboard repair course taught me everything I needed to know about micro soldering. The hands-on training was fantastic, and I’m now confident handling complex repairs.",
  },
  {
    name: "Emma Wilson",
    date: "September 12, 2023",
    profileImage: rname,
    logoImage: Googletest,
    rating: 5,
    param:
      "An excellent course for anyone looking to level up their skills. The instructors are knowledgeable, and the practical experience has made me a pro in motherboard repairs.",
  },
  {
    name: "Jacob Brown",
    date: "September 12, 2023",
    profileImage: Sname,
    logoImage: Googletest,
    rating: 5,
    param:
      "Highly recommend this micro soldering course! I learned everything from CPU reballing to data recovery. The training was clear, and I feel ready to start my own business.",
  },
  {
    name: "Sarah Clark",
    date: "October 5, 2023",
    profileImage: jname,
    logoImage: Googletest,
    rating: 5,
    param:
      "The Master Motherboard Repair course was a game-changer. I can now confidently repair damaged boards and handle tricky data recovery tasks. Worth every penny!",
  },
  {
    name: "James Walker",
    date: "November 1, 2023",
    profileImage: Aname,
    logoImage: Googletest,
    rating: 5,
    param:
      "Great hands-on experience with real-world scenarios. This course has taken my repair skills to the next level, especially with advanced soldering techniques. Very happy!",
  },
  {
    name: "Lily Roberts",
    date: "November 1, 2023",
    profileImage: Nname,
    logoImage: Googletest,
    rating: 5,
    param:
      "I gained valuable insights into micro soldering and mobile phone repairs. The course helped me become proficient in restoring even the most challenging motherboard issues. Fantastic training!",
  },
];

  const instructorData = {
    instructorName: "Bharat Dhingra & Team",
    instructorImage: "/Images/CourseInstructors.png", // Update with the correct image path
    courseRating: 4.7,
    courseDuration: "25 Hours",
    personsMentoredTarget: 10,
    workshopsAttendedTarget: 500,
    coachingCertificatesTarget: 9,
    CourseHeading: "Training Instructors",
    param2: "Professionals trained ",
    param3: "Positive feedback",
    param1: "Years of industry experience",
    courseDescription: [
      "Our instructors for the Advanced Motherboard Repair – Micro Soldering course are seasoned professionals with over a decade of expertise in mobile device repair. They bring extensive industry knowledge, practical insights, and hands-on guidance to every session. Dedicated to helping students master micro soldering techniques, they ensure confidence and precision in advanced motherboard diagnostics, circuit repair, and component-level replacements.",
    ],
  };
  return (
    <>
      <TraningBanner
        pageName="Master Motherboard Repair – Micro Soldering (Level 3)"
        pageDescription="This course is designed and based on the highest industry standards and over 14 years of industry experience. It includes everything that anyone needs to be one of the best technicians or a successful business owner."
        backgroundImage="/Images/BannerImages/mailinrepair.png"
        AdminImage="/Images/adminimage.png"
        link="/master-motherboard-repair"
        courseName="Master Motherboard"
        courseRating="4.7"
        courseHour="25 Hours"
        Duration=" 5 Days"
        Price=" $5500"
        buttonname="JOIN THIS COURSE"
      />

      <TraningWillLearn
        title="Course Highlights"
        Course="Course Format"
        paramtitle1="Advanced Data Recovery"
        param1=" Gain hands-on experience in diagnosing and fixing complex motherboard issues, including IC replacement and chip-level troubleshooting, guided by industry experts.


"
        paramtitle2="Mastering Soldering Skills"
        param2=" Learn precision soldering techniques for microcomponents, enabling you to handle delicate repairs with confidence, ensuring professional-grade results for every repair task.

"
        paramtitle3="Comprehensive Practical Training"
        param3="Work with real-world scenarios and modern tools to develop expertise in motherboard repair and soldering, preparing you for a successful career in mobile phone repair.

"
        Courseformate1="Video Tutorials"
        Courseformate2="1 Week Duration"
        Courseformate3="Experienced Instructors"
        Courseformate4="Free Toolkit"
        border="#d5fd33a1"
      />
      <MasterTabFirsh />
      <MasterTabSecond />
      <TrainingInstructors {...instructorData} />

  <LightCources title=" Tools and Techniques Covered" discripation="The Screen Refurbishment Course offers hands-on learning with essential tools, including screen separators, OCA laminating equipment, vacuum laminators, and laser machines for precise repairs. Master techniques like LOCA UV glue application, ultrasonic cleaning, and polarizer film replacement. Learn to safely remove back glass and create flawless displays, equipping you with professional skills for LCD and OLED screen restoration." />

      {/* <MasterChooseLab /> */}
{/* this is comment code  */}
      <Boxblock></Boxblock>


      {/* <BeginnerPhoneRepaiCourseSale /> */}
      {pathname === "/beginner-phone-repair-course" ||
      pathname === "/advanced-motherboard" ||
      pathname === "/expert-motherboard-repair" ||
      pathname === "/master-motherboard-repair" ||
      pathname === "/professional-phone-screen" ? null : (
        <div className=" container" id="master-motherboard-repairi-id">
          <MainHeading Heading="Master Motherboard Repair – Micro Soldering" />
          <FormCode />
        </div>
      )}
      <FrequentlyAskedQuestions
        heading="Frequently Asked Questions (FAQs)
"
        title="If you have any doubts, please refer to our FAQs for detailed answers and clarifications
"
        accordionData={accordionData}
      />

      {/* <MasterReviews /> */}
      <BiginnerReviews reviews={reviewsData} googletitle="Our Google Review" />
    </>
  );
};

export default MasterMotherboardRepair;
