import React from 'react';
import Image from 'next/image';
import leftImage from '../../../public/Images/right.webp';
import rightImage from '../../../public/Images/phone repair image sevond.webp';
import MainButton from '../MainButton/MainButton';

const MasterPhone = () => {
  return (
    <div className="w-full px-4 lg:py-12 md:py-6 py-3">
      <div className="container mx-auto grid grid-cols-1 lg:grid-cols-3 gap-6 items-center">
        {/* Left Image */}
        <div className="w-full flex justify-center">
          <Image
            src={rightImage}
            alt="Person repairing phone"
            className="rounded-xl border-2 border-blue-600 object-cover"
          />
        </div>

        {/* Center Content */}
        <div className="text-center px-2">
          <h2 className="text-2xl md:text-3xl font-bold text-prc mb-4 leading-snug">
            Master the Art of Mobile <br className="hidden md:inline" />
            Phone Repair
          </h2>
          <p className="text-gray-600 text-sm md:text-base lg:mb-6 mb-3">
            Master the art of mobile phone repair with hands-on training and expert guidance. 
            Learn to fix screens, batteries, software issues, and more for a rewarding career. 
            Gain in-depth knowledge of tools, diagnostics, motherboard repairs, and industry best practices. 
            Build a high-demand skill that opens doors to jobs or your own business.
          </p>
          <div className="flex justify-center">
            <MainButton MainButton="LEARN MORE" color="bg-prc" />
          </div>
        </div>

        {/* Right Image */}
       <div className="w-full flex justify-center">
          <Image
            src={leftImage}
            alt="Person repairing phone"
            className="rounded-xl border-2 border-blue-600 object-cover"
          />
        </div>
      </div>
    </div>
  );
};

export default MasterPhone;
