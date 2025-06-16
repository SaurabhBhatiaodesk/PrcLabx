import Breadcrumb from "@/components/Breadcrumb/Breadcrumb";
import React from "react";
import FeeSolutions from "./FeeSolutions";
import HowWorks from "./HowWorks";
import StaperForm from "./StaperForm";

import ThanksData from "./ThanksData";
import PleaseNote from "./PleaseNote";
import BiginnerReviews from "@/components/GoogleReviews/BiginnerReviews";
import rname from "../../../public/Images/icons/rname.png";
import jname from "../../../public/Images/icons/E.png";
import Nname from "../../../public/Images/icons/N.png";
import Sname from "../../../public/Images/icons/S.png";
import Aname from "../../../public/Images/icons/A.png";
import hname from "../../../public/Images/icons/h.png";
import Googletest from "../../../public/Images/icons/Googletest.svg";
const MailRepair = () => {

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
  const stepsData = [
    {
      title: "Print & Pack",
      content:
        "Print the PDF attachment in your email and place it inside the package.",
      subcontent: "Read our Shipping Policy or Shipping FAQ for more information.",
      link: "/Shipping_Policy",
      buttonad: "Shipping Policy",
    },
    {
      title: "What to Send",
      content:
        "Please keep all accessories with you (cover, sim, etc.). Any third-party accessories attached to the device may be removed during the disassembly process. We do not take responsibility for any third-party accessories.",
    },
    {
      title: "Confirmation",
      content:
        "You will get an email confirmation when your package has been received. It’s your responsibility to get a quote before mailing your device.",
    },
    {
      title: "Repair",
      content:
        "Once we receive your device, it will be repaired in a queue system. If the repair cost exceeds the initial quote, we will contact you for confirmation before proceeding.",
    },
    {
      title: "Payment",
      content:
        "Once we reach a conclusion, we will send you a final invoice detailing all the agreed-upon charges. We will await your payment confirmation before releasing the device.",
    },
    {
      title: "Mail Back",
      content:
        "Your device will be mailed back to you once the repair is complete and the invoice is paid. The tracking number will be emailed to you and updated on your ticket.",
    },
  ];
  return (
    <>
      <div>
        <div>
          <Breadcrumb
            pageName="Mail In Repair Service"
            pageDescription="Get your device back to peak performance with our expert mail in phone repair solutions. We ensure quick turnaround times and exceptional quality work on complex phone repair problems including motherboard repair. Trust us to keep you connected."
            backgroundImage="/Images/BannerImages/mailinrepair.png"
            AdminImage="/Images/adminimage.png"
            link="/mail-in-repair"
            buttonname="START REPAIR"
            scrollId = "stapergk"
            scrollOffSet = {12 * 5}
          />
        </div>

       
        <HowWorks />
        <StaperForm />
        {/* <PleaseNote/> */}
        <ThanksData steps={stepsData} HeadingData="What Will Happen Next"/>
        <FeeSolutions />
         <BiginnerReviews reviews={reviewsData}  googletitle="Our Google Review"/>
       
      </div>
    </>
  );
};

export default MailRepair;
