"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { useState, useEffect, useRef, useCallback } from "react";
import { IoChevronDown, IoChevronForward } from "react-icons/io5";

// TypeScript interfaces
interface MenuItem {
  id: string | number;
  title: string;
  alias: string;
  image?: string;
  data?: MenuItem[];
  products?: MenuItem[];
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
  const itemPath = buildPath(parentPath, item.alias);
  const itemId = `${item.id}-${level}`;
  const isHovered = hoveredPath[level] === itemId;
  const children = getChildren(item);
  const submenuRef = useRef<HTMLDivElement>(null);
  const itemRef = useRef<HTMLDivElement>(null);

  // Positioning logic for independent submenus
  useEffect(() => {
    if (isHovered && submenuRef.current && itemRef.current) {
      const itemRect = itemRef.current.getBoundingClientRect();
      const submenu = submenuRef.current;
      const viewportWidth = window.innerWidth;
      const viewportHeight = window.innerHeight;
      const submenuWidth = 240; // Consistent width for independent submenus
      const submenuHeight = submenu.scrollHeight; // Actual height of the submenu content

      // Reset positioning styles
      submenu.style.left = "";
      submenu.style.right = "";
      submenu.style.top = "";
      submenu.style.bottom = "";

      // Horizontal positioning: Try right, then left
      const spaceOnRight = viewportWidth - itemRect.right;
      const spaceOnLeft = itemRect.left;

      if (spaceOnRight >= submenuWidth) {
        // Position to the right of the parent item
        submenu.style.left = `${itemRect.right + 2}px`; // 2px gap
        submenu.style.right = "auto";
      } else if (spaceOnLeft >= submenuWidth) {
        // Position to the left of the parent item
        submenu.style.left = `${itemRect.left - submenuWidth - 2}px`; // 2px gap
        submenu.style.right = "auto";
      } else {
        // Fallback: position within viewport if not enough space on either side
        // This might overlap the parent, but ensures visibility
        submenu.style.left = `${Math.max(
          0,
          viewportWidth - submenuWidth - 8
        )}px`;
        submenu.style.right = "auto";
      }

      // Vertical positioning: Align with parent item's top, or adjust if off-screen
      const spaceBelow = viewportHeight - itemRect.top;
      const spaceAbove = itemRect.bottom;

      if (spaceBelow >= submenuHeight) {
        // Align top with parent item
        submenu.style.top = `${itemRect.top}px`;
        submenu.style.bottom = "auto";
      } else if (spaceAbove >= submenuHeight) {
        // Align bottom with parent item
        submenu.style.top = `${itemRect.bottom - submenuHeight}px`;
        submenu.style.bottom = "auto";
      } else {
        // Fallback: center vertically in viewport
        submenu.style.top = `${Math.max(
          8,
          (viewportHeight - submenuHeight) / 2
        )}px`;
        submenu.style.bottom = "auto";
      }

      // Ensure submenu is fixed position relative to viewport
      submenu.style.position = "fixed";
    }
  }, [isHovered, item.id, level]);

  return (
    <div ref={itemRef} className="relative group/nested">
      <Link
        href={`/brands/${itemPath}`}
        className={`flex items-center justify-between px-3 py-2 text-sm transition-all duration-200 cursor-pointer border-l-2 border-transparent hover:border-l-[#122d37] hover:bg-gray-50 ${
          isActivePath(item.alias)
            ? "bg-[#122d37] text-white border-l-[#122d37]"
            : "text-gray-700 hover:text-[#122d37]"
        }`}
        onMouseEnter={() => onMouseEnter(itemId, level)}
        onMouseLeave={() => onMouseLeave(level + 1)}
      >
        <span className="flex-1 truncate pr-2 font-medium">{item.title}</span>
        {hasChildren(item) && (
          <IoChevronForward className="text-sm opacity-60 flex-shrink-0 transition-transform duration-200 group-hover/nested:translate-x-1" />
        )}
      </Link>

      {/* Independent nested submenu - appears as a separate dropdown */}
      {hasChildren(item) && isHovered && (
        <div
          ref={submenuRef}
          className="bg-white shadow-xl border border-gray-200 rounded-lg py-2 z-50 max-h-80 overflow-y-auto opacity-0 invisible group-hover/nested:opacity-100 group-hover/nested:visible transition-all duration-200 ease-out"
          style={{
            width: "240px",
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
            {children.map((child) => (
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
  const [activeMenu, setActiveMenu] = useState<string | null>(null);
  const [hoveredPath, setHoveredPath] = useState<string[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const pathname = usePathname();
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);
  const submenuTimeoutRef = useRef<NodeJS.Timeout | null>(null);
   const [isDropdownVisible, setIsDropdownVisible] = useState(false);

  // Fetch menu data from API
  useEffect(() => {
    const fetchMenuData = async () => {
      try {
        setIsLoading(true);

        let baseData: MenuItem[] = JSON.parse(sessionStorage.getItem("baseData") || "[]");

        if (baseData.length === 0) {
          const api = "https://www.prc.repair/api/sidebar-filter"; // Replace with your API endpoint
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
    return Boolean(item.data?.length) || Boolean(item.products?.length);
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

    // Enhanced column calculation for better layout
    const columns = Math.min(Math.max(Math.ceil(children.length / 6), 2), 4);
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
          minWidth: "500px",
          maxWidth: "80vw",
          boxShadow:
            "0 20px 40px rgba(0, 0, 0, 0.15), 0 8px 16px rgba(0, 0, 0, 0.1)",
        }}
        onMouseEnter={() => handleMouseEnter(parentItem.id.toString())}
        onMouseLeave={() => handleMouseLeave()}
      >
        <div className="p-6">
          {/* Enhanced Header with gradient */}
          <div className="pb-4 border-b border-gray-200 bg-gradient-to-r from-[#122d37] to-[#1a3d4a] -m-6 mb-4 p-6 rounded-t-lg">
            <h3 className="text-lg font-bold text-white mb-1">
              {parentItem.title} Products & Services
            </h3>
            <p className="text-gray-200 text-sm opacity-90">
              Explore our comprehensive range of{" "}
              {parentItem.title.toLowerCase()} repair services
            </p>
          </div>

          {/* Enhanced Grid Layout with perfect spacing */}
          <div
            className="grid gap-4"
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
          <div className="mt-6 pt-4 border-t border-gray-200 flex justify-between items-center">
            <Link
              href={`/brands/${parentItem.alias}`}
              className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-[#122d37] to-[#1a3d4a] text-white text-sm font-semibold rounded-lg hover:from-[#1a3d4a] hover:to-[#122d37] transition-all duration-200 shadow-md hover:shadow-lg transform hover:-translate-y-0.5"
            >
              View All {parentItem.title} Products
              <IoChevronForward className="ml-2 text-sm" />
            </Link>
            <div className="text-sm text-gray-500 bg-gray-100 px-3 py-1 rounded-full">
              {children.length} categories available
            </div>
          </div>
        </div>
      </div>
    );
  };

  if (isLoading) {
    return (
      <nav className={`bg-white border-b border-gray-200 ${className}`}>
        <div className="container mx-auto px-6">
          <div className="flex justify-center items-center py-3">
            <div className="flex space-x-6">
              {[...Array(6)].map((_, index) => (
                <div
                  key={index}
                  className="h-5 bg-gray-200 w-20 rounded animate-pulse"
                ></div>
              ))}
            </div>
          </div>
        </div>
      </nav>
    );
  }

  return (
    <>
      {/* Enhanced Desktop Navigation */}
      <nav
        className={`bg-white border-b border-gray-200 sticky top-0 z-30 shadow-sm ${className}`}
      >
        <div className="container mx-auto px-6">
          <ul className="flex justify-center items-center space-x-6 py-3 relative">
            {menuData.slice(0, 6).map((item, index) => (
              <li
                key={item.id}
                className="relative group"
                onMouseEnter={() => handleMouseEnter(item.id.toString())}
                onMouseLeave={() => handleMouseLeave()}
              >
                <Link
                  href={`/brands/${item.alias}`}
                  className={`flex items-center px-4 py-2 text-sm font-semibold transition-all duration-200 rounded-lg hover:bg-[#122d37] hover:text-white hover:shadow-md transform hover:-translate-y-0.5 ${
                    isActivePath(item.alias)
                      ? "bg-[#122d37] text-white shadow-md"
                      : "text-gray-700 hover:text-white"
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
        <button className="flex text-center text-sm text-blue-500 hover:text-blue-700 mt-2">
          {isDropdownVisible ? "Show Less" : "Other Brands"}
          <IoChevronDown className="ml-2 text-sm transition-transform duration-200 group-hover:rotate-180" />
        </button>

        {/* Dropdown for remaining brands */}
        {isDropdownVisible && (
          <div className="absolute top-0 left-0 mt-2 bg-white shadow-lg border border-gray-200 rounded-lg w-64 py-2 z-10">
            <ul className="space-y-2">
              {menuData.slice(6).map((item) => (
                <li key={item.id} className="relative group">
                  <Link
                    href={`/brands/${item.alias}`}
                    className={`flex items-center px-4 py-2 text-sm font-semibold transition-all duration-200 rounded-lg hover:bg-[#122d37] hover:text-white hover:shadow-md transform hover:-translate-y-0.5
                    "text-gray-700 hover:text-white"
                  `}
                  >
                    {item.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
          </ul>
          
        </div>
      </nav>

      {/* Enhanced background overlay */}
      {activeMenu && (
        <div
          className="fixed inset-0 bg-black bg-opacity-10 z-20 backdrop-blur-sm"
          onClick={() => {
            setActiveMenu(null);
            setHoveredPath([]);
          }}
        />
      )}
    </>
  );
};

export default ProfessionalMegaMenu;
