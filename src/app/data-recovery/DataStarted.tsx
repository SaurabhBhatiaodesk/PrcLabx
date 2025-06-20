import React from "react";
import Image from "next/image";
import Link from "next/link";
import HowtoGetStarted from "../../../public/Images/HowtoGetStarted.png";
import pointer from "../../../public/Images/icons/pointing-right 1.svg";
import MainButton from "@/components/MainButton/MainButton";
import MainHeading from "@/components/ManinHeading/MainHeading";

const DataStarted = () => {
  return (
    <>
      <section className="container py-8 lg:py-4">
        <MainHeading Heading="How to Get Started" svg_stroke="var(--alpha)" color="var(--prc)"/>
        <div className="grid lg:grid-cols-2 grid-cols-1 gap-10  lg:p-4 p-1 items-center">
          <div>
            {" "}
            <Image src={HowtoGetStarted} className=" h-auto object-cover rounded-[20px] " alt=" PRC repair "></Image>
          </div>
          <div>
            <div className="flex-col flex">
            
              <div className="flex items-start gap-3">
                <div className=" flex items-start gap-2">
<Image src={pointer} alt="" className=" w-8 "/>
                  <p className="text-secondary">
                  Visit our <Link className="font-semibold text-prc" href="/mail-in-repair">Mail-In Repair</Link> page to fill out the submission form and include details about your device and the issue.
                  </p>
                  
                </div>
              </div>
              <div className="flex items-start gap-3">

                     <div className="flex items-start gap-3">
                  <Image src={pointer} alt="" className=" w-8 "/> <p className=" text-secondary">Ship your device to PRC or request a shipping label during form submission.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3">
             <Image src={pointer} alt="" className=" w-8 "/>

              
                <p className=" text-secondary">
                Relax while we handle the rest!
                  </p>
             
              </div>
            </div>
            <MainButton MainButton="START REPAIR" link="/mail-in-repair" color="bg-prc"/>
          </div>
        </div>
      </section>
    </>
  );
};

export default DataStarted;
