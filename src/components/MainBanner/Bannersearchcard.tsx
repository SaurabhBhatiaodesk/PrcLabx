import React from 'react'
import MainHeading from '../ManinHeading/MainHeading';

export default function Bannersearchcard() {
  return (
    <div className='w-[100%] lg:w-[80%] m-auto'>
      <div className='bg-white rounded-2xl p-[5%]'>
        <div className='mb-3'>
          {/* <h2 className="text-[34px] text-center text-black">Select Your Device</h2>
          <svg className='m-auto' width="150" height="20" viewBox="0 0 150 20" xmlns="http://www.w3.org/2000/svg">
            <path d="M0 10 Q75 25 150 10" stroke="#34534d" stroke-width="5" fill="none" />
          </svg> */}
         <MainHeading Heading='Select Your Device' color='var(--secondary)' svg_stroke='var(--prc)' />
        </div>
        <div className='py-3'>
          <div className='flex py-4 border-[1px] border-[#00303E] rounded-full'>
            <select name="" id="" className='text-black outline-none w-[90%] m-auto bg-transparent'>
              <option>Select Your Brand</option>
              {["Apple", "Samsung Tablets", "Oppo", "Google", "Game Console", "Laptop"].map((data, index) => {
                return (
                  <div key={index}>
                    <option value={data} className='text-black'>{data}</option>
                  </div>
                );
              })}
            </select>
          </div>
          <div className='flex py-4 border-[1px] border-[#00303E] rounded-full mt-6'>
            <select name="" id="" className='text-black outline-none w-[90%] m-auto bg-transparent'>
              {["Apple", "Samsung Tablets", "Oppo", "Google", "Game Console", "Laptop"].map((data, index) => {
                return (
                  <div key={index}>
                    <option value={data} className='text-black'>{data}</option>
                  </div>
                );
              })}
            </select>
          </div>
        </div>
        <div className='mt-4'>
          <button className='text-white uppercase font-bold bg-[#00303E] text-center py-[10px] rounded-full w-full'>Search services</button>
        </div>
      </div>
    </div>
  )
}
