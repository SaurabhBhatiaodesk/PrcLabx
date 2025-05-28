
import AskusQuestion from "@/components/AskusQuestion/AskusQuestion";
import GoogleReviews from "@/components/GoogleReviews/GoogleReviews";
import DataRecovery from "@/components/HomeCpmponents/DataRecovery/DataRecovery";
import DeliveryTous from "@/components/HomeCpmponents/DeliveryTo-us/DeliveryTous";
import FixLabx from "@/components/HomeCpmponents/FixLabx/FixLabx";
import OurClient from "@/components/HomeCpmponents/OurClients/OurClient";
import WhyChooseLabX from "@/components/HomeCpmponents/WhyChooseLabX/WhyChooseLabX";
import YouTubeHome from "@/components/HomeCpmponents/YouTubeHome/YouTubeHome";
import MainBanner from "@/components/MainBanner/MainBanner";
import RecentNews from "@/components/RecentNews/RecentNews";

// import ServicesComponents from "@/components/ServicesComponents/ServicesComponents";
import Storeproduct from "@/components/Storeproduct/Storeproduct";
import React from "react";
export const metadata = {
  title: "Best Mobile Phone Repair Courses, Services & Training | Labx Repair",
  description: "Labx Repair provides the best mobile phone repair courses, services & training, offering expert guidance and practical experience for a successful career. Join now!",
  keywords: ["LabX", "tech solutions", "data recovery", "client reviews", "tech services"],
  openGraph: {
    title: "Welcome to LabX - Your Trusted Tech Solutions",
    description: "Explore LabX Repair for expert mobile repairs and training in Melbourne West by Bharat, specializing in screen refurbishment and motherboard solutions.",
    url: "/", 
    type: "website",
    images: [
      {
        url: "", 
        width: 1200,
        height: 630,
        alt: "LabX Tech Solutions Banner",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Welcome to LabX - Your Trusted Tech Solutions",
    description: "Explore LabX Repair for expert mobile repairs and training in Melbourne West by Bharat, specializing in screen refurbishment and motherboard solutions.",
    images: ["https://example.com/path-to-your-image.jpg"],
  },
  alternates: {
    canonical: "https://labxrepair.com.au/",
  },

};
const accordionData = [
  {
    title: "What types of devices do you repair?",
    content:
      "We repair a wide range of mobile devices, including iPhones, Android phones, tablets, and MacBooks. We specialize in logic board repairs, microsoldering, and screen refurbishments.",
  },
  {
    title: "What types of repairs do you specialize in?",
    content:
      "Our expertise includes screen replacement, motherboard repairs, data recovery, and micro soldering. We also handle complex repairs like Face ID issues, and water damage recovery.",
  },
  {
    title: "Do you offer any warranties on your repairs?",
    content:
      "Yes, all repairs come with a 1 Year warranty on parts and workmanship. This ensures that if the same issue reoccurs, we will repair it free of charge, provided no further damage has occurred to the device.",
  },
  {
    title: "What is the warranty on liquid-damaged devices?",
    content:
      "We do not recommend repairing liquid-damaged devices and suggest only data recovery services. If the customer insists on repair, we do not provide any warranty, including for the replaced parts.",
  },
  {
    title: "Will all functions work on my dead device after repair?",
    content:
      "No guarantees can be made. The initial quote covers the visible issue, e.g., turning on a dead device. Since devices have numerous functions, issues like a non-working camera or mic will require a separate quote unless the fault is minor, in which case we’ll address it during the repair. Major issues will need re-quoting.",
  },
  {
    title: "Do you offer repair services for all phone brands?",
    content:
      "Yes, we provide repair services for a wide range of phone brands, including Apple, Samsung, Xiaomi, and more. Our technicians are experienced in handling various devices and models.",
  },
  {
    title: "How long does a typical phone repair take?",
    content:
      "Most phone repairs are completed within a few hours, depending on the complexity of the issue. We strive to return your device in working condition as quickly as possible.",
  },
];
const page = () => {
  return (
    <div>
      <MainBanner />
      <DeliveryTous/>
      <Storeproduct/>
      <DataRecovery/>
      <WhyChooseLabX />
      <FixLabx />
      <GoogleReviews />
      <RecentNews/>
      <YouTubeHome/>
      <OurClient />
      <AskusQuestion accordionData={accordionData}  
      faq="General FAQs"/>
     
    
     
    </div>
  );
};

export default page;
