import React from "react";
import PS5Banner from "./PS5Banner";
import MainHeading from "@/components/ManinHeading/MainHeading";
import MainTitle from "@/components/MainTitle/MainTitle";
import PS5RepairsSydney from "./PS5RepairsSydney";
import PS5ExpertRepair from "./PS5ExpertRepair";

import AskusQuestion from "@/components/AskusQuestion/AskusQuestion";
import PS5Sydney from "./PS5Sydney";
import dynamic from "next/dynamic";
import BiginnerReviews from "@/components/GoogleReviews/BiginnerReviews";
import rname from "../../../public/Images/icons/rname.png";
import jname from "../../../public/Images/icons/E.png";
import Nname from "../../../public/Images/icons/N.png";
import Sname from "../../../public/Images/icons/S.png";
import Aname from "../../../public/Images/icons/A.png";
import hname from "../../../public/Images/icons/h.png";
import Googletest from "../../../public/Images/icons/Googletest.svg";
const StaperForm = dynamic(() => import("../mail-in-repair/StaperForm"), {
  ssr: false,
});
const PS5Repair = () => {
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
      <div className="md:py-10 py-8">
        <div className=" container text-prc">
          <MainHeading Heading="How Mail-In PS5 Repair Works?" color="var(--prc) " svg_stroke="var(--alpha)" />
          <p className="lg:w-[60%] md:w-[80%] w-full m-auto text-center text-prc">
            Simply package your PS5 securely and{" "}
            <span className="font-medium text-alpha underline">ship</span>{" "}
            it to us. Once we{" "}
            <span className="font-medium text-alpha underline">
              receive
            </span>{" "}
            your console, our expert technicians will{" "}
            <span className="font-medium text-alpha underline">
              diagnose
            </span>{" "}
            the issue and carry out the necessary{" "}
            <span className="font-medium text-alpha underline">
              repairs
            </span>{" "}
            using high-quality parts. After a thorough{" "}
            <span className="font-medium text-alpha underline">
              quality check,
            </span>{" "}
            we’ll quickly{" "}
            <span className="font-medium text-alpha underline">
              ship back
            </span>{" "}
            your fully functional PS5 back to you so you can{" "}
            <span className="font-medium text-alpha underline">
              resume gaming{" "}
            </span>{" "}without delay.
          </p>
        </div>
      </div>
      <PS5RepairsSydney />
      <div id="staperformid">
        <StaperForm />
      </div>
      {/* <PS5ExpertRepair /> */}
      {/* <PS5Sydney /> */}
    <BiginnerReviews reviews={reviewsData}  googletitle="Our Google Review"/>
      <AskusQuestion
        accordionData={accordionData}
        faq="Frequently Asked Questions (FAQs)
"
      />
    </div>
  );
};

export default PS5Repair;
