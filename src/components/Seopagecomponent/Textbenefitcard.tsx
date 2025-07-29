"use client";
import React from "react";

type benefitcard = {
  benefits: any;
};
const Textbenefitcard = ({ benefits }: benefitcard) => {
  return (
    <div>
      <div className="mt-8 space-y-6 grid grid-cols-1 lg:grid-cols-2">
        {benefits.map((benefit: any, index: number) =>
          <div
            key={index}
            className={`group hover:scale-105 flex items-start space-x-4 p-4 bg-gray-100 rounded-lg !m-4 transition-all duration-700 cursor-pointer`}
            onMouseEnter={e => {
              e.currentTarget.style.backgroundImage = benefit.hoverBackground;
            }}
            onMouseLeave={e => {
              e.currentTarget.style.backgroundImage = "";
            }}
          >
            <div className="w-8 h-8 bg-prc rounded-full flex-shrink-0 mt-1" />
            <div>
              <h3 className="text-xl font-semibold text-gray-800 group-hover:text-white">
                {benefit.title}
              </h3>
              <p className="text-gray-600 mt-2 group-hover:text-white">
                {benefit.description}
              </p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Textbenefitcard;
