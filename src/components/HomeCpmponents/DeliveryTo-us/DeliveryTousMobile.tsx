import React, { useState } from "react";
import { MdKeyboardArrowDown } from "react-icons/md";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
interface itoms {
  id: number;
  label?: string;
  content?: string;
  contentf2?: string;
  contentf3?: string;
  contentf4?: string;
  contentf5?: string;
  contentf6?: string;
  button?: string;
  image?: any;
  link2?: any;
  buttonColor?: string;
}

interface DeliveryTousMobileProps {
  itoms: itoms[]; // Accepting 'itoms' data as props
}

const DeliveryTousMobile: React.FC<DeliveryTousMobileProps> = ({ itoms }) => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const handleToggle = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };
  function handleclick() {
    const element = document.getElementById("staperformid");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  }
  const pathname = usePathname();

  return (
    <div>
      {itoms.map((item) => (
        <div key={item.id} className="mb-4">
          <div
            className="flex justify-between items-center p-[12px] rounded-[10px] cursor-pointer border-[1px]"
            onClick={() => handleToggle(item.id)}
            style={{
              background:
                activeIndex === item.id ? item.buttonColor : undefined,
            }}
          >
            <span
              className={`${
                item.label && item.label.length > 30
                  ? "text-[15px]"
                  : "text-[17px]"
              } tracking-[1.5px] text-white ppppp`}
            >
              {item.label}
            </span>
            <MdKeyboardArrowDown
              className={`transition-transform duration-300 text-white ${
                activeIndex === item.id ? "rotate-180" : ""
              }`}
            />
          </div>
          <div
            className={`overflow-hidden transition-max-height duration-500 ease-in-out ${
              activeIndex === item.id ? "h-full" : "max-h-0"
            }`}
          >
            <div className="p-[12px] rounded-b-lg text-[16px]">
              <div className="flex items-center gap-2 mb-3">
                <p className="xl:pb-2 pb-1 m-0">{item.content}</p>
              </div>
              {item.contentf2 && (
                <div className="flex items-start gap-2 mb-2">
                  <Image
                    src={item.image}
                    alt="Pointing icon"
                    width={20}
                    height={20}
                  />
                  <p>{item.contentf2}</p>
                </div>
              )}
              {item.contentf3 && (
                <div className="flex items-start gap-2 mb-2">
                  <Image
                    src={item.image}
                    alt="Pointing icon"
                    width={20}
                    height={20}
                  />
                  <p>{item.contentf3}</p>
                </div>
              )}
              {item.contentf4 && (
                <div className="flex items-start gap-2 mb-2">
                  <Image
                    src={item.image}
                    alt="Pointing icon"
                    width={20}
                    height={20}
                  />
                  <p>{item.contentf4}</p>
                </div>
              )}
              {item.contentf5 && (
                <div className="flex items-start gap-2 mb-2">
                  <Image
                    src={item.image}
                    alt="Pointing icon"
                    width={20}
                    height={20}
                  />
                  <p>{item.contentf5}</p>
                </div>
              )}
              {item.contentf6 && (
                <div className="flex items-start gap-2 mb-2">
                  <Image
                    src={item.image}
                    alt="Pointing icon"
                    width={20}
                    height={20}
                  />
                  <p>{item.contentf6}</p>
                </div>
              )}
            </div>
            {pathname === "/ps5-repair" ? (
              <button
                onClick={handleclick}
                className="border-[0.5px] py-2 px-5 rounded-[50px] text-sm text-white font-[500]"
                style={{ background: item.buttonColor }}
              >
                {item.button}
              </button>
            ) : (
              <Link href={item.link2} passHref>
                <button
                  className="border-[0.5px] py-2 px-5 rounded-[50px] text-sm text-white font-[500]"
                  style={{ background: item.buttonColor }}
                >
                  {item.button}
                </button>
              </Link>
            )}
          </div>
        </div>
      ))}
    </div>
  );
};

export default DeliveryTousMobile;
