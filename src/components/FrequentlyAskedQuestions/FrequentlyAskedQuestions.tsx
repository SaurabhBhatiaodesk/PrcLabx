"use client";

import MainHeading from "../ManinHeading/MainHeading";
import MainTitle from "../MainTitle/MainTitle";
import React, { useState } from "react";
import { LuPlus } from "react-icons/lu";
import { GrSubtract } from "react-icons/gr";
import faqimages from "../../../public/Images/Home/faqimages.png";
import Image from "next/image";

interface AccordionItem {
  title: string;
  content: string;
}

interface FrequentlyAskedQuestionsProps {
  heading: string;
  title: string;
  accordionData: AccordionItem[];
}

const FrequentlyAskedQuestions: React.FC<FrequentlyAskedQuestionsProps> = ({
  heading,
  title,
  accordionData,
}) => {
  const [active, setActive] = useState<number | null>(null);

  const handleToggle = (index: number) => {
    if (index === active) {
      setActive(null);
    } else {
      setActive(index);
    }
  };

  return (
    <>
    <div>
      <section className="py-5 xl:py-10 bg-[url('/Images/Home/faq.svg')]  bg-no-repeat bg-cover faq-main-title">
        <div className="container">
          <MainHeading Heading={heading} />
          <MainTitle Title={title} />
          <div className="grid xl:grid-cols-[3fr_2fr] lg:grid-cols-[3fr_2fr] grid-cols-1 gap-4 lg:py-[8px] py-[5px]">
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
                    {active === index && (
                      <div className="py-4 pt-0">
                        <p className="text-[#0B0B0B]">{item.content}</p>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>

            <div className="seconf-grid">
                <div className="flex justify-center">
                  <Image
                    className="lg:h-auto h-[300px] object-contain"
                    src={faqimages}
                    alt=" labx repair "
                  />
                </div>
              </div>
          </div>
        </div>
      </section>
    </div>
    </>
  );
};

export default FrequentlyAskedQuestions;
