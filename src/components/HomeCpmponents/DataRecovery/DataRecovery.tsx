import React from "react";
import Image from "next/image";
import pointer from "../../../../public/Images/tickicon.png";
import banner from "../../../../public/Images/datarecovery.webp";
import MainTitle from "@/components/MainTitle/MainTitle";
import MainHeading from "@/components/ManinHeading/MainHeading";

const DataRecovery = () => {
  return (
    <div
      className="bg-no-repeat bg-cover"
      style={{ backgroundImage: `url(${banner.src})` }} // Using .src here
    >
      <div className="container lg:py-5 py-4">
        <MainHeading Heading="Data Recovery" color="var(--tertiary)" svg_stroke="var(--primary)" />
        <MainTitle Title="At LabX, we provide a seamless, transparent data recovery experience designed to keep you informed and stress-free throughout the entire process. Our commitment to communication and quality ensures you receive timely updates and support every step of the way." color="var(--primary)" />

        <div className="grid xl:grid-cols-2 grid-cols-1 gap-4 lg:py-10 py-3">
          <div>
            <div className="flex-col gap-2 flex">
              <div className="flex items-start gap-3">
                <Image src={pointer} alt="pointer" />
                <div>
                  <span className="text-lg 2xl:text-xl pb-[2px] text-tertiary font-semibold">
                    Data from Dead or No-Power Devices
                  </span>
                  <p className="text-[14px] 2xl:text-[18px] text-primary">
                    We can recover data from devices that won’t turn on due to hardware damage, shock, or water exposure.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Image src={pointer} alt="pointer" />
                <div>
                  <span className="text-lg 2xl:text-xl pb-[2px] text-tertiary font-semibold">
                    Corrupt Operating Systems
                  </span>
                  <p className="text-[14px] 2xl:text-[18px] text-primary">
                    We handle cases of OS corruption, which often makes a device unbootable, and recover data like contacts, texts, photos, and videos.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Image src={pointer} alt="pointer" />
                <div>
                  <span className="text-lg 2xl:text-xl pb-[2px] text-tertiary font-semibold">
                    Failed or Broken Logic Boards
                  </span>
                  <p className="text-[14px] 2xl:text-[18px] text-primary">
                    Our team specializes in recovering data from devices with broken or failed logic boards, using advanced techniques.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div>
            <div className="flex-col gap-2 flex">
              <div className="flex items-start gap-3">
                <Image src={pointer} alt="pointer" />
                <div>
                  <span className="text-lg 2xl:text-xl pb-[2px] text-tertiary font-semibold">
                    Physically Damaged Devices
                  </span>
                  <p className="text-[14px] 2xl:text-[18px] text-primary">
                    Whether your phone has been dropped, crushed, or exposed to liquids, we can often retrieve your valuable files.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Image src={pointer} alt="pointer" />
                <div>
                  <span className="text-lg 2xl:text-xl pb-[2px] text-tertiary font-semibold">
                    Damaged Storage Chips
                  </span>
                  <p className="text-[14px] 2xl:text-[18px] text-primary">
                    We can recover data from partially damaged eMMC or UFS chips, the key storage components in mobile devices.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DataRecovery;
