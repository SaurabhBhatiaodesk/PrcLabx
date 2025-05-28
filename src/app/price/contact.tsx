"use client";
import React, { useEffect, useState } from "react";
import Price from "./Price";
import Device from "../../../public/Images/about/device.svg";
import GoogleReview from "@/components/GoogleReviews/what-we-do-review";
import Image from "next/image";
import ContactForm from "../contact-us/ContactForm";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb/Breadcrumb";
import MainHeading from "@/components/ManinHeading/MainHeading";
import { useSelector } from "react-redux";
import { RootState } from "../redux/store";
import TableData from "./Table";
import DataBox from "./DataBox";
import { button } from "@nextui-org/react";

const Page = () => {
  const priceCat = useSelector((state: RootState) => state.users.priceCat);
  console.log("priceCat",priceCat);
  
  const priceData = [
    {
      id: 0,
      title: "Price List",
      description:
        "Check below the buyback pricing of our four services. You can also view the buyback price for specific mobile phone models.",
    },
    {
      id: 1,
      title: "Screen Refurbishment Pricing - ( Buy Back )",
      description:
        "For fast screen refurbishment, you have two options: you can choose our service to replace the glass only, or you can sell your old broken screens to us, as we offer competitive buyback prices.",
     
    },
    {
      id: 2,
      title: "Data Recovery / Dead Device Pricing",
      description:
        "We offer professional data recovery services to retrieve essential information from non-functional devices. Any devices that are dead or have no power will be classified as data recovery cases.",
    },
    {
      id: 3,
      title: " General Repair Pricing",
      description:
        "Our general repair pricing includes common services such as screen replacements, charging port repairs, and other standard issues typically offered by most repair shops. ",
    },
    {
      id: 4,
      title: "DIY/Technician Damage Pricing (Dead Phone Revival)",
      description:
        "This service is specifically for devices damaged during DIY or technician attempts.",
    },
  ];
  const [selectedPriceData, setSelectedPriceData] = useState(priceData[0]);
  useEffect(() => {
    // Filter the priceData array based on the current value of priceCat
    const filteredData = priceData.find((item) => item.id === priceCat);
    if (filteredData) {
      setSelectedPriceData(filteredData); // Update the local state with the filtered data
    }
  }, [priceCat]);
  return (
    <>
      <div className="gk-hidden button">
        <Breadcrumb
          pageName={selectedPriceData.title}
          pageDescription={selectedPriceData.description}
          backgroundImage="/Images/BannerImages/price.png"
          AdminImage="/Images/dollars.webp"
          link=""
          buttonname=""
        />
      </div>
      <section className="pt-8">
        <div className="max-container">
          <div className="text-center">
            <MainHeading Heading="Get the Best Value for Your Device - LabX Buyback Prices" />
            <p>
              Select your mobile phone brand and explore our price list for
              various repair services we offer, from screen refurbishment to
              advanced motherboard repairs and more.
            </p>
          </div>
        </div>
      </section>
      <section>
        <DataBox />
      </section>
      {(priceCat !== null && priceCat !== 0) && (
      <>
      <Price />
      <TableData />
      </>
      )}
      <div className="container_small bg-black pt-8 pb-6">
        <h2 className="text-center">Contact Information</h2>
        <ContactForm />
      </div>
      <div className="device__img text-center container pt-8 mt-5 pb-8 mb-5 relative">
        <Image
          height="1000"
          width="1000"
          src={Device.src}
          alt=" labx repair "
          className="m-auto"
        />
        <div className="overlap__number">
          <h2>Start Buy Back Process Now</h2>
          <h3>
            <Link href="tel:+61455777077">+61455777077</Link>
          </h3>
        </div>
      </div>

      <GoogleReview />
    </>
  );
};

export default Page;
