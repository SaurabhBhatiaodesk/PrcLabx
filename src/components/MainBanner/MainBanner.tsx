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
import mainf1 from "../../../public/Images/BannerImages/bone.webp";
import mainf2 from "../../../public/Images/BannerImages/bthree.webp";
import mainf3 from "../../../public/Images/BannerImages/btwo.webp";
import mainf4 from "../../../public/Images/BannerImages/bfour.webp";

export default function MainBanner() {
  const [backgroundImage, setBackgroundImage] = useState(mainf1); // State to track background image
  const [isPaused, setIsPaused] = useState(false); // State to control autoplay pause



  const Paginationback = ["#FF0000", "#FF9966", "#6DD5ED", "#A044FF"];
  const backgroundImages = [mainf1, mainf2, mainf3, mainf4];

  const handleSlideChange = (swiper: any) => {
    const index = swiper.realIndex; // Get the real index of the slide
    setBackgroundImage(backgroundImages[index % backgroundImages.length]); // Update the background image
  };

  return (
    <>
    
      <section
        className="background-banner"
        style={{
          backgroundImage: `url(${backgroundImage.src})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className="container">
          <div className="mb-4 lg:mt-[0] mt-[0px] relative">
            <Link href="/training">
              <button
                className="px-[20px] py-[6px] border-[2px] rounded-full bg-[rgba(157,156,152,0.83)] shadow-[5px_4px_28px_1px_#9d9c98]
    animate-pulse transition-all duration-300 hover:shadow-[0_0_25px_10px_rgba(255,223,101,0.8)] text-[18px] tracking-[1.5px] relative top-6"
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
              <div className="grid lg:grid-cols-2 grid-cols-1 gap-4 items-start xl:py-5">
                <div>
                  <h1 className="2xl:text-[2.6rem] text-[1.6rem] font-bold text-white tracking-[1.5px] leading-tight bg-gradient-to-r to-black py-5 transition-opacity duration-1000">
                    Get Your Device Fixed or Learn Mobile Phone Repairs
                    <span className="text-[#EDE574]">
                      {" "}
                      — LabX Repair Does It All!
                    </span>
                  </h1>
                  <p>
                    {`LabX Repair is more than just a mobile phone repair service.
                    We’re a full-service platform dedicated to quality mobile
                    phone repairing, professional training, and community
                    support. Whether you're looking to get your iPhone or
                    smartphone repaired, purchase repair parts, or enhance your
                    repair skills through our training programs, LabX Repair has
                    it all.`}
                  </p>
                  <div className="my-4 xl:my-10">
                    <MainButton
                      MainButton="Request a Quote"
                      link="/contact-us"
                    />
                  </div>
                </div>
                <div className="w-full">
                  <Image
                    className="w-full 2xl:h-[550px] xl:h-[400px] object-contain"
                    src="https://labxbackend.s3.us-east-2.amazonaws.com/Group+1707480694.webp"
                    width={500}
                    height={500}
                    alt="Banner"
                  />
                </div>
              </div>
            </SwiperSlide>
            {/* Slide 2 */}
            <SwiperSlide>
              <div className="grid lg:grid-cols-2 grid-cols-1 gap-4 items-start xl:py-5">
                <div>
                  <h1 className="2xl:text-[2.6rem] text-[1.6rem] font-bold text-white tracking-[1.5px] leading-tight bg-gradient-to-r to-black py-5 transition-opacity duration-1000">
                    Learn to Repair Mobile Phones Through
                    <span className="text-[#6DD5ED]">
                      {" "}
                      – Our Training Programs
                    </span>
                  </h1>
                  <p>
                    {
                      "Join LabX’s mobile phone repair courses and develop your skills from beginner to pro level. Master everything from basic repairs to solving complex issues, and make a real impact by helping others with their mobile repair needs!"
                    }
                  </p>
                  <div className="my-4 xl:my-10">
                    <MainButton
                      MainButton="Start Training"
                      link="/training"
                      color="bg-[#6DD5ED]"
                    />
                  </div>
                </div>
                <div className="w-full">
                  <Image
                    className="w-full 2xl:h-[550px] xl:h-[400px] object-contain"
                    src="https://labxbackend.s3.us-east-2.amazonaws.com/Group+1707480639.webp"
                    width={500}
                    height={500}
                    alt="Training and Repairs"
                  />
                </div>
              </div>
            </SwiperSlide>
            {/* Slide 3 */}
            <SwiperSlide>
              <div className="grid lg:grid-cols-2 grid-cols-1 gap-4 items-start xl:py-5">
                <div>
                  <h1 className="2xl:text-[2.6rem] text-[1.6rem] font-bold text-white tracking-[1.5px] leading-tight bg-gradient-to-r to-black py-5 transition-opacity duration-1000">
                    Professional Mobile Phone Screen Refurbishing
                    <span className="text-[#FF9966]">
                      {" "}
                      – Service for Your Devices
                    </span>
                  </h1>
                  <p>
                    {` Restore your phone’s display to like-new condition with our expert screen refurbishing service. Get high-quality, cost-effective repairs that bring your screen back to life, saving you money and extending your device's lifespan!`}
                  </p>
                  <div className="my-4 xl:my-10">
                    <MainButton
                      MainButton="Start Repair"
                      link="/screen-refurbishing"
                      color="bg-[#FF9966]"
                    />
                  </div>
                </div>
                <div className="w-full">
                  <Image
                    className="w-full 2xl:h-[550px] xl:h-[400px] object-contain"
                    src="https://labxbackend.s3.us-east-2.amazonaws.com/Group+1707480640.webp"
                    width={500}
                    height={500}
                    alt="Quick Repairs"
                  />
                </div>
              </div>
            </SwiperSlide>
            {/* Slide 4 */}
            <SwiperSlide>
              <div className="grid lg:grid-cols-2 grid-cols-1 gap-4 items-start xl:py-5">
                <div>
                  <h1 className="2xl:text-[2.6rem] text-[1.6rem] font-bold text-white tracking-[1.5px] leading-tight bg-gradient-to-r to-black py-5 transition-opacity duration-1000">
                    Get Back Your Lost Data with Our Expert
                    <span className="text-[#A044FF]">
                      {" "}
                      – Mobile Phone Recovery Service
                    </span>
                  </h1>
                  <p>
                    {`Recover lost or corrupted data with our expert data recovery service. Whether it’s from a damaged phone, hard drive, or storage device, we use advanced techniques to retrieve your important files, ensuring your data is safe and accessible again!`}
                  </p>
                  <div className="my-4 xl:my-10">
                    <MainButton
                      MainButton="Data Recovery"
                      link="/data-recovery"
                      color="bg-[#A044FF]"
                    />
                  </div>
                </div>
                <div className="w-full">
                  <Image
                    className="w-full 2xl:h-[550px] xl:h-[400px] object-contain"
                    src="https://labxbackend.s3.us-east-2.amazonaws.com/Group+1707480638.webp"
                    width={500}
                    height={500}
                    alt="Fix Your Device"
                  />
                </div>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
      </section>
    </>
  );
}
