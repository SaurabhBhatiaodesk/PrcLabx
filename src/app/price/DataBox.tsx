"use client";
import MainTitle from "@/components/MainTitle/MainTitle";
import MainHeading from "@/components/ManinHeading/MainHeading";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import Recoverphotos from "../../././../public/Images/icons/Recoverphotos.svg";

import recoverfirsr from "../../././../public/Images/icons/recoverfirsr.svg";
import Specializedrecovery from "../../././../public/Images/icons/Specializedrecovery.svg";
import Transparentpricing from "../../././../public/Images/icons/Transparentpricing.svg";
import repairforconnectdamage from "../../././../public/Images/icons/repairforconnectdamage.svg";
import completetherepair from "../../././../public/Images/icons/completetherepair.svg";

import Competitiveandupfrontpricing from "../../././../public/Images/icons/Competitiveandupfrontpricing.svg";
import AOS from "aos";
import "aos/dist/aos.css";
import { setPriceCat } from "../redux/slice";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../redux/store";

const DataBox: React.FC = () => {
  const dispatch = useDispatch();
  const [pricingId, setPricingId] = useState(0);
  const priceCat = useSelector((state: RootState) => state.users.priceCat);

  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  const sectionData = [
    {
      id: 1,

      title: `Screen Buy-Back Pricing`,
      description: `For fast screen refurbishment, you have two options: you can choose our service to replace the glass only, or you can sell your old broken screens to us, as we offer competitive buyback prices.`,
      activecolor:
        "linear-gradient(74deg, rgb(86, 193, 193), rgb(0, 0, 0))",
        button: "See price list",
    },
    {
      id: 2,

      title: "Data Recovery Pricing",
      description: `We offer professional data recovery services to retrieve essential information from non-functional devices. Any devices that are dead or have no power will be classified as data recovery cases.`,
      activecolor:
        "linear-gradient(74deg, rgba(243, 85, 32, 0.753), rgb(0, 0, 0))",
        button: "See price list",
    },
    {
      id: 3,
  
      title: "General Repair Pricing",
      description: `Our general repair pricing includes common services such as screen replacements, charging port repairs, and other standard issues typically offered by most repair shops. `,
      activecolor:
        "linear-gradient(74deg, rgba(213, 253, 51, 0.63), rgb(0, 0, 0))",
        button: "See price list",
        
    },
    {
      id: 4,
   
      title: "DIY/Techcnian Damage Pricing",
      description: `We repair devices damaged during DIY or technician attempts, addressing connector issues, fitting errors, and torn flex cables. Trust us for reliable service to restore your device.`,
      activecolor:
        "linear-gradient(74deg, rgba(207, 35, 98, 0.655), rgb(0, 0, 0))",
        button: "See price list",
    },
  ];
  useEffect(() => {
    setPricingId(priceCat ?? 0);
  }, [priceCat]);

  const PricetoggleMenu = (data: number) => {
    dispatch(setPriceCat(data));
    setPricingId(data);
  };

  return (
    <div>
      <div className="container" data-aos="fade-up">
      
        <div className="lg:pb-8 py-4">
          <div className="grid grid-cols-1 lg:grid-cols-3 xl:grid-cols-4 md:grid-cols-2 justify-center text-center gap-4">
          {sectionData.map((section, index) => (
              <div
                key={index}
                style={{
                  background:
                    pricingId === section.id
                      ? section.activecolor
                      : "transparent",
                }}
                className={`p-[20px] rounded-[15px] border-2 border-[#ede574] shadow-lg shadow-[#ede57456] transition-shadow duration-300 flex flex-col justify-between hover:shadow-[0_0_20px_10px_#ede57456] cursor-pointer ${
                  pricingId === section.id ? "text-white" : "text-black"
                }`}
                onMouseEnter={(e) =>
                  (e.currentTarget.style.background = section.activecolor)
                }
                onMouseLeave={(e) =>
                  pricingId !== section.id &&
                  (e.currentTarget.style.background = "transparent")
                }
                onClick={() => PricetoggleMenu(section.id)}
              >
                <h3 className="text-[#EDE574] xl:text-xl m-auto">
                  {section.title}
                </h3>
                <p>{section.description}</p>
                <div className="w-[50%] m-auto"> 
                <button className="btn capitalize" onClick={() => PricetoggleMenu(section.id)}>
                  {section.button}
                </button>
                </div>
              </div>
            ))}
          </div>
        </div>
        {priceCat !== 0 && (
          <>
            {(priceCat === 2 || pricingId === 2) && (
              <section className="datarecovery">
                <div className="KeyFeaturesDataRecovery">
                  <div>
                    <MainHeading Heading="Key Features" />
                  </div>
                 

                  <div className="grid lg:grid-cols-3 grid-cols-1 py-5">
                    <div className="flex flex-col justify-center items-center">
                      <Image
                        src={recoverfirsr}
                        alt="Repairs for cracked"
                        className="w-[44px] h-[50px]"
                      />
                      <p className="lg:w-[70%] m-auto text-center">
                        Recover photos, videos, contacts, and more.
                      </p>
                    </div>
                    <div className="flex flex-col justify-center items-center">
                    <Image
                      className="w-[44px] h-[50px]"
                      src={Competitiveandupfrontpricing}
                      alt="Repairs for cracked"
                        
                    />
                      <p className="lg:w-[70%] m-auto text-center">
                        Specialized recovery for water-damaged, dead, or
                        physically damaged devices.
                      </p>
                    </div>
                    <div className="flex flex-col justify-center items-center">
                      <Image
                        className="w-[44px] h-[50px]"
                        src={Transparentpricing}
                        alt="Repairs for cracked"
                      />
                      <p className="lg:w-[70%] m-auto text-center">
                        Transparent pricing with no hidden fees.
                      </p>{" "}
                    </div>
                  </div>
                </div>
                <div className="px-[20px] py-[6px] border-[2px] rounded-[8px] bg-[rgba(157,156,152,0.83)] shadow-[5px_4px_28px_1px_#9d9c98] animate-pulse transition-all duration-300 hover:shadow-[0_0_25px_10px_rgba(255,223,101,0.8)] text-[18px] tracking-[1.5px] text-center">
                  <strong className="text-tertiary"> Note: </strong> Data
                  recovery services are subject to device condition. Please
                  refer to our terms for full details. If you choose LabX to fix
                  your dead device, it will be treated as a data recovery case.
                  Our sole responsibility will be to temporarily power on the
                  device to facilitate data retrieval. No guarantees or
                  warranties are provided for the functionality of any other
                  features of the device.
                </div>
              </section>
            )}
            {(priceCat === 3 || pricingId === 3) && (
              <div className="KeyFeatures GeneralRepair">
                <MainHeading Heading="   Key Features" />
                <div className="grid lg:grid-cols-3 grid-cols-1 py-5">
                  <div className="flex flex-col justify-center items-center">
                  <Image
                        src={Recoverphotos}
                        alt="Repairs for cracked"
                        className="w-[44px] h-[50px]"
                      />
                    <p className="lg:w-[70%] m-auto text-center">
                      {" "}
                      Repairs for cracked screens, battery replacements, and
                      more.
                    </p>
                  </div>
                  <div className="flex flex-col justify-center items-center">
                  <Image
                        className="w-[44px] h-[50px]"
                        src={Specializedrecovery}
                        alt="Repairs for cracked"
                      />
                    <p className="lg:w-[70%] m-auto text-center">
                      {" "}
                      Fast turnaround time for common repairs
                    </p>
                  </div>
                  <div className="flex flex-col justify-center items-center">
                    <Image
                      className="w-[44px] h-[50px]"
                      src={Competitiveandupfrontpricing}
                      alt="Repairs for cracked"
                        
                    />
                    <p className="lg:w-[70%] m-auto text-center">
                      Competitive and upfront pricing.
                    </p>{" "}
                  </div>
                </div>
              </div>
            )}
            {(priceCat === 4 || pricingId === 4) && (
              <section className="DIY/Technician Damage Pricing">
                <div>
                <MainHeading Heading="   Key Features" />
                  <MainTitle Title="This service is specifically for devices damaged during DIY or technician attempts." />
                </div>
                <div className="grid lg:grid-cols-2 grid-cols-1 py-5">
                  <div className="flex flex-col justify-center items-center">
                    <Image   className="w-[44px] h-[50px]" src={repairforconnectdamage} alt="Repairs for cracked" />
                    <p className="lg:w-[70%] m-auto text-center">
                      Repairs for connector damage, bent connectors, fitting
                      issues, installation problems, torn flex cables, ripped
                      pads, and more.
                    </p>
                  </div>
                  <div className="flex flex-col justify-center items-center">
                    <Image
                      className="w-[44px] h-[75px]"
                      src={completetherepair}
                      alt="Repairs for cracked"
                    />
                    <p className="lg:w-[70%] m-auto text-center">
                      Please note that the pricing provided is a minimum
                      estimate. The final price will be determined after we
                      diagnose the device or complete the repair.
                    </p>
                  </div>
                </div>


                <p className="text-center">
                  We ensure transparency and accuracy in pricing based on the
                  specific condition and requirements of your device.
                </p>
              </section>
            )}
          </>
        )}
      </div>
    </div>
  );
};

export default DataBox;
