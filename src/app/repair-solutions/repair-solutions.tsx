"use client";
import React from 'react';
import Breadcrumb from '@/components/Breadcrumb/Breadcrumb'
import Image from 'next/image';
import Phone from '../../../public/Images/our-phone.png'
import Offer from '../../../public/Images/offer.png'
import Offers from '../../../public/Images/offers.png'
import YouTubeHome from '@/components/HomeCpmponents/YouTubeHome/YouTubeHome';
import GoogleReview from '@/components/GoogleReviews/GoogleReviews';
import FixLabx from '@/components/HomeCpmponents/FixLabx/FixLabx';
import Line from "../../../public/Images/about/leap.svg"
import MainButton from '@/components/MainButton/MainButton';

const page = () => {
  return (
  <>
    <Breadcrumb
            pageName="Repair Solutions"
            pageDescription="This course is designed and based on the highest industry standards and over 14 years of industry experience. It includes everything that anyone needs to be one of the best technicians or a successful business owner."
            backgroundImage="/Images/BannerImages/repair.png"
            AdminImage="/Images/repair-ph.png"
             link="/contact-us"
                buttonname="Request a Quote"
          />
  <div>

  <div className="about__bg__gradiant">
          <div className="container text-white rounded-md">
          <div className="grid xl:grid-cols-2 lg:grid-cols-3 grid-cols-1 gap-8 lg:py-5 py-3 items-center">
          <div>
            <h2>Our Phone Repair Solutions</h2>
            <Image  height="300" width="600"src={Line.src} alt=" labx repair " className="pb-3" />

            <p>Are you in search of a reliable B2B repair service provider? Look no further than LabX With years of experience and thousands of satisfied clients,  LabX is the go-to destination for all your B2B phone repair needs. </p>
            
             <p>Are you in search of a reliable B2B repair service provider? Look no further than LabX With years of experience and thousands of satisfied clients,  LabX is the go-to destination for all your B2B phone repair needs. </p>

            {/* <button className='btn'><a href='/price'>VIEW PRICE LIST</a></button> */}
            <MainButton MainButton='VIEW PRICE LIST' link='/price'/>

          </div>
             <Image src={Phone} alt='' className='w-full' />
          </div> 
        </div>
      </div>
      <div className="container pt-8">
      <div className="grid xl:grid-cols-3 lg:grid-cols-3 grid-cols-1 gap-8 lg:py-5 py-3 items-center">
            <div>
              <Image src={Offer} alt=''  className='w-full'  />
            </div>

            <div> 
              <h2>We Offer Appointments</h2>
              <Image  height="300" width="400"src={Line.src} alt=" labx repair " className="pb-3" />

              <p>We are local and offer appointment scheduling, but due to limited hours, please contact us at 585.397.4174 via phone or text to schedule a time with us!</p>
              <p>We are local and offer appointment scheduling, but due to limited hours, please contact us at 585.397.4174 via phone or text to schedule a time with us!</p>
              {/* <button className='btn'>GET STARTED</button> */}
              <MainButton MainButton='GET STARTED' link='/contact-us'/>
            </div>
            <div>
              <Image src={Offers} alt=''  className='w-full'  />
            </div>
          </div>
      </div>

      <div className="about__bg__gradiant pt-8 pb-8">
          <div className="max-container text-white rounded-md ">
          <div className="grid xl:grid-cols-1 lg:grid-cols-1 grid-cols-1 gap-8 lg:py-5 py-3 items-center">
          <div>
            <p className='text-center'>We have the following levels of repair – L0, L1, L2, L3 and L4 repair levels, where the following is the definition of repair</p>
            <div className='responsive'>
            <div className="overflow-x-auto">
  <table className="table-auto border-collapse border border-gray-300 w-full text-left">
    <thead className="">
      <tr>
        <th className="border border-gray-300 px-4 py-4 text-sm font-medium">Level of Repair</th>
        <th className="border border-gray-300 px-4 py-4 text-sm font-medium">Definition</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td className="border border-gray-300 px-4 py-4  text-sm">Level 0</td>
        <td className="border border-gray-300 px-4 py-4  text-sm">Issuing DOA Certificate, Accessories Replacement</td>
      </tr>
      <tr>
        <td className="border border-gray-300 px-4 py-4 text-sm">Level 1</td>
        <td className="border border-gray-300 px-4 py-4  text-sm">Software upgrading, Escalation to Higher level, Parts cleaning</td>
      </tr>
      <tr>
        <td className="border border-gray-300 px-4 py-4  text-sm">Level 2</td>
        <td className="border border-gray-300 px-4 py-4  text-sm">Replacement of LCD, Camera, Lens, and Key pad Dome, Mic., Ringer, Speaker, Flash LED, and Antenna (Mechanical).</td>
      </tr>
      <tr>
        <td className="border border-gray-300 px-4 py-4 text-sm">Level 3</td>
        <td className="border border-gray-300 px-4 py-4  text-sm">Replacement of LCD (multi point solder type), Charging Connector multi point solder type</td>
      </tr>
      <tr>
        <td className="border border-gray-300 px-4 py-4  text-sm">Level 4</td>
        <td className="border border-gray-300 px-4 py-4  text-sm">Main board Replacement, Oscillators, Tunner, FM IC, Charging IC, FM IC., I/O IC.</td>
      </tr>
    </tbody>
  </table>
</div>

            </div>
          </div> 
          </div> 
        </div>
      </div>

  </div>
  <FixLabx />
  <YouTubeHome />
  <GoogleReview />
  </>
  )
}

export default page