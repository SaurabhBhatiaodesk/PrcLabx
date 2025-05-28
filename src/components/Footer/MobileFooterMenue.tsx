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
    <div className="max-w-lg mx-auto p-[12px] mt-4 ">
      {/* Our Services Section */}
      <div className="mb-4">
        <div
          className="flex justify-between items-center p-[12px] rounded-[10px] cursor-pointer border-[1px]"
          onClick={() => handleToggle(0)}
        >
          <span className="text-[17px] tracking-[1.5px]">Our Services</span>
          <MdKeyboardArrowDown
            className={`transition-transform duration-300 ${
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
            <li className="mb-2">
              <Link href="/mail-in-repair">Mail-In-Repair</Link>
            </li>
            <li className="mb-2">
              <Link href="/training">Training</Link>
            </li>
            <li className="mb-2">
              <Link href="/b2b-repair-services">B2B Repair</Link>
            </li>
            <li className="mb-2">
              <Link href="/screen-refurbishing">Screen Refurbishment</Link>
            </li>
            <li className="mb-2">
              <Link href="data-recovery">Data Recovery</Link>
            </li>
            <div className="flex items-center gap-2">
              <li className="mb-2">Parts Store</li>
              <span className="text-white">
                <Image src={commingsoon} width={40} height={30} alt="" />
              </span>
            </div>

            <div className="flex items-center gap-2">
              <li className="mb-2">Repair Form</li>
              <span className="text-white">
                <Image src={commingsoon} width={40} height={30} alt="" />
              </span>
            </div>
            <div className="flex items-center gap-2">
              <li className="mb-2">Repair Solutions</li>
              <span className="text-white">
                <Image src={commingsoon} width={40} height={30} alt="" />
              </span>
            </div>
          </ul>
        </div>
      </div>

      {/* Second Section */}
      <div className="mb-4">
        <div
          className="flex justify-between items-center  p-[12px] rounded-[10px] cursor-pointer border-[1px]"
          onClick={() => handleToggle(1)}
        >
          <span className="text-[17px] tracking-[1.5px]">Quick links</span>
          <MdKeyboardArrowDown
            className={`transition-transform duration-300 ${
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
            <li className="mb-2">
              <Link href="/contact-us">Contact Us</Link>
            </li>
            <li className="mb-2">
              <Link href="/blogs">Blogs</Link>
            </li>
            <li className="mb-2">
              <Link href="/faq">FAQs</Link>
            </li>
            <li className="mb-2">
              <Link href="/what-we-do">What we do</Link>
            </li>
            <li className="mb-2">
              <Link href="/Trademark_Disclaimer">Trademark Disclaimer</Link>
            </li>
            <li className="mb-2">
              <Link href="/Warranty_and_Terms">Warranty and Terms</Link>
            </li>
            <li className="mb-2">
              <Link href="/Shipping_Policy">Shipping Policy</Link>
            </li>

            <li className="mb-2">
              <Link href="/Terms-and-conditions">Terms and Conditions</Link>
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
          <span className="text-[17px] tracking-[1.5px]">Contact Info</span>
          <MdKeyboardArrowDown
            className={`transition-transform duration-300 ${
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
            <li className="mb-2">
              <a
                href="mailto:bharat@labxrepair.com.au"
                className="hover:underline"
              >
                bharat@labxrepair.com.au
              </a>
            </li>
            <li className="mb-2">
              <a href="tel:+61455777077" className="hover:underline">
                +61455777077
              </a>
            </li>

            <Link
              href="https://www.google.com/maps/place/LabXRepair/@-33.766127,150.7743917,15z/data=!4m6!3m5!1s0x6b129b2ceccf72d7:0x2bd3b51996f0eed4!8m2!3d-33.766127!4d150.7743917!16s%2Fg%2F11lv7kb0ct?hl=en-GB&entry=ttu&g_ep=EgoyMDI0MTExMC4wIKXMDSoASAFQAw%3D%3D"
              legacyBehavior
            >
              <a className=" " target="_blank" rel="noopener noreferrer">
                122 Queen St, St Marys NSW 2760, Australia
              </a>
            </Link>

            {toast && (
              <ToastNotification
                message={toast.message}
                type={toast.type}
                onHide={handleToastHide}
                notiClass=""
              />
            )}

            <li className="mb-2">Newsletter </li>
          </ul>
        </div>
      </div>
      <div>
        <h3 className="text-center lg:text-xl text-lg mb-3">
          We DO NOT provide Walk-In Service
        </h3>
      </div>
      <div className="emailsection relative">
        <h3 className="text-center">Newsletter </h3>
        <div className="relative max-w-full">
          <input
            type="email"
            placeholder="Enter your email address"
            className="text-black w-full p-[11px] rounded-[50px] cursor-pointer border-[1px] border-gray-300 focus:outline-none my-2 placeholder:text-[#3737379c] placeholder:font-normal placeholder:text-[16px]"
            value={email}
            onChange={handleEmailChange}
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
        {error && <p className="text-[red] text-sm mt-2">{error}</p>}{" "}
        {loading && (
          // <p className="xl:text-[30px] lg:text-26px text-30px font-poppins text-blue-500">
          //   Processing...
          // </p>
          <div className="flex justify-center items-center">
            <p className="text-sm text-tertiary flex items-center">
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
  );
};

export default MobileFooterMenue;
