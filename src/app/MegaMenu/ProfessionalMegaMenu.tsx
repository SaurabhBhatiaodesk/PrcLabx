"use client";
import Image from "next/image";
import commingsoon from "../../../public/Images/coming-soon.svg";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { useState, useEffect, useRef, useCallback } from "react";
import { FaInstagram, FaTiktok, FaYoutube } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { IoChevronDown, IoChevronForward } from "react-icons/io5";
import { SlSocialFacebook } from "react-icons/sl";
import { useAppDispatch } from "../redux/hooks";
import { setUiFlag } from "../redux/slice";

// TypeScript interfaces
interface MenuItem {
  id: string | number;
  title: string;
  alias: string;
  image?: string;
  data?: MenuItem[];
  products?: MenuItem[];
  pivot?: any;
}

interface MegaMenuProps {
  className?: string;
}

interface IndependentSubmenuProps {
  item: MenuItem;
  parentPath: string;
  level: number;
  hoveredPath: string[];
  onMouseEnter: (itemId: string, level: number) => void;
  onMouseLeave: (level: number) => void;
  isActivePath: (alias: string) => boolean;
  buildPath: (parentPath: string, alias: string) => string;
  hasChildren: (item: MenuItem) => boolean;
  getChildren: (item: MenuItem) => MenuItem[];
  parentRef?: any; // For positioning
}

// Independent submenu component - each submenu is a separate dropdown
const IndependentSubmenu: React.FC<IndependentSubmenuProps> = ({
  item,
  parentPath,
  level,
  hoveredPath,
  onMouseEnter,
  onMouseLeave,
  isActivePath,
  buildPath,
  hasChildren,
  getChildren,
  parentRef,
}) => {
  const [matchingPath, setMatchingPath] = useState<string | null>(null);
  const itemPath = buildPath(parentPath, item.alias);
  const itemId = `${item.id}-${level}`;
  const isHovered = hoveredPath[level] === itemId;
  const children = getChildren(item);
  const submenuRef = useRef<HTMLDivElement>(null);
  const itemRef = useRef<HTMLDivElement>(null);
  const data = JSON.parse(sessionStorage.getItem("baseData") || "[]");
  const slugData = itemPath;
  useEffect(() => {
    if (isHovered) {
      // Extract the last part of itemPath (the last slug after the last `/`)
      const lastSlug = itemPath.split("/").pop(); // This will give you the last part of the itemPath
      // Iterate over the data structure
      data.forEach((category: any) => {
        category.data.forEach((subcategory: any) => {
          if (subcategory.data.length > 0) {
            subcategory.data.forEach((subItem: any) => {
              if (subItem.products) {
                // Only filter products if the alias of subItem matches the last slug of itemPath
                const matchingProducts = subItem.products.filter(
                  (product: any) => product.alias === lastSlug
                );

                // Log alias and updated data path for matching products
                if (matchingProducts.length > 0) {
                  matchingProducts.forEach((product: any) => {
                    // Construct the full path without duplicate alias
                    const updatedPath = `${itemPath}/${product.data[0]?.alias}`;
                    setMatchingPath(updatedPath);
                  });
                }
              }
            });
          } else if (
            subcategory.data.length === 0 &&
            subcategory.products.length > 0
          ) {
            const matchingProducts = subcategory.products.filter(
              (product: any) => product.alias === lastSlug
            );
            if (matchingProducts.length > 0) {
              matchingProducts.forEach((product: any) => {
                // Construct the full path without duplicate alias
                const updatedPath = `${itemPath}/${product.data[0]?.alias}`;
                setMatchingPath(updatedPath);
              });
            }
          }
        });
      });
    }
  }, [isHovered, item.alias, data, itemPath]); // Added itemPath to the dependency array

  // Positioning logic for independent submenus
  useEffect(() => {
    if (isHovered && submenuRef.current && itemRef.current) {
      const itemRect = itemRef.current.getBoundingClientRect();
      const submenu = submenuRef.current;

      // Reset positioning styles
      submenu.style.left = "";
      submenu.style.top = "";

      // Position the submenu directly to the right of the parent item
      submenu.style.left = `${itemRect.right - 12}px`; // 2px gap from parent item
      submenu.style.top = `${itemRect.top - 5}px`; // Align top with parent item

      // Ensure submenu is fixed position relative to viewport
      submenu.style.opacity = "1";
      submenu.style.position = "fixed";
    }
  }, [isHovered, item.id, level]);

  return (
    <div ref={itemRef} className="relative group/nested">
      <Link
        href={`/brands/${matchingPath || itemPath}`}
        className={`group flex items-center justify-between p-2 text-sm transition-all duration-200 cursor-pointer border-l-2 border-transparent 
    ${
      isActivePath(item.alias)
        ? "bg-[#122d37] text-white border-l-[#122d37]"
        : "text-gray-700 hover:text-[#122d37] hover:bg-gray-50 hover:border-l-[#122d37]"
    }`}
        onMouseEnter={() => onMouseEnter(itemId, level)}
        onMouseLeave={() => onMouseLeave(level + 1)}
      >
        <span className="flex-1 truncate pr-2 font-medium transition-all duration-300 ease-in-out">
          {item.title}
        </span>

        {hasChildren(item) && (
          <IoChevronForward className="text-sm opacity-60 flex-shrink-0 transform transition-transform duration-300 ease-in-out group-hover:translate-x-1" />
        )}
      </Link>

      {/* Independent nested submenu - appears as a separate dropdown */}
      {hasChildren(item) && isHovered && (
        <div
          ref={submenuRef}
          className=" bg-white shadow-xl border border-gray-200 rounded-lg z-50 min-h-[40px] overflow-y-auto opacity-0 invisible group-hover/nested:opacity-100 group-hover/nested:visible transition-all duration-200 ease-out scrollbar absolute"
          style={{
            width: "240px",
            opacity: "0",
            boxShadow:
              "0 10px 25px rgba(0, 0, 0, 0.15), 0 4px 6px rgba(0, 0, 0, 0.1)",
          }}
          onMouseEnter={() => onMouseEnter(itemId, level)} // Keep active when hovering over submenu itself
          onMouseLeave={() => onMouseLeave(level + 1)}
        >
          {/* Enhanced submenu header */}
          <div className="px-3 py-2 border-b border-gray-100 bg-gradient-to-r from-[#122d37] to-[#1a3d4a]">
            <h4 className="font-semibold text-white text-sm truncate">
              {item.title}
            </h4>
            {/* <p className="text-gray-200 text-xs opacity-90">
              {children.length} {children.length === 1 ? "option" : "options"}
            </p> */}
          </div>

          {/* Enhanced submenu items */}
          <div className="py-1">
            {/* {children.map((child) => ( */}
            {(item.data && item.data.length > 0
              ? item.data
              : item.products || []
            ).map((child) => (
              <IndependentSubmenu
                key={child.id}
                item={child}
                parentPath={itemPath}
                level={level + 1}
                hoveredPath={hoveredPath}
                onMouseEnter={onMouseEnter}
                onMouseLeave={onMouseLeave}
                isActivePath={isActivePath}
                buildPath={buildPath}
                hasChildren={hasChildren}
                getChildren={getChildren}
                parentRef={submenuRef} // Pass ref for positioning of next level
              />
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

const ProfessionalMegaMenu: React.FC<MegaMenuProps> = ({ className = "" }) => {
  const [menuData, setMenuData] = useState<MenuItem[]>([]);
  const dispatch = useAppDispatch();
  const [activeMenu, setActiveMenu] = useState<string | null>(null);
  const [hoveredPath, setHoveredPath] = useState<string[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const pathname = usePathname();
  const hasFetchedData = useRef(false);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);
  const submenuTimeoutRef = useRef<NodeJS.Timeout | null>(null);
  const [isDropdownVisible, setIsDropdownVisible] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isPriceDropdownOpen, setIsPriceDropdownOpen] = useState(false);
  const [isAboutDropdownOpen, setIsAboutDropdownOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  useEffect(() => {
    if (menuData.length > 0) {
      dispatch(setUiFlag(false));
    }
  }, [menuData]);
  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const togglePriceDropdown = () => {
    setIsPriceDropdownOpen(!isPriceDropdownOpen);
  };

  const toggleAboutDropdown = () => {
    setIsAboutDropdownOpen(!isAboutDropdownOpen);
  };
  // Fetch menu data from API
  useEffect(() => {
    if (hasFetchedData.current) return;
    hasFetchedData.current = true;
    const fetchMenuData = async () => {
      try {
        setIsLoading(true);

        let baseData: MenuItem[] = JSON.parse(
          sessionStorage.getItem("baseData") || "[]"
        );

        if (baseData.length === 0) {
          const api = `${process.env.NEXT_PUBLIC_LARAVEL_API_URL}/api/sidebar-filter`; // Replace with your API endpoint
          const res = await fetch(api);
          if (!res.ok) throw new Error(`HTTP error! status: ${res.status}`);
          baseData = await res.json();
          sessionStorage.setItem("baseData", JSON.stringify(baseData));
        }

        setMenuData(baseData);
      } catch (error) {
        console.error("Error fetching menu data:", error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchMenuData();
  }, []);

  // Enhanced hover logic with perfect timing for independent submenus
  const handleMouseEnter = useCallback((itemId: string, level: number = 0) => {
    // Clear any existing timeouts
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
      timeoutRef.current = null;
    }
    if (submenuTimeoutRef.current) {
      clearTimeout(submenuTimeoutRef.current);
      submenuTimeoutRef.current = null;
    }

    if (level === 0) {
      setActiveMenu(itemId);
      setHoveredPath([itemId]);
    } else {
      setHoveredPath((prev) => {
        const newPath = [...prev];
        newPath[level] = itemId;
        // Trim any deeper levels to ensure only the current path is active
        return newPath.slice(0, level + 1);
      });
    }
  }, []);

  // Enhanced mouse leave logic with perfect timing for independent submenus
  const handleMouseLeave = useCallback((level: number = 0) => {
    const delay = level === 0 ? 300 : 200; // Longer delay for main menu

    if (level === 0) {
      timeoutRef.current = setTimeout(() => {
        setActiveMenu(null);
        setHoveredPath([]);
      }, delay);
    } else {
      submenuTimeoutRef.current = setTimeout(() => {
        setHoveredPath((prev) => prev.slice(0, level));
      }, delay);
    }
  }, []);

  // Check if item has children
  const hasChildren = useCallback((item: MenuItem): boolean => {
    return (
      Boolean(item.pivot ? 0 : item.data?.length) ||
      Boolean(item.products?.length)
    );
  }, []);

  // Get children items
  const getChildren = useCallback((item: MenuItem): MenuItem[] => {
    return item.data || item.products || [];
  }, []);

  // Check if current path is active
  const isActivePath = useCallback(
    (alias: string): boolean => {
      return pathname.includes(`/brands/${alias}`);
    },
    [pathname]
  );

  // Build path for nested items
  const buildPath = useCallback((parentPath: string, alias: string): string => {
    return parentPath ? `${parentPath}/${alias}` : alias;
  }, []);

  // Perfect mega menu dropdown with independent submenus
  const renderMegaDropdown = (parentItem: MenuItem, itemIndex: number) => {
    const children = getChildren(parentItem);

    if (!children.length) return null;
    // gurravcomment code 278 line
    // Enhanced column calculation for better layout
    // const columns = Math.min(Math.max(Math.ceil(children.length / 6), 2), 4);
    const columns = 1;
    const itemsPerColumn = Math.ceil(children.length / columns);

    // Calculate dropdown position
    const totalMenuItems = menuData.slice(0, 6).length;
    const isRightSide = itemIndex > totalMenuItems / 2;

    return (
      <div
        className={`absolute top-full ${
          isRightSide ? "right-0" : "left-0"
        } bg-white shadow-xl border border-gray-200 rounded-lg z-40 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 ease-out`}
        style={{
          width: "auto",
          minWidth: "300px",
          // minWidth: "500px",
          maxWidth: "80vw",
          boxShadow:
            "0 20px 40px rgba(0, 0, 0, 0.15), 0 8px 16px rgba(0, 0, 0, 0.1)",
        }}
        onMouseEnter={() => handleMouseEnter(parentItem.id.toString())}
        // onMouseLeave={() => handleMouseLeave()}
      >
        <div className="p-3">
          {/* Enhanced Header with gradient */}
          {/* <div className="pb-4 border-b border-gray-200 bg-gradient-to-r from-[#122d37] to-[#1a3d4a] -m-6 mb-4 p-6 rounded-t-lg">
            <h3 className="text-lg font-bold text-white mb-1">
              {parentItem.title} Products & Services
            </h3>
            <p className="text-gray-200 text-sm opacity-90">
              Explore our comprehensive range of{" "}
              {parentItem.title.toLowerCase()} repair services
            </p>
          </div> */}

          {/* Enhanced Grid Layout with perfect spacing */}
          <div
            className="grid"
            style={{ gridTemplateColumns: `repeat(${columns}, 1fr)` }}
          >
            {Array.from({ length: columns }, (_, colIndex) => {
              const startIndex = colIndex * itemsPerColumn;
              const columnItems = children.slice(
                startIndex,
                startIndex + itemsPerColumn
              );

              return (
                <div key={colIndex} className="space-y-1">
                  {columnItems.map((item) => (
                    <IndependentSubmenu
                      key={item.id}
                      item={item}
                      parentPath={parentItem.alias}
                      level={1}
                      hoveredPath={hoveredPath}
                      onMouseEnter={handleMouseEnter}
                      onMouseLeave={handleMouseLeave}
                      isActivePath={isActivePath}
                      buildPath={buildPath}
                      hasChildren={hasChildren}
                      getChildren={getChildren}
                      parentRef={null} // This will be set by the main dropdown
                    />
                  ))}
                </div>
              );
            })}
          </div>

          {/* Enhanced Footer with better styling */}
          <div className="mt-2 pt-4 border-t border-gray-200 flex justify-between items-center ">
            <Link
              href={`/brands/${parentItem.alias}`}
              className="w-full inline-flex items-center p-2 bg-tertiary text-prc text-xs font-medium rounded-lg hover:from-[#1a3d4a] hover:to-[#122d37] transition-all duration-200 shadow-md hover:shadow-lg transform hover:-translate-y-0.5 "
            >
              View All {parentItem.title} Products
              <IoChevronForward className="ml-2 text-sm" />
            </Link>
            {/* <div className="text-sm text-gray-500 bg-gray-100 px-3 py-1 rounded-full">
              {children.length} categories available
            </div> */}
          </div>
        </div>
      </div>
    );
  };

  // if (isLoading) {
  //   return (
  //     <nav className={` ${className}`}>
  //       <div className="">
  //         <div className="flex justify-center items-center py-3">
  //           <div className="flex space-x-6">
  //             {[...Array(6)].map((_, index) => (
  //               <div
  //                 key={index}
  //                 className="h-5 bg-gray-200 w-20 rounded animate-pulse"
  //               ></div>
  //             ))}
  //           </div>
  //         </div>
  //       </div>
  //     </nav>
  //   );
  // }

  return (
    <>
      {/* Enhanced Desktop Navigation */}
      <div className="hidden lg:block">
        <nav className={` ${className}`}>
          <div className="">
            <ul className="flex justify-center items-center space-x-2 relative">
              {menuData.slice(0, 6).map((item, index) => (
                <li
                  key={item.id}
                  className="relative group"
                  onMouseEnter={() => handleMouseEnter(item.id.toString())}
                  // onMouseLeave={() => handleMouseLeave()}
                >
                  <Link
                    href={`/brands/${item.alias}`}
                    className={` flex items-center px-[5px] py-2 2xl:text-[16px] lg:text-[13px] font-semibold transition-all duration-200  rounded-lg hover:bg-[#122d37] hover:text-white hover:shadow-md transform hover:-translate-y-0.5 ${
                      isActivePath(item.alias)
                        ? "bg-[#122d37] text-white shadow-md"
                        : "text-secondary hover:text-white"
                    }`}
                  >
                    {item.title}
                    {hasChildren(item) && (
                      <IoChevronDown className="ml-2 text-sm transition-transform duration-200 group-hover:rotate-180" />
                    )}
                  </Link>

                  {/* Perfect mega menu dropdown */}
                  {hasChildren(item) &&
                    activeMenu === item.id.toString() &&
                    renderMegaDropdown(item, index)}
                </li>
              ))}
              <div
                className="relative"
                onMouseEnter={() => setIsDropdownVisible(true)}
                onMouseLeave={() => setIsDropdownVisible(false)}
              >
                <button className="flex items-center px-[5px] py-2 2xl:text-[16px] lg:text-[13px] font-semibold transition-all duration-200  rounded-lg hover:bg-[#122d37] hover:text-white  text-secondary   ">
                  Other Brands
                  <IoChevronDown className="ml-2 text-sm transition-transform duration-200 group-hover:rotate-180" />
                </button>

                {/* Dropdown for remaining brands */}
                {isDropdownVisible && (
                  <div className="absolute top-[28px] left-0 mt-2 bg-white shadow-lg border border-gray-200 rounded-lg w-64 py-2 z-10">
                    <ul className="">
                      {menuData
                        .slice(6)
                        .filter((item) => item.alias !== "game-console")
                        .map((item) => (
                          <li key={item.id} className="relative group">
                            <Link
                              href={`/brands/${item.alias}`}
                              className={` px-3 py-2 text-sm font-medium hover:bg-[#122d37] hover:text-white transition-all duration-200 flex justify-between items-center "
                  `}
                            >
                              {item.title}
                              {/* <IoChevronForward className="ml-2 text-sm" /> */}
                            </Link>
                          </li>
                        ))}
                    </ul>
                  </div>
                )}
              </div>
              <div className="lg:block  hidden">
                <ul className="menu menu-horizontal px-1 flex items-center space-x-1">
                  <li>
                    <div className="relative inline-block group">
                      <button className="flex items-center px-2 py-2 2xl:text-[16px] lg:text-[13px] font-semibold transition-all duration-200 rounded-lg hover:bg-[#122d37] hover:text-white hover:shadow-md">
                        <span className="mr-1">Services</span>
                        <IoChevronDown className="ml-2 text-sm transition-transform duration-200 group-hover:rotate-180" />
                      </button>

                      <ul className="absolute hidden group-hover:block w-64 bg-primary text-prc pt-1 z-50  shadow-lg border border-gray-200 rounded-lg">
                        <li>
                          <Link
                            href="/training"
                            className="blck px-3 py-2 text-sm font-medium hover:bg-[#122d37] hover:text-white transition-all duration-200 flex justify-between"
                          >
                            Training
                          </Link>
                        </li>
                        <li>
                          <Link
                            href="/b2b-repair-services"
                            className="flex px-3 py-2 text-sm font-medium hover:bg-[#122d37] hover:text-white transition-all duration-200 justify-between"
                          >
                            B2B Repair
                          </Link>
                        </li>
                        <li>
                          <Link
                            href="/mail-in-repair"
                            className="flex px-3 py-2 text-sm font-medium hover:bg-[#122d37] hover:text-white transition-all duration-200 justify-between"
                          >
                            Mail In Repair
                          </Link>
                        </li>
                        <li>
                          <Link
                            href="/ps5-repair"
                            className="flex px-3 py-2 text-sm font-medium hover:bg-[#122d37] hover:text-white transition-all duration-200 justify-between"
                          >
                            PS5 Repair
                          </Link>
                        </li>
                        <li>
                          <Link
                            href="/price"
                            className="flex px-3 py-2 text-sm font-medium hover:bg-[#122d37] hover:text-white transition-all duration-200 justify-between"
                          >
                            Price
                          </Link>
                        </li>
                        <li>
                          <Link
                            href="/screen-refurbishing"
                            className="flex px-3 py-2 text-sm font-medium hover:bg-[#122d37] hover:text-white transition-all duration-200 justify-between"
                          >
                            Screen Refurbishment
                          </Link>
                        </li>
                        <li>
                          <Link
                            href="/data-recovery"
                            className="flex px-3 py-2 text-sm font-medium hover:bg-[#122d37] hover:text-white transition-all duration-200 justify-between"
                          >
                            Data Recovery
                          </Link>
                        </li>
                        <li>
                          <Link
                            href="/coming-soon"
                            target="_blank"
                            className="flex px-3 py-2 text-sm font-medium hover:bg-[#122d37] hover:text-white transition-all duration-200 justify-between"
                          >
                            Parts Store
                          </Link>
                        </li>

                        <li>
                          <Link
                            href="/coming-soon"
                            className="flex px-3 py-2 text-sm font-medium hover:bg-[#122d37] hover:text-white transition-all duration-200 justify-between"
                          >
                            Repair Form
                            <Image
                              src={commingsoon}
                              alt="Coming soon"
                              width={20}
                              height={20}
                            />
                          </Link>
                          <Link
                            href="/coming-soon"
                            className="flex px-3 py-2 text-sm font-medium hover:bg-[#122d37] hover:text-white transition-all duration-200 justify-between"
                          >
                            Repair Solutions
                            <Image
                              src={commingsoon}
                              alt="Coming soon"
                              width={20}
                              height={20}
                            />
                          </Link>

                          <Link
                            href="/iphone-battery-replacement"
                            className="flex px-3 py-2 text-sm font-medium hover:bg-[#122d37] hover:text-white transition-all duration-200 justify-between"
                          >
                            iPhone Battery Replacement
                          </Link>
                          <Link
                            href="/fix-iphone-screen"
                            className="flex px-3 py-2 text-sm font-medium hover:bg-[#122d37] hover:text-white transition-all duration-200 justify-between"
                          >
                            Fix iPhone screen
                          </Link>
                        </li>
                      </ul>
                    </div>
                  </li>
                  <li></li>

                  {/* <li>
                    <div className="relative inline-block group">
                      <button className="flex items-center px-2 py-2 2xl:text-[16px] lg:text-[13px] font-semibold transition-all duration-200 rounded-lg hover:bg-[#122d37] hover:text-white hover:shadow-md">
                        <span className="mr-1">About us</span>
                        <IoChevronDown className="ml-2 text-sm transition-transform duration-200 group-hover:rotate-180" />
                      </button>

                      <ul className="absolute hidden group-hover:block w-64 bg-primary text-prc pt-1 z-50 rounded-md shadow-lg">
                        <li>
                          <Link
                            href="/about-us"
                            onClick={toggleMenu}
                            className="blck px-3 py-2 text-sm font-medium hover:bg-[#122d37] hover:text-white transition-all duration-200 flex justify-between"
                          >
                            Meet Bharat
                          </Link>
                        </li>
                        <li>
                          <Link
                            href="/what-we-do"
                            onClick={toggleMenu}
                            className="flex px-3 py-2 text-sm font-medium hover:bg-[#122d37] hover:text-white transition-all duration-200 justify-between"
                          >
                            What We Do
                          </Link>
                        </li>
                        <li>
                          <Link
                            href="/faq"
                            onClick={toggleMenu}
                            className="flex px-3 py-2 text-sm font-medium hover:bg-[#122d37] hover:text-white transition-all duration-200 justify-between"
                          >
                            FAQ{" "}
                          </Link>
                        </li>
                        <li>
                          <Link
                            href="/blogs"
                            onClick={toggleMenu}
                            className="flex px-3 py-2 text-sm font-medium hover:bg-[#122d37] hover:text-white transition-all duration-200 justify-between"
                          >
                            Blogs{" "}
                          </Link>
                        </li>
                           <li>
                          <Link
                            href="/contact-us"
                            onClick={toggleMenu}
                            className="flex px-3 py-2 text-sm font-medium hover:bg-[#122d37] hover:text-white transition-all duration-200 justify-between"
                          >
                           Contact Us
                          </Link>
                        </li>
                      </ul>
                    </div>
                  </li> */}

                  <div className="relative inline-block group">
                    <Link
                      href="/brands/game-console"
                      onClick={toggleMenu}
                      className=" flex items-center px-[5px] py-2 2xl:text-[16px] lg:text-[13px] font-semibold transition-all duration-200  rounded-lg hover:bg-[#122d37] hover:text-white  text-secondary"
                    >
                      Game Console
                    </Link>
                  </div>
                </ul>
              </div>
            </ul>
          </div>
        </nav>
      </div>

      {/* Enhanced background overlay */}
    </>
  );
};

export default ProfessionalMegaMenu;
