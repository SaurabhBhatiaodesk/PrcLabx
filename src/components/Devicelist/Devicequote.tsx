
import React from 'react';
import quote1 from "../../../public/Images/quoteimg1.png";
import quote2 from "../../../public/Images/quoteimg2.png";
import quote3 from "../../../public/Images/quoteimg3.png";
import quote4 from "../../../public/Images/quoteimg4.png";
import Image from 'next/image';
import apple from "../../../public/Images/apple.png";
import Link from 'next/link';
const imagedata = [
    { image: apple },
    { image: apple },
    { image: apple },
    { image: apple },
    { image: apple },
    { image: apple },
    { image: apple },
    { image: apple },
    { image: apple },
    { image: apple },
    { image: apple },
    { image: apple },
    { image: apple },
    { image: apple },
]
export default function Devicequote() {
    return (
        <div className='py-10 bg-white'>
            <div className="container">
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 mx-[4%]'>
                    <div className='flex items-center lg:justify-center py-3 lg:py-0'>
                        <Image
                            src={quote1}
                            alt=''
                            width={1000}
                            height={300}
                            className='w-[70px] mx-3'
                        />
                        <p className='text-black text-[18px] font-semibold leading-normal m-0'>
                            30 Minute <br />
                            Express Repair
                        </p>
                    </div>
                    <div className='flex items-center lg:justify-center py-3 lg:py-0'>
                        <Image
                            src={quote2}
                            alt=''
                            width={1000}
                            height={300}
                            className='w-[70px] mx-3'
                        />
                        <p className='text-black text-[18px] font-semibold leading-normal m-0'>
                            On-Site<br />
                            (No Outsourcing)
                        </p>
                    </div>
                    <div className='flex items-center lg:justify-center py-3 lg:py-0'>
                        <Image
                            src={quote3}
                            alt=''
                            width={1000}
                            height={300}
                            className='w-[70px] mx-3'
                        />
                        <p className='text-black text-[18px] font-semibold leading-normal m-0'>
                            After Pay / Zip Pay <br />
                            Available
                        </p>
                    </div>
                    <div className='flex items-center lg:justify-center py-3 lg:py-0'>
                        <Image
                            src={quote4}
                            alt=''
                            width={1000}
                            height={300}
                            className='w-[70px] mx-3 rounded-[10px]'
                        />
                        <p className='text-black text-[18px] font-semibold leading-normal m-0'>
                            Lowest Price <br />
                            Guaranteed
                        </p>
                    </div>
                </div>
            </div>
            <div className='container pt-12'>
                <h2 className='text-start w-fit text-[#00303E]'>Click to Get an Instant Quote Now!</h2>
                <div className='pt-5 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 2xl:grid-cols-7 gap-3 '>
                    {
                        imagedata.map((data, index) => (
                            <Link href="">
                                <div className='border-[2px] group border-[#16161680] cursor-pointer rounded-2xl flex items-center justify-center' key={index}>
                                    <Image
                                        src={data.image}
                                        alt='device_image'
                                        width={1000}
                                        height={300}
                                        className='rounded-2xl w-[80%] mix-blend-darken group-hover:rotate-[20deg] transition-all duration-700'
                                    />
                                </div>
                            </Link>
                        ))
                    }
                </div>
            </div>
        </div>
    )
}
