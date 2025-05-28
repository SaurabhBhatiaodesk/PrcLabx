import Breadcrumb from "@/components/Breadcrumb/Breadcrumb";
import React from "react";
import FeeSolutions from "./FeeSolutions";
import HowWorks from "./HowWorks";
import StaperForm from "./StaperForm";
import GoogleReviews from "@/components/GoogleReviews/GoogleReviews";
import ThanksData from "./ThanksData";
import PleaseNote from "./PleaseNote";

const MailRepair = () => {
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
        <GoogleReviews />
      </div>
    </>
  );
};

export default MailRepair;
