"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import CourseInstructors from "../../../public/Images/CourseInstructors.png";
import coursereating from "../../../public/Images/icons/coursereating.svg";
import clock from "../../../public/Images/icons/clock.svg";
import Textarea from "@mui/joy/Textarea";
import { TextField } from "@mui/material";

function TraningCourseInstructors() {
  // State for counters
  const [personsMentored, setPersonsMentored] = useState(0);
  const [workshopsAttended, setWorkshopsAttended] = useState(0);
  const [coachingCertificates, setCoachingCertificates] = useState(0);

  // Effect for counting up to the target numbers
  useEffect(() => {
    const incrementCounters = (target: any, setCounter: any) => {
      let current = 0;
      const interval = setInterval(() => {
        current += 1;
        setCounter(current);
        if (current >= target) {
          clearInterval(interval);
        }
      }, 50); // Adjust the interval speed as needed
    };

    incrementCounters(10, setPersonsMentored);
    incrementCounters(500, setWorkshopsAttended);
    incrementCounters(9, setCoachingCertificates);
  }, []);

  return (
    <>
      <div>
        <section>
          <div className="container">
            {/* Course Details */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 lg:py-6 py-3 items-center">
              <div className="relative w-full h-[300px] md:h-[550px]">
                <Image
                  className="object-cover rounded-[30px]"
                  src={CourseInstructors}
                  alt="Course Image"
                  fill // Ensures the image fills its parent container responsively
                />
              </div>
              <div className="p-3 lg:p-6 bg-black text-white rounded-md">
                <h2 className="text-3xl font-bold mb-4">
                  Training Instructors
                </h2>

                <p className="text-base text-[#EDE574]">
                  Bharat Dhingra & Team
                </p>
                <div className="flex gap-3 mb-2">
                  <div className="flex gap-2 items-center">
                    <Image src={coursereating} alt="Course rating icon" />
                    <span>4.7</span>
                  </div>
                  <div className="flex gap-2 items-center">
                    <Image src={clock} alt="Clock icon" />
                    <span>25 Hours</span>
                  </div>
                </div>

                <ul className="space-y-2 pb-5">
                  <p>{`Our Screen Refurbishing Training instructors are seasoned professionals with over a decade of experience in mobile device repair. They bring industry expertise, practical insights, and hands-on guidance to every session. Each instructor is dedicated to helping students gain confidence and precision in their repair skills, ensuring a thorough understanding of every technique, from diagnostics to advanced component replacements.
`}</p>
                </ul>

                {/* Dynamic Counter Section */}
                <div className="flex gap-6 mt-4">
                  <div className="text-center">
                    <h3 className="text-[40px] lg:text-[50px] font-bold text-[#EDE574]">
                      {personsMentored}+
                    </h3>
                    <p>Years of industry experience</p>
                  </div>
                  <div className="text-center">
                    <h3 className="text-[40px] lg:text-[50px] font-bold text-[#EDE574]">
                      {workshopsAttended}+
                    </h3>
                    <p>Professionals trained </p>
                  </div>
                  <div className="text-center">
                    <h3 className="text-[40px] lg:text-[50px] font-bold text-[#EDE574]">
                      {coachingCertificates}
                    </h3>
                    <p> Positive feedback</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}

export default TraningCourseInstructors;
