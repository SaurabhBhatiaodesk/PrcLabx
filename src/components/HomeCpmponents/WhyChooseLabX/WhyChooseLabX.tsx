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
      description: `LabX Repair offers tailored solutions for businesses, including bulk refurbishments and wholesale repairs, ensuring your operations run smoothly and efficiently.`,
      hoverBackground: "linear-gradient(74deg, rgba(207, 35, 98, 0.655), rgb(0, 0, 0))"
    },
  ];

  return (
    <div>
      <div className="container" data-aos="fade-up">
        <MainHeading Heading="We Do, What Others Don't" />
        <MainTitle Title="At LabX, we tackle complex mobile phone repair challenges that others can’t, delivering reliable solutions and unmatched expertise." />

        <div className="lg:pb-8 py-4">
          <div className="grid grid-cols-1 lg:grid-cols-3 xl:grid-cols-4 md:grid-cols-2 justify-center text-center gap-4">
            {sectionData.map((section, index) => (
              <div
                key={index}
                style={{ background: "transparent" }} // Default background
                className="p-[20px] rounded-[15px] border-2 border-[#ede574] shadow-lg shadow-[#ede57456] transition-shadow duration-300 flex flex-col justify-between hover:shadow-[0_0_20px_10px_#ede57456]"
                onMouseEnter={(e) => e.currentTarget.style.background = section.hoverBackground}
                onMouseLeave={(e) => e.currentTarget.style.background = "transparent"}
              >
                <div className="flex justify-center">
                  <Image className="pb-2 w-[60px]" src={section.image} alt={section.alt} />
                </div>
                <h3 className="text-[#EDE574] xl:text-xl lg:w-[70%] m-auto">{section.title}</h3>
                <p>{section.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhyChooseLabX;
