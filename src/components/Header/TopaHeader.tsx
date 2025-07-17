import React from "react";

const TopaHeader = () => {
  return (
    <div className="bg-prc p-2">
      <div className="text-center grid md:grid-cols-4 grid-cols-2 gap-2 md:text-[13px] text-xs lg:w-1/2 w-full m-auto">
        <div className="bg-[#FFCC00] text-black font-bold py-1 px-4 mx-2 rounded-xl uppercase hover:bg-[#e6b800]">
          <a href="https://www.prcrepair.com.au/" className="block w-full h-full">PHONE REPAIR</a>
        </div>
        <div className="bg-[#FFCC00] text-black font-bold py-1 px-4 mx-2 rounded-xl uppercase hover:bg-[#e6b800]">
          <a href="https://www.prcrepair.com.au/training"  className="block w-full h-full">Repair TRAINING</a>
        </div>
        <div className="bg-[#FFCC00] text-black font-bold py-1 px-4 mx-2 rounded-xl uppercase hover:bg-[#e6b800]">
          <a href="/coming-soon" className="block w-full h-full">Parts Store</a>
        </div>
        <div className="bg-[#FFCC00] text-black font-bold py-1 px-4 mx-2 rounded-xl uppercase hover:bg-[#e6b800]">
          <a href="/coming-soon" className="block w-full h-full">China Warehouse</a>
        </div>
      </div>
    </div>
  );
};

export default TopaHeader;
