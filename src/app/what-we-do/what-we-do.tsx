import React from "react";
import Breadcrumb from "@/components/Breadcrumb/Breadcrumb";
import MainButton from "@/components/MainButton/MainButton";
import Image from "next/image";
import WhatBlock from "./what-we-do-block";
import GoogleReview from "@/components/GoogleReviews/what-we-do-review";
import YouTubeHome from '@/components/HomeCpmponents/YouTubeHome/YouTubeHome';

const WhatWeDo = () => {
  return (
    <>
      <div>
        <Breadcrumb
          pageName="What We Do"
          pageDescription="Discover our range of professional services designed to meet all your needs with precision and care. From innovative solutions to industry-leading expertise, we are committed to delivering excellence every step of the way."
          backgroundImage="/Images/BannerImages/about.png"
          AdminImage="/Images/adminimage.png"
          link="/contact-us"
             buttonname="Request a Quote"
        />
      </div>
      <WhatBlock/>
      <YouTubeHome />
      <GoogleReview/>
    </>
  );
};

export default WhatWeDo;
