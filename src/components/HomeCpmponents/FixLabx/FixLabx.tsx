import React from "react";
import Image from "next/image";
import owoner from "../../../../public/Images/Home/lab-x-owner.svg";
import MainButton from "@/components/MainButton/MainButton";
import "./FixLabx.css";
import bharat from "../../../../public/Images/ownerimg.webp";
import banner from "../../../../public/Images/ownerbanner.png"
// import bharatmobile from "../../../../public/Images/Home/bharat 1.svg";
// const bharat = "https://labxbackend.s3.us-east-2.amazonaws.com/Vector+(3).webp";

const FixLabx = () => {
  return (
    // <div>FixLabx LabX Mobile Tech</div>
    <>
      <div
        className="gk bg-no-repeat bg-cover bg-center relative overflow-hidden "
        style={{ backgroundImage: `url(${banner.src})` }}>
        <div className="grid grid-cols-1 lg:grid-cols-[3fr_4fr] xl:grid-cols-[2fr_4fr_2fr] md-[4fr_2fr] items-center pxs-0 md:px-[30px]">
          <div className="xl:block hidden"></div>
          <div className="text-center  p-4 flex flex-col justify-center items-center">
            <h2 className="text-secondary text-[32px]  lg:text-[36px] 2xl:text-[42px] font-[800] pb-2">
              PRC Mobile Phone Repair
            </h2>
            <p className="text-[#040404] text-[24px]  lg:text-[26px] 2xl:text-[28px] font-[800] m-[4px]">
              About Bharat Dhingra 
            </p>
            <p className="text-black " style={{ color: "#040404" }}>
              {
                " I'm Bharat Dhingra, the founder of PRC, dedicated to providing exceptional, complex mobile phone repair services. With years of experience in the tech industry, I combine innovation and expertise to offer reliable solutions, ensuring quality and customer satisfaction for everyone who trusts PRC."
              }
            </p>
            <MainButton MainButton="Read My Story" link="/about-us" color="bg-prc" />
          </div>
          <div className="owener-image xl:absolute xl:right-0 h-full  xl:top-[13px]">
            <Image
              className="h-[22rem] lg:h-[100%] xl:h-[100%] 2xl:h-[100%] 3xl:h-[100%] w-full lg:block hidden"
              src={bharat}
              width={500}
              height={500}
              alt=" labx repair "
            />
            <Image
              className="h-[19rem] lg:h-[100%] xl:h-[26rem] 2xl:h-[30rem] 3xl:h-[32rem] w-full lg:hidden block object-contain "
              src={bharat}
              width={400}
              height={300}
              alt=" labx repair "
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default FixLabx;
