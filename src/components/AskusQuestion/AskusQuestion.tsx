"use client";

import React, { useEffect, useState } from "react";
import { LuPlus } from "react-icons/lu";
import { GrSubtract } from "react-icons/gr";
import Image from "next/image";
import ps5game from "../../../public/Images/ps5game.webp";
import MainHeading from "../ManinHeading/MainHeading";
import { usePathname } from "next/navigation";
import MainTitle from "../MainTitle/MainTitle";
import banner from "../../../public/Images/faqbanner.webp";
interface AccordionItem {
  title?: string;
  content?: string;
}

interface AskusQuestionProps {
  accordionData: AccordionItem[];
  faq?: string;
  faqbg_color?: string;
  faq_subheading?: string;
  brandImage?:any;
}
export default function AskusQuestion({
  accordionData,
  faq,
  faqbg_color,
  faq_subheading,
  brandImage
}: AskusQuestionProps) {
  const [active, setActive] = useState<number | null>(null);
  const [loading, setLoading] = useState(false);
  const pathnav = usePathname();

  // Sample data for the accordion content

  const handleToggle = (index: number) => {
    setActive(active === index ? null : index);
  };

  useEffect(() => {
    setTimeout(() => {
      setLoading(true);
    }, 2000);
  }, []);
  return (
    <>
      {loading && (
        <section
          className={`py-5 xl:py-10 bg-no-repeat bg-cover border-t-1 border-prc rounded-t-lg  ${faqbg_color}`}
        >
          <div className="container">
            <MainHeading
              Heading={faq}
              color="var(--prc)"
              svg_stroke="var(--alpha)"
            />
            <MainTitle Title={`${faq_subheading}`} />
            <div className="grid xl:grid-cols-[3fr_2fr] lg:grid-cols-[3fr_2fr] grid-cols-1 gap-4 lg:py-5 py-3">
              <div>
                <div className="flex flex-col xl:space-y-2">
                  {accordionData.map((item, index) => (
                    <div
                      key={index}
                      className="border-b border-gray-200 dark:border-gray-700"
                    >
                      <button
                        className="flex w-full items-center justify-between py-3 text-left"
                        onClick={() => handleToggle(index)}
                      >
                        <h3 className="text-black xl:text-[18px] text-[18px] font-[500] xl:leading-[2rem] leading-[24px]">
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
    <p
         className="text-secondary group-hover:text-white 2xl:text-lg text-sm"
         dangerouslySetInnerHTML={{ __html: item.content}}
       ></p>
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
                      alt="mobile phone repair  "
                      width={500}
                      height={500}
                    />
                  ) : (
                    <div className="md:max-h-[450px] max-h-[350px]  flex">
                    <img
                      className="h-[90%] m-auto object-contain"
                      src={brandImage ? brandImage : banner}
                      alt="mobile phone repair  "
                      // width={500}
                      // height={500}
                    />
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </section>
      )}
    </>
  );
}
