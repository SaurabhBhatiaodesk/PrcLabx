import AskusQuestion from "../components/AskusQuestion/AskusQuestion";
import Devicequote from "../components/Devicelist/Devicequote";
import BiginnerReviews from "../components/GoogleReviews/BiginnerReviews";
import DataRecovery from "../components/HomeCpmponents/DataRecovery/DataRecovery";
import DeliveryTous from "../components/HomeCpmponents/DeliveryTo-us/DeliveryTous";
import FixLabx from "../components/HomeCpmponents/FixLabx/FixLabx";
import OurClient from "../components/HomeCpmponents/OurClients/OurClient";
import ShipDeviceUs from "../components/HomeCpmponents/ShipDevice/ShipDeviceUs";
import WhyChooseLabX from "../components/HomeCpmponents/WhyChooseLabX/WhyChooseLabX";
import YouTubeHome from "../components/HomeCpmponents/YouTubeHome/YouTubeHome";
import MainBanner from "../components/MainBanner/MainBanner";
import RecentNews from "../components/RecentNews/RecentNews";
// import rname from "../../../../public/Images/icons/rname.png";
import rname from "../../public/Images/icons/rname.png";
import jname from "../../public/Images/icons/E.png";
import Nname from "../../public/Images/icons/N.png";
import Sname from "../../public/Images/icons/S.png";
import Aname from "../../public/Images/icons/A.png";
import hname from "../../public/Images/icons/h.png";
import Googletest from "../../public/Images/icons/Googletest.svg";

import sliderimg1 from "../../public/Images/Charging Connecotrs.webp";
import sliderimg2 from "../../public/Images/FPC Connector.webp";
import sliderimg3 from "../../public/Images/IC Chip.jpg";
import sliderimg4 from "../../public/Images/Machines.webp";
import sliderimg5 from "../../public/Images/Reballing Stencils.jpg";
import sliderimg6 from "../../public/Images/Repair Tools.jpg";
import sliderimg7 from "../../public/Images/PS5-guts-hub.jpg";
import sliderimg8 from "../../public/Images/ps5-muddaburd.jpg";
// china whare house
import chaina1 from "../../public/Images/chaina1.webp";
import oneplus from "../../public/Images/oneplus.jpg";
import OnePlusNord from "../../public/Images/OnePlus Nord.jpg";
import SamsungGalaxyS25S24 from "../../public/Images/Samsung Galaxy S25 S24.jpg";
import iphone16 from "../../public/Images/For iPhone 16 Pro.jpg";
import chaina6 from "../../public/Images/chaina6.webp";
import React from "react";

import Productswiper from "../components/Storeproduct/Productswiper";
import HandsOnTraining from "../components/HomeCpmponents/HandsOnTraining/HandsOnTraining";
export const metadata = {
  title:
    "Mobile Phone Repair Services & Training | Mobile Accessories | Phone Repair Center ",
  description:
    "Phone Repair Center  provides expert mobile phone repair services, training, & quality mobile accessories. Fast, reliable solutions to keep your devices in top condition. Join now!",
  keywords: [
    "PRC",
    "tech solutions",
    "data recovery",
    "client reviews",
    "tech services",
  ],
  openGraph: {
    title: "Welcome to PRC - Your Trusted Tech Solutions",
    description:
      "Explore Phone Repair Center  for expert mobile phone repairs and training in Melbourne West by Bharat, specializing in screen refurbishment and motherboard solutions.",
    url: "/",
    type: "website",
    images: [
      {
        url: "",
        width: 1200,
        height: 630,
        alt: "PRC Tech Solutions Banner",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Welcome to PRC - Your Trusted Tech Solutions",
    description:
      "Explore Phone Repair Center  for expert mobile phone repairs and training in Melbourne West by Bharat, specializing in screen refurbishment and motherboard solutions.",
    images: ["https://example.com/path-to-your-image.jpg"],
  },
  alternates: {
    canonical: "https://www.prcrepair.com.au/",
  },
};
const accordionData = [
  {
    title: "1. How long will it take to fix my phone?",
    content:
      "Most phone repairs are completed within 30 minutes to 1 hour. In some cases, if parts are not in stock, it may take a few days. If the parts need to be ordered from overseas, the repair may take a few weeks.",
  },
  {
    title: "2. What types of devices do you repair?",
    content:
      "We repair a wide range of devices including:\n\n- iPhones, iPads, Android phones and tablets\n- MacBooks and laptops\n- Game consoles and controllers\n\nWe also specialise in complex motherboard repairs and data recovery from mobile phones.",
  },
  {
    title: "3. What kind of issues can you fix?",
    content:
      "We repair everything from:\n\n- Cracked screens and battery replacements\n- Charging and power issues\n- Advanced motherboard faults\n- Data recovery from dead, broken, or liquid-damaged phones\n- Console motherboard issues",
  },
  {
    title: "4. What areas do you service?",
    content:
      "We have two physical locations:\n\n- St Marys, NSW 2760 (our main service hub)\n- Schofields, NSW 2762\n\nWe also offer Australia-wide service via our Mail-In Repair option. We accept repairs from all regions, including Victoria, Darwin, Perth, Adelaide, and even from New Zealand and other countries.",
  },
  {
    title: "5. I have insurance on my phone. Can you repair it and claim through insurance?",
    content:
      "We do not work directly with insurance companies. However, we can provide a detailed repair quote and tax invoice. You will need to pay us directly, and handle the claim with your insurer yourself.",
  },
  {
    title: "6. What payment methods do you accept?",
    content:
      "We accept the following:\n\n-  Credit and debit cards\n- Cash\n- Afterpay and Zip Pay\n- PayID and bank transfers\n\nPlease note: Devices will only be released once payment is cleared in our account.",
  },
  {
    title: "7. What warranty do you offer?",
    content:
      "All repairs come with a 3-month warranty.\nNote: We do not provide any warranty for liquid-damaged devices, not even for the parts replaced.",
  },
  {
    title: "8. How long will you hold my device after the repair?",
    content:
      "We will hold repaired devices for a maximum of 4 weeks. If the device is not collected within this time, it may be recycled or disposed of, and we will not be responsible for it.",
  },
  {
    title: "9. If you can't fix my device, will I get it back in the same condition?",
    content:
      "Not always. If your device is partially working, there is a chance it may become completely non-functional during the repair attempt.\nIf you're concerned about any functionality or internal condition, please discuss this with our staff before submitting your device.\nWe may need to open shields or access internal components, which may leave marks. We do not guarantee the device will be returned in the exact same condition as received.",
  },
  {
    title: "10. Will my original manufacturer warranty remain valid after your repair, even if you use original parts?",
    content:
      "Probably not. Most manufacturers will void your warranty once a third party has opened the device — even if original parts are used. It’s best to check with your brand’s authorised service centre regarding their warranty policy before proceeding with repair.",
  },
];

const reviewsData = [
  {
    name: "Liam Foster",
    date: "September 12, 2023",
    profileImage: hname,
    logoImage: Googletest,
    rating: 5,
    param:
      "The course was incredibly detailed, and the hands-on practice helped me build confidence. The instructors were patient and knowledgeable, making even complex micro soldering techniques easy to understand.",
  },
  {
    name: "Emma Williams",
    date: "September 12, 2023",
    profileImage: rname,
    logoImage: Googletest,
    rating: 5,
    param:
      "This course transformed my skills! I can now confidently repair motherboards and handle advanced micro soldering tasks. Highly recommend it for anyone serious about electronics repair.",
  },
  {
    name: "Jack O'Connor",
    date: "September 12, 2023",
    profileImage: Sname,
    logoImage: Googletest,
    rating: 5,
    param:
      "The one-week intensive program was perfect. I learned advanced diagnostics and component replacement with expert guidance. The hands-on approach made everything clear and practical. Excellent experience!",
  },
  {
    name: "Chloe Brown",
    date: "October 5, 2023",
    profileImage: jname,
    logoImage: Googletest,
    rating: 5,
    param:
      "Fantastic course! The instructors were highly experienced, and their step-by-step guidance on micro soldering was invaluable. I feel ready to handle complex motherboard repairs now. ",
  },
  {
    name: "Oliver Harris",
    date: "November 1, 2023",
    profileImage: Aname,
    logoImage: Googletest,
    rating: 5,
    param:
      "The training exceeded my expectations. From using advanced tools to mastering micro soldering techniques, I gained practical skills that I can apply immediately. Great value for time and money!",
  },
  {
    name: "Sophie Clark",
    date: "November 1, 2023",
    profileImage: Nname,
    logoImage: Googletest,
    rating: 5,
    param:
      "A must-attend course for repair professionals. The small class size allowed personalized attention, and the hands-on exercises helped me master motherboard repairs quickly. Truly worth every minute!",
  },
];
const slideData = [
  {
    src: sliderimg1,
    alt: "Charging Connecotrs",
    Product: "Charging Connecotrs",
  },
  {
    src: sliderimg2,
    alt: "FPC Connector",
    Product: "FPC Connector",
  },
  {
    src: sliderimg3,
    alt: "IC BGA Chips",
    Product: "IC BGA Chips",
  },
  {
    src: sliderimg4,
    alt: "Machines",
    Product: " Repair Machines",
  },
  {
    src: sliderimg5,
    alt: "Reballing Stencils",
    Product: "Reballing Stencils",
  },
  {
    src: sliderimg6,
    alt: "Repair Tools",
    Product: "Repair Tools",
  },
  {
    src: sliderimg7,
    alt: "PS5-guts-hub",
    Product: "PS5 Guts Hub",
  },
  {
    src: sliderimg8,
    alt: "Game Console Parts",
    Product: "Game Console Parts",
  },
];

const slideData2 = [
  {
    src: iphone16,
    alt: "iPhone 16 Pro",
    Product: "iPhone 16 Pro",
  },
  {
    src: SamsungGalaxyS25S24,
    alt: "SamsungGalaxyS25S24",
    Product: "Samsung Galaxy S25 S24",
  },
  {
    src: oneplus,
    alt: "OnePlus 10",
    Product: "OnePlus 10",
  },
  {
    src: OnePlusNord,
    alt: "OnePlus Nord",
    Product: "OnePlus Nord",
  },

  {
    src: chaina1,
    alt: "Tools/ Stencils",
    Product: "Tools/ Stencils",
  },

  {
    src: chaina6,
    alt: "Screens",
    Product: "Screens",
  },
  {
    src: oneplus,
    alt: "OnePlus 10",
    Product: "OnePlus 10",
  },
];
const page = () => {
  return (
    <div>
      <MainBanner />
      <Devicequote />
      {/* <DeliveryTous/> */}
      <WhyChooseLabX />
      {/* <ShipDeviceUs /> */}
    
      <HandsOnTraining />
  

      <DataRecovery />

      <Productswiper
        slideData={slideData2}
        Heading="China Warehouse"
        Title="Discover premium Samsung, OnePlus, and OPPO accessories shipped directly from China. High-quality, affordable, and reliable—delivered straight to your door with confidence and care."
        svg_stroke="var(--alpha)"
        color="var(--prc)"
        buttonlink="/coming-soon"
        buttondata="Visit Store"
      />
          <Productswiper
        slideData={slideData}
        Heading="Parts Store"
        Title="Our Parts Store for mobile phone repair   offers a wide selection of high-quality phone screens, iPhone mobile parts, and accessories. With full e-commerce functionality, businesses can easily purchase the parts they need for efficient mobile phone repairs and services."
        svg_stroke="var(--alpha)"
        color="var(--prc)"
        buttonlink="/coming-soon"
        buttondata="Visit Store"
      />

   
      <FixLabx />

      <BiginnerReviews reviews={reviewsData} googletitle="Our Google Review" />
      {/* <RecentNews /> */}
      <YouTubeHome />
      {/* <OurClient /> */}
      <AskusQuestion
        accordionData={accordionData}
        faq_subheading="Please securely package your phone and ship it to us at the designated address. Make sure to include any required documentation for efficient processing."
        faqbg_color="bg-[#FEF6FF]"
        faq="Most People Ask us These Questions"
      />
    </div>
  );
};

export default page;
