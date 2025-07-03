"use client";
import FrequentlyAskedQuestions from "../../components/FrequentlyAskedQuestions/FrequentlyAskedQuestions";
import BeginnerPhoneRepaiCourseSale from "../../components/TraningBanner/LightCources";
import TraningBanner from "../../components/TraningBanner/TraningBanner";
import TraningCourseInstructors from "../../components/TraningBanner/TraningCourseInstructors";
import TraningTabBigner from "../../components/TraningBanner/TraningTabBigner";
import TraningTabBignersecond from "../../components/TraningBanner/TraningTabBignersecond";
// import ExpertChooseLab from "../../components/HomeCpmponents/WhyChooseLabX/ExpertChooseLab";
import TraningWillLearn from "../../components/TraningBanner/TraningWillLearn";
import backbanner from "../../../public/Images/Home/back-banner.svg"

import React from "react";
import FristTraningTab from "./FristTraningTab";
import SecondTraningTab from "./SecondTraningTab";
import TrainingInstructors from "./TrainingInstructors";
import TraningSales from "./TraningSales";
import MainHeading from "../../components/ManinHeading/MainHeading";
import FormCode from "../../components/Form/FormCode";
import { usePathname } from "next/navigation";
import Boxblock from "../../components/HomeCpmponents/WhyChooseLabX/Boxblock";
import BiginnerReviews from "../../components/GoogleReviews/BiginnerReviews";
import rname from "../../../public/Images/icons/rname.png";
import jname from "../../../public/Images/icons/E.png";
import Iname from "../../../public/Images/icons/I.png";
import Nname from "../../../public/Images/icons/N.png";
import Sname from "../../../public/Images/icons/S.png";
import Aname from "../../../public/Images/icons/A.png";
import hname from "../../../public/Images/icons/h.png";
import Googletest from "../../../public/Images/icons/Googletest.svg";
import LightCources from "../../components/TraningBanner/LightCources";
const BeginnerCourse = () => {
  const pathname = usePathname();

  const reviewsData = [
    {
      name: "Sarah Thompson",
      date: "September 12, 2023",
      profileImage: hname,
      logoImage: Googletest,
      rating: 5,
      param:
        "The Expert Motherboard Repair course exceeded my expectations. The hands-on training in micro soldering gave me the confidence to handle complex repairs professionally. Highly recommend it!",
    },
    {
      name: "James Harper",
      date: "September 12, 2023",
      profileImage: rname,
      logoImage: Googletest,
      rating: 5,
      param:
        "Fantastic course! The instructors were knowledgeable, and I gained valuable skills in diagnostics and soldering. Perfect for anyone looking to excel in motherboard repairs.",
    },
    {
      name: "Olivia Bennett",
      date: "September 12, 2023",
      profileImage: Sname,
      logoImage: Googletest,
      rating: 5,
      param:
        "This course is a game-changer! I can now repair IC chips and tackle reballing challenges. Great support and detailed lessons made learning seamless.",
    },
    {
      name: "Liam Cooper",
      date: "October 5, 2023",
      profileImage: jname,
      logoImage: Googletest,
      rating: 5,
      param:
        "Joining this training was the best decision for my career. The practical sessions on NAND programming and chip repairs were incredibly detailed. Worth every minute!",
    },
    {
      name: "Emma Wilson",
      date: "November 1, 2023",
      profileImage: Aname,
      logoImage: Googletest,
      rating: 5,
      param:
        "Exceptional experience! The focus on real-world repair scenarios and advanced techniques like dual-board soldering has improved my repair accuracy. Great for beginners and pros alike!",
    },
    {
      name: "Ethan Turner",
      date: "November 1, 2023",
      profileImage: Nname,
      logoImage: Googletest,
      rating: 5,
      param:
        "Expert Motherboard Repair training delivered exactly what I needed. Comprehensive lessons, hands-on practice, and certification boosted my confidence. I now handle client repairs with precision.",
    },
  ];
  const accordionData = [
    {
      title: "1. Who is this course suitable for?",
      content:
        "This course is ideal for technicians, hobbyists, and beginners aiming to master advanced motherboard repair and micro soldering techniques for professional electronic repairs.",
    },
    {
      title: "2. What skills will I gain from this course?",
      content:
        "You’ll learn diagnostics, micro soldering, reballing, NAND programming, Face ID repairs, and more, equipping you with essential skills for complex motherboard-level electronic repairs.",
    },
    {
      title: "3. Do I need prior experience in motherboard repairs?",
      content:
        "No prior experience is necessary. This motherboard repair course covers foundational concepts and advanced techniques, making it suitable for both beginners and experienced repair technicians.",
    },
    {
      title: "4. What tools are required for this course?",
      content:
        "You’ll need soldering stations, hot air rework tools, microscopes, and diagnostic equipment. A detailed list of tools will be provided upon enrollment.",
    },
    {
      title: "5. Is this course hands-on or theoretical?",
      content:
        "The motherboard repair course emphasizes hands-on training, allowing you to practice repair techniques directly. Theoretical lessons complement practical sessions to build a strong technical foundation.",
    },
    {
      title: "6. Will I receive certification after completing the course?",
      content:
        "Yes, participants will receive a certification upon successful completion, validating their expertise in motherboard repairs and enhancing their professional credentials.",
    },
    {
      title: "7. How long does the course take to complete?",
      content:
        "The course duration varies but typically spans several weeks, depending on the intensity of the program and your chosen schedule. Flexible options are available.",
    },
  ];
  const instructorData = {
    instructorName: "Bharat Dhingra",
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
        pageName="Expert Motherboard Repair – Micro Soldering (Level 2)"
        pageDescription="This course is designed and based on the highest industry standards and over 14 years of industry experience. It includes everything that anyone needs to be one of the best technicians or a successful business owner."
        backgroundImage="/Images/BannerImages/mailinrepair.png"
        adminimagenew="/Images/adminimagenew.png"
        link="/expert-motherboard-repair"
        courseName="Motherboard"
        courseRating="4.7"
        courseHour="25 Hours"
        Duration="1 Week"
        Price="$2800 (Includes a free toolkit for each student"
        buttonname="JOIN THIS COURSE"
      />

      <TraningWillLearn
        title="Course Highlights"
        Course="Course Format"
        paramtitle1=" Hands-On Training in Micro Soldering Techniques"
        param1="Master advanced micro soldering skills with practical, hands-on training. Learn precise soldering techniques for repairing complex motherboard circuits, ensuring accuracy and efficiency in professional repairs for modern electronic devices.

"
        paramtitle2="Comprehensive Understanding of Motherboard Components"
        param2="Gain in-depth knowledge of motherboard architecture and components. Our motherboard repair course equips you to diagnose, troubleshoot, and repair intricate issues, enhancing your expertise in motherboard repair for laptops, desktops, and more.
"
        paramtitle3="Cutting-Edge Tools and Industry Practices"
        param3="Work with state-of-the-art tools and learn the latest industry-standard practices. Develop proficiency in handling microchips and delicate electronic parts, setting you apart as a certified expert in motherboard micro soldering.
"
        Courseformate1="Video Tutorials"
        Courseformate2="1 Week Duration"
        Courseformate3="Experienced Instructors"
        Courseformate4=""
        border="#d5fd33a1"
      />
          <section
    className="py-4 lg:py-[20px] bg-no-repeat bg-cover bg-center "
  style={{
    backgroundImage: `url(${backbanner.src})`,
  }}
>
    <FristTraningTab />
      <SecondTraningTab />

</section>
  

      <TrainingInstructors {...instructorData} />
   <LightCources title=" Tools and Techniques Covered" discripation="The Screen Refurbishment Course offers hands-on learning with essential tools, including screen separators, OCA laminating equipment, vacuum laminators, and laser machines for precise repairs. Master techniques like LOCA UV glue application, ultrasonic cleaning, and polarizer film replacement. Learn to safely remove back glass and create flawless displays, equipping you with professional skills for LCD and OLED screen restoration." />


      <Boxblock></Boxblock>
      {pathname === "/beginner-phone-repair-course" ||
        pathname === "/advanced-motherboard" ||
        pathname === "/expert-motherboard-repair" ||
        pathname === "/master-motherboard-repair" ||
        pathname === "/professional-phone-screen" ? null : (
        <div className=" pt-3 " id="expert-motherboard-repair-id">
          <MainHeading Heading="Expert Motherboard Repair" />
          <FormCode />
        </div>
      )}
      <FrequentlyAskedQuestions
        heading="Frequently Asked Questions (FAQs)"
        title="If you have any doubts, please refer to our FAQs for detailed answers and clarifications."
        accordionData={accordionData}
      />
      {/* <ExpertMotherboardReviews /> */}
      <BiginnerReviews reviews={reviewsData} googletitle="Our Google Review" />
    </>
  );
};

export default BeginnerCourse;
