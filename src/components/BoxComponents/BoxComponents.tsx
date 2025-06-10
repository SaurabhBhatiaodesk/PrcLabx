import React from "react";
import Image from "next/image";


import MainHeading from "../ManinHeading/MainHeading";
import MainTitle from "../MainTitle/MainTitle";

interface FeatureItemProps {
  icon: string;
  title: string;
  description: string;
  images?: string[]; // Optional array of additional images
}

interface BoxComponentsProps {
  heading: string;
  title: string;
  image: any;
  features: FeatureItemProps[];
}

const FeatureItem: React.FC<FeatureItemProps> = ({ icon, title, description }) => (
  <div className="flex items-start gap-3">
    <Image width={24} height={24} src={icon} alt="icon" />
    <div>
      <span className="text-xl pb-[2px] text-tertiary font-semibold">{title}</span>
      <p className="text-primary">{description}</p>
    </div>
  </div>
);

const BoxComponents: React.FC<BoxComponentsProps> = ({ heading, title, image, features }) => {
  return (
    <section className="container">
      <div className="text-center pt-8">
        <MainHeading Heading={heading} color="var(--primary)" svg_stroke="var(--tertiary)" />
        <MainTitle Title={title} color="var(--primary)"/>
      </div>
      <div className="grid lg:grid-cols-2 grid-cols-1 gap-4 lg:p-4 p-1 items-center">
        <div>
          <Image
            src={image}
            className="h-auto object-cover rounded-[20px]"
            alt="Data Recovery"
          />
        </div>
        <div>
          <div className="flex-col flex">
            {features.map((feature, index) => (
              <FeatureItem
                key={index}
                icon={feature.icon}
                title={feature.title}
                description={feature.description}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default BoxComponents;
