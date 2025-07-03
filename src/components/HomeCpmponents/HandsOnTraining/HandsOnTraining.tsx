import React from "react";
import Image from "next/image";
import { FaArrowRight } from "react-icons/fa";
import HandsOnTraining1 from "../../../../public/Images/HandsOnTraining1.png";
import HandsOnTraining12 from "../../../../public/Images/HandsOnTraining12.png";
import HandsOnTraining13 from "../../../../public/Images/HandsOnTraining13.png";
import HandsOnTraining14 from "../../../../public/Images/HandsOnTraining14.png";
import HandsOnTraining15 from "../../../../public/Images/HandsOnTraining15.png";
import backyellow from "../../../../public/Images/backyellow.svg";
import Link from "next/link";

const courses = [
  {
    title: "Beginner Phone Repair Course",
    description:
      "Start with essential tools and basic repairs — perfect for beginners to build practical, everyday repair skills.",
    image: HandsOnTraining1,
    linking: "/beginner-phone-repair-course",
  },
  {
    title: "Advanced Motherboard Repair – Level 1",
    description:
      "Learn micro soldering, fault tracing, and chip-level fixes — ideal for advancing beyond basic repairs.",
    image: HandsOnTraining12,
    linking: "/advanced-motherboard",
  },
  {
    title: "Expert Motherboard Repair – Level 2",
    description:
      "Master Face ID, baseband, iCloud unlocks, and NAND repairs — perfect for advanced smartphone repair.",
    image: HandsOnTraining13,
    linking: "/expert-motherboard-repair",
  },
  {
    title: "Master Motherboard Repair – Level 3",
    description:
      "Master dual-layer repairs, big ICs, and data recovery — ideal for experts handling complex chip-level issues.",
    image: HandsOnTraining14,
    linking: "/master-motherboard-repair",
  },
  {
    title: "Phone Screen Refurbishing Course",
    description:
      "Learn LCD/OLED refurbishing disassembly, lamination, and bubble removal for like-new screen quality.",
    image: HandsOnTraining15,
    linking: "/professional-phone-screen",
  },
];

function HandsOnTraining() {
  return (
    <section
      className="bg-no-repeat bg-cover lg:py-8 py-4"
      style={{ backgroundImage: `url(${backyellow.src})` }}
    >
      <div className="container mx-auto">
        <h2 className=" xl:w-3/5 w-full m-auto  text-center text-prc mb-4">
          Become a Mobile Phone Repair   Pro — Start Your Hands-On&nbsp;
          <span className="relative inline-block">
            Training
            <svg
              className="absolute left-0 bottom-0 w-full h-2 z-[2]"
              width="100%"
              height="20"
              viewBox="0 0 100 30"
              xmlns="http://www.w3.org/2000/svg"
              preserveAspectRatio="none"
            >
              <path
                d="M0 15 Q50 0 100 15"
                fill="none"
                stroke="#FFA726" // orange-like color
                strokeWidth="20"
              />
            </svg>
          </span>
          &nbsp;Today!
        </h2>

        <div className="flex flex-wrap justify-center gap-6">
          {courses.map((course, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-md p-4 border border-[#e4e4e7] w-full xl:w-[32%] lg:w-[48%] md:w-[48%] flex lg:flex-row flex-col gap-5 relative"
            >
              <Link
                href={course.linking}
                className=" w-full flex lg:flex-row flex-col gap-5 relative"
              >
                <div className="relative w-full h-[200px]  rounded-md overflow-hidden">
                  <Image
                    src={course.image}
                    alt={course.title}
                    className="object-cover rounded-md"
                    fill
                  />
                </div>
                <div>
                  <h3 className="font-semibold text-xl mb-2">{course.title}</h3>
                  <p className=" text-base mb-4 flex-grow">
                    {course.description}
                  </p>
                  <button className="rounded-[10px_0px] bg-teal-900 text-white flex items-center justify-center absolute right-[-16px] p-3 bottom-[-17px] hover:scale-105">
                    <FaArrowRight size={18} />
                  </button>
                </div>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default HandsOnTraining;
