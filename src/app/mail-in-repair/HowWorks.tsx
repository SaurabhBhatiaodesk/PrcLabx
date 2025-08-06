"use client";
import MainHeading from "../../components/ManinHeading/MainHeading";
import React from "react";
import Link from "next/link";
import { IoIosArrowRoundForward } from "react-icons/io";

const HowWorks = () => {
  const steps = [
    {
      title: "Review Our Pricing",
      content:
        "Check out our Price List for no-fix, no-fee pricing on common logic board issues. If your issue isn’t listed, contact us for a custom quote.",
      button: "View Pricing",
      link: "/price",
    },
    {
      title: "Start Mail in Repair",
      content:
        'Click on "Start Repair" and provide details about your device. You’ll receive a quote and mailing instructions within 24 hours.',
      button: "Mail in Repair",
    },
    {
      title: "For Immediate Help Call Directly",
      content:
        "For immediate assistance, call us directly. We’re ready to help.",
      button: "Call Me",
      link: "tel:+0455777077",
    },
    {
      title: "Post Phone for Repair",
      content:
        "After approval, follow the Mailing Instructions to ship your device.",
      button: "Shipping Information",
      link: "/Shipping-Policy",
    },
    {
      title: "Device Intake and Repair",
      content:
        "You’ll be notified when we receive your device and once it's repaired.",
      link: "/repair-status",
    },
    {
      title: "Payment & Return",
      content:
        "After repair, we’ll send you an invoice. Once paid, we’ll ship your device back.",
      link: "/payment-return",
    },
  ];

  // ✅ Scroll to element with id="stapergk"
  const handleMailRepairClick = () => {
    const target = document.getElementById("stapergk");
    if (target) {
      target.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="py-5">
      <div className="container">
        <MainHeading
          Heading="How Mail in Phone Repair Service Work?"
          svg_stroke="var(--alpha)"
          color="var(--prc)"
        />

        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 2xl:gap-5 xl:gap-4 gap-3 my-4 text-black">
          {steps.map((step, index) => (
            <div
              key={index}
              className="p-4 !bg-primary rounded-md shadow-lg text-secondary transition-all duration-300 border-[1px] border-[#5b5b5b99] flex flex-col  group hover:text-white"
              style={{ cursor: "pointer" }}
            >
              <h3 className="text-lg font-bold mb-2 text-prc">{step.title}</h3>
              <p className="text-sm text-secondary">{step.content}</p>

              {step.button ? (
                step.button === "Mail in Repair" ? (
                  // <button onClick={handleMailRepairClick}>
                  //   <MainButton MainButton={step.button} color="bg-prc" />
                  // </button>

                  <button className=" flex justify-start items-center text-prc text-[15px]" onClick={handleMailRepairClick}>{step.button}
                    <IoIosArrowRoundForward fontSize={25} />
                  </button>

                ) : (
                  <Link href={step.link ?? "#"}>
                    <button className=" flex justify-start items-center text-prc text-[15px]" >{step.button}
                      <IoIosArrowRoundForward fontSize={25} />
                    </button>
                  </Link>
                )
              ) : null}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default HowWorks;
