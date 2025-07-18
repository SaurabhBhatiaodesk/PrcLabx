"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import trending from "../../../public/Images/icons/trending-up.svg";
import coursereating from "../../../public/Images/icons/coursereating.svg";
import clock from "../../../public/Images/icons/clock.svg";
import Link from "next/link";
import { usePathname } from "next/navigation";
import FormCode from "../Form/FormCode";

interface TraningBanner {
  pageName: string;
  pageDescription: string;
  backgroundImage: string;
  adminimagenew: string;
  link: any;
  courseName: string;
  courseRating: any;
  courseHour: any;
  Duration: any;
  Price: any;
  buttonname: any;
}

function TraningBanner({
  pageName,
  pageDescription,
  backgroundImage,
  adminimagenew,
  link,
  courseName,
  courseRating,
  courseHour,
  Duration,
  Price,
  buttonname,
}: TraningBanner) {
  const [isBrowser, setIsBrowser] = useState(false);
  const pathname = usePathname();
  // Check if we're in the browser
  useEffect(() => {
    setIsBrowser(true);
  }, []);

  const handleScrollToTarget = () => {
    const currentRoute = window.location.pathname;
    if (
      currentRoute === "/training" ||
      currentRoute === "/beginner-phone-repair-course" ||
      currentRoute === "/advanced-motherboard" ||
      currentRoute === "/expert-motherboard-repair" ||
      currentRoute === "/master-motherboard-repair" ||
      currentRoute === "/professional-phone-screen"
    ) {
      document.getElementById("business-name")?.focus();
    }
    // Set the target ID based on the current route
    let targetId: any;
    if (currentRoute === "/advanced-motherboard") {
      targetId = "mother-board";
    } else if (currentRoute === "/expert-motherboard-repair") {
      targetId = "expert-motherboard-repair-id";
    } else if (currentRoute === "/beginner-phone-repair-course") {
      targetId = "beginner-phone-repair-course-id";
    } else if (currentRoute === "/master-motherboard-repair") {
      targetId = "master-motherboard-repairi-id";
    } else if (currentRoute === "/professional-phone-screen") {
      targetId = "professional-phone-screen-id";
    } else if (currentRoute === "/broken-ripped-pads-repair-jumbers") {
      targetId = "broken-ripped-pads-repair-jumbers-id";
    }

    if (typeof window !== "undefined") {
      const target = document.getElementById(targetId);
      const offset = 12 * 5; // 3rem in pixels (assuming 1rem = 16px)

      if (target) {
        const targetPosition =
          target.getBoundingClientRect().top + window.pageYOffset;
        const scrollToPosition = targetPosition - offset;

        window.scrollTo({
          top: scrollToPosition,
          behavior: "smooth",
        });
      }
    }
  };
  return (
    <>
      <section
        className="bg-no-repeat bg-cover p-3"
        style={{ backgroundImage: `url(${backgroundImage})` }}
      >
        <div className="container">
          <div className="grid lg:grid-cols-[5fr_3fr] items-center pt-3">
            <div className="w-full lgh:px-4 mb-8 lg:mb-0">
              <div className="text-center lg:text-left">
                <div className="flex gap-3 mb-2">
                  <div className="flex gap-2">
                    <Image src={trending} alt=" Phone Repair Center  " />
                    <span className=" lg:text-lg text-sm text-primary">{courseName}</span>
                  </div>
                  <div className="flex gap-2">
                    <Image src={coursereating} alt=" Phone Repair Center  " />
                    <span className=" lg:text-lg text-sm text-primary">{courseRating}</span>
                  </div>
                  <div className="flex gap-2">
                    <Image src={clock} alt=" Phone Repair Center  " />
                    <span className=" lg:text-lg text-sm text-primary">{courseHour}</span>
                  </div>
                </div>
                <div className="">
                  <h1 className="text-dark  text-3xl font-bold text-fourth sm:text-4xl md:text-[40px] md:leading-[1.2] w">
                    {pageName}
                  </h1>
                </div>

                <div
                  className="flex lg:gap-3 gap-2 my-3 xl:flex-row flex-col
            "
                >
                  <div className="flex lg:gap-3 gap-2 lg:justify-start justify-center">
                    <span className="text-tertiary ">Duration</span>
                    <span className="text-primary">{Duration}</span>|
                  </div>
                  <div className="flex lg:gap-3 gap-2 lg:justify-start justify-center">
                    <span className="text-tertiary ">Price</span>

                    <span className="text-primary">{Price}</span>
                  </div>
                </div>
              </div>
              <div className="flex lg:justify-start justify-center">
                {/* Button is now dynamic */}
                {/* <button className="btn" onClick={handleScrollToTarget}>
                  JOIN THIS COURSE
                </button> */}
                {pathname === "/beginner-phone-repair-course" ||
                pathname === "/advanced-motherboard" ||
                pathname === "/expert-motherboard-repair" ||
                pathname === "/master-motherboard-repair" ||
                pathname === "/professional-phone-screen" ? null : (
                  <>
                    {isBrowser && window.location.pathname === link ? (
                      <button className="btn" onClick={handleScrollToTarget}>
                        {buttonname}
                      </button>
                    ) : (
                      <Link href={link}>
                        <button className="btn">{buttonname}</button>
                      </Link>
                    )}
                  </>
                )}
              </div>
            </div>
            {pathname === "/beginner-phone-repair-course" ||
            pathname === "/advanced-motherboard" ||
            pathname === "/expert-motherboard-repair" ||
            pathname === "/master-motherboard-repair" ||
            pathname === "/professional-phone-screen" ? (
              <div className="admin-image relative h-full">
               
                <FormCode />
              </div>
            ) : (
              <div className="admin-image relative 2xl:h-[500px] lg:h-[350px] h-[350px]">
                <Image
                  src={adminimagenew}
                  alt="Admin Visual"
                  className="object-contain pt-3"
                  fill // Makes the image fill the parent container
                />
              </div>
            )}
          </div>
        </div>
      </section>
    </>
  );
}

export default TraningBanner;
