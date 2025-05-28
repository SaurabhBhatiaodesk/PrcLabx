import React from "react";
import MainButton from "@/components/MainButton/MainButton";
import FeeSolutionss from "../../../public/Images/FeeSolutions.png";
import Image from "next/image";
import Line from "../../../public/Images/about/leap.svg"

const FeeSolutions = () => {
  return (
    <>
      <div>
        <section>
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
              <div className="p-2 lg:p-4 bg-black text-white rounded-md ">
                <h2 className="text-3xl font-bold mb-4 ">
                Comprehensive B2B and Public Phone Repair Services
                <Image  height="300" width="400"src={Line.src} alt=" labx repair " className="pt-3" />
                </h2>

              
                <ul className="space-y-2 ">
                <p>{`Our mail in cell phone repair service caters to both end users and businesses, providing a fast, reliable solution for complex repairs. We welcome repair shops and individual customers to send phone for repair, offering expert motherboard repairs, soldering, and component replacements. With quick turnaround times, our phone repair mail in service ensures that your devices are returned in optimal working condition.`}</p>
                </ul>
                <div>
                  <MainButton MainButton="Learn More about B2B Repair " link="/b2b-repair-services" />
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
