import React from "react";
import { LuDot } from "react-icons/lu";
import Image from "next/image";
import pointer from "../../../public/Images/icons/pointing-right.svg";
import Link from "next/link";

const DataImportantNote = () => {
  return (
    <div className="p-3 lg:py-8 bg-yellow-50">
      <div className="container">
        {/* Grid Container */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Limitations of Data Recovery */}
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h2 className="text-2xl font-bold mb-4 text-secondary">
              Limitations of Data Recovery
            </h2>
            <p className="text-secondary">
              While we strive to recover all possible data, some situations may
              prevent successful recovery:
            </p>
            <div className="  ">
            <div className="flex gap-[5px] text-secondary items-center">
              <span><LuDot  /></span>
              <p className="text-secondary m-0">Completely destroyed or corrupted storage chips (eMMC/UFS).</p>
            </div>
            <div className="flex gap-[5px] text-secondary items-center">
              <span><LuDot  /></span>
              <p className="text-secondary m-0">Data that has already been permanently deleted and overwritten.</p>
            </div>
            <div className="flex gap-[5px] text-secondary items-center">
              <span><LuDot  /></span>
              <p className="text-secondary m-0">Devices that are physically beyond repair to enable temporary access.</p>
            </div>
            </div>
          </div>

          {/* Important Notes */}
          <div className="bg-prc text-tertiary p-6 rounded-lg shadow-lg">
            <h2 className="text-2xl font-bold mb-4 text-tertiary">
              Important Notes
            </h2>
            <div className="flex gap-[5px] text-primary items-start">
              <span><LuDot  color="white" /></span>
              <p className="text-primary m-0">Customers must provide the correct device password to access recovered data. If the password is incorrect or unavailable, PRC will not be able to verify the recovered files.</p>
            </div>
            <div className="flex gap-[5px] text-primary items-start">
              <span><LuDot  color="white" /></span>
              <p className="text-primary m-0">In cases where the device cannot be repaired for long-term functionality, we may power it temporarily to retrieve data, but no further repairs will be performed.</p>
            </div>
          </div>

          {/* Common Scenarios We Handle */}
          <div className="bg-prc text-tertiary p-6 rounded-lg shadow-lg">
            <h2 className="text-2xl font-bold mb-4 text-tertiary">
              Common Scenarios We Handle
            </h2>
            <div className="flex items-start gap-3">
            <Image src={pointer} alt="pointer" width={30} />

                <div className="">
                  <span className="text-lg pb-[2px] text-tertiary font-semibold">
                  Water Damage:
                  </span>
                  <p className="text-primary">
                  Quick recovery from devices exposed to liquid spills or submersion.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Image src={pointer} alt="pointer" width={30} />

                <div className="">
                  <span className="text-lg pb-[2px] text-tertiary font-semibold">
                  Impact Damage: 
                  </span>
                  <p className="text-primary">
                  Devices dropped or damaged due to external force.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3">
              <Image src={pointer} alt="pointer" width={30} />

                <div className="">
                  <span className="text-lg pb-[2px] text-tertiary  font-semibold">
                  Failed Software Updates:
                  </span>
                  <p className="text-primary">
                  Data recovery from bricked devices after failed updates.
                  </p>
                </div>
              </div>
          </div>

          {/* Pricing and Terms */}
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h2 className="text-2xl font-bold mb-4 text-secondary">
              Pricing and Terms
            </h2>
            <div className="flex gap-[5px] text-secondary items-start">
              <span><LuDot  color="black" /></span>
              <p className="text-secondary m-0">In cases where the device cannot be repaired for long-term functionality, we may power it temporarily to retrieve data, but no further repairs will be performed.</p>
            </div>
            <div className="flex gap-[5px] text-secondary items-start">
              <span><LuDot  color="black" /></span>
              <p className="text-secondary m-0">If the data recovery is successful, the remaining balance for the service must be cleared before delivery.</p>
            </div>
            <div className="flex gap-[5px] text-secondary items-start">
              <span><LuDot  color="black" /></span>
              <p className="text-secondary m-0">Customers are encouraged to review our <Link className="font-semibold" href="/faq"> FAQ, </Link><Link className="font-semibold" href="/Terms-and-conditions">Terms and Conditions, </Link> and  <Link className="font-semibold" href="/Shipping-Policy">Shipping Policy for more details. </Link> </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DataImportantNote;
