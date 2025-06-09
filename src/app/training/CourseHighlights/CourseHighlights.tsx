import React, { FC } from "react";
import Image from "next/image";
import course2 from "../../../../public/Images/course2.png";
import MainHeading from "@/components/ManinHeading/MainHeading";
import MainButton from "@/components/MainButton/MainButton";

interface Feature {
  label: string;
  detail: string;
  accentClass: string;
}

interface Course {
  id: number;
  title: string;
  duration: string;
  price: string;
  description?: string;
  features?: Feature[];
  subTitle?: string;
  featuresHtml?: string;
  note?: string;
  accentColor: string;
  svgStroke: string;
  imageBorder: string;
  link: string;
  buttonType?: "native" | "main";
  textOrder?: string;
  imageOrder?: string;
}

const courses: Course[] = [
  {
    id: 0,
    title: "Beginner Phone Repair Course",
    duration: "5 Days",
    price: "$1249 (Includes a free toolkit for each student)",
    description: `Learn the fundamentals of mobile phone repair in our comprehensive beginner course, designed to give you hands-on experience with a wide range of repairs.`,
    features: [
      {
        label: "Introduction to Tools and Parts:",
        detail:
          "Tools and parts are essential for mobile repairs, ensuring precision, efficiency, and high-quality results.",
        accentClass: "text-[#a8a82d]",
      },
      {
        label: "Screen Replacement Techniques:",
        detail:
          "Screen replacement requires careful handling, precise alignment, and using quality parts for flawless display functionality.",
        accentClass: "text-[#a8a82d]",
      },
      {
        label: "Camera and Flashlight Replacements:",
        detail:
          "Replacing the camera and flashlight involves disassembling components, securing new parts, and ensuring full functionality.",
        accentClass: "text-[#a8a82d]",
      },
    ],
    note: "This phone repair course does not include micro soldering or motherboard-level repairs.",
    accentColor: "#a8a82d",
    svgStroke: "var(--prc)",
    imageBorder: "#EDE574",
    link: "/beginner-phone-repair-course",
    buttonType: "native",
  },
  {
    id: 1,
    title: "Advanced Motherboard Repair – Micro Soldering (Level 1)",
    duration: "1 Week",
    price: "$2200",
    description: `Our Level 1 course repairing mobile phones offers hands-on training in essential micro soldering techniques for mobile device motherboard repairs. Ideal for technicians ready to expand their skills, this course covers:`,
    features: [
      {
        label: "Component Familiarity:",
        detail:
          "Learn to work with essential components and advanced tools, including reballing techniques.",
        accentClass: "text-[#FF8A80]",
      },
      {
        label: "Schematics and Diagnostics:",
        detail:
          "Understand how to read board schematics, trace faults, and diagnose common issues.",
        accentClass: "text-[#FF8A80]",
      },
      {
        label: "Repair Techniques:",
        detail:
          "Tackle problems like no image, no backlight, underfilled chips, and create jumpers for board repairs.",
        accentClass: "text-[#FF8A80]",
      },
    ],
    note: `By the end of this repair mobile phone course, you'll have the confidence to handle a variety of motherboard-level repairs with precision.`,
    accentColor: "#FF8A80",
    svgStroke: "#FF8A80",
    imageBorder: "#FF8A80",
    link: "/advanced-motherboard",
    buttonType: "main",
    textOrder: "lg:order-2",
    imageOrder: "lg:order-1",
  },
  {
    id: 2,
    title: "Expert Motherboard Repair – Micro Soldering (Level 2)",
    duration: "1 Week",
    price: "$2800",
    description: `The Level 2 cell phone repair course builds on foundational micro soldering techniques and focuses on advanced repairs for modern devices. This phone repairing course covers:`,
    features: [
      {
        label: "Face ID and Sensor Repairs:",
        detail:
          "Repair Face ID components, dot projectors, and infrared cameras.",
        accentClass: "text-[#FF9966]",
      },
      {
        label: "Removing Part Warnings:",
        detail:
          "Learn how to remove non-genuine part warnings (battery, screen, and camera).",
        accentClass: "text-[#FF9966]",
      },
      {
        label: "Baseband and Chip Repairs:",
        detail: `Fix "no service" issues and work with large ICs and baseband chips.`,
        accentClass: "text-[#FF9966]",
      },
      {
        label: "NAND Programming and iCloud Unlocking:",
        detail: "Master NAND reprogramming and unlock iCloud on iPads.",
        accentClass: "text-[#FF9966]",
      },
      {
        label: "Reballing and Dual-Board Repairs:",
        detail:
          "Handle complex reballing techniques and fix broken connections on dual-layer boards.",
        accentClass: "text-[#FF9966]",
      },
    ],
    note: "This advanced phone fixing course equips you with the expertise to tackle complex motherboard repairs, giving you the edge in handling the most challenging devices.",
    accentColor: "#FF9966",
    svgStroke: "#FF9966",
    imageBorder: "#FF9966",
    link: "/expert-motherboard-repair",
    buttonType: "main",
  },
  {
    id: 3,
    title: "Master Motherboard Repair – Micro Soldering (Level 3)",
    duration: "5 Days",
    price: "$5500",
    description: `Our Level 3 Master Course is designed for experienced technicians seeking to master the most advanced techniques in mobile motherboard repair. This intensive phone repairing course covers complex repairs and data recovery, ensuring you can handle the most challenging issues in modern devices.`,
    subTitle: "What You’ll Learn",
    featuresHtml: `<ul class=\"space-y-2 pb-5\"><li><strong class=\"text-[#799F0C]\">Advanced Data Recovery:</strong>&nbsp;Learn specialized techniques for recovering data from severely damaged or non-functional devices, including water-damaged phones and corrupted storage chips. This module will provide you with expertise in extracting critical data in difficult recovery cases.</li></ul>`,
    note: `This Level 3 course is designed to take your repair expertise to the highest level, enabling you to handle the most advanced repairs and data recovery tasks. By the end of this repair phone course, you’ll be prepared to tackle any challenge, from CPU reballing to restoring devices with critical board damage.`,
    accentColor: "#799F0C",
    svgStroke: "#799F0C",
    imageBorder: "#799F0C",
    link: "/master-motherboard-repair",
    buttonType: "main",
    textOrder: "lg:order-2",
    imageOrder: "lg:order-1",
  },
  {
    id: 4,
    title: "Professional Phone Screen Refurbishing Course",
    duration: "5 Days",
    price: "$5500",
    description: `Our Professional Phone Screen Refurbishing Course is designed to teach technicians how to refurbish damaged or broken phone screens using industry-standard tools and techniques. This hands-on phone fixing course covers the entire refurbishing process, from screen disassembly to reassembly, ensuring high-quality results for both LCD and OLED screens.`,
    subTitle: "What You’ll Learn",
    featuresHtml: `<ul class=\"space-y-2 pb-5\"><li><strong class=\"text-[#cf2362a7]\">Screen Disassembly and Inspection:</strong>&nbsp;Learn how to safely disassemble mobile devices and inspect LCD and OLED screens for damage, determining whether a screen is suitable for refurbishing or replacement.</li></ul>`,
    note: `This course provides a complete understanding of the professional screen refurbishing process, enabling you to offer high-quality refurbishing services for both LCD and OLED screens on iPhones, Samsung devices, and other popular smartphones.`,
    accentColor: "#cf2362a7",
    svgStroke: "#cf2362a7",
    imageBorder: "#cf2362a7",
    link: "/professional-phone-screen",
    buttonType: "main",
    textOrder: "order-2 lg:order-1",
    imageOrder: "order-2 lg:order-2",
  },
];

const CourseCard: FC<{ course: Course }> = ({ course }) => (
  <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 lg:py-6 py-3 items-center">
    <div
      className={`p-2 lg:p-2 bg-primary text-secondary rounded-md ${
        course.textOrder ?? ""
      }`}
    >
      <h2 className="text-3xl font-bold mb-4 w-fit text-secondary">
        {course.title}
        <svg
          className="relative top-full left-0"
          width="100%"
          height="20"
          viewBox="0 0 100 30"
          preserveAspectRatio="none"
        >
          <path
            d="M0 10 Q50 20 100 10"
            fill="none"
            stroke={course.svgStroke}
            strokeWidth={6}
          />
        </svg>
      </h2>

      <div className="flex gap-2 flex-wrap text-yellow-400 mb-3">
        <p className="font-semibold m-0 text-black">Duration: {course.duration}</p>
        <p className="font-semibold m-0 text-black">|</p>
        <p className="font-semibold m-0 text-black">Price: {course.price}</p>
      </div>

      {course.description && (
        <p className="text-base mb-3 text-black">{course.description}</p>
      )}

      {course.features && (
        <ul className="space-y-2 pb-5">
          {course.features.map((f, i) => (
            <li key={i}>
              <strong className={f.accentClass}>{f.label}</strong>&nbsp;
              {f.detail}
            </li>
          ))}
        </ul>
      )}

      {course.subTitle && <h3 className="mb-2">{course.subTitle}</h3>}
      {course.featuresHtml && (
        <div
          className=""
          dangerouslySetInnerHTML={{ __html: course.featuresHtml }}
        />
      )}
        <MainButton
          MainButton="Learn More"
          link={course.link}
          color={course.accentColor}
        />
      {course.note && (
        <div className="my-4 px-[20px] py-[6px] border-[var(--prc)] border-[2px] rounded-[15px] bg-[#B2F5EA] shadow-[5px_4px_28px_1px_#B2F5EA] animate-pulse transition-all duration-300 text-[18px] tracking-[1.5px]">
          {course.note}
        </div>
      )}
    </div>

    <div
      className={`relative w-full h-[300px] md:h-[550px] ${
        course.imageOrder ?? ""
      }`}
    >
      <Image
        src={course2}
        alt={course.title}
        fill
        className={`object-[4%_10%] object-cover rounded-[30px] border-2 border-[${course.imageBorder}]`}
      />
    </div>
  </div>
);

const CourseHighlights: FC = () => (
  <section className="py-4 lg:py-[20px]">
    <div className="container">
      <MainHeading Heading="Our Mobile Phone Repair Courses" />
      {courses.map((c) => (
        <CourseCard key={c.id} course={c} />
      ))}
    </div>
  </section>
);

export default CourseHighlights;
