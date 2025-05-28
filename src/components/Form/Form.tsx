"use client"
import React from "react";
import MainHeading from "../ManinHeading/MainHeading";
import FormCode from "./FormCode";
import { usePathname } from "next/navigation";

const Form = () => {
  const pathname = usePathname();
  return (
    <>
      <div className="py-4 lg:py-[20px]">
        <div className="container ">
          {pathname === "/training" ? null : (
            <div className="form-section">
              <MainHeading Heading="Ready to Kickstart Your Career in Mobile Repair? Enquire Now!" />
              <div className="form">
                <FormCode />
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default Form;
