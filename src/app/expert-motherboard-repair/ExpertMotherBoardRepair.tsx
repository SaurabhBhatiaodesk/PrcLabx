"use client";
import FrequentlyAskedQuestions from "@/components/FrequentlyAskedQuestions/FrequentlyAskedQuestions";
import BeginnerPhoneRepaiCourseSale from "@/components/TraningBanner/BeginnerPhoneRepaiCourseSale";
import TraningBanner from "@/components/TraningBanner/TraningBanner";
import TraningCourseInstructors from "@/components/TraningBanner/TraningCourseInstructors";
import TraningTabBigner from "@/components/TraningBanner/TraningTabBigner";
import TraningTabBignersecond from "@/components/TraningBanner/TraningTabBignersecond";
import ExpertChooseLab from "@/components/HomeCpmponents/WhyChooseLabX/ExpertChooseLab";
import TraningWillLearn from "@/components/TraningBanner/TraningWillLearn";
import ExpertMotherboardReviews from "@/components/GoogleReviews/ExpertMotherboardReviews";
import React from "react";
import FristTraningTab from "./FristTraningTab";
import SecondTraningTab from "./SecondTraningTab";
import TrainingInstructors from "./TrainingInstructors";
import TraningSales from "./TraningSales";
import MainHeading from "@/components/ManinHeading/MainHeading";
import FormCode from "@/components/Form/FormCode";
import { usePathname } from "next/navigation";

const BeginnerCourse = () => {
  const pathname = usePathname();
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
        AdminImage="/Images/adminimage.png"
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
      <FristTraningTab />
      <SecondTraningTab />
      <TrainingInstructors {...instructorData} />

      <TraningSales
        courseName="Become a Master in Motherboard Repairs"
        imagedata="/Images/CourseInstructors.png"
        courseDescription={[
          "Complete this comprehensive mainboard repair training and build the confidence to handle complex motherboard repairs with ease. From advanced diagnostics to precise micro soldering, you’ll develop the expertise to tackle intricate challenges and deliver exceptional results. Equip yourself to work professionally on a wide array of devices, ensuring top-notch performance and reliability.",
        ]}
        saleDurationDays={7}
        initialCounters={{
          personsMentored: 50,
          workshopsAttended: 300,
          coachingCertificates: 25,
        }}
      />
      <ExpertChooseLab />
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
      <ExpertMotherboardReviews />
    </>
  );
};

export default BeginnerCourse;
