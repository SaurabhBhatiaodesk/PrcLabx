import React from "react";
import Image from "next/image";
import Link from "next/link";

import Shop1 from "../../../public/Images/shop1.png";
import Shop2 from "../../../public/Images/shop2.png";
import Shop3 from "../../../public/Images/shop3.png";
import Shop4 from "../../../public/Images/shop4.png";
import Shop5 from "../../../public/Images/shop5.png";
import Shop6 from "../../../public/Images/shop6.png";
import Shop7 from "../../../public/Images/shop7.png";
import Shop8 from "../../../public/Images/shop8.png";

import MainHeading from "../../components/ManinHeading/MainHeading";
import MainTitle from "../../components/MainTitle/MainTitle";

const services = [
  { href: "/training", image: Shop1, title: "Training" },
  { href: "/mail-in-repair", image: Shop2, title: "Mail in Repair" },
  { href: "/data-recovery", image: Shop3, title: "Data Recovery" },
  { href: "/screen-refurbishing", image: Shop4, title: "Screen Refurbishing" },
  { href: "/b2b-repair-services", image: Shop5, title: "B2B Repair" },
  { href: "/repair-solutions", image: Shop6, title: "Repair Solutions" },
  { href: "/coming-soon", image: Shop7, title: "Parts Store" },
  { href: "/coming-soon", image: Shop8, title: "Repair Form" },
];

const WhatWeDo = () => {
  return (
    <div className="ship-device">
      <div className="container">
        <div className="text-center py-5 my-5">
          <MainHeading
            Heading="Send Your Device for Repair"
            color="var(--prc)"
            svg_stroke="var(--alpha)"
          />
          <MainTitle
            Title=" Please securely package your phone and ship it to us at the
              designated address. Make sure to include any required
              documentation for efficient processing."
          />
        </div>

        <div className="max-container grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-4 mb-2 text-center">
          {services.map((service, index) => (
            <Link key={index} href={service.href}>
              <div className="shop-block rounded-[15px] border-2 shadow-lg shadow-[#00303e75] transition-shadow duration-300 flex flex-col justify-between hover:shadow-[0_0_20px_10px_#00303e75  ]">
                <Image src={service.image} alt="Phone repair center" />
                <h1 className="m-4 bg-prc text-primary lg:p-3  p-3 rounded-2xl">{service.title}</h1>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default WhatWeDo;
