import Link from "next/link"

import React from "react";
import MainHeading from "../../components/ManinHeading/MainHeading";
import BiginnerReviews from "../../components/GoogleReviews/BiginnerReviews";
import Breadcrumb from '../../components/Breadcrumb/Breadcrumb';
import AskusQuestion from './../../components/AskusQuestion/AskusQuestion';

// Images
import rname from "../../../public/Images/icons/rname.png";
import jname from "../../../public/Images/icons/E.png";
import Nname from "../../../public/Images/icons/N.png";
import Sname from "../../../public/Images/icons/S.png";
import Aname from "../../../public/Images/icons/A.png";
import hname from "../../../public/Images/icons/h.png";
import Googletest from "../../../public/Images/icons/Googletest.svg";
import repairProcess from "../../../public/Images/iphone-battery-replacement-2.jpg";
import iphoneModels from "../../../public/Images/iphone-battery-replacement-1.jpg";
import Image from "next/image";

const Page = () => {
  const accordionData = [
    {
      title: "How does PRC Repair's mail-in service work?",
      content: `Simply book online, ship your phone to us, and we'll refurbish or repair it before sending it safely back to you.`
    },
    {
      title: "What devices does Phone Repair Centre support?",
      content: `We currently specialize in refurbishing and repairing iPhones, including various models with OLED screens that require high-precision tools and expert handling.`
    },
    {
      title: "How long does the repair process take?",
      content:  `Once we receive your device, most refurbishments are completed within 48 hours and shipped back to you with tracking details provided.`
    },
    {
      title: "Is screen refurbishment better than full replacement?",
      content: `Yes, refurbishment retains your original screen, costs less, and avoids quality issues often seen with third-party replacement displays or cheaper alternatives.`
    },
    {
      title: "Will I be notified during the repair process?",
      content: `Absolutely! We provide updates at each stage, including diagnosis, repair status, and dispatch, so you're always informed about your device's condition.`
    },
    {
      title: "What happens if my screen cannot be refurbished?",
      content: `If refurbishment isn't possible, we'll contact you with photos and offer options, including replacement or return, based on your preference—no hidden decisions.`
    },
    {
      title: "Is my phone safe during mail-in repair?",
      content: `Yes, all phones are handled with care, insured, and tracked throughout the entire process to ensure your device remains protected and secure.`
    }
  ];

  const reviewsData = [
    {
      name: "Noah R. - Perth",
      date: "September 12, 2023",
      profileImage: hname,
      logoImage: Googletest,
      rating: 5,
      param: "Excellent service! PRC Repair refurbished my iPhone screen and returned it quickly. The phone looks brand new. I'm thrilled with the result and will definitely recommend them to friends."
    },
    {
      name: "Lily M. - Melbourne",
      date: "September 12, 2023",
      profileImage: rname,
      logoImage: Googletest,
      rating: 5,
      param: "I was unsure about mailing in my phone, but PRC Repair made it simple. Great communication, fast repair, and the screen quality is amazing. My iPhone looks flawless now!"
    },
    {
      name: "Aarav S. - Hobart",
      date: "September 12, 2023",
      profileImage: Sname,
      logoImage: Googletest,
      rating: 5,
      param: "My screen had dead pixels, and I didn't want a full replacement. PRC Repair fixed it perfectly. Their mail-in system is smooth and professional. Trustworthy and affordable service!"
    },
    {
      name: "Charlotte B. - Canberra",
      date: "October 5, 2023",
      profileImage: jname,
      logoImage: Googletest,
      rating: 5,
      param: "PRC Repair exceeded my expectations. I mailed in my phone and received it back in perfect condition. They even sent photo updates. Honest, fast, and extremely reliable repair service."
    },
    {
      name: "Isaac W. - Gold Coast",
      date: "November 1, 2023",
      profileImage: Aname,
      logoImage: Googletest,
      rating: 5,
      param: "I mailed in two iPhones for refurbishing. Both came back looking brand new. Impressed with their efficiency and transparency. PRC Repair is my go-to now for iPhone screen fixes!"
    }
  ];

  const repairSteps = [
    {
      title: "Book Your Repair Online",
      description: "Visit our website and select the iPhone model and repair service you need."
    },
    {
      title: "Send Us Your Device",
      description: "Package your iPhone securely and ship it using your preferred postal or courier service. We provide guidance for safe packaging."
    },
    {
      title: "We Repair and Return It Fast",
      description: "Once received, we will fix your iPhone screen within 1-2 weeks, with expedited service available in 1-9 days and send it back with tracking. It's that easy."
    }
  ];

  const benefits = [
    {
      title: "Mail-In Service Across Australia",
      description: "Forget about booking appointments or waiting in line. Simply mail your damaged iPhone to us, and we'll take care of the rest. We provide step-by-step instructions for secure packaging and dispatch, ensuring your device is safe from the moment it leaves your hands until it's returned like new."
    },
    {
      title: "Expert iPhone Screen Repair",
      description: "We don't just replace screens – we refurbish them. Our glass-only repair technique helps retain your original iPhone display, saving you money and preserving screen clarity. Our display refurbishment ensures that the original brightness, touch sensitivity, and resolution remain intact."
    },
    {
      title: "Fast Turnaround Time",
      description: "We value your time. Most repairs are completed within 1-2 weeks, with expedited service available in 1-9 days of receiving your device. We work efficiently so that you're not without your phone for long."
    },
    {
      title: "Quality Assured Repairs",
      description: "All screen repairs go through a thorough inspection process to ensure functionality, clarity, and durability. When we fix iPhone screen issues, we use only premium parts and trusted repair methods."
    },
    {
      title: "Refurbishment Over Replacement = A Greener Choice",
      description: "Choosing to refurbish your iPhone screen is better for the environment. Instead of contributing to e-waste, Phone Repair Centre helps fix iPhone screen damage by restoring the existing components. This sustainable choice reduces your carbon footprint while still delivering like-new results."
    }
  ];

  const processSteps = [
    "Inspection of screen condition",
    "Cleaning and prep for repair",
    "Removal of cracked glass layer",
    "Precise alignment and lamination of new glass",
    "Display polishing and protection coating",
    "Final testing for clarity, touch sensitivity, and brightness"
  ];

  return (
    <div className="bg-gray-50">
      <Breadcrumb
        pageName="Fix iPhone Screen the Smart Way – Trusted Mail-in Repair by PRC Repair"
        pageDescription="<strong class='text-xl'> Cracked Screen? No Worries, Our Phone Repair Centre Has You Covered – Wherever You Are in Australia! </strong>"
        backgroundImage="/Images/iphone-battery-replacement.webp"
      />

      <section className="container mx-auto px-4 py-12">
        <MainHeading
          Heading="Australia's Expert in Mail-In iPhone Screen Repairs"
          color="var(--prc)"
          svg_stroke="var(--alpha)"
        />
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <p className="text-lg leading-relaxed text-gray-700">
             {` Phone Repair Centre understands that life gets busy, and finding time to visit a repair shop can be inconvenient. Whether you're in Sydney, Melbourne, Perth, or a remote area, our team is ready to serve you with precision and care.`}
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <p className="text-lg leading-relaxed text-gray-700">
              We specialize in display refurbishment, glass-only repair, and full-screen replacement – all done using top-tier equipment and by trained technicians who know how to fix iPhone screen damage without compromising on quality.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-white py-12">
        <div className="container mx-auto px-4">
          <MainHeading
            Heading="Why Choose Phone Repair Centre to Fix iPhone Screen Problems?"
            color="var(--prc)"
            svg_stroke="var(--alpha)"
          />
          
          <div className="mt-8 space-y-6">
            {benefits.map((benefit, index) => (
              <div key={index} className="flex items-start space-x-4 p-4 bg-gray-50 rounded-lg">
                <div className="w-8 h-8 bg-prc rounded-full flex-shrink-0 mt-1"></div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-800">{benefit.title}</h3>
                  <p className="text-gray-600 mt-2">{benefit.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-gray-50 py-12">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">
            Committed to Quality Over Quantity
          </h2>
          <p className="text-lg text-center text-gray-600 max-w-3xl mx-auto">
          {`At Phone Repair Centre, we don't just refurbish screens—we restore performance. Every iPhone screen we handle goes through meticulous testing to ensure it meets our high standards. We focus on delivering consistent quality in every repair, not rushing through bulk jobs. It's not about doing more; it's about doing it right the first time.`}
          </p>
        </div>
      </section>

      <section className="bg-white py-12">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">
         {`   Our Refurbishment Process – Precision Meets Perfection`}
          </h2>
          <h3 className="text-xl font-semibold text-center text-gray-700 mb-8">
          {`  We Don't Just Repair, We Restore`}
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div>
              <Image src={repairProcess.src} alt="iPhone repair process" className="rounded-lg shadow-md" />
            </div>
            <div>
              <ul className="space-y-4">
                {processSteps.map((step, index) => (
                  <li key={index} className="flex items-start">
                    <span className="bg-prc text-white rounded-full w-6 h-6 flex items-center justify-center mr-3 flex-shrink-0">{index + 1}</span>
                    <span className="text-gray-700">{step}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-prc bg-opacity-10 py-12">
        <div className="container mx-auto px-4">
         
          {/*  */}


            <MainHeading
            Heading="3 Easy Steps to Fix iPhone Screen Damage from Anywhere"
            color="white"
            svg_stroke="var(--alpha)"
          />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-8">
            {repairSteps.map((step, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-md text-center">
                <div className="bg-prc text-white rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                  {index + 1}
                </div>
                <h3 className="text-xl font-semibold text-gray-800 mb-3">{step.title}</h3>
                <p className="text-gray-600">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-12 bg-white">
        <div className="container mx-auto px-4">
          <BiginnerReviews reviews={reviewsData} googletitle="Customer Reviews – Trusted Nationwide" />
        </div>
      </section>

      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-4">
            <MainHeading
            Heading="From iPhone 8 to iPhone 17 Pro Max – We've Got You Covered"
            color="var(--prc)"
            svg_stroke="var(--alpha)"
          />
          <p className="text-lg text-center text-gray-600 max-w-3xl mx-auto mb-8">
            Whether you have a minor crack on your iPhone 11 or a scratched screen on your iPhone 13 Pro, Phone Repair Centre has the expertise to fix iPhone screen issues on almost every model. We constantly upgrade our tools and training to stay compatible with the latest models and technologies.
          </p>
          
          <div className="flex justify-center">
            <Image src={iphoneModels.src} alt="iPhone models we repair" className="rounded-lg shadow-md max-w-full" />
          </div>
        </div>
      </section>

      <section className="py-12 bg-prc text-white">
        <div className="container mx-auto px-4 text-center">
            <MainHeading
            Heading="Fix iPhone Screen with Confidence – Choose Phone Repair Centre Today"
            color="white"
            svg_stroke="var(--alpha)"
          />
          <Link href="/mail-in-repair" className="bg-white text-prc px-8 py-3 rounded-lg font-semibold text-lg hover:bg-gray-100 transition duration-300">
            Book Your Repair Now
          </Link>
        </div>
      </section>

      <section className="py-12 bg-white">
        <div className="container mx-auto px-4">
          <AskusQuestion
            accordionData={accordionData}
            faq_subheading="FAQs on iPhone Screen Repair"
            faqbg_color="bg-[#FEF6FF]"
            faq="FAQs"
          />
        </div>
      </section>
    </div>
  );
};

export default Page;