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

const TraningTabBignersecond: React.FC = () => {
  const [activeTab, setActiveTab] = useState(0);
  const pathname = usePathname();
  const tabs: Tab[] = [
    {
      id: 0,
      label: "Back Glass and Housing Replacements",
      content: "",
      contentf2title: "",
      contentf2:
        "Master techniques to remove and replace back glass and housings on smartphones. This skill ensures seamless repairs that maintain the device’s durability and aesthetics, helping restore its original look and feel after damage.",
      contentf3title: "",
      contentf3: "",

      button: "Get Course",
      link: "/training",
      image: tabimage,
    },
    {
      id: 1,
      label: "Camera and Flashlight Replacements",
      content: "",
      contentf2title: "",
      contentf2:
        "Learn to diagnose and replace damaged camera modules and flashlights. This phone repair course teaches safe removal and installation procedures to ensure excellent image quality and reliable flashlight performance, restoring full device functionality.",
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
      id: 2,
      label: "Removing Non-Genuine Part Warnings",
      content: "",
      contentf2title: "",
      contentf2:
        "Understand how to address non-genuine part warnings related to batteries and cameras. This phone repairing course equips you to resolve these issues effectively, ensuring the device operates without intrusive warnings, improving customer satisfaction and device usability.",
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
      id: 3,
      label: "Power and Volume Button Repairs",
      content: "",
      contentf2title: "",
      contentf2:
        "Develop skills to repair or replace malfunctioning power and volume buttons. Learn the techniques for diagnosing issues and restoring button functionality, ensuring a seamless user experience and extending the device's lifespan.",
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
    // {
    //   id: 4,
    //   label: "Data Recovery",
    //   content: "LabX Professional Data Recovery:",
    //   contentf2title: "Data from Dead ",
    //   contentf2:
    //     " We can do data recovery from damaged phones that won’t turn on due to hardware damage, shock, or water exposure",
    //   contentf3title: "Physically Damaged Devices ",
    //   contentf3:
    //     " Whether your phone has been dropped, crushed, or exposed to liquids, we can often retrieve your valuable files.",
    //   contentf4title: "Corrupt Operating Systems ",
    //   contentf4:
    //     " We handle cases of OS corruption, which often makes a device unbootable, and recover data like contacts, texts, photos, and videos.",
    //   contentf5title: "Failed or Broken Logic Boards",
    //   contentf5:
    //     " Our team of mobile technicians specializes in recovering data from devices with broken or failed logic boards, using advanced techniques.",
    //   button: "Get Course",
    //   link: "/coming-soon",
    //   image: tabimage,
    // },
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
      style={{
        backgroundImage: "url('/images/Home/back-banner.svg')",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
      }}
    >
      <div className="container bgchange pt-5">
        {/* <div className="mb-3">
          <MainHeading Heading="Course Content" />
        </div> */}

        <div className="p-3 bg-white mb-6">
          <p className="text-black mb-0 font-[600]">
            Section 2: Removing and Replacing Parts
          </p>
        </div>
        <div className="">
          <div className="grid xl:grid-cols-[2fr_5fr] lg:grid-cols-[3fr_6fr] gap-4 ">
            <div className="flex flex-col w-full gap-4">
              {tabs.map((tab) => (
                <button
                  key={tab.id}
                  className={`p-3 lg:p-6 xl:p-6 text-white rounded-[5px] border-[1.5px] text-base tracking-[1.2px] ${
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

export default TraningTabBignersecond;
