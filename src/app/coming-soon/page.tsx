"use client";
import React from "react";
import { DotLottieReact } from "@lottiefiles/dotlottie-react";






const page = () => {
  return (
    <>
      <div>
        <DotLottieReact
          src="/Images/jsonfile/new coming soon.json"
          loop
          autoplay
          className="animated-imgs animated-banner-img lg:h-[500px] h-[500px] xl:ml-[180px] md:ml-[150px] py-8"
        />
      </div>
    </>
  );
};

export default page;
