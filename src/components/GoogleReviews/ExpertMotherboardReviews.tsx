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
    name: "Sarah Thompson",
    date: "September 12, 2023",
    profileImage: hname,
    logoImage: Googletest,
    rating: 5,
    param:
      "The Expert Motherboard Repair course exceeded my expectations. The hands-on training in micro soldering gave me the confidence to handle complex repairs professionally. Highly recommend it!",
  },
  {
    name: "James Harper",
    date: "September 12, 2023",
    profileImage: rname,
    logoImage: Googletest,
    rating: 5,
    param:
      "Fantastic course! The instructors were knowledgeable, and I gained valuable skills in diagnostics and soldering. Perfect for anyone looking to excel in motherboard repairs.",
  },
  {
    name: "Olivia Bennett",
    date: "September 12, 2023",
    profileImage: Sname,
    logoImage: Googletest,
    rating: 5,
    param:
      "This course is a game-changer! I can now repair IC chips and tackle reballing challenges. Great support and detailed lessons made learning seamless.",
  },
  {
    name: "Liam Cooper",
    date: "October 5, 2023",
    profileImage: jname,
    logoImage: Googletest,
    rating: 5,
    param:
      "Joining this training was the best decision for my career. The practical sessions on NAND programming and chip repairs were incredibly detailed. Worth every minute!",
  },
  {
    name: "Emma Wilson",
    date: "November 1, 2023",
    profileImage: Aname,
    logoImage: Googletest,
    rating: 5,
    param:
      "Exceptional experience! The focus on real-world repair scenarios and advanced techniques like dual-board soldering has improved my repair accuracy. Great for beginners and pros alike!",
  },
  {
    name: "Ethan Turner",
    date: "November 1, 2023",
    profileImage: Nname,
    logoImage: Googletest,
    rating: 5,
    param:
      "Expert Motherboard Repair training delivered exactly what I needed. Comprehensive lessons, hands-on practice, and certification boosted my confidence. I now handle client repairs with precision.",
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
                          <p className="text-gray-500 text-sm mb-2 ">
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
