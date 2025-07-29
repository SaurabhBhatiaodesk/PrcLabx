import Breadcrumb from "@/components/Breadcrumb/Breadcrumb";
import MainHeading from "@/components/ManinHeading/MainHeading";
import Imagetextcard from "@/components/Seopagecomponent/Imagetextcard";
import Textbenefitcard from "@/components/Seopagecomponent/Textbenefitcard";
import Textcard from "@/components/Seopagecomponent/Textcard";
import React from "react";
import batteryProcess from "../../../public/Images/fix-iphone-screen-screenrepair221.jpg";
import Stepcard from "@/components/Seopagecomponent/Stepcard";
import BiginnerReviews from "@/components/GoogleReviews/BiginnerReviews";
import rname from "../../../public/Images/icons/rname.png";
import jname from "../../../public/Images/icons/j.svg";
import Aname from "../../../public/Images/icons/A.png";
import Ename from "../../../public/Images/icons/E.png";
import Iname from "../../../public/Images/icons/I.png";
import nname from "../../../public/Images/icons/N.png";
import Googletest from "../../../public/Images/icons/Googletest.svg";
import AskusQuestion from "@/components/AskusQuestion/AskusQuestion";
const textcarddata = [
  `At Phone Repair Centre, we understand how essential your iPhone camera is, whether it’s capturing family memories, attending Zoom meetings, or scanning documents. From Sydney to Perth, Melbourne to Cairns, our iPhone camera replacement service is available nationwide with a smooth, mail-in process.`,
  `Our expert technicians use premium-grade components that restore original photo quality. We’re experienced in iPhone camera replacement across models, from the older iPhones to the latest Pro Max series.`
];
const benefits = [
  {
    title: "Mail-In Service That Saves You Time",
    description:
      "No queues. No appointments. Simply book your iPhone camera replacement online, send us your device securely, and we’ll handle the rest. With detailed packaging instructions, sending your phone is safe and easy.",
    hoverBackground: "linear-gradient(74deg, rgb(86, 193, 193), rgb(0, 0, 0))"
  },
  {
    title: "Specialists in iPhone Camera Replacement",
    description:
      "Every device we receive is handled by trained professionals. We’ve completed thousands of iPhone camera replacement services, ensuring your device is restored with precision and care.",
    hoverBackground: "linear-gradient(74deg,rgba(243,85,32,0.753),rgb(0,0,0))"
  },
  {
    title: "Quick Turnaround, Crystal Clear Results",
    description:
      "We know you miss your camera. That’s why we complete most iPhone camera replacement jobs within 1-2 weeks, with expedited service available in 1-9 days after receiving your device. Your iPhone is returned ready to capture memories again.",
    hoverBackground:
      "linear-gradient(74deg, rgba(213, 253, 51, 0.63), rgb(0, 0, 0))"
  },
  {
    title: "Premium-Quality Camera Modules",
    description:
      "Our replacement parts are tested to meet Apple’s performance standards. With our iPhone camera replacement, you’ll get clear, vibrant photos and fully functional camera features.",
    hoverBackground:
      "linear-gradient(74deg, rgba(207, 35, 98, 0.655), rgb(0, 0, 0))"
  }
];
const processSteps = [
  "Diagnostic check for lens damage or sensor issues",
  "Careful disassembly and removal of faulty camera",
  "Installation of a new high-resolution camera module",
  "Functional testing for focus, light balance, and clarity",
  "Final device cleanup and safe repackaging for return"
];
const replacementSteps = [
  {
    title: "Book Your Service Online",
    description:
      "Select your iPhone model and complete the booking for iPhone camera replacement directly through our website."
  },
  {
    title: "Send Your iPhone Securely",
    description:
      "Pack your device safely. Send it via your preferred postal or courier service."
  },
  {
    title: "We Replace and Return Swiftly",
    description:
      "After receiving your phone, we perform the iPhone camera replacement within 1-2 weeks, with expedited service available in 1-9 days and dispatch it back with tracking."
  }
];
const reviewsData = [
  {
    name: "Ava L. – Perth",
    date: "July 12, 2024",
    profileImage: Aname,
    logoImage: Googletest,
    rating: 5,
    param:
      "Front camera was dead on my iPhone 12. The iPhone camera replacement from PRC Repair was quick and easy. Excellent quality and service!"
  },
  {
    name: "Noah T. – Melbourne",
    date: "May 21, 2024",
    profileImage: nname,
    logoImage: Googletest,
    rating: 5,
    param:
      "I mailed my phone with a broken rear lens. In two days, I had it back with flawless camera quality. Best iPhone camera replacement service I’ve used!"
  },
  {
    name: "Isla M. – Canberra",
    date: "September 12, 2023",
    profileImage: Iname,
    logoImage: Googletest,
    rating: 5,
    param:
      "I take photos for work, so I needed a trusted iPhone camera replacement. PRC Repair delivered! The process was smooth and results amazing."
  },
  {
    name: "Ethan S. – Gold Coast",
    date: "October 5, 2024",
    profileImage: Ename,
    logoImage: Googletest,
    rating: 5,
    param:
      "My iPhone 13 Pro camera stopped focusing. These guys replaced it with care. The camera now works like new. Great iPhone camera replacement team."
  },
  {
    name: "Mia J. – Hobart",
    date: "November 1, 2023",
    profileImage: jname,
    logoImage: Googletest,
    rating: 5,
    param:
      "This is my second time using PRC Repair. Their iPhone battery replacement service is top-notch. Quick delivery, excellent battery quality, and trustworthy service. 10/10!"
  }
];
const accordionData = [
  {
    title: "How do I book an iPhone camera replacement?",
    content:
      "Just visit our website, select your model, and book the service. We provide step-by-step instructions for safe packaging and mailing."
  },
  {
    title: "How long does it take to replace my iPhone camera?",
    content:
      "We complete the iPhone camera replacement within 1–2 business days of receiving your device, then ship it back immediately."
  },
  {
    title: "Do you use original quality camera parts?",
    content:
      "Yes. We only use premium, tested camera modules that meet high-performance and safety standards for every iPhone camera replacement."
  },
  {
    title: "Is it safe to mail my phone for repair?",
    content:
      "Absolutely. We offer secure mailing guidance, and all devices are returned with tracking and optional insurance."
  },
  {
    title: "Will the replacement camera perform like the original?",
    content:
      "Yes. After iPhone camera replacement, your phone’s camera will deliver excellent quality, sharp images, and full feature functionality."
  },
  {
    title: "Can you replace the front and rear cameras?",
    content:
      "Yes. We provide iPhone camera replacement for both front (selfie) and rear (main) cameras depending on the issue."
  },
  {
    title: "Is iPhone camera replacement more affordable than a new phone?",
    content:
      "Definitely. A professional iPhone camera replacement restores your phone’s photography capabilities at a much lower cost than buying a new iPhone."
  }
];

export default function page() {
  return (
    <div className="bg-gray-50">
      <Breadcrumb
        pageName="Capture Every Moment, Trusted Mail-in iPhone Camera Replacement Service"
        pageDescription="<strong class='text-xl'> Blurry Photos or Camera Not Working? We’ve Got the Fix – Anywhere in Australia!</strong>"
        backgroundImage="/Images/iphone-battery-replacement.webp"
      />
      <section className="container mx-auto px-4 py-12">
        <MainHeading
          Heading="Best Mail-In Repair Experts for iPhone Camera Replacement"
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
            Heading="Our Camera Replacement Process – Done Right Every Time"
            color="var(--prc)"
            svg_stroke="var(--alpha)"
          />
          <h3 className="text-xl font-semibold text-center pt-4 text-gray-700 mb-8">
            {`We Don’t Just Repair – We Restore Your Camera’s Power`}
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
            Heading="3 Easy Steps for iPhone Camera Replacement, From Anywhere in Australia"
            color="white"
            svg_stroke="var(--alpha)"
          />

          <Stepcard replacementSteps={replacementSteps} />
        </div>
      </section>
      <section className="py-8 bg-white">
        <div className="container mx-auto px-4">
          <BiginnerReviews
            reviews={reviewsData}
            googletitle="Customer Reviews – See What Australians Say"
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
}
