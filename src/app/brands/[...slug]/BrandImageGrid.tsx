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
  loading: boolean;
}> = ({ brandsData, pathname, isSidebarOpen, tabs, loading }) => {
  const [showMessage, setShowMessage] = useState(false);
  useEffect(() => {
    AOS.init({ duration: 1000 });

    // Delay showing the fallback message for 2 seconds
    if (brandsData.length === 0) {
      const timer = setTimeout(() => {
        setShowMessage(true);
      }, 2000);

      return () => clearTimeout(timer); // Cleanup
    }
    localStorage.setItem("tabsData", "");
    localStorage.setItem("Lastslug", "");
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

      {brandsData.length === 0 && loading && (
        <div
          role="status"
          className="flex items-center justify-center min-h-[60vh]"
        >
          <svg
            aria-hidden="true"
            className="w-8 h-8 text-gray-200 animate-spin dark:text-gray-600 fill-blue-600"
            viewBox="0 0 100 101"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
              fill="currentColor"
            />
            <path
              d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
              fill="currentFill"
            />
          </svg>
          <span className="sr-only">Loading...</span>
        </div>
      )}
    </>
  );
};

export default BrandImageGrid;
