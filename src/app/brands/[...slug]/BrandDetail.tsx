"use client";
import { IoIosArrowForward } from "react-icons/io";

import React, { useEffect, useState, useRef } from "react";
import SidebarItem from "./SidebarItem";
import BrandImageGrid from "./BrandImageGrid";
import { usePathname } from "next/navigation";
import Link from "next/link";
import Pdp from "./Pdp";
import Strip from "../../../components/Strip/Strip";
import { log } from "console";
import { useAppDispatch } from "../../../app/redux/hooks";
import { setUiFlag } from "../../../app/redux/slice";

const BrandDetailPage: React.FC = () => {
  const pathname = usePathname();
  const dispatch = useAppDispatch();
  const [brandsData, setBrandsData] = useState<any>([]); // State to hold brands data
  const [slugData, setSlugData] = useState<any>([]);
  const [LastslugData, setLastSlugData] = useState<any>([]);
  const [isSidebarOpen, setIsSidebarOpen] = useState<boolean>(false); // Sidebar state
  const [expandedPaths, setExpandedPaths] = useState<string[]>([]); // Expanded paths for sidebar
  const dataFetchedRef = useRef(false); // Ref to track if data has already been fetched
  const [isLastItemClicked, setIsLastItemClicked] = useState(false); // State to track if last item is clicked
  const [tabs, setTabs] = useState();
  const [LatTabs, setLastTabs] = useState();
  const [activeTab, setActiveTab] = useState<string | undefined>(undefined);
  const [loading, setLoading] = useState(true);

  // const [activeTabData, setActiveTabData] = useState();
  const [isMobile, setIsMobile] = useState<boolean>(false);
  useEffect(() => {
    if (activeTab !== "undefined" && isLastItemClicked && slugData.length > 0) {
      setLastTabs(tabs); // Store the tabs data to LatTabs when activeTab is not "undefined"
      localStorage.setItem("tabsData", JSON.stringify(tabs));
      localStorage.setItem("Lastslug", JSON.stringify(slugData));
      setLastSlugData(slugData);
    }
  }, [activeTab, tabs, slugData]);

  // State for mobile detection

  // Detect if the device is mobile, only after the component is mounted

  useEffect(() => {
    const storedTabs = localStorage.getItem("tabsData");
    const storedTabsImg = localStorage.getItem("Lastslug");
    if (storedTabs) {
      setLastTabs(JSON.parse(storedTabs)); // Set to LatTabs from localStorage
    }
    if (storedTabsImg) {
      setLastSlugData(JSON.parse(storedTabsImg)); // Set to LatTabs from localStorage
    }
  }, []);
  useEffect(() => {
    if (typeof window !== "undefined") {
      // Check if window is available (client-side)
      const handleResize = () => {
        setIsMobile(window.innerWidth <= 768); // Adjust the 768px value based on your design
      };

      handleResize(); // Initial check
      window.addEventListener("resize", handleResize); // Update on window resize

      return () => window.removeEventListener("resize", handleResize); // Cleanup on unmount
    }
  }, []); // Empty dependency array ensures it runs only once

  // Set the initial state of the sidebar for mobile
  useEffect(() => {
    if (isMobile) {
      setIsSidebarOpen(false); // Close sidebar on mobile
    } else {
      setIsSidebarOpen(true); // Open sidebar on larger screens
    }
  }, [isMobile]);
  useEffect(() => {
    const data = JSON.parse(sessionStorage.getItem("baseData") || "[]");
    if (data.length > 0) {
      dispatch(setUiFlag(false));
    }
  }, []);
  // Build slugArray by stripping "/brands" and splitting the rest
  const slugArray =
    pathname?.replace("/brands", "").split("/").filter(Boolean) || [];
  const lastElement = slugArray[slugArray.length - 1];
  // Fetch brands data from API
  useEffect(() => {
    const fetchBrands = async () => {
      try {
        const api = "https://www.prc.repair/api/sidebar-filter"; // Default endpoint for the sidebar
        const slugPath = slugArray.length > 0 ? slugArray.join("/") : ""; // Create slugPath
        const slugApi = `https://www.prc.repair/api/getbrands/${slugPath}`; // Construct the endpoint for slug-based API

        // Fetch data for base endpoint ('getbrands') and store it in sessionStorage for the sidebar
        let baseData: any = JSON.parse(
          sessionStorage.getItem("baseData") || "[]"
        );
        if (baseData.length === 0) {
          try {
            const res = await fetch(api);
            if (!res.ok) {
              throw new Error(`HTTP error! status: ${res.status}`);
            }
            baseData = await res.json();
            sessionStorage.setItem("baseData", JSON.stringify(baseData)); // Save data in sessionStorage
            dispatch(setUiFlag(false));
            setLoading(false);
          } catch (error) {
            console.error("Error fetching base data:", error);
          }
        }
        setBrandsData(baseData); // Set the base data to state
        setLoading(false);
        // Fetch data for slug-based endpoint (only if the slugArray is non-empty)
        try {
          const resSlug = await fetch(slugApi);
          if (!resSlug.ok) {
            throw new Error(`HTTP error! status: ${resSlug.status}`);
          }
          const slugEndpointData = await resSlug.json();
          setSlugData(slugEndpointData); // Set the slug-specific data to state
          setLoading(false);
        } catch (error) {
          console.error("Error fetching slug data:", error);
          setLoading(false);
        }
      } catch (error) {
        console.error("Error fetching brands:", error);
        setLoading(false);
      }
    };

    // Call the API for the sidebar (getbrands) and slug-specific API if applicable
    if (!dataFetchedRef.current) {
      fetchBrands();
      dataFetchedRef.current = true; // Set flag to true to prevent further API calls
    }
  }, [slugArray]);

  useEffect(() => {
    // Auto-open all parent levels when the path changes
    const pathsToExpand = slugArray.reduce((acc: string[], cur, idx) => {
      const segment = `/brands/${slugArray.slice(0, idx + 1).join("/")}`;
      acc.push(segment);
      return acc;
    }, []);
    setExpandedPaths(pathsToExpand);
  }, [pathname]);

  const toggleExpand = (path: string) => {
    setExpandedPaths((prev) =>
      prev.includes(path) ? prev.filter((p) => p !== path) : [...prev, path]
    );
  };

  return (
    <div className="mb-2">
      <Strip title="Repair Prices" />
      <div
        className={`flex min-h-screen bg-white max-w-[1920px]  mx-auto  border-b border-[#122d37] ${
          isSidebarOpen ? "gap-8 m-3" : "gap-0"
        }`}
      >
        {/* Sidebar */}
        <div className="relative">
          {/* {isSidebarOpen && ( */}
          <div
            className={`${
              isSidebarOpen
                ? "lg:relative absolute z-10 transition-all duration-300 h-full left-3"
                : "hidden"
            }`}
          >
            <aside
              className={`lg:w-96 w-[320px] bg-tertiary md:p-6 p-3 overflow-y-auto sticky top-0 shadow-lg scrollbar-thin scrollbar-thumb-green-700 scrollbar-track-yellow-200 h-[1000px] scrollbar rounded-xl`}
            >
              <h2 className="text-lg font-semibold text-[#122d37] mb-2 border-b tracking-wide hover:bg-[] transition-colors pb-1">
                Select Brands
              </h2>

              {brandsData.map((brand: any) => (
                <SidebarItem
                  key={brand.id}
                  item={brand}
                  href={`/brands/${brand.alias}`}
                  level={0}
                  expandedPaths={expandedPaths}
                  toggleExpand={toggleExpand}
                  currentPath={pathname}
                  setIsLastItemClicked={setIsLastItemClicked}
                  setTabs={setTabs}
                />
              ))}
            </aside>
            <button
              onClick={() => setIsSidebarOpen((prev) => !prev)}
              className="mb-[5px] p-2 bg-[#122d37] text-white rounded-md md:h-10 h-8 flex items-center justify-center absolute top-2 right-[1rem] z-10 border-prc"
            >
              <IoIosArrowForward
                className={`inline-block transform transition-transform duration-300 ease-in-out ${
                  isSidebarOpen ? "rotate-180" : "rotate-0"
                }`}
                size={24}
              />
            </button>
          </div>
          {/* )} */}
        </div>

        {/* Main Content */}
        <main
          className={`flex-1  transition-all duration-300 bg-[#fff4f0] ${
            isSidebarOpen ? "md:pt-[10px] pt-[10px] rounded-xl " : " pt-[10px]"
          }`}
        >
          <div className="md:pl-6 pl-2">
            <button
              onClick={() => setIsSidebarOpen((prev) => !prev)}
              className={`mb-[5px] p-2 bg-[#122d37] text-white rounded-md md:h-10 h-8 flex items-center justify-center ${
                isSidebarOpen ? "hidden" : ""
              }`}
            >
              <IoIosArrowForward
                className={`inline-block transform transition-transform duration-300 ease-in-out ${
                  isSidebarOpen ? "rotate-180" : "rotate-0"
                }`}
                size={24}
              />
            </button>
            {/* Breadcrumb */}
            <div className="hidden md:block">
              <nav className="mb-4 text-sm flex-1 truncate font-bold flex-wrap">
                <Link href="/brands" className="hover:underline font-bold">
                  Brands
                </Link>
                {slugArray.slice(0, -1).map((slug, idx) => {
                  const isSecondLast = idx === slugArray.length - 2;
                  const isLast = idx === slugArray.length - 1;

                  // If second last, include the last slug as well
                  const path = isSecondLast
                    ? `/brands/${slugArray.slice(0, idx + 2).join("/")}` // include next too
                    : `/brands/${slugArray.slice(0, idx + 1).join("/")}`;

                  const displayText = slug;
                  // .replace(/-\d+$/, "")
                  // .replace(/-/g, " ");

                  return (
                    <span key={path}>
                      {" "}
                      &gt;{" "}
                      <Link
                        href={path}
                        className="hover:underline capitalize font-bold"
                      >
                        {displayText}
                      </Link>
                    </span>
                  );
                })}
              </nav>
            </div>
          </div>
          {/* Render content based on the fetched brands data */}
          {!isLastItemClicked && activeTab === undefined ? (
            <BrandImageGrid
              brandsData={slugData}
              pathname={pathname}
              isSidebarOpen={isSidebarOpen}
              tabs={tabs}
              loading={loading}
            />
          ) : (
            <Pdp
              pdpDetail={LastslugData}
              tabs={LatTabs}
              activeTab={activeTab}
              setActiveTab={setActiveTab}
              setSlugData={setSlugData}
            />
          )}
        </main>
      </div>
    </div>
  );
};

export default BrandDetailPage;
