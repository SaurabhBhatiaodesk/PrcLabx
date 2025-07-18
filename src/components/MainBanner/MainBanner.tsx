"use client";
import "./MainBanner.css";
import Image from "next/image";
import MainButton from "../MainButton/MainButton";
import React, { useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "aos/dist/aos.css";
import { Pagination } from "swiper/modules";
import Link from "next/link";
import { Autoplay, Navigation } from "swiper/modules";
import Bannersearchcard from "./Bannersearchcard";
import Marquee from "../Marquee/Marquee";
import { useAppDispatch } from "../../app/redux/hooks";
import { setUiFlag } from "../../app/redux/slice";

// Import the bannerSlides data from the JS file
import bannerSlides from "./bannerSlides";

export default function MainBanner() {
  const dispatch = useAppDispatch();
  const [backgroundImage, setBackgroundImage] = useState(bannerSlides[0].backgroundImage); // Initial background image
  const [isPaused, setIsPaused] = useState(false); // State to control autoplay pause

  // Handle slide change in the swiper and update background image accordingly
  const handleSlideChange = (swiper: any) => {
    const index = swiper.realIndex; // Get the real index of the slide
    setBackgroundImage(bannerSlides[index % bannerSlides.length].backgroundImage); // Update the background image
  };
  
  // useEffect(() => {
  //   if (hasFetchedData.current) return;
  //   hasFetchedData.current = true;
  //   const fetchBrands = async () => {
  //     try {
  //       const api = "https://www.prc.repair/api/sidebar-filter"; // Default endpoint for the sidebar
  //       // Fetch data for base endpoint ('getbrands') and store it in sessionStorage for the sidebar
  //       let baseData: any = JSON.parse(
  //         sessionStorage.getItem("baseData") || "[]"
  //       );
  //       if (baseData.length === 0) {
  //         try {
  //           const res = await fetch(api);
  //           if (!res.ok) {
  //             throw new Error(`HTTP error! status: ${res.status}`);
  //           }
  //           baseData = await res.json();
  //           sessionStorage.setItem("baseData", JSON.stringify(baseData)); // Save data in sessionStorage
  //           dispatch(setUiFlag(false));
  //         } catch (error) {
  //           console.error("Error fetching base data:", error);
  //         }
  //       }
  //     } catch (error) {
  //       console.error("Unexpected error:", error);
  //     }
  //   };

  //   fetchBrands();
  // }, []);

  return (
 <>
      <section
        className="background-banner bg-black "
        style={{
          backgroundImage: `url(${backgroundImage})`, // Dynamically set background image
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className="container grid grid-cols-1 lg:grid-cols-2 lg:py-5 py-3">
          <div>
            {/* Training Button Section */}
            <div className="mb-4 lg:mt-[0] mt-[0px] relative ">
              <Link href="/training">
                <button
                  className="text-black px-[15px] py-[6px] border-[1px] rounded-full bg-[#B2F5EA] shadow-[5px_4px_28px_1px_#B2F5EA] animate-pulse transition-all duration-300 hover:shadow-[0_0_25px_10px_#B2F5EA] text-base tracking-[1.5px] relative top-6 md:m-0 mb-7"
                  style={{ transform: "rotate(354deg)" }} // Rotate the button a little
                >
                  Need Training?
                </button>
              </Link>
            </div>
            {/* Swiper Component to show slides */}
            <Swiper
              pagination={{ clickable: true }}
              modules={[Autoplay, Navigation]}
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
              {/* Map through each slide and display it */}
              {bannerSlides.map((slide, index) => (
                <SwiperSlide key={index}>
                  <div className="gap-4 items-start xl:pt-5">
                    <div>
                      <h1 className="2xl:text-[2rem] text-[1.6rem] font-bold text-white tracking-[1.5px] leading-tight bg-gradient-to-r to-black pt-3 transition-opacity duration-1000">
                        {slide.heading}
                        <span className={slide.highlightColor}>
                          {" "}
                          {slide.highlight}
                        </span>
                      </h1>
                      <p className="text-primary">{slide.description}</p>
                      <div className="my-4 xl:my-10">
                        <MainButton
                          MainButton={slide.button.text}
                          link={slide.button.link}
                          color="bg-prc"
                        />
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
          {/* Right side content section */}
          <div className="flex justify-end items-center">
            <Bannersearchcard />
          </div>
        </div>
        {/* Marquee section for displaying messages */}
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
            marquee_messages="Fast Phone Repairs: 30 Mins to Same Day, Only a Few Need Extra Time!."
          />
        </div>
      </section>
    </>
  );
}
