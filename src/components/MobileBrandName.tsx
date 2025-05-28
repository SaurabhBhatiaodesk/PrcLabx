import React from "react";
import MainHeading from "./ManinHeading/MainHeading";
import MainTitle from "./MainTitle/MainTitle";

const MobileBrandName = () => {
  return (
    <>
      <section className="">
        <div className="container mx-auto pt-8">
          <MainHeading Heading="Supported Models" />
          <MainTitle
            Title="We refurbish screens for a wide range of devices, including"
          />
          <div className="grid xl:grid-cols-7 lg:grid-cols-3 grid-cols-1 gap-2 lg:py-5 py-3 items-center">
            {["iPhone", "iPad", "Samsung Phone", "Samsung Tablet", "Google", "Oppo", "and More"].map((brand, index) => (
              <div
                key={index}
                className="px-4 py-2 border rounded-full shadow-lg text-center lg:text-sm text-xs tracking-wide transition duration-300 ease-in-out hover:bg-primary  hover:shadow-xl hover:border-tertiary hover:border-[2px]"
              >
                <p className=" text-tertiary m-0 text-[13px] hover:text-secondary ">{brand}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default MobileBrandName;
