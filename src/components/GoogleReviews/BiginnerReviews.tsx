"use client";

import React, { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";
import { Swiper as SwiperType } from "swiper";
import Image, { StaticImageData } from "next/image";
import MainTitle from "@/components/MainTitle/MainTitle";
import MainHeading from "@/components/ManinHeading/MainHeading";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/autoplay";

import star from "../../../public/Images/icons/star.svg";

interface Review {
  name: string;
  date: string;
  googletitle?: any;
  profileImage: StaticImageData;
  logoImage: StaticImageData;
  rating: number;
  param: string;

}

interface BiginnerReviewsProps {
  reviews?: Review[];
   googletitle: string;
}

export default function BiginnerReviews({ reviews = [], googletitle }: BiginnerReviewsProps) {
  const swiperRef = useRef<SwiperType | null>(null);

  return (
    <div>
      <div className="py-5 xl:p-6 px-2">
        <div className="mb-3">
          <MainHeading Heading={googletitle} color="black" svg_stroke="var(--alpha)" />
        </div>
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
              320: { slidesPerView: 1 },
              450: { slidesPerView: 1 },
              768: { slidesPerView: 3 },
              1024: { slidesPerView: 2 },
              1440: { slidesPerView: 4 },
            }}
          >
            {reviews.map((review, index) => (
              <SwiperSlide key={index}>
                <div className="p-4 rounded-[20px] border-[1px] border-[var(--secondry)] shadow-md cursor-pointer">
                  <div className="flex justify-between items-center mb-2">
                    <div className="flex gap-3 items-start">
                      <Image
                        width={43}
                        height={43}
                        src={review.profileImage}
                        alt={`${review.name}'s profile`}
                      />
                      <div>
                        <h5 className="font-semibold">{review.name}</h5>
                        <p className="text-[#b2b2b2] text-sm mb-2">{review.date}</p>
                      </div>
                    </div>
                    <Image src={review.logoImage} width={36} height={36} alt="Google logo" />
                  </div>
                  <div className="flex gap-1 mb-2">
                    {Array.from({ length: review.rating }).map((_, starIndex) => (
                      <Image
                        key={starIndex}
                        src={star}
                        alt="star"
                        width={20}
                        height={20}
                      />
                    ))}
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
  );
}
