"use client";

import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";
import Pdp from "./Pdp";

const brandsData = {
  apple: {
    name: "Apple",
    slug: "apple",
    img: "/images/iphone16e.png",
    categories: {
      iphone: {
        name: "iPhone",
        slug: "iphone",
        img: "/images/iphone16e.png",
        series: {
          "iphone-16-series": {
            name: "iPhone 16 Series",
            slug: "iphone-16-series",
            img: "/images/iphone16e.png",
            models: {
              "apple-iphone-16e": {
                name: "Apple iPhone 16e",
                slug: "apple-iphone-16e",
                img: "/images/iphone16e.png",
                services: {
                  "screen-repair": { name: "Screen Repair", price: "$135" },
                  "camera-issue": { name: "Camera Issue", price: "$35" },
                },
              },
            },
          },
        },
      },
      ipad: {
        name: "iPad",
        slug: "ipad",
        img: "/images/iphone16e.png",
        series: {},
      },
    },
  },
  samsung: {
    name: "Samsung",
    slug: "samsung",
    img: "/images/iphone16e.png",
    categories: {
      phones: {
        name: "Phones",
        slug: "phones",
        img: "/images/iphone16e.png",
        series: {
          "galaxy-s23-series": {
            name: "Galaxy S23 Series",
            slug: "galaxy-s23-series",
            img: "/images/iphone16e.png",
            models: {
              "galaxy-s23-ultra": {
                name: "Galaxy S23 Ultra",
                slug: "galaxy-s23-ultra",
                img: "/images/galaxys23ultra.jpg",
                services: {
                  "screen-repair": { name: "Screen Repair", price: "$120" },
                },
              },
            },
          },
        },
      },
    },
  },
};

const SidebarItem: React.FC<{
  item: any;
  href: string;
  level: number;
  expandedPaths: string[];
  toggleExpand: (path: string) => void;
  currentPath: string;
}> = ({ item, href, level, expandedPaths, toggleExpand, currentPath }) => {
  const isExpanded = expandedPaths.includes(href);
  const hasChildren =
    Boolean(item.categories) ||
    Boolean(item.series) ||
    Boolean(item.models) ||
    Boolean(item.services);
  const isActive = currentPath === href;

  return (
    <div className="relative group">
      {level > 0 && (
        <div
          className="absolute top-0 left-4 h-full border-l border-green-400 pointer-events-none"
          style={{ marginLeft: `${(level - 1) * 10 + 10}px` }}
        />
      )}
      <div
        className={`flex items-center justify-between cursor-pointer rounded-md px-5 py-3 transition-colors duration-200
          ${
            isActive
              ? "bg-green-700 text-white shadow-lg"
              : "text-gray-800 hover:bg-green-100 hover:text-green-700 text-sm"
          }
          ${hasChildren ? "font-semibold text-sm" : "font-normal text-sm"}
        `}
        style={{ paddingLeft: `${level * 20 + 20}px` }}
        onClick={() => toggleExpand(href)}
      >
        <Link href={href} className="flex-1 truncate">
          {item.name}
        </Link>
        {hasChildren && (
          <span
            className={`text-green-600 font-bold select-none transition-transform duration-300 ${
              isExpanded ? "rotate-180" : "rotate-0"
            }`}
          >
            ▼
          </span>
        )}
      </div>

      {isExpanded && hasChildren && (
        <div className="mt-1">
          {item.categories &&
            Object.entries(item.categories).map(([key, val]) => (
              <SidebarItem
                key={key}
                item={val}
                href={`${href}/${val.slug}`}
                level={level + 1}
                expandedPaths={expandedPaths}
                toggleExpand={toggleExpand}
                currentPath={currentPath}
              />
            ))}
          {item.series &&
            Object.entries(item.series).map(([key, val]) => (
              <SidebarItem
                key={key}
                item={val}
                href={`${href}/${val.slug}`}
                level={level + 1}
                expandedPaths={expandedPaths}
                toggleExpand={toggleExpand}
                currentPath={currentPath}
              />
            ))}
          {item.models &&
            Object.entries(item.models).map(([key, val]) => (
              <SidebarItem
                key={key}
                item={val}
                href={`${href}/${val.slug}`}
                level={level + 1}
                expandedPaths={expandedPaths}
                toggleExpand={toggleExpand}
                currentPath={currentPath}
              />
            ))}
          {item.services &&
            Object.entries(item.services).map(([key, val]) => (
              <SidebarItem
                key={key}
                item={val}
                href={`${href}/${key}`}
                level={level + 1}
                expandedPaths={expandedPaths}
                toggleExpand={toggleExpand}
                currentPath={currentPath}
              />
            ))}
        </div>
      )}
    </div>
  );
};

const BrandDetailPage: React.FC = () => {
  const pathname = usePathname();
  const router = useRouter();

  // Track whether sidebar is open or closed
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  // Build slugArray by stripping "/brands" and splitting the rest
  const slugArray =
    pathname?.replace("/brands", "").split("/").filter(Boolean) || [];

  // Keep track of which sidebar branches to expand
  const [expandedPaths, setExpandedPaths] = useState<string[]>([]);

  useEffect(() => {
    // Auto-open all parent levels when the path changes
    const pathsToExpand = slugArray.reduce((acc: string[], cur, idx) => {
      const segment = `/brands/${slugArray.slice(0, idx + 1).join("/")}`;
      acc.push(segment);
      return acc;
    }, []);
    setExpandedPaths(pathsToExpand);
  }, [pathname]);

  // Dig into brandsData according to slugArray
  let currentItem: any = brandsData;
  for (const slug of slugArray) {
    if (!currentItem) break;
    if (currentItem.categories && currentItem.categories[slug]) {
      currentItem = currentItem.categories[slug];
    } else if (currentItem.series && currentItem.series[slug]) {
      currentItem = currentItem.series[slug];
    } else if (currentItem.models && currentItem.models[slug]) {
      currentItem = currentItem.models[slug];
    } else if (currentItem.services && currentItem.services[slug]) {
      currentItem = currentItem.services[slug];
    } else {
      currentItem = null;
    }
  }

  // Toggle expand/collapse for sidebar items
  const toggleExpand = (path: string) => {
    setExpandedPaths((prev) =>
      prev.includes(path) ? prev.filter((p) => p !== path) : [...prev, path]
    );
  };

  // Render main content based on currentItem
  const renderContent = () => {
    if (!currentItem)
      return (
        <p className="text-gray-600 text-lg">
          Please select a category to see details.
        </p>
      );

    if (currentItem.services) {
      return (
        <div>
          <h2 className="font-bold text-2xl mb-6">Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {Object.entries(currentItem.services).map(([key, service]: any) => (
              <div
                key={key}
                className="border rounded-lg p-6 bg-yellow-100 shadow-md hover:shadow-lg transition"
              >
                <p className="font-semibold text-lg">{service.name}</p>
                <p className="text-xl font-bold text-purple-700">
                  {service.price}
                </p>
              </div>
            ))}
          </div>
        </div>
      );
    }

    if (currentItem.models) {
      return (
        <div>
          <h2 className="font-bold text-2xl mb-6">Models</h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-8 bg-[#fff4f0] p-8 rounded-xl shadow-inner">
            {Object.entries(currentItem.models).map(([key, model]: any) => (
              <div
                key={key}
                className="border border-gray-300 rounded-lg p-4 flex flex-col items-center shadow-md bg-white cursor-pointer hover:scale-[1.03] transition-transform"
                onClick={() => router.push(`${pathname}/${model.slug}`)}
              >
                <img
                  src={model.img}
                  alt={model.name}
                  className="w-28 h-40 object-contain mb-4 rounded-md"
                  loading="lazy"
                />
                <p className="text-center text-sm font-semibold">
                  {model.name}
                </p>
              </div>
            ))}
          </div>
        </div>
      );
    }

    if (currentItem.series) {
      return (
        <div>
          <h2 className="font-bold text-2xl mb-6">Series</h2>
          <div className="space-y-4">
            {Object.entries(currentItem.series).map(([key, serie]: any) => (
              <div
                key={key}
                className="border border-gray-300 rounded-lg p-4 cursor-pointer hover:bg-yellow-200 shadow-sm transition"
                onClick={() => router.push(`${pathname}/${serie.slug}`)}
              >
                {serie.name}
              </div>
            ))}
          </div>
        </div>
      );
    }

    if (currentItem.categories) {
      return (
        <div>
          <h2 className="font-bold text-2xl mb-6">Categories</h2>
          <div className="space-y-4">
            {Object.entries(currentItem.categories).map(([key, cat]: any) => (
              <div
                key={key}
                className="border border-gray-300 rounded-lg p-4 cursor-pointer hover:bg-yellow-200 shadow-sm transition"
                onClick={() => router.push(`${pathname}/${cat.slug}`)}
              >
                {cat.name}
              </div>
            ))}
          </div>
        </div>
      );
    }

    return (
      <p className="text-gray-600 text-lg">No further details available.</p>
    );
  };

  return (
    <div className="flex min-h-screen bg-white">
      {/* ─── Sidebar ────────────────────────────────────────────────────────── */}
      {isSidebarOpen && (
        <aside
          className="w-full max-w-xs md:max-w-md lg:max-w-[26rem] bg-yellow-400 p-6 overflow-y-auto sticky top-0
            shadow-lg scrollbar-thin scrollbar-thumb-green-700 scrollbar-track-yellow-200"
        >
          <h2 className="text-xl font-extrabold text-green-800 mb-2 border-b border-green-600 tracking-wide select-none">
            Select Brands
          </h2>

          {Object.entries(brandsData).map(([key, val]) => (
            <SidebarItem
              key={key}
              item={val}
              href={`/brands/${val.slug}`}
              level={0}
              expandedPaths={expandedPaths}
              toggleExpand={toggleExpand}
              currentPath={pathname}
            />
          ))}
        </aside>
      )}

      {/* ─── Main Content ───────────────────────────────────────────────────── */}
      <main className="flex-1 p-3 bg-[#fff4f0] min-h-screen overflow-auto shadow-inner">
        {/* Toggle Button */}
        <button
          onClick={() => setIsSidebarOpen((prev) => !prev)}
          className="mb-6 p-2 bg-green-600 text-white rounded-md hover:bg-green-700 transition"
        >
          {isSidebarOpen ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          )}
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

        {/* Render content based on currentItem */}
        {renderContent()}

        {/* Always render Pdp at the bottom */}
        <Pdp />
      </main>
    </div>
  );
};

export default BrandDetailPage;
