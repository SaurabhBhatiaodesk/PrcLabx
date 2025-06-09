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

const Pdp: React.FC<{ pdpDetail: any[]; tabs: any }> = ({
  pdpDetail,
  tabs,
}) => {
  const pathname = usePathname();
  const router = useRouter();
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
    return defaultSelectedId === part.id.toString() || selectedPartId === part.id.toString();
  };

  return (
    <>
      <div className="bg-[#FFF5EB] rounded-lg p-6 max-w-6xl mx-auto">
        {/* Header */}
        <h2 className="text-2xl font-bold mb-4 text-[cadetblue]">
          SERVICES WE OFFER FOR{" "}
          <span className="text-purple-700">IPHONE 15</span>
        </h2>

        {/* Tabs */}
        <div className="grid xl:grid-cols-6 lg:grid-cols-4 grid-cols-3 gap-2 mb-3">
          {tabs.map((tab: any) => (
            <button
              key={tab.id}
              onClick={() => handleTabClick(tab)}
              className={`rounded-t-lg rounded-b-none md:px-4 md:py-2 p-2 text-sm font-medium border border-gray-300 ${
                activeTab === tab.id.toString()
                  ? "bg-yellow-400 text-black border-b-0 text-xs"
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
              className="w-56 h-auto object-contain rounded-lg shadow-md"
            />
          </div>

          {/* Right: Part Selection & Buttons */}
          <div className="w-full lg:w-2/3 lg:pl-6">
            {/* “Select a Part” Label */}
            <p className="text-lg font-semibold mb-3 text-black">Select a Part</p>

            {/* Part Options */}
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-6">
              {pdpDetail.map((part: any) => {
                const isSelectedPart = isSelected(part);

                return (
                  <div
                    key={part.id}
                    onClick={() => handleParClick(part)}
                    className={`cursor-pointer p-4 rounded-xl border-2 flex flex-col justify-between ${
                      isSelectedPart
                        ? "bg-yellow-400 border-teal-800"
                        : "bg-white border-gray-300 hover:border-purple-400"
                    }`}
                  >
                    <div>
                      <h3 className="text-base font-medium text-black">{part.title}</h3>
                    </div>
                    <div className="mt-1">
                      <span
                        className={`text-2xl font-semibold ${
                          isSelectedPart ? "text-purple-700" : "text-purple-600"
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
            <div className="flex flex-col sm:flex-row sm:space-x-4 space-y-3 sm:space-y-0 mb-6">
              <button
                className="flex-1 bg-teal-800 text-white rounded-lg py-3 text-center font-medium hover:bg-teal-900 transition"
                onClick={() => setIsModalOpen(true)}
              >
                BOOK NOW
              </button>
              <Link href="/mail-in-repair">
              <button className="flex-1 border-2 border-gray-600 text-gray-700 rounded-lg py-3 text-center font-medium hover:bg-gray-100 transition">
                MAIL IN REPAIR
              </button>
              </Link>
            </div>

            {/* Payment Icons */}
            <div className="flex items-center justify-center space-x-4 mb-6 bg-white rounded-md">
              <Image src={paypal} alt="PayPal" className="h-8 w-auto" />
              <Image src={afterpay} alt="Afterpay" className="h-10 w-30 p-2 bg-black rounded-3xl " />
              <Image src={zip} alt="Zip" className="h-10 w-12 rounded-md" />
              <Image src={american} alt="Amex" className="h-10 w-12" />
              <img src="https://img.icons8.com/fluency/48/000000/cash-in-hand.png" alt="Cash" className="h-10 w-12" />
            </div>

            {/* Bottom Links/Buttons */}
            <div className="flex flex-col md:flex-row md:space-x-4 space-y-3 md:space-y-0 justify-center">
              <button className="px-6 py-2 border border-gray-700 rounded-full text-gray-700 hover:bg-gray-100 transition text-sm font-medium">
                Repair FAQ?
              </button>
              <button className="px-6 py-2 border border-gray-700 rounded-full text-gray-700 hover:bg-gray-100 transition text-sm font-medium">
                Google Reviews
              </button>
              <button className="px-6 py-2 border border-gray-700 rounded-full text-gray-700 hover:bg-gray-100 transition text-sm font-medium">
                Why Phone Repair Centre?
              </button>
            </div>
          </div>
        </div>
      </div>
      <BookSlot isModalOpen={isModalOpen} setIsModalOpen={setIsModalOpen} defaultSelectedPart={defaultSelectedPart}/>
    </>
  );
};

export default Pdp;
