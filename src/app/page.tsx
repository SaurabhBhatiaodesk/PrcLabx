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
import one from "../../public/Images/one.png";
import two from "../../public/Images/two.png";
import three from "../../public/Images/three.png";
import four from "../../public/Images/four.png";
import five from "../../public/Images/five.png";
import six from "../../public/Images/six.png";
import seven from "../../public/Images/seven.webp";
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
      "Most phone repairs are completed within <strong>30 minutes to 1 hour</strong>. In some cases, if parts are not in stock, it may take a few days. If the parts need to be ordered from overseas, the repair may take <strong>a few weeks</strong>.",
  },
  {
    title: "2. What types of devices do you repair?",
    content:
      "We repair a wide range of devices including:" +
      "<ul>" +
      "<li><strong>iPhones, iPads, Android phones and tablets</strong></li>" +
      "<li><strong>MacBooks and laptops</strong></li>" +
      "<li><strong>Game consoles and controllers</strong></li>" +
      "</ul>" +
      "We also specialise in <strong>complex motherboard repairs</strong> and <strong>data recovery from mobile phones</strong>.",
  },
  {
    title: "3. What kind of issues can you fix?",
    content:
      "We repair everything from:" +
      "<ul>" +
      "<li><strong>Cracked screens and battery replacements</strong></li>" +
      "<li><strong>Charging and power issues</strong></li>" +
      "<li><strong>Advanced motherboard faults</strong></li>" +
      "<li><strong>Data recovery from dead, broken, or liquid-damaged phones</strong></li>" +
      "<li><strong>Console motherboard issues</strong></li>" +
      "</ul>",
  },
  {
    title: "4. What areas do you service?",
    content:
      "We have two physical locations:" +
      "<ul>" +
      "<li><strong>St Marys, NSW 2760</strong> (our main service hub)</li>" +
      "<li><strong>Schofields, NSW 2762</strong></li>" +
      "</ul>" +
      "We also offer <strong>Australia-wide service</strong> via our <strong>Mail-In Repair</strong> option. We accept repairs from all regions, including <strong>Victoria, Darwin, Perth, Adelaide</strong>, and even from <strong>New Zealand and other countries</strong>.",
  },
  {
    title:
      "5. I have insurance on my phone. Can you repair it and claim through insurance?",
    content:
      "<ul>" +
      "<li>We <strong>do not work directly with insurance companies</strong>.</li>" +
      "<li>We can provide a <strong>detailed repair quote and tax invoice</strong>.</li>" +
      "<li>You will need to <strong>pay us directly</strong>, and handle the claim with your insurer yourself.</li>" +
      "</ul>",
  },
  {
    title: "6. What payment methods do you accept?",
    content:
      "We accept the following:" +
      "<ul>" +
      "<li><strong>Credit and debit cards</strong></li>" +
      "<li><strong>Cash</strong></li>" +
      "<li><strong>Afterpay and Zip Pay</strong></li>" +
      "<li><strong>PayID and bank transfers</strong></li>" +
      "</ul>" +
      "<p>Please note: <strong>Devices will only be released once payment is cleared</strong> in our account.</p>",
  },
  {
    title: "7. What warranty do you offer?",
    content:
      "<ul>" +
      "<li>All repairs come with a <strong>3-month warranty</strong>.</li>" +
      "<li><strong>Note:</strong> We do<strong>not</strong> provide any warranty for <strong>liquid-damaged devices</strong>, not even for the parts replaced.</li>" +
      "</ul>",
  },
  {
    title: "8. How long will you hold my device after the repair?",
    content:
      "We will hold repaired devices for a maximum of <strong>4 weeks</strong>. If the device is <strong>not collected within this time</strong>, it may be <strong>recycled or disposed of</strong>, and we will <strong>not be responsible</strong> for it.",
  },
  {
    title:
      "9. If you can't fix my device, will I get it back in the same condition?",
    content:
      "<ul>" +
      "<li>Not always. If your device is <strong>partially working</strong>, there is a chance it may become <strong>completely non-functional</strong> during the repair attempt.</li>" +
      "<li>If you're concerned about any functionality or internal condition, please <strong>discuss this with our staff before submitting your device</strong>.</li>" +
      "<li>We may need to <strong>open shields or access internal components</strong>, which may leave marks. We <strong>do not guarantee</strong> the device will be returned in the <strong>exact same condition</strong> as received.</li>" +
      "</ul>",
  },
  {
    title:
      "10. Will my original manufacturer warranty remain valid after your repair, even if you use original parts?",
    content:
      "<ul>" +
      "<li><strong>Probably not.</strong> Most manufacturers will <strong>void your warranty</strong> once a third party has opened the device — even if original parts are used.</li>" +
      "<li>It’s best to <strong>check with your brand’s authorised service centre</strong> regarding their warranty policy before proceeding with repair.</li>" +
      "</ul>",
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
    src: one,
    alt: "Samsung Fold 7 Cases",
    Product: "Samsung Fold 7 Cases",
  },
  {
    src: two,
    alt: "iPad Cover",
    Product: "iPad Cover",
  },
  {
    src: three,
    alt: "MacBook Cases",
    Product: "MacBook Cases",
  },
  {
    src: four,
    alt: "Microsoft Surface Cases",
    Product: "Microsoft Surface Cases",
  },

  {
    src: five,
    alt: "iWatch Cases",
    Product: "iWatch Cases",
  },

  {
    src: six,
    alt: "Earphone Headphones",
    Product: "Earphone Headphones",
  },
  {
    src: seven,
    alt: "iphone 17",
    Product: "iphone 17",
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
