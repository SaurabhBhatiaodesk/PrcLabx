"use client"
import React from "react";
import Image from "next/image";
import checkmark from "../../../public/Images/icons/checkmark.svg";
import moniter from "../../../public/Images/icons/monitor.svg";
import arrowright from  "../../../public/Images/icons/arrowright.svg";
import clockbig from  "../../../public/Images/icons/clockbig.svg"
import Line from "../../../public/Images/about/leap.svg";
import { usePathname } from "next/navigation";

interface TraningWillLearn {
  border?: string; // Optional border color
  color?:string;
  title: string;
  paramtitle1?: string;
  paramtitle2?: string;
  paramtitle3?: string;
  param1: string;
  param2: string;
  param3: string;
  Course: string;
  Courseformate1: string;
  Courseformate2: string;
  Courseformate3: string;
  Courseformate4: string;
}

function TraningWillLearn({
  border = "#8c8c8c96", // Default border color
  color,
  title,
  param1,
  param2,
  param3,
  paramtitle1,
  paramtitle2,
  paramtitle3,
  Course,
  Courseformate1,
  Courseformate2,
  Courseformate3,
  Courseformate4,
}: TraningWillLearn) {
  const pathName = usePathname();
  
  return (
    <>
      <div className="container py-4 lg:py-[30px] space-y-2 lg:space-y-4">
        <h2 className="text-center">{title}</h2>
        <Image
          height="300"
          width="500"
          src={Line}
          alt=" labx repair "
          className="pb-3 m-auto"
        />
        <div className="grid xl:grid-cols-[6fr_2fr] lg:grid-cols-2 gap-4">
          <div>
            <div>
              <div className="flex gap-2 items-start">
                <Image src={checkmark} alt=" labx repair " />
                <p>
                  <strong className="text-[22px] text-[#EDE574]">{paramtitle1} :</strong> {param1}
                </p>
              </div>
              <div className="flex gap-2 items-start">
                <Image src={checkmark} alt=" labx repair " />
                <p>
                  <strong className="text-[22px] text-[#EDE574]">{paramtitle2} :</strong> {param2}
                </p>
              </div>
              <div className="flex gap-2 items-start">
                <Image src={checkmark} alt=" labx repair " />
                <p>
                  <strong className="text-[22px] text-[#EDE574]">{paramtitle3} :</strong> {param3}
                </p>
              </div>
            </div>
          </div>
          <div className="grid gap-3 items-center">
            <div
              className="p-3 rounded-[15px] items-center"
              style={{ border: `2px solid ${border}` }} // Apply dynamic border here
            >
              <Image src={moniter} alt=" labx repair " />
              <h3 className="mb-1">{Course}</h3>
              <ul className="space-y-3">
                <div className="flex gap-1">
                  <Image src={arrowright} alt=" labx repair " />
                  <li className="text-sm lg:text-base">{Courseformate1}</li>
                </div>

                <div className="flex gap-1">
                  <Image src={arrowright} alt=" labx repair " />
                  <li className="text-sm lg:text-base">{Courseformate2}</li>
                </div>

                <div className="flex gap-1">
                  <Image src={arrowright} alt=" labx repair " />
                  <li className="text-sm lg:text-base">{Courseformate3}</li>
                </div>

            
                {
                  pathName === '/beginner-phone-repair-course' && 
                  <div className="flex gap-1">
                  <Image src={arrowright} alt=" labx repair " />
                  <li className="text-sm lg:text-base animate-zoomInOut "  style={{ color: `${color}` }}>
                    {Courseformate4}
                  </li>
                </div>
                }
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default TraningWillLearn;
