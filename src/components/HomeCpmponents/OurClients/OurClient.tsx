"use client";
import MainTitle from "@/components/MainTitle/MainTitle";
import MainHeading from "@/components/ManinHeading/MainHeading";
import React, { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import Image from "next/image";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/autoplay";
import "./OurClient.css";
// import { TiStarFullOutline } from "react-icons/ti";
// import { MdArrowOutward } from "react-icons/md";


import { Autoplay, Navigation } from "swiper/modules";
import { Swiper as SwiperType } from "swiper";

export default function Productswiper({}) {
  const swiperRef = useRef<SwiperType | null>(null);
  const handlePrev = () => {
    if (swiperRef.current) {
      swiperRef.current.slidePrev();
    }
  };

  const handleNext = () => {
    if (swiperRef.current) {
      swiperRef.current.slideNext();
    }
  };

  return (
    <div>
      <div className="container ">
        <div className=" py-4 xl:py-6">
          <MainHeading Heading="Our Clients" />
          <MainTitle Title="Our clients trust us for expert mobile device repair and advanced motherboard soldering solutions. We are committed to delivering fast, reliable, and high-quality service tailored to their needs." />

          <div className="service-slide-box flex gap-5 lg:flex-row items-center flex-col">
            <Swiper
              onSwiper={(swiper) => (swiperRef.current = swiper)}
              className="arrow-top-right w-[100%] "
              modules={[Autoplay, Navigation]}
              spaceBetween={20}
              loop={true}
              autoplay={{ delay: 3000 }}
              speed={600}
              breakpoints={{
                320: {
                  // for very small mobile screens
                  slidesPerView: 2,
                },
                450: {
                  slidesPerView: 3,
                },
                768: {
                  slidesPerView: 3,
                },
                1024: {
                  slidesPerView: 5,
                },
                1440: {
                  slidesPerView: 6,
                },
              }}
            >
              <SwiperSlide>
                <div className="relative  client-slider  my-5 ">
                  <Image
                    className="w-full transition-transform duration-300 ease-in-out hover:scale-110"
                    src="https://labxbackend.s3.us-east-2.amazonaws.com/teckcity.95c3c2b8.svg"
                    width={500}
                    height={500}
                    alt="Toyota Fortuner"
                  />
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="relative  client-slider  my-5">
                  <Image
                    className="w-full transition-transform duration-300 ease-in-out hover:scale-110"
                    src="https://labxbackend.s3.us-east-2.amazonaws.com/Vector+(4).webp"
                    width={500}
                    height={500}
                    alt="Honda Civic"
                  />
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="relative  client-slider  my-5">
                  <Image
                    className="w-full transition-transform duration-300 ease-in-out hover:scale-110"
                    src="https://labxbackend.s3.us-east-2.amazonaws.com/empire.1743f008+(1)+1.webp"
                    width={500}
                    height={500}
                    alt="BMW X5"
                  />
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="relative  client-slider  my-5">
                  <Image
                    className="w-full transition-transform duration-300 ease-in-out hover:scale-110"
                    src="https://labxbackend.s3.us-east-2.amazonaws.com/Group+1707480703+(1).webp"
                    width={500}
                    height={500}
                    alt="Mercedes Benz"
                  />
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="relative  client-slider  my-5 ">
                  <Image
                    className="w-full transition-transform duration-300 ease-in-out hover:scale-110"
                    src="https://labxbackend.s3.us-east-2.amazonaws.com/teckcity.95c3c2b8.svg"
                    width={500}
                    height={500}
                    alt="Toyota Fortuner"
                  />
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="relative  client-slider  my-5">
                  <Image
                    className="w-full transition-transform duration-300 ease-in-out hover:scale-110"
                    src="https://labxbackend.s3.us-east-2.amazonaws.com/Vector+(4).webp"
                    width={500}
                    height={500}
                    alt="Honda Civic"
                  />
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="relative  client-slider  my-5">
                  <Image
                    className="w-full transition-transform duration-300 ease-in-out hover:scale-110"
                    src="https://labxbackend.s3.us-east-2.amazonaws.com/empire.1743f008+(1)+1.webp"
                    width={500}
                    height={500}
                    alt="BMW X5"
                  />
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="relative  client-slider  my-5">
                  <Image
                    className="w-full transition-transform duration-300 ease-in-out hover:scale-110"
                    src="https://labxbackend.s3.us-east-2.amazonaws.com/Group+1707480703+(1).webp"
                    width={500}
                    height={500}
                    alt="Mercedes Benz"
                  />
                </div>
              </SwiperSlide>
            
          
            </Swiper>
          </div>
      
        </div>
      </div>
    </div>
  );
}

{

}


