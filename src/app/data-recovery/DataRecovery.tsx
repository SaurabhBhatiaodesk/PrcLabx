import Breadcrumb from "@/components/Breadcrumb/Breadcrumb";
import MainHeading from "@/components/ManinHeading/MainHeading";
import React from "react";

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

import pointer from "../../../public/Images/icons/pointing-right 1.svg";
import datarecoverytop from "../../../public/Images/Home/datarecoverytop.png";
import BoxComponents from "@/components/BoxComponents/BoxComponents";
import StaperForm from "../mail-in-repair/StaperForm";
import rname from "../../../public/Images/icons/rname.png";
import jname from "../../../public/Images/icons/E.png";
import Nname from "../../../public/Images/icons/N.png";
import Sname from "../../../public/Images/icons/S.png";
import Aname from "../../../public/Images/icons/A.png";
import hname from "../../../public/Images/icons/h.png";
import Googletest from "../../../public/Images/icons/Googletest.svg";
import BiginnerReviews from "@/components/GoogleReviews/BiginnerReviews";
const DataRecovery = () => {
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
  const sectionData = [
    {
      image: PhotosandVideos,
      alt: "Repairs",
      title: `Photos and 
Videos`,
      
    },
    {
      image: ContactsandMessages,
      alt: "Transparency",
      title: "Contacts and Messages",
     
    },
    {
      image: emaildocument,
      alt: "Recovery",
      title: "Document Files",
    
    },
    {
      image: PhysicallyDamagedDevices,
      alt: "B2B Services",
      title: "Data from Physically Damaged Devices",
     
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
          pageName="Data Recovery Services - PRCRepair"
          pageDescription="At <strong> PRCRepair,</strong> we specialize in professional data recovery services for mobile phones, tablets, MacBooks, laptops, and more. Whether you’ve experienced hardware failure on device, or need to recover vital information from a damaged device, our skilled technicians are here to help."
          backgroundImage="/Images/BannerImages/mailinrepair.png"
          AdminImage="/Images/Data Recovery side.png"
          link="/price"
          buttonname="View Pricing"
        />
      </div>

      <section >
        <BoxComponents
          heading="Why Choose PRC for Data Recovery?"
          title="The only path to data recovery is getting the phone to work again. We bring phones back from the dead every day. There is no manual, no instruction book, for what we do. We are the motherboard whisperers."
          image={datarecoverytop} // Now correctly typed
          features={features}
        />
        <div className="container py-4 xl:py-6">
          <MainHeading Heading="What We Can Recover" color="var(--prc)" svg_stroke="var(--alpha)" />

          <BoxIconComponents data={sectionData} />
          <IconTitleParaImage
            heading="Our Data Recovery Process"
            title=""
            points={dataRecoveryPoints}
            // buttonLabel="READ MORE"
            // buttonLink="/data-recovery"
            imageSrc={datarecoverychip.src}
          />
        </div>
        <DataImportantNote />
      </section>
      <StaperForm />
      <DataStarted />

      <BiginnerReviews reviews={reviewsData} googletitle="Our Google Review" />
    </>
  );
};

export default DataRecovery;
