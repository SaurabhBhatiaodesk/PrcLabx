"use client";
import React, { useState } from "react";
import Breadcrumb from "@/components/Breadcrumb/Breadcrumb";
import MainTitle from "@/components/MainTitle/MainTitle";
import MainHeading from "@/components/ManinHeading/MainHeading";
import Image from "next/image";
import AskusQuestion from "@/components/AskusQuestion/AskusQuestion";
import GoogleReviews from "@/components/GoogleReviews/GoogleReviews";
import processor from "../../../public/Images/icons/processor.svg";
import lighting from "../../../public/Images/icons/lighting.svg";
import phonerepair from "../../../public/Images/icons/phonerepair.svg";
import laptop from "../../../public/Images/icons/laptop.svg";
import OurClient from "@/components/HomeCpmponents/OurClients/OurClient";
import {
  TextField,
  Button,
  TextareaAutosize,
  Grid,
  Typography,
  ImageList,
  ImageListItem,
} from "@mui/material";
import YouTubeHome from "@/components/HomeCpmponents/YouTubeHome/YouTubeHome";
import "./B2BRepairServices.css";
import MainButton from "@/components/MainButton/MainButton";
import pointer from "../../../public/Images/icons/pointing-right.svg";
import B2BRepairNeeds from "../../../public/Images/B2B Repair Needs.png";
import RepairServices from "../../../public/Images/Repair Services.png";

import ApplyforaBusinessAccount from "../../../public/Images/icons/Apply for a Business Account.svg";
import SendUsYourDevices from "../../../public/Images/icons/Send Us Your Devices.svg";
import TrackYourOrders from "../../../public/Images/icons/Track Your Orders.svg";
import ReceiveYourRepairedDevices from "../../../public/Images/icons/Receive Your Repaired Devices.svg";

import AOS from "aos";
import "aos/dist/aos.css";

// import pointer from "../../../public"

const B2BRepairServices: React.FC = () => {
  const repairData = [
    {
      title: "Top iPad Repair",
      items: [
        {
          icon: processor,
          color: "bg-yellow-100",
          text: "Liquid/Motherboard Damage Assessment",
          price: "$24.99",
        },
        {
          icon: processor,
          color: "bg-blue-100",
          text: "Liquid/Motherboard Damage Assessment",
          price: "$24.99",
        },
        {
          icon: processor,
          color: "bg-pink-100",
          text: "Liquid/Motherboard Damage Assessment",
          price: "$24.99",
        },
        {
          icon: processor,
          color: "bg-teal-100",
          text: "Liquid/Motherboard Damage Assessment",
          price: "$24.99",
        },
      ],
    },
    {
      title: "Top Macbook Repair",
      items: [
        {
          icon: lighting,
          color: "bg-sky-100",
          text: "Macbook Battery Replacement",
          price: "$24.99",
        },
        {
          icon: lighting,
          color: "bg-yellow-100",
          text: "Macbook Battery Replacement",
          price: "$24.99",
        },
        {
          icon: lighting,
          color: "bg-lime-100",
          text: "Macbook Battery Replacement",
          price: "$24.99",
        },
        {
          icon: lighting,
          color: "bg-gray-100",
          text: "Macbook Battery Replacement",
          price: "$24.99",
        },
      ],
    },
    {
      title: "Top Phone Repair",
      items: [
        {
          icon: phonerepair,
          color: "bg-teal-100",
          text: "iPhone 16 Pro Screen Change",
          price: "$24.99",
        },
        {
          icon: phonerepair,
          color: "bg-pink-100",
          text: "iPhone 16 Pro Screen Change",
          price: "$24.99",
        },
        {
          icon: phonerepair,
          color: "bg-sky-100",
          text: "iPhone 16 Pro Screen Change",
          price: "$24.99",
        },
        {
          icon: phonerepair,
          color: "bg-orange-100",
          text: "iPhone 16 Pro Screen Change",
          price: "$24.99",
        },
      ],
    },
    {
      title: "Top Laptop Repair",
      items: [
        {
          icon: laptop,
          color: "bg-amber-100",
          text: "Laptop on-board GPU Reflow",
          price: "$24.99",
        },
        {
          icon: laptop,
          color: "bg-sky-100",
          text: "Laptop on-board GPU Reflow",
          price: "$24.99",
        },
        {
          icon: laptop,
          color: "bg-green-100",
          text: "Laptop on-board GPU Reflow",
          price: "$24.99",
        },
        {
          icon: laptop,
          color: "bg-gray-100",
          text: "Laptop on-board GPU Reflow",
          price: "$24.99",
        },
      ],
    },
  ];

  const [email, setEmail] = useState("");
  const [isInvalid, setIsInvalid] = useState(false);

  const handleValidation = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setEmail(value);
    // Simple validation: check if the email format is invalid
    setIsInvalid(!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value));
  };
  const sectionData = [
    {
      image: ApplyforaBusinessAccount,
      alt: "Repairs",
      title: "Technician Damage",
      description: `If you have broken the connector or torn the flex cable during your repair process,You can send it to us,we will fix it for you.`,
      hoverBackground:
        "linear-gradient(74deg, rgb(86, 193, 193), rgb(0, 0, 0))",
    },
    {
      image: SendUsYourDevices,
      alt: "Transparency",
      title: "Remote Unlocking",
      description: `We can remove user accounts or reset your phone remotely. Contact us for assistance.`,
      hoverBackground:
        "linear-gradient(74deg, rgba(243, 85, 32, 0.753), rgb(0, 0, 0))",
    },
    {
      image: TrackYourOrders,
      alt: "Recovery",
      title: "Free Guidance",
      description: `Stuck on something or have questions during your repair? Feel free to ask! If it's within our expertise, we'll provide you with free guidance.`,
      hoverBackground:
        "linear-gradient(74deg, rgba(213, 253, 51, 0.63), rgb(0, 0, 0))",
    },
    {
      image: ReceiveYourRepairedDevices,
      alt: "B2B Services",
      title: "Supply Uncommon Parts",
      description: `We have a wide range of uncommon parts in our inventory that aren’t listed on our website. Feel free to ask if we have what you need on our shelves!`,

      hoverBackground:
        "linear-gradient(74deg, rgba(207, 35, 98, 0.655), rgb(0, 0, 0))",
    },
  ];

  return (
    <>
      <div className="steper-form-section-os">
        <Breadcrumb
          pageName="B2B Phone Repair Service"
          pageDescription="We offer tailored B2B solutions designed to streamline your operations and ensure the highest quality mobile phone repairs for your customers. LabX provides specialized services that help you maintain your business efficiency and product quality."
          backgroundImage="/Images/BannerImages/about.png"
          AdminImage="/Images/B2BRepairServices.svg"
          link="/coming-soon"
          buttonname="Apply for B2B Account"
        />

        <section>
          <div className="container">
            <div className="text-center py-8  space-y-4">
              <h2>
                B2B Service For Repair Shop, Retailers, & Bulk Device Suppliers
              </h2>
              <p>
                From repair shops to retailers to bulk device suppliers, LabX
                caters to the specific needs of B2B phone repairs. Our
                specialized services are designed to help you maintain
                efficiency and product quality. We handle complex repairs,
                including motherboard repair, precision soldering, and logic
                board restoration, ensuring that your business delivers
                reliable, top-quality service every time.
              </p>
            </div>
          </div>
        </section>

        <section>
          <div className="container lg:py-5 py-4">
            <MainHeading Heading="Why Partner with LabX for Your B2B Repair Needs?" />

            <div className="grid xl:grid-cols-2 lg:grid-cols-2 grid-cols-1 gap-8 lg:py-5 py-3 items-center">
              <div>
                <Image src={B2BRepairNeeds} alt=" labx repair " />
              </div>
              <div>
                <div className="flex-col gap-2  flex">
                  <div className="flex items-start gap-3">
                    <Image src={pointer} alt="pointer" />

                    <div className="">
                      <span className="text-xl pb-[2px] text-[#EDE574] font-semibold">
                        Reliable Screen Refurbishing:
                      </span>
                      <p className="inline ml-1">
                        {
                          "    We focus on offering high-quality screen refurbishing services, particularly for B2B clients. Our refurbishing process ensures factory-level quality at competitive prices, allowing businesses to extend the life of their inventory while reducing waste."
                        }
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <Image src={pointer} alt="pointer" />
                    <div className="">
                      <span className="text-xl pb-[2px] text-[#EDE574] font-semibold">
                        Expert Logic Board Repairs:
                      </span>
                      <p className="inline ml-1">
                        {
                          " As specialists in complex repairs, including motherboard micro soldering and logic board repair, our phone repair store repair handle the most challenging cases that other repair providers may not be equipped for. By partnering with LabX, you gain access to a higher level of phone fixing services."
                        }
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <Image src={pointer} alt="pointer" />
                    <div className="">
                      <span className="text-xl pb-[2px] text-[#EDE574] font-semibold">
                        Comprehensive Data Recovery:
                      </span>
                      <p className="inline ml-1">
                        {
                          "We offer data recovery services to ensure your clients’ data can be retrieved from damaged or dead devices. Our advanced techniques maximize the chances of data retrieval, even from severely damaged devices."
                        }
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <Image src={pointer} alt="pointer" />
                    <div className="">
                      <span className="text-xl pb-[2px] text-[#EDE574] font-semibold">
                        Bulk Repair Solutions:
                      </span>
                      <p className="inline ml-1">
                        {
                          "Our infrastructure is designed to handle bulk B2B phone repair orders efficiently, ensuring quick turnaround times without compromising on quality. Whether you need screen refurbishments or complex repairs for multiple devices, we can scale our motherboard issue repair services to match your volume."
                        }
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* next section  desing are same*/}

        <section>
          <div className="container lg:py-5 py-4">
            <MainHeading Heading="Key Features of Our B2B Phone Repair Services" />

            <div className="grid xl:grid-cols-2 lg:grid-cols-2 grid-cols-1 gap-8 lg:py-5 py-3 items-center">
              <div>
                <div className="flex-col gap-2  flex">
                  <div className="flex items-start gap-3">
                    <Image src={pointer} alt="pointer" />

                    <div className="">
                      <span className="text-xl pb-[2px] text-[#EDE574] font-semibold">
                        Competitive Pricing:
                      </span>
                      <p className="inline ml-1">
                        Our pricing is already competitive, so we do not offer
                        additional discounts for regular mobile phone repairs.
                        However, we guarantee cost-effective solutions without
                        sacrificing quality.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <Image src={pointer} alt="pointer" />
                    <div className="">
                      <span className="text-xl pb-[2px] text-[#EDE574] font-semibold">
                        Fast Turnaround Times:
                      </span>
                      <p className="inline ml-1">
                        {
                          " We understand that time is money. That’s why we prioritize fast turnaround times for all B2B clients, ensuring that your devices are repaired or refurbished quickly to minimize downtime."
                        }
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <Image src={pointer} alt="pointer" />
                    <div className="">
                      <span className="text-xl pb-[2px] text-[#EDE574] font-semibold">
                        Custom Repair Solutions:
                      </span>
                      <p className="inline ml-1">
                        {
                          "Whether you need screen refurbishing, bulk cellular device repairs, or a specific service tailored to your business model, we can customize our repair offerings to meet your needs."
                        }
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <Image src={pointer} alt="pointer" />
                    <div className="">
                      <span className="text-xl pb-[2px] text-[#EDE574] font-semibold">
                        Repair Tracking and Updates:
                      </span>
                      <p className="inline ml-1">
                        {
                          "You’ll always know the status of your repairs. We provide automated updates and tracking, so you can stay informed at every stage of the repair process."
                        }
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Image src={pointer} alt="pointer" />
                    <div>
                      <span className="text-xl pb-[2px] text-[#EDE574] font-semibold">
                        Easy B2B Account Setup:
                      </span>
                      <p className="inline ml-1">
                        {
                          " Signing up for a B2B account is simple. Just fill out the Apply for Business Account form on our website, and we’ll get your account activated promptly. Once approved, you’ll have access to special technician damage phone repair designed to support your business operations."
                        }
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div>
                <Image src={RepairServices} alt=" labx repair " />
              </div>
            </div>
          </div>
        </section>

        <section>
          <div className="container" data-aos="fade-up">
            <MainHeading Heading="We Do, What Others Don't" />
            {/* <MainTitle Title="At LabX, we tackle complex mobile phone repair challenges that others can’t, delivering reliable solutions and unmatched expertise." /> */}

            <div className="lg:pb-8 py-4">
              <div className="grid grid-cols-1 lg:grid-cols-3 xl:grid-cols-4 md:grid-cols-2 justify-center text-center gap-4">
                {sectionData.map((section, index) => (
                  <div
                    key={index}
                    style={{ background: "transparent" }}
                    className="p-[20px] rounded-[15px] border-2 border-[#ede574] shadow-lg shadow-[#ede57456] transition-shadow duration-300 flex flex-col  hover:shadow-[0_0_20px_10px_#ede57456] "
                    onMouseEnter={(e) =>
                      (e.currentTarget.style.background =
                        section.hoverBackground)
                    }
                    onMouseLeave={(e) =>
                      (e.currentTarget.style.background = "transparent")
                    }
                  >
                    <div className="flex justify-center">
                      <Image
                        className="pb-2"
                        src={section.image}
                        alt={section.alt}
                      />
                    </div>
                    <h3 className="text-[#EDE574] xl:text-lg ">
                      {section.title}
                    </h3>
                    <p>{section.description}</p>

                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <OurClient />
        <YouTubeHome />
        <GoogleReviews />
      </div>
    </>
  );
};

export default B2BRepairServices;
