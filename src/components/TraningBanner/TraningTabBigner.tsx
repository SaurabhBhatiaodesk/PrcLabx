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
import MainHeading from "../ManinHeading/MainHeading";
import MainTitle from "../MainTitle/MainTitle";
import "./TraningTab.css";
import pointet from "../../../public/Images/icons/pointingright.svg";

import Link from "next/link";
import DeliveryTousMobile from "../HomeCpmponents/DeliveryTo-us/DeliveryTousMobile";
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

const TraningTabBigner: React.FC = () => {
  const [activeTab, setActiveTab] = useState(0);
  const pathname = usePathname();
  const tabs: Tab[] = [
    {
      id: 0,
      label: "Introduction to Essential Tools and Parts",
      content: "",
      contentf2title: "",
      contentf2:
        "Familiarize yourself with the key tools and parts required for effective phone repairs. This foundational knowledge ensures you are equipped to handle various repairs confidently, covering everything from small fixes to advanced troubleshooting techniques.",
      contentf3title: "",
      contentf3: "",
      button: "Get Course",
      link: "/training",
      image: tabimage,
    },
    {
      id: 1,
      label: "Screen Replacement Techniques for Phones",
      content: "",
      contentf2title: "",
      contentf2:
        "Learn step-by-step methods for replacing damaged screens on smartphones and iPads. Master techniques that ensure safe disassembly, proper alignment, and a flawless finish, restoring devices to optimal functionality and maintaining their aesthetic appeal.",
      contentf3title: "",
      contentf3: " ",
      contentf4title: "",
      button: "Get Course",
      link: "/training",
      image: tabimage,
    },
    {
      id: 2,
      label: "Battery Replacement for Smartphones ",
      content: "",
      contentf2title: "",
      contentf2:
        "Understand the intricacies of safely removing and replacing batteries in various devices. This course repairing mobile phones ensures you can efficiently handle battery-related issues, enhancing the longevity and performance of smartphones and tablets while maintaining safety standards.",
      contentf3title: "",
      contentf3: "",
      contentf4title: "",
      contentf4: " ",
      contentf5title: "",
      contentf5: "",
      contentf6title: "",

      button: "Get Course",
      link: "/training",
      image: tabimage,
    },
    {
      id: 3,
      label: "Charging Port Replacement",
      content: "",
      contentf2title: "",
      contentf2:
        "Gain expertise in diagnosing and repairing faulty charging ports. Learn how to clean, replace, and test ports effectively, ensuring smooth power flow and connectivity, which are crucial for device functionality and user satisfaction.",
      contentf3title: "",
      contentf3: " ",
      contentf4title: "",

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
      className="py-4 lg:py-[20px]"
      style={{
        backgroundImage: "url('/images/Home/back-banner.svg')",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
      }}
    >
      <div className="container bgchange">
        <div className="mb-3">
          <MainHeading Heading="Phone Repair Course Syllabus" />
        </div>

        <div className="p-3 bg-white mb-6">
          <p className="text-black mb-0 font-[600]">
            Section 1. Basic Phone Repair
          </p>
        </div>
        <div className="">
          <div className="grid xl:grid-cols-[2fr_5fr] lg:grid-cols-[3fr_6fr] gap-4">
            <div className="flex flex-col w-full gap-4">
              {tabs.map((tab) => (
                <button
                  key={tab.id}
                  className={`p-3 lg:p-6 xl:p-6 text-white rounded-[5px] border-[1.5px] text-base tracking-[1.2px]  ${
                    activeTab === tab.id
                      ? "active-tab"
                      : "bg-opacity-50 hover:bg-opacity-75"
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

export default TraningTabBigner;
