"use client";
import MainTitle from "@/components/MainTitle/MainTitle";
import MainHeading from "@/components/ManinHeading/MainHeading";
import React, { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import Image from "next/image";
import "swiper/css";
import "swiper/css/navigation";
import Link from "next/link";
import "./Storeproduct.css";
import p1 from "../../../public/Images/productimages/apple1.svg";
import p2 from "../../../public/Images/productimages/apple2.svg";
import sliderimg from "../../../public/Images/partsliderimg.webp"
import { Autoplay, Navigation } from "swiper/modules";
import { Swiper as SwiperType } from "swiper";
//slider banner
import sliderimg1 from "../../../public/Images/slidercable.webp"
import sliderimg2 from "../../../public/Images/slidercamera.webp"
import sliderimg3 from "../../../public/Images/sliderchip.webp"
import sliderimg4 from "../../../public/Images/slidergamingconsole.webp"
import sliderimg5 from "../../../public/Images/slidermobilechip.webp"
import sliderimg6 from "../../../public/Images/slidermotherboard.webp"
import sliderimg7 from "../../../public/Images/sliderphoneback.webp"
import sliderimg8 from "../../../public/Images/sliderphonelock.webp"
export default function Productswiper() {
  const swiperRef = useRef<SwiperType | null>(null);
  const handlePrev = () => {
    if (swiperRef.current) {
      swiperRef.current.slidePrev();
    }
  };

  const slideData = [
    {
      src: sliderimg1,
      alt: "Charging Port",
      Product: "Charging Port"
    },
    {
      src: sliderimg2,
      alt: "Cameras",
      Product: "Cameras"
    },
    {
      src: sliderimg3,
      alt: "ICs/ Chips",
      Product: "ICs/ Chips"
    },
    {
      src: sliderimg4,
      alt: "PS5 IC/ Parts",
      Product: "PS5 IC/ Parts"
    },
    {
      src: sliderimg5,
      alt: "Motherboard Component Connect",
      Product: "Motherboard Component Connect"
    },
    {
      src: sliderimg6,
      alt: "Tools/ Stencils",
      Product: "Tools/ Stencils"
    },
    {
      src: sliderimg7,
      alt: "Back Glass",
      Product: "Back Glass"
    },
    {
      src: sliderimg8,
      alt: "Screens",
      Product: "Screens"
    },
  ];

  return (
    <div className="lg:py-4 py-3 bg-[var(--primary)]">
      <div className="container">
        <div className="lg:py-2 py-2 flex flex-col xl:flex-row ">
          <div className="text-start">
            <MainHeading Heading="Parts Store" color="var(--secondary)" text_align='start' svg_stroke="#FBAC05" />
            <MainTitle Title="Our Parts Store for mobile repair offers a wide selection of high-quality phone screens, iphone mobile parts, and accessories. With full e-commerce functionality, businesses can easily purchase the parts they need for efficient mobile phone repairs and services." color="var(--secondary)" para_align="start" />
          </div>
          <div className="flex items-center">
            <Link href="/coming-soon">
              <button className=" hidden lg:flex uppercase bg-[#EF0000] w-max h-max text-white text-[18px] py-[8px] px-[15px] rounded-3xl">
                Visit Store
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                  <path d="M5 12H19" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                  <path d="M12 5L19 12L12 19" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                </svg>
              </button>
            </Link>
          </div>
        </div>
      </div>
      <div className="container service-slide-box flex gap-5 lg:flex-row items-center flex-col product-slider-section p-2">
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
            768: { slidesPerView: 3 },
            1024: { slidesPerView: 3 },
            1440: { slidesPerView: 5 },
            1600: { slidesPerView: 7 },
          }}
        >
          {slideData.map((slide, index) => (
            <SwiperSlide className="" key={index}>
              <Link href="">
                <div className="relative  ">
                  <Image
                    className="w-full object-cover h-auto rounded-[10px]"
                    src={slide.src}
                    alt={slide.Product}
                  />
                  <div className="product pt-3">
                    <p className="product-title text-secondary text-[13px] lg:text-[15px] leading-snug font-semibold   mb-[0] font-poppins ">
                      {slide.Product}
                    </p>
                    {/* <div className="price-offer-discount flex justify-between">
                      <div className="">
                        <span className="line-through text-[#6d6d6dd2] lg:text-[20px] text-[16px]">
                          {slide.cross}
                        </span>
                        <span className="lg:text-[20px] text-[16px] font-poppins text-tertiary">
                          {slide.price}
                        </span>
                      </div>
                      <div>
                        <span className="text-[#00BA0C] font-semibold lg:text-[20px] text-[16px]">
                          10% off
                        </span>
                      </div>
                    </div> */}
                  </div>
                </div>
              </Link>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
      {/* <div className="flex justify-center xl:py-[20px]">
        <button className="btn  flex items-center ">VISIT STORE <GoArrowRight fontSize={25}/></button>
        <Link href="/coming-soon">
          <button className="btn  flex items-center">
            <IoCart fontSize="24px" style={{ marginRight: "3px", }} />
            VISIT STORE
            <Lottie
              animationData={lottiearrow}
              style={{ width: 30, height: 30 }}
              className="lottie-icon"
            />
            <IoCart fontSize="24px" />
          </button>
        </Link>
      </div> */}
    </div>
  );
}
