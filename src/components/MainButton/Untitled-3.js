"use client";

import React, { useEffect, useState } from "react";
import { Navbar, NavbarBrand, NavbarContent } from "@nextui-org/react";
import { RxCross2 } from "react-icons/rx";
import "./Header.css";
import Link from "next/link";
import Image from "next/image";
import { FaInstagram, FaTiktok, FaYoutube } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { TbMenu2 } from "react-icons/tb";
import { IoIosCart } from "react-icons/io";
import Marquee from "../Marquee/Marquee";
import { SlSocialFacebook } from "react-icons/sl";
import { useDispatch } from "react-redux";
import { useRouter } from "next/navigation";
import { MdKeyboardArrowDown } from "react-icons/md";
import commingsoon from "../../../public/Images/coming-soon.svg";
import newlogo from "../../../public/Images/prclogo.png";
import MainButton from "../MainButton/MainButton";
import ProfessionalMegaMenu from "../../app/MegaMenu/ProfessionalMegaMenu";
import { IoChevronDown } from "react-icons/io5";

export default function App() {
  const dispatch = useDispatch();
  const Router = useRouter();
  const [isMenuOpen, setIsMenuOpen] = useState(true);
  const [loder, setLoader] = useState(true);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isPriceDropdownOpen, setIsPriceDropdownOpen] = useState(false);
  const [isAboutDropdownOpen, setIsAboutDropdownOpen] = useState(false);

  // Toggle function to change menu state
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const togglePriceDropdown = () => {
    setIsPriceDropdownOpen(!isPriceDropdownOpen);
  };

  const toggleAboutDropdown = () => {
    setIsAboutDropdownOpen(!isAboutDropdownOpen);
  };

  const MailRepair = () => {
    sessionStorage.setItem("repairType", "mail-in-repair");
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoader(false);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <Marquee
        marquee_bg="bg-tertiary"
        marquee_text="text-black"
        marquee_messages="Every Device, Every Repair—Handled Entirely In-House, Zero Outsourcing."
      />
      <div className="t">
        <Navbar
          className="text-secondary bg-primary h-20 "
          isBordered
          maxWidth="2xl"
        >
          <NavbarContent
            className="lg:hidden"
            id="nav-toggle"
            onClick={toggleMenu}
          >
            {/* <NavbarMenuToggle
              aria-label={isMenuOpen ? "Close menu" : "Open menu"}
            /> */}
            {isMenuOpen ? (
              <button className=" w-[30px] text-[12px] font-medium font-poppins flex flex-col items-center rounded-lg p-[4px] text-secondary">
                {" "}
                <TbMenu2 fontSize={24} height={19} />{" "}
                <span className="leading-3"> Menu</span>
              </button>
            ) : (
              <button className="w-[30px] flex justify-center">
                <RxCross2 />
              </button>
            )}
          </NavbarContent>

          <div className="w-full">
            <div className="navbar text-pastelBlue items-center justify-between">
              {loder ? (
                <div className="flex items-center justify-between px-6 py-3">
                  <div className="h-10 w-10 rounded-full bg-gray-300 animate-pulse"></div>

                  {/* Menu Items */}
                  <div className="flex space-x-4">
                    {Array.from({ length: 9 }).map((_, i) => (
                      <div
                        key={i}
                        className="h-4 w-20 bg-gray-300 rounded animate-pulse"
                      ></div>
                    ))}
                  </div>

                  <div className="h-10 w-36 bg-red-300 rounded-full animate-pulse"></div>
                </div>
              ) : (
                <>
                  <div className="navmenu flex items-center justify-between ">
                    <Link href="/">
                      <Image
                        src={newlogo}
                        width={200}
                        height={200}
                        alt="Brand Logo"
                        className="logo_LabX w-[60px]"
                      />
                    </Link>

                    <div className="lg:hidden cardicon">
                      {/* <MainButton MainButton="Instant Quote" link="/contact-us" /> */}
                      <button
                        onClick={() => Router.push("/contact-us")}
                        className="text-sm bg-[#EF0000]  py-2 px-3 capitalize text-primary rounded-xl"
                      >
                        Instant Quote
                      </button>{" "}
                    </div>

                    <ProfessionalMegaMenu />
                    <div className="block lg:hidden">
                      <div
                        className={`${
                          isMenuOpen ? "hidden" : "block"
                        } lg:flex  flex-grow  items-center absolute bg-primary left-0 h-screen w-full md:top-[72px] !top-[65px]`}
                        id="nav-content"
                      >
                        <ul className="menu menu-horizontal px-1 flex items-center space-y-2 mt-2">
                          <li>
                            <div className="">
                              <Link
                                href="/training"
                                onClick={toggleMenu}
                                className='flex items-center px-[5px] py-2 text-base font-semibold transition-all duration-200  rounded-lg hover:bg-[#122d37] hover:text-white hover:shadow-md transform hover:-translate-y-0.5
                    "text-gray-700 hover:text-white"
                  '
                              >
                                Training{" "}
                              </Link>
                              <Link
                                href="/b2b-repair-services"
                                onClick={toggleMenu}
                                className='flex items-center px-[5px] py-2 text-base font-semibold transition-all duration-200  rounded-lg hover:bg-[#122d37] hover:text-white hover:shadow-md transform hover:-translate-y-0.5
                    "text-gray-700 hover:text-white"
                  '
                              >
                                B2B Repair{" "}
                              </Link>
                              <Link
                                href="/ps5-repair"
                                onClick={toggleMenu}
                                className='flex items-center px-[5px] py-2 text-base font-semibold transition-all duration-200  rounded-lg hover:bg-[#122d37] hover:text-white hover:shadow-md transform hover:-translate-y-0.5
                    "text-gray-700 hover:text-white"
                  '
                              >
                                PS5 Repair
                              </Link>
                              <Link
                                href="/mail-in-repair"
                                onClick={toggleMenu}
                                className='flex items-center px-[5px] py-2 text-base font-semibold transition-all duration-200  rounded-lg hover:bg-[#122d37] hover:text-white hover:shadow-md transform hover:-translate-y-0.5
                    "text-gray-700 hover:text-white"
                  '
                              >
                                Mail In Repair
                              </Link>
                              <Link
                                href="/screen-refurbishing"
                                onClick={toggleMenu}
                                className='flex items-center px-[5px] py-2 text-base font-semibold transition-all duration-200  rounded-lg hover:bg-[#122d37] hover:text-white hover:shadow-md transform hover:-translate-y-0.5
                    "text-gray-700 hover:text-white"
                  '
                              >
                                Screen Refurbishment{" "}
                              </Link>
                              <Link
                                href="/data-recovery"
                                onClick={toggleMenu}
                                className='flex items-center px-[5px] py-2 text-base font-semibold transition-all duration-200  rounded-lg hover:bg-[#122d37] hover:text-white hover:shadow-md transform hover:-translate-y-0.5
                    "text-gray-700 hover:text-white"
                  '
                              >
                                Data Recovery{" "}
                              </Link>
                              <Link
                                href="/coming-soon"
                                target="_blank"
                                onClick={toggleMenu}
                                className='flex items-center px-[5px] py-2 text-base font-semibold transition-all duration-200  rounded-lg hover:bg-[#122d37] hover:text-white hover:shadow-md transform hover:-translate-y-0.5
                    "text-gray-700 hover:text-white"
                  '
                              >
                                Parts Store
                              </Link>
                              <Link href="/coming-soon">
                                <div
                                  className='flex justify-between items-center px-[5px] py-2  text-base font-semibold transition-all duration-200 rounded-lg hover:bg-[#122d37] hover:text-white hover:shadow-md transform hover:-translate-y-0.5
                    "text-gray-700 hover:text-white"'
                                >
                                  <span
                                    className="
                  "
                                  >
                                    Repair Form{" "}
                                  </span>
                                  <span className="text-white">
                                    <Image
                                      src={commingsoon}
                                      width={20}
                                      height={20}
                                      alt=""
                                    />
                                  </span>
                                </div>
                              </Link>

                              <div
                                className='flex justify-between items-center px-[5px] py-2  text-base font-semibold transition-all duration-200 rounded-lg hover:bg-[#122d37] hover:text-white hover:shadow-md transform hover:-translate-y-0.5
                    "text-gray-700 hover:text-white"'
                              >
                                <span
                                  className="
                  "
                                >
                                  Repair Solutions{" "}
                                </span>
                                <span className="text-white">
                                  <Image
                                    src={commingsoon}
                                    width={20}
                                    height={20}
                                    alt=""
                                  />
                                </span>
                              </div>
                            </div>
                          </li>
                          <li>
                            <div className="dropdowns services_drop inline-block relative">
                              <button
                                className="flex items-center px-[5px] py-2 text-base font-semibold transition-all duration-200  rounded-lg hover:bg-[#122d37] hover:text-white hover:shadow-md transform "
                                onClick={toggleDropdown}
                              >
                                <span className="mr-1">About us</span>
                                <IoChevronDown className="ml-2 text-sm transition-transform duration-200 group-hover:rotate-180" />
                              </button>
                              {isDropdownOpen && (
                                <ul className="dropdown-menus  hidden text-prc  pt-1">
                                  <Link
                                    href="/about-us"
                                    onClick={toggleMenu}
                                    className='flex items-center px-[5px] py-2 text-base font-semibold transition-all duration-200  rounded-lg hover:bg-[#122d37] hover:text-white hover:shadow-md transform hover:-translate-y-0.5
                    "text-gray-700 hover:text-white"
                  '
                                  >
                                    Meet Bharat
                                  </Link>
                                  <Link
                                    href="/what-we-do"
                                    onClick={toggleMenu}
                                    className='flex items-center px-[5px] py-2 text-base font-semibold transition-all duration-200  rounded-lg hover:bg-[#122d37] hover:text-white hover:shadow-md transform hover:-translate-y-0.5
                    "text-gray-700 hover:text-white"
                  '
                                  >
                                    What We Do
                                  </Link>
                                  <Link
                                    href="/blogs"
                                    onClick={toggleMenu}
                                    className='flex items-center px-[5px] py-2 text-base font-semibold transition-all duration-200  rounded-lg hover:bg-[#122d37] hover:text-white hover:shadow-md transform hover:-translate-y-0.5
                    "text-gray-700 hover:text-white"
                  '
                                  >
                                    Blogs{" "}
                                  </Link>
                                  <Link
                                    href="/faq"
                                    onClick={toggleMenu}
                                    className='flex items-center px-[5px] py-2 text-base font-semibold transition-all duration-200  rounded-lg hover:bg-[#122d37] hover:text-white hover:shadow-md transform hover:-translate-y-0.5
                    "text-gray-700 hover:text-white"
                  '
                                  >
                                    Faq{" "}
                                  </Link>
                                  <Link
                                    href="/Trademark_Disclaimer"
                                    onClick={toggleMenu}
                                    className='flex items-center px-[5px] py-2 text-base font-semibold transition-all duration-200  rounded-lg hover:bg-[#122d37] hover:text-white hover:shadow-md transform hover:-translate-y-0.5
                    "text-gray-700 hover:text-white"
                  '
                                  >
                                    Trademark Disclaimer{" "}
                                  </Link>
                                  <Link
                                    href="/Warranty_and_Terms"
                                    onClick={toggleMenu}
                                    className='flex items-center px-[5px] py-2 text-base font-semibold transition-all duration-200  rounded-lg hover:bg-[#122d37] hover:text-white hover:shadow-md transform hover:-translate-y-0.5
                    "text-gray-700 hover:text-white"
                  '
                                  >
                                    Warranty And Terms{" "}
                                  </Link>
                                  <Link
                                    href="/Shipping_Policy"
                                    onClick={toggleMenu}
                                    className='flex items-center px-[5px] py-2 text-base font-semibold transition-all duration-200  rounded-lg hover:bg-[#122d37] hover:text-white hover:shadow-md transform hover:-translate-y-0.5
                    "text-gray-700 hover:text-white"
                  '
                                  >
                                    Shipping Policy{" "}
                                  </Link>
                                </ul>
                              )}
                            </div>
                          </li>
                        </ul>

                        <div className="lg:hidden block">
                          <div className=" flex gap-3 mt-5 justify-start pt-3">
                            <Link
                              href="https://www.facebook.com/prcrepair122/"
                              target="blank"
                            >
                              <SlSocialFacebook
                                className="hover:scale-110 transition-transform duration-200"
                                fontSize={30}
                              />
                            </Link>
                            <Link
                              href="https://www.instagram.com/prc.repair/"
                              target="blank"
                            >
                              <FaInstagram
                                className="hover:scale-110 transition-transform duration-200"
                                fontSize={30}
                              />
                            </Link>
                            <Link
                              href="https://x.com/prc_repair"
                              target="blank"
                            >
                              <FaXTwitter
                                className="hover:scale-110 transition-transform duration-200"
                                fontSize={30}
                              />
                            </Link>
                            <Link
                              href="https://www.youtube.com/channel/UClA97i8j5HkTHcK5pgCtpBw"
                              target="_blank"
                              rel="noopener noreferrer"
                            >
                              <FaYoutube
                                className="hover:scale-110 transition-transform duration-200"
                                fontSize={30}
                              />
                            </Link>
                            {/* <Link
                          href="https://www.tiktok.com/@labxrepair"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <FaTiktok
                            className="hover:scale-110 transition-transform duration-200"
                            fontSize={30}
                          />
                        </Link> */}
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="lg:block  hidden">
                      <MainButton
                        MainButton="Instant Quote"
                        color=""
                        // onClick={MailRepair}
                        link="/contact-us"
                        aria-label="Start the repair process for your device"
                      />
                    </div>
                  </div>
                </>
              )}
            </div>
          </div>
        </Navbar>
      </div>
    </>
  );
}
