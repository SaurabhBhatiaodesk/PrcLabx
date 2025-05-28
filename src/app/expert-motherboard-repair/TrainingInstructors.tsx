"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";

function TrainingInstructors({
  instructorName,
  instructorImage,
  courseRating,
  courseDuration,
  personsMentoredTarget,
  workshopsAttendedTarget,
  coachingCertificatesTarget,
  courseDescription,
  CourseHeading,
  param1,
  param2,
  param3
}: {
  instructorName: string;
  instructorImage: string;
  courseRating: number;
  CourseHeading:string;
  courseDuration: string;
  
  param1:string;
  param2:string;
  param3:string;

  personsMentoredTarget: number;
  workshopsAttendedTarget: number;
  coachingCertificatesTarget: any;
  courseDescription: string[];
}) {
  // State for counters
  const [personsMentored, setPersonsMentored] = useState(0);
  const [workshopsAttended, setWorkshopsAttended] = useState(0);
  const [coachingCertificates, setCoachingCertificates] = useState(0);

  // Effect for counting up to the target numbers
  useEffect(() => {
    const incrementCounters = (target: number, setCounter: React.Dispatch<React.SetStateAction<number>>) => {
      let current = 0;
      const interval = setInterval(() => {
        current += 1;
        setCounter(current);
        if (current >= target) {
          clearInterval(interval);
        }
      }, 50); // Adjust the interval speed as needed
    };

    incrementCounters(personsMentoredTarget, setPersonsMentored);
    incrementCounters(workshopsAttendedTarget, setWorkshopsAttended);
    incrementCounters(coachingCertificatesTarget, setCoachingCertificates);
  }, [personsMentoredTarget, workshopsAttendedTarget, coachingCertificatesTarget]);

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
                  src={instructorImage}
                  alt="Course Instructor"
                  fill // Ensures the image fills its parent container responsively
                />
              </div>
              <div className="p-0 lg:p-6 bg-black text-white rounded-md">
                <h2 className="text-3xl font-bold mb-4">{CourseHeading}</h2>

                <p className="text-base text-[#EDE574]">{instructorName}</p>
                <div className="flex gap-3 mb-2">
                  <div className="flex gap-2 items-center">
                    <span>{courseRating}</span>
                  </div>
                  <div className="flex gap-2 items-center">
                    <span>{courseDuration}</span>
                  </div>
                </div>

                <ul className="space-y-2 pb-5">
                  {courseDescription.map((desc, index) => (
                    <p key={index}>{desc}</p>
                  ))}
                </ul>

                {/* Dynamic Counter Section */}
                <div className="flex gap-6 mt-4">
                  <div className="text-center">
                    <h3 className="text-[40px] lg:text-[50px] font-bold text-[#EDE574]">{personsMentored}+</h3>
                  
                    <p>{param1}</p>
                  </div>
                  <div className="text-center">
                    <h3 className="text-[40px] lg:text-[50px] font-bold text-[#EDE574]">{workshopsAttended}+</h3>
               
                    <p>{param2}</p>
                  </div>
                  <div className="text-center">
                    <h3 className="text-[40px] lg:text-[50px] font-bold text-[#EDE574]">{coachingCertificates}</h3>
                   
                    <p>{param3}</p>
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

export default TrainingInstructors;
