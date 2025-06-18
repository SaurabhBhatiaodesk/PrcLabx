import React from "react";
import Image from "next/image";
import pointer from "../../../../public/Images/tickicon.png";
import banner from "../../../../public/Images/recoveryback.png";
import MainTitle from "@/components/MainTitle/MainTitle";
import MainHeading from "@/components/ManinHeading/MainHeading";
import MainButton from "@/components/MainButton/MainButton";

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
      <div className="container lg:py-5 py-2">
        <MainHeading Heading="Data Recovery" color="var(--tertiary)" svg_stroke="var(--primary)" />
        <MainTitle Title="At PRC, we provide a seamless, transparent data recovery experience designed to keep you informed and stress-free throughout the entire process. Our commitment to communication and quality ensures you receive timely updates and support every step of the way." color="var(--primary)" />

 <div className="grid xl:grid-cols-2 grid-cols-1 lg:gap-6 md:gap-4 gap-0 lg:py-6 py-4">
  {dataHandle.map((item, index) => (
    <div className="flex items-start gap-3" key={index}>
      <Image src={item.icon} alt="pointer" className="w-6 h-6 mt-1" />
      <p className="text-[14px] 2xl:text-[18px] leading-relaxed text-primary">
        <span className="text-lg 2xl:text-xl font-semibold text-tertiary">
          {item.title}:
        </span>{" "}
        {item.description}
      </p>
    </div>
  ))}
 
</div>
 <div className="flex justify-center items-center">
  <MainButton MainButton="Read More"  color="bg-prc" link="/data-recovery"/>

  </div>

      </div>
      <div>


      </div>

    </div>
  );
};

export default DataRecovery;
