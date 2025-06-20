"use client";
import React from "react";
import Image from "next/image";
import MainHeading from "@/components/ManinHeading/MainHeading";
import MainTitle from "@/components/MainTitle/MainTitle";
import MainButton from "@/components/MainButton/MainButton";

interface DataPoint {
  title: string;
  description: string;
}

interface DataRecoveryProps {
  heading: string;
  title: string;
  points: DataPoint[];
  buttonLabel?: any;
  buttonLink?: string;
  imageSrc: string;
}

const IconTitleParaImage: React.FC<DataRecoveryProps> = ({
  heading,
  title,
  points,
  buttonLabel,
  buttonLink,
  imageSrc,
}) => {
  return (
    <div className="container lg:py-10 py-4">
      <MainHeading Heading={heading} color="var(--prc)" svg_stroke="var(--alpha)"/>
      <MainTitle Title={title}   color="var-(--secondary)"/>

      <div className="grid xl:grid-cols-[3fr_2fr] lg:grid-cols-[3fr_2fr] grid-cols-1 grid-col-recerse gap-4 lg:py-5 py-3 items-center">
        {/* Text Content */}
        <div>
          <div className="flex-col flex">
            {points.map((point, index) => (
              <div key={index} className="flex items-start gap-3">
               
                <div className="">
                  <p className="text-secondary">
                    <span className="text-xl pb-[2px] text-prc font-semibold ">
                      {point.title}
                    </span>

                    {point.description}
                  </p>
                </div>
              </div>
            ))}

            <div className="flex items-start gap-3">
              {buttonLabel && buttonLink ? (
                <MainButton MainButton={buttonLabel} link={buttonLink} />
              ) : (
                ""
              )}
            </div>
          </div>
        </div>

        {/* Image */}
        <div className="rounder=[20px]">
          <Image
            src={imageSrc}
            alt="Data Recovery Illustration"
            className="h-[350px] lg:h-auto object-cover rounded-[20px]"
            width={500}
            height={500}
          />
        </div>
      </div>
    </div>
  );
};

export default IconTitleParaImage;
