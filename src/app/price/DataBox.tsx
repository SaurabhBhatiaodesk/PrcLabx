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
import MainButton from "@/components/MainButton/MainButton";

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

      button: "See price",
    },
    {
      id: 2,

      title: "Data Recovery Pricing",
      description: `We offer professional data recovery services to retrieve essential information from non-functional devices. Any devices that are dead or have no power will be classified as data recovery cases.`,

      button: "See price",
    },
    {
      id: 3,

      title: "General Repair Pricing",
      description: `Our general repair pricing includes common services such as screen replacements, charging port repairs, and other standard issues typically offered by most repair shops. `,

      button: "See price",

    },
    {
      id: 4,

      title: "DIY/Techcnian Damage Pricing",
      description: `We repair devices damaged during DIY or technician attempts, addressing connector issues, fitting errors, and torn flex cables. Trust us for reliable service to restore your device.`,

      button: "See price",
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


                className={`p-[20px] rounded-[15px] border-2 border-[var(--prc)] shadow-lg shadow-[#ede57456] transition-shadow duration-300 flex flex-col justify-between hover:shadow-[0_0_20px_10px_#ede57456] cursor-pointer group "
                  }`}


                onClick={() => PricetoggleMenu(section.id)}
              >
                <h3 className="text-prc  xl:text-xl m-auto">
                  {section.title}
                </h3>
                <p className={` text-[17px]  leading-6`}>{section.description}</p>
                <div className="w-[50%] m-auto">
                  {/* <button className="btn capitalize text-secondary" onClick={() => PricetoggleMenu(section.id)}>
                    {section.button}
                  </button> */}
                  <MainButton MainButton={section.button} onClick={() => PricetoggleMenu(section.id)} color="bg-prc" />
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
                    <MainHeading Heading="Key Features" />Key Features
                  </div>


                  <div className="grid lg:grid-cols-3 grid-cols-1 py-5">
                    <div className="flex flex-col justify-center items-center bg-prc rounded-xl lg:mx-3 py-3 lg:my-0 my-3 ">
                      <Image
                        src={recoverfirsr}
                        alt="Repairs for cracked"
                        className="w-[44px] h-[50px]"
                      />
                      <p className="lg:w-[70%] m-auto text-center text-primary">
                        Recover photos, videos, contacts, and more.
                      </p>
                    </div>
                    <div className="flex flex-col justify-center items-center bg-prc rounded-xl lg:mx-3 py-3 lg:my-0 my-3 ">
                      <Image
                        className="w-[44px] h-[50px]"
                        src={Competitiveandupfrontpricing}
                        alt="Repairs for cracked"

                      />
                      <p className="lg:w-[70%] m-auto text-center text-primary">
                        Specialized recovery for water-damaged, dead, or
                        physically damaged devices.
                      </p>
                    </div>
                    <div className="flex flex-col justify-center items-center bg-prc rounded-xl lg:mx-3 py-3 lg:my-0 my-3 ">
                      <Image
                        className="w-[44px] h-[50px]"
                        src={Transparentpricing}
                        alt="Repairs for cracked"
                      />
                      <p className="lg:w-[70%] m-auto text-center text-primary">
                        Transparent pricing with no hidden fees.
                      </p>{" "}
                    </div>
                  </div>
                </div>
                <div className="my-4 px-[20px] py-[6px] border-[var(--prc)] border-[2px] rounded-[15px] bg-[#B2F5EA] shadow-[5px_4px_28px_1px_#B2F5EA] animate-pulse transition-all duration-300 text-[18px] tracking-[1.5px]">
                  <strong className="text-prc font-bold"> Note: </strong> Data
                  recovery services are subject to device condition. Please
                  refer to our terms for full details. If you choose PRC to fix
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
                  <div className="flex flex-col justify-center items-center bg-prc rounded-xl lg:mx-3 py-3 lg:my-0 my-3 ">
                    <Image
                      src={Recoverphotos}
                      alt="Repairs for cracked"
                      className="w-[44px] h-[50px]"
                    />
                    <p className="lg:w-[70%] m-auto text-center text-primary">
                      {" "}
                      Repairs for cracked screens, battery replacements, and
                      more.
                    </p>
                  </div>
                  <div className="flex flex-col justify-center items-center bg-prc rounded-xl lg:mx-3 py-3 lg:my-0 my-3 ">
                    <Image
                      className="w-[44px] h-[50px]"
                      src={Specializedrecovery}
                      alt="Repairs for cracked"
                    />
                    <p className="lg:w-[70%] m-auto text-center text-primary">
                      {" "}
                      Fast turnaround time for common repairs
                    </p>
                  </div>
                  <div className="flex flex-col justify-center items-center bg-prc rounded-xl lg:mx-3 py-3 lg:my-0 my-3 ">
                    <Image
                      className="w-[44px] h-[50px]"
                      src={Competitiveandupfrontpricing}
                      alt="Repairs for cracked"

                    />
                    <p className="lg:w-[70%] m-auto text-center text-primary">
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
                  <div className="flex flex-col justify-center items-center bg-prc rounded-xl lg:mx-3 py-3 lg:my-0 my-3 ">
                    <Image className="w-[44px] h-[50px]" src={repairforconnectdamage} alt="Repairs for cracked" />
                    <p className="lg:w-[70%] m-auto text-center text-primary">
                      Repairs for connector damage, bent connectors, fitting
                      issues, installation problems, torn flex cables, ripped
                      pads, and more.
                    </p>
                  </div>
                  <div className="flex flex-col justify-center items-center bg-prc rounded-xl lg:mx-3 py-3 lg:my-0 my-3 ">
                    <Image
                      className="w-[44px] h-[75px]"
                      src={completetherepair}
                      alt="Repairs for cracked"
                    />
                    <p className="lg:w-[70%] m-auto text-center text-primary">
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
