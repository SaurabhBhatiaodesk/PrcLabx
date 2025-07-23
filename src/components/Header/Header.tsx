"use client";

import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { RxCross2 } from "react-icons/rx";
import { TbMenu2 } from "react-icons/tb";
import { IoChevronDown, IoMailUnread } from "react-icons/io5";

import newlogo from "../../../public/Images/prclogo.png";
import ProfessionalMegaMenu from "../../app/MegaMenu/ProfessionalMegaMenu";
import "./Header.css";
import MainButton from "../MainButton/MainButton";
// import { useSelector } from "react-redux";
import { useAppDispatch, useAppSelector } from "../../app/redux/hooks";
import { setUiFlag } from "../../app/redux/slice";
import TopaHeader from "./TopaHeader";
import { MdCall } from "react-icons/md";
import { BiSolidPhoneCall } from "react-icons/bi";
import { FaLocationDot } from "react-icons/fa6";

export default function CustomHeader() {
  const [popopOpendesk, setpopopOpendesk] = useState(false)
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const uiFlag = useAppSelector((s) => s.users.uiFlag);
  const hasFetchedData = useRef(false);
  const dispatch = useAppDispatch();
  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const toggleDropdown = () => setIsDropdownOpen(!isDropdownOpen);
  useEffect(() => {
    if (hasFetchedData.current) return;
    hasFetchedData.current = true;
    const fetchBrands = async () => {
      try {
        const api = "https://www.prc.repair/api/sidebar-filter"; // Default endpoint for the sidebar
        // Fetch data for base endpoint ('getbrands') and store it in sessionStorage for the sidebar
        let baseData: any = JSON.parse(
          sessionStorage.getItem("baseData") || "[]"
        );
        if (baseData.length === 0) {
          try {
            const res = await fetch(api);
            if (!res.ok) {
              throw new Error(`HTTP error! status: ${res.status}`);
            }
            baseData = await res.json();
            sessionStorage.setItem("baseData", JSON.stringify(baseData)); // Save data in sessionStorage
            dispatch(setUiFlag(false));
          } catch (error) {
            console.error("Error fetching base data:", error);
          }
        } else if (baseData.length > 0) {
          dispatch(setUiFlag(false));
        }
      } catch (error) {
        console.error("Unexpected error:", error);
      }
    };

    fetchBrands();
  }, []);
  if (uiFlag) {

    return (
      <>
        <div className="container lg:block hidden">
          <div className="flex justify-between items-center px-6 py-4 animate-pulse bg-white ">
            {/* Logo Placeholder */}
            <div className="w-12 h-12 bg-gray-300 rounded-full"></div>

            {/* Nav Links Placeholder */}
            <div className="flex gap-6 flex-1 justify-center">
              {Array.from({ length: 8 }).map((_, index) => (
                <div key={index} className="w-20 h-4 bg-gray-300 rounded"></div>
              ))}
            </div>

            {/* Button Placeholder */}
            <div className="w-24 h-10 bg-red-300 rounded-lg"></div>
          </div>
        </div>
        <div className="lg:hidden block">
          <div className="flex items-center justify-between px-4 py-3 border-b animate-pulse bg-white">
            {/* Close icon placeholder */}
            <div className="w-6 h-6 bg-gray-300 rounded"></div>

            {/* Logo placeholder */}
            <div className="w-10 h-10 bg-gray-300 rounded-full"></div>

            {/* Instant Quote button placeholder */}
            <div className="w-24 h-8 bg-red-300 rounded-md"></div>
          </div>
        </div>
      </>
    );
  }
  const callpopop = () => {
    setpopopOpendesk(true)
  }
  const handleClosedesk = () => {
    setpopopOpendesk(false)
  }
  return (
    <div className="bg-primary">
      <TopaHeader />
      <header className=" text-secondary  z-50 relative container">
        {/* Header content */}
        <div className="flex justify-between items-center lg:py-4 md:py-2 py-2 relative">
          <div className="lg:hidden flex items-center gap-3">
            <button onClick={toggleMenu} className="text-secondary">
              {isMenuOpen ? <RxCross2 size={24} /> : <TbMenu2 size={24} />}
            </button>
          </div>
          {/* Logo */}
          <Link href="/">
            <Image
              src={newlogo}
              width={60}
              height={60}
              alt="Brand Logo"
              className="w-[60px]"
            />
          </Link>

          {/* Desktop Menu */}
          <nav className="hidden lg:flex items-center gap-6">
            <ProfessionalMegaMenu />
          </nav>

          {/* Mobile toggle */}

          {/* <button
            onClick={() => router.push("/contact-us")}
            className="flex uppercase bg-[#EF0000] w-max h-max text-white text-[18px] py-[8px] px-[15px] rounded-3xl transition-all duration-300 hover:[transform:translateY(-.335rem)]"
            
          >
            Instant Quote
          </button> */}
          <div className="md:block">
            <MainButton
              MainButton="Instant Quote"
              color="bg-[#EF0000] text-white"
              link="/brands"
            />
          </div>
          {/* <div className="p-2 md:hidden block">
            <MdCall fontSize={24} color="black" onClick={callpopop} />
            {popopOpendesk && (
              <>
                <div className="">
                  <div
                    id="YOUR_ID"
                    className="fixed z-50 inset-0 overflow-y-auto"
                  >
                    <div className="flex items-start justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
                      <div
                        className="fixed inset-0 transition-opacity"
                        aria-hidden="true"
                      >
                        <div className="absolute inset-0 bg-prc opacity-75"></div>
                      </div>

                      <span
                        className="hidden sm:inline-block sm:align-middle sm:h-screen"
                        aria-hidden="true"
                      >
                        &#8203;
                      </span>

                      <div
                        className="inline-block align-bottom bg-white rounded-lg px-3 pt-4 pb-2 text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle w-full sm:p-6"
                        role="dialog"
                        aria-modal="true"
                        aria-labelledby="modal-headline"
                      >
                        <div
                          className="flex justify-end absolute right-[4px] top-[10px]"
                          onClick={handleClosedesk}
                        >
                          <RxCross2   onClick={handleClosedesk} />
                        </div>
                      

                        <div className="sm:flex sm:items-start">
                          <h3 className="text-prc bg-tertiary p-2 rounded-lg">
                            Phone Repair Center 
                          </h3>
                          <div className="flex flex-col gap-1 mb-2 border-y-1 border-gray-200">
                            <div className="p-2">
                              <div className=" flex justify-start align-middle gap-2 ">
                                <FaLocationDot />
                                <span className="text-sm leading-6 font-medium text-black text-left">
                                  <Link
                                    target="_blank"
                                    href="https://www.google.com/maps/place/Phone+Repair+Centre+-+Superior+Repairs,+Lowest+Cost/@-33.7586704,150.756797,6871m/data=!3m1!1e3!4m15!1m8!3m7!1s0x6b129ab1929d4f97:0x103feb9784d7d023!2s122+Queen+St,+St+Marys+NSW+2760,+Australia!3b1!8m2!3d-33.766127!4d150.7743917!16s%2Fg%2F11b8y9vjx6!3m5!1s0x6b129ab1929fd41b:0x40e0571691bf988f!8m2!3d-33.766127!4d150.7743917!16s%2Fg%2F11b6p5v0sf?entry=ttu&g_ep=EgoyMDI1MDYzMC4wIKXMDSoASAFQAw%3D%3D"
                                  >
                                    122 Queen St, St Marys NSW 2760,
                                    Australia
                                  </Link>
                                </span>
                              </div>
                              <div className=" flex justify-start align-middle gap-2 ">
                                <span>
                                  <BiSolidPhoneCall />
                                </span>
                                <a
                                  className="text-sm leading-6 font-medium text-black underline"
                                  href="tel:+(02)86783298"
                                >
                                  (02)86783298
                                </a>
                              </div>
                              <span className=" flex justify-start items-center gap-2 ">
                                <IoMailUnread />
                                <a
                                  href="mailto:service@prcrepair.com.au  "
                                  className="hover:underline text-sm leading-6 font-medium text-black text-left"
                                >
                                  service@prcrepair.com.au
                                </a>
                              </span>
                            </div>
                            <hr></hr>
                            <div className="p-2">
                              <div className=" flex justify-start align-middle gap-2">
                                <FaLocationDot />
                                <span className="text-sm leading-6 font-medium text-black text-left">
                                  <Link
                                    href="https://www.google.com/maps/place/TechCity+Schofields+Phone+Repair/@-33.7057889,150.8759664,859m/data=!3m1!1e3!4m6!3m5!1s0x6b129f1f16bc4395:0xf55b68eeebf4e2e2!8m2!3d-33.7057889!4d150.8759664!16s%2Fg%2F11smlzr8dn?entry=ttu&g_ep=EgoyMDI1MDYzMC4wIKXMDSoASAFQAw%3D%3D"
                                    target="_blank"
                                  >
                                    Kiosk 1/227 Railway Terrace, Schofields
                                    NSW 2762
                                  </Link>
                                </span>
                              </div>
                              <div className=" flex justify-start align-middle gap-2">
                                <span>
                                  <BiSolidPhoneCall />
                                </span>
                                <a
                                  className="text-sm leading-6 font-medium text-black text-left underline"
                                  href="tel:+(02)72527141"
                                >
                                  (02)72527141
                                </a>
                              </div>
                              <span className=" flex justify-start items-center gap-2">
                                <IoMailUnread />
                                <a
                                  href="mailto:service@prcrepair.com.au  "
                                  className="hover:underline text-sm leading-6 font-medium text-black text-left"
                                >
                                  service@prcrepair.com.au
                                </a>
                              </span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </>
            )}
          </div> */}
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="lg:hidden px-4 py-6 bg-primary border-t border-secondary absolute w-full top-full left-0 z-40 h-screen overflow-y-auto">
            <ul className="flex flex-col gap-4 text-sm">
              <li>
                <Link href="/training" onClick={toggleMenu}>
                  Training
                </Link>
              </li>
              <li>
                <Link href="/b2b-repair-services" onClick={toggleMenu}>
                  B2B Repair
                </Link>
              </li>
              <li>
                <Link href="/ps5-repair" onClick={toggleMenu}>
                  PS5 Repair
                </Link>
              </li>
              <li>
                <Link href="/mail-in-repair" onClick={toggleMenu}>
                  Mail In Repair
                </Link>
              </li>
              <li>
                <Link href="/screen-refurbishing" onClick={toggleMenu}>
                  Screen Refurbishment
                </Link>
              </li>
              <li>
                <Link href="/data-recovery" onClick={toggleMenu}>
                  Data Recovery
                </Link>
              </li>
              <li>
                <Link
                  href="/coming-soon"
                  target="_blank"
                  onClick={toggleMenu}
                >
                  Parts Store
                </Link>
              </li>
                 <li>
                <Link
                  href="/game-console"
                  target="_blank"
                  onClick={toggleMenu}
                >
                Game Console
                </Link>
              </li> 

              {/* About us dropdown */}
              {/* <li>
                <button onClick={toggleDropdown} className="flex items-center">
                  About us <IoChevronDown className="ml-2 text-base" />
                </button>
                {isDropdownOpen && (
                  <ul className="ml-4 mt-2 flex flex-col gap-2 text-sm">
                    <Link href="/about-us" onClick={toggleMenu}>
                      Meet Bharat
                    </Link>
                    <Link href="/what-we-do" onClick={toggleMenu}>
                      What We Do
                    </Link>
                    <Link href="/blogs" onClick={toggleMenu}>
                      Blogs
                    </Link>
                    <Link href="/faq" onClick={toggleMenu}>
                      FAQ
                    </Link>
                    <Link href="/Trademark_Disclaimer" onClick={toggleMenu}>
                      Trademark Disclaimer
                    </Link>
                    <Link href="/Warranty_and_Terms" onClick={toggleMenu}>
                      Warranty And Terms
                    </Link>
                    <Link href="/Shipping_Policy" onClick={toggleMenu}>
                      Shipping Policy
                    </Link>
                  </ul>
                )}
              </li> */}

              {/* <li>
              <button
                onClick={() => {
                  toggleMenu();
                  router.push("/contact-us");
                }}
                className="mt-4 bg-red-600 text-white text-sm px-4 py-2 rounded-xl w-fit"
              >
                Instant Quote
              </button>
            </li> */}
            </ul>


             <div className="mt-3">
                {/* <MainButton
              MainButton="Instant Quote"
              color="bg-[#EF0000] text-white"
              link="/brands"
            /> */}
             </div>
          </div>
        )}
      </header>
    </div>
  );
}
