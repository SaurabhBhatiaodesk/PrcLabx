
import React, { FC } from "react";
import Image from "next/image";
import course2 from "../../../../public/Images/course2.png";
import MainHeading from "@/components/ManinHeading/MainHeading";
import MainButton from "@/components/MainButton/MainButton";
import blackcheck from "../../../../public/Images/Vector.png"
interface Feature {
  label: string;
  detail: string;
  accentClass: string;
  iconcolor?: string
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
        accentClass: "text-[var(--prc)]",
        iconcolor: "#00303E"
      },
      {
        label: "Screen Replacement Techniques:",
        detail:
          "Screen replacement requires careful handling, precise alignment, and using quality parts for flawless display functionality.",
        accentClass: "text-[var(--prc)]",
        iconcolor: "#00303E"
      },
      {
        label: "Camera and Flashlight Replacements:",
        detail:
          "Replacing the camera and flashlight involves disassembling components, securing new parts, and ensuring full functionality.",
        accentClass: "text-[var(--prc)]",
        iconcolor: "#00303E"
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
        iconcolor: "#FF8A80"
      },
      {
        label: "Schematics and Diagnostics:",
        detail:
          "Understand how to read board schematics, trace faults, and diagnose common issues.",
        accentClass: "text-[#FF8A80]",
        iconcolor: "#FF8A80"
      },
      {
        label: "Repair Techniques:",
        detail:
          "Tackle problems like no image, no backlight, underfilled chips, and create jumpers for board repairs.",
        accentClass: "text-[#FF8A80]",
        iconcolor: "#FF8A80"
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
        accentClass: "text-[#00ADEF]",
        iconcolor: "#00ADEF"
      },
      {
        label: "Removing Part Warnings:",
        detail:
          "Learn how to remove non-genuine part warnings (battery, screen, and camera).",
        accentClass: "text-[#00ADEF]",
        iconcolor: "#00ADEF"
      },
      {
        label: "Baseband and Chip Repairs:",
        detail: `Fix "no service" issues and work with large ICs and baseband chips.`,
        accentClass: "text-[#00ADEF]",
        iconcolor: "#00ADEF"
      },
      {
        label: "NAND Programming and iCloud Unlocking:",
        detail: "Master NAND reprogramming and unlock iCloud on iPads.",
        accentClass: "text-[#00ADEF]",
        iconcolor: "#00ADEF"
      },
      {
        label: "Reballing and Dual-Board Repairs:",
        detail:
          "Handle complex reballing techniques and fix broken connections on dual-layer boards.",
        accentClass: "text-[#00ADEF]",
        iconcolor: "#00ADEF"
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
    featuresHtml: `<ul class=\"space-y-2 pb-5\"><li><strong class=\"text-[#00BC9D]\">Screen Disassembly and Inspection:</strong>&nbsp;Learn how to safely disassemble mobile devices and inspect LCD and OLED screens for damage, determining whether a screen is suitable for refurbishing or replacement.</li></ul>`,
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
      className={`p-2 lg:p-2 bg-primary text-secondary rounded-md ${course.textOrder ?? ""
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

      <div className="flex gap-2 flex-wrap text-[#EF0000] mb-3">
        <p className="font-semibold m-0 text-[#EF0000]">Duration: {course.duration}</p>
        <p className="font-semibold m-0 text-[#EF0000]">|</p>
        <p className="font-semibold m-0 text-[#EF0000]">Price: {course.price}</p>
      </div>

      {course.description && (
        <p className="text-base mb-3 text-black">{course.description}</p>
      )}

      {course.features && (
        <ul className="space-y-2 pb-5">
          {course.features.map((f, i) => (
            <li key={i} className="flex gap-2">
              <div className="w-[10%] flex items-start justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" width="27" height="29" viewBox="0 0 27 29" fill="none">
                  <path d="M26.2929 17.2867C25.7229 16.4 25.1529 15.545 24.5829 14.6584C24.4562 14.4684 24.4562 14.3417 24.5829 14.1517C25.1529 13.2967 25.6912 12.4417 26.2613 11.5867C26.9262 10.5734 26.5779 9.59169 25.4379 9.18003C24.4879 8.83169 23.5379 8.45169 22.5879 8.10336C22.3979 8.04003 22.3029 7.91336 22.3029 7.69169C22.2713 6.64669 22.2079 5.60169 22.1446 4.58836C22.0813 3.48003 21.2263 2.84669 20.1496 3.13169C19.1363 3.38502 18.1229 3.67002 17.1413 3.95503C16.9196 4.01836 16.7929 3.95503 16.6346 3.79669C16.0013 2.97336 15.3362 2.18169 14.7029 1.39002C14.0063 0.503356 12.9296 0.503356 12.2013 1.39002C11.5679 2.18169 10.9029 2.97336 10.3013 3.76502C10.1429 3.98669 9.98458 4.01836 9.73125 3.95502C8.74958 3.67003 7.76792 3.41669 7.07125 3.22669C5.70959 2.91002 4.88626 3.44836 4.82292 4.58836C4.75959 5.63336 4.69625 6.67836 4.66459 7.75502C4.66459 7.97669 4.56958 8.07169 4.37959 8.16669C3.39792 8.54669 2.41625 8.92669 1.43459 9.30669C0.421254 9.71836 0.104588 10.7 0.706252 11.6184C1.27625 12.505 1.84625 13.36 2.41625 14.2467C2.54292 14.4367 2.54292 14.5634 2.41625 14.785C1.81459 15.6717 1.24458 16.5584 0.674584 17.4767C0.136252 18.3317 0.484582 19.345 1.43458 19.725C2.41625 20.105 3.42958 20.485 4.41125 20.865C4.63291 20.9284 4.69624 21.055 4.69624 21.2767C4.72791 22.29 4.85458 23.2717 4.85458 24.285C4.85458 25.2984 5.74124 26.2167 6.97624 25.8367C7.95791 25.52 8.93957 25.2984 9.92124 25.0134C10.1112 24.95 10.2379 24.9817 10.3646 25.1717C11.0296 25.995 11.6629 26.7867 12.3279 27.61C13.0562 28.4967 14.1012 28.4967 14.7979 27.61C15.4629 26.7867 16.0962 25.995 16.7612 25.1717C16.8879 25.0134 16.9829 24.95 17.2046 25.0134C18.2179 25.2984 19.2312 25.5517 20.2446 25.8367C21.2896 26.1217 22.1762 25.4884 22.2079 24.4117C22.2712 23.3667 22.3346 22.3217 22.3662 21.245C22.3662 20.9917 22.4929 20.8967 22.6829 20.8334C23.6329 20.485 24.6146 20.105 25.5646 19.725C26.5779 19.2184 26.8946 18.205 26.2929 17.2867ZM18.7246 12.0934L12.3913 18.4267C12.2329 18.585 12.0113 18.7117 11.7896 18.7434C11.7263 18.7434 11.6313 18.775 11.5679 18.775C11.2829 18.775 10.9663 18.6484 10.7446 18.4267L8.14792 15.83C7.70459 15.3867 7.70459 14.6584 8.14792 14.215C8.59125 13.7717 9.31959 13.7717 9.76292 14.215L11.5363 15.9884L17.0463 10.4784C17.4896 10.035 18.2179 10.035 18.6613 10.4784C19.1679 10.9217 19.1679 11.65 18.7246 12.0934Z" fill={f.iconcolor} />
                </svg>
              </div>
              <div>
                <strong className={f.accentClass}>{f.label}</strong>&nbsp;
                {f.detail}
              </div>
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
        color="bg-prc"
      />
      {course.note && (
        <div className="my-4 px-[20px] py-[6px] border-[var(--prc)] border-[2px] rounded-[15px] bg-[#B2F5EA] shadow-[5px_4px_28px_1px_#B2F5EA] animate-pulse transition-all duration-300 text-[18px] tracking-[1.5px]">
          {course.note}
        </div>
      )}
    </div>

    <div
      className={`relative w-full h-[300px] md:h-[550px] ${course.imageOrder ?? ""
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
