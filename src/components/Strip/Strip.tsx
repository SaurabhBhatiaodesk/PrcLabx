import React from "react";


import MainHeading from "../../components/ManinHeading/MainHeading";
import laptoprep from "../../../public/Images/laptoprep.png";
interface stripdata {
    title:string
}

const Strip = ({title}:stripdata) => {
  const backgroundImageUrl = laptoprep; // Path to your background image
  return (
    <>
      <div className="">
        <div
          className="relative w-full md:h-64 h-40 bg-cover bg-center"
          style={{ backgroundImage: `url(${backgroundImageUrl.src})` }}
        >
          <div className="container">
            <div className="absolute inset-0 bg-black bg-opacity-50 flex justify-center items-center">
              <MainHeading
                Heading={title}
                color="var(--primary)"
                svg_stroke="var(--alpha)"
              />
            </div>
          </div>
        </div>
      </div>


    </>
  );
};

export default Strip;
