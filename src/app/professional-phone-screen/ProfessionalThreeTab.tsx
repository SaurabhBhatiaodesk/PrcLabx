"use client";
import React, { useState } from "react";
import Image from "next/image";
import tabimage from "../../../public/Images/tabtraning.png";
// import screenreplace from "../../../../public/Images/Home/hammer.svg";
import screenreplace from "../../../public/Images/Home/hammer.svg";
import traning from "../../../public/Images/Home/Training.svg";
// import MailinRepair from "../../../../public/Images/Home/Mail in Repair.svg";
import MailinRepair from "../../../public/Images/Home/Mail in Repair.svg";
import repairsoloutaion from "../../../public/Images/Home/repairsoloutaion.svg";
import B2BRepair from "../../../../public/Images/Home/B2B Repair.svg";
import datarecovery from "../../../public/Images/Home/datarecovery.svg";

import Link from "next/link";
import { usePathname } from "next/navigation";

interface Tab {
  id: number;
  label: string;
  content: string;
  contentf2?: string;
  contentf3?: string;
  contentf4?: string;
  contentf5?: string;
  contentf6?: string;
  button?: string;
  link?: string;
  image?: any;
  contentf2title?: string;
  contentf3title?: string;
  contentf4title?: string;
  contentf5title?: string;
  contentf6title?: string;
}

const TraningTabBignersecond: React.FC = () => {
  const [activeTab, setActiveTab] = useState(0);
  const pathname = usePathname();
  const tabs: Tab[] = [
    {
      id: 0,
      label: "Laser Technology for Back Glass Repairs",
      content: "",
      contentf2title: "",
      contentf2:
        "Get trained in using laser technology to remove back glass safely without damaging internal components, for modern phones with glass backs.",
      contentf3title: "",
      contentf3: "",
      contentf4title: "",
      contentf4: "",
      contentf5title: "",
      contentf5: "",
      button: "Get Course",
      link: "/training",
      image: tabimage,
    },
    {
      id: 1,
      label: "Cleaning and Quality Control",
      content: "",
      contentf2title: "",
      contentf2:
        "Discover the best methods for cleaning and testing refurbished LCD and OLED screens, ensuring they meet high-quality standards before reassembly.",
      contentf3title: "",
      contentf3: "",
      contentf4title: "",
      contentf4: "",
      contentf5title: "",
      contentf5: "",
      contentf6title: "",
      contentf6: "",
      button: "Get Course",
      link: "/training",
      image: tabimage,
    },
    {
      id: 2,
      label: "Reassembly and Testing",
      content: "",
      contentf2title: "",
      contentf2:
        "After completing the refurbishing process, learn how to reassemble devices and thoroughly test LCD and OLED screens for touch sensitivity, brightness, and functionality.",
      contentf3title: "",
      contentf3: "",
      contentf4title: "",
      contentf4: "",
      contentf5title: "",
      contentf5: "",
      contentf6title: "",
      contentf6: "",
      button: "Get Course",
      link: "/training",
      image: tabimage,
    },
  ];

  const getGradientColor = (id: number) => {
    switch (id) {
      case 0:
        return "linear-gradient(74deg, #56c1c1, #000000)";
      case 1:
        return "linear-gradient(74deg, #f35520c0, #000000)";
      case 2:
        return "linear-gradient(74deg, #d5fd33a1, #000000)";
      case 3:
        return "linear-gradient(74deg, #cf2362a7, #000000)";
      case 4:
        return "linear-gradient(74deg, #2052e8a5, #000000)";
      default:
        return "linear-gradient(74deg, #56c1c1, #000000)";
    }
  };

  return (
    <section
      className="pb-4 lg:pb-[60px]"
      // style={{
        // backgroundImage: "url('/images/Home/back-banner.svg')",
        // backgroundRepeat: "no-repeat",
        // backgroundSize: "cover",
      // }}
    >
      <div className="container bgchange pt-5">
        {/* <div className="mb-3">
          <MainHeading Heading="Course Content" />
        </div> */}

        <div className="p-3 bg-prc mb-6">
          <p className="text-primary mb-0 font-[600]">
            Section 3. Screen Refurbishing
          </p>
        </div>
        <div className="">
          <div className="grid xl:grid-cols-[2fr_5fr] lg:grid-cols-[3fr_6fr] gap-4 ">
            <div className="flex flex-col w-full gap-4">
              {tabs.map((tab) => (
                <button
                  key={tab.id}
                  className={`p-3 lg:p-6 xl:p-6  rounded-[5px] border-[1.5px] text-base tracking-[1.2px] ${
                    activeTab === tab.id
                      ? "active-tab text-primary"
                      : "bg-opacity-50 hover:bg-opacity-75 text-prc"
                  }`}
                  onClick={() => setActiveTab(tab.id)}
                  data-selected={tab.id.toString()}
                  role="tab"
                >
                  {tab.label}
                </button>
              ))}
            </div>
            <div
              className={`flex-1 xl:pl-4 radial-gradient-background-${activeTab}`}
            >
              {/* Display image at the top */}
              <div className="mb-4 text-center">
                <Image
                  src={tabs[activeTab].image}
                  alt={tabs[activeTab].label}
                  className="mx-auto"
                />
              </div>

              <h3>{tabs[activeTab].content}</h3>
              {[
                {
                  title: tabs[activeTab].contentf2title,
                  content: tabs[activeTab].contentf2,
                },
                {
                  title: tabs[activeTab].contentf3title,
                  content: tabs[activeTab].contentf3,
                },
                {
                  title: tabs[activeTab].contentf4title,
                  content: tabs[activeTab].contentf4,
                },
                {
                  title: tabs[activeTab].contentf5title,
                  content: tabs[activeTab].contentf5,
                },
                {
                  title: tabs[activeTab].contentf6title,
                  content: tabs[activeTab].contentf6,
                },
              ]
                .filter((item) => item.content)
                .map((item, index) => (
                  <div className="flex items-start gap-4" key={index}>
                    <div>
                      <p>{item.content}</p>
                    </div>
                  </div>
                ))}

              {tabs[activeTab].button && tabs[activeTab].link && (
                <>
                  {pathname === "/beginner-phone-repair-course" ||
                  pathname === "/advanced-motherboard" ||
                  pathname === "/expert-motherboard-repair" ||
                  pathname === "/master-motherboard-repair" ||
                  pathname === "/professional-phone-screen" ? (
                    <button
                      className="border-[0.5px] py-3 px-5 rounded-[50px] text-sm text-white font-[500]"
                      style={{
                        background: getGradientColor(activeTab),
                        borderColor: getGradientColor(activeTab),
                      }}
                      onClick={() => {
                        const element =
                          document.getElementById("business-name");
                        if (element) {
                          element.focus(); // Focus on the element
                          window.scrollTo({
                            top: element.offsetTop, // Scroll to the top of the element
                            behavior: "smooth", // Smooth scroll effect
                          });
                        }
                      }}
                    >
                      {tabs[activeTab].button}
                    </button>
                  ) : (
                    <Link
                      href={tabs[activeTab].link}
                      passHref
                      className="border-[0.5px] py-3 px-5 rounded-[50px] text-sm text-white font-[500]"
                      style={{
                        background: getGradientColor(activeTab),
                        borderColor: getGradientColor(activeTab),
                      }}
                    >
                      {tabs[activeTab].button}
                    </Link>
                  )}
                </>
              )}
            </div>
          </div>
        </div>

        <section className="lg:hidden block">
          {/* <DeliveryTousMobile /> */}
        </section>
      </div>
    </section>
  );
};

export default TraningTabBignersecond;
