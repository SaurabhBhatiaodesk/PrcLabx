"use client";
import { useEffect, useState } from "react";
import Link from "next/link";
import React from "react";
import Image from "next/image";
import MainButton from "../MainButton/MainButton";
import FormCode from "../Form/FormCode";
import { usePathname } from "next/navigation";

interface BreadcrumbProps {
  pageName: string;
  pageDescription: string;
  backgroundImage: string;
  AdminImage: string;
  link?: any;
  buttonname: string;
  scrollId?: any;
  scrollOffSet?: any;
  pageNamecolor?: string;
  containerclass?: string;
}

function Breadcrumb({
  pageName,
  pageDescription,
  backgroundImage,
  AdminImage,
  link,
  buttonname, // Destructure the link prop
  scrollId,
  scrollOffSet,
  pageNamecolor,
  containerclass,
}: BreadcrumbProps) {
  const [isBrowser, setIsBrowser] = useState(false);
  const pathname = usePathname();
  // Check if we're in the browser
  useEffect(() => {
    setIsBrowser(true);
  }, []);

  const handleScrollToTarget = () => {
    const currentRoute = window.location.pathname;
    if (currentRoute === "/training") {
      document.getElementById("business-name")?.focus();
    }
    // Set the target ID based on the current route
    let targetId: any;
    if (currentRoute === link) {
      targetId = scrollId;
    }
    //  else if (currentRoute === "/contact-us") {
    //   targetId = "contactId";
    // } else if (currentRoute === "/training") {
    //   targetId = "Kickstart";
    // }
    if (typeof window !== "undefined") {
      const target = document.getElementById(targetId);
      const offset = scrollOffSet; // 3rem in pixels (assuming 1rem = 16px)

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
        className="bg-no-repeat bg-cover"
        style={{ backgroundImage: `url(${backgroundImage})` }}
      >
        <div
          className={`container   ${
            containerclass == undefined ? "py-8" : containerclass
          }`}
        >
          <div
            className={`grid lg:grid-cols-2 grid-cols-1 items-center pt-3 ${
              pathname === "/training" ? "2xl:grid-cols-[5fr_3fr] " : ""
            }`}
          >
            <div className="w-full lg:px-4 mb-8 lg:mb-0">
              <div className="text-center lg:text-left">
                <ul className="flex items-center lg:justify-start justify-center gap-[10px]">
                  <li>
                    <Link
                      href="/"
                      className="text-primary flex items-center gap-[10px] lg:text-base font-medium text-rpimary text-sm"
                    >
                      Home
                    </Link>
                  </li>
                  <li>
                    <p className="text-body-color text-primary flex items-center lg:gap-[10px] gap-[3px] lg:text-base font-medium mb-0 text-sm ">
                      <span className="text-body-color text-primary">/</span>
                      {pageName}
                    </p>
                  </li>
                </ul>
                <h1
                  className={`text-dark lg:mb-3 mb-2 text-3xl font-bold ${
                    pageNamecolor == undefined ? "text-primary" : pageNamecolor
                  } sm:text-4xl md:text-[40px] md:leading-[1.2]`}
                >
                  {pageName}
                </h1>
                <p
                  className="text-body-color text-primary mb-5 text-base"
                  dangerouslySetInnerHTML={{ __html: pageDescription }}
                ></p>
              </div>
              <div className="flex lg:justify-start justify-center">
                {/* Button is now dynamic */}

                {pathname === "/training" ? null : (
                  <>
                    {isBrowser && window.location.pathname === link ? (
                      // <button className="btn" onClick={handleScrollToTarget}>
                      //   {buttonname}
                      // </button>
                      <MainButton
                        MainButton={buttonname}
                        color="bg-prc"
                        onClick={handleScrollToTarget}
                      />
                    ) : (
                      // <Link href={link}>
                      //   <button className="btn">{buttonname}</button>
                      // </Link>
                      <MainButton
                        MainButton={buttonname}
                        color="bg-prc"
                        link={link}
                      />
                    )}
                  </>
                )}
              </div>
            </div>

            {pathname === "/training" ? (
              <div className="admin-image relative h-full">
                <FormCode />
              </div>
            ) : (
              <div className="admin-image relative 2xl:h-[500px] lg:h-[350px] h-[350px]">
                <Image
                  src={AdminImage}
                  alt="Admin Visual"
                  className="object-contain pt-3"
                  fill
                />
              </div>
            )}
          </div>
        </div>
      </section>
    </>
  );
}

export default Breadcrumb;
