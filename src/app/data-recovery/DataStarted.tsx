import React from "react";
import Image from "next/image";
import Link from "next/link";
import HowtoGetStarted from "../../../public/Images/HowtoGetStarted.png";
import pointer from "../../../public/Images/tickicon.png";
import MainButton from "@/components/MainButton/MainButton";
import MainHeading from "@/components/ManinHeading/MainHeading";
// import pointer from "../../../";

const DataStarted = () => {
  return (
    <>
      <section className="container py-8 lg:py-4">
        <MainHeading Heading="How to Get Started"/>
        <div className="grid lg:grid-cols-2 grid-cols-1 gap-10  lg:p-4 p-1 items-center">
          <div>
            {" "}
            <Image src={HowtoGetStarted} className=" h-auto object-cover rounded-[20px] " alt=" labx repair "></Image>
          </div>
          <div>
            <div className="flex-col flex">
            
              <div className="flex items-start gap-3">
              <Image width={24} height={24} src={pointer} alt="pointer" />
                <div className="">
                  <p className="text-secondary">
                  Visit our <Link className="font-semibold" href="/mail-in-repair">Mail-In Repair</Link> page to fill out the submission form and include details about your device and the issue.
                  </p>
                  
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Image width={24} height={24} src={pointer} alt="pointer" />

                <div className="">
                <p className=" text-secondary">
                Ship your device to LabX or request a shipping label during form submission.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3">
              <Image width={24} height={24} src={pointer} alt="pointer" />

                <div className="">
                <p className=" text-secondary">
                Relax while we handle the rest!
                  </p>
                </div>
              </div>
            </div>
            <MainButton MainButton="START REPAIR" link="/mail-in-repair"/>
          </div>
        </div>
      </section>
    </>
  );
};

export default DataStarted;
