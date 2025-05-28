import Breadcrumb from "@/components/Breadcrumb/Breadcrumb";
import MainHeading from "@/components/ManinHeading/MainHeading";
import React from "react";
import GoogleReview from "@/components/GoogleReviews/GoogleReviews";
import MainTitle from "@/components/MainTitle/MainTitle";
import Image from "next/image";

import BoxIconComponents from "@/components/BoxIconComponents/BoxIconComponents";
import PhotosandVideos from "../../../public/Images/icons/PhotosandVideos.svg";

import datarecoverychip from "../../../public/Images/datarecoverychip.png";
import IconTitleParaImage from "@/components/IconTitleParaImage/IconTitleParaImage";
import DataImportantNote from "@/components/DataImportantNote/DataImportantNote";
import DataStarted from "./DataStarted";
import ContactsandMessages from "../../../public/Images/icons/Contacts and Messages.svg";
import emaildocument from "../../../public/Images/icons/emaildocument.svg";
import PhysicallyDamagedDevices from "../../../public/Images/icons/Data from Physically Damaged Devices.svg";

import pointer from "../../../public/Images/icons/pointing-right.svg";
import datarecoverytop from "../../../public/Images/Home/datarecoverytop.png";
import BoxComponents from "@/components/BoxComponents/BoxComponents";
import StaperForm from "../mail-in-repair/StaperForm";
const DataRecovery = () => {
  const sectionData = [
    {
      image: PhotosandVideos,
      alt: "Repairs",
      title: `Photos and 
Videos`,
      hoverBackground:
        "linear-gradient(74deg, rgb(86, 193, 193), rgb(0, 0, 0))",
    },
    {
      image: ContactsandMessages,
      alt: "Transparency",
      title: "Contacts and Messages",
      hoverBackground:
        "linear-gradient(74deg, rgba(243, 85, 32, 0.753), rgb(0, 0, 0))",
    },
    {
      image: emaildocument,
      alt: "Recovery",
      title: "Document Files",
      hoverBackground:
        "linear-gradient(74deg, rgba(213, 253, 51, 0.63), rgb(0, 0, 0))",
    },
    {
      image: PhysicallyDamagedDevices,
      alt: "B2B Services",
      title: "Data from Physically Damaged Devices",
      hoverBackground:
        "linear-gradient(74deg, rgba(207, 35, 98, 0.655), rgb(0, 0, 0))",
    },
  ];
  const dataRecoveryPoints = [
    {
      title: "Initial Assessment: ",
      description:
        "We evaluate the device to understand the extent of the damage and the likelihood of data recovery.",
    },
    {
      title: "Pre-Approval and Quotation:",
      description:
        " Based on our assessment, we provide a clear, upfront quote for the recovery process.",
    },
    {
      title: "Recovery: ",
      description:
        "Using state-of-the-art equipment, we attempt to extract and restore your data.",
    },
    {
      title: "Verification: ",
      description:
        "Recovered data is verified for accuracy and integrity before being returned to you.",
    },
    {
      title: "Delivery: ",
      description:
        "Data is transferred back to you via your preferred method, whether on a new device or external storage.",
    },
  ];

  // box components 1
  const features = [
    {
      icon: pointer,
      title: "Expertise in Complex Cases:",
      description:
        "From water-damaged devices to dead motherboards, we tackle the most challenging recovery scenarios.",
    },
    {
      icon: pointer,
      title: "Cutting-Edge Technology:",
      description:
        "Utilizing advanced tools and techniques, we maximize the chances of retrieving your valuable data.",
    },
    {
      icon: pointer,
      title: "Professional Service:",
      description:
        "All recovery services are handled with strict confidentiality and care to ensure your data remains secure.",
    },
  ];
  const ScenariosHandle = [
    {
      icon: pointer,
      title: "Water Damage:",
      description:
        " Quick recovery from devices exposed to liquid spills or submersion.",
    },
    {
      icon: pointer,
      title: "Impact Damage: ",
      description: "Devices dropped or damaged due to external force.",
    },
    {
      icon: pointer,
      title: "Failed Software Updates:",
      description: "Data recovery from bricked devices after failed updates.",
    },
  ];
  return (
    <>
      <div className="strongtx">
        <Breadcrumb
          pageName="Data Recovery Services - LabXRepair"
          pageDescription="At <strong> LabXRepair,</strong> we specialize in professional data recovery services for mobile phones, tablets, MacBooks, laptops, and more. Whether you’ve experienced hardware failure on device, or need to recover vital information from a damaged device, our skilled technicians are here to help."
          backgroundImage="/Images/BannerImages/mailinrepair.png"
          AdminImage="/Images/Data Recovery side.png"
          link="/price"
          buttonname="View Pricing"
        />
      </div>

      <section style={{ background: "#0B0B0B" }}>
        <BoxComponents
          heading="Why Choose LabX for Data Recovery?"
          title="The only path to data recovery is getting the phone to work again. We bring phones back from the dead every day. There is no manual, no instruction book, for what we do. We are the motherboard whisperers."
          image={datarecoverytop} // Now correctly typed
          features={features}
        />
        <div className="container py-4 xl:py-6">
          <MainHeading Heading="What We Can Recover" />

          <BoxIconComponents data={sectionData} />
          <IconTitleParaImage
            heading="Our Data Recovery Process
"
            title=""
            points={dataRecoveryPoints}
            // buttonLabel="READ MORE"
            // buttonLink="/data-recovery"
            imageSrc={datarecoverychip.src}
          />
        </div>
        <DataImportantNote />
      </section>
      <StaperForm/>
      <DataStarted />

      <GoogleReview />
    </>
  );
};

export default DataRecovery;
