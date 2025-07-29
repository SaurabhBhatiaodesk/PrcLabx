import React from "react";
type imagetextcard = {
  processSteps: any;
  processimage:any;
};
const Imagetextcard = ({ processSteps,processimage }: imagetextcard) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center pt-4">
      <div>
        <img
          src={processimage.src}
          alt="iPhone battery replacement process"
          className="rounded-lg shadow-md md:w-[80%] m-auto"
        />
      </div>
      <ul className="w-max">
        {processSteps.map((step: any, index: number) =>
          <li key={index} className="flex items-start py-3 px-4 bg-[#e7e7e7] rounded-xl mt-3 ">
            <span className="bg-prc text-white rounded-full w-6 h-6 flex items-center justify-center mr-3 flex-shrink-0">
              {index + 1}
            </span>
            <span className="text-gray-700">
              {step}
            </span>
          </li>
        )}
      </ul>
    </div>
  );
};

export default Imagetextcard;
