"use client";
import "./MainBanner.css";
import Image from "next/image";
import MainButton from "../MainButton/MainButton";

import React, { useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
// import AOS from "aos";
import "aos/dist/aos.css";
import { Pagination } from "swiper/modules";
import Link from "next/link";
import { Autoplay, Navigation } from "swiper/modules";
// import mainf1 from "../../../public/Images/BannerImages/bannerf1.webp";
// import mainf2 from "../../../public/Images/BannerImages/bannerf2.webp";
import mainf3 from "../../../public/Images/BannerImages/bannerf3.webp";
// import mainf4 from "../../../public/Images/BannerImages/bannerf4.webp";
import Bannersearchcard from "./Bannersearchcard";
import Marquee from "../Marquee/Marquee";

export default function MainBanner() {
  const [backgroundImage, setBackgroundImage] = useState(mainf3); // State to track background image
  const [isPaused, setIsPaused] = useState(false); // State to control autoplay pause


  const backgroundImages = [ mainf3];

  const handleSlideChange = (swiper: any) => {
    const index = swiper.realIndex; // Get the real index of the slide
    setBackgroundImage(backgroundImages[index % backgroundImages.length]); // Update the background image
  };
  useEffect(() => {
    const fetchBrands = async () => {
      try {
        const api = "https://www.prc.repair/api/sidebar-filter"; // Default endpoint for the sidebar
        // Fetch data for base endpoint ('getbrands') and store it in sessionStorage for the sidebar
        let baseData: any = JSON.parse(
          sessionStorage.getItem("baseData") || "[]"
        );
        if (baseData.length === 0) {
          try {
            const res = await fetch(api);
            if (!res.ok) {
              throw new Error(`HTTP error! status: ${res.status}`);
            }
            baseData = await res.json();
            sessionStorage.setItem("baseData", JSON.stringify(baseData)); // Save data in sessionStorage
          } catch (error) {
            console.error("Error fetching base data:", error);
          }
        }
      } catch (error) {
        console.error("Unexpected error:", error);
      }
    };

    fetchBrands();
  }, []);
  return (
    <>
      <section
        className="background-banner bg-black "
        style={{
          backgroundImage: `url(${backgroundImage.src})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className="container grid grid-cols-1 lg:grid-cols-2 lg:py-5 py-3">
          <div>
            <div className="mb-4 lg:mt-[0] mt-[0px] relative">
              <Link href="/training">
                <button
                  className="text-black px-[20px] py-[6px] border-[3px] rounded-full bg-[#B2F5EA] shadow-[5px_4px_28px_1px_#B2F5EA] animate-pulse transition-all duration-300 hover:shadow-[0_0_25px_10px_#B2F5EA] text-[18px] tracking-[1.5px] relative top-6"
                  style={{ transform: "rotate(354deg)" }} // Equivalent to -5deg (360 - 5)
                >
                  Need Training?
                </button>
              </Link>
            </div>
            <Swiper
              pagination={{ clickable: true }}
              modules={[Pagination, Autoplay, Navigation]}
              className="mySwipergk"
              spaceBetween={20}
              loop={true}
              autoplay={{
                delay: 3000,
                disableOnInteraction: false,
                pauseOnMouseEnter: true, // Automatically pause on hover
              }}
              speed={1000}
              onSlideChange={handleSlideChange} // Update background image and trigger animation
              breakpoints={{
                1024: { slidesPerView: 1 },
                1440: { slidesPerView: 1 },
                1600: { slidesPerView: 1 },
              }}
              onMouseEnter={() => setIsPaused(true)} // Pause autoplay when mouse enters
              onMouseLeave={() => setIsPaused(false)} // Resume autoplay when mouse leaves
            >
              {/* Slide 1 */}
              <SwiperSlide>
                <div className="gap-4 items-start xl:py-5">
                  <div>
                    <h1 className="2xl:text-[2.6rem] text-[1.6rem] font-bold text-white tracking-[1.5px] leading-tight bg-gradient-to-r to-black py-3 transition-opacity duration-1000">
                      Get Your Device Fixed or Learn Mobile Phone Repairs
                      <span className="text-tertiary ">
                        {" "}
                        — PRC Repair Does It All!
                      </span>
                    </h1>
                    <p className="text-primary">
                      {`PRC Repair is more than just a mobile phone repair service.
                    We’re a full-service platform dedicated to quality mobile
                    phone repairing, professional training, and community
                    support. Whether you're looking to get your iPhone or
                    smartphone repaired, purchase repair parts, or enhance your
                    repair skills through our training programs, PRC Repair has
                    it all.`}
                    </p>
                    <div className="my-4 xl:my-6">
                      <MainButton
                          color="bg-prc"
                        MainButton="Request a Quote"
                        link="/contact-us"
                      />
                    </div>
                  </div>
                </div>
              </SwiperSlide>
              {/* Slide 2 */}
              <SwiperSlide>
                <div className="gap-4 items-start xl:py-5">
                  <div>
                    <h1 className="2xl:text-[2.6rem] text-[1.6rem] font-bold text-white tracking-[1.5px] leading-tight bg-gradient-to-r to-black py-5 transition-opacity duration-1000">
                      Learn to Repair Mobile Phones Through
                      <span className="text-[#FFDAB9]">
                        {" "}
                        – Our Training Programs
                      </span>
                    </h1>
                    <p className="text-primary">
                      {
                        "Join PRC’s mobile phone repair courses and develop your skills from beginner to pro level. Master everything from basic repairs to solving complex issues, and make a real impact by helping others with their mobile repair needs!"
                      }
                    </p>
                    <div className="my-4 xl:my-10">
                      <MainButton
                        MainButton="Start Training"
                        link="/training"
                          color="bg-prc"
                      />
                    </div>
                  </div>
                </div>
              </SwiperSlide>
              {/* Slide 3 */}
              <SwiperSlide>
                <div className="gap-4 items-start xl:py-5">
                  <div>
                    <h1 className="2xl:text-[2.6rem] text-[1.6rem] font-bold text-white tracking-[1.5px] leading-tight bg-gradient-to-r to-black py-5 transition-opacity duration-1000">
                      Professional Mobile Phone Screen Refurbishing
                      <span className="text-[#39FF14]">
                        {" "}
                        – Service for Your Devices
                      </span>
                    </h1>
                    <p className="text-primary">
                      {` Restore your phone’s display to like-new condition with our expert screen refurbishing service. Get high-quality, cost-effective repairs that bring your screen back to life, saving you money and extending your device's lifespan!`}
                    </p>
                    <div className="my-4 xl:my-10">
                      <MainButton
                        MainButton="Start Repair"
                        link="/screen-refurbishing"
                       color="bg-prc"
                      />
                    </div>
                  </div>
                </div>
              </SwiperSlide>
              {/* Slide 4 */}
              <SwiperSlide>
                <div className="gap-4 items-start xl:py-5">
                  <div>
                    <h1 className="2xl:text-[2.6rem] text-[1.6rem] font-bold text-white tracking-[1.5px] leading-tight bg-gradient-to-r to-black py-5 transition-opacity duration-1000">
                      Get Back Your Lost Data with Our Expert
                      <span className="text-[#A8FFEB]">
                        {" "}
                        – Mobile Phone Recovery Service
                      </span>
                    </h1>
                    <p className="text-primary">
                      {`Recover lost or corrupted data with our expert data recovery service. Whether it’s from a damaged phone, hard drive, or storage device, we use advanced techniques to retrieve your important files, ensuring your data is safe and accessible again!`}
                    </p>
                    <div className="my-4 xl:my-10">
                      <MainButton
                        MainButton="Data Recovery"
                        link="/data-recovery"
                       color="bg-prc"
                      />
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            </Swiper>
          </div>
          <div className="flex justify-end items-center">
            <Bannersearchcard />
          </div>
        </div>
        <div
          style={{
            transform: "rotate(-1deg)",
            position: "relative",
            top: "17px",
          }}
        >
          <Marquee
            marquee_bg="bg-tertiary"
            marquee_text="text-black"
            marquee_messages=". Fast Phone Repairs: 30 Mins to Same Day, Only a Few Need Extra Time!"
          />
        </div>
      </section>
    </>
  );
}
