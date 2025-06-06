import Link from "next/link";
import { useRouter } from "next/navigation"; // Import useRouter

const BrandImageGrid: React.FC<{ brandsData: any[]; pathname: string }> = ({
  brandsData,
  pathname,
}) => {
  const router = useRouter(); // Initialize the router
  // if (brandsData.length === 0) return <span className="text-red-600 text-base">No products available for this brand at the moment. Please check back later!</span>;
  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-8 bg-[#fff4f0] p-8 rounded-xl shadow-inner">
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
            className="w-28 h-40 object-contain mb-4 rounded-md"
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
