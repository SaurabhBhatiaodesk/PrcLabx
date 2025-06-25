"use client";
import { MdKeyboardArrowUp } from "react-icons/md";
import { MdKeyboardArrowDown } from "react-icons/md";

import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
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
  const router = useRouter();
  const [selectedData, setSelectedData] = useState<any>(null); // Store data or products for the clicked category

  const pathname = usePathname();
  const isExpanded = expandedPaths.includes(href); // Check if current path is expanded
  const hasChildren = Boolean(item.data) || Boolean(item.products); // Check if the item has subcategories or products
  const isActive = currentPath === href; // Check if the current item is active

  // Handle category click and expand it (and auto-drill if it's the second-last level)
  const handleCategoryClick = (e: React.MouseEvent) => {
    e.preventDefault();
    // 1) toggle open/close
    toggleExpand(href);
    // 2) set selectedData for children rendering
    if (item.data) {
      setSelectedData(item.data);
    } else if (item.products) {
      setSelectedData(item.products);
    }

    // 3) determine if its children are all leaves (no deeper .data/.products)
    const children = item.data?.length ? item.data : item.products ?? [];
    const isLeafParent =
      children.length > 0 &&
      children.every(
        (c: any) => !Array.isArray(c.data) && !Array.isArray(c.products)
      );

    // 4) if it is a leaf-parent (second-last), auto-navigate to first child
    if (isLeafParent) {
      setTabs(children);
      setIsLastItemClicked(true);
      router.push(`${href}/${children[0].alias}`);
    } else {
      setIsLastItemClicked(false);
    }
  };

  // Function to recursively map over items (data or products)
  const renderChildItems = (items: any[], parentHref: string) => {
    setTabs(items);
    const lastSegment = pathname.split("/").pop();

    // Check if there are no nested arrays and if the alias matches the last segment of the URL
    const hasNestedArrays = items.some(
      (child: any) => Array.isArray(child.data) || Array.isArray(child.products)
    );
    const slugMatch = items.some((child: any) => child.alias === lastSegment);

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
        onClick={handleCategoryClick}
      >
        <Link href={href} className="flex-1 truncate font-semibold">
          {item.title}
        </Link>
        {hasChildren && (
          <span
            className={`font-bold select-none transition-transform duration-300 text-base ${
              isActive ? "text-white" : ""
            }`}
          >
            {isExpanded ? <MdKeyboardArrowUp /> : <MdKeyboardArrowDown />}
          </span>
        )}
      </div>

      {isExpanded && hasChildren && (
        <div className="mt-1">
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
