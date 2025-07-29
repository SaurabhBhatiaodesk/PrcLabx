import { useState } from "react";
import Image from "next/image";
import { MdKeyboardArrowDown } from "react-icons/md";
import sendicon from "../../../public/Images/icons/send.svg";
import Link from "next/link";
import ToastNotification from "../../components/ToastNotification/ToastNotification";
import commingsoon from "../../../public/Images/coming-soon.svg";
const MobileFooterMenue = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const [email, setEmail] = useState("");
  const [error, setError] = useState(""); // State to handle error message
  const [loading, setLoading] = useState(false); // To track loading state
  const [toast, setToast] = useState<{
    message: string;
    type: "success" | "error";
  } | null>(null);
  const apiUrl = process.env.NEXT_PUBLIC_LEAFYMANGO_API_URL;
  const handleToggle = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

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

  return (
    <div className="max-w-lg mx-auto p-[12px] mt-4 ">
      {/* Our Services Section */}
      <div className="mb-4">
        <div
          className="flex justify-between items-center p-[12px] rounded-[10px] cursor-pointer border-[1px]"
          onClick={() => handleToggle(0)}
        >
          <span className="text-[17px] tracking-[1.5px] text-primary">
            Our Services
          </span>
          <MdKeyboardArrowDown
            className={`transition-transform duration-300 !text-primary ${
              activeIndex === 0 ? "rotate-180" : ""
            }`}
          />
        </div>
        <div
          className={`overflow-hidden transition-max-height duration-500 ease-in-out ${
            activeIndex === 0 ? "max-h-screen" : "max-h-0"
          }`}
        >
          <ul className="p-[12px]   rounded-b-lg text-[16px]">
            <li className="mb-2 text-primary">
              <Link href="/mail-in-repair">Mail-In-Repair</Link>
            </li>
            <li className="mb-2 text-primary">
              <Link href="/training">Training</Link>
            </li>
            <li className="mb-2 text-primary">
              <Link href="/b2b-repair-services">B2B Repair</Link>
            </li>
            <li className="mb-2 text-primary">
              <Link href="/ps5-repair">PS5 Repair</Link>
            </li>
            <li className="mb-2 text-primary">
              <Link href="/brands/game-console">Game Console</Link>
            </li>
            <li className="mb-2 text-primary">
              <Link href="/screen-refurbishing">Screen Refurbishment</Link>
            </li>
            <li className="mb-2 text-primary">
              <Link href="data-recovery">Data Recovery</Link>
            </li>
            <li className="mb-2 text-primary">
              <Link href="/coming-soon" target="_blank">
                Parts Store
              </Link>
            </li>
            <Link href="/coming-soon">
              <div className="flex items-center gap-2">
                <li className="mb-2 text-primary">Repair Form</li>
                <span className="text-white">
                  <Image src={commingsoon} width={40} height={30} alt="" />
                </span>
              </div>
            </Link>
            <Link href="/coming-soon">
              <div className="flex items-center gap-2">
                <li className="mb-2 text-primary">Repair Solutions</li>
                <span className="text-white">
                  <Image src={commingsoon} width={40} height={30} alt="" />
                </span>
              </div>
            </Link>
          </ul>
        </div>
      </div>

      {/* Second Section */}
      <div className="mb-4">
        <div
          className="flex justify-between items-center  p-[12px] rounded-[10px] cursor-pointer border-[1px]"
          onClick={() => handleToggle(1)}
        >
          <span className="text-[17px] tracking-[1.5px] text-primary">
            Quick links
          </span>
          <MdKeyboardArrowDown
            className={`transition-transform duration-300 !text-primary ${
              activeIndex === 1 ? "rotate-180" : ""
            }`}
          />
        </div>
        <div
          className={`overflow-hidden transition-max-height duration-500 ease-in-out ${
            activeIndex === 1 ? "max-h-screen" : "max-h-0"
          }`}
        >
          <ul className="p-[12px]   rounded-b-lg text-[16px]">
            <li className="mb-2 text-primary">
              <Link href="/about-us">About Us</Link>
            </li>
            <li className="mb-2 text-primary">
              <Link href="/contact-us">Contact Us</Link>
            </li>
            <li className="mb-2 text-primary">
              <Link href="/blogs">Blogs</Link>
            </li>

            <li className="mb-2 text-primary">
              <Link href="/faq">FAQs</Link>
            </li>
            <li className="mb-2 text-primary">
              <Link href="/what-we-do">What we do</Link>
            </li>
            <li className="mb-2 text-primary">
              <Link href="/Trademark_Disclaimer">Trademark Disclaimer</Link>
            </li>
            <li className="mb-2 text-primary">
              <Link href="/Warranty_and_Terms">Warranty and Terms</Link>
            </li>
            <li className="mb-2 text-primary">
              <Link href="/Shipping_Policy">Shipping Policy</Link>
            </li>

            <li className="mb-2 text-primary">
              <Link href="/Terms-and-conditions">Terms and Conditions</Link>
            </li>
            <li className="mb-2 text-primary">
              <Link href="/privacypolicy">Privacy Policy</Link>
            </li>
          </ul>
        </div>
      </div>

      {/* Contact Info Section */}
      <div className="mb-4">
        <div
          className="flex justify-between items-center  p-[12px] rounded-[10px] cursor-pointer border-[1px]"
          onClick={() => handleToggle(2)}
        >
          <span className="text-[17px] tracking-[1.5px] text-primary">
            Contact Info
          </span>
          <MdKeyboardArrowDown
            className={`transition-transform duration-300 !text-primary ${
              activeIndex === 2 ? "rotate-180" : ""
            }`}
          />
        </div>
        <div
          className={`overflow-hidden transition-max-height duration-500 ease-in-out ${
            activeIndex === 2 ? "max-h-screen" : "max-h-0"
          }`}
        >
          <ul className="p-[12px]   rounded-b-lg text-[16px]">
            <div className="border-gray-300 border-1 rounded-lg p-2 mb-2">
              <Link
                href="https://www.google.com/maps/place/LabXRepair/@-33.766127,150.7743917,15z/data=!4m6!3m5!1s0x6b129b2ceccf72d7:0x2bd3b51996f0eed4!8m2!3d-33.766127!4d150.7743917!16s%2Fg%2F11lv7kb0ct?hl=en-GB&entry=ttu&g_ep=EgoyMDI0MTExMC4wIKXMDSoASAFQAw%3D%3D"
                legacyBehavior
              >
                <a
                  className="text-primary"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  122 Queen St, St Marys NSW 2760, Australia
                </a>
              </Link>
              <li className="mb-2 text-primary">
                <a href="tel:+(02)86783298 " className="hover:underline">
                  (02)86783298
                </a>
              </li>
              <li className=" text-primary">
                <a
                  href="mailto:service@prcrepair.com.au  "
                  className="hover:underline"
                >
                  service@prcrepair.com.au
                </a>
              </li>
            </div>

            <div className="border-gray-300 border-1 rounded-lg p-2 mb-2">
              <Link
                href="https://www.google.com/maps/place/TechCity+Schofields+Phone+Repair/@-33.7057889,150.8759664,859m/data=!3m1!1e3!4m6!3m5!1s0x6b129f1f16bc4395:0xf55b68eeebf4e2e2!8m2!3d-33.7057889!4d150.8759664!16s%2Fg%2F11smlzr8dn?entry=ttu&g_ep=EgoyMDI1MDYzMC4wIKXMDSoASAFQAw%3D%3D"
                legacyBehavior
              >
                <a
                  className="text-primary"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Kiosk 1/227 Railway Terrace, Schofields NSW 2762
                </a>
              </Link>
              <li className="mb-2 text-primary">
                <a href="tel:+(02)72527141 " className="hover:underline">
                  (02)72527141
                </a>
              </li>
              <li className=" text-primary">
                <a
                  href="mailto:service@prcrepair.com.au  "
                  className="hover:underline"
                >
                  service@prcrepair.com.au
                </a>
              </li>
            </div>

            {toast && (
              <ToastNotification
                message={toast.message}
                type={toast.type}
                onHide={handleToastHide}
                notiClass=""
              />
            )}
          </ul>
        </div>
      </div>
      <div></div>
    </div>
  );
};

export default MobileFooterMenue;
