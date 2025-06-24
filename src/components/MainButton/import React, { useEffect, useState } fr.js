import React, { useEffect, useState } from "react";
import Image from "next/image";
import newlogo from "../../../public/Images/prclogo.png"; // Adjust the path as needed

export default function Header() {
  const [isDesktop, setIsDesktop] = useState(false); // Track if it's desktop
  const [isLoading, setIsLoading] = useState(true); // Track if the loader should be shown

  useEffect(() => {
    // Check window width on page load to determine if it's a desktop
    if (window.innerWidth >= 768) {
      setIsDesktop(true);
    }

    // Set timeout for the skeleton loader on desktop
    if (isDesktop) {
      const timer = setTimeout(() => {
        setIsLoading(false); // Hide skeleton loader after 1 second
      }, 1000);
      return () => clearTimeout(timer);
    }

    // Resize event listener
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setIsDesktop(true);
      } else {
        setIsDesktop(false);
      }
    };

    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, [isDesktop]);

  return (
    <div>
      {/* Skeleton Loader - Display only on Desktop */}
      {isDesktop && isLoading ? (
        <div className="flex items-center justify-between px-6 py-3">
          {/* Logo Placeholder */}
          <div className="h-10 w-10 rounded-full bg-gray-300 animate-pulse"></div>

          {/* Menu Items */}
          <div className="flex space-x-4">
            {Array.from({ length: 9 }).map((_, i) => (
              <div
                key={i}
                className="h-4 w-20 bg-gray-300 rounded animate-pulse"
              ></div>
            ))}
          </div>

          {/* Button Placeholder */}
          <div className="h-10 w-36 bg-red-300 rounded-full animate-pulse"></div>
        </div>
      ) : (
        // Your main header content
        <div className="navmenu flex items-center justify-between">
          <Link href="/">
            <Image
              src={newlogo}
              width={200}
              height={200}
              alt="Brand Logo"
              className="logo_LabX w-[60px]"
            />
          </Link>
          {/* Additional content for the header */}
        </div>
      )}
    </div>
  );
}
