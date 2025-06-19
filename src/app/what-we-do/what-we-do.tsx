import React from "react";
import Breadcrumb from "@/components/Breadcrumb/Breadcrumb";
import WhatBlock from "./what-we-do-block";

import YouTubeHome from '@/components/HomeCpmponents/YouTubeHome/YouTubeHome';

const WhatWeDo = () => {
  return (
    <>
      <div>
        <Breadcrumb
          pageName="What We Do"
          pageDescription="Discover our range of professional services designed to meet all your needs with precision and care. From innovative solutions to industry-leading expertise, we are committed to delivering excellence every step of the way."
            backgroundImage="/Images/bannerimages/screenrafr.png"
          AdminImage="/Images/adminimage.png"
          link="/contact-us"
             buttonname="Request a Quote"
        />
      </div>
      <WhatBlock/>
      <YouTubeHome />
    

    </>
  );
};

export default WhatWeDo;
