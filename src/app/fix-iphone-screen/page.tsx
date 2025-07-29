import React from "react";
import MainHeading from "../../components/ManinHeading/MainHeading";
import BiginnerReviews from "../../components/GoogleReviews/BiginnerReviews";
import Breadcrumb from "../../components/Breadcrumb/Breadcrumb";
import AskusQuestion from "./../../components/AskusQuestion/AskusQuestion";
import Link from "next/link";
// Images
import rname from "../../../public/Images/icons/rname.png";
import jname from "../../../public/Images/icons/E.png";
import Nname from "../../../public/Images/icons/N.png";
import Sname from "../../../public/Images/icons/S.png";
import Aname from "../../../public/Images/icons/A.png";
import hname from "../../../public/Images/icons/h.png";
import Googletest from "../../../public/Images/icons/Googletest.svg";
import batteryProcess from "../../../public/Images/fix-iphone-screen-screenrepair221.jpg";
import iphoneModels from "../../../public/Images/fix-iphone-screen-screenrepair.jpg";
import Image from "next/image";
import Textcard from "@/components/Seopagecomponent/Textcard";
import Textbenefitcard from "@/components/Seopagecomponent/Textbenefitcard";
import Imagetextcard from "@/components/Seopagecomponent/Imagetextcard";
import Stepcard from "@/components/Seopagecomponent/Stepcard";

const Page = () => {
  const accordionData = [
    {
      title: "How do I book an iPhone battery replacement?",
      content:
        "Just visit our website, select your model, and complete the booking. We'll guide you through the secure packaging and mailing process."
    },
    {
      title: "How long does the battery replacement take?",
      content:
        "Once we receive your phone, we complete the iPhone battery replacement within 1-2 weeks, with expedited service available in 1-9 days and ship it back immediately."
    },
    {
      title: "Are the replacement batteries high quality?",
      content:
        "Yes, we only use premium-grade batteries tested for safety, longevity, and performance. Your phone will run efficiently and safely after repair."
    },
    {
      title: "Is mailing my phone safe?",
      content:
        "Absolutely. We recommend secure packaging, and all devices are handled with care and returned with tracking and insurance."
    },
    {
      title: "Will I lose my data during battery replacement?",
      content:
        "No. Our iPhone battery replacement process doesn't affect your data, but we still recommend backing up your device beforehand as a precaution."
    },
    {
      title: "Do you replace batteries for newer iPhone models?",
      content:
        "Yes, we provide iPhone battery replacement services for all major models—from iPhone 6 to the latest iPhone 15 Pro Max."
    },
    {
      title: "Is battery replacement more cost-effective than upgrading?",
      content:
        "Definitely. A fresh iPhone battery replacement can extend your phone's life significantly at a fraction of the cost of a new device."
    }
  ];
  const reviewsData = [
    {
      name: "Harper G. - Adelaide",
      date: "September 12, 2023",
      profileImage: hname,
      logoImage: Googletest,
      rating: 5,
      param:
        "I mailed my iPhone in for a battery replacement, and it came back like new. Holds charge all day now. Super fast and reliable service. I highly recommend it!"
    },
    {
      name: "Lucas M. - Darwin",
      date: "September 12, 2023",
      profileImage: rname,
      logoImage: Googletest,
      rating: 5,
      param:
        "I was tired of my phone dying by noon. PRC Repair did an amazing job with my iPhone battery replacement. Quick turnaround and professional support. Great experience!"
    },
    {
      name: "Ella K. - Sydney",
      date: "September 12, 2023",
      profileImage: Sname,
      logoImage: Googletest,
      rating: 5,
      param:
        "Battery health dropped below 80%, and PRC Repair saved me from upgrading. Mail-in service was simple and fast. Great communication and excellent battery life after replacement."
    },
    {
      name: "James R. - Melbourne",
      date: "October 5, 2023",
      profileImage: jname,
      logoImage: Googletest,
      rating: 5,
      param:
        "Highly professional team. They kept me informed through every step. The iPhone battery replacement was quick, affordable, and my phone runs like new again!"
    },
    {
      name: "Zoe T. - Brisbane",
      date: "November 1, 2023",
      profileImage: Aname,
      logoImage: Googletest,
      rating: 5,
      param:
        "This is my second time using PRC Repair. Their iPhone battery replacement service is top-notch. Quick delivery, excellent battery quality, and trustworthy service. 10/10!"
    }
  ];
  const replacementSteps = [
    {
      title: "Book Your Battery Replacement Online",
      description:
        "Choose your iPhone model on our website, and book your iPhone battery replacement service in minutes."
    },
    {
      title: "Mail Us Your Device",
      description:
        "Follow our secure packing instructions and mail your iPhone via your preferred courier or postal service."
    },
    {
      title: "We Replace and Return Fast",
      description:
        "Once we receive your phone, we perform the iPhone battery replacement within 48 hours and ship it back with tracking details."
    }
  ];
  const benefits = [
    {
      title: "Mail-In Service for Ultimate Convenience",
      description:
        "No appointments. No store visits. Just book your iPhone battery replacement online, send your phone to us, and we'll handle the rest. Our step-by-step guide helps you package and send your device securely from anywhere in Australia.",
      hoverBackground: "linear-gradient(74deg, rgb(86, 193, 193), rgb(0, 0, 0))"
    },
    {
      title: "Trusted iPhone Battery Replacement Experts",
      description:
        "Every technician at Phone Repair Centre is trained to handle delicate components with expertise. We've performed thousands of iPhone battery replacements, ensuring your device gets a high-performance battery installed safely and correctly.",
      hoverBackground: "linear-gradient(74deg,rgba(243,85,32,0.753),rgb(0,0,0))"
    },
    {
      title: "Fast Turnaround, Long-Lasting Results",
      description:
        "We complete most iPhone battery replacement services within 1-2 weeks, with expedited service available in 1-9 days of receiving your device. Our efficient workflow means you won't be without your iPhone for long.",
      hoverBackground:
        "linear-gradient(74deg, rgba(213, 253, 51, 0.63), rgb(0, 0, 0))"
    },
    {
      title: "High-Quality Batteries, Guaranteed",
      description:
        "Our replacement batteries are tested to meet industry standards for longevity, performance, and safety. You get a consistent power output, better charging cycles, and peace of mind with every iPhone battery replacement.",
      hoverBackground:
        "linear-gradient(74deg, rgba(207, 35, 98, 0.655), rgb(0, 0, 0))"
    }
  ];
  const processSteps = [
    "Diagnostic check for battery health and performance",
    "Carefully remove old battery",
    "Install new high-capacity battery",
    "Secure battery placement and test for charging issues",
    "Final cleanup and preparation for dispatch"
  ];
  const textcarddata = [
    ` Phone Repair Centre knows how inconvenient a weak or dying battery can be. Whether you're in Brisbane, Adelaide, Darwin, or a remote area, we're here to make iPhone battery replacement simple and hassle-free.`,
    ` We use only premium-grade batteries that match or exceed Apple's performance standards. Our experienced technicians ensure each iPhone battery replacement is done with care and precision, so you can enjoy longer battery life without compromising safety or quality.`
  ];
  return (
    <div className="bg-gray-50">
      <Breadcrumb
        pageName="Power Up Your iPhone – Trusted Mail-in iPhone Battery Replacement Service"
        pageDescription="<strong class='text-xl'> Battery Draining Too Fast? We've Got the Solution – Wherever You Are in Australia! </strong>"
        backgroundImage="/Images/iphone-battery-replacement.webp"
      />

      <section className="container mx-auto px-4 py-12">
        <MainHeading
          Heading="Australia's Mail-In Experts for iPhone Battery Replacement"
          color="var(--prc)"
          svg_stroke="var(--alpha)"
        />

        <Textcard textcardData={textcarddata} />
      </section>

      <section className="bg-white py-12">
        <div className="container mx-auto px-4">
          <MainHeading
            Heading="Why Choose Us to Fix Your iPhone Battery Issues?"
            color="var(--prc)"
            svg_stroke="var(--alpha)"
          />

          <Textbenefitcard benefits={benefits} />
        </div>
      </section>

      <section className="bg-gray-50 py-6">
        <div className="container mx-auto px-4">
          <MainHeading
            Heading="Our Battery Replacement Process – Safe, Thorough, and Efficient"
            color="var(--prc)"
            svg_stroke="var(--alpha)"
          />
          <h3 className="text-xl font-semibold text-center pt-4 text-gray-700 mb-8">
            {`We Don't Just Replace – We Revive Your iPhone`}
          </h3>

          <Imagetextcard
            processSteps={processSteps}
            processimage={batteryProcess}
          />
        </div>
      </section>

      <section className="bg-prc bg-opacity-10 py-12">
        <div className="container mx-auto px-4">
          <MainHeading
            Heading="Easy Steps for iPhone Battery Replacement – From Anywhere in Australia"
            color="white"
            svg_stroke="var(--alpha)"
          />

          <Stepcard replacementSteps={replacementSteps} />
        </div>
      </section>

      <section className="py-8 container bg-gray-50 grid grid-cols-1 lg:grid-cols-2">
        <div className="flex justify-center">
            <img
              src={iphoneModels.src}
              alt="iPhone models we repair"
              className="rounded-lg shadow-md max-w-full  m-auto lg:w-[80%]"
            />
          </div>
        <div className="flex items-center px-4">
          <div>
            <MainHeading
            Heading={`From iPhone 6 to iPhone 17 Pro Max – We've Got You Covered`}
            color="var(--prc)"
            svg_stroke="var(--alpha)"
          />
          <p className="text-lg lg:text-start text-gray-600  mx-auto mb-8">
            {` Whether you're using an older iPhone 7 or the latest iPhone 17 Pro Max, we perform iPhone battery replacement for nearly every model. As Apple updates its devices, we upgrade our tools and techniques to match.`}
          </p>
          </div>
          
        </div>
      </section>

      <section className="py-12 bg-prc text-white">
        <div className="container mx-auto px-4 text-center">
          <MainHeading
            Heading="Fix iPhone Battery Issues with Confidence – Choose Phone Repair Centre Today"
            color="white"
            svg_stroke="var(--alpha)"
          />
          <div className="mt-10">
            <Link
              href="/mail-in-repair"
              className="bg-white text-prc px-8 py-3 mt-4 rounded-lg font-semibold text-lg hover:bg-gray-100 transition duration-300"
            >
              Book Your Battery Replacement Now
            </Link>
          </div>
        </div>
      </section>
      <section className="py-8 bg-white">
        <div className="container mx-auto px-4">
          <BiginnerReviews
            reviews={reviewsData}
            googletitle="Customer Reviews – Trusted by Users Nationwide"
          />
        </div>
      </section>
      <section className="">
        <div className="">
          <AskusQuestion
            accordionData={accordionData}
            faq_subheading="FAQs on iPhone Battery Replacement"
            faqbg_color="bg-[#FEF6FF]"
            faq="FAQs"
          />
        </div>
      </section>
    </div>
  );
};

export default Page;
