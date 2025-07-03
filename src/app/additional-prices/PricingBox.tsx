"use client";
import MainTitle from "@/components/MainTitle/MainTitle";
import MainHeading from "@/components/ManinHeading/MainHeading";
import React, { useEffect } from "react";
import Image from "next/image";

import Repairs from "../../../public/Images/icons/Vector.svg";

import Transparency from "../../../public/Images/icons/Transparency.svg";
import Recovery from "../../../public/Images/icons/Recovery.svg";
import B2BServices from "../../../public/Images/icons/B2B Services.svg";
import AOS from "aos";
import "aos/dist/aos.css";

const PricingBox: React.FC = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  const sectionData = [
    {
      image: Repairs,
      alt: "Repairs",
      title: `Screen Refurbishment Pricing - ( Buy Back )`,
      description: `For fast screen refurbishment, you have two options: you can choose our service to replace the glass only, or you can sell your old broken screens to us, as we offer competitive buyback prices.`,
      hoverBackground: "linear-gradient(74deg, rgb(86, 193, 193), rgb(0, 0, 0))"
    },
    {
      image: Transparency,
      alt: "Transparency",
      title: "Data Recovery / Dead Device Pricing",
      description: `We offer professional data recovery services to retrieve essential information from non-functional devices. Any devices that are dead or have no power will be classified as data recovery cases.`,
      hoverBackground: "linear-gradient(74deg, rgba(243, 85, 32, 0.753), rgb(0, 0, 0))"
    },
    {
      image: Recovery,
      alt: "Recovery",
      title: "General Repair Pricing",
      description: `Our general repair pricing includes common services such as screen replacements, charging port repairs, and other standard issues typically offered by most repair shops.`,
      hoverBackground: "linear-gradient(74deg, rgba(213, 253, 51, 0.63), rgb(0, 0, 0))"
    },
    {
      image: B2BServices,
      alt: "B2B Services",
      title: "DIY/Technician Damage Pricing (Dead Phone Revival)",
      description: `This service is specifically for devices damaged during DIY or technician attempts.`,
      hoverBackground: "linear-gradient(74deg, rgba(207, 35, 98, 0.655), rgb(0, 0, 0))"
    },
  ];

  return (
    <div>
      <div className="container lg:pb-8 py-4" data-aos="fade-up">
        <MainHeading Heading="PRC Repair Affordable Repair Services" />
        <MainTitle Title="Phone repair center offers Data Recovery, Technician Damage Repair, DIY Damage Repair, Screen Refurbishment, and Spare Part Replacement with affordable pricing in four categories for reliable and quality device repair services." />

        <div className="lg:pb-8 py-4">
          <div className="grid grid-cols-1 lg:grid-cols-3 xl:grid-cols-4 md:grid-cols-2 justify-center text-center gap-4">
            {sectionData.map((section, index) => (
              <div
                key={index}
                style={{ background: "transparent" }} 
                className="p-[20px] rounded-[15px] border-2 border-[#ede574] shadow-lg shadow-[#ede57456] transition-shadow duration-300 flex flex-col justify-between hover:shadow-[0_0_20px_10px_#ede57456]"
                onMouseEnter={(e) => e.currentTarget.style.background = section.hoverBackground}
                onMouseLeave={(e) => e.currentTarget.style.background = "transparent"}
              >
                <div className="flex justify-center">
                  <Image className="pb-2 w-[60px]" src={section.image} alt={section.alt} />
                </div>
                <h3 className="text-tertiary  xl:text-xl lg:w-[70%] m-auto">{section.title}</h3>
                <p>{section.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default PricingBox;
