"use client";
import MainTitle from "@/components/MainTitle/MainTitle";
import MainHeading from "@/components/ManinHeading/MainHeading";
import React from "react";
import Image from "next/image";
import pointer from "../../../../public/Images/icons/pointing-right.svg";
import MainButton from "@/components/MainButton/MainButton";
import cloud from "../../../../public/Images/Home/3dillustrationcloud.png";
import { DotLottieReact } from "@lottiefiles/dotlottie-react";
import datarecovery221 from "../../../../public/Images/Home/datarecovery221.png";

const DataRecovery = () => {
  return (
    // <div>DataRecovery</div>

    <>
      <div className="container lg:py-5 py-4">
        <MainHeading Heading="Data Recovery Service" />
        <MainTitle Title="At LabX, we provide a seamless, transparent data recovery experience designed to keep you informed and stress-free throughout the entire process. Our commitment to communication and quality ensures you receive timely updates and support every step of the way." />

        <div className="grid xl:grid-cols-[3fr_2fr] lg:grid-cols-[3fr_2fr] grid-cols-1 gap-4 lg:py-5 py-3">
          <div>
            <div className="flex-col gap-2  flex">
              <div className="flex items-start gap-3">
                <Image src={pointer} alt="pointer" />

                <div className="">
                  <span className="text-xl pb-[2px] text-[#EDE574] font-semibold">
                    Real-Time Data Recovery Updates
                  </span>
                  <p>
                    Customer Portal for Seamless Tracking Our customer portal
                    offers a convenient, user-friendly way for customers to log
                    in and monitor their device repairs. They can view real-time
                    updates, repair status, and access service history.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Image src={pointer} alt="pointer" />
                <div className="">
                  <span className="text-xl pb-[2px] text-[#EDE574] font-semibold">
                    Feedback Requests for Data Recovery Services
                  </span>
                  <p>
                    After completing your data recovery, we request feedback to
                    gauge your satisfaction. Your insights allow us to refine
                    our process and continuously enhance our service quality for
                    future customers.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Image src={pointer} alt="pointer" />
                <div className="">
                  <span className="text-xl pb-[2px] text-[#EDE574] font-semibold">
                    Streamlined Communication for Efficient Service
                  </span>
                  <p>
                    LabX’s straightforward communication keeps you updated at
                    every step. Our efficient process minimizes back-and-forth,
                    providing clarity and peace of mind while you wait for your
                    recovered data.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Image src={pointer} alt="pointer" />
                <div className="">
                  <span className="text-xl pb-[2px] text-[#EDE574] font-semibold">
                    Comprehensive Data Protection Measures
                  </span>
                  <p>
                    At LabX, safeguarding your data is our priority. We follow
                    strict protocols and use advanced technology to protect your
                    information throughout the recovery process, ensuring that
                    your data remains secure and confidential.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Image src={pointer} alt="pointer" />
                <div className="">
                  <span className="text-xl pb-[2px] text-[#EDE574] font-semibold">
                    Commitment to Quality and Precision
                  </span>
                  <p>
                    Our team of skilled technicians approaches each data
                    recovery case with precision and care. Using cutting-edge
                    tools, we strive to achieve the highest possible recovery
                    success rate, bringing your valuable information back safely
                    and efficiently.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <MainButton MainButton="READ MORE" link="/data-recovery" />
              </div>
            </div>
          </div>

          <div className="">
            <Image
              src="https://labxbackend.s3.us-east-2.amazonaws.com/cloud-computing-technology-internet-binary-code-cloud-service-cloud-storage-concept+(2).webp"
              width={500}
              height={500}
              alt="computing-technology"
              className="h-[300px] lg:h-auto object-cover rounded-[30px]"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default DataRecovery;
