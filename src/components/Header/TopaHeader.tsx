import React from 'react'

const TopaHeader = () => {
  return (
    <div className="bg-prc p-2 text-center hidden lg:flex justify-center">
        <a href="https://www.prcrepair.com.au/" className="bg-[#FFCC00] text-black font-bold py-1 px-4 mx-2 rounded-xl uppercase hover:bg-[#e6b800]">
          PHONE REPAIR
        </a>
        <a href="https://www.prcrepair.com.au/training" className="bg-[#FFCC00] text-black font-bold py-1 px-4 mx-2 rounded-xl uppercase hover:bg-[#e6b800]">
          Repair TRAINING
        </a>
        <a href="https://wholesale.prcrepair.com.au/" className="bg-[#FFCC00] text-black font-bold py-1 px-4 mx-2 rounded-xl uppercase hover:bg-[#e6b800]">
          Parts Store
        </a>
        <a href="https://warehouse.prcrepair.com.au/" className="bg-[#FFCC00] text-black font-bold py-1 px-4 mx-2 rounded-xl uppercase hover:bg-[#e6b800]">
          China Warehouse
        </a>
    </div>
  )
}

export default TopaHeader
