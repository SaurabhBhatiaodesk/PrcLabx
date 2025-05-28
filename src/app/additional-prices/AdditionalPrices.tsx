import Breadcrumb from "@/components/Breadcrumb/Breadcrumb";
import React from "react";
import PricingBox from "./PricingBox";

const AdditionalPrices = () => {
  return (
    <>
      <Breadcrumb
        pageName="LabX Repair - Price List"
        pageDescription="At LabX Repair, we provide a comprehensive range of repair including Data Recovery, Technician Damage Repair, DIY Damage Repair, Screen refurbishment services and General Spare Part Replacment. Below are the four main categories of pricing for our offerings:"
        backgroundImage="/Images/BannerImages/about.png"
        AdminImage="/Images/faq.svg"
        link="/price"
        buttonname="Price List"
      />
<PricingBox/>
      
          </>
  );
};

export default AdditionalPrices;
