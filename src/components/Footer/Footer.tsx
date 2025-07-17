"use client";
import { BiSolidPhoneCall } from "react-icons/bi";
import { HiArrowUpRight } from "react-icons/hi2";

import React, { useState } from "react";
import Image from "next/image";
import homespinner from "../../../public/Images/homespinner.gif";
import commingsoon from "../../../public/Images/coming-soon.svg";
import { SlSocialFacebook } from "react-icons/sl";
import { FaInstagram, FaTiktok } from "react-icons/fa";
import { FaLocationDot, FaXTwitter } from "react-icons/fa6";
import { FaYoutube } from "react-icons/fa";
import Link from "next/link";
import { IoCallOutline, IoMailUnread } from "react-icons/io5";

import { CiLocationOn, CiMail } from "react-icons/ci";
import MobileFooterMenue from "./MobileFooterMenue";
import sendicon from "../../../public/Images/icons/send.svg";
import { FiMail } from "react-icons/fi";
import homefooter from "../../../public/Images/icons/homefooter.svg";
import traning from "../../../public/Images/icons/traning.svg";
import ToastNotification from "../../components/ToastNotification/ToastNotification";
import { MdCall } from "react-icons/md";
import { IoIosCart } from "react-icons/io";

import newlogo from "../../../public/Images/prclogo.png";
import { RxCross2 } from "react-icons/rx";
const Footer = () => {
  const [popopOpen, setpopopOpen] = useState(false);
  const [email, setEmail] = useState("");
  const [error, setError] = useState(""); // State to handle error message
  const [loading, setLoading] = useState(false); // To track loading state
  const [toast, setToast] = useState<{
    message: string;
    type: "success" | "error";
  } | null>(null);
  const apiUrl = process.env.NEXT_PUBLIC_LEAFYMANGO_API_URL;
  // Email validation regex pattern
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  // Handle the subscription logic
  const handleSubscribe = async (e: { preventDefault: () => void }) => {
    e.preventDefault(); // Prevent default form submission

    // Validate email format
    if (!emailRegex.test(email)) {
      setError("Please enter a valid email address.");
      return;
    }

    // Reset error if the email is valid
    setError("");
    setLoading(true); // Show loader when processing starts

    try {
      const response = await fetch(`${apiUrl}/api/create/subscription`, {
        method: "POST",
        headers: {
          Authorization: `Bearer <your-token>`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email_address: email }),
      });

      const data = await response.json();

      if (response.ok) {
        setToast({
          message: "Thank you for subscribing to PRC!",
          type: "success",
        });
        // alert("Thank you for subscribing to PRC!");
        setEmail(""); // Reset email input
      } else {
        // alert("wrong")
        setToast({
          message: data?.message || "Something went wrong. Please try again.",
          type: "error",
        });
        // alert(data.message || "Something went wrong. Please try again.");
      }
    } catch (error) {
      console.error("Error subscribing:", error);
      alert("An error occurred. Please try again later.");
    } finally {
      setLoading(false); // Hide the loader once the process is complete
    }
  };

  // Handle email input change
  const handleEmailChange = (e: { target: { value: any } }) => {
    const value = e?.target?.value;
    setEmail(value);

    // Clear error message if the user starts typing a valid email
    if (emailRegex.test(value)) {
      setError(""); // Clear error if the email is valid
    }
  };

  const handleToastHide = () => {
    setToast(null); // Reset the toast state
  };
  const scrollTotop = () => {
    // Scroll to the top with smooth behavior
    window.scrollTo({ top: 0, behavior: "smooth" });
  };
  const popopmodal = () => {
    setpopopOpen(true);
  };
  const handleClose = () => {
    setpopopOpen(false);
  };
  return (
    <div className="bg-prc">
      <div className="container">
        <div className="pt-5 xl:pt-20">
          <section className="hidden lg:block">
            <div className="grid xl:grid-cols-[2fr_2fr_2fr_2.5fr] lg:grid-cols-2 gap-12 pb-6">
              <div className="">
                <div>
                  <Link href="/">
                    <Image
                      width={200}
                      height={200}
                      className="mb-4 w-[65px]"
                      src={newlogo}
                      alt=" lab-x"
                    />
                  </Link>
                  <p className="font-[300] font-poppins text-primary">
                    PRC is a professional and skilful phone repair service
                    provider in Australia
                  </p>
                  <div className="flex gap-3 mt-5">
                    <div className="p-[8px] flex justify-center items-center bg-tertiary rounded-[50%]">
                      <Link
                        href="https://www.facebook.com/prcrepair122/"
                        target="blank"
                      >
                        <SlSocialFacebook
                          className="hover:scale-110 transition-transform duration-200"
                          fontSize={30}
                        />
                      </Link>
                    </div>
                    <div className="p-[8px] flex justify-center items-center bg-tertiary rounded-[50%]">
                      <Link
                        href="https://www.instagram.com/prc.repair/"
                        target="blank"
                      >
                        <FaInstagram
                          className="hover:scale-110 transition-transform duration-200"
                          fontSize={30}
                        />
                      </Link>
                    </div>
                    <div className="p-[8px] flex justify-center items-center bg-tertiary rounded-[50%]">
                      <Link href="https://x.com/prc_repair" target="blank">
                        <FaXTwitter
                          className="hover:scale-110 transition-transform duration-200"
                          fontSize={30}
                        />
                      </Link>
                    </div>
                    <div className="p-[8px] flex justify-center items-center bg-tertiary rounded-[50%]">
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
                    </div>
                  </div>
                  {/* <div className="Abn number flex  items-center   mt-2">
                    <span>
                      <TiArrowForward fontSize={30} />
                    </span>
                    <span className="lg:text-lg text-sm ">
                      ABN No :-{" "}
                      <span className="text-tertiary ">31646271829</span>
                    </span>
                  </div> */}
                </div>
              </div>
              <div>
                <div>
                  <h3 className="xl:mb-5 text-tertiary">Our Services</h3>
                  <div>
                    <ul className="text-[18px]">
                      <div>
                        <Link href="/mail-in-repair">
                          <li className="relative inline-block xl:p-1 group font-poppins font-[300]  hover:text-yellow-200 text-primary ">
                            Mail-In-Repair
                            <span className="absolute bottom-[1px] left-0 w-0 h-[1px] bg-current transition-all duration-300 group-hover:w-full"></span>
                          </li>
                        </Link>
                      </div>
                      <div>
                        <Link href="/training">
                          <li className="relative inline-block xl:p-1 group font-poppins font-[300]  hover:text-yellow-200 text-primary">
                            Training
                            <span className="absolute bottom-[1px] left-0 w-0 h-[1px] bg-current transition-all duration-300 group-hover:w-full"></span>
                          </li>
                        </Link>
                      </div>
                      <div>
                        <Link href="/b2b-repair-services">
                          <li className="relative inline-block xl:p-1 group font-poppins font-[300]  hover:text-yellow-200 text-primary">
                            B2B Repair
                            <span className="absolute bottom-[1px] left-0 w-0 h-[1px] bg-current transition-all duration-300 group-hover:w-full"></span>
                          </li>
                        </Link>
                      </div>
                      <div>
                        <Link href="/ps5-repair">
                          <li className="relative inline-block xl:p-1 group font-poppins font-[300]  hover:text-yellow-200 text-primary">
                            PS5 Repair
                            <span className="absolute bottom-[1px] left-0 w-0 h-[1px] bg-current transition-all duration-300 group-hover:w-full"></span>
                          </li>
                        </Link>
                      </div>
                      <div>
                        <Link href="/screen-refurbishing">
                          <li className="relative inline-block xl:p-1 group font-poppins font-[300]  hover:text-yellow-200 text-primary">
                            Screen Refurbishment
                            <span className="absolute bottom-[1px] left-0 w-0 h-[1px] bg-current transition-all duration-300 group-hover:w-full"></span>
                          </li>
                        </Link>
                      </div>
                      <div>
                        <Link href="/data-recovery">
                          <li className="relative inline-block xl:p-1 group font-poppins font-[300]  hover:text-yellow-200 text-primary">
                            Data Recovery
                            <span className="absolute bottom-[1px] left-0 w-0 h-[1px] bg-current transition-all duration-300 group-hover:w-full"></span>
                          </li>
                        </Link>
                      </div>
                      <div>
                        <Link
                          href="/coming-soon"
                          target="_blank"
                        >
                          <li className="relative inline-block xl:p-1 group font-poppins font-[300]  hover:text-yellow-200 text-primary">
                            Parts Store
                            <span className="absolute bottom-[1px] left-0 w-0 h-[1px] bg-current transition-all duration-300 group-hover:w-full"></span>
                          </li>
                        </Link>
                      </div>
                      <div>
                        <Link href="/coming-soon">
                          <span>
                            <li className="relative inline-flex  items-center gap-2 xl:p-1 group font-poppins font-[300] text-primary hover:text-yellow-200 cursor-pointer">
                              Repair Form
                              <span className="text-white">
                                <Image
                                  src={commingsoon}
                                  width={40}
                                  height={30}
                                  alt=""
                                />
                              </span>
                              <span className="absolute bottom-[1px] left-0 w-0 h-[1px] bg-current transition-all duration-300 group-hover:w-full"></span>
                            </li>
                          </span>
                        </Link>
                      </div>
                      <div>
                        <Link href="/coming-soon">
                          <span>
                            <li className="relative inline-flex  items-center gap-2 xl:p-1 group font-poppins font-[300] text-primary hover:text-yellow-200 cursor-pointer">
                              Repair Solutions
                              <span className="text-white">
                                <Image
                                  src={commingsoon}
                                  width={40}
                                  height={30}
                                  alt=""
                                />
                              </span>
                              <span className="absolute bottom-[1px] left-0 w-0 h-[1px] bg-current transition-all duration-300 group-hover:w-full"></span>
                            </li>
                          </span>
                        </Link>
                      </div>
                    </ul>
                  </div>
                </div>
              </div>
              <div>
                <div>
                  <h3 className="xl:mb-5 text-tertiary">Quick links</h3>
                  <div>
                    <ul className="text-[18px]">
                      <div>
                        <Link href="/about-us">
                          <li className="text-primary relative inline-block xl:p-1 group font-poppins font-[300] hover:text-yellow-200">
                            About Us
                            <span className="absolute bottom-[1px] left-0 w-0 h-[1px] bg-current transition-all duration-300 group-hover:w-full"></span>
                          </li>
                        </Link>
                      </div>
                      <div>
                        <Link href="/contact-us">
                          <li className="text-primary relative inline-block xl:p-1 group font-poppins font-[300] hover:text-yellow-200">
                            Contact Us
                            <span className="absolute bottom-[1px] left-0 w-0 h-[1px] bg-current transition-all duration-300 group-hover:w-full"></span>
                          </li>
                        </Link>
                      </div>
                      <div>
                        <Link href="/blogs">
                          <li className="text-primary relative inline-block xl:p-1 group font-poppins font-[300] hover:text-yellow-200">
                            Blogs
                            <span className="absolute bottom-[1px] left-0 w-0 h-[1px] bg-current transition-all duration-300 group-hover:w-full"></span>
                          </li>
                        </Link>
                      </div>
                      <div>
                        <Link href="/faq">
                          <li className="text-primary relative inline-block xl:p-1 group font-poppins font-[300] hover:text-yellow-200">
                            FAQ’s
                            <span className="absolute bottom-[1px] left-0 w-0 h-[1px] bg-current transition-all duration-300 group-hover:w-full"></span>
                          </li>
                        </Link>
                      </div>
                      <div>
                        <Link href="/Trademark_Disclaimer">
                          <li className="text-primary relative inline-block xl:p-1 group font-poppins font-[300] hover:text-yellow-200">
                            Trademark Disclaimer
                            <span className="absolute bottom-[1px] left-0 w-0 h-[1px] bg-current transition-all duration-300 group-hover:w-full"></span>
                          </li>
                        </Link>
                      </div>
                      <div>
                        <Link href="/Warranty_and_Terms">
                          <li className="text-primary relative inline-block xl:p-1 group font-poppins font-[300] hover:text-yellow-200">
                            Warranty and Terms
                            <span className="absolute bottom-[1px] left-0 w-0 h-[1px] bg-current transition-all duration-300 group-hover:w-full"></span>
                          </li>
                        </Link>
                      </div>
                      <div>
                        <Link href="/Shipping_Policy">
                          <li className="text-primary relative inline-block xl:p-1 group font-poppins font-[300] hover:text-yellow-200">
                            Shipping Policy
                            <span className="absolute bottom-[1px] left-0 w-0 h-[1px] bg-current transition-all duration-300 group-hover:w-full"></span>
                          </li>
                        </Link>
                      </div>

                      <div>
                        <Link href="/Terms_and_Conditions">
                          <li className="text-primary relative inline-block xl:p-1 group font-poppins font-[300] hover:text-yellow-200">
                            Terms and conditions
                            <span className="absolute bottom-[1px] left-0 w-0 h-[1px] bg-current transition-all duration-300 group-hover:w-full"></span>
                          </li>
                        </Link>
                        <Link href="/privacypolicy">
                          <li className="text-primary relative inline-block xl:p-1 group font-poppins font-[300] hover:text-yellow-200">
                          Privacy Policy
                            <span className="absolute bottom-[1px] left-0 w-0 h-[1px] bg-current transition-all duration-300 group-hover:w-full"></span>
                          </li>
                        </Link>
                        
                      </div>
                    </ul>
                  </div>
                </div>
              </div>
              <div>
                <div>
                  <h3 className="xl:mb-5 text-tertiary">Contact Info</h3>
                  <div className="flex flex-col gap-2">
                    <div className="flex gap-4 items-center xl:py-[8px] py-[5px] border-b-[0.5px] border-[#a7a7a7b3]">
                      <CiMail
                        className="hover:scale-110 transition-transform duration-200 text-tertiary"
                        fontSize={25}
                      />
                      <Link
                        href="mailto:service@prcrepair.com.au  "
                        legacyBehavior
                      >
                        <a className="text-[16px] transition-transform duration-300 hover:scale-105 font-poppins font-[300] hover:text-yellow-200 text-primary">
                          service@prcrepair.com.au
                        </a>
                      </Link>
                    </div>
                    <div className="flex gap-4 items-center xl:py-[8px] py-[5px] border-b-[0.5px] border-[#a7a7a7b3]">
                      <div className=" flex  flex-col gap-2">
                        <div className="flex gap-2">
                          <FaLocationDot
                            className="hover:scale-110 transition-transform duration-200 text-tertiary"
                            fontSize={25}
                          />
                          <Link href="" legacyBehavior>
                            <a
                              href="https://www.google.com/maps/place/122+Queen+St,+St+Marys+NSW+2760,+Australia/@-33.7586704,150.756797,5340m/data=!3m1!1e3!4m6!3m5!1s0x6b129ab1929d4f97:0x103feb9784d7d023!8m2!3d-33.766127!4d150.7743917!16s%2Fg%2F11b8y9vjx6?entry=ttu&g_ep=EgoyMDI1MDYwMi4wIKXMDSoASAFQAw%3D%3D"
                              className="text-[16px] transition-transform duration-300 hover:scale-105 font-poppins font-[300] hover:text-yellow-200 text-primary"
                              target="_blank"
                            >
                              122 Queen St, St Marys NSW 2760, Australia
                            </a>
                          </Link>
                        </div>

                        <div className="flex gap-2">
                          <IoCallOutline
                            className="hover:scale-110 transition-transform duration-200 text-tertiary"
                            fontSize={25}
                          />
                          <Link href="" legacyBehavior>
                            <a
                              href="tel:+(02)86783298"
                              className="text-[16px] transition-transform duration-300 hover:scale-105 font-poppins font-[300] hover:text-yellow-200 text-primary"
                            >
                              {/* +61286783298 */}
                              (02) 8678 3298
                            </a>
                          </Link>
                        </div>
                      </div>
                    </div>
                    <div className="flex flex-row gap-4 items-center xl:py-[8px] py-[5px] border-b-[0.5px] border-[#a7a7a7b3]">
                      <div className=" flex  flex-col gap-2">
                        <div className="flex gap-2">
                          <FaLocationDot
                            className="hover:scale-110 transition-transform duration-200 text-tertiary"
                            fontSize={25}
                          />
                          <Link href="" legacyBehavior>
                            <a
                              href="https://www.google.com/maps/place/TechCity+Schofields+Phone+Repair/@-33.7057889,150.8759664,859m/data=!3m2!1e3!4b1!4m6!3m5!1s0x6b129f1f16bc4395:0xf55b68eeebf4e2e2!8m2!3d-33.7057889!4d150.8759664!16s%2Fg%2F11smlzr8dn?entry=ttu&g_ep=EgoyMDI1MDYzMC4wIKXMDSoASAFQAw%3D%3D"
                              className="text-[16px] transition-transform duration-300 hover:scale-105 font-poppins font-[300] hover:text-yellow-200 text-primary"
                              target="_blank"
                            >
                              Kiosk 1/227 Railway Terrace, Schofields NSW 2762,
                              Australia
                            </a>
                          </Link>
                        </div>

                        <div className="flex gap-2">
                          <IoCallOutline
                            className="hover:scale-110 transition-transform duration-200 text-tertiary"
                            fontSize={25}
                          />
                          <Link href="" legacyBehavior>
                            <a
                              href="tel:(02)72527141"
                              className="text-[16px] transition-transform duration-300 hover:scale-105 font-poppins font-[300] hover:text-yellow-200 text-primary"
                            >
                              (02) 7252 7141
                            </a>
                          </Link>
                        </div>
                      </div>
                    </div>
                    {/* <div className="flex gap-4 items-center xl:py-[8px] py-[5px] border-b-[0.5px] border-[#a7a7a7b3]">
                      <IoLocationOutline
                        className="hover:scale-110 transition-transform duration-200"
                        fontSize={25}
                      />
                      <Link
                        href="https://www.google.com/maps/place/LabXRepair/@-33.766127,150.7743917,15z/data=!4m6!3m5!1s0x6b129b2ceccf72d7:0x2bd3b51996f0eed4!8m2!3d-33.766127!4d150.7743917!16s%2Fg%2F11lv7kb0ct?hl=en-GB&entry=ttu&g_ep=EgoyMDI0MTExMC4wIKXMDSoASAFQAw%3D%3D"
                        legacyBehavior
                      >
                        <a
                          className="text-[18px] transition-transform duration-300 hover:scale-105 font-poppins font-[300] hover:text-yellow-200"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          122 Queen St, St Marys NSW 2760, Australia
                        </a>
                      </Link>
                    </div> */}
                    {/* <div>
                      <h3 className="lg:text-xl text-lg text-primary">
                        Sign-Up The PRC
                      </h3>
                    </div> */}
                    <div>
                      {/* {toast && (
                        <ToastNotification
                          message={toast.message}
                          type={toast.type}
                          onHide={handleToastHide}
                          notiClass=""
                        />
                      )} */}

                      {/* <h2 className="xl:text-[30px]  lg:text-26px text-30px font-poppins">
                        Newsletter
                      </h2> */}
                    </div>
                    {/* <div className="relative max-w-full">
                      <input
                        type="email"
                        placeholder="Enter your email address"
                        className="text-black w-full p-[11px] rounded-[50px] cursor-pointer border-[1px] border-gray-300 focus:outline-none my-2 placeholder:text-[#3737379c] placeholder:font-normal placeholder:text-[16px]"
                        value={email}
                        onChange={handleEmailChange} // Update email state on change
                      />
                      <button
                        type="submit"
                        className={`text-white rounded-[50px] flex items-center justify-center game absolute bg-black p-[11px] right-[2px] top-1/2 transform -translate-y-1/2 ${
                          loading ? "blur-sm pointer-events-none" : ""
                        }`}
                        style={{ width: "14%" }}
                        onClick={handleSubscribe} // Trigger the subscription logic on button click
                        disabled={loading} // Prevent multiple clicks
                      >
                        <Image className="gl" src={sendicon} alt="Send icon" />
                      </button>
                    </div> */}
                    {error && <p className="text-[red] text-sm m-0">{error}</p>}{" "}
                    {loading && (
                      <div className="flex justify-center items-center">
                        <p className="text-sm text-tertiary flex items-start">
                          Processing
                          <span className="ml-2 flex space-x-1">
                            <span className="w-2 h-2 bg-tertiary rounded-full animate-bounce"></span>
                            <span className="w-2 h-2 bg-tertiary rounded-full animate-bounce delay-200"></span>
                            <span className="w-2 h-2 bg-tertiary rounded-full animate-bounce delay-400"></span>
                          </span>
                        </p>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </section>
          <section className="block lg:hidden">
            <div className="">
              <div className="flex justify-center">
                <Link href="/">
                  <Image
                    width={200}
                    height={200}
                    className="mb-4 w-[65px]"
                    src={newlogo}
                    alt=" lab-x"
                  />
                </Link>
              </div>
              <p className="text-center text-primary">
                PRC is a professional and skilful phone repair service provider
                in Australia
              </p>
              <div className="flex gap-3 mt-5 justify-center">
                <div className="p-[8px] flex justify-center items-center bg-tertiary rounded-[50%]">
                  <Link
                    href="https://www.facebook.com/prcrepair122/"
                    target="blank"
                  >
                    <SlSocialFacebook
                      className="hover:scale-110 transition-transform duration-200"
                      fontSize={30}
                    />
                  </Link>
                </div>
                <div className="p-[8px] flex justify-center items-center bg-tertiary rounded-[50%]">
                  <Link
                    href="https://www.instagram.com/prc.repair/"
                    target="blank"
                  >
                    <FaInstagram
                      className="hover:scale-110 transition-transform duration-200"
                      fontSize={30}
                    />
                  </Link>
                </div>
                <div className="p-[8px] flex justify-center items-center bg-tertiary rounded-[50%]">
                  <Link href="https://x.com/prc_repair" target="blank">
                    <FaXTwitter
                      className="hover:scale-110 transition-transform duration-200"
                      fontSize={30}
                    />
                  </Link>
                </div>
                <div className="p-[8px] flex justify-center items-center bg-tertiary rounded-[50%]">
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
                </div>
              </div>
              {/* <div className="Abn number flex  items-center justify-center  mt-2">
                <span>
                  <TiArrowForward fontSize={30} />
                </span>
                <span className="lg:text-lg text-sm ">
                  ABN No :- <span className="text-tertiary ">31646271829</span>
                </span>
              </div> */}

              <MobileFooterMenue />
            </div>
          </section>

          <hr
            style={{
              height: "0.2px",
              border: "none",
              backgroundColor: "#42425a",
            }}
          />
          <section className="copywrite py-2 pb-10 xl:py-4">
            <div className="flex-col flex justify-between xl:flex-row">
              <div className="">
                <p className="xl:text-[16px] text-[14px] tracking-[1px] text-center text-primary m-0">
                  Copyright © Phone repair center {new Date().getFullYear()} -
                  All rights reserved.
                </p>
              </div>
              <div className="sm:text-center">
                <p className="xl:text-[16px] text-[14px] tracking-[1px] text-center text-primary m-0">
                  Website Designed by{" "}
                  <a href="https://www.base2brand.com/" target="_blank">
                    Base2Brand Infotech.
                  </a>{" "}
                </p>
              </div>
            </div>
          </section>
          <section className="block lg:hidden">
            <div className="py-3 bg-black  relative z-[1000]  ">
              <div className="grid grid-cols-4 justify-between gap-2 footer-app py-1 fixed bottom-0 w-full left-0 right-0 bg-prc border-t-1 border-[#4a4a4a77]  rounded-[10px_10px_0px_0px] ">
                <Link href="/">
                  <div className="flex flex-col items-center">
                    <Image
                      className="w-[24px]"
                      src={homefooter}
                      alt=" Phone repair center "
                    />
                    <span className="text-[12px] tracking-[1.5px] text-white ">
                      Home
                    </span>
                  </div>
                </Link>
                <Link href="/training">
                  <div className="flex flex-col items-center">
                    <Image
                      className="w-[27px]"
                      src={traning}
                      alt=" Phone repair center "
                    />
                    <span className="text-[12px] tracking-[1.5px] text-white ">
                      Training
                    </span>
                  </div>
                </Link>
                <a href="mailto:service@prcrepair.com.au">
                  <div className="flex flex-col items-center">
                    <FiMail fontSize={24} color="white" />
                    <span className="text-[12px] tracking-[1.5px] text-white  ">
                      Mail
                    </span>
                  </div>
                </a>

                <div onClick={popopmodal}>
                  <div className="flex flex-col items-center">
                    <MdCall fontSize={24} color="white" />
                    <span className="text-[12px] tracking-[1.5px]  text-white">
                      Call
                    </span>
                  </div>
                </div>
                {popopOpen && (
                  <>
                    <div>
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
                              onClick={handleClose}
                            >
                              <RxCross2 />
                            </div>
                            <div className="hidden sm:block absolute top-0 right-0 pt-4 pr-4">
                              <button
                                type="button"
                                data-behavior="cancel"
                                className="bg-white rounded-md text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                              >
                                <span className="sr-only">Close</span>
                                <svg
                                  className="h-6 w-6"
                                  xmlns="http://www.w3.org/2000/svg"
                                  fill="none"
                                  viewBox="0 0 24 24"
                                  stroke="currentColor"
                                  aria-hidden="true"
                                >
                                  <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M6 18L18 6M6 6l12 12"
                                  />
                                </svg>
                              </button>
                            </div>

                            <div className="sm:flex sm:items-start">
                              <h3 className="text-prc bg-tertiary p-2 rounded-lg">
                                Phone repair center
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
              </div>
            </div>
          </section>
        </div>
      </div>
      <Image
        className="p-3 fixed right-0 bottom-0 z-50 lg:block hidden cursor-pointer "
        onClick={scrollTotop}
        src={homespinner}
        alt="homespinner"
      />
    </div>
  );
};

export default Footer;
