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
    name: "Harper Lee",
    date: "September 12, 2023",
    profileImage: hname,
    logoImage: Googletest,
    rating: 5,
    param:
      "This training was a game-changer! The hands-on approach made complex repairs easy to understand. I feel confident handling all device issues now!",
  },
  {
    name: "Mason Clarke",
    date: "September 12, 2023",
    profileImage: rname,
    logoImage: Googletest,
    rating: 5,
    param:
      "I’ve learned so much in just five days! The instructors were fantastic, and I can now repair phones and tablets with ease. Highly recommend!",
  },
  {
    name: "Mia S.",
    date: "September 12, 2023",
    profileImage: Sname,
    logoImage: Googletest,
    rating: 5,
    param:
      "The phone fixing course exceeded my expectations. I gained practical skills quickly and now offer repairs in my local area. This program is worth every penny!",
  },
  {
    name: "Ella Brown",
    date: "October 5, 2023",
    profileImage: jname,
    logoImage: Googletest,
    rating: 5,
    param:
      "Great experience! The training was thorough, with excellent instructor support. I can now confidently replace screens and batteries. Very helpful for anyone looking to start!",
  },
  {
    name: "Isla C.",
    date: "November 1, 2023",
    profileImage: Aname,
    logoImage: Googletest,
    rating: 5,
    param:
      "I had no prior experience, but this phone repairing course made everything so clear. The instructors were patient and skilled. I’m now repairing devices professionally!",
  },
  {
    name: "Lucas B.",
    date: "November 1, 2023",
    profileImage: Nname,
    logoImage: Googletest,
    rating: 5,
    param:
      "This phone fixing course gave me the confidence to open my own repair business. The lessons were clear, and I learned everything from diagnosing issues to completing repairs.",
  },
];

export default function Productswiper({}) {
  const swiperRef = useRef<SwiperType | null>(null);

  return (
    <div className="bg-[#0b0b0b]">
      <div className="container">
        <div className="py-5 xl:p-6">
          <MainHeading Heading="Our Google Reviews" />
          <MainTitle Title="" />
          <div className="service-slide-box flex gap-5 lg:flex-row items-center flex-col">
            <Swiper
              onSwiper={(swiper) => (swiperRef.current = swiper)}
              className="arrow-top-right w-[100%] py-4"
              modules={[Autoplay, Navigation]}
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
                  slidesPerView: 3,
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
                          <h5 className="font-semibold">{review.name}</h5>
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
                        WebkitLineClamp: 4,
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
