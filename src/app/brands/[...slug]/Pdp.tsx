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

const Pdp: React.FC<{
  pdpDetail: any[];
  tabs: any;
  setActiveTab: any;
  activeTab: any;
  setSlugData: any;
}> = ({ pdpDetail, tabs, activeTab, setActiveTab, setSlugData }) => {
  const pathname = usePathname();
  const router = useRouter();
  const [popop, setPopop] = useState(false);
  const [activeTabb, setActiveTabb] = useState<string | undefined>(undefined);
  const [selectedPart, setSelectedPart] = useState<string | undefined>();
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const [defaultSelectedPart, setDefaultSelectedPart] = useState<any>(null); // Ensure this is `any` to allow object structure\
  const pathSegments = pathname.split("/");
  const secondLastSegment = pathSegments[pathSegments.length - 2]; // This gives us 'screen-repair'
  const [device, setDevice] = useState<string>("");

  // Fetch the base data from sessionStorage
  const brandsData = JSON.parse(sessionStorage.getItem("baseData") || "[]");

  // Recursive function to find the product matching the alias
  const findProductByAlias = (data: any[], alias: string) => {
    for (const item of data) {
      if (item.products) {
        const foundProduct = item.products.find(
          (product: any) => product.alias === alias
        );
        if (foundProduct) {
          // Return the found product ID and stop the loop
          return foundProduct.title;
        }
      }

      // Recursively check if the item has nested data
      if (item.data) {
        const result: any = findProductByAlias(item.data, alias);
        if (result) return result; // Stop the loop when result is found
      }
    }
    return null; // Return null if no match is found
  };

  useEffect(() => {
    const productId = findProductByAlias(brandsData, secondLastSegment);
    if (productId) {
      setDevice(productId); // Set the found product ID in the state
    }
  }, [secondLastSegment, brandsData]); // Ensure `secondLastSegment` and `brandsData` are dependencies

  // Set the active tab when the component mounts or pathname changes
  useEffect(() => {
    const lastSegment = pathname.split("/").pop(); // Get the last segment from the path
    let tab = tabs?.find((tab: any) => tab.alias === lastSegment);
    if (tab) {
      setActiveTabb(tab.id.toString()); // Set the active tab based on the slug in the URL
    }

    // handleTabClick(tab);
  }, [pathname, tabs]);

  // Function to handle tab click and update the URL
  // const handleTabClick = (tab: any) => {
  //   console.log("tab>>>>>",tab,slugData);

  //   setActiveTab(tab.id);

  //   // Update the URL to reflect the clicked tab's alias
  //   const pathWithoutLastSegment = pathname.split("/").slice(0, -1).join("/");
  //   const newUrl = `${pathWithoutLastSegment}/${tab.alias}`;
  //   console.log("tab>>>>>",pathWithoutLastSegment,pathWithoutLastSegment);

  //   router.push(newUrl); // Replace the last segment without appending
  // };
  const handleTabClick = async (tab: any) => {
    setActiveTabb(tab?.id.toString());
    setActiveTab(tab?.id);
    const slugArray =
      pathname?.replace("/brands", "").split("/").filter(Boolean) || [];
    const secondLastSlug = slugArray[slugArray.length - 2].toLowerCase();
    if (secondLastSlug.includes("issue") || secondLastSlug.includes("repair")) {
      slugArray.splice(slugArray.length - 2, 1); // Remove the second last item if it contains "issue" or "repair"
    }
    // const modifiedSlugArray = slugArray.slice(0, -1); // remove last segment (screen-repair)
    // const slugPath = modifiedSlugArray.join("/"); // join back to string

    // const slugApi = `https://www.prc.repair/api/getbrands/${slugPath}/${tab.alias}`;

    // const resSlug = await fetch(slugApi);
    // if (!resSlug.ok) {
    //   throw new Error(`HTTP error! status: ${resSlug.status}`);
    // }
    // const slugEndpointData = await resSlug.json();

    // console.log(slugEndpointData, "slugEndpointData");

    // setSlugData(slugEndpointData);
    // // Remove the last segment from the current path
    // const pathWithoutLastSegment = pathname.split("/").slice(0, -1).join("/");
    // const newUrl = `${pathWithoutLastSegment}/${tab.alias}`;

    // console.log("newUrl >>>>>", newUrl); // ✅ This will now show full path with alias
    const newUrl = `${pathname.split("/").slice(0, -1).join("/")}/${
      tab?.alias
    }`;
    router.push(newUrl); // Update the URL
  };

  // Check if the image exists in pdpDetail, otherwise use a fallback static image
  const getImage = (part: any) => {
    return part?.image ? part.image : ""; // Default image if no image is available
  };

  useEffect(() => {
    if (pdpDetail.length > 0) {
      // Make sure the `id` is correctly set to a string
      setDefaultSelectedPart(pdpDetail[0]); // Set the default part to the first item
    }
    // const index = tabs.findIndex((tab:any) => tab.alias === lastElement);
    // setDefaultSelectedPart(pdpDetail[index]);
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
  const handleFaqClick = () => {
    setPopop(true);
  };
  const handleClose = () => {
    setPopop(false);
  };
  const MailRepair = () => {
    sessionStorage.setItem("repairType", "mail-in-repair");
  };
  return (
    <>
      <div className="bg-[#FFF5EB] relative">
        <div
          className={`rounded-lg md:px-6 md:pb-6  max-w-7xl mx-auto px-3 pb-3`}
        >
          {/* Header */}

          {/* Tabs */}

          {/* Main Content */}
          <div className="flex flex-col lg:flex-row items-center">
            {/* Left: Phone Image */}
            <div className="w-full lg:w-1/3 md:flex justify-center mb-6 lg:mb-0  hidden">
              <img
                src={getImage(pdpDetail[0])} // Use getImage function to get the image
                alt="iPhone 15"
                className="w-56 h-auto object-contain rounded-lg"
              />
            </div>

            {/* Right: Part Selection & Buttons */}
            <div className="w-full lg:w-2/3 lg:pl-6">
              <h2 className="text-2xl font-bold mb-4 text-prc">
                SERVICES WE OFFER FOR{" "}
                <span className="text-purple-700">{device}</span>
              </h2>
              <div className="grid xl:grid-cols-4 lg:grid-cols-4 grid-cols-3 mb-5">
                {tabs?.map((tab: any) => (
                  <button
                    key={tab.id}
                    onClick={() => handleTabClick(tab)}
                    className={`  2xl:p-2 lg:p-[8px] p-2 md:text-[13px] text-sm font-semibold border border-gray-300 ${
                      activeTabb === tab.id.toString()
                        ? "bg-prc  text-white border-b-0  "
                        : "bg-white text-gray-700  "
                    }`}
                  >
                    {tab.title}
                  </button>
                ))}
              </div>
              {/* “Select a Part” Label */}
              <p className="text-lg font-semibold mb-3 text-black">
                Select a Part
              </p>

              {/* Part Options */}
              <div className="grid grid-cols-2 md:grid-cols-3 md:gap-4 gap-3 mb-6">
                {pdpDetail.length > 0 && (
                  <>
                    {pdpDetail?.map((part: any) => {
                      const isSelectedPart = isSelected(part);

                      return (
                        <div
                          key={part.id}
                          onClick={() => handleParClick(part)}
                          className={`cursor-pointer lg:p-4 p-2 rounded-xl border-2 flex flex-col justify-between ${
                            isSelectedPart
                              ? "bg-tertiary  border-prc"
                              : "bg-white border-gray-300 hover:border-prc"
                          }`}
                        >
                          <div>
                            <h3 className="md:text-[15px] text-xs font-medium text-black">
                              {part.title}
                            </h3>
                          </div>
                          <div className="mt-1">
                            <span
                              className={`text-lg font-semibold ${
                                isSelectedPart ? "text-prc" : "text-prc"
                              }`}
                            >
                              {part.price_range}
                            </span>
                          </div>
                        </div>
                      );
                    })}
                  </>
                )}
              </div>

              {/* Action Buttons */}
              <div className="flex flex-row gap-3 md:justify-start justify-center mb-6">
                {/* <button
                  className=" bg-prc text-white rounded-lg p-3 text-center font-medium hover:bg-teal-900 transition lg:text-base text-sm md:w-[11.5rem] w-[9rem] hover:scale-105"
                
                >
                  BOOK NOW
                </button> */}
                <button
                  onClick={() => setIsModalOpen(true)}
                  className="border-2 border-prc group/button relative inline-flex items-center justify-center overflow-hidden rounded-full bg-prc backdrop-blur-lg md:px-6 px-3 py-2 text-base  text-white transition-all duration-300 ease-in-out hover:scale-110 hover:shadow-xl hover:shadow-gray-600/50 font-light"
                >
                  <span className="lg:text-base text-sm"> BOOK NOW</span>
                  <div className="absolute inset-0 flex lg:text-base text-sm md:w-[11.5rem] w-[9rem] justify-center [transform:skew(-13deg)_translateX(-100%)] group-hover/button:duration-1000 group-hover/button:[transform:skew(-13deg)_translateX(100%)]">
                    <div className="relative h-full w-10 bg-white/20"></div>
                  </div>
                </button>

                <Link href="/mail-in-repair">
                  <button
                    className=" hover:scale-105 border-2 border-gray-600 text-secondary rounded-full md:px-6 px-3 py-2 text-center font-medium  transition lg:text-base text-sm md:w-[11.5rem] w-[9rem]"
                    onClick={MailRepair}
                  >
                    MAIL IN REPAIR
                  </button>
                </Link>
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
                <button
                  onClick={handleFaqClick}
                  className="px-6 py-2 border border-gray-700 rounded-full text-gray-700 hover:bg-gray-100 transition text-sm font-medium"
                >
                  Why Phone Repair Centre?
                </button>
              </div>
              {popop && (
                <>
                  <div
                    id="YOUR_ID"
                    className="fixed z-50 inset-0 overflow-y-auto"
                  >
                    <div className="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
                      <div
                        className="fixed inset-0 transition-opacity"
                        aria-hidden="true"
                      >
                        <div className="absolute inset-0 bg-prc opacity-75 z-[42]"></div>
                      </div>

                      <span
                        className="hidden sm:inline-block sm:align-middle sm:h-screen"
                        aria-hidden="true"
                      ></span>

                      <div className="inline-block align-bottom bg-white rounded-lg px-4 pt-5 pb-4 text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full sm:p-6">
                        <div className=" sm:block absolute top-0 right-0 pt-4 pr-4">
                          <button
                            onClick={handleClose}
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
                            <h3
                              className="text-black xl:text-[22px] text-[18px] font-[500] xl:leading-[2rem] leading-[24px]"
                              id="modal-headline"
                            >
                              Repair Center
                            </h3>
                            <div className="mt-2">
                              <p className="p2-4 pt-0 text-[#0B0B0B] text-sm">
                                With more than a decade of experience, Phone
                                Repair Centre has established itself as one of
                                the most cost-effective and trusted mobile
                                repair service providers in Australia. Located
                                at 122 Queen Street, St Marys, NSW-2760, we are
                                on a mission to make technology accessible to
                                everyone by offering reliable, high-quality
                                repairs at prices that won’t break the bank.
                              </p>
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
        </div>
        <BookSlot
          isModalOpen={isModalOpen}
          setIsModalOpen={setIsModalOpen}
          defaultSelectedPart={defaultSelectedPart}
        />
      </div>

      <div>
        <FaqComponent brandImage={getImage(pdpDetail[0])} />
      </div>
    </>
  );
};

export default Pdp;
