import React from "react";
import Image from "next/image";
import owoner from "../../../../public/Images/Home/lab-x-owner.svg";
import MainButton from "@/components/MainButton/MainButton";
import "./FixLabx.css";
// import bharatmobile from "../../../../public/Images/Home/bharat 1.svg";
const bharat = "https://labxbackend.s3.us-east-2.amazonaws.com/Vector+(3).webp";

const FixLabx = () => {
  return (
    // <div>FixLabx LabX Mobile Tech</div>

    <>
      <div className="bg-[url('https://labxbackend.s3.us-east-2.amazonaws.com/LabXMobileTech1+1.webp')]  gk bg-no-repeat bg-cover bg-fixed bg-center	">
        <div className="grid grid-cols-1 lg:grid-cols-[3fr_4fr] xl:grid-cols-[2fr_4fr_2fr] items-center pxs-0 md:px-[30px]  ">
          <div className="owener-image">
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
          <div className="text-center lg:p-0 p-4">
            <h2 className="text-[#040404] text-[32px]  lg:text-[36px] 2xl:text-[42px] font-[800] pb-3">
              LabX Mobile Phone Repair
            </h2>
            <p className="text-[#040404] text-[24px]  lg:text-[26px] 2xl:text-[28px] font-[800] pb-3">
              About Bharat Dhingra
            </p>
            <p className="text-black " style={{ color: "#040404" }}>
              {
                " I'm Bharat Dhingra, the founder of LabX, dedicated to providing exceptional, complex mobile phone repair services. With years of experience in the tech industry, I combine innovation and expertise to offer reliable solutions, ensuring quality and customer satisfaction for everyone who trusts LabX."
              }
            </p>
            <MainButton MainButton="Read My Story" link="/about-us" />
          </div>
        </div>
      </div>
    </>
  );
};

export default FixLabx;
