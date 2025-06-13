import Link from "next/link";
import { useRouter } from "next/navigation"; // Import useRouter
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

const BrandImageGrid: React.FC<{ brandsData: any[]; pathname: string; isSidebarOpen:boolean; }> = ({
  brandsData,
  pathname,
  isSidebarOpen
}) => {
    useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);
  const router = useRouter(); // Initialize the router
  // if (brandsData.length === 0) return <span className="text-red-600 text-base">No products available for this brand at the moment. Please check back later!</span>;
  return (
    <div className={`grid grid-cols-2  md:grid-cols-3     ${isSidebarOpen ? "xl:grid-cols-4 lg:grid-cols-2":"xl:grid-cols-5 lg:grid-cols-3"}   lg:gap-8 md:gap-6 gap-4 bg-[#fff4f0] lg:p-8 md:p-6  p-4 rounded-xl `} 
    >
    {/* // data-aos="fade-up"> */}
      {brandsData.map((brand: any) => (
        <Link
          key={brand.id}
          className="border border-gray-300 rounded-lg p-4 flex flex-col items-center shadow-md bg-white cursor-pointer hover:scale-[1.03] transition-transform"
          //   onClick={() => router.push(`${pathname}/${brand.alias}`)} // Now router.push works
          href={`${pathname}/${brand.alias}`}
        >
          <img
            src={brand.image}
            alt={brand.title}
            className="lg:w-28 lg:h-40  w-16 h-30 object-contain mb-4 rounded-md"
            loading="lazy"
            height={300}
            width={1000}
          />
          <p className="text-center text-sm font-semibold text-black">
            {brand.title}
          </p>
        </Link>
      ))}
    </div>
  );
};

export default BrandImageGrid;
