import React from "react";
import Image from "next/image";

import MainHeading from "@/components/ManinHeading/MainHeading";
import laptoprep from "../../../public/Images/laptoprep.png";
import BlogList from "./BlogListing";

const Blogs = () => {
  const backgroundImageUrl = laptoprep; // Path to your background image
  return (
    <>
      <div className="py-4 lg:py-[20px]">
        <div
          className="relative w-full md:h-96 h-60 bg-cover bg-center"
          style={{ backgroundImage: `url(${backgroundImageUrl.src})` }}
          >

          <div className="container">


            <div className="absolute inset-0 bg-black bg-opacity-50 flex justify-center items-center">
              <MainHeading Heading="Our Blogs" color="var(--primary)" svg_stroke="var(--alpha)" />
            </div>
          </div>

        </div>
      </div>


      <BlogList />
    </>
  );
};

export default Blogs;
