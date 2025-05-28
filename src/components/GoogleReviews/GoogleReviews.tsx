"use client";
import MainTitle from "@/components/MainTitle/MainTitle";
import MainHeading from "@/components/ManinHeading/MainHeading";
import React, { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import Image from "next/image";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/autoplay";
import rname from "../../../public/Images/icons/rname.png";
import jname from "../../../public/Images/icons/E.png";
import Iname from "../../../public/Images/icons/I.png";
import Nname from "../../../public/Images/icons/N.png";
import Sname from "../../../public/Images/icons/S.png";
import Aname from "../../../public/Images/icons/A.png";
import hname from "../../../public/Images/icons/h.png";
import Googletest from "../../../public/Images/icons/Googletest.svg";
import star from "../../../public/Images/icons/star.svg";

import { Autoplay, Navigation } from "swiper/modules";
import { Swiper as SwiperType } from "swiper";

const reviews = [
  {
    name: "Hamza Javaid",
    date: "September 28, 2023",
    profileImage: hname,
    logoImage: Googletest,
    rating: 5,
    param:
      "I recently took a course at Lab X , and it was outstanding expeience. The instructor Bharat was knowledgeable , patient and genuinely passionate about sharing their expertise.",
  },
  {
    name: "Rakesh Vaghela",
    date: "September 12, 2023",
    profileImage: rname,
    logoImage: Googletest,
    rating: 5,
    param:
      "I had an outstanding experience at the LabX Repair Training Centre! Bharat is highly knowledgeable and patient, offering clear, step-by-step guidance throughout the course..",
  },
  {
    name: "Sahil Sardana",
    date: "September 22, 2023",
    profileImage: Sname,
    logoImage: Googletest,
    rating: 5,
    param:
      "I recently had my Samsung Galaxy S23 Ultra screen repaired, and the experience was absolutely wonderful! From start to finish, everything was handled with.",
  },
  {
    name: "Liam Brown",
    date: "October 15, 2023",
    profileImage: jname,
    logoImage: Googletest,
    rating: 5,
    param:
      "I had a great experience with LabX Repair. Their team handled my data recovery effortlessly. They were professional and kept me informed every step of the way. Truly impressive service!",
  },
  {
    name: "Ashley Jay",
    date: "November 1, 2023",
    profileImage: Aname,
    logoImage: Googletest,
    rating: 5,
    param:
      "Top quality service from Bharat in repairing my mum's Samsung S24. He was very understanding and helpful in understanding the costs both potential and up front",
  },
  {
    name: "Navdeep Narang",
    date: "November 1, 2023",
    profileImage: Nname,
    logoImage: Googletest,
    rating: 5,
    param:
      "I had an incredible experience with Business Lab X. Bharat is a fantastic instructor who truly knows his craft and is dedicated to teaching others the skills of repair...",
  },
  // {
  //   name: "Isabella Johnson",
  //   date: "November 1, 2023",
  //   profileImage: Iname,
  //   logoImage: Googletest,
  //   rating: 5,
  //   param:"Fantastic experience with LabX Repair! They not only fixed my phone quickly but also offered invaluable advice on maintenance. Their team is friendly and efficient. I’ll be back for sure!",
  // },
  {
    name: "Ethan Wilson",
    date: "November 1, 2023",
    profileImage: jname,
    logoImage: Googletest,
    rating: 5,
    param:
      "LabX Repair's B2B services are top-notch! They handle our bulk repairs with efficiency and transparency. Communication is excellent, and we’ve never had an issue. Highly recommended for business needs!",
  },
  // Add more review objects as needed
];

export default function Productswiper({ }) {
  const swiperRef = useRef<SwiperType | null>(null);

  return (
    <div className="bg-[#0b0b0b]">
      <div className="container">
        <div className="py-5 xl:p-6">
          <MainHeading Heading="Google Reviews" />
          <MainTitle Title="Read our genuine customer reviews to see why so many trust LabX. Real feedback from satisfied customers speaks for itself!" />
          <div className="service-slide-box flex gap-5 lg:flex-row items-center flex-col">
            <Swiper
              onSwiper={(swiper) => (swiperRef.current = swiper)}
              className="arrow-top-right w-[100%] py-4"
              // modules={[Autoplay, Navigation]}
              spaceBetween={20}
              loop={true}
              autoplay={{ delay: 3000 }}
              speed={600}
              breakpoints={{
                320: {
                  slidesPerView: 1,
                },
                450: {
                  slidesPerView: 1,
                },
                768: {
                  slidesPerView: 2,
                },
                1024: {
                  slidesPerView: 2,
                },
                1440: {
                  slidesPerView: 4,
                },
              }}
            >
              {reviews.map((review, index) => (
                <SwiperSlide key={index}>
                  <div className="p-4 bg-[#010101] rounded-[20px] border-[1px] border-[] shadow-md">
                    <div className="flex justify-between items-center mb-2">
                      <div className="flex gap-3 items-start">
                        <Image
                          src={review.profileImage}
                          alt={`${review.name}'s profile`}
                        />
                        <div>
                          <h5 className="font-semibold text-lg">{review.name}</h5>
                          <p className="text-[#b2b2b2] text-sm mb-2 ">
                            {review.date}
                          </p>
                        </div>
                      </div>
                      <Image src={review.logoImage} alt="Google logo" />
                    </div>
                    <div className="flex gap-1 mb-2">
                      {Array.from({ length: review.rating }).map(
                        (_, starIndex) => (
                          <Image
                            key={starIndex}
                            src={star}
                            alt="star"
                            width={20}
                            height={20}
                          />
                        )
                      )}
                    </div>
                    <p
                      className="font-extralight font-poppins text-[16px] leading-[24px]"
                      style={{
                        display: "-webkit-box",
                        WebkitLineClamp: 5,
                        WebkitBoxOrient: "vertical",
                        overflow: "hidden",
                      }}
                    >
                      {`${review.param.split(" ").slice(0, 50).join(" ")}${review.param.split(" ").length > 50 ? "" : ""
                        }`}
                    </p>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </div>
    </div>
  );
}
