import Link from "next/link";
import { useRouter } from "next/navigation"; // Import useRouter
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect, useState } from "react";

const BrandImageGrid: React.FC<{
  brandsData: any[];
  pathname: string;
  isSidebarOpen: boolean;
  tabs: any;
}> = ({ brandsData, pathname, isSidebarOpen, tabs }) => {
  const [showMessage, setShowMessage] = useState(false);
  useEffect(() => {
    AOS.init({ duration: 1000 });

    // Delay showing the fallback message for 2 seconds
    if (brandsData.length === 0) {
      const timer = setTimeout(() => {
        setShowMessage(true);
      }, 4000);

      return () => clearTimeout(timer); // Cleanup
    } else {
      setShowMessage(false);
    }
  }, [brandsData]);

  return (
    <>
      <div
        className={`grid grid-cols-2  md:grid-cols-3 ${
          isSidebarOpen
            ? "xl:grid-cols-4 lg:grid-cols-2"
            : "xl:grid-cols-5 lg:grid-cols-3"
        } lg:gap-8 md:gap-6 gap-4 bg-[#fff4f0]  md:pb-6 md:pt-2 px-6  p-4  `}
      >
        {brandsData.map((brand: any) => {
          // 1️⃣ find the matching tab
          const matchingTab = tabs?.find((t: any) => t.alias === brand.alias);

          // 2️⃣ grab the first repair slug (screen-repair)
          const firstRepairSlug = matchingTab?.data?.[0]?.alias;

          // 3️⃣ build the URL
          const href = firstRepairSlug
            ? `${pathname}/${brand.alias}/${firstRepairSlug}`
            : `${pathname}/${brand.alias}`;

          return (
            <Link
              key={brand.id}
              className="border border-gray-300 rounded-lg p-4 flex flex-col items-center shadow-md bg-white cursor-pointer hover:scale-[1.03] transition-transform"
              href={href}
            >
              <img
                src={brand.image}
                alt={brand.title}
                className="lg:w-28 lg:h-40 w-16 h-30 object-contain mb-4 rounded-md"
                loading="lazy"
                height={300}
                width={1000}
              />
              <p className="text-center text-sm font-semibold text-black">
                {brand.title}
              </p>
            </Link>
          );
        })}
      </div>

      {brandsData.length === 0 && showMessage && (
        <div>
          {" "}
          <h3 className="text-center">No Data found</h3>
        </div>
      )}
    </>
  );
};

export default BrandImageGrid;
