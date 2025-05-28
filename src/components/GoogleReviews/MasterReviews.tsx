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
    name: "Tommy Harris",
    date: "September 12, 2023",
    profileImage: hname,
    logoImage: Googletest,
    rating: 5,
    param:
      "This motherboard repair course taught me everything I needed to know about micro soldering. The hands-on training was fantastic, and I’m now confident handling complex repairs.",
  },
  {
    name: "Emma Wilson",
    date: "September 12, 2023",
    profileImage: rname,
    logoImage: Googletest,
    rating: 5,
    param:
      "An excellent course for anyone looking to level up their skills. The instructors are knowledgeable, and the practical experience has made me a pro in motherboard repairs.",
  },
  {
    name: "Jacob Brown",
    date: "September 12, 2023",
    profileImage: Sname,
    logoImage: Googletest,
    rating: 5,
    param:
      "Highly recommend this micro soldering course! I learned everything from CPU reballing to data recovery. The training was clear, and I feel ready to start my own business.",
  },
  {
    name: "Sarah Clark",
    date: "October 5, 2023",
    profileImage: jname,
    logoImage: Googletest,
    rating: 5,
    param:
      "The Master Motherboard Repair course was a game-changer. I can now confidently repair damaged boards and handle tricky data recovery tasks. Worth every penny!",
  },
  {
    name: "James Walker",
    date: "November 1, 2023",
    profileImage: Aname,
    logoImage: Googletest,
    rating: 5,
    param:
      "Great hands-on experience with real-world scenarios. This course has taken my repair skills to the next level, especially with advanced soldering techniques. Very happy!",
  },
  {
    name: "Lily Roberts",
    date: "November 1, 2023",
    profileImage: Nname,
    logoImage: Googletest,
    rating: 5,
    param:
      "I gained valuable insights into micro soldering and mobile phone repairs. The course helped me become proficient in restoring even the most challenging motherboard issues. Fantastic training!",
  },
];

export default function Productswiper({}) {
  const swiperRef = useRef<SwiperType | null>(null);

  return (
    <div className="bg-[#0b0b0b]">
      <div className="container">
        <div className="py-5 xl:p-6">
          <MainHeading Heading="Learner Testimonials" />
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
                      {review.param}
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
