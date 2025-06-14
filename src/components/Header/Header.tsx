"use client";

import React, { useState } from "react";
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
import { setPriceCat } from "@/app/redux/slice";
import { useRouter } from "next/navigation";
import { MdKeyboardArrowDown } from "react-icons/md";
import commingsoon from "../../../public/Images/coming-soon.svg";
import newlogo from "../../../public/Images/prclogo.png";
import MainButton from "../MainButton/MainButton";
import ProfessionalMegaMenu from "@/app/MegaMenu/ProfessionalMegaMenu";
export default function App() {
  const dispatch = useDispatch();
  const Router = useRouter();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isPriceDropdownOpen, setIsPriceDropdownOpen] = useState(false);
  const [isAboutDropdownOpen, setIsAboutDropdownOpen] = useState(false);

  // Toggle function to change menu state
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const PricetoggleMenu = (data: number) => {
    dispatch(setPriceCat(data));
    Router.push("/price");
  };
  const listData = [
    {
      id: 0,
      btnName: "Price List",
    },
    {
      id: 1,
      btnName: "Screen Buy-Back Pricing ",
    },
    {
      id: 2,
      btnName: "Data Recovery Pricing",
    },
    {
      id: 3,
      btnName: "General Repair Pricing",
    },
    {
      id: 4,
      btnName: "DIY/Techcnian Damage Pricing",
    },
  ];

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
  return (
    <>
      <Marquee
        marquee_bg="bg-tertiary"
        marquee_text="text-black"
        marquee_messages=". Every Device, Every Repair—Handled Entirely In-House, Zero Outsourcing"
      />
      <div className="w-full header header-component">
        <Navbar
          className="text-secondary bg-primary"
          isBordered
          isMenuOpen={isMenuOpen}
          onMenuOpenChange={setIsMenuOpen}
        >
          <NavbarContent
            className="lg:hidden"
            id="nav-toggle"
            onClick={toggleMenu}
          >
            {/* <NavbarMenuToggle
              aria-label={isMenuOpen ? "Close menu" : "Open menu"}
            /> */}
            {!isMenuOpen ? (
              <button className=" w-[50px] text-[12px] font-medium font-poppins flex flex-col items-center rounded-lg p-[4px] text-secondary">
                {" "}
                <TbMenu2 fontSize={24} height={19} />{" "}
                <span className="leading-3"> Menu</span>
              </button>
            ) : (
              <button className="w-[50px] flex justify-center">
                <RxCross2 />
              </button>
            )}
          </NavbarContent>
          <div className="w-full">
            <div className="navbar text-pastelBlue items-center justify-between">
              <div className="navmenu flex items-center justify-between">
                <NavbarContent className="flex justify-center items-center">
                  <NavbarBrand>
                    <Link href="/">
                      <Image
                        src={newlogo}
                        width={200}
                        height={200}
                        alt="Brand Logo"
                        className="logo_LabX w-[60px]"
                      />
                    </Link>
                  </NavbarBrand>
                </NavbarContent>

                <div className="flex gap-[6px] relative">
                  {/* <span className="showmobile">
                    <Link href="tel:+61455777077">
                    <MdCall   fontSize={26}/>
                    </Link>
                  </span> */}
                  <Link
                    className="showmobile hover:scale-110 transition-transform duration-200"
                    href="tel:+61455777077"
                  >
                    <IoIosCart fontSize={26} />
                  </Link>
                </div>
                <ProfessionalMegaMenu />
                <div
                  className={`${
                    isMenuOpen ? "block" : "hidden"
                  } lg:flex  flex-grow justify-center items-center`}
                  id="nav-content"
                >
                  <ul className="menu menu-horizontal px-1 flex items-center">
                    <li>
                      <div className="dropdowns services_drop inline-block relative">
                        <button
                          className="btn__menu inline-flex items-center hover:text-fourth mr-2"
                          onClick={toggleDropdown}
                        >
                          <span className="mr-1">Services</span>
                          <MdKeyboardArrowDown />
                        </button>
                        {isDropdownOpen && (
                          <ul className="dropdown-menus absolute hidden text-white pt-1">
                            <Link href="/training" onClick={toggleMenu}>
                              <li className="block px-4 py-2 hover:bg-gray-800 hover:text-fourth">
                                Training{" "}
                              </li>
                            </Link>
                            <Link
                              href="/b2b-repair-services"
                              onClick={toggleMenu}
                            >
                              <li className="block px-4 py-2 hover:bg-gray-800 hover:text-fourth">
                                B2B Repair{" "}
                              </li>
                            </Link>
                            <Link href="/ps5-repair" onClick={toggleMenu}>
                              <li className="block px-4 py-2 hover:bg-gray-800 hover:text-fourth">
                                PS5 Repair
                              </li>
                            </Link>
                            <Link
                              href="/screen-refurbishing"
                              onClick={toggleMenu}
                            >
                              <li className="block px-4 py-2 hover:bg-gray-800 hover:text-fourth">
                                Screen Refurbishment{" "}
                              </li>
                            </Link>
                            <Link href="/data-recovery" onClick={toggleMenu}>
                              <li className="block px-4 py-2 hover:bg-gray-800 hover:text-fourth">
                                Data Recovery{" "}
                              </li>
                            </Link>
                            <li className=" px-4 py-2 hover:bg-gray-800 hover:text-fourth flex items-center justify-between cursor-pointer">
                              <span className="text-[16px]">Parts Store </span>
                              <span className="text-white">
                                <Image
                                  src={commingsoon}
                                  width={40}
                                  height={30}
                                  alt=""
                                />
                              </span>
                            </li>
                            <li className=" px-4 py-2 hover:bg-gray-800 hover:text-fourth flex items-center justify-between cursor-pointer">
                              <span className="text-[16px]">Repair Form </span>
                              <span className="text-white">
                                <Image
                                  src={commingsoon}
                                  width={40}
                                  height={30}
                                  alt=""
                                />
                              </span>
                            </li>
                            <li className=" px-4 py-2 hover:bg-gray-800 hover:text-fourth flex items-center justify-between cursor-pointer">
                              <span className="text-[16px]">
                                Repair Solutions{" "}
                              </span>

                              <span className="text-white">
                                <Image
                                  src={commingsoon}
                                  width={40}
                                  height={30}
                                  alt=""
                                />
                              </span>
                            </li>
                          </ul>
                        )}
                      </div>
                    </li>
                    <li>
                      <div className="dropdown inline-block relative">
                        <button
                          className="btn__menu inline-flex items-center hover:text-fourth"
                          onClick={toggleAboutDropdown}
                        >
                          <span className="mr-1">About us</span>
                          <svg
                            className="fill-current h-4 w-4"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 20 20"
                          >
                            <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />{" "}
                          </svg>
                        </button>
                        {isAboutDropdownOpen && (
                          <ul className="dropdown-menu absolute hidden text-white pt-1">
                            <Link
                              className=""
                              href="/about-us"
                              onClick={toggleMenu}
                            >
                              <li className="block px-4 py-2 hover:bg-gray-800 hover:text-fourth cursor-pointer">
                                Meet Bharat
                              </li>
                            </Link>
                            <Link
                              className=""
                              href="/what-we-do"
                              onClick={toggleMenu}
                            >
                              <li className="block px-4 py-2 hover:bg-gray-800 hover:text-fourth cursor-pointer">
                                What We Do
                              </li>
                            </Link>
                            <Link className="" href="/faq" onClick={toggleMenu}>
                              <li className="block px-4 py-2 hover:bg-gray-800 hover:text-fourth cursor-pointer">
                                FAQ{" "}
                              </li>
                            </Link>
                            <Link
                              className="hover:text-fourth"
                              href="/blogs"
                              onClick={toggleMenu}
                            >
                              <li className="block px-4 py-2 hover:bg-gray-800 hover:text-fourth cursor-pointer">
                                Blogs{" "}
                              </li>
                            </Link>
                          </ul>
                        )}
                      </div>
                    </li>
                  </ul>

                  <div className="lg:hidden block">
                    <div className=" flex gap-3 mt-5 justify-start pt-3">
                      <Link
                        href="https://www.facebook.com/profile.php?id=61568955864034"
                        target="blank"
                      >
                        <SlSocialFacebook
                          className="hover:scale-110 transition-transform duration-200"
                          fontSize={30}
                        />
                      </Link>
                      <Link
                        href="https://www.instagram.com/labxrepair/"
                        target="blank"
                      >
                        <FaInstagram
                          className="hover:scale-110 transition-transform duration-200"
                          fontSize={30}
                        />
                      </Link>
                      <Link href="https://x.com/LabxRepair" target="blank">
                        <FaXTwitter
                          className="hover:scale-110 transition-transform duration-200"
                          fontSize={30}
                        />
                      </Link>
                      <Link
                        href="https://www.youtube.com/@PRCRepair"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <FaYoutube
                          className="hover:scale-110 transition-transform duration-200"
                          fontSize={30}
                        />
                      </Link>
                      <Link
                        href="https://www.tiktok.com/@labxrepair"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <FaTiktok
                          className="hover:scale-110 transition-transform duration-200"
                          fontSize={30}
                        />
                      </Link>
                    </div>
                  </div>
                </div>
                {/* <Link href="/mail-in-repair">
                  <button
                    className=" hidden lg:block uppercase bg-[#EF0000] text-white text-[18px] py-[8px] px-[15px] rounded-3xl"
                    area-label=" Start the repair process for your device"
                    onClick={MailRepair}
                  >
                    Instant Quote{" "}
                  </button>
                </Link> */}
                <div className="md:block  hidden">
                 <MainButton
                        MainButton="Instant Quote"
                        color=""
                        // onClick={MailRepair}
                        link="/brands"
                        aria-label="Start the repair process for your device"
                      />
                      </div>
              </div>

            </div>
          </div>
        </Navbar>
      </div>
    </>
  );
}
