"use client";
import React, { useEffect } from "react";
import Image from "next/image";
import AOS from "aos";
import "aos/dist/aos.css";

interface SectionData {
  image: string;
  alt: string;
  title: string;
  hoverBackground: string;
}

interface BoxIconComponentsProps {
  data: SectionData[];
}

const BoxIconComponents: React.FC<BoxIconComponentsProps> = ({ data }) => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <div>
      <div className="container" data-aos="fade-up">
        <div className="lg:pb-8 py-4">
          <div className="grid grid-cols-1 lg:grid-cols-3 xl:grid-cols-4 md:grid-cols-2 justify-center text-center gap-4">
            {data.map((section, index) => (
              <div
                key={index}
                style={{ background: "transparent" }} // Default background
                className="p-[20px] rounded-[15px] border-2 border-[#ede574] shadow-lg shadow-[#ede57456] transition-shadow duration-300 flex flex-col justify-between hover:shadow-[0_0_20px_10px_#ede57456]"
                onMouseEnter={(e) =>
                  (e.currentTarget.style.background = section.hoverBackground)
                }
                onMouseLeave={(e) =>
                  (e.currentTarget.style.background = "transparent")
                }
              >
                <div className="flex justify-center">
                  <Image className="pb-2" src={section.image} alt={section.alt} />
                </div>
                <h3 className="text-[#EDE574] xl:text-xl lg:w-[70%] m-auto">
                  {section.title}
                </h3>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default BoxIconComponents;
