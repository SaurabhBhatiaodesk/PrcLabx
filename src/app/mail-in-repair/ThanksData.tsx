"use client";
import React, { useEffect } from "react";
import Link from "next/link";
import MainButton from "@/components/MainButton/MainButton";
import MainHeading from "@/components/ManinHeading/MainHeading";
import { IoIosArrowRoundForward } from "react-icons/io";

interface Step {
  title: string;
  content: string;
  subtitle?: string;
  subcontent?: string;
  link?: string;
  buttonad?: string;
}

interface ThanksDataProps {
  steps: Step[];
  HeadingData: string; // Add HeadingData to the interface
}

const ThanksData: React.FC<ThanksDataProps> = ({ steps, HeadingData }) => { // Destructure HeadingData
  useEffect(() => {
    console.log("Steps loaded:", steps);
  }, [steps]);

  return (
    <div className="">
      <div className="container py-10">
        <MainHeading Heading={HeadingData} color="var(--prc)" svg_stroke="var(--alpha)"/>
        <div className="grid grid-cols-1 xl:grid-cols-3 lg:grid-cols-2 gap-5 my-4">
          {steps.map((step, index) => (
            <div
              key={index}
              className="p-4  rounded-md shadow-lg text-white transition-all duration-300 border-[1px] border-[#5b5b5b99]  h-full"
              style={{ cursor: "pointer" }}
            >
              <h3 className="text-xl text-prc mb-2">{step.title}</h3>
              <p className="text-sm text-secondary">{step.content}</p>
              {step.subtitle && (
                <p className="text-xl text-[#EDE574] mb-2">{step.subtitle}</p>
              )}
              {step.subcontent && <p className="text-sm text-secondary">{step.subcontent}</p>}
              {step.link && step.buttonad && (
                <Link href={step.link} target="_blank">
                  {/* <MainButton MainButton={step.buttonad} /> */}

                  <button className=" flex justify-start items-center text-prc text-[15px]" >{step.buttonad}
  <IoIosArrowRoundForward  fontSize={25}/>
</button> 
                </Link>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ThanksData;
