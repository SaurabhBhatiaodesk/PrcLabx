"use client";
import Image from "next/image";

import React from "react";

import "swiper/css";
import "swiper/css/pagination";
// import AOS from "aos";
import "aos/dist/aos.css";
import { Pagination } from "swiper/modules";
import Link from "next/link";

import PSBanner from "../../../public/Images/BannerImages/PS5.webp";
import MainButton from "@/components/MainButton/MainButton";

export default function PS5Banner() {
  return (
    <>
      <section
        className="background-banner  h-[50vh]"
        style={{
          backgroundImage: `url(${PSBanner.src})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className="container">
          {/* Slide 1 */}

          <div className="grid lg:grid-cols-2 grid-cols-1 gap-4 items-center xl:py-5">
            <div>
              <div className="md:mb-16 mb-11 lg:mt-[0] mt-[0px] relative">
                <Link href="/training">
                  <button
                    className="px-[20px] py-[6px] border-[2px] rounded-full bg-[rgba(157,156,152,0.83)] shadow-[5px_4px_28px_1px_#9d9c98]
                    animate-pulse transition-all duration-300 hover:shadow-[0_0_25px_10px_rgba(255,223,101,0.8)] md:text-[18px] text-[12px] tracking-[1.5px] relative top-6"
                    style={{ transform: "rotate(354deg)" }} // Equivalent to -5deg (360 - 5)
                  >
                    WHEN YOU NEED IT FIXED, NOW
                  </button>
                </Link>
              </div>
              <h1 className="2xl:text-[2.6rem] text-[1.6rem] font-bold text-white tracking-[1.5px] leading-tight bg-gradient-to-r to-black py-5 transition-opacity duration-1000">
                <span className="text-[#EDE574]">PS5 </span>
                REPAIRS
              </h1>
              <p>
                Is your PlayStation 5 experiencing issues? Whether it&apos;s
                <span className="font-medium text-[#EDE574] underline">
                  {" "}
                  overheating, crashing, or hardware failure,
                </span>
                we&apos;ve got you covered with professional PS5 repair
                services. Our skilled technicians specialize in diagnosing and
                fixing all PS5 problems, ensuring you get back to your gaming
                without delays.
              </p>
              <div className="my-4 xl:my-10">
                <MainButton MainButton="View Pricing" link="/price" />
              </div>
            </div>
            <div className="w-full"></div>
          </div>
        </div>
      </section>
    </>
  );
}
