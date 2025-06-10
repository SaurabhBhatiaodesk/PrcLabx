"use client";
import React from "react";
import Breadcrumb from "@/components/Breadcrumb/Breadcrumb";
import Image from "next/image";
import ExpertB2BDisplayRefurbishing from "../../../public/Images/icons/Expert B2B Display Refurbishing.svg";
import StateoftheArtTechnology from "../../../public/Images/icons/State-of-the-Art Technology.svg";
import FairandTransparentGrading from "../../../public/Images/icons/Fair and Transparent Grading.svg";
import FastTurnaroundTime from "../../../public/Images/icons/Fast Turnaround Time.svg";
import vectorprc from "../../../public/Images/Vector-prc.png"
// import Quality from "../../../public/Images/quality.svg";
import Glass from "../../../public/Images/glass.webp";
import Glass2 from "../../../public/Images/glass2.webp";
import Machine from "../../../public/Images/machine.svg";
import Icon from "../../../public/Images/liststyle.svg";
import Screen from "../../../public/Images/screen.svg";
import Small from "../../../public/Images/small.svg";
import Saprate from "../../../public/Images/saprate.svg";
import OCA from "../../../public/Images/oca.svg";
import Test from "../../../public/Images/test.svg";
import YouTubeHome from "@/components/HomeCpmponents/YouTubeHome/YouTubeHome";
import GoogleReview from "@/components/GoogleReviews/GoogleReviews";
import Line from "../../../public/Images/about/leap.svg";
import "./screen.css";
import MainHeading from "@/components/ManinHeading/MainHeading";
import MainTitle from "@/components/MainTitle/MainTitle";
import Link from "next/link";
import EcoFriendlyPractices from "../../../public/Images/Eco-Friendly Practices.png";
import MainButton from "@/components/MainButton/MainButton";
import MobileBrandName from "@/components/MobileBrandName";

const Page = () => {
  return (
    <>
      <div>
        <div className="strongtx">
          <Breadcrumb
            pageName="Professional Screen Refurbishment Services"
            pageDescription={`At PRCRepair, we specialize in <strong>professional screen refurbishment</strong> for mobile phones, tablets, and other devices. Our advanced techniques and state-of-the-art equipment allow us to restore damaged screens to their original condition, saving both time and money compared to full screen replacements.`}
            backgroundImage="/Images/BannerImages/price.png"
            AdminImage="/Images/screen-refurbishing.png"
            link="/price"
            buttonname="View Pricing"
          />
        </div>

        <div className="flex justify-center flex-col max-container lg:py-5">
          <MainHeading Heading="Why Choose Screen Refurbishment?" svg_stroke="var(--prc)" />
          <p>
            Screen refurbishment is an eco-friendly and cost-effective
            alternative to replacing an entire display assembly. Instead of
            disposing of cracked or scratched screens, we repair and restore
            them to like-new condition, ensuring high-quality results without
            compromising on functionality.
          </p>
        </div>

        <section>
          <div className="container">
            <div className="grid xl:grid-cols-2 lg:grid-cols-2 grid-cols-1 gap-8 lg:py-5 py-3 items-center">
              <div>
                <Image src={Glass} alt=" PRC repair " />
              </div>
              <div className="glass__description">
                <h2 className="xl:text-[32px] lg:text-[28px] md:text-[24px] text-[20px]">Benefits of Working with PRCRepair</h2>

                <div className="list__glass">
                  <div className="flex items-center gap-2">
                    <div className="flex gap-2">
                      <div className="min-w-[30px] flex items-start justify-start ">
                        <Image src={vectorprc} alt="" width={1000} height={300} className="w-[27px]" />
                      </div>
                      <div>
                        <strong className="text-prc">
                          Fair Grading System:{" "}
                        </strong>{" "}

                        Fair Grading System: We provide transparent grading with
                        detailed photos for B-grade or rejected screens, ensuring
                        trust and reliability.
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="flex gap-2">
                      <div className="min-w-[30px] flex items-start justify-start ">
                        <Image src={vectorprc} alt="" width={1000} height={300} className="w-[27px]" />
                      </div>
                      <div>
                        <strong className="text-prc">
                          Expertise You Can Trust:{" "}
                        </strong>{" "}
                        Our technicians are highly trained in advanced
                        refurbishment techniques, offering consistent,
                        high-quality results.
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="flex gap-2">
                      <div className="min-w-[30px] flex items-start justify-start ">
                        <Image src={vectorprc} alt="" width={1000} height={300} className="w-[27px]" />
                      </div>
                      <div>
                        <strong className="text-prc">
                          Quick Turnaround:{" "}
                        </strong>{" "}
                        We understand the importance of time in your business.
                        That’s why we aim to complete refurbishment services as
                        quickly as possible without compromising quality.
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="flex gap-2">
                      <div className="min-w-[30px] flex items-start justify-start ">
                        <Image src={vectorprc} alt="" width={1000} height={300} className="w-[27px]" />
                      </div>
                      <div>
                        <strong className="text-prc">B2B Solutions:</strong>{" "}
                        Whether you’re a retailer or repair shop, our screen
                        refurbishment services are tailored for
                        business-to-business clients who require bulk repairs with
                        exceptional quality and efficiency.
                      </div>

                    </div>
                  </div>

                  {/* <p className="flex items-center gap-2">
                  <span>
                    <Image src={Icon} alt=" PRC repair " />
                  </span>
                  All buttons and sensors work properly.
                </p> */}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/*  */}
        <div className="bg__shade relative pt-12 pb-12 bg-no-repeat" style={{ background: "radial-gradient(circle, rgb(118 164 156) -41%, rgb(3, 9, 11) 56%)" }}>
          <div className="container text-center ">
            <div className="pb-5">
              <MainHeading Heading="Get your phone back faster than replacement" color="var(--primary)" svg_stroke="var(--alpha)" />
              <MainTitle Title="When your phone is damaged, sometimes only the front glass needs to be replaced as long as the screen and touch function working properly." color="var(--primary)" />
            </div>
            <div className="grid grid-cols-1 main__box_section xl:grid-cols-4 lg:grid-cols-2 gap-2">
              <div className="front__box">
                <Image
                  className="w-[80px]"
                  src={ExpertB2BDisplayRefurbishing}
                  alt=" PRC repair "
                />
                <h3 className="!text-primary">Expert B2B Display Refurbishing</h3>
                <p className="text-primary">
                  At PRC, we specialize in glass only repair for phone,
                  offering high-quality, cost-effective solutions to repair
                  shops, retailers, and wholesalers.
                </p>
              </div>
              <div className="front__box">
                <Image
                  className="w-[80px]"
                  src={StateoftheArtTechnology}
                  alt=" PRC repair "
                />
                <h3 className="!text-primary">State-of-the-Art Technology</h3>
                <p className="text-primary">
                  We use the latest equipment and techniques to restore damaged
                  or defective screens, ensuring they meet factory standards.
                </p>
              </div>
              <div className="front__box">
                <Image
                  className="w-[80px]"
                  src={FairandTransparentGrading}
                  alt=" PRC repair "
                />
                <h3 className="!text-primary">Fair and Transparent Grading</h3>
                <p className="text-primary">
                  We provide a clear and honest grading system. If a screen is
                  rejected or downgraded to a B grade, we will provide a
                  detailed explanation along with photos as proof.
                </p>
              </div>
              <div className="front__box">
                <Image className="w-[80px]" src={FastTurnaroundTime} alt=" PRC repair " />
                <h3 className="!text-primary">Fast Turnaround Time</h3>
                <p className="text-primary">
                  We understand the urgency of business needs, which is why we
                  offer quick and efficient refurbishing or screen repair
                  service without compromising quality.
                </p>
              </div>
            </div>
          </div>
        </div>
        <MobileBrandName />
        <div className="container pt-8 mt-5 pb-8">
          <div className="grid xl:grid-cols-2 lg:grid-cols-2 grid-cols-1 gap-8 lg:py-5 py-3 items-center">
            <div className="glass__description">
              <MainHeading Heading="Why Refurbish Instead of Screen Replacement?" svg_stroke="var(--alpha)" />
              {/* <p>
                In most cases, we can only replace the glass / touch screen
                digitizer after phone damage.
              </p> */}
              <div className="list__glass">
                <p className="flex items-center gap-2">
                  <span>
                    <Image src={vectorprc} alt=" PRC repair " />
                  </span>
                  Retain original brightness, clarity, and color accuracy
                </p>
                <p className="flex items-center gap-2">
                  <span>
                    <Image src={vectorprc} alt=" PRC repair " />
                  </span>
                  Refurbishment is more affordable than full replacement
                </p>
                <p className="flex items-center gap-2">
                  <span>
                    <Image src={vectorprc} alt=" PRC repair " />
                  </span>
                  Get your phone back faster than replacement
                </p>
                <p className="flex items-center gap-2">
                  <span>
                    <Image src={vectorprc} alt=" PRC repair " />
                  </span>
                  Reduces electronic waste for a sustainable choice
                </p>
                <p className="flex items-center gap-2">
                  <span>
                    <Image src={vectorprc} alt=" PRC repair " />
                  </span>
                  Ideal for scratches or small cracks without replacement
                </p>
                {/* <p className="flex items-center gap-2">
                  <span>
                    <Image src={Icon} alt=" PRC repair " />
                  </span>
                  All buttons and sensors work properly.
                </p> */}
              </div>
            </div>
            <div>
              <Image src={Glass2} alt=" PRC repair " />
            </div>
          </div>
        </div>
        <div className="relative bg-[#EFF7FF]">
          <div className="p-8">
            <MainHeading Heading="Our Refurbishment Process" color="var(--secondary)" svg_stroke="var(--alpha)" />
            <div className="grid xl:grid-cols-3  lg:grid-cols-3 grid-cols-1  pt-8 mt-5 relative gap-5">
              <div className=" flex flex-col text-center justify-center items-center ">
                <Image src={Screen} alt=" PRC repair " />
                <h4 className="2xl:text-2xl lg:text-xl text-lg text-prc font-semibold py-2">Assessment</h4>
                <p className="lg:w-[75%] 2xl:w-[50%] w-full text-secondary">
                  {
                    " Each screen undergoes a detailed inspection to determine the level of damage and feasibility of refurbishment."
                  }
                </p>
              </div>
              <div className=" flex flex-col text-center justify-center items-center ">
                <Image src={Small} alt=" PRC repair " />
                <h4 className="2xl:text-2xl lg:text-xl text-lg  text-prc font-semibold py-2">Lamination and Separation</h4>
                <p className="lg:w-[75%] 2xl:w-[50%] w-full text-secondary">
                  {
                    "Using cutting-edge machinery, we separate the broken glass from the LCD while preserving the display's integrity."
                  }
                </p>
              </div>
              <div className=" flex flex-col text-center justify-center items-center ">
                <Image src={Saprate} alt=" PRC repair " />
                <h4 className="2xl:text-2xl lg:text-xl text-lg  text-prc font-semibold py-2">Cleaning and Polishing</h4>
                <p className="lg:w-[75%] 2xl:w-[50%] w-full text-secondary">
                  {
                    "The LCD is meticulously cleaned and polished to remove any adhesive residue or surface imperfections."
                  }
                </p>
              </div>

            </div>

            <div className="grid__processs_section process__section pt-8 mt-5 relative gap-5 grid xl:grid-cols-[2fr_1fr_2fr]  lg:grid-cols-2 grid-cols-1">
              <div className=" flex flex-col text-center justify-center items-center ">
                <Image src={Test} alt=" PRC repair " />
                <h4 className="2xl:text-2xl lg:text-xl text-lg  text-prc font-semibold py-2" >Final Testing</h4>
                <p className="lg:w-[75%] 2xl:w-[50%] w-full text-secondary">
                  {
                    " Every refurbished screen is thoroughly tested for touch sensitivity, brightness, and display quality before it is sent back to you."
                  }
                </p>
              </div>
              <div className="hidden lg:block"></div>

              <div className=" flex flex-col text-center justify-center items-center ">
                <Image src={OCA} alt=" PRC repair " />
                <h4 className="2xl:text-2xl lg:text-xl text-lg  text-prc font-semibold py-2">Glass Replacement</h4>
                <p className="lg:w-[75%] 2xl:w-[50%] w-full text-secondary">
                  {
                    "We use high-quality, durable glass to replace the broken layer, ensuring a flawless finish."
                  }
                </p>
              </div>


            </div>
          </div>
        </div>

        <div className="relative  bg-primary">
          <div className="container">
            <div className="grid xl:grid-cols-[3fr_2fr] lg:grid-cols-2 grid-cols-1 gap-8 lg:py-5 py-3 items-center">
              <div className="glass__description">
                <MainHeading Heading="Advanced Technology & Equipment for Premium Mobile Phone Refurbishment" color="var(--secondary)" svg_stroke="var(--secondary)" />
                {/* <MainTitle Title="At our service center, we use state-of-the-art equipment for mobile phone refurbishment to ensure precision, quality, and longevity in every repair. Our advanced tools allow us to address scratches, cracks, and other screen imperfections with exceptional accuracy, restoring your device to its original clarity and responsiveness." color="var(--primary)" />
                <MainTitle Title="By investing in top-tier technology, we not only provide superior results but also minimize the time needed for each screen refurbishment. This commitment to high-quality equipment ensures that every refurbished phone looks and functions like new, giving our customers a premium, reliable service experience." color="var(--primary)" /> */}


                <p className="text-secondary">
                  {
                    "At our service center, we use state-of-the-art equipment for mobile phone refurbishment to ensure precision, quality, and longevity in every repair. Our advanced tools allow us to address scratches, cracks, and other screen imperfections with exceptional accuracy, restoring your device to its original clarity and responsiveness. "
                  }{" "}
                </p>
                <p className="text-secondary">
                  {
                    "By investing in top-tier technology, we not only provide superior results but also minimize the time needed for each screen refurbishment. This commitment to high-quality equipment ensures that every refurbished phone looks and functions like new, giving our customers a premium, reliable service experience."
                  }
                </p>

                <MainButton MainButton="START REPAIR" link="/mail-in-repair" color="bg-prc" />
              </div>
              <div className="text-center m-auto">
                <Image className="h-[300px] lg:h-auto object-contain " src={Machine} alt=" PRC repair " />
              </div>
            </div>
          </div>
        </div>

        <section className="container ">
          <div className="grid lg:grid-cols-2 grid-cols-1 gap-4  lg:p-8 p-4 items-center">
            <div>
              <Image src={EcoFriendlyPractices} alt=" PRC repair "></Image>
            </div>
            <div>
              <h2>Eco-Friendly Practices</h2>
              <Image
                height="500"
                width="500"
                src={Line.src}
                alt=" PRC repair "
                className="pb-3"
              />
              <p>
                By choosing refurbishment, you’re contributing to a{" "}
                <strong className="font-semibold text-[20px]">
                  greener planet.
                </strong>{" "}
                Refurbishing reduces electronic waste and minimizes the need for
                new manufacturing, helping to lower the carbon footprint of your
                business.
              </p>
            </div>
          </div>
        </section>
        <section className=" py-4">
          <div className=" text-center bg-secondary">
            {/* <MainHeading Heading="Start Your Refurbishment Today" /> */}
            <div className="container py-10">
              <p className="text-[#00BC9D] xl:text-[24px] lg:text-[20px] md:text-[18px] text-[16px]">
                Join hundreds of satisfied clients who trust PRCRepair for their
                screen refurbishment needs. Whether you have a single device or a
                bulk batch, we’re ready to help. Contact us today or submit your
                screens for refurbishment using our{" "}
                <Link
                  className=" text-tertiary font-semibold"
                  href="/mail-in-repair"
                >
                  {" "}
                  Mail-In Repair{" "}
                </Link>
                service!
              </p>
            </div>
          </div>
        </section>
      </div>
      <YouTubeHome />
      <GoogleReview />
    </>
  );
};

export default Page;
