"use client";
import React, { useEffect, useState, useRef } from "react";
import SidebarItem from "./SidebarItem";
import BrandImageGrid from "./BrandImageGrid";
import { usePathname } from "next/navigation";
import Link from "next/link";
import Pdp from "./Pdp";

const BrandDetailPage: React.FC = () => {
  const pathname = usePathname();
  const [brandsData, setBrandsData] = useState<any>([]); // State to hold brands data
  const [slugData, setSlugData] = useState<any>([]);
  const [isSidebarOpen, setIsSidebarOpen] = useState(true); // Sidebar state
  const [expandedPaths, setExpandedPaths] = useState<string[]>([]); // Expanded paths for sidebar
  const dataFetchedRef = useRef(false); // Ref to track if data has already been fetched
  const [isLastItemClicked, setIsLastItemClicked] = useState(false); // State to track if last item is clicked
  const [tabs, setTabs] = useState();
  // Build slugArray by stripping "/brands" and splitting the rest
  const slugArray =
    pathname?.replace("/brands", "").split("/").filter(Boolean) || [];

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
          } catch (error) {
            console.error("Error fetching base data:", error);
          }
        }
        setBrandsData(baseData); // Set the base data to state

        // Fetch data for slug-based endpoint (only if the slugArray is non-empty)
        if (slugArray.length > 0) {
          try {
            const resSlug = await fetch(slugApi);
            if (!resSlug.ok) {
              throw new Error(`HTTP error! status: ${resSlug.status}`);
            }
            const slugEndpointData = await resSlug.json();
            setSlugData(slugEndpointData); // Set the slug-specific data to state
          } catch (error) {
            console.error("Error fetching slug data:", error);
          }
        }
      } catch (error) {
        console.error("Error fetching brands:", error);
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
    <div className="flex min-h-screen bg-white">
      {/* Sidebar */}
      {isSidebarOpen && (
        <aside
          className="w-full max-w-xs md:max-w-md lg:max-w-[26rem] bg-yellow-400 p-6 overflow-y-auto sticky top-0
            shadow-lg scrollbar-thin scrollbar-thumb-green-700 scrollbar-track-yellow-200"
        >
          <h2 className="text-xl font-extrabold text-green-800 mb-2 border-b border-green-600 tracking-wide select-none">
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
      )}

      {/* Main Content */}
      <main className="flex-1 p-3 bg-[#fff4f0] min-h-screen overflow-auto shadow-inner">
        <button
          onClick={() => setIsSidebarOpen((prev) => !prev)}
          className="mb-6 p-2 bg-green-600 text-white rounded-md hover:bg-green-700 transition"
        >
          {isSidebarOpen ? "Close Sidebar" : "Open Sidebar"}
        </button>

        {/* Breadcrumb */}
        <nav className="mb-8 text-sm text-gray-600">
          <Link href="/brands" className="hover:underline font-medium">
            Home
          </Link>
          {slugArray.map((slug, idx) => {
            const path = `/brands/${slugArray.slice(0, idx + 1).join("/")}`;
            return (
              <span key={path}>
                {" "}
                &gt;{" "}
                <Link
                  href={path}
                  className="hover:underline capitalize font-medium"
                >
                  {slug.replace(/-/g, " ")}
                </Link>
              </span>
            );
          })}
        </nav>

        {/* Render content based on the fetched brands data */}
        {!isLastItemClicked ? (
          <BrandImageGrid brandsData={slugData} pathname={pathname} />
        ) : (
          <Pdp
            pdpDetail={isLastItemClicked && slugData.length > 0 ? slugData : []}
            tabs={tabs}
          />
        )}
      </main>
    </div>
  );
};

export default BrandDetailPage;
