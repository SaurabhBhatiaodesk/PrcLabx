"use client";
// import banner from "../../../../public/Images/faqbanner.webp";
import React, { useState, useEffect } from "react";
import axios from "axios";
import { usePathname } from "next/navigation";
import MainTitle from "../../../components/MainTitle/MainTitle";
import MainHeading from "../../../components/ManinHeading/MainHeading";
import Image from "next/image";
import { LuPlus } from "react-icons/lu";
import { GrSubtract } from "react-icons/gr";
import AskusQuestion from "../../../components/AskusQuestion/AskusQuestion";
interface brands {
  brandImage: any;
}

const FaqComponent: React.FC<brands> = ({ brandImage }) => {
  const [faqData, setFaqData] = useState<any[]>([]); // State to hold the FAQ data
  const [loading, setLoading] = useState<boolean>(true); // State to handle loading status
  const [error, setError] = useState<string>(""); // State to handle errors
  const [activeFAQ, setActiveFAQ] = useState<number | null>(null); // State to handle the active (toggled) FAQ
  const pathname = usePathname();
  // Extract the brand and model from the pathname
  const brand = pathname.split("/")[2]; // "apple"
  const model = pathname.split("/")[3]; // "iphone"
  // Fetch brand data from sessionStorage or some other source
  const brandsData = JSON.parse(sessionStorage.getItem("baseData") || "[]");
  // Find the corresponding brand data
  const matchedBrand = brandsData.find((item: any) => item.alias === brand);
  const matchedModel = matchedBrand?.data?.find(
    (item: any) => item.alias === model
  );
  // Fetch FAQ data from API on component mount
  useEffect(() => {
    const api = `${process.env.NEXT_PUBLIC_LARAVEL_API_URL}/api/getFaq/${matchedBrand?.title}/${matchedModel?.id}`;
    axios
      .get(api)
      .then((res) => {
        setFaqData(res.data.faqs); // Store fetched FAQ data in state
        setLoading(false); // Set loading to false once data is fetched
      })
      .catch((err) => {
        setError("Failed to load FAQ data"); // Set error message if fetch fails
        setLoading(false);
      });
  }, []);

  // Toggle FAQ visibility
  const handleToggleFAQ = (id: number) => {
    setActiveFAQ(activeFAQ === id ? null : id); // Toggle FAQ answer visibility
  };
  const accordionData = [
    {
      title: "What types of devices do you repair?",
      content:
        "We repair a wide range of mobile phone devices, including iPhones, Android phones, tablets, and MacBooks. We specialize in logic board repairs, microsoldering, and screen refurbishments.",
    },
    {
      title: "What types of repairs do you specialize in?",
      content:
        "Our expertise includes screen replacement, motherboard repairs, data recovery, and micro soldering. We also handle complex repairs like Face ID issues, and water damage recovery.",
    },
    {
      title: "Do you offer any warranties on your repairs?",
      content:
        "Yes, all repairs come with a 1 Year warranty on parts and workmanship. This ensures that if the same issue reoccurs, we will repair it free of charge, provided no further damage has occurred to the device.",
    },
    {
      title: "What is the warranty on liquid-damaged devices?",
      content:
        "We do not recommend repairing liquid-damaged devices and suggest only data recovery services. If the customer insists on repair, we do not provide any warranty, including for the replaced parts.",
    },
    {
      title: "Will all functions work on my dead device after repair?",
      content:
        "No guarantees can be made. The initial quote covers the visible issue, e.g., turning on a dead device. Since devices have numerous functions, issues like a non-working camera or mic will require a separate quote unless the fault is minor, in which case we’ll address it during the repair. Major issues will need re-quoting.",
    },
    {
      title: "Do you offer repair services for all phone brands?",
      content:
        "Yes, we provide repair services for a wide range of phone brands, including Apple, Samsung, Xiaomi, and more. Our technicians are experienced in handling various devices and models.",
    },
    {
      title: "How long does a typical phone repair take?",
      content:
        "Most phone repairs are completed within a few hours, depending on the complexity of the issue. We strive to return your device in working condition as quickly as possible.",
    },
  ];
  return (
    <>
      {faqData.length > 0 ? (
        <div className="py-5 xl:py-10  bg-[#FEF6FF]">
          <div className="container ">
            <MainHeading
              Heading="Most People Ask us These Questions"
              color="vaar-(prc)"
              svg_stroke="var(--alpha)"
            />
            <MainTitle Title="Please securely package your phone and ship it to us at the designated address. Make sure to include any required documentation for efficient processing." />
            <div className="grid xl:grid-cols-[3fr_2fr] lg:grid-cols-[3fr_2fr] grid-cols-1 gap-4 lg:py-5 py-3">
              <div>
                {faqData.length > 0 && (
                  <div className="max-w-screen-lg mx-auto ">
                    {loading && (
                      <p className="text-center text-lg">Loading...</p>
                    )}
                    {error && (
                      <p className="text-center text-lg text-red-500">
                        {error}
                      </p>
                    )}

                    <div
                      className={`space-y-2 ${
                        faqData.length < 6
                          ? ""
                          : "h-[450px] overflow-y-scroll w-full scrollbar-thin scrollbar-track-yellow-200 scrollbar-thumb-green-700 gauravkumarscrollbar"
                      }`}
                    >
                      {/* FAQ content goes here */}

                      {/* Map through the FAQ data and render each item */}
                      {faqData.map((faq: any) => (
                        <div
                          key={faq.id}
                          className="border-b border-gray-200 dark:border-gray-700"
                        >
                          <div
                            onClick={() => handleToggleFAQ(faq.id)}
                            className="flex w-full items-center justify-between py-3 text-left"
                          >
                            <h3
                              className="text-sm htmleditor"
                              dangerouslySetInnerHTML={{ __html: faq.question }}
                            />
                            {/* Chevron Icon */}
                            <span
                              className={`transition-transform duration-300`}
                            >
                              {activeFAQ === faq.id ? (
                                <GrSubtract color="black" />
                              ) : (
                                <LuPlus color="black" />
                              )}
                            </span>
                          </div>

                          {/* Show/Hide Answer on Toggle */}
                          <div
                            className={`overflow-hidden transition-all duration-300 ease-in-out max-h-0 ${
                              activeFAQ === faq.id ? "max-h-[500px]" : ""
                            }`}
                          >
                            <div className="p-6 bg-white">
                              <div
                                className="font-light text-secondary space-y-4 text-sm sm:text-base md:text-base"
                                dangerouslySetInnerHTML={{ __html: faq.answer }}
                              ></div>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
              <div className="md:max-h-[450px] max-h-[350px]  flex">
                <img
                  className="h-[90%] m-auto object-contain"
                  src={brandImage}
                  alt="mobile phone repair  "
                  // width={500}
                  // height={500}
                />
              </div>
            </div>
          </div>
        </div>
      ) : (
        <>
          <AskusQuestion
            accordionData={accordionData}
            faq_subheading="Please securely package your phone and ship it to us at the designated address. Make sure to include any required documentation for efficient processing."
            faqbg_color="bg-[#FEF6FF]"
            faq="Most People Ask us These Questions"
            brandImage={brandImage}
          />
        </>
      )}
    </>
  );
};

export default FaqComponent;
