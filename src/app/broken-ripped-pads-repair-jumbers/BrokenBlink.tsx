"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import CourseInstructors from "../../../public/Images/CourseInstructors.png";
import coursereating from "../../../public/Images/icons/coursereating.svg";
import clock from "../../../public/Images/icons/clock.svg";

function BrokenBlink() {
 



  return (
    <div>
      <section>
        <div className="container">
          {/* Course Details */}
          <div className="grid grid-cols-1 lg:grid-cols-1 gap-4 lg:py-6 py-3 items-center">
            <div className="px-[20px] py-[6px] border-[2px] rounded-[8px] bg-[rgba(157,156,152,0.83)] shadow-[5px_4px_28px_1px_#9d9c98] animate-pulse transition-all duration-300 hover:shadow-[0_0_25px_10px_rgba(255,223,101,0.8)] text-[18px] tracking-[1.5px]">
              <h2 className="text-3xl font-bold mb-4 text-center">
              Hands-On Learning for Real-World Skills
              </h2>
              <ul className="space-y-2 pb-5">
              <p className="text-center">
                
                {`After completing this course, you will be equipped to tackle complex motherboard repairs that are typically not handled in regular mobile repair shops. You’ll gain the confidence to accurately diagnose motherboard issues and apply the correct solutions for effective repairs.
`}
              </p>
              </ul>
              </div>




              
             
            

          </div>
        </div>
      </section>
    </div>
  );
}

export default BrokenBlink;
