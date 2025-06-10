import React from "react";
import Image from "next/image";
import pointer from "../../../../public/Images/tickicon.png";
import banner from "../../../../public/Images/datarecovery.webp";
import MainTitle from "@/components/MainTitle/MainTitle";
import MainHeading from "@/components/ManinHeading/MainHeading";

const DataRecovery = () => {

  const dataHandle = [
    {
      icon: pointer,
      title: "Data from Dead or No-Power Devices",
      description: "We can recover data from devices that won’t turn on due to hardware damage, shock, or water exposure."
    },
    {
      icon: pointer,
      title: "Corrupt Operating Systems",
      description: "We handle cases of OS corruption, which often makes a device unbootable, and recover data like contacts, texts, photos, and videos."
    }, {
      icon: pointer,
      title: "Failed or Broken Logic Boards",
      description: "Our team specializes in recovering data from devices with broken or failed logic boards, using advanced techniques."
    }, {
      icon: pointer,
      title: "Physically Damaged Devices",
      description: "Whether your phone has been dropped, crushed, or exposed to liquids, we can often retrieve your valuable files."
    }, {
      icon: pointer,
      title: "Damaged Storage Chips",
      description: "We can recover data from partially damaged eMMC or UFS chips, the key storage components in mobile devices."
    },
    {
      icon: pointer,
      title: "Damaged Storage Chips",
      description: "We can recover data from partially damaged eMMC or UFS chips, the key storage components in mobile devices."
    },
  ]
  return (
    <div
      className="bg-no-repeat bg-cover"
      style={{ backgroundImage: `url(${banner.src})` }} // Using .src here
    >
      <div className="container lg:py-5 py-4">
        <MainHeading Heading="Data Recovery" color="var(--tertiary)" svg_stroke="var(--primary)" />
        <MainTitle Title="At LabX, we provide a seamless, transparent data recovery experience designed to keep you informed and stress-free throughout the entire process. Our commitment to communication and quality ensures you receive timely updates and support every step of the way." color="var(--primary)" />

        <div className="grid xl:grid-cols-2 grid-cols-1 gap-4 lg:py-10 py-3">


          {dataHandle.map((item, index) => (
            <div className="flex items-start gap-3" key={index}>
              <Image src={item.icon} alt="pointer" />
              <div>
                <span className="text-lg 2xl:text-xl pb-[2px] text-tertiary font-semibold">
                  {item.title}
                </span>
                <p className="text-[14px] 2xl:text-[18px] text-primary">
                  {item.description}
                </p>
              </div>
            </div>
          ))},




        </div>
      </div>
      <div>


      </div>

    </div>
  );
};

export default DataRecovery;
