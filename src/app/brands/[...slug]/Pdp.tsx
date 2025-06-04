// src/components/Pdp.tsx
import React, { useState } from "react";
import paypal from "../../../assets/Icons/paypal_888870.svg";
import afterpay from "../../../assets/Icons/afterpay.svg";
import zip from "../../../assets/Icons/zipicon.png";
import american from "../../../assets/Icons/american-express_349228.svg";
import Image from "next/image";
type ServiceTab = {
  label: string;
  key: string;
};

type PartOption = {
  title: string;
  subtitle: string;
  price: number;
  key: string;
};

const serviceTabs: ServiceTab[] = [
  { label: "Screen Repair", key: "screen" },
  { label: "Battery Issue", key: "battery" },
  { label: "Back Glass Repair", key: "back_glass" },
  { label: "Camera Issue", key: "camera" },
  { label: "Charging Issue", key: "charging" },
  { label: "Speaker Issue", key: "speaker" },
];

const partOptions: PartOption[] = [
  {
    key: "aftermarket",
    title: "Screen Replacement Aftermarket",
    subtitle: "(Quality–Incell)",
    price: 120,
  },
  {
    key: "premium",
    title: "Screen Replacement Premium",
    subtitle: "(Quality–OLED)",
    price: 240,
  },
  {
    key: "oem",
    title: "Screen Replacement – Best Quality",
    subtitle: "(OEM / Refurbished)",
    price: 405,
  },
];

const Pdp: React.FC = () => {
  const [activeTab, setActiveTab] = useState<string>("screen");
  const [selectedPart, setSelectedPart] = useState<string>("aftermarket");

  return (
    <div className="bg-[#FFF5EB] rounded-lg p-6 max-w-6xl mx-auto">
      {/* Header */}
      <h2 className="text-2xl font-bold mb-4 text-[cadetblue]">
        SERVICES WE OFFER FOR <span className="text-purple-700">IPHONE 15</span>
      </h2>

      {/* Tabs */}
      <div className="grid xl:grid-cols-6 lg:grid-cols-4 grid-cols-3 gap-2 mb-3">
        {serviceTabs.map((tab) => (
          <button
            key={tab.key}
            onClick={() => {
              setActiveTab(tab.key);
              // whenever you switch tabs, you might want to reset selectedPart
              setSelectedPart(partOptions[0].key);
            }}
            className={`
              rounded-t-lg rounded-b-none md:px-4 md:py-2 p-2
              text-sm font-medium 
              border border-gray-300
              ${
                activeTab === tab.key
                  ? "bg-yellow-400 text-black border-b-0 text-xs"
                  : "bg-white text-gray-700 hover:bg-gray-100 text-xs"
              }
            `}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {/* Main Content */}
      <div className="flex flex-col lg:flex-row items-center">
        {/* Left: Phone Image */}
        <div className="w-full lg:w-1/3 flex justify-center mb-6 lg:mb-0">
          <img
            src="	https://fdn2.gsmarena.com/vv/bigpic/apple-iphone-16-pro.jpg"
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
            {partOptions.map((part) => {
              const isSelected = selectedPart === part.key;
              return (
                <div
                  key={part.key}
                  onClick={() => setSelectedPart(part.key)}
                  className={`
                    cursor-pointer 
                    p-4 rounded-xl border-2
                    flex flex-col justify-between
                    ${
                      isSelected
                        ? "bg-yellow-400 border-teal-800"
                        : "bg-white border-gray-300 hover:border-purple-400"
                    }
                  `}
                >
                  <div>
                    <h3 className="text-base font-medium text-black">
                      {part.title}
                    </h3>
                    <p className="text-xs text-gray-600 mb-1">{part.subtitle}</p>
                  </div>
                  <div className="mt-1">
                    <span
                      className={`
                        text-2xl font-semibold
                        ${isSelected ? "text-purple-700" : "text-purple-600"}
                      `}
                    >
                      ${part.price}
                    </span>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row sm:space-x-4 space-y-3 sm:space-y-0 mb-6">
            <button className="flex-1 bg-teal-800 text-white rounded-lg py-3 text-center font-medium hover:bg-teal-900 transition">
              BOOK NOW
            </button>
            <button className="flex-1 border-2 border-gray-600 text-gray-700 rounded-lg py-3 text-center font-medium hover:bg-gray-100 transition">
              MAIL IN REPAIR
            </button>
          </div>

          {/* Payment Icons (row of icons) */}
          <div className="flex items-center justify-center space-x-4 mb-6 bg-white rounded-md">
            {/* Replace `src` with your actual icon URLs */}
            <Image src={paypal} alt="PayPal" className="h-8 w-auto" />
            <Image
              src={afterpay}
              alt="Afterpay"
              className="h-10 w-30 p-2 bg-black rounded-3xl "
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
  );
};

export default Pdp;
