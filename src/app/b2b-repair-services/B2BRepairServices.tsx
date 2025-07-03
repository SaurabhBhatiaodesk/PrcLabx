"use client";
import React, { useState } from "react";
import Breadcrumb from "@/components/Breadcrumb/Breadcrumb";
import MainTitle from "@/components/MainTitle/MainTitle";
import MainHeading from "@/components/ManinHeading/MainHeading";
import Image from "next/image";

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

import pointer from "../../../public/Images/tickicon.png";
import B2BRepairNeeds from "../../../public/Images/B2B Repair Needs.png";
import RepairServices from "../../../public/Images/Repair Services.png";

import ApplyforaBusinessAccount from "../../../public/Images/Apply for a Business Account.svg";
import SendUsYourDevices from "../../../public/Images/Send Us Your Devices.svg";
import TrackYourOrders from "../../../public/Images/Track Your Orders.svg";
import ReceiveYourRepairedDevices from "../../../public/Images/Receive Your Repaired Devices.svg";

import AOS from "aos";
import "aos/dist/aos.css";
import BiginnerReviews from "@/components/GoogleReviews/BiginnerReviews";
import rname from "../../../public/Images/icons/rname.png";
import jname from "../../../public/Images/icons/E.png";
import Nname from "../../../public/Images/icons/N.png";
import Sname from "../../../public/Images/icons/S.png";
import Aname from "../../../public/Images/icons/A.png";
import hname from "../../../public/Images/icons/h.png";
import Googletest from "../../../public/Images/icons/Googletest.svg";

// import pointer from "../../../public"

const B2BRepairServices: React.FC = () => {
  const reviewsData = [
    {
      name: "Jason T",
      date: "September 22, 2022",
      profileImage: hname,
      logoImage: Googletest,
      rating: 5,
      param:
        "Outstanding service i was looking for phone repair near me ! B2B Phone Repair fixed my iPhone’s cracked screen in no time. Fast, affordable, and excellent quality. Highly recommend them for repairs!",
    },
    {
      name: "Emily R.",
      date: "September 25, 2021",
      profileImage: rname,
      logoImage: Googletest,
      rating: 5,
      param:
        "I’ve used B2B for multiple repairs, and they never disappoint. Friendly team, quick service, and my phone always works like new. Best repair shop in town!",
    },
    {
      name: "Liam K.",
      date: "September 12, 2023",
      profileImage: Sname,
      logoImage: Googletest,
      rating: 5,
      param:
        "B2B mobile phone repair saved my water-damaged phone! I thought it was beyond repair, but they restored it perfectly. Highly professional and trustworthy. Five stars!",
    },
    {
      name: "Sophie L.",
      date: "October 5, 2023",
      profileImage: jname,
      logoImage: Googletest,
      rating: 5,
      param:
        "Cracked my phone screen badly, and B2B repaired it within an hour. Affordable, reliable, and great customer service. Wouldn’t go anywhere else for repair.",
    },
    {
      name: "Daniel P.",
      date: "November 19, 2023",
      profileImage: Aname,
      logoImage: Googletest,
      rating: 5,
      param:
        "My go-to for any phone repairs. They’ve fixed screens, batteries, and charging issues on several of my devices. B2B always delivers quality service at great prices.",
    },
    {
      name: "Amelia M.",
      date: "November 1, 2023",
      profileImage: Nname,
      logoImage: Googletest,
      rating: 5,
      param:
        "Had a battery issue with my old phone, and B2B mobile phone repair fixed it right up. Affordable, fast, and friendly service. So glad I found them!",
    },
  ];
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
    },
    {
      image: SendUsYourDevices,
      alt: "Transparency",
      title: "Remote Unlocking",
      description: `We can remove user accounts or reset your phone remotely. Contact us for assistance.`,
    },
    {
      image: TrackYourOrders,
      alt: "Recovery",
      title: "Free Guidance",
      description: `Stuck on something or have questions during your repair? Feel free to ask! If it's within our expertise, we'll provide you with free guidance.`,
    },
    {
      image: ReceiveYourRepairedDevices,
      alt: "B2B Services",
      title: "Supply Uncommon Parts",
      description: `We have a wide range of uncommon parts in our inventory that aren’t listed on our website. Feel free to ask if we have what you need on our shelves!`,
    },
  ];

  return (
    <>
      <div className="steper-form-section-os">
        <Breadcrumb
          pageName="B2B Phone Repair Service"
          pageDescription="We offer tailored B2B solutions designed to streamline your operations and ensure the highest quality mobile phone repairs for your customers. PRC provides specialized services that help you maintain your business efficiency and product quality."
          backgroundImage="/Images/RepairService.png"
          adminimagenew="/Images/B2BRepairServices.svg"
          link="/coming-soon"
          buttonname="Apply for B2B Account"
        />

        <section>
          <div className="container">
            <div className="text-center py-8  space-y-4">
              {/* <h2>
                B2B Service For Repair Shop, Retailers, & Bulk Device Suppliers
              </h2> */}
              <MainHeading
                Heading="B2B Service For Repair Shop, Retailers, & Bulk Device Suppliers"
                color="var(--prc)"
                svg_stroke="var(--alpha)"
              />

              <p>
                From repair shops to retailers to bulk device suppliers, PRC
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
            <MainHeading
              Heading="Why Partner with PRC for Your B2B Repair Needs?"
              color="var(--prc)"
              svg_stroke="var(--alpha)"
            />

            <div className="grid xl:grid-cols-2 lg:grid-cols-2 grid-cols-1 gap-8 lg:py-5 py-3 items-center">
              <div>
                <Image src={B2BRepairNeeds} alt=" Phone repair center " />
              </div>
              <div>
                <div className="">
                  <span className="text-xl pb-[2px] text-prc font-semibold ">
                    Reliable Screen Refurbishing:
                  </span>
                  <p className="">
                    {
                      "We focus on offering high-quality screen refurbishing services, particularly for B2B clients. Our refurbishing process ensures factory-level quality at competitive prices, allowing businesses to extend the life of their inventory while reducing waste."
                    }
                  </p>

                  <span className="text-xl pb-[2px] text-prc font-semibold ">
                    Expert Logic Board Repairs:
                  </span>
                  <p className="">
                    {
                      " As specialists in complex repairs, including motherboard micro soldering and logic board repair, our phone repair store repair handle the most challenging cases that other repair providers may not be equipped for. By partnering with PRC, you gain access to a higher level of phone fixing services."
                    }
                  </p>

                  <span className="text-xl pb-[2px] text-prc font-semibold ">
                    Comprehensive Data Recovery:
                  </span>
                  <p className="">
                    {
                      "We offer data recovery services to ensure your clients’ data can be retrieved from damaged or dead devices. Our advanced techniques maximize the chances of data retrieval, even from severely damaged devices."
                    }
                  </p>

                  <span className="text-xl pb-[2px] text-prc font-semibold ">
                    Bulk Repair Solutions:
                  </span>
                  <p className="">
                    {
                      "Our infrastructure is designed to handle bulk B2B phone repair orders efficiently, ensuring quick turnaround times without compromising on quality. Whether you need screen refurbishments or complex repairs for multiple devices, we can scale our motherboard issue repair services to match your volume."
                    }
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* next section  desing are same*/}

        <section>
          <div className="container lg:py-5 py-4">
            <MainHeading
              Heading="Key Features of Our B2B Phone Repair Services"
              color="var(--prc)"
              svg_stroke="var(--alpha)"
            />

            <div className="grid xl:grid-cols-2 lg:grid-cols-2 grid-cols-1 lg:gap-8 gap-4 lg:py-5 py-3 items-center">
              <div>
                <div className="">
                  <div className="">
                    <div className="">
                      <span className="text-xl pb-[2px] text-prc font-semibold ">
                        Competitive Pricing:
                      </span>
                      <p className="">
                        Our pricing is already competitive, so we do not offer
                        additional discounts for regular mobile phone repairs.
                        However, we guarantee cost-effective solutions without
                        sacrificing quality.
                      </p>
                    </div>
                  </div>

                  <div className="">
                    <div className="">
                      <span className="text-xl pb-[2px] text-prc font-semibold ">
                        Fast Turnaround Times:
                      </span>
                      <p className="">
                        {
                          " We understand that time is money. That’s why we prioritize fast turnaround times for all B2B clients, ensuring that your devices are repaired or refurbished quickly to minimize downtime."
                        }
                      </p>
                    </div>
                  </div>

                  <div className="">
                    <div className="">
                      <span className="text-xl pb-[2px] text-prc font-semibold ">
                        Custom Repair Solutions:
                      </span>
                      <p className="">
                        {
                          "Whether you need screen refurbishing, bulk cellular device repairs, or a specific service tailored to your business model, we can customize our repair offerings to meet your needs."
                        }
                      </p>
                    </div>
                  </div>

                  <div className="">
                    <div className="">
                      <span className="text-xl pb-[2px] text-prc font-semibold ">
                        Repair Tracking and Updates:
                      </span>
                      <p className="">
                        {
                          "You’ll always know the status of your repairs. We provide automated updates and tracking, so you can stay informed at every stage of the repair process."
                        }
                      </p>
                    </div>
                  </div>
                  <div className="">
                    <div>
                      <span className="text-xl pb-[2px] text-prc font-semibold ">
                        Easy B2B Account Setup:
                      </span>
                      <p className="">
                        {
                          " Signing up for a B2B account is simple. Just fill out the Apply for Business Account form on our website, and we’ll get your account activated promptly. Once approved, you’ll have access to special technician damage phone repair designed to support your business operations."
                        }
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div>
                <Image src={RepairServices} alt=" Phone repair center " />
              </div>
            </div>
          </div>
        </section>

        <section>
          <div className="container" data-aos="fade-up">
            <MainHeading
              Heading="We Do, What Others Don't"
              svg_stroke="var(--alpha)"
              color="var(--prc)"
            />
            {/* <MainTitle Title="At LabX, we tackle complex mobile phone repair challenges that others can’t, delivering reliable solutions and unmatched expertise." /> */}

            <div className="lg:pb-8 py-4">
              <div className="grid grid-cols-1 lg:grid-cols-3 xl:grid-cols-4 md:grid-cols-2 justify-center text-center gap-4">
                {sectionData.map((section, index) => (
                  <div
                    key={index}
                    style={{ background: "transparent" }}
                    className="p-[20px] rounded-[15px] border-2 border-[var(--prc)] shadow-lg shadow-[#ede57456] transition-shadow duration-300 flex flex-col  hover:shadow-[0_0_20px_10px_#ede57456] group"
                  >
                    <div className="flex justify-center">
                      <Image
                        className="pb-2"
                        src={section.image}
                        alt={section.alt}
                      />
                    </div>
                    <h3 className="text-alpha xl:text-lg ">{section.title}</h3>
                    <p className="text-prc text-[17px] leading-6">
                      {section.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <OurClient />
        <YouTubeHome />
        <BiginnerReviews
          reviews={reviewsData}
          googletitle="Our Google Review"
        />
      </div>
    </>
  );
};

export default B2BRepairServices;
