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
  return (
    <>
      <Marquee />
      <div className="w-full header header-component">
        <Navbar
          className="text-white bg-black"
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
              <button className=" w-[50px] text-[12px] font-medium font-poppins flex flex-col items-center rounded-lg p-[4px] text-primary">
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
                        src="https://labxbackend.s3.us-east-2.amazonaws.com/Clip+path+group.webp"
                        width={200}
                        height={200}
                        alt="Brand Logo"
                        className="logo_LabX"
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
                          className="btn__menu inline-flex items-center hover:text-yellow-200"
                          onClick={toggleDropdown}
                        >
                          <span className="mr-1">Services</span>
                          <MdKeyboardArrowDown />
                        </button>
                        {isDropdownOpen && (
                          <ul className="dropdown-menus absolute hidden text-white pt-1">
                            {/* <li className="block px-4 py-2 hover:bg-gray-800 hover:text-yellow-200">
                            <Link href="/mail-in-repair" onClick={toggleMenu}>
                              Mail In Repair
                            </Link>
                          </li> */}
                            <li className="block px-4 py-2 hover:bg-gray-800 hover:text-yellow-200">
                              <Link href="/training" onClick={toggleMenu}>
                                Training{" "}
                              </Link>
                            </li>
                            <li className="block px-4 py-2 hover:bg-gray-800 hover:text-yellow-200">
                              <Link
                                href="/b2b-repair-services"
                                onClick={toggleMenu}
                              >
                                B2B Repair{" "}
                              </Link>
                            </li>
                            <li className="block px-4 py-2 hover:bg-gray-800 hover:text-yellow-200">
                              <Link href="/ps5-repair" onClick={toggleMenu}>
                                PS5 Repair
                              </Link>
                            </li>
                            <li className="block px-4 py-2 hover:bg-gray-800 hover:text-yellow-200">
                              <Link
                                href="/screen-refurbishing"
                                onClick={toggleMenu}
                              >
                                Screen Refurbishment{" "}
                              </Link>
                            </li>
                            <li className="block px-4 py-2 hover:bg-gray-800 hover:text-yellow-200">
                              <Link href="/data-recovery" onClick={toggleMenu}>
                                Data Recovery{" "}
                              </Link>
                            </li>
                            <li className=" px-4 py-2 hover:bg-gray-800 hover:text-yellow-200 flex items-center justify-between cursor-pointer">
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
                            <li className=" px-4 py-2 hover:bg-gray-800 hover:text-yellow-200 flex items-center justify-between cursor-pointer">
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
                            <li className=" px-4 py-2 hover:bg-gray-800 hover:text-yellow-200 flex items-center justify-between cursor-pointer">
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

                    {/* header */}
                    <li>
                      <Link href="/mail-in-repair" onClick={toggleMenu}>
                        Mail In Repair
                      </Link>
                    </li>
                    <li
                      className="flex justify-center items-center gap-1 border-[1px] rounded-md border-primary w-fit hover:text-yellow-200 
                    hover:border-yellow-200 p-1
                    "
                    >
                      <span className="text-[16px]">Parts Store</span>
                      <span className="text-white">
                        <Image
                          src={commingsoon}
                          width={30}
                          height={30}
                          alt=""
                        />
                      </span>
                    </li>
                    <li>
                      <Link
                        className="hover:text-yellow-200"
                        href="/training"
                        onClick={toggleMenu}
                      >
                        Training
                      </Link>
                    </li>
                    <li>
                      <Link
                        className="hover:text-yellow-200"
                        href="/screen-refurbishing"
                        onClick={toggleMenu}
                      >
                        Screen Refurbishment
                      </Link>
                    </li>
                    <div className="dropdown inline-block relative">
                      <button
                        className="btn__menu inline-flex items-center hover:text-yellow-200"
                        onClick={togglePriceDropdown}
                      >
                        <span className="mr-1">Price list</span>
                        <svg
                          className="fill-current h-4 w-4"
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 20 20"
                        >
                          <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />{" "}
                        </svg>
                      </button>
                      {isPriceDropdownOpen && (
                        <ul className="dropdown-menu absolute hidden text-white pt-1">
                          {listData.map((item, index) => {
                            return (
                              <li
                                key={index}
                                className="block px-4 py-2 hover:bg-gray-800  hover:text-yellow-200 cursor-pointer"
                                onClick={() => PricetoggleMenu(item.id)}
                              >
                                <span className=" text-[16px]">
                                  {item.btnName}
                                </span>
                              </li>
                            );
                          })}
                        </ul>
                      )}
                    </div>
                    {/* <li>
                      <Link
                        className="hover:text-yellow-200"
                        href="/price"
                        onClick={toggleMenu}
                      >
                        Price List
                      </Link>
                    </li> */}
                    <li>
                      <Link
                        className="hover:text-yellow-200"
                        href="/contact-us"
                        onClick={toggleMenu}
                      >
                        Contact Us
                      </Link>
                    </li>
                    <li>
                      <div className="dropdown inline-block relative">
                        <button
                          className="btn__menu inline-flex items-center hover:text-yellow-200"
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
                            <li className="block px-4 py-2 hover:bg-gray-800 hover:text-yellow-200 cursor-pointer">
                              <Link
                                className=""
                                href="/about-us"
                                onClick={toggleMenu}
                              >
                                Meet Bharat
                              </Link>
                            </li>
                            <li className="block px-4 py-2 hover:bg-gray-800 hover:text-yellow-200 cursor-pointer">
                              <Link
                                className=""
                                href="/what-we-do"
                                onClick={toggleMenu}
                              >
                                What We Do
                              </Link>
                            </li>
                            <li className="block px-4 py-2 hover:bg-gray-800 hover:text-yellow-200 cursor-pointer">
                              <Link
                                className=""
                                href="/faq"
                                onClick={toggleMenu}
                              >
                                FAQ{" "}
                              </Link>
                            </li>
                            <li className="block px-4 py-2 hover:bg-gray-800 hover:text-yellow-200 cursor-pointer">
                              <Link
                                className="hover:text-yellow-200"
                                href="/blogs"
                                onClick={toggleMenu}
                              >
                                Blogs{" "}
                              </Link>
                            </li>
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
                <Link href="/mail-in-repair">
                  <button
                    className="btn hidden lg:block uppercase"
                    area-label=" Start the repair process for your device"
                  >
                    Start Repair{" "}
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </Navbar>
      </div>
    </>
  );
}
