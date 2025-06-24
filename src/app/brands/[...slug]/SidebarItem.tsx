import { MdKeyboardArrowUp } from "react-icons/md";
import { MdKeyboardArrowDown } from "react-icons/md";

import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { useState } from "react";

const SidebarItem: React.FC<{
  item: any;
  href: string;
  level: number;
  expandedPaths: string[];
  toggleExpand: (path: string) => void;
  currentPath: string;
  setIsLastItemClicked: any;
  setTabs: any;
}> = ({
  item,
  href,
  level,
  expandedPaths,
  toggleExpand,
  currentPath,
  setIsLastItemClicked,
  setTabs,
}) => {
  const [selectedData, setSelectedData] = useState<any>(null); // Store data or products for the clicked category

  const pathname = usePathname();
  const isExpanded = expandedPaths.includes(href); // Check if current path is expanded
  const hasChildren = Boolean(item.data) || Boolean(item.products); // Check if the item has subcategories or products
  const isActive = currentPath === href; // Check if the current item is active

  // Handle category click and expand it
  const handleCategoryClick = () => {
    toggleExpand(href); // Toggle the expanded state of the category
    if (item.data) {
      setSelectedData(item.data); // Set data if subcategories exist
    } else if (item.products) {
      setSelectedData(item.products); // Set products if no subcategories exist
    }
  };

  // Function to recursively map over items (data or products)
  const renderChildItems = (items: any[], parentHref: string) => {
    console.log(items, 'items>>>>', parentHref, "parentHref")
    setTabs(items);
    const lastSegment = pathname.split("/").pop(); // Get the last part of the URL (slugMatch)
    console.log(lastSegment, 'lastSegment>>>>')

    // Check if there are no nested arrays and if the alias matches the last segment of the URL
    const hasNestedArrays = items.some(
      (child: any) => Array.isArray(child.data) || Array.isArray(child.products)
    );
    console.log(hasNestedArrays,'hasNestedArrayshasNestedArrays')
    const slugMatch = items.some((child: any) => child.alias === lastSegment); // Check if alias matches last segment of URL

    console.log(slugMatch,'slugMatchslugMatch')
    // If no nested arrays and slug matches, set the state to true
    if (!hasNestedArrays && slugMatch) {
      setIsLastItemClicked(true);
    } else {
      setIsLastItemClicked(false);
    }

    return items.map((child: any) => (
      <SidebarItem
        key={child.id}
        item={child}
        href={`${parentHref}/${child.alias}`}
        level={level + 1}
        expandedPaths={expandedPaths}
        toggleExpand={toggleExpand}
        currentPath={currentPath}
        setIsLastItemClicked={setIsLastItemClicked}
        setTabs={setTabs}
      />
    ));
  };

  return (
    <div className="relative group">
      {level > 0 && (
        <div
          className="absolute top-0 left-4 h-full border-l border-prc pointer-events-none"
          style={{ marginLeft: `${(level - 1) * 6 + 10}px` }}
        />
      )}
      <div
        className={`flex items-center justify-between cursor-pointer rounded-md px-5 py-1 transition-colors duration-200 relative z-10
          ${
            isActive
              ? "bg-[#122d37] text-white shadow-lg md:text-[15px] text-[13px]"
              : "text-gray-800 hover:bg-prc hover:text-primary text-sm"
          }`}
        style={{ paddingLeft: `${level * 20 + 20}px` }}
        onClick={handleCategoryClick} // Handle category click
      >
        <Link href={href} className="flex-1 truncate font-semibold">
          {item.title} 
        </Link>
        {hasChildren && (
          <span
            className={` font-bold select-none transition-transform duration-300 text-base ${isActive ? "text-white" : ""}`}>
          {isExpanded ? <MdKeyboardArrowUp  /> : <MdKeyboardArrowDown />}
          </span>
        )}
      </div>

      {isExpanded && hasChildren && (
        <div className="mt-1">
          {/* Render child items (either data or products) */}
          {item.data &&
            item.data.length > 0 &&
            renderChildItems(item.data, href)}
          {item.products &&
            item.products.length > 0 &&
            renderChildItems(item.products, href)}
        </div>
      )}
    </div>
  );
};

export default SidebarItem;
