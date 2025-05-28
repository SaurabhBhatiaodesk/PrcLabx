"use client";
import React, { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import Image from "next/image";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/autoplay";
import "./CarSlider.css";
import { TiStarFullOutline } from "react-icons/ti";
import { MdArrowOutward } from "react-icons/md";
import Link from "next/link";
import car11 from "../../../public/Images/Home/car11.jpg";
import car2 from "../../../public/Images/Home/car2.jpg";
import car3 from "../../../public/Images/Home/car3.jpg";
import car4 from "../../../public/Images/Home/car4.jpg";
import { Autoplay, Navigation } from "swiper/modules";
import { Swiper as SwiperType } from "swiper";
export default function Productswiper({ }) {
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
    <div className="" style={{
      backgroundImage: "url('/images/Home/carback.jpg')",
      backgroundRepeat: "no-repeat",
      backgroundSize: "cover"
    }}>
      <div className="container lg:py-[80px]  py-[40px] ">
        <div className="service-slide-box flex gap-5 lg:flex-row items-center flex-col ">
          <div className="first lg:w-[30%] w-[100%]">
            <p className="text-white">Choose your Best Deal</p>
            <h2 className="text-white "> 
              Our Latest Cars best for<span className="text-[#ED1B24]"> Collection </span>
            </h2>
            <p className="text-white">Taxi service refers to the transportation of passen gers from one location to the another using a hired vehicle. It offers a convenient</p>
          </div>
          <Swiper
            onSwiper={(swiper) => (swiperRef.current = swiper)}
            className="arrow-top-right lg:w-[70%] w-[100%]"
            modules={[Autoplay]}
            spaceBetween={20}
            loop={true}
            autoplay
            breakpoints={{
              450: {
                slidesPerView: 1,
              },
              768: {
                slidesPerView: 2,
              },
              1440: {
                slidesPerView: 3,
              },
              1024: {
                slidesPerView: 2,
              },
            }}
          >
            <div className="main-card-car">
              <SwiperSlide>
                <Link href="">
                  <div className="relative bg-[#fff]  service-boxx">
                    <div className="relative  w-full inline-block z-10 iconWrapper">
                      <Image className="w-full" src={car11} alt="Icon" />
                      <div className="flex gap-[8px] flex-col">
                        <h3 className=" font-[600] sm:text-[20px] oo">Toyota Fortuner</h3>
                        <p className="text-[#868686] text-[18px]">
                          Base Rate: ₹5000
                        </p>
                        <p className="text-[#868686]">Per Mile/KM: ₹1000</p>
                        <div className=" flex gap-3 items-center">
                          <p className="text-[#868686]">Passengers: </p>
                          <span className="flex">
                            <TiStarFullOutline color="#FFB658" />
                            <TiStarFullOutline color="#FFB658" />
                            <TiStarFullOutline color="#FFB658" />
                            <TiStarFullOutline color="#FFB658" />
                            <TiStarFullOutline color="#FFB658" />
                          </span>
                        </div>
                      </div>
                    </div>
                    <div className=" mt-5">
                      <button
                        className="btn w-full bg-transparent"
                        style={{
                          background: "transparent",
                          color: "#000",
                          border: "1px solid  #D1D1D1",
                          boxShadow: "inherit",
                          display: "flex",
                          justifyContent: "center",
                          alignItems: "center",
                          gap: "20px",
                          width: "100%",
                          margin: "0 auto",
                        }}
                      >
                        Book Now
                        <MdArrowOutward fontSize={20} />
                      </button>
                    </div>
                  </div>
                </Link>
              </SwiperSlide>
              <SwiperSlide>
                <Link href="">
                  <div className="relative bg-[#fff]  service-boxx">
                    <div className="relative  w-full inline-block z-10 iconWrapper">
                      <Image className="w-full" src={car11} alt="Icon" />
                      <div className="flex gap-[8px] flex-col">
                        <h3 className=" font-[600]">Toyota Fortuner</h3>
                        <p className="text-[#868686] text-[18px]">
                          Base Rate: ₹5000
                        </p>
                        <p className="text-[#868686]">Per Mile/KM: ₹1000</p>
                        <div className=" flex gap-3 items-center">
                          <p className="text-[#868686]">Passengers: </p>
                          <span className="flex">
                            <TiStarFullOutline color="#FFB658" />
                            <TiStarFullOutline color="#FFB658" />
                            <TiStarFullOutline color="#FFB658" />
                            <TiStarFullOutline color="#FFB658" />
                            <TiStarFullOutline color="#FFB658" />
                          </span>
                        </div>
                      </div>
                    </div>
                    <div className=" mt-5">
                      <button
                        className="btn w-full bg-transparent"
                        style={{
                          background: "transparent",
                          color: "#000",
                          border: "1px solid  #D1D1D1",
                          boxShadow: "inherit",
                          display: "flex",
                          justifyContent: "center",
                          alignItems: "center",
                          gap: "20px",
                          width: "100%",
                          margin: "0 auto",

                        }}
                      >
                        Book Now
                        <MdArrowOutward fontSize={20} />
                      </button>
                    </div>
                  </div>
                </Link>
              </SwiperSlide>
              <SwiperSlide>
                <Link href="">
                  <div className="relative bg-[#fff]  service-boxx">
                    <div className="relative  w-full inline-block z-10 iconWrapper">
                      <Image className="w-full" src={car11} alt="Icon" />
                      <div className="flex gap-[8px] flex-col">
                        <h3 className=" font-[600]">Toyota Fortuner</h3>
                        <p className="text-[#868686] text-[18px]">
                          Base Rate: ₹5000
                        </p>
                        <p className="text-[#868686]">Per Mile/KM: ₹1000</p>

                        <div className=" flex gap-3 items-center">
                          <p className="text-[#868686]">Passengers: </p>
                          <span className="flex">
                            <TiStarFullOutline color="#FFB658" />
                            <TiStarFullOutline color="#FFB658" />
                            <TiStarFullOutline color="#FFB658" />
                            <TiStarFullOutline color="#FFB658" />
                            <TiStarFullOutline color="#FFB658" />
                          </span>
                        </div>
                      </div>
                    </div>
                    <div className=" mt-5">
                      <button
                        className="btn w-full bg-transparent"
                        style={{
                          background: "transparent",
                          color: "#000",
                          border: "1px solid  #D1D1D1",
                          boxShadow: "inherit",
                          display: "flex",
                          justifyContent: "center",
                          alignItems: "center",
                          gap: "20px",
                          width: "100%",
                          margin: "0 auto",

                        }}>
                        Book Now
                        <MdArrowOutward fontSize={20} />
                      </button>
                    </div>
                  </div>
                </Link>
              </SwiperSlide>
              <SwiperSlide>
                <Link href="">
                  <div className="relative bg-[#fff]  service-boxx">
                    <div className="relative  w-full inline-block z-10 iconWrapper">
                      <Image className="w-full" src={car11} alt="Icon" />
                      <div className="flex gap-[8px] flex-col">
                        <h3 className=" font-[600]">Toyota Fortuner</h3>
                        <p className="text-[#868686] text-[18px]">
                          Base Rate: ₹5000
                        </p>
                        <p className="text-[#868686]">Per Mile/KM: ₹1000</p>

                        <div className=" flex gap-3 items-center">
                          <p className="text-[#868686]">Passengers: </p>
                          <span className="flex">
                            <TiStarFullOutline color="#FFB658" />
                            <TiStarFullOutline color="#FFB658" />
                            <TiStarFullOutline color="#FFB658" />
                            <TiStarFullOutline color="#FFB658" />
                            <TiStarFullOutline color="#FFB658" />
                          </span>
                        </div>
                      </div>
                    </div>
                    <div className=" mt-5">
                      <button
                        className="btn w-full bg-transparent"
                        style={{
                          background: "transparent",
                          color: "#000",
                          border: "1px solid  #D1D1D1",
                          boxShadow: "inherit",
                          display: "flex",
                          justifyContent: "center",
                          alignItems: "center",
                          gap: "20px",
                          width: "100%",
                          margin: "0 auto",

                        }}
                      >
                        Book Now
                        <MdArrowOutward fontSize={20} />
                      </button>
                    </div>
                  </div>
                </Link>
              </SwiperSlide>
            </div>
          </Swiper>
        </div>
        <div className="custom-navigation">
          <button onClick={handlePrev} className="prev-button bg-gray-300 p-4 rounded-full">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
              <path d="M15 18L9 12L15 6" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
            </svg>
          </button>
          <button onClick={handleNext} className="next-button bg-gray-300 p-4 rounded-full ml-2">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M9 18L15 12L9 6" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
}




