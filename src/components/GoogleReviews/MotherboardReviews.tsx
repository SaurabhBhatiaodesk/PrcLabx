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
