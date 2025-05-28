"use client";
import React, { useState } from "react";
import Image from "next/image";
import labx from "../../../public/Images/Brand logos/Frame.svg";
import commingsoon from "../../../public/Images/coming-soon.svg";
import { SlSocialFacebook } from "react-icons/sl";
import { FaInstagram, FaTiktok } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaYoutube } from "react-icons/fa";
import Link from "next/link";
import { IoCallOutline } from "react-icons/io5";

import { CiMail } from "react-icons/ci";
import MobileFooterMenue from "./MobileFooterMenue";
import sendicon from "../../../public/Images/icons/send.svg";
import { FiMail } from "react-icons/fi";
import homefooter from "../../../public/Images/icons/homefooter.svg";
import traning from "../../../public/Images/icons/traning.svg";
import ToastNotification from "../../components/ToastNotification/ToastNotification";
import { MdCall } from "react-icons/md";
import { IoIosCart } from "react-icons/io";
import { TiArrowForward } from "react-icons/ti";
const Footer = () => {
  const [email, setEmail] = useState("");
  const [error, setError] = useState(""); // State to handle error message
  const [loading, setLoading] = useState(false); // To track loading state
  const [toast, setToast] = useState<{
    message: string;
    type: "success" | "error";
  } | null>(null);
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
      const response = await fetch(
        "https://labxbackend.labxrepair.com.au/api/create/subscription",
        {
          method: "POST",
          headers: {
            Authorization: `Bearer <your-token>`,
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ email_address: email }),
        }
      );

      const data = await response.json();

      if (response.ok) {
        setToast({
          message: "Thank you for subscribing to LABX!",
          type: "success",
        });
        // alert("Thank you for subscribing to LABX!");
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

  return (
    <>
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
                      className="mb-4"
                      src="https://labxbackend.s3.us-east-2.amazonaws.com/Clip+path+group.webp"
                      alt=" lab-x"
                    />
                  </Link>
                  <p className="font-[300] font-poppins">
                    LabX is a professional and skilful phone repair service
                    provider in Australia
                  </p>
                  <div className="flex gap-3 mt-5">
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
                  <div className="Abn number flex  items-center   mt-2">
                    <span>
                      <TiArrowForward fontSize={30} />
                    </span>
                    <span className="lg:text-lg text-sm ">
                      ABN No :-{" "}
                      <span className="text-tertiary ">31646271829</span>
                    </span>
                  </div>
                </div>
              </div>
              <div>
                <div>
                  <h3 className="xl:mb-5">Our Services</h3>
                  <div>
                    <ul className="text-[18px]">
                      <div>
                        <Link href="/mail-in-repair">
                          <li className="relative inline-block xl:p-1 group font-poppins font-[300]  hover:text-yellow-200 ">
                            Mail-In-Repair
                            <span className="absolute bottom-[1px] left-0 w-0 h-[1px] bg-current transition-all duration-300 group-hover:w-full"></span>
                          </li>
                        </Link>
                      </div>
                      <div>
                        <Link href="/training">
                          <li className="relative inline-block xl:p-1 group font-poppins font-[300]  hover:text-yellow-200">
                            Training
                            <span className="absolute bottom-[1px] left-0 w-0 h-[1px] bg-current transition-all duration-300 group-hover:w-full"></span>
                          </li>
                        </Link>
                      </div>
                      <div>
                        <Link href="/b2b-repair-services">
                          <li className="relative inline-block xl:p-1 group font-poppins font-[300]  hover:text-yellow-200">
                            B2B Repair
                            <span className="absolute bottom-[1px] left-0 w-0 h-[1px] bg-current transition-all duration-300 group-hover:w-full"></span>
                          </li>
                        </Link>
                      </div>
                      <div>
                        <Link href="/ps5-repair">
                          <li className="relative inline-block xl:p-1 group font-poppins font-[300]  hover:text-yellow-200">
                            PS5 Repair
                            <span className="absolute bottom-[1px] left-0 w-0 h-[1px] bg-current transition-all duration-300 group-hover:w-full"></span>
                          </li>
                        </Link>
                      </div>
                      <div>
                        <Link href="/screen-refurbishing">
                          <li className="relative inline-block xl:p-1 group font-poppins font-[300]  hover:text-yellow-200">
                            Screen Refurbishment
                            <span className="absolute bottom-[1px] left-0 w-0 h-[1px] bg-current transition-all duration-300 group-hover:w-full"></span>
                          </li>
                        </Link>
                      </div>
                      <div>
                        <Link href="/data-recovery">
                          <li className="relative inline-block xl:p-1 group font-poppins font-[300]  hover:text-yellow-200">
                            Data Recovery
                            <span className="absolute bottom-[1px] left-0 w-0 h-[1px] bg-current transition-all duration-300 group-hover:w-full"></span>
                          </li>
                        </Link>
                      </div>
                      <div>
                        <span>
                          <li className="relative inline-flex  items-center gap-2 xl:p-1 group font-poppins font-[300] hover:text-yellow-200 cursor-pointer">
                            Parts Store
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
                      </div>
                      <div>
                        <span>
                          <li className="relative inline-flex  items-center gap-2 xl:p-1 group font-poppins font-[300] hover:text-yellow-200 cursor-pointer">
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
                      </div>
                      <div>
                        <span>
                          <li className="relative inline-flex  items-center gap-2 xl:p-1 group font-poppins font-[300] hover:text-yellow-200 cursor-pointer">
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
                      </div>
                    </ul>
                  </div>
                </div>
              </div>
              <div>
                <div>
                  <h3 className="xl:mb-5">Quick links</h3>
                  <div>
                    <ul className="text-[18px]">
                      <div>
                        <Link href="/about-us">
                          <li className="relative inline-block xl:p-1 group font-poppins font-[300] hover:text-yellow-200">
                            About Us
                            <span className="absolute bottom-[1px] left-0 w-0 h-[1px] bg-current transition-all duration-300 group-hover:w-full"></span>
                          </li>
                        </Link>
                      </div>
                      <div>
                        <Link href="/contact-us">
                          <li className="relative inline-block xl:p-1 group font-poppins font-[300] hover:text-yellow-200">
                            Contact Us
                            <span className="absolute bottom-[1px] left-0 w-0 h-[1px] bg-current transition-all duration-300 group-hover:w-full"></span>
                          </li>
                        </Link>
                      </div>
                      <div>
                        <Link href="/blogs">
                          <li className="relative inline-block xl:p-1 group font-poppins font-[300] hover:text-yellow-200">
                            Blogs
                            <span className="absolute bottom-[1px] left-0 w-0 h-[1px] bg-current transition-all duration-300 group-hover:w-full"></span>
                          </li>
                        </Link>
                      </div>
                      <div>
                        <Link href="/faq">
                          <li className="relative inline-block xl:p-1 group font-poppins font-[300] hover:text-yellow-200">
                            FAQ’s
                            <span className="absolute bottom-[1px] left-0 w-0 h-[1px] bg-current transition-all duration-300 group-hover:w-full"></span>
                          </li>
                        </Link>
                      </div>
                      <div>
                        <Link href="/Trademark_Disclaimer">
                          <li className="relative inline-block xl:p-1 group font-poppins font-[300] hover:text-yellow-200">
                            Trademark Disclaimer
                            <span className="absolute bottom-[1px] left-0 w-0 h-[1px] bg-current transition-all duration-300 group-hover:w-full"></span>
                          </li>
                        </Link>
                      </div>
                      <div>
                        <Link href="/Warranty_and_Terms">
                          <li className="relative inline-block xl:p-1 group font-poppins font-[300] hover:text-yellow-200">
                            Warranty and Terms
                            <span className="absolute bottom-[1px] left-0 w-0 h-[1px] bg-current transition-all duration-300 group-hover:w-full"></span>
                          </li>
                        </Link>
                      </div>
                      <div>
                        <Link href="/Shipping_Policy">
                          <li className="relative inline-block xl:p-1 group font-poppins font-[300] hover:text-yellow-200">
                            Shipping Policy
                            <span className="absolute bottom-[1px] left-0 w-0 h-[1px] bg-current transition-all duration-300 group-hover:w-full"></span>
                          </li>
                        </Link>
                      </div>

                      <div>
                        <Link href="/Terms_and_Conditions">
                          <li className="relative inline-block xl:p-1 group font-poppins font-[300] hover:text-yellow-200">
                            Terms and conditions
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
                  <h3 className="xl:mb-5">Contact Info</h3>
                  <div className="flex flex-col gap-2">
                    <div className="flex gap-4 items-center xl:py-[8px] py-[5px] border-b-[0.5px] border-[#a7a7a7b3]">
                      <CiMail
                        className="hover:scale-110 transition-transform duration-200"
                        fontSize={25}
                      />
                      <Link
                        href="mailto:bharat@labxrepair.com.au"
                        legacyBehavior
                      >
                        <a className="text-[18px] transition-transform duration-300 hover:scale-105 font-poppins font-[300] hover:text-yellow-200">
                          bharat@labxrepair.com.au
                        </a>
                      </Link>
                    </div>
                    <div className="flex gap-4 items-center xl:py-[8px] py-[5px] border-b-[0.5px] border-[#a7a7a7b3]">
                      <IoCallOutline
                        className="hover:scale-110 transition-transform duration-200"
                        fontSize={25}
                      />
                      <Link href="" legacyBehavior>
                        <a
                          href="tel:+61455777077"
                          className="text-[18px] transition-transform duration-300 hover:scale-105 font-poppins font-[300] hover:text-yellow-200"
                        >
                          +61455777077
                        </a>
                      </Link>
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
                    <div>
                      <h3 className="lg:text-xl text-lg">
                        We DO NOT provide Walk-In Service
                      </h3>
                    </div>
                    <div>
                      {toast && (
                        <ToastNotification
                          message={toast.message}
                          type={toast.type}
                          onHide={handleToastHide}
                          notiClass=""
                        />
                      )}

                      <h2 className="xl:text-[30px]  lg:text-26px text-30px font-poppins">
                        Newsletter
                      </h2>
                    </div>
                    <div className="relative max-w-full">
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
                    </div>
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
                    className="mb-4 flex justify-center "
                    src="https://labxbackend.s3.us-east-2.amazonaws.com/Clip+path+group.webp"
                    width={200}
                    height={200}
                    alt=" lab-x"
                  />
                </Link>
              </div>
              <p className="text-center">
                LabX is a professional and skilful phone repair service provider
                in Australia
              </p>
              <div className="flex gap-3 mt-5 justify-center">
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
              <div className="Abn number flex  items-center justify-center  mt-2">
                <span>
                  <TiArrowForward fontSize={30} />
                </span>
                <span className="lg:text-lg text-sm ">
                  ABN No :- <span className="text-tertiary ">31646271829</span>
                </span>
              </div>

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
          <section className="copywrite py-5 pb-10 xl:py-8">
            <div className="flex-col flex justify-between xl:flex-row">
              <div className="">
                <p className="xl:text-[16px] text-[14px] tracking-[1px] text-center ">
                  Copyright © LabX Repair {new Date().getFullYear()} - All
                  rights reserved
                </p>
              </div>
              <div className="sm:text-center">
                <p className="xl:text-[16px] text-[14px] tracking-[1px] text-center ">
                  Website Designed by{" "}
                  <a href="https://www.base2brand.com/">Base2Brand Infotech</a>{" "}
                </p>
              </div>
            </div>
          </section>
          <section className="block lg:hidden">
            <div className="py-3 bg-black  relative z-[1000]  ">
              <div className="grid grid-cols-5 justify-between gap-2 footer-app py-3 fixed bottom-0 w-full left-0 right-0 bg-black border-t-1 border-[#4a4a4a77] ">
                <Link href="/">
                  <div className="flex flex-col items-center">
                    <Image
                      className="w-[24px]"
                      src={homefooter}
                      alt=" labx repair "
                    />
                    <span className="text-[12px] tracking-[1.5px] ">Home</span>
                  </div>
                </Link>
                <Link href="/training">
                  <div className="flex flex-col items-center">
                    <Image
                      className="w-[27px]"
                      src={traning}
                      alt=" labx repair "
                    />
                    <span className="text-[12px] tracking-[1.5px] ">
                      Training
                    </span>
                  </div>
                </Link>
                <Link href="mailto:bharat@labxrepair.com.au">
                  <div className="flex flex-col items-center">
                    <FiMail fontSize={24} />
                    <span className="text-[12px] tracking-[1.5px] ">Mail</span>
                  </div>
                </Link>
                <Link href="/coming-soon">
                  <div className="flex flex-col items-center">
                    <IoIosCart fontSize={26} />
                    <span className="text-[12px] tracking-[1.5px] ">Cart</span>
                  </div>
                </Link>

                <Link href="tel:+61455777077">
                  <div className="flex flex-col items-center">
                    <MdCall fontSize={24} />
                    <span className="text-[12px] tracking-[1.5px] ">Call</span>
                  </div>
                </Link>
              </div>
            </div>
          </section>
        </div>
      </div>
    </>
  );
};

export default Footer;
