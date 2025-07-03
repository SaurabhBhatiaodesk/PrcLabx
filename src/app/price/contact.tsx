"use client";
import React, { useEffect, useState } from "react";
import Price from "./Price";
import Device from "../../../public/Images/about/device.svg";
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
import BiginnerReviews from "@/components/GoogleReviews/BiginnerReviews";
import rname from "../../../public/Images/icons/rname.png";
import jname from "../../../public/Images/icons/E.png";
import Iname from "../../../public/Images/icons/I.png";
import Nname from "../../../public/Images/icons/N.png";
import Sname from "../../../public/Images/icons/S.png";
import Aname from "../../../public/Images/icons/A.png";
import hname from "../../../public/Images/icons/h.png";
import Googletest from "../../../public/Images/icons/Googletest.svg";
const Page = () => {
   const reviewsData = [
    {
      name: "Liam Foster",
      date: "September 12, 2023",
      profileImage: hname,
      logoImage: Googletest,
      rating: 5,
      param:
        "The course was incredibly detailed, and the hands-on practice helped me build confidence. The instructors were patient and knowledgeable, making even complex micro soldering techniques easy to understand.",
    },
    {
      name: "Emma Williams",
      date: "September 12, 2023",
      profileImage: rname,
      logoImage: Googletest,
      rating: 5,
      param:
        "This course transformed my skills! I can now confidently repair motherboards and handle advanced micro soldering tasks. Highly recommend it for anyone serious about electronics repair.",
    },
    {
      name: "Jack O'Connor",
      date: "September 12, 2023",
      profileImage: Sname,
      logoImage: Googletest,
      rating: 5,
      param:
        "The one-week intensive program was perfect. I learned advanced diagnostics and component replacement with expert guidance. The hands-on approach made everything clear and practical. Excellent experience!",
    },
    {
      name: "Chloe Brown",
      date: "October 5, 2023",
      profileImage: jname,
      logoImage: Googletest,
      rating: 5,
      param:
        "Fantastic course! The instructors were highly experienced, and their step-by-step guidance on micro soldering was invaluable. I feel ready to handle complex motherboard repairs now. ",
    },
    {
      name: "Oliver Harris",
      date: "November 1, 2023",
      profileImage: Aname,
      logoImage: Googletest,
      rating: 5,
      param:
        "The training exceeded my expectations. From using advanced tools to mastering micro soldering techniques, I gained practical skills that I can apply immediately. Great value for time and money!",
    },
    {
      name: "Sophie Clark",
      date: "November 1, 2023",
      profileImage: Nname,
      logoImage: Googletest,
      rating: 5,
      param:
        "A must-attend course for repair professionals. The small class size allowed personalized attention, and the hands-on exercises helped me master motherboard repairs quickly. Truly worth every minute!",
    },
  ];
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
          adminimagenew="/Images/dollars.webp"
          link=""
          buttonname=""
        />
      </div>
      <section className="pt-8">
        <div className="max-container">
          <div className="text-center">
            <MainHeading Heading="Get the Best Value for Your Device - PRC Buyback Prices" />
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
        <div className="bg-[#EFF7FF]">
        <div className="container_small  pt-8 pb-6">
        {/* <h2 className="text-center text-primary">Contact Information</h2> */}
        <MainHeading Heading="Contact Information" color="var(--prc)"  svg_stroke="var(--alpha)"/>
        <ContactForm />
      </div>
       </div>
      <div className="device__img text-center container pt-8 mt-5 pb-8 mb-5 relative">
        <Image
          height="1000"
          width="1000"
          src={Device.src}
          alt=" Phone repair center "
          className="m-auto"
        />
        <div className="overlap__number">
          <h2>Start Buy Back Process Now</h2>
          <h3>
            <Link href="tel:+(02)86783298 "> (02) 8678 3298 </Link>
          </h3>
        </div>
      </div>



           <BiginnerReviews reviews={reviewsData} googletitle="Our Google Review" />
    </>
  );
};

export default Page;
