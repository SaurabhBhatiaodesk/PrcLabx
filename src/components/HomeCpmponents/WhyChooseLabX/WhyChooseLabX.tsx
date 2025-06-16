"use client";
import MainTitle from "@/components/MainTitle/MainTitle";
import MainHeading from "@/components/ManinHeading/MainHeading";
import React, { useEffect } from "react";
import Image from "next/image";
import Repairs from "../../../../public/Images/icons/Vector.svg";
import Transparency from "../../../../public/Images/icons/Transparency.svg";
import Recovery from "../../../../public/Images/icons/Recovery.svg";
import B2BServices from "../../../../public/Images/icons/B2B Services.svg";
import AOS from "aos";
import "aos/dist/aos.css";

const WhyChooseLabX: React.FC = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  const sectionData = [
    {
      image: Repairs,
      alt: "Repairs",
      title: `Expertise in Complex Repairs`,
      description: `We excel in fixing challenging issues that others can't handle, including intricate microsoldering and motherboard repair services. When others can't succeed, we find a solution.`,
      hoverBackground: "linear-gradient(74deg, rgb(86, 193, 193), rgb(0, 0, 0))"
    },
    {
      image: Transparency,
      alt: "Transparency",
      title: "Complete Transparency in Our Process",
      description: `Our grading and repair process is 100% transparent. You'll receive photos and detailed reports for any repair decisions so you always know what's happening.`,
      hoverBackground: "linear-gradient(74deg, rgba(243, 85, 32, 0.753), rgb(0, 0, 0))"
    },
    {
      image: Recovery,
      alt: "Recovery",
      title: "Specialized Data Recovery",
      description: `Even if your device is non-functional, we employ advanced techniques to recover your important data, providing a valuable opportunity to retrieve lost files.`,
      hoverBackground: "linear-gradient(74deg, rgba(213, 253, 51, 0.63), rgb(0, 0, 0))"
    },
    {
      image: B2BServices,
      alt: "B2B Services",
      title: "Customized B2B Services",
      description: `PRC Repair offers tailored solutions for businesses, including bulk refurbishments and wholesale repairs, ensuring your operations run smoothly and efficiently.`,
      hoverBackground: "linear-gradient(74deg, rgba(207, 35, 98, 0.655), rgb(0, 0, 0))"
    },
  ];

  return (
    <div className="bg-primary">
      <div className="container lg:py-11 py-7" data-aos="fade-up">
        {/* <MainHeading Heading="Why Choose PRC Repair?" color="var(--secondary)" svg_stroke="#FBAC05"/> */}
        <h2 className=" text-black text-center relative mb-2">
          Why Choose&nbsp;
          <span className="relative inline-block text-[#002E3E]">
            PRC Repair?
            <svg
              className="absolute left-0 bottom-0 w-full h-[0.75em] rotate-[180deg] top-6 z-[-1]"
              viewBox="0 0 100 30"
              xmlns="http://www.w3.org/2000/svg"
              preserveAspectRatio="none"
            >
              <path
                d="M0 15 Q50 0 100 15"
                fill="none"
                stroke="#FBAC05"
                strokeWidth="6"
              />
            </svg>
          </span>
        </h2>

        <MainTitle Title="Please securely package your phone and ship it to us at the designated address. Make sure to include any required documentation for efficient processing." color="var(--secondary)" />

        <div className="py-4">
          <div className="grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 md:grid-cols-2 justify-center text-center md:gap-4 gap-2">
            {sectionData.map((section, index) => (
              <div
                key={index}
                style={{ background: "transparent" }} // Default background
                className="xl:p-[15px]  p-2 rounded-[15px] border-2 border-[var(--prc)] shadow-lg shadow-[#00303e73] transition-shadow duration-300 flex flex-col justify-center gap-1 hover:shadow-[0_0_20px_10px_#00303e73] group"
                onMouseEnter={(e) => e.currentTarget.style.background = section.hoverBackground}
                onMouseLeave={(e) => e.currentTarget.style.background = "transparent"}
              >
                <div className="flex justify-center">
                  <Image className="pb-2 w-[60px]" src={section.image} alt={section.alt} />
                </div>
                <h3 className="text-prc group-hover:text-primary xl:text-[18px] lg:w-[80%] m-auto my-0 py-1 text-[15px] leading-6">{section.title}</h3>
                <p className="text-secondary group-hover:text-primary 2xl:text-lg text-sm">{section.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhyChooseLabX;
