import React from "react";
import Image from "next/image";
import course2 from "../../../../public/Images/course2.png";
import MainHeading from "@/components/ManinHeading/MainHeading";
import MainButton from "@/components/MainButton/MainButton";
import BlogList from "./BlogListing";

const Blogs = () => {
  return (
    <>
      <div className="py-4 lg:py-[20px]">
        <div className="container">
          <div className="container">
            <div
              data-aos="fade-up"
              className="relative w-fit m-auto aos-init aos-animate"
            >
              <h1 className="text-center w-fit text-3xl sm:text-4xl md:text-5xl lg:text-[42px] font-bold leading-tight tracking-wide">Our Blogs</h1>
              <svg
                className="relative top-full left-0"
                width="100%"
                height="20"
                viewBox="0 0 100 30"
                xmlns="http://www.w3.org/2000/svg"
                preserveAspectRatio="none"
              >
                <path
                  d="M0 15 Q50 0 100 15"
                  fill="none"
                  stroke="#fff563"
                  stroke-width="6"
                ></path>
              </svg>
            </div>
          </div>
        </div>
      </div>

      <BlogList />
    </>
  );
};

export default Blogs;
