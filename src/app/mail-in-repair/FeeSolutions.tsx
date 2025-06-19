import React from "react";
import MainButton from "@/components/MainButton/MainButton";
import FeeSolutionss from "../../../public/Images/FeeSolutions.png";
import Image from "next/image";

import MainHeading from "@/components/ManinHeading/MainHeading";

const FeeSolutions = () => {
  return (
    <>
      <div>
        <section className="bg-[#EFF7FF]">
          <div className="container">
            {/* course 1 */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-4  lg:py-6 py-3  items-center">
              <div className="relative w-full h-[300px] md:h-[550px]">
                <Image
                  className="object-cover rounded-[30px]"
                  src={FeeSolutionss}
                  alt="Course Image"
                  fill // Ensures the image fills its parent container responsively
                />
              </div>
              <div className="p-2 lg:p-4  text-secondary rounded-md ">
                <MainHeading
                  Heading="Comprehensive B2B and Public Phone Repair Services"
                  color="var(--prc)"
                  svg_stroke="var(--alpha)"
                  text_align="start"
                />

                <ul className="space-y-2 ">
                  <p className="text-secondary">{`Our mail in cell phone repair service caters to both end users and businesses, providing a fast, reliable solution for complex repairs. We welcome repair shops and individual customers to send phone for repair, offering expert motherboard repairs, soldering, and component replacements. With quick turnaround times, our phone repair mail in service ensures that your devices are returned in optimal working condition.`}</p>
                </ul>
                <div>
                  <p className="text-secondary">
                    <MainButton
                      MainButton="Learn More about B2B Repair"
                      link="/b2b-repair-services"
                      color="bg-prc"
                    />
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default FeeSolutions;
