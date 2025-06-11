
"use client";
import React, { useState, useEffect } from "react";
import { useRouter, usePathname } from "next/navigation";
import Image from "next/image";
import paypal from "../../../assets/Icons/paypal_888870.svg";
import afterpay from "../../../assets/Icons/afterpay.svg";
import zip from "../../../assets/Icons/zipicon.png";
import american from "../../../assets/Icons/american-express_349228.svg";
import BookSlot from "./BookSlot";
import Link from "next/link";
import FaqComponent from "./FaqComponent";

const Pdp: React.FC<{ pdpDetail: any[]; tabs: any }> = ({
  pdpDetail,
  tabs,
}) => {
  const pathname = usePathname();
  const router = useRouter();
  const [popop, setPopop] = useState(false);
  const [close, setClose] = useState(false);
  const [activeTab, setActiveTab] = useState<string | undefined>(undefined);
  const [selectedPart, setSelectedPart] = useState<string | undefined>();
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const [defaultSelectedPart, setDefaultSelectedPart] = useState<any>(null); // Ensure this is `any` to allow object structure\

  // Set the active tab when the component mounts or pathname changes
  useEffect(() => {
    const lastSegment = pathname.split("/").pop(); // Get the last segment from the path
    const tab = tabs.find((tab: any) => tab.alias === lastSegment);
    if (tab) {
      setActiveTab(tab.id.toString()); // Set the active tab based on the slug in the URL
    }
  }, [pathname, tabs]);

  // Function to handle tab click and update the URL
  const handleTabClick = (tab: any) => {
    setActiveTab(tab.id.toString());
    // Update the URL to reflect the clicked tab's alias
    const pathWithoutLastSegment = pathname.split("/").slice(0, -1).join("/");
    const newUrl = `${pathWithoutLastSegment}/${tab.alias}`;
    router.push(newUrl); // Replace the last segment without appending
  };

  // Check if the image exists in pdpDetail, otherwise use a fallback static image
  const getImage = (part: any) => {
    return part?.image
      ? part.image
      : "https://fdn2.gsmarena.com/vv/bigpic/apple-iphone-16-pro.jpg"; // Default image if no image is available
  };

  useEffect(() => {
    if (pdpDetail.length > 0) {
      // Make sure the `id` is correctly set to a string
      setDefaultSelectedPart(pdpDetail[0]); // Set the default part to the first item
    }
  }, [pdpDetail]);

  const handleParClick = (part: any) => {
    setSelectedPart(part.id.toString()); // Ensure the selected part's ID is stored as a string
    setDefaultSelectedPart(part); // Update the default selected part on click
  };

  // Fix for the `isSelected` check by ensuring type consistency
  const isSelected = (part: any) => {
    const defaultSelectedId = defaultSelectedPart?.id?.toString(); // Ensure defaultSelectedPart.id is a string
    const selectedPartId = selectedPart;
    return (
      defaultSelectedId === part.id.toString() ||
      selectedPartId === part.id.toString()
    );
  };
  const accordionData = [
    {
      title: "What types of devices do you repair?",
      content:
        "We repair a wide range of mobile devices, including iPhones, Android phones, tablets, and MacBooks. We specialize in logic board repairs, microsoldering, and screen refurbishments.",
    },
    {
      title: "What types of repairs do you specialize in?",
      content:
        "Our expertise includes screen replacement, motherboard repairs, data recovery, and micro soldering. We also handle complex repairs like Face ID issues, and water damage recovery.",
    },
    {
      title: "Do you offer any warranties on your repairs?",
      content:
        "Yes, all repairs come with a 1 Year warranty on parts and workmanship. This ensures that if the same issue reoccurs, we will repair it free of charge, provided no further damage has occurred to the device.",
    },
    {
      title: "What is the warranty on liquid-damaged devices?",
      content:
        "We do not recommend repairing liquid-damaged devices and suggest only data recovery services. If the customer insists on repair, we do not provide any warranty, including for the replaced parts.",
    },
    {
      title: "Will all functions work on my dead device after repair?",
      content:
        "No guarantees can be made. The initial quote covers the visible issue, e.g., turning on a dead device. Since devices have numerous functions, issues like a non-working camera or mic will require a separate quote unless the fault is minor, in which case we’ll address it during the repair. Major issues will need re-quoting.",
    },
    {
      title: "Do you offer repair services for all phone brands?",
      content:
        "Yes, we provide repair services for a wide range of phone brands, including Apple, Samsung, Xiaomi, and more. Our technicians are experienced in handling various devices and models.",
    },
    {
      title: "How long does a typical phone repair take?",
      content:
        "Most phone repairs are completed within a few hours, depending on the complexity of the issue. We strive to return your device in working condition as quickly as possible.",
    },
  ];
  const handleFaqClick = () => {
    setPopop(true);
 
  }
  const handleClose = () => {
    setPopop(false);
  };
  const MailRepair = () => {
    router.push("/mail-in-repair?scrollTo=stapergkform");
  }
  return (
    <>
      <div className="bg-[#FFF5EB] relative">
        <div className=" rounded-lg md:p-6  max-w-6xl mx-auto p-3">
          {/* Header */}
          <h2 className="text-2xl font-bold mb-4 text-prc">
            SERVICES WE OFFER FOR{" "}
            <span className="text-purple-700">IPHONE 15</span>
          </h2>

          {/* Tabs */}
          <div className="grid xl:grid-cols-6 lg:grid-cols-4 grid-cols-3 gap-2 mb-3">
            {tabs.map((tab: any) => (
              <button
                key={tab.id}
                onClick={() => handleTabClick(tab)}
                className={`rounded-t-lg rounded-b-none md:px-4 md:py-2 p-1 text-xs font-medium border border-gray-300 ${activeTab === tab.id.toString()
                  ? "bg-tertiary  text-black border-b-0 text-[11px]"
                  : "bg-white text-gray-700 hover:bg-gray-100 text-xs"
                  }`}
              >
                {tab.title}
              </button>
            ))}
          </div>

          {/* Main Content */}
          <div className="flex flex-col lg:flex-row items-center">
            {/* Left: Phone Image */}
            <div className="w-full lg:w-1/3 flex justify-center mb-6 lg:mb-0">
              <img
                src={getImage(pdpDetail[0])} // Use getImage function to get the image
                alt="iPhone 15"
                className="w-56 h-auto object-contain rounded-lg"
              />
            </div>

            {/* Right: Part Selection & Buttons */}
            <div className="w-full lg:w-2/3 lg:pl-6">
              {/* “Select a Part” Label */}
              <p className="text-lg font-semibold mb-3 text-black">
                Select a Part
              </p>

              {/* Part Options */}
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-6">
                {pdpDetail.map((part: any) => {
                  const isSelectedPart = isSelected(part);

                  return (
                    <div
                      key={part.id}
                      onClick={() => handleParClick(part)}
                      className={`cursor-pointer lg:p-4 p-2 rounded-xl border-2 flex flex-col justify-between ${isSelectedPart
                        ? "bg-tertiary  border-prc"
                        : "bg-white border-gray-300 hover:border-purple-400"
                        }`}
                    >
                      <div>
                        <h3 className="mdd:text-sm text-xs font-medium text-black">
                          {part.title}
                        </h3>
                      </div>
                      <div className="mt-1">
                        <span
                          className={`text-base font-semibold ${isSelectedPart ? "text-prc" : "text-prc"
                            }`}
                        >
                          {part.price_range}
                        </span>
                      </div>
                    </div>
                  );
                })}
              </div>

              {/* Action Buttons */}
              <div className="grid grid-cols-2 gap-4 mb-6">
                <button
                  className="flex-1 bg-prc text-white rounded-lg py-3 text-center font-medium hover:bg-teal-900 transition lg:text-base text-sm"
                  onClick={() => setIsModalOpen(true)}
                >
                  BOOK NOW
                </button>

                <button className="flex-1 border-2 border-gray-600 text-gray-700 rounded-lg py-3 text-center font-medium hover:bg-gray-100 transition lg:text-base text-sm" onClick={MailRepair}>MAIL IN REPAIR</button>
              </div>

              {/* Payment Icons */}
              <div className="flex items-center justify-center space-x-4 mb-6 bg-white rounded-md border-1">
                <Image src={paypal} alt="PayPal" className="h-8 w-auto" />
                <Image
                  src={afterpay}
                  alt="Afterpay"
                  className="h-8 w-30 p-2 bg-black rounded-3xl "
                />
                <Image src={zip} alt="Zip" className="h-10 w-12 rounded-md" />
                <Image src={american} alt="Amex" className="h-10 w-12" />
                <img
                  src="https://img.icons8.com/fluency/48/000000/cash-in-hand.png"
                  alt="Cash"
                  className="h-10 w-12"
                />
              </div>

              {/* Bottom Links/Buttons */}
              <div className="flex flex-col md:flex-row md:space-x-4 space-y-3 md:space-y-0 justify-center">
                {/* <button className="px-6 py-2 border border-gray-700 rounded-full text-gray-700 hover:bg-gray-100 transition text-sm font-medium">
                  Repair FAQ?
                </button> */}
                {/* <button className="px-6 py-2 border border-gray-700 rounded-full text-gray-700 hover:bg-gray-100 transition text-sm font-medium">
                  Google Reviews
                </button> */}
                <button onClick={handleFaqClick} className="px-6 py-2 border border-gray-700 rounded-full text-gray-700 hover:bg-gray-100 transition text-sm font-medium">
                  Why Phone Repair Centre?
                </button>


              </div>
             { popop &&
             <>
              <div id="YOUR_ID" className="fixed z-50 inset-0 overflow-y-auto">
                <div className="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
                  <div className="fixed inset-0 transition-opacity" aria-hidden="true">
                    <div className="absolute inset-0 bg-prc opacity-75 z-[42]"></div>
                  </div>

                  <span className="hidden sm:inline-block sm:align-middle sm:h-screen" aria-hidden="true">

                  </span>

                  <div
                    className="inline-block align-bottom bg-white rounded-lg px-4 pt-5 pb-4 text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full sm:p-6"

                  >
                    <div className="hidden sm:block absolute top-0 right-0 pt-4 pr-4">
                      <button onClick={handleClose}
                        type="button"
                        data-behavior="cancel"
                        className="bg-white rounded-md text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-prc"
                      >
                        <span className="sr-only">Close</span>
                        <svg
                          className="h-6 w-6  text-red-600"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                          aria-hidden="true"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M6 18L18 6M6 6l12 12"
                          />
                        </svg>
                      </button>
                    </div>
                    <div className="sm:flex sm:items-start">

                      <div className="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left">
                        <h3 className="text-black xl:text-[22px] text-[18px] font-[500] xl:leading-[2rem] leading-[24px]" id="modal-headline">
                          Repair Center
                        </h3>
                        <div className="mt-2">
                          <p className="p2-4 pt-0 text-[#0B0B0B] text-sm">With more than a decade of experience, Phone Repair Centre has established itself as one of the most cost-effective and trusted mobile repair service providers in Australia. Located at 122 Queen Street, St Marys, NSW-2760, we are on a mission to make technology accessible to everyone by offering reliable, high-quality repairs at prices that won’t break the bank.</p>
                        </div>
                      </div>
                    </div>

                  </div>
                </div>
              </div>
             </> }


            </div>
          </div>
        </div>

        <BookSlot
          isModalOpen={isModalOpen}
          setIsModalOpen={setIsModalOpen}
          defaultSelectedPart={defaultSelectedPart}
        />
      </div>

      <FaqComponent/>
      {/* <GoogleReviews /> */}
    </>
  );
};

export default Pdp;
