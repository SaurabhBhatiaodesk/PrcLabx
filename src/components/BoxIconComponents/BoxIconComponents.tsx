"use client";
import React, { useEffect } from "react";
import Image from "next/image";
import AOS from "aos";
import "aos/dist/aos.css";

interface SectionData {
  image: string;
  alt: string;
  title: string;

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
                className="border-[1.5px] rounded-md bg-prc lg:p-5 p-2 flex justify-center items-center hover:scale-105 transform translate-x-1 transition-all duration-300 ease-in-out"

              >
                <div className="flex justify-center">
                  <Image className="pb-2 w-1/2" src={section.image} alt={section.alt} />
                </div>
                <p className=" lg:text-base text-sm lg:w-[70%] m-auto text-primary">
                  {section.title}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default BoxIconComponents;
