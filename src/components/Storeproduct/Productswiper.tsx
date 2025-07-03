"use client";
import React, { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import Image, { StaticImageData } from "next/image";
import "swiper/css";
import "swiper/css/navigation";
import Link from "next/link";
import { Autoplay, Navigation } from "swiper/modules";
import { Swiper as SwiperType } from "swiper";
import MainTitle from "../../components/MainTitle/MainTitle";
import MainHeading from "../../components/ManinHeading/MainHeading";

// TypeScript interfaces
interface SlideData {
  src: StaticImageData;
  alt: string;
  Product: string;
}

interface ProductSwiperProps {
  slideData: SlideData[];
  Heading: string; // Add Heading here
  Title: string; // Add Title here
  svg_stroke: any;
  color: any;
  buttondata: any;
  buttonlink: any;
}

export default function Productswiper({
  slideData,
  Heading,
  Title,
  svg_stroke,
  color,
  buttondata,
  buttonlink,
}: ProductSwiperProps) {
  const swiperRef = useRef<SwiperType | null>(null);

  return (
    <div className="container py-4">
      <div className="flex justify-between mb-2">
        <div className="text-start">
          <MainHeading
            Heading={Heading} // Use Heading prop here
            color={color}
            text_align="start"
            svg_stroke={svg_stroke}
          />
          <MainTitle
            Title={Title} // Use Title prop here
            color="var(--secondary)"
            para_align="start"
          />
        </div>
        <div className="flex items-center">
          <Link href={buttonlink} target="_blank">
            <button className="hidden lg:flex uppercase bg-[#EF0000] w-max h-max text-white text-[18px] py-[8px] px-[15px] rounded-3xl transition-all duration-300 hover:[transform:translateY(-.335rem)]">
              {buttondata}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
              >
                <path
                  d="M5 12H19"
                  stroke="white"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M12 5L19 12L12 19"
                  stroke="white"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>
          </Link>
        </div>
      </div>

      <div className="service-slide-box flex gap-5 lg:flex-row items-center flex-col product-slider-section">
        <Swiper
          onSwiper={(swiper) => (swiperRef.current = swiper)}
          className="arrow-top-right w-full py-4"
          modules={[Autoplay, Navigation]}
          spaceBetween={20}
          loop
          autoplay={{ delay: 3000 }}
          speed={600}
          breakpoints={{
            320: { slidesPerView: 2 },
            450: { slidesPerView: 2 },
            768: { slidesPerView: 4 },
            1024: { slidesPerView: 4 },
            1440: { slidesPerView: 5 },
            1600: { slidesPerView: 7 },
          }}
        >
          {slideData.map((slide, index) => (
            <SwiperSlide key={index}>
              <Link href={buttonlink} target="_blank">
                <div className="relative">
                  <Image
                    className="w-full object-cover h-auto rounded-[10px] transform transition-transform duration-300 ease-in-out hover:scale-90"
                    src={slide.src}
                    alt={slide.alt}
                  />
                  <div className="product pt-3">
                    <p className="product-title text-secondary text-[13px] lg:text-[15px] leading-snug font-semibold mb-[0] font-poppins">
                      {slide.Product}
                    </p>
                  </div>
                </div>
              </Link>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
}
