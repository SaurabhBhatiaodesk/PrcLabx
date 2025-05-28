import Image from "next/image";
import gamejoy from "../../../public/Images/gamejoy.webp";
import Link from "next/link";

interface ExpertRepairItem {
  title: string;
  dataitom: string;
  contactlink?: string;
  contactname?: string;
}

const PS5ExpertRepair = () => {
  const ExpertRepair: ExpertRepairItem[] = [
    {
      title: `Expert PS5 Repair at LabX Repair`,
      dataitom:`Get expert PS5 repair at LabX Repair for fast, reliable fixes. From HDMI port issues to power failures, our skilled technicians ensure your PlayStation 5 is restored to peak performance quickly!`,
      contactlink: "/contact-us",
      contactname: "Contact Us",
    },
    {
      title:` Reliable PS5 Repair Solutions in Sydne`,
      dataitom:
        `Is your PS5 acting up and disrupting your gaming sessions? Whether it’s power issues, overheating, or connectivity problems, we offer expert PlayStation 5 repair services in Sydney. Our skilled technicians quickly diagnose and fix issues to restore your console’s performance. Don’t let gaming downtime get in your way—contact us today for fast and efficient PS5 repair service!`,
      contactlink: "/contact-us",
      contactname: "Contact Us",
    },
    {
      title: `Fast Turnaround PS5 Repair `,
      dataitom:
      `We understand how frustrating it is to have a broken PlayStation 5 sitting idle. That’s why we offer quick and efficient PS5 repair services with a fast turnaround time. Our skilled technicians diagnose and fix issues swiftly, ensuring minimal downtime. Don’t wait weeks for a repair—get your console fixed fast and back in action!` ,
      contactlink: "/contact-us",
      contactname: "Contact Us",
    },
  ];

  return (
    <section className="bg-black text-white md:pt-20 md:pb-10 px-4 md:px-16">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 md:gap-10 gap-3 items-center md:my-12">
        {/* Left Side - Image + Heading */}
        <div className="text-center md:text-left">
          <div className="relative w-full h-56 md:h-96">
            <Image
              src={gamejoy} // replace with your actual image path
              alt="PS5 Console"
              layout="fill"
              objectFit="contain"
              className="rounded-lg"
            />
          </div>
          <h2 className="text-3xl md:text-4xl font-bold md:mt-6 mt-2">
            Expert PS5 Repair – Fast, Reliable, And Affordable!
          </h2>
          <p className="mt-4 text-gray-300">
            Get your PS5 repaired quickly and efficiently with our expert
            service. We ensure reliable, affordable, and high-quality repairs
            for seamless gaming!
          </p>
        </div>

        {/* Right Side - Repair Info Cards */}
        <div className="md:space-y-6 space-y-4 md:absolute md:w-[46%] md:right-0 md:h-auto md:bg-white md:flex md:flex-col md:items-center md:justify-center md:p-8 overflow-x-auto">
          {ExpertRepair.map((item, index) => (
            <div key={index}>
              <div className="border border-gray-300 p-6 rounded-lg bg-white text-black shadow-md">
                <h3 className="text-xl font-bold mb-2 text-black">
                  {item.title}
                </h3>
                <p className="text-sm mb-4 text-black">{item.dataitom}</p>
                {item.contactlink && item.contactname && (
                  <Link
                    href={item.contactlink}
                    className="inline-block font-semibold text-black hover:underline"
                  >
                    {item.contactname} →
                  </Link>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PS5ExpertRepair;
