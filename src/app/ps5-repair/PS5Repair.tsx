import React from "react";
import PS5Banner from "./PS5Banner";
import MainHeading from "@/components/ManinHeading/MainHeading";
import MainTitle from "@/components/MainTitle/MainTitle";
import PS5RepairsSydney from "./PS5RepairsSydney";
import PS5ExpertRepair from "./PS5ExpertRepair";
import GoogleReviews from "@/components/GoogleReviews/GoogleReviews";
import AskusQuestion from "@/components/AskusQuestion/AskusQuestion";
import PS5Sydney from "./PS5Sydney";
import dynamic from "next/dynamic";
const StaperForm = dynamic(() => import("../mail-in-repair/StaperForm"), {
  ssr: false,
});
const PS5Repair = () => {
  const accordionData = [
    {
      title: "How long does a PS5 repair service take?",
      content: ` Most PlayStation 5 repair services are completed within 24-48 hours, depending on the issue. We prioritize fast turnaround times to get you gaming again.`,
    },
    {
      title: `What types of PlayStation repair services do you offer?`,
      content: `We provide PS5 repair services, including HDMI port fixes, power issues, overheating, SSD upgrades, and disc drive repairs, ensuring optimal console performance.`,
    },
    {
      title: `Do you offer a warranty on PlayStation 5 repair?`,
      content: `Yes! We provide a warranty on all PlayStation repair services, covering parts and labor, giving you peace of mind after your console is repaired.`,
    },
    {
      title: `Can you fix the Blue Light of Death on my PS5?`,
      content: `Absolutely! Our expert technicians specialize in PlayStation 5 repair, including fixing the Blue Light of Death (BLOD) to restore your console’s functionality.
`,
    },
    {
      title: `What if my PS5 can’t be repaired?`,
      content: `If your PS5 repair service isn’t possible, we offer alternative solutions, including replacement options, and you won’t be charged if we can’t fix it.`,
    },
    {
      title: `Do you use genuine parts for PlayStation repair?`,
      content: `Yes, we use high-quality, genuine parts for all PlayStation 5 repair services to ensure durability, longevity, and the best gaming experience.`,
    },
    {
      title: `Where can I get my PS5 repaired?`,
      content: `You can visit our repair center for professional PS5 repair service or opt for a mail-in PlayStation repair to fix your console hassle-free.`,
    },
  ];
  return (
    <div>
      <PS5Banner />
      <div className="bg-[#0b0b0b] md:py-10 py-8">
        <div className=" container">
          <MainHeading Heading="How Mail-In PS5 Repair Works?" />
          <p className="lg:w-[60%] md:w-[80%] w-full m-auto text-center">
            Simply package your PS5 securely and{" "}
            <span className="font-medium text-[#EDE574] underline">ship</span>{" "}
            it to us. Once we{" "}
            <span className="font-medium text-[#EDE574] underline">
              receive
            </span>{" "}
            your console, our expert technicians will{" "}
            <span className="font-medium text-[#EDE574] underline">
              diagnose
            </span>{" "}
            the issue and carry out the necessary{" "}
            <span className="font-medium text-[#EDE574] underline">
              repairs
            </span>{" "}
            using high-quality parts. After a thorough{" "}
            <span className="font-medium text-[#EDE574] underline">
              quality check,
            </span>{" "}
            we’ll quickly{" "}
            <span className="font-medium text-[#EDE574] underline">
              ship back
            </span>{" "}
            your fully functional PS5 back to you so you can{" "}
            <span className="font-medium text-[#EDE574] underline">
              resume gaming{" "}
            </span>{" "}
            without delay.
          </p>
        </div>
      </div>
      <PS5RepairsSydney />
      <div id="staperformid">
        <StaperForm />
      </div>
      {/* <PS5ExpertRepair /> */}
      {/* <PS5Sydney /> */}
      <GoogleReviews />
      <AskusQuestion
        accordionData={accordionData}
        faq="Frequently Asked Questions (FAQs)
"
      />
    </div>
  );
};

export default PS5Repair;
