
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

import sliderimg1 from "../../public/Images/slidercable.webp"
import sliderimg2 from "../../public/Images/slidercamera.webp"
import sliderimg3 from "../../public/Images/sliderchip.webp"
import sliderimg4 from "../../public/Images/slidermotherboard.webp"
import sliderimg5 from "../../public/Images/slidermobilechip.webp"
import sliderimg6 from "../../public/Images/slidermotherboard.webp"
import sliderimg7 from "../../public/Images/sliderphoneback.webp"
import sliderimg8 from "../../public/Images/sliderphonelock.webp"
// china whare house
import chaina1 from "../../public/Images/chaina1.webp"
import chaina2 from "../../public/Images/chaina2.webp"
import chaina3 from "../../public/Images/chaina3.webp"
import chaina4 from "../../public/Images/chaina4.webp"
import chaina5 from "../../public/Images/chaina5.webp"
import chaina6 from "../../public/Images/chaina6.webp"
import React from "react";

import Productswiper from "../components/Storeproduct/Productswiper";
import HandsOnTraining from "../components/HomeCpmponents/HandsOnTraining/HandsOnTraining";
export const metadata = {
  title: "Mobile Phone Repair Services & Training | Mobile Accessories | Phone repair center",
  description: "Phone repair center provides expert mobile phone repair services, training, & quality mobile accessories. Fast, reliable solutions to keep your devices in top condition. Join now!",
  keywords: ["PRC", "tech solutions", "data recovery", "client reviews", "tech services"],
  openGraph: {
    title: "Welcome to PRC - Your Trusted Tech Solutions",
    description: "Explore Phone repair center for expert mobile phone repairs and training in Melbourne West by Bharat, specializing in screen refurbishment and motherboard solutions.",
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
    description: "Explore Phone repair center for expert mobile phone repairs and training in Melbourne West by Bharat, specializing in screen refurbishment and motherboard solutions.",
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
      "We repair a wide range of mobile phone devices, including iPhones, Android phones, tablets, and MacBooks. We specialize in logic board repairs, microsoldering, and screen refurbishments.",
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
    alt: "Charging Port",
    Product: "Charging Port"
  },
  {
    src: sliderimg2,
    alt: "Cameras",
    Product: "Cameras"
  },
  {
    src: sliderimg3,
    alt: "ICs/ Chips",
    Product: "ICs/ Chips"
  },
  {
    src: sliderimg4,
    alt: "PS5 IC/ Parts",
    Product: "PS5 IC/ Parts"
  },
  {
    src: sliderimg5,
    alt: "Motherboard Component Connect",
    Product: "Motherboard Component Connect"
  },
  {
    src: sliderimg6,
    alt: "Tools/ Stencils",
    Product: "Tools/ Stencils"
  },
  {
    src: sliderimg7,
    alt: "Back Glass",
    Product: "Back Glass"
  },
  {
    src: sliderimg8,
    alt: "Screens",
    Product: "Screens"
  },
];
const slideData2 = [
  {
    src: chaina5,
    alt: "Charging Port",
    Product: "Charging Port"
  },
  {
    src: chaina4,
    alt: "Cameras",
    Product: "Cameras"
  },
  {
    src: chaina3,
    alt: "ICs/ Chips",
    Product: "ICs/ Chips"
  },
  {
    src: chaina2,
    alt: "PS5 IC/ Parts",
    Product: "PS5 IC/ Parts"
  },

  {
    src: chaina1,
    alt: "Tools/ Stencils",
    Product: "Tools/ Stencils"
  },
  {
    src: sliderimg7,
    alt: "Back Glass",
    Product: "Back Glass"
  },
  {
    src: chaina6,
    alt: "Screens",
    Product: "Screens"
  },
];
const page = () => {
  return (
    <div>
      <MainBanner />
      <Devicequote />
      {/* <DeliveryTous/> */}
      <ShipDeviceUs />

      <Productswiper slideData={slideData} Heading="Parts Store" Title="Our Parts Store for mobile phone repair   offers a wide selection of high-quality phone screens, iPhone mobile parts, and accessories. With full e-commerce functionality, businesses can easily purchase the parts they need for efficient mobile phone repairs and services." svg_stroke="var(--alpha)" color="var(--prc)"  buttonlink="https://wholesale.prcrepair.com.au/" buttondata="Visit Store"/>
      <HandsOnTraining/>
      <DataRecovery />
  
      <Productswiper slideData={slideData2} Heading="China Warehouse" Title="Discover premium Samsung, OnePlus, and OPPO accessories shipped directly from China. High-quality, affordable, and reliable—delivered straight to your door with confidence and care." svg_stroke="var(--alpha)" color="var(--prc)"  buttonlink="https://warehouse.prcrepair.com.au/" buttondata="Visit Store"/>

      <WhyChooseLabX />
      <FixLabx />

      <BiginnerReviews reviews={reviewsData} googletitle="Our Google Review" />
      <RecentNews />
      <YouTubeHome />
      {/* <OurClient /> */}
      <AskusQuestion accordionData={accordionData}
        faq_subheading="Please securely package your phone and ship it to us at the designated address. Make sure to include any required documentation for efficient processing."
        faqbg_color="bg-[#FEF6FF]"
        faq="Most People Ask us These Questions" />
    </div>
  );
};

export default page;
