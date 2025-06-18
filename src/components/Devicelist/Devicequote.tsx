"use client";
import React, { useEffect, useState } from "react";
import quote1 from "../../../public/Images/quoteimg1.png";
import quote2 from "../../../public/Images/quoteimg2.png";
import quote3 from "../../../public/Images/quoteimg3.png";
import quote4 from "../../../public/Images/quoteimg4.png";
import Image from "next/image";
import Link from "next/link";
import axios from "axios";
import MainHeading from "../ManinHeading/MainHeading";

interface BrandData {
  alias: string;
  image: string;
  title: string;
}

export default function Devicequote() {
  const [brandData, setBrandData] = useState<BrandData[]>([]);
  const [showAll, setShowAll] = useState(false);

  // Fetch data from the API on component mount
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "https://www.prc.repair/api/getbrands"
        );
        setBrandData(response.data);
      } catch (error) {
        console.error("Error fetching brand data:", error);
      }
    };

    fetchData();
  }, []);

  const slugify = (text: string): string =>
    text
      .toLowerCase()
      .replace(/\s+/g, "-") // Replace spaces with dash
      .replace(/[^\w-]+/g, ""); // Remove non-word chars

  return (
    <div className="lg:py-10 p-0 bg-white">
      <div className="container">
        <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 md:mx-[4%] py-3">
          <div className="flex items-center lg:justify-center py-3 lg:py-0">
            <Image
              src={quote1}
              alt=""
              width={1000}
              height={300}
              className="w-[70px] mx-3"
            />
            <p className="text-black lg:text-[18px] text-sm  font-semibold leading-normal m-0">
              30 Minute <br />
              Express Repair
            </p>
          </div>
          <div className="flex items-center lg:justify-center py-3 lg:py-0">
            <Image
              src={quote2}
              alt=""
              width={1000}
              height={300}
              className="w-[70px] mx-3"
            />
            <p className="text-black lg:text-[18px] text-sm  font-semibold leading-normal m-0">
              On-Site
              <br />
              (No Outsourcing)
            </p>
          </div>
          <div className="flex items-center lg:justify-center py-3 lg:py-0">
            <Image
              src={quote3}
              alt=""
              width={1000}
              height={300}
              className="w-[70px] mx-3"
            />
            <p className="text-black lg:text-[18px] text-sm  font-semibold leading-normal m-0">
              After Pay / Zip Pay <br />
              Available
            </p>
          </div>
          <div className="flex items-center lg:justify-center py-3 lg:py-0">
            <Image
              src={quote4}
              alt=""
              width={1000}
              height={300}
              className="w-[70px] mx-3 rounded-[10px]"
            />
            <p className="text-black lg:text-[18px] text-sm  font-semibold leading-normal m-0">
              Lowest Price <br />
              Guaranteed
            </p>
          </div>
        </div>
      </div>
      <div className="container lg:pt-12 md:p-8 ">
        <div className="flex items-center justify-between lg:flex-row flex-col tracking-normal">
          <h2 className="text-prc text-center md:text-left py-2">
            Click to Get an Instant Quote Now!
          </h2>

          <Link href="/brands" className="hidden md:block">
            <button className="flex uppercase bg-[#EF0000] w-max h-max text-white text-[18px] py-[8px] px-[15px] rounded-3xl">
              Visit store
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                <path d="M5 12H19" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                <path d="M12 5L19 12L12 19" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
              </svg>
            </button>
          </Link>
        </div>
        <div
          className={`pt-5 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 2xl:grid-cols-7 gap-3`}
        >
          {brandData
            .slice(0, showAll ? brandData.length : 14)
            .map((data, index) => (
              <Link key={index} href={`/brands/${slugify(data.alias)}`}>
                <div className="border-[2px] group border-[#16161680] cursor-pointer rounded-2xl flex items-center justify-center md:p-4 p-2 relative overflow-hidden">
                  <div className="relative flex justify-center items-center h-full w-full">
                    {/* Overlay */}
                    <div className="absolute inset-0 bg-alpha opacity-0 group-hover:opacity-40 transition-opacity duration-500 rounded-2xl z-10" />

                    <img
                      src={data.image}
                      alt="device_image"
                      width={100}
                      height={100}
                      className="rounded-2xl w-full h-[80px] object-contain mix-blend-darken group-hover:scale-95 transition-all duration-700 relative z-20"
                    />
                  </div>
                </div>

              </Link>



            ))}

        </div>
        <div className="flex justify-center my-4">
          <Link href="/brands" className="block md:hidden">
            <button className="flex uppercase bg-[#EF0000] w-max h-max text-white text-[18px] py-[8px] px-[15px] rounded-3xl">
              Visit store
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                <path d="M5 12H19" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                <path d="M12 5L19 12L12 19" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
              </svg>
            </button>

          </Link>
        </div>
      </div>
    </div>
  );
}
