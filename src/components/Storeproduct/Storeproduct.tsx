"use client";
import Lottie from "lottie-react";
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
import { CiShoppingCart } from "react-icons/ci";

import { Autoplay, Navigation } from "swiper/modules";
import { Swiper as SwiperType } from "swiper";
// import { GoArrowRight } from "react-icons/go";
import lottiearrow from "../../../public/Images/jsonfile/lottieflowbtn.json";
import { IoCart } from "react-icons/io5";
import { transform } from "next/dist/build/swc";

export default function Productswiper() {
  const swiperRef = useRef<SwiperType | null>(null);
  const handlePrev = () => {
    if (swiperRef.current) {
      swiperRef.current.slidePrev();
    }
  };

  const slideData = [
    {
      src: p1,
      alt: "Toyota Fortuner",
      Product: "iPhone 16 Pro Max Screen  Original Service Pack",
      price: "$600+GST",
      cross: "$800",
    },
    {
      src: p2,
      alt: "Honda Civic",
      Product: "iPhone 16 Pro Screen Original Service Pack",
      price: " $530+GST",
      cross: "$730",
    },
    {
      src: p1,
      alt: "BMW X5",
      Product: "iPhone 16 Plus Screen Original Service Pack",
      price: " $530+GST",
      cross: "$730",
    },
    {
      src: p2,
      alt: "Mercedes Benz",
      Product: "iPhone 16 Screen Original Service Pack",
      price: " $465+GST",
      cross: "$665",
    },
    {
      src: p1,
      alt: "Toyota Fortuner",
      Product: "iPhone 16 Pro Max Screen  Original Service Pack",
      price: "$600+GST",
      cross: "$800",
    },
    {
      src: p2,
      alt: "Honda Civic",
      Product: "iPhone 16 Pro Screen Original Service Pack",
      price: "$530+GST",
      cross: "$730",
    },
  ];

  return (
    <div className="lg:py-4 py-3 bg-[#0b0b0b]">
      <div className="container  ">
        <div className="lg:py-2 py-2 ">
          <MainHeading Heading="Parts Store Service" />
          <MainTitle Title="Our Parts Store for mobile repair offers a wide selection of high-quality phone screens, iphone mobile parts, and accessories. With full e-commerce functionality, businesses can easily purchase the parts they need for efficient mobile phone repairs and services." />
        </div>
      </div>
      <div className="service-slide-box flex gap-5 lg:flex-row items-center flex-col product-slider-section p-2">
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
            1440: { slidesPerView: 4 },
            1600: { slidesPerView: 5 },
          }}
        >
          {slideData.map((slide, index) => (
            <SwiperSlide className="" key={index}>
              <Link href="">
                <div className="relative  ">
                  <Image
                    className="w-full object-cover xl:h-[300px]  lg:h-[273px] h-[200px] rounded-[20px] "
                    src={slide.src}
                    alt={slide.alt}
                  />
                  <div className="product">
                    <p className="product-title text-[13px] lg:text-[15px]   mb-[0] font-poppins ">
                      {slide.Product}
                    </p>
                    <div className="price-offer-discount flex justify-between">
                      <div className="">
                        <span className="line-through text-[#6d6d6dd2] lg:text-[20px] text-[16px]">
                          {/* {slide.cross} */}
                        </span>
                        <span className="lg:text-[20px] text-[16px] font-poppins text-tertiary">
                          {slide.price}
                        </span>
                      </div>
                      <div>
                        <span className="text-[#00BA0C] font-semibold lg:text-[20px] text-[16px]">
                          {/* 10% off */}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </Link>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
      <div className="flex justify-center xl:py-[20px]">
        {/* <button className="btn  flex items-center ">VISIT STORE <GoArrowRight fontSize={25}/></button> */}
        <Link href="/coming-soon">
          <button className="btn  flex items-center">
          <IoCart fontSize="24px" style={{marginRight:"3px",}} />
            VISIT STORE
            {/* <Lottie
              animationData={lottiearrow}
              style={{ width: 30, height: 30 }}
              className="lottie-icon"
            /> */}
          <IoCart fontSize="24px" />
          </button>
        </Link>
      </div>
    </div>
  );
}
