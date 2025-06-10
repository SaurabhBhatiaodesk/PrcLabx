"use client";
import MainTitle from "@/components/MainTitle/MainTitle";
import MainHeading from "@/components/ManinHeading/MainHeading";
import React, { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import Image from "next/image";
import "swiper/css";
import "swiper/css/navigation";
import Link from "next/link";
import { IoIosArrowRoundForward } from "react-icons/io";

import { Autoplay, Navigation } from "swiper/modules";
import { Swiper as SwiperType } from "swiper";
//slider banner
import sliderimage from "../../../../public/Images/specialist.webp"
import sliderimage2 from "../../../../public/Images/young.webp"
import sliderimage3 from "../../../../public/Images/digital.webp"
import sliderimage4 from "../../../../public/Images/closeup.webp"
import sliderimage5 from "../../../../public/Images/specialistlast.webp"

export default function ShipDeviceUs() {
  const swiperRef = useRef<SwiperType | null>(null);
  const handlePrev = () => {
    if (swiperRef.current) {
      swiperRef.current.slidePrev();
    }
  };

  const slideData = [
    {
      src: sliderimage,
      alt: "Screen Refurbishment",
      Product: "Screen Refurbishment",
      linking:"/screen-refurbishing"
    },
    {
      src: sliderimage2,
      alt: "Phone Repair Courses",
      Product: "Phone Repair Courses",
       linking:"/mail-in-repair"
    },
    {
      src: sliderimage3,
      alt: "Mail In Repair",
      Product: "Mail In Repair",
      linking:"/mail-in-repair"
    },
    {
      src: sliderimage4,
      alt: "Data Recovery",
      Product: "Data Recovery",
          linking:"/data-recovery"
    },
    {
      src: sliderimage5,
      alt: "B2B Phone Repair",
      Product: "B2B Phone Repair",
      linking:"/b2b-repair-services"
    },
   
  ];

  return (
    <div className="lg:py-4 py-3 "style={{ background: 'radial-gradient(circle, rgb(178, 245, 234) -41%, rgb(3, 9, 11) 56%)' }}>
      <div className="container">
        <div className="">
           <MainHeading Heading="Ship Your Device To Us"  color="#00BC9D" svg_stroke="var(--primary)" />
        <MainTitle Title="Please securely package your phone and ship it to us at the designated address. Make sure to include any required documentation for efficient processing." color="var(--primary)" />
         
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
        
          }}
        >
          {slideData.map((slide, index) => (
            <SwiperSlide className="" key={index}>
              <Link href={slide.linking}>
                <div className="relative  ">
                  <Image
                    className="w-full object-cover h-auto rounded-[10px]"
                    src={slide.src}
                    alt={slide.Product}
                  />
                  <div className="product pt-3">
                    <p className="text-primary text-sm lg:text-lg leading-snug font-semibold   mb-[0] font-poppins ">
                      {slide.Product}
                    </p>
                  
                  </div>
                    <div>
                      <Link href={slide.linking} className=" flex items-center gap-2 text-primary font-medium text-sm lg:text-base hover:underline mt-3">
                       <p className="text-tertiary m-0">Learn More </p> <IoIosArrowRoundForward fontSize={30} color="var(--tertiary)" />
                      </Link>
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
