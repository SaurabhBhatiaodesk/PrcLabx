import Breadcrumb from "@/components/Breadcrumb/Breadcrumb";
import MainHeading from "@/components/ManinHeading/MainHeading";
import Imagetextcard from "@/components/Seopagecomponent/Imagetextcard";
import Textbenefitcard from "@/components/Seopagecomponent/Textbenefitcard";
import Textcard from "@/components/Seopagecomponent/Textcard";
import React from "react";
import batteryProcess from "../../../public/Images/fix-iphone-screen-screenrepair221.jpg";
import iphoneModels from "../../../public/Images/fix-iphone-screen-screenrepair.jpg";
import Stepcard from "@/components/Seopagecomponent/Stepcard";
import BiginnerReviews from "@/components/GoogleReviews/BiginnerReviews";
import rname from "../../../public/Images/icons/rname.png";
import jname from "../../../public/Images/icons/j.svg";
import Aname from "../../../public/Images/icons/A.png";
import Ename from "../../../public/Images/icons/E.png";
import Iname from "../../../public/Images/icons/I.png";
import nname from "../../../public/Images/icons/N.png";
import hname from "../../../public/Images/icons/h.png";
import Googletest from "../../../public/Images/icons/Googletest.svg";
import AskusQuestion from "@/components/AskusQuestion/AskusQuestion";
const textcarddata = [
  `Clear sound and a working mic are essential for everyday communication, whether it’s talking to loved ones, recording videos, or joining online meetings. Our team specialises in iPhone speaker and microphone repair, restoring your phone’s audio system to full function, so you never miss a word.`,
  `From loudspeaker malfunctions to microphone failure during calls or voice memos, we diagnose and fix audio issues with precision—serving users across Sydney, Melbourne, Perth, and remote areas nationwide.`
];
const benefits = [
  {
    title: "Mail-In Service That Saves You Time",
    description:
      "Avoid long queues or booking hassles. Just order your iPhone speaker and microphone repair service online, follow our secure mailing instructions, and leave the rest to us.",
    hoverBackground: "linear-gradient(74deg, rgb(86, 193, 193), rgb(0, 0, 0))"
  },
  {
    title: "Trained Audio Repair Specialists",
    description:
      "Our technicians are skilled in delicate iPhone speaker and microphone repair procedures. Whether it’s replacing a damaged audio chip or cleaning out clogged speaker grills, we ensure the job is done right.",
    hoverBackground: "linear-gradient(74deg,rgba(243,85,32,0.753),rgb(0,0,0))"
  },
  {
    title: "Fast Service, You’ll Hear the Difference in Days",
    description:
      "We complete most iPhone speaker and microphone repair services within 1–2 business days after receiving your phone. Your device is returned with full functionality and tracking included.",
    hoverBackground:
      "linear-gradient(74deg, rgba(213, 253, 51, 0.63), rgb(0, 0, 0))"
  },
  {
    title: "High-Quality Parts, Professional Repair",
    description:
      "From microphone membranes to speaker modules, we use only reliable, tested components. Every iPhone speaker and microphone repair meets industry quality standards for long-lasting audio performance.",
    hoverBackground:
      "linear-gradient(74deg, rgba(207, 35, 98, 0.655), rgb(0, 0, 0))"
  }
];
const processSteps = [
  "Detailed audio diagnostic test",
  "Microphone and speaker function check",
  "Cleaning of ports, grills, and internal dust buildup",
  "Replacement of faulty speaker or microphone components",
  "Final testing for call clarity, volume output, and recording quality"
];
const replacementSteps = [
  {
    title: "Book Online",
    description:
      "Select your model and book your iPhone speaker and microphone repair on our website in just minutes."
  },
  {
    title: "Mail Your Device to Us",
    description:
      "Follow our secure packaging instructions and send your phone through your preferred courier or Australia Post."
  },
  {
    title: "We Repair and Return Promptly",
    description:
      "After completing your iPhone speaker and microphone repair, we return your device with tracking within 48 hours of receiving it."
  }
];
const reviewsData = [
  {
    name: "Jack B. – Newcastle",
    date: "July 12, 2024",
    profileImage: jname,
    logoImage: Googletest,
    rating: 5,
    param:
      "Couldn’t hear anything on calls. PRC Repair did a fast and flawless iPhone speaker and microphone repair. Sounds like brand new!"
  },
  {
    name: "Chloe H. – Cairns",
    date: "May 21, 2024",
    profileImage: hname,
    logoImage: Googletest,
    rating: 5,
    param:
      "My voice messages were blank and friends said I sounded distant. Their mail-in iPhone speaker and microphone repair service was a lifesaver."
  },
  {
    name: "Henry W. – Melbourne",
    date: "September 12, 2023",
    profileImage: hname,
    logoImage: Googletest,
    rating: 5,
    param:
      "Speaker was rattling badly. Sent it in and got it back in two days. The iPhone speaker and microphone repair team is amazing!"
  },
  {
    name: "Elivia S. – Sydney",
    date: "October 5, 2024",
    profileImage: Ename,
    logoImage: Googletest,
    rating: 5,
    param:
      "Crystal-clear sound after repair! PRC Repair fixed both my mic and speaker issues. I loved the communication and speed of service."
  },
  {
    name: "jiam T. – Hobart",
    date: "November 1, 2023",
    profileImage: jname,
    logoImage: Googletest,
    rating: 5,
    param:
      "Affordable and quick. The iPhone speaker and microphone repair worked perfectly. I can now take calls and record videos with great sound again."
  }
];
const accordionData = [
  {
    title: "How do I book an iPhone speaker and microphone repair?",
    content:
      "Visit our website, choose your iPhone model, and follow the steps to complete your booking online."
  },
  {
    title: "What issues qualify for speaker and microphone repair?",
    content:
      "Common problems include muffled sound, no sound during calls, voice memo issues, rattling speakers, and unresponsive mics."
  },
  {
    title: "How long does the repair take?",
    content:
      "We usually complete the iPhone speaker and microphone repair within 1–2 business days of receiving your phone."
  },
  {
    title: "Are the parts you use high-quality?",
    content:
      "Yes, we only use tested, premium parts for every iPhone speaker and microphone repair to ensure long-lasting results."
  },
  {
    title: "Is it safe to mail my iPhone to you?",
    content:
      "Absolutely. We’ll handle your device with care and return it safely with tracking."
  },
  {
    title: "Will this affect my phone’s warranty?",
    content:
      "We do not work under Apple’s official warranty, but our iPhone speaker and microphone repair is independent and reliable, with quality assurance."
  },
  {
    title: "Is it better to repair than upgrade?",
    content:
      "Yes. A professional iPhone speaker and microphone repair can restore full functionality for a fraction of the cost of a new iPhone."
  }
];


export default function page() {
  return (
    <div className="bg-gray-50">
      <Breadcrumb
        pageName="Hear Clearly Again, Trusted iPhone Speaker and Microphone Repair Service"
        pageDescription="<strong class='text-xl'>Can’t Hear Calls or People Can’t Hear You? We’ve Got the Fix</strong>"
        backgroundImage="/Images/iphone-battery-replacement.webp"
      />
      <section className="container mx-auto px-4 py-12">
        <MainHeading
          Heading="Australia’s Experts in iPhone Speaker and Microphone Repair"
          color="var(--prc)"
          svg_stroke="var(--alpha)"
        />

        <Textcard textcardData={textcarddata} />
      </section>
      <section className="bg-white py-12">
        <div className="container mx-auto px-4">
          <MainHeading
            Heading="Why Trust Phone Repair Centre for iPhone Speaker and Microphone Repair?"
            color="var(--prc)"
            svg_stroke="var(--alpha)"
          />

          <Textbenefitcard benefits={benefits} />
        </div>
      </section>
      <section className="bg-gray-50 py-6">
        <div className="container mx-auto px-4">
          <MainHeading
            Heading="What’s Included in Our iPhone Audio Repair Process?"
            color="var(--prc)"
            svg_stroke="var(--alpha)"
          />
          <h3 className="text-xl font-semibold text-center pt-4 text-gray-700 mb-8">
            {`We Restore Your Sound – Not Just Patch It Up`}
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
            Heading="3 Simple Steps to iPhone Speaker and Microphone Repair – Nationwide"
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
              Heading={`We Service All Models – From iPhone 6 to iPhone 17 Pro Max`}
              color="var(--prc)"
              svg_stroke="var(--alpha)"
            />
            <p className="text-lg lg:text-start text-gray-600  mx-auto mb-8">
              {`Whether you're using a classic iPhone 6 or a brand-new iPhone 17 Pro Max, we offer iPhone speaker and microphone repair for every generation. Our tools and methods are upgraded with each Apple release to ensure precise repairs every time.`}
            </p>
          </div>
        </div>
      </section>
      <section className="py-8 bg-white">
        <div className="container mx-auto px-4">
          <BiginnerReviews
            reviews={reviewsData}
            googletitle="Customer Reviews – What Australians Are Saying?"
          />
        </div>
      </section>
      <section className="">
        <div className="">
          <AskusQuestion
            accordionData={accordionData}
            faq_subheading="FAQs on iPhone Speaker and Microphone Repair"
            faqbg_color="bg-[#FEF6FF]"
            faq="FAQs"
          />
        </div>
      </section>
    </div>
  );
}
