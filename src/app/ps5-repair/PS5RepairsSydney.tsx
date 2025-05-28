"use client";
import React, { useState } from "react";
import Image from "next/image";
import MainHeading from "@/components/ManinHeading/MainHeading";
import PS5HDMIPortRepair from "../../../public/Images/PS5 HDMI Port Repair.webp";
import PS5PowerIssues from "../../../public/Images/PS5 Power Issues.webp";
import OverheatingFanNoise from "../../../public/Images/Overheating & Fan Noise.webp";
import OverheatingandCooling from "../../../public/Images/Overheating and Cooling.webp";
import BlueLightofDeath from "../../../public/Images/Blue Light of Death.webp";
import DiscDriveRepairs from "../../../public/Images/Disc Drive Repairs.webp";
import SystemSoftwareErrors from "../../../public/Images/System Software Errors.webp";
import GreenScreenDisplayIssues from "../../../public/Images/Green Screen Display Issues.webp";
import PS5ConnectivityIssues from "../../../public/Images/PS5 Connectivity Issues.webp";
import "./PS5.css";

import Link from "next/link";
import arrow1 from "../../../public/Images/icons/arrow1-1.svg";
import arrow2 from "../../../public/Images/icons/arrow1-2.svg";
import arrow3 from "../../../public/Images/icons/arrow1-3.svg";
import arrow4 from "../../../public/Images/icons/arrow1-4.svg";
import arrow5 from "../../../public/Images/icons/arrow1-5.svg";

import DeliveryTousMobile from "@/components/HomeCpmponents/DeliveryTo-us/DeliveryTousMobile";
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

const PS5RepairsSydney: React.FC = () => {
  const [activeTab, setActiveTab] = useState(0);
  const pathname = usePathname();
  const tabs: Tab[] = [
    {
      id: 0,
      label: "HDMI Port Damage",
      content: "",

      // contentf2title: "Expert B2B Screen Refurbishing",
      contentf2:
        "A damaged HDMI port can prevent your PS5 from displaying anything on the screen, leaving you with a blank output or distorted visuals. Our PlayStation 5 repair service specializes in HDMI port replacement using precision tools and high-quality connectors. We ensure a reliable, long-lasting fix so you can enjoy crystal-clear graphics and uninterrupted gaming once again.",
      // contentf3title: "State-of-the-Art Technology",
      // contentf3:
      //   "We use the latest equipment and techniques to restore damaged or defective screens, ensuring they meet factory standards.",
      // contentf4title: "Fair and Transparent Grading",
      // contentf4:
      //   "We provide a clear and honest grading system. If a screen is rejected or downgraded to a B grade, we will provide a detailed explanation along with photos as proof.",
      // contentf5title: "Fast Turnaround Phone Repair",
      // contentf5:
      //   "We understand the urgency of business needs, which is why we offer quick and efficient screen refurbishing services without compromising quality.",
      button: "Request a Quote",
      link: "/contact-us",
      image: PS5HDMIPortRepair,
      // image: screenreplace,
    },
    {
      id: 1,
      label: "No Power / Dead Console",
      content: "",
      // contentf2title: "Expert B2B Screen Refurbishing",
      contentf2:
        "If your PS5 is completely unresponsive and shows no signs of power, it may be due to a faulty power supply, motherboard issue, or internal short circuit. Our PS5 repair service performs advanced diagnostics and hardware replacement to bring your dead console back to life. Trust our experts to revive your system with a safe and effective repair process.",
      // contentf3title: "State-of-the-Art Technology",
      // contentf3:
      //   "We use the latest equipment and techniques to restore damaged or defective screens, ensuring they meet factory standards.",
      // contentf4title: "Fair and Transparent Grading",
      // contentf4:
      //   "We provide a clear and honest grading system. If a screen is rejected or downgraded to a B grade, we will provide a detailed explanation along with photos as proof.",
      // contentf5title: "Fast Turnaround Phone Repair",
      // contentf5:
      //   "We understand the urgency of business needs, which is why we offer quick and efficient screen refurbishing services without compromising quality.",
      button: "Request a Quote",
      link: "/contact-us",
      image: PS5PowerIssues,
      // image: screenreplace,
    },
    {
      id: 2,
      label: "BLOD - Blue Light Of Death",
      content: "",
      // contentf2title: "Expert B2B Screen Refurbishing",
      contentf2: `The Blue Light of Death (BLOD) is a serious issue that causes your PS5 to blink blue and not boot up properly. Our experienced technicians specialize in repairing BLOD-related hardware and software failures. Whether it's a motherboard repair or power circuitry issue, our PlayStation 5 repair service restores your console’s functionality with professional precision.`,
      // contentf3title: "State-of-the-Art Technology",
      // contentf3:
      //   "We use the latest equipment and techniques to restore damaged or defective screens, ensuring they meet factory standards.",
      // contentf4title: "Fair and Transparent Grading",
      // contentf4:
      //   "We provide a clear and honest grading system. If a screen is rejected or downgraded to a B grade, we will provide a detailed explanation along with photos as proof.",
      // contentf5title: "Fast Turnaround Phone Repair",
      // contentf5:
      //   "We understand the urgency of business needs, which is why we offer quick and efficient screen refurbishing services without compromising quality.",
      button: "Request a Quote",
      link: "/contact-us",
      image: OverheatingFanNoise,
      // image: screenreplace,
    },
    {
      id: 3,
      label: "Overheating and Cooling System Malfunctions",
      content: "",
      // contentf2title: "Expert B2B Screen Refurbishing",
      contentf2: `If your PS5 is shutting down unexpectedly or the fan is excessively loud, your cooling system may be failing. Our repair service includes deep internal cleaning, thermal paste application, and fan replacements. We optimize your console’s thermal performance, preventing long-term damage and ensuring quiet, stable gameplay even during intense gaming sessions.`,
      // contentf3title: "State-of-the-Art Technology",
      // contentf3:
      //   "We use the latest equipment and techniques to restore damaged or defective screens, ensuring they meet factory standards.",
      // contentf4title: "Fair and Transparent Grading",
      // contentf4:
      //   "We provide a clear and honest grading system. If a screen is rejected or downgraded to a B grade, we will provide a detailed explanation along with photos as proof.",
      // contentf5title: "Fast Turnaround Phone Repair",
      // contentf5:
      //   "We understand the urgency of business needs, which is why we offer quick and efficient screen refurbishing services without compromising quality.",
      button: "Request a Quote",
      link: "/contact-us",
      image: OverheatingandCooling,
      // image: screenreplace,
    },
    {
      id: 4,
      label: "Wi-Fi Connectivity Issues",
      content: "",
      // contentf2title: "Expert B2B Screen Refurbishing",
      contentf2: `Struggling with Wi-Fi drops or a PS5 that won’t connect to the internet? It could be due to a faulty wireless module, antenna, or software bug. Our PlayStation repair service thoroughly checks and fixes network hardware to restore a strong, stable connection. We ensure fast online gaming, seamless downloads, and smooth streaming experiences.`,
      // contentf3title: "State-of-the-Art Technology",
      // contentf3:
      //   "We use the latest equipment and techniques to restore damaged or defective screens, ensuring they meet factory standards.",
      // contentf4title: "Fair and Transparent Grading",
      // contentf4:
      //   "We provide a clear and honest grading system. If a screen is rejected or downgraded to a B grade, we will provide a detailed explanation along with photos as proof.",
      // contentf5title: "Fast Turnaround Phone Repair",
      // contentf5:
      //   "We understand the urgency of business needs, which is why we offer quick and efficient screen refurbishing services without compromising quality.",
      button: "Request a Quote",
      link: "/contact-us",
      image: BlueLightofDeath,
      // image: screenreplace,
    },
    {
      id: 5,
      label: "Disc Drive Problems",
      content: "",
      // contentf2title: "Expert B2B Screen Refurbishing",
      contentf2: `If your PS5 isn’t reading discs, struggles to eject them, or makes unusual noises, the disc drive may be malfunctioning. Our repair service tackles issues like faulty laser lenses, jammed ejectors, and disc detection failures. We restore full functionality to your console’s drive, so you can enjoy physical game titles without frustration.`,
      // contentf3title: "State-of-the-Art Technology",
      // contentf3:
      //   "We use the latest equipment and techniques to restore damaged or defective screens, ensuring they meet factory standards.",
      // contentf4title: "Fair and Transparent Grading",
      // contentf4:
      //   "We provide a clear and honest grading system. If a screen is rejected or downgraded to a B grade, we will provide a detailed explanation along with photos as proof.",
      // contentf5title: "Fast Turnaround Phone Repair",
      // contentf5:
      //   "We understand the urgency of business needs, which is why we offer quick and efficient screen refurbishing services without compromising quality.",
      button: "Request a Quote",
      link: "/contact-us",
      image: DiscDriveRepairs,
      // image: screenreplace,
    },
    {
      id: 6,
      label: "System Software Errors",
      content: "",
      // contentf2title: "Expert B2B Screen Refurbishing",
      contentf2: `Frequent crashes, update failures, or boot-loop issues can stem from corrupted system software. Our PlayStation 5 repair service resolves these problems with safe firmware restoration and system resets. We fix software errors without risking your saved data (when possible), ensuring your console performs smoothly with every startup and session.
`,
      // contentf3title: "State-of-the-Art Technology",
      // contentf3:
      //   "We use the latest equipment and techniques to restore damaged or defective screens, ensuring they meet factory standards.",
      // contentf4title: "Fair and Transparent Grading",
      // contentf4:
      //   "We provide a clear and honest grading system. If a screen is rejected or downgraded to a B grade, we will provide a detailed explanation along with photos as proof.",
      // contentf5title: "Fast Turnaround Phone Repair",
      // contentf5:
      //   "We understand the urgency of business needs, which is why we offer quick and efficient screen refurbishing services without compromising quality.",
      button: "Request a Quote",
      link: "/contact-us",
      image: SystemSoftwareErrors,
      // image: screenreplace,
    },
    {
      id: 7,
      label: "Green Screen Display Issues",
      content: "",
      // contentf2title: "Expert B2B Screen Refurbishing",
      contentf2: `A green screen on your PS5 can point to HDMI signal problems, GPU failure, or firmware glitches. Our expert repair service diagnoses the exact cause and fixes underlying hardware or software issues. We restore normal video output, ensuring that your display is vibrant and your games look as they should.
`,
      // contentf3title: "State-of-the-Art Technology",
      // contentf3:
      //   "We use the latest equipment and techniques to restore damaged or defective screens, ensuring they meet factory standards.",
      // contentf4title: "Fair and Transparent Grading",
      // contentf4:
      //   "We provide a clear and honest grading system. If a screen is rejected or downgraded to a B grade, we will provide a detailed explanation along with photos as proof.",
      // contentf5title: "Fast Turnaround Phone Repair",
      // contentf5:
      //   "We understand the urgency of business needs, which is why we offer quick and efficient screen refurbishing services without compromising quality.",
      button: "Request a Quote",
      link: "/contact-us",
      image: GreenScreenDisplayIssues,
      // image: screenreplace,
    },
  ];

  // const tabIcons = [arrow1, arrow2, arrow3, arrow4, arrow5];

  const getGradientColor = (id: number) => {
    switch (id) {
      case 0:
        return "linear-gradient(74deg, #43C6AC, #000000)";
      case 1:
        return "linear-gradient(74deg, #FF9966, #000000)";
      case 2:
        return "linear-gradient(74deg, #FFE000, #000000)";
      case 3:
        return "linear-gradient(74deg, #A044FF, #000000)";
      case 4:
        return "linear-gradient(74deg, #2052e8a5, #000000)";
      case 5:
        return "linear-gradient(74deg, #e89820a5, #000000)";
      case 6:
        return "linear-gradient(74deg, #19d113a5, #000000)";
      case 7:
        return "linear-gradient(74deg, #13abd1a5, #000000)";
      default:
        return "linear-gradient(74deg, #56c1c1, #000000)";
    }
  };

  const getTextColor = (id: number) => {
    switch (id) {
      case 0:
        return "#56c1c1";
      case 1:
        return "#f35520c0";
      case 2:
        return "#d5fd33a1";
      case 3:
        return "#A044FF";
      case 4:
        return "#2052e8a5";
      case 5:
        return "#e89820a5";
      case 6:
        return "#19d113a5";
      case 7:
        return "#13abd1a5";
      default:
        return "#2052e8a5";
    }
  };
  const itoms = [
    {
      id: 0,
      label: "HDMI Port Damage",
      // content: "LabX Professional Screen Refurbishment Services:",
      contentf2: `A damaged HDMI port can prevent your PS5 from displaying anything on the screen, leaving you with a blank output or distorted visuals. Our PlayStation 5 repair service specializes in HDMI port replacement using precision tools and high-quality connectors. We ensure a reliable, long-lasting fix so you can enjoy crystal-clear graphics and uninterrupted gaming once again.
`,
      // contentf3:
      //   "State-of-the-Art Technology: We use the latest equipment and techniques to restore damaged or defective screens, ensuring they meet factory standards.",
      // contentf4:
      //   "Fair and Transparent Grading: We provide a clear and honest grading system. If a screen is rejected or downgraded to a B grade, we will provide a detailed explanation along with photos as proof.",
      // contentf5:
      //   "Fast Turnaround Phone Repair: We understand the urgency of business needs, which is why we offer quick and efficient screen refurbishing services without compromising quality.",
      button: "Request a Quote",
      link2: "/contact-us",
      image: arrow1,
      buttonColor: "linear-gradient(74deg, #43C6AC, #000000)",
    },
    {
      id: 1,
      label: "No Power / Dead Console",
      // content: "LabX Professional Phone Repair Courses:",
      contentf2: `If your PS5 is completely unresponsive and shows no signs of power, it may be due to a faulty power supply, motherboard issue, or internal short circuit. Our PS5 repair service performs advanced diagnostics and hardware replacement to bring your dead console back to life. Trust our experts to revive your system with a safe and effective repair process.`,
      // contentf3:
      //   "Advanced Training: In our advanced course, you will master complex repairs like motherboard and microsoldering training. Enhance your skill set to tackle challenging issues with precision and professionalism.",
      // contentf4:
      //   "Software Training: This course focuses on essential software repairs, including phone flashing, unlocking, and other software fixes. Learn how to troubleshoot and resolve software-related problems effectively.",
      // contentf5:
      //   "Screen Refurbishing Training: Learn how to restore damaged screens to their original quality. Master the techniques needed to refurbish screens for a variety of devices.",
      button: "Request a Quote",
      link2: "/repair-solutions",
      image: arrow2,
      buttonColor: "linear-gradient(74deg, #FF9966, #000000)",
    },
    {
      id: 2,
      label: "BLOD - Blue Light Of Death",
      // content: "LabX Professional Mail In Repair:",
      contentf2: `The Blue Light of Death (BLOD) is a serious issue that causes your PS5 to blink blue and not boot up properly. Our experienced technicians specialize in repairing BLOD-related hardware and software failures. Whether it's a motherboard repair or power circuitry issue, our PlayStation 5 repair service restores your console’s functionality with professional precision.
`,
      // contentf3:
      //   "Start Your Repair: Click Start Repair to provide details about your device and its issues. You’ll receive a quote and mailing instructions within 24 hours.",
      // contentf4:
      //   "Need Help Now?: For immediate assistance, call us directly to start the repair process right away.",
      // contentf5:
      //   "Send Your Device: Once approved, follow the provided mailing instructions to ship your device to us securely.",
      // contentf6:
      //   "Device Intake and Repair: Upon receipt, we’ll confirm via email and place your device in the repair queue, notifying you of any updates during the process.",
      button: "Request a Quote",
      link2: "/mail-in-repair",
      image: arrow3,
      buttonColor: "linear-gradient(74deg, #FFE000, #000000)",
    },
    {
      id: 3,
      label: "Overheating and Cooling System Malfunctions",
      // content: "LabX Professional B2B Phone Repair:",
      contentf2: `If your PS5 is shutting down unexpectedly or the fan is excessively loud, your cooling system may be failing. Our repair service includes deep internal cleaning, thermal paste application, and fan replacements. We optimize your console’s thermal performance, preventing long-term damage and ensuring quiet, stable gameplay even during intense gaming sessions.
`,
      // contentf3:
      //   "Bulk Repair Solutions: Our infrastructure is designed to handle bulk repair orders efficiently, ensuring quick turnaround times without compromising on quality. Whether you need screen refurbishments or complex repairs for multiple devices, we can scale our services to match your volume.",
      // contentf4:
      //   "Custom Repair Solutions: We offer tailored repair solutions to suit your business requirements, whether you need bulk repairs, iPhone parts, screen refurbishing, or specialized services. Our flexible offerings can adapt to your unique needs.",
      // contentf5:
      //   "Repair Tracking and Updates: Stay informed with our comprehensive mobile phone repair tracking system. We provide automated updates at each stage, ensuring you always know the status of your devices throughout the mobile phone repair process.",
      // contentf6:
      //   "Easy B2B Account Setup: Setting up a B2B account is straightforward. Complete the Apply for Business Account form on our website, and your account will be activated within moments, providing you with fast turnaround time for exclusive B2B phone repair services.",
      button: "Request a Quote",
      link2: "/b2b-repair-services",
      image: arrow4,
      buttonColor: "linear-gradient(74deg, #A044FF, #000000)",
    },
    {
      id: 4,
      label: "Wi-Fi Connectivity Issues",
      // content: "LabX Professional Data Recovery:",
      contentf2: `Struggling with Wi-Fi drops or a PS5 that won’t connect to the internet? It could be due to a faulty wireless module, antenna, or software bug. Our PlayStation repair service thoroughly checks and fixes network hardware to restore a strong, stable connection. We ensure fast online gaming, seamless downloads, and smooth streaming experiences.`,
      // contentf3:
      //   "Physically Damaged Devices: Whether your phone has been dropped, crushed, or exposed to liquids, we can often retrieve your valuable files.",
      // contentf4:
      //   "Corrupt Operating Systems: We handle cases of OS corruption, which often makes a device unbootable, and recover data like contacts, texts, photos, and videos.",
      // contentf5:
      //   "Failed or Broken Logic Boards: Our team of mobile technicians specializes in recovering data from devices with broken or failed logic boards, using advanced techniques.",
      button: "Request a Quote",
      link2: "/data-recovery",
      image: arrow5,
      buttonColor: "linear-gradient(74deg, #2052e8a5, #000000)",
    },
    {
      id: 5,
      label: "Disc Drive Problems",
      // content: "LabX Professional Data Recovery:",
      contentf2: `If your PS5 isn’t reading discs, struggles to eject them, or makes unusual noises, the disc drive may be malfunctioning. Our repair service tackles issues like faulty laser lenses, jammed ejectors, and disc detection failures. We restore full functionality to your console’s drive, so you can enjoy physical game titles without frustration.
`,
      // contentf3:
      //   "Physically Damaged Devices: Whether your phone has been dropped, crushed, or exposed to liquids, we can often retrieve your valuable files.",
      // contentf4:
      //   "Corrupt Operating Systems: We handle cases of OS corruption, which often makes a device unbootable, and recover data like contacts, texts, photos, and videos.",
      // contentf5:
      //   "Failed or Broken Logic Boards: Our team of mobile technicians specializes in recovering data from devices with broken or failed logic boards, using advanced techniques.",
      button: "Request a Quote",
      link2: "/data-recovery",
      image: arrow5,
      buttonColor: "linear-gradient(74deg, #2052e8a5, #000000)",
    },
    {
      id: 6,
      label: "System Software Errors",
      // content: "LabX Professional Data Recovery:",
      contentf2: `Frequent crashes, update failures, or boot-loop issues can stem from corrupted system software. Our PlayStation 5 repair service resolves these problems with safe firmware restoration and system resets. We fix software errors without risking your saved data (when possible), ensuring your console performs smoothly with every startup and session.
`,
      // contentf3:
      //   "Physically Damaged Devices: Whether your phone has been dropped, crushed, or exposed to liquids, we can often retrieve your valuable files.",
      // contentf4:
      //   "Corrupt Operating Systems: We handle cases of OS corruption, which often makes a device unbootable, and recover data like contacts, texts, photos, and videos.",
      // contentf5:
      //   "Failed or Broken Logic Boards: Our team of mobile technicians specializes in recovering data from devices with broken or failed logic boards, using advanced techniques.",
      button: "Request a Quote",
      link2: "/data-recovery",
      image: arrow5,
      buttonColor: "linear-gradient(74deg, #2052e8a5, #000000)",
    },
    {
      id: 7,
      label: "Green Screen Display Issues",
      // content: "LabX Professional Data Recovery:",
      contentf2: `A green screen on your PS5 can point to HDMI signal problems, GPU failure, or firmware glitches. Our expert repair service diagnoses the exact cause and fixes underlying hardware or software issues. We restore normal video output, ensuring that your display is vibrant and your games look as they should.
`,
      // contentf3:
      //   "Physically Damaged Devices: Whether your phone has been dropped, crushed, or exposed to liquids, we can often retrieve your valuable files.",
      // contentf4:
      //   "Corrupt Operating Systems: We handle cases of OS corruption, which often makes a device unbootable, and recover data like contacts, texts, photos, and videos.",
      // contentf5:
      //   "Failed or Broken Logic Boards: Our team of mobile technicians specializes in recovering data from devices with broken or failed logic boards, using advanced techniques.",
      button: "Request a Quote",
      link2: "/data-recovery",
      image: arrow5,
      buttonColor: "linear-gradient(74deg, #31e820a5, #000000)",
    },
  ];

  const handleFocus = () => {
    const element = document.getElementById("staperformid");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      className="py-4 lg:py-[30px]"
      style={{
        backgroundImage: "url('/images/Home/back-banner.svg')",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
      }}
    >
      <div className="container bgchange">
        <div className="py-3">
          {" "}
          <MainHeading Heading="Common PS5 Console Issues We Expertly Fix" />
        </div>
        {/* <MainTitle Title="Take a quick look at our range of mobile phone repair services tailored to meet all your needs, from expert repairs and training programs to quality parts and data recovery — everything under one roof!" /> */}
        <div className="lg:block hidden">
          <div className="grid xl:grid-cols-[2fr_5fr] lg:grid-cols-[3fr_6fr] gap-4">
            <div className="flex flex-col w-full gap-4">
              {tabs.map((tab) => (
                <button
                  key={tab.id}
                  className={`p-3 text-white rounded-[10px] border-[1.5px] font-semibold text-base tracking-[1.2px] ${
                    activeTab === tab.id
                      ? "active-tab"
                      : "bg-opacity-50 hover:bg-opacity-75"
                  }`}
                  onClick={() => setActiveTab(tab.id)}
                  data-selected={tab.id.toString()}
                  role="tab"
                  aria-label={`Tab for ${tab.label}`}
                >
                  {tab.label}
                </button>
              ))}
            </div>
            <div
              className={`flex-1 xl:pl-4 radial-gradient-background-${activeTab}`}
            >
              <div className="">
                <Image
                  src={tabs[activeTab].image}
                  alt={tabs[activeTab].label}
                  width={1600} // higher resolution
                  height={900}
                  className="w-full h-[400px] object-cover rounded-lg"
                  quality={100}
                />
              </div>
              <h3 className="mb-2">{tabs[activeTab].content}</h3>
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
                      <p className="">
                        <span
                          className="font-bold pb-[2px] mr-[3px]"
                          style={{ color: getTextColor(activeTab) }} // Apply dynamic text color here
                        >
                          {item.title}
                        </span>
                        {item.content}
                      </p>
                    </div>
                  </div>
                ))}
              {pathname === "/ps5-repair" ? (
                <button
                  className="border-[0.5px] py-3 px-5 rounded-[50px] text-sm text-white font-[500]"
                  style={{
                    background: getGradientColor(activeTab),
                    borderColor: getGradientColor(activeTab),
                  }}
                  onClick={handleFocus}
                >
                  Request a Quote
                </button>
              ) : (
                <>
                  {tabs[activeTab].button && tabs[activeTab].link && (
                    <Link
                      href={tabs[activeTab].link}
                      passHref
                      className="border-[0.5px] py-3 px-5 rounded-[50px] text-sm text-white font-[500]"
                      style={{
                        background: getGradientColor(activeTab),
                        borderColor: getGradientColor(activeTab),
                      }}
                      aria-label={`Request a Quote about ${tabs[activeTab].label}`}
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
          <DeliveryTousMobile itoms={itoms} />
        </section>
      </div>
    </section>
  );
};

export default PS5RepairsSydney;
