"use client";

import React, { useState } from "react";
import { LuPlus } from "react-icons/lu";
import { GrSubtract } from "react-icons/gr";
import Image from "next/image";
import ps5game from "../../../public/Images/ps5game.webp";
import MainHeading from "../ManinHeading/MainHeading";

import { usePathname } from "next/navigation";
interface AccordionItem {
  title?: string;
  content?: string;

}

interface AskusQuestionProps {
  accordionData: AccordionItem[];
  faq?:string;
}
export default function AskusQuestion({ accordionData,faq }: AskusQuestionProps) {
  const [active, setActive] = useState<number | null>(null);

  const pathnav = usePathname();

  // Sample data for the accordion content


  const handleToggle = (index: number) => {
    setActive(active === index ? null : index);
  };

  return (
    <section className="py-5 xl:py-10 bg-[url('/Images/Home/faq.svg')] bg-no-repeat bg-cover">
      <div className="container">
        <MainHeading Heading={faq} color="black" />
        <div className="grid xl:grid-cols-[3fr_2fr] lg:grid-cols-[3fr_2fr] grid-cols-1 gap-4 lg:py-5 py-3">
          <div>
            <div className="flex flex-col xl:space-y-2">
              {accordionData.map((item, index) => (
                <div
                  key={index}
                  className="border-b border-gray-200 dark:border-gray-700"
                >
                  <button
                    className="flex w-full items-center justify-between py-4 text-left"
                    onClick={() => handleToggle(index)}
                  >
                    <h3 className="text-black xl:text-[24px] text-[18px] font-[500] xl:leading-[2rem] leading-[24px]">
                      {item.title}
                    </h3>
                    {active === index ? (
                      <GrSubtract color="black" />
                    ) : (
                      <LuPlus color="black" />
                    )}
                  </button>
                  <div
                    className={`overflow-hidden transition-all duration-400 ease-in-out`}
                    style={{
                      maxHeight: active === index ? "500px" : "0px",
                    }}
                  >
                    <p className="py-4 pt-0 text-[#0B0B0B]">{item.content}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="seconf-grid">
            <div className="flex justify-center">
              {pathnav === "/ps5-repair" ? (
                <Image
                  className="lg:h-auto h-[300px] object-contain"
                  src={ps5game}
                  alt="Mobile repair"
                  width={500}
                  height={500}
                />
              ) : (
                <Image
                  className="lg:h-auto h-[300px] object-contain"
                  src="https://labxbackend.s3.us-east-2.amazonaws.com/faqimages+1+(1).webp"
                  alt="Mobile repair"
                  width={500}
                  height={500}
                />
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
