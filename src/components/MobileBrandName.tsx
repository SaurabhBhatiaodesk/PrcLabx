import React from "react";
import MainHeading from "./ManinHeading/MainHeading";
import MainTitle from "./MainTitle/MainTitle";

const MobileBrandName = () => {
  const brands = [
    "iPhone",
    "iPad",
    "Samsung Phone",
    "Samsung Tablet",
    "Google",
    "Oppo",
    "and More",
  ];

  return (
    <section>
      <div className="container mx-auto pt-8">
        <MainHeading Heading="Supported Models" svg_stroke="var(--alpha)" />
        <MainTitle Title="We refurbish screens for a wide range of devices, including" />

        <div className="grid xl:grid-cols-7 lg:grid-cols-3 grid-cols-1 gap-2 lg:py-5 py-3 items-center">
          {brands.map((brand, index) => (
            <div
              key={index}
              className="px-4 py-2 border-[2px] border-prc bg-prc rounded-full shadow-lg text-center lg:text-sm text-xs tracking-wide transition duration-300 ease-in-out   hover:scale-105"
            >
              <p className="text-primary m-0 text-[16px] font-semibold transition-colors duration-300">
                {brand}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MobileBrandName;
