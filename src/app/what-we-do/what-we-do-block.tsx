import React from "react";
import Breadcrumb from "@/components/Breadcrumb/Breadcrumb";
import MainButton from "@/components/MainButton/MainButton";
import Image from "next/image";
import Shop1 from "../../../public/Images/shop1.png";
import Shop2 from "../../../public/Images/shop2.png";
import Shop3 from "../../../public/Images/shop3.png";
import Shop4 from "../../../public/Images/shop4.png";
import Shop5 from "../../../public/Images/shop5.png";
import Shop6 from "../../../public/Images/shop6.png";
import Shop7 from "../../../public/Images/shop7.png";
import Shop8 from "../../../public/Images/shop8.png";
import Shop9 from "../../../public/Images/shop9.png";
import YTube1 from "../../../public/Images/youtube1.png";
import YTube2 from "../../../public/Images/youtube2.png";
import Link from "next/link";
const WhatWeDo = () => {
  return (
    <>
      <div className="ship-device">
        <div className="container">
          <div className="text-center py-5 my-5">
            <h1 className="text-3xl font-bold mb-4 relative w-fit m-auto aos-init aos-animate">
              Ship Your Device To Us
            </h1>
            <svg
              className="ship-svg-ico relative top-full left-0"
              width="100%"
              height="20"
              viewBox="0 0 100 30"
              xmlns="http://www.w3.org/2000/svg"
              preserveAspectRatio="none"
            >
              <path
                d="M0 15 Q50 0 100 15"
                fill="none"
                stroke="#fff563"
                stroke-width="6"
              ></path>
            </svg>
            <p>
              Please securely package your phone and ship it to us at the
              designated address. Make sure to include any required
              documentation for efficient processing.
            </p>
          </div>
          <div className="max-container grid grid-cols-1 lg:grid-cols-3 xl:grid-cols-3 md:grid-cols-2 justify-center text-center gap-4 mb-2">
           <Link href='/training'>
            <div className="shop-block  rounded-[15px] border-2 shadow-lg shadow-[#ede57456] transition-shadow duration-300 flex flex-col justify-between hover:shadow-[0_0_20px_10px_#ede57456]">
              <Image src={Shop1} alt=" labx repair " />
              <h1 className="mb-4 mt-4 custom-absolute">Training</h1>
            </div>
            </Link>
           <Link href='/mail-in-repair'>
            <div className="shop-block  rounded-[15px] border-2 shadow-lg shadow-[#ede57456] transition-shadow duration-300 flex flex-col justify-between hover:shadow-[0_0_20px_10px_#ede57456]">
              <Image src={Shop2} alt=" labx repair " />
              <h1 className="mb-4 mt-4 custom-absolute">Mail in Repair</h1>
            </div>
            </Link>
            <Link href='/data-recovery'> 
            <div className="shop-block  rounded-[15px] border-2 shadow-lg shadow-[#ede57456] transition-shadow duration-300 flex flex-col justify-between hover:shadow-[0_0_20px_10px_#ede57456]">
              <Image src={Shop3} alt=" labx repair " />
              <h1 className="mb-4 mt-4 custom-absolute">Data Recovery</h1>
            </div>
            </Link>
            <Link href='/screen-refurbishing'>  
            <div className="shop-block  rounded-[15px] border-2 shadow-lg shadow-[#ede57456] transition-shadow duration-300 flex flex-col justify-between hover:shadow-[0_0_20px_10px_#ede57456]">
              <Image src={Shop4} alt=" labx repair " />
              <h1 className="mb-4 mt-4 custom-absolute">Screen Refurbishing</h1>
            </div>
            </Link>
            <Link href='/b2b-repair-services'>   
            <div className="shop-block  rounded-[15px] border-2 shadow-lg shadow-[#ede57456] transition-shadow duration-300 flex flex-col justify-between hover:shadow-[0_0_20px_10px_#ede57456]">
              <Image src={Shop5} alt=" labx repair " />
              <h1 className="mb-4 mt-4 custom-absolute">B2B Repair</h1>
            </div>
            </Link>
            <Link href='/repair-solutions'>    
            <div className="shop-block  rounded-[15px] border-2 shadow-lg shadow-[#ede57456] transition-shadow duration-300 flex flex-col justify-between hover:shadow-[0_0_20px_10px_#ede57456]">
              <Image src={Shop6} alt=" labx repair " />
              <h1 className="mb-4 mt-4 custom-absolute">Repair Solutions</h1>
            </div>
            </Link>
            <Link href='/coming-soon'>    
            <div className="shop-block  rounded-[15px] border-2 shadow-lg shadow-[#ede57456] transition-shadow duration-300 flex flex-col justify-between hover:shadow-[0_0_20px_10px_#ede57456]">
              <Image src={Shop7} alt=" labx repair " />
              <h1 className="mb-4 mt-4 custom-absolute">Parts Store</h1>
            </div>
            </Link>
            <Link href='/coming-soon'>    
            <div className="shop-block  rounded-[15px] border-2 shadow-lg shadow-[#ede57456] transition-shadow duration-300 flex flex-col justify-between hover:shadow-[0_0_20px_10px_#ede57456]">
              <Image src={Shop8} alt=" labx repair " />
              <h1 className="mb-4 mt-4 custom-absolute">Repair Form</h1>
            </div>
            </Link>

            {/* <div className="shop-block  rounded-[15px] border-2 shadow-lg shadow-[#ede57456] transition-shadow duration-300 flex flex-col justify-between hover:shadow-[0_0_20px_10px_#ede57456]">
              <Image src={Shop8} alt=" labx repair " />
              <h1 className="mb-4 mt-4 custom-absolute">Training</h1>
            </div> */}
          </div>
        </div>
      </div>
    </>
  );
};

export default WhatWeDo;
