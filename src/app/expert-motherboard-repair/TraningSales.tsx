import React, { useEffect, useState } from "react";
import Image from "next/image";

function TraningSales({
  courseName,
  courseDescription,
  saleDurationDays,
  initialCounters,
  imagedata,
}: {
  courseName: string;
  courseDescription: string[];
  saleDurationDays: number;
  imagedata: string;
  initialCounters: {
    personsMentored: number;
    workshopsAttended: number;
    coachingCertificates: number;
  };
}) {
  // State for counters
  const [personsMentored, setPersonsMentored] = useState(0);
  const [workshopsAttended, setWorkshopsAttended] = useState(0);
  const [coachingCertificates, setCoachingCertificates] = useState(0);

  // State for countdown timer
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  // Function to calculate time left until sale ends
  useEffect(() => {
    const saleEndDate: any = new Date();
    saleEndDate.setDate(saleEndDate.getDate() + saleDurationDays); // Dynamic sale duration

    const updateCountdown = () => {
      const now: any = new Date();
      const difference = saleEndDate - now;

      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((difference / (1000 * 60)) % 60),
          seconds: Math.floor((difference / 1000) % 60),
        });
      }
    };

    const timerInterval = setInterval(updateCountdown, 1000);
    return () => clearInterval(timerInterval);
  }, [saleDurationDays]);

  // Effect for counting up to the target numbers (dynamic data from props)
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

    incrementCounters(initialCounters.personsMentored, setPersonsMentored);
    incrementCounters(initialCounters.workshopsAttended, setWorkshopsAttended);
    incrementCounters(
      initialCounters.coachingCertificates,
      setCoachingCertificates
    );
  }, [initialCounters]);

  return (
    <div>
      <section>
        <div className="container">
          {/* Course Details */}
          <div className="grid grid-cols-1 lg:grid-cols-1 gap-4 lg:py-6 py-3 items-center">
            <div className="px-[20px] py-[6px] border-[2px] rounded-[8px] bg-[rgba(157,156,152,0.83)] shadow-[5px_4px_28px_1px_#9d9c98] animate-pulse transition-all duration-300 hover:shadow-[0_0_25px_10px_rgba(255,223,101,0.8)] text-[18px] tracking-[1.5px]">
              <h2 className="text-3xl font-bold mb-4 text-center">{courseName}</h2>

              <ul className="space-y-2 pb-5">
                {courseDescription.map((description, index) => (
                  <p className="text-center" key={index}>{description}</p>
                ))}
              </ul>

              {/* Countdown Timer */}
              {/* <div className="flex justify-between w-full gap-2">
                <div className="flex justify-between items-center border-[2px] border-[#EDE574] text-black p-4 rounded-md w-full">
                  <div className="text-center">
                    <h3 className="text-[26px] lg:text-[50px] lg:font-bold font-medium text-[#EDE574]">
                      {timeLeft.days}
                    </h3>
                    <p className="m-0">Days</p>
                  </div>
                  <div className="text-center">
                    <h3 className="text-[26px] lg:text-[50px] lg:font-bold font-medium text-[#EDE574]">
                      {timeLeft.hours}
                    </h3>
                    <p className="m-0"> Hours</p>
                  </div>
                  <div className="text-center">
                    <h3 className="text-[26px] lg:text-[50px] lg:font-bold font-medium text-[#EDE574]">
                      {timeLeft.minutes}
                    </h3>
                    <p className="m-0">Minutes</p>
                  </div>
                  <div className="text-center">
                    <h3 className="text-[26px] lg:text-[50px] lg:font-bold font-medium text-[#EDE574]">
                      {timeLeft.seconds}
                    </h3>
                    <p className="m-0">Seconds</p>
                  </div>
                </div>

             
              </div> */}
            </div>

            {/* <div className="relative w-full h-[300px] md:h-[550px]">
            
              <Image
                className="object-cover rounded-[30px]"
                src={imagedata} // Replace with dynamic or static image path
                alt="Course Image"
                fill
              />
            </div> */}
          </div>
        </div>
      </section>
    </div>
  );
}

export default TraningSales;
