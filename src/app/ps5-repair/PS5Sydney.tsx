import React from 'react';
import Image from 'next/image';
import PS5Sydneyfirst from "../../../public/Images/PS5Sydneyfirst.webp";
import PS5Sydneysecond from "../../../public/Images/PS5Sydneysecond.webp";
import Link from 'next/link';
interface tableps {
  id: any,
  imageItom: any;
  MainheadingItom: string;
  contactusLink?: any;
  contactusName?: string;
  shortHeading: string,
}
const PS5Sydney: React.FC = () => {

  const datatable: tableps[] = [{
    id: 1,
    imageItom: PS5Sydneyfirst,
    MainheadingItom: `Trusted By Gamers`,
    shortHeading: `With years of experience in console repairs, we’ve earned a reputation for reliability and expertise. Gamers trust us to restore their PS5s to peak performance, ensuring smooth and uninterrupted gameplay. Our skilled technicians handle every repair with precision, giving you confidence that your console is in safe hands. We make gaming hassle-free!
`,
    contactusLink: "/contact-us",
    contactusName: "CONTACT US →"

  },
  {
    id: 2,
    imageItom: PS5Sydneysecond,
    MainheadingItom: `Guaranteed Satisfaction`,
    shortHeading: `We take pride in delivering high-quality PS5 repairs with a focus on customer satisfaction. Whether it’s overheating, software issues, or hardware malfunctions, our experts diagnose and fix problems efficiently. With our fast turnaround time and warranty-backed service, you can get back to gaming without worries. Your PS5 deserves the best care, and we deliver it!
`,
    contactusLink: "/",
    contactusName: "CONTACT US →"

  },
  ]


  return (
    <section className="md:pt-14 md:pb-10 py-8">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 md:gap-10 gap-6 items-start">
        {/* Left Content */}

        {datatable.map((itom, index) =>

          <div className="flex flex-col gap-3" key={index}>
            <h2 className="text-3xl font-semibold text-[#EDE574]">{itom.MainheadingItom}</h2>
            <div>
              <Image
                src={itom.imageItom}
                alt="PS5 gaming"
                width={500}
                height={300}
                className="w-full object-cover"
              />
            </div>
            <p className="text-white">
             {itom.shortHeading}
            </p>
            <Link href={itom.contactusLink} className=" md:text-md text-[16px] rounded-lg md:px-4 px-2 py-2 border-2 border-gray-100 text-gray-100 hover:bg-gray-900 hover:text-black hover:bg-white duration-300 w-fit">
              {itom.contactusName}
            </Link>
          </div>
        )}

      </div>





    </section>
  );
  
};

export default PS5Sydney;