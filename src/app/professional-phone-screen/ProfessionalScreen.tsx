"use client";
import FrequentlyAskedQuestions from "@/components/FrequentlyAskedQuestions/FrequentlyAskedQuestions";
import TraningBanner from "@/components/TraningBanner/TraningBanner";
import TraningWillLearn from "@/components/TraningBanner/TraningWillLearn";
import TraningProfessionalBanner from "@/components/TraningBanner/TrainingTabProfessionalBanner";
import ProfessionalSecondTab from "@/components/TraningBanner/ProfessionalTabSecondBanner";
import TraningCourseInstructors from "./ProfessionalInstructor";
import ProfessionalInstructorSecond from "./ProfessionalInstructorSecond";
// import ProfessionalChooseLab from "@/components/HomeCpmponents/WhyChooseLabX/ProfessionalChooseLab";
// import ProfessionalReviews from "@/components/GoogleReviews/ProfessionalReviews";
import React from "react";
import FormCode from "@/components/Form/FormCode";
import MainHeading from "@/components/ManinHeading/MainHeading";
import ProfessionalThreeTab from "./ProfessionalThreeTab";
import { usePathname } from "next/navigation";
import Boxblock from "../../components/HomeCpmponents/WhyChooseLabX/Boxblock";
import BiginnerReviews from "@/components/GoogleReviews/BiginnerReviews";
import rname from "../../../public/Images/icons/rname.png";
import jname from "../../../public/Images/icons/E.png";
import Nname from "../../../public/Images/icons/N.png";
import Sname from "../../../public/Images/icons/S.png";
import Aname from "../../../public/Images/icons/A.png";
import hname from "../../../public/Images/icons/h.png";
import Googletest from "../../../public/Images/icons/Googletest.svg";
import LightCources from "@/components/TraningBanner/LightCources";
const ProfessionalScreen = () => {
  const pathname = usePathname();
  const accordionData = [
    {
      title: "1. What is covered in a Screen Refurbishing Course?",
      content:
        "The course teaches screen separation, OCA laminating, back glass removal, LOCA UV gluing, ultrasonic cleaning, and polarizer replacement for LCD and OLED displays.",
    },
    {
      title: "2. Who can enroll in a Screen Refurbishing Training?",
      content:
        "Anyone interested in learning professional screen repair, including technicians, entrepreneurs, and individuals passionate about mobile and tablet screen restoration, can enroll.",
    },
    {
      title: "3. What tools are used in the Screen Refurbishing Course?",
      content:
        "The course includes tools like screen separators, vacuum laminators, laser machines, OCA laminating equipment, LOCA UV glue, and ultrasonic cleaning devices for advanced repairs.",
    },
    {
      title: "4. How long does the Screen Refurbishing Course take?",
      content:
        "Course duration varies, typically ranging from a few days to a couple of weeks, depending on the program's depth and learning objectives.",
    },
    {
      title: "5. Do I need prior experience to join the course?",
      content:
        "No prior experience is necessary. The advanced screen refurbishing training provides step-by-step guidance, starting with basics and advancing to professional screen refurbishment techniques.",
    },
    {
      title:
        "6. Will I get hands-on practice during the screen refurbishing training?",
      content:
        "Yes, the course offers extensive hands-on training with real equipment and materials to help you master screen refurbishment skills effectively.",
    },
    {
      title:
        "7. What certifications are provided after completing the screen refurbishing course?",
      content:
        "Many programs provide industry-recognized certificates, showcasing your expertise in LCD and OLED screen refurbishment and boosting your professional credibility.",
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
        pageName="Professional Phone Screen Refurbishing Course"
        pageDescription="This course is designed and based on the highest industry standards and over 14 years of industry experience. It includes everything that anyone needs to be one of the best technicians or a successful business owner."
        backgroundImage="/Images/BannerImages/mailinrepair.png"
        AdminImage="/Images/adminimage.png"
        link="/professional-phone-screen"
        courseName="Professional Phone Screen"
        courseRating="4.7"
        courseHour="25 Hours"
        Duration=" 5 Days"
        Price="$5500"
        buttonname="JOIN THIS COURSE"
      />

      <TraningWillLearn
        title="Course Highlights"
        Course="Course Format"
        paramtitle1="Learn to Refurbish OLED and LCD Display"
        param1="Master the art of refurbishing OLED and LCD displays with hands-on training, enhancing your technical skills for screen repair success.
"
        paramtitle2="Learn New Tools and Techniques"
        param2="Gain expertise in using advanced tools and innovative techniques essential for efficient and professional screen refurbishment in the competitive repair industry.

"
        paramtitle3="Reassembly and Testing"
        param3="Understand the critical steps of reassembly and thorough testing to ensure refurbished screens meet high-quality standards and optimal functionality.
"
        Courseformate1="Video Tutorials"
        Courseformate2="  5 Days Duration"
        Courseformate3="  Experienced Instructors"
        Courseformate4="  Free Toolkit"
        border="#cf2362a7"
      />
      <TraningProfessionalBanner />
      <ProfessionalSecondTab />
      <ProfessionalThreeTab />
      <TraningCourseInstructors />
  <LightCources title=" Tools and Techniques Covered" discripation="The Screen Refurbishment Course offers hands-on learning with essential tools, including screen separators, OCA laminating equipment, vacuum laminators, and laser machines for precise repairs. Master techniques like LOCA UV glue application, ultrasonic cleaning, and polarizer film replacement. Learn to safely remove back glass and create flawless displays, equipping you with professional skills for LCD and OLED screen restoration." />
      {/* <ProfessionalChooseLab /> */}
      {/* this is comment code  */}

      <Boxblock></Boxblock>
      {pathname === "/beginner-phone-repair-course" ||
        pathname === "/advanced-motherboard" ||
        pathname === "/expert-motherboard-repair" ||
        pathname === "/master-motherboard-repair" ||
        pathname === "/professional-phone-screen" ? null : (
        <div className=" pt-3" id="professional-phone-screen-id">
          <MainHeading Heading="Professional Phone Screen Refurbishing Course" />
          <FormCode />
        </div>
      )}
      <FrequentlyAskedQuestions
        heading="Frequently Asked Questions (FAQs)"
        title="If you have any doubts, please refer to our FAQs for detailed answers and clarifications."
        accordionData={accordionData}
      />
      {/* <ProfessionalReviews /> */}
  <BiginnerReviews reviews={reviewsData}  googletitle="Our Google Review"/>

    </>
  );
};

export default ProfessionalScreen;
