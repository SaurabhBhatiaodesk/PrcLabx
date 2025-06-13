"use client";
import React from "react";

import MainHeading from "../ManinHeading/MainHeading";

interface LightProps {
  title: string;
  discripation: string;

}
function LightCources({title,discripation}: LightProps) {


  return (
    <div>
      <section>
        <div className="container">
          {/* Course Details */}
          <div className="grid grid-cols-1 lg:grid-cols-1 gap-4 lg:py-6 py-3 items-center">
            <div className="text-black px-[20px] py-[6px] border-[3px] rounded-2xl bg-[#B2F5EA] shadow-[5px_4px_28px_1px_#B2F5EA] animate-pulse transition-all duration-300 hover:shadow-[0_0_25px_10px_#B2F5EA] text-[18px] tracking-[1.5px] relative top-6">
             
               <MainHeading Heading={title} color="black"  svg_stroke="var(--alpha)"/>
              <ul className="space-y-2 pb-5">
                <p className="text-center">
                  {discripation}
                </p>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default LightCources;
