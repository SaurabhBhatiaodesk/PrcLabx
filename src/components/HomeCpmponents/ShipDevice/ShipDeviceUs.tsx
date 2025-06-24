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
import backsv  from "../../../../public/Images/backsv.svg" 

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
      linking: "/screen-refurbishing"
    },
    // {
    //   src: sliderimage2,
    //   alt: "Phone Repair Courses",
    //   Product: "Phone Repair Courses",
    //   linking: "/mail-in-repair"
    // },
    {
      src: sliderimage3,
      alt: "Mail In Repair",
      Product: "Mail In Repair",
      linking: "/mail-in-repair"
    },
    {
      src: sliderimage4,
      alt: "PS5 Repair",
      Product: "PS5 Repair",
      linking: "/ps5-repair"
    },
    {
      src: sliderimage5,
      alt: "B2B Phone Repair",
      Product: "B2B Phone Repair",
      linking: "/b2b-repair-services"
    },

  ];

  return (
<div
  className="lg:py-4 py-3"
  style={{
    backgroundImage: `url(${backsv.src})`,
     backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
  }}
>
      <div className="container">
        <div className="">
          <MainHeading Heading="Ship Your Device To Us" color="#00BC9D" svg_stroke="var(--primary)" />
          <MainTitle Title="Please securely package your phone and ship it to us at the designated address. Make sure to include any required documentation for efficient processing." color="var(--primary)" />

        </div>
      </div>
      <div className="container  pt-4">
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
            1440: { slidesPerView: 4 },

          }}
        >
          {slideData.map((slide, index) => (
            <SwiperSlide className="" key={index}>
              <Link href={slide.linking}>
                <div className="relative group">
                  <Image
                    className="w-full object-cover h-auto rounded-[10px] transition-all duration-500 hover:scale-90"
                    src={slide.src}
                    alt={slide.Product}
                  />
                  <div className="absolute inset-0 bg-secondary bg-opacity-40 opacity-0 group-hover:opacity-75 transition-all duration-300 flex justify-center items-center rounded-[10px]">
                    <p className="text-primary font-semibold xl:text-2xl md:text-lg text-sm text-center">{slide.Product}</p>
                  </div>
                  <div className="absolute bottom-4 left-4">
                  </div>
                </div>

            
              <p className="text-lg  mt-3 mb-0 text-primary">{slide.Product}</p>
                </Link>
<div className="mt-1 flex justify-start items-center gap-2 text-tertiary  text-lg hover:text-white">
  <Link href={slide.linking} className=" " >Learn More</Link>
  <IoIosArrowRoundForward  className="" fontSize={35}/>
</div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

    </div>
  );
}
