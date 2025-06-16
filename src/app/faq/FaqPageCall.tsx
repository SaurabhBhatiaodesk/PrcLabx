"use client"
import React from 'react'

import Breadcrumb from '@/components/Breadcrumb/Breadcrumb'
import Faqinner from './Faqinner'

import YouTubeHome from '@/components/HomeCpmponents/YouTubeHome/YouTubeHome';
// import { title } from 'process';
// import { Content } from 'next/font/google';
import "./Faq.css"
import FixLabx from '@/components/HomeCpmponents/FixLabx/FixLabx';
import TabFaq from './TabFaq';
import BiginnerReviews from '@/components/GoogleReviews/BiginnerReviews';

import rname from "../../../public/Images/icons/rname.png";
import jname from "../../../public/Images/icons/E.png";
import Nname from "../../../public/Images/icons/N.png";
import Sname from "../../../public/Images/icons/S.png";
import Aname from "../../../public/Images/icons/A.png";
import hname from "../../../public/Images/icons/h.png";
import Googletest from "../../../public/Images/icons/Googletest.svg";
const FaqPageCall = () => {
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
  const faqData = [
    {
      category: 'General ',
      accordionData: [
        {
          title: '1. What types of devices do you repair?',
          content: 'We repair a wide range of mobile devices, including iPhones, Android phones, tablets, and MacBooks. We specialize in logic board repairs, microsoldering, and screen refurbishments.',
        },
        {
          title: '2. What types of repairs do you specialize in?',
          content: 'Our expertise includes screen replacement, motherboard repairs, data recovery, and micro soldering. We also handle complex repairs like Face ID issues and water damage recovery.',
        },
        {
          title: '3. Do you offer any warranties on your repairs?',
          content: 'Yes, all repairs come with a  1 Year warranty on parts and workmanship. This ensures that if the same issue reoccurs, we will repair it free of charge, provided no further damage has occurred to the device.',
        },
        {
          title: '4. What is the warranty on liquid-damaged devices?',
          content: 'We do not recommend repairing liquid-damaged devices and suggest only data recovery services. If the customer insists on repair, we do not provide any warranty, including for the replaced parts.',
        },
        {
          title: '5. Will all functions work on my dead device after repair?',
          content: 'No guarantees can be made. The initial quote covers the visible issue, e.g., turning on a dead device. Since devices have numerous functions, issues like a non-working camera or mic will require a separate quote unless the fault is minor, in which case we’ll address it during the repair. Major issues will need re-quoting.',
        },

      ],
    },
    {
      category: 'Screen Refurbishing ',
      accordionData: [
        {
          title: '1. What is the difference between screen replacement and screen refurbishing?',
          content: 'Screen replacement involves replacing the entire screen, while screen refurbishing means restoring the damaged screen using advanced techniques like OCA laminating and polarizer replacement. Refurbishing is a more cost-effective and eco-friendly option.',
        },
        {
          title: ' 2. What is the turnaround time for screen refurbishing?',
          content: 'For individual repairs, the average turnaround time is 2–3 days. For bulk orders or B2B clients, the time may vary depending on the volume, but we aim to complete bulk refurbishments within 5–7 days.',
        },
        {
          title: ' 3. Do you provide a grading system for refurbished screens?',
          content: 'Yes, we offer fair and transparent grading. If a screen is downgraded to a lower grade (e.g., from A to B), we will provide photos and a detailed explanation for why it was downgraded.',
        },

      ],

    },
    {
      category: 'Data Recovery ',
      accordionData: [
        {
          title: '1.Can you recover data from a phone that doesn’t turn on?',
          content: 'Yes! Even if your phone is dead, we can temporarily power on the device using advanced techniques to recover your data. However, no other functionality of the device will be restored, and the phone may remain unusable.',
        },
        {
          title: ' 2. Do I need to provide my password for data recovery?',
          content: 'Yes, providing the correct password is crucial for us to access and recover your data. If the wrong password is provided, the full recovery fee will still apply, as we would have restored your phone’s functionality.',
        },
        {
          title: ' 3. What types of data can you recover?',
          content: 'We can recover photos, videos, contacts,  from devices that have suffered water damage, physical damage, or OS corruption. However, we cannot recover data that has already been deleted or if the storage is fully corrupted.',
        },
        {
          title: ' 4. What if I forget my password or give the wrong password?',
          content: 'If you provide the wrong password or cannot remember your password, the full data recovery fee will still apply because our effort to power up and fix the device will have already been made. Please make sure to double-check your password before submitting your device.',
        },

      ],

    },
    {
      category: 'Repair Process ',
      accordionData: [
        {
          title: '1. How does the mail-in repair process work?',
          content: 'Simply start by clicking "Start Repair" on our website and provide details about the issue. After receiving a pre-approved quote, you will mail the device to us. We’ll update you throughout the process, and once the repair is done, we’ll ship it back to you with a tracking number.',
        },
        {
          title: '2. Is there a service fee if my device has been repaired elsewhere?',
          content: 'Yes, we charge a $66 service fee for devices that have had previous repair attempts, even if we cannot fix the device. This is because additional work is often required due to previous attempts.',
        },
        {
          title: '3. How long does it take to repair my device?',
          content: 'Most repairs take between 1–3 days depending on the complexity of the issue. More complex repairs like motherboard micro soldering may take up to 5 days. Bulk and B2B orders will have separate timeframes.',
        },

      ],
    },
    {
      category: 'B2B Service ',
      accordionData: [
        {
          title: '1. Do you offer special pricing for businesses?',
          content: 'Our pricing is already highly competitive, so we do not offer additional discounts for businesses on regular repairs. However, we welcome all businesses to send their repairs if they need our services.',
        },
        {
          title: '2. What about screen refurbishing for B2B clients?',
          content: 'We prefer to handle screen refurbishing for B2B clients only. If you are a business needing bulk screen refurbishment, we are fully equipped to meet your needs with high-quality and fast turnaround times.',
        },
        {
          title: '3.How do I sign up for B2B services?',
          content: 'Click on “Apply for Business Account” on our website and fill out the necessary details. Once your account is approved by our admin, you’ll have access to wholesale pricing and special features.',
        },
        {
          title: '4. What are the benefits of B2B partnerships with LabX?',
          content: 'Our B2B clients receive competitive pricing, faster turnaround times, and custom solutions to fit their business needs. We also offer repair tracking and automated updates to keep you informed.',
        },

      ],
    },
    {
      category: 'Shipping & Returns ',
      accordionData: [
        {
          title: '1. How do I ship my device for repair?',
          content: 'Once your repair is pre-approved, follow our Mailing Instructions provided via email. Make sure to securely package your device and ship it to the address given.',
        },
        {
          title: '2. Do you offer return shipping?',
          content: 'Yes, once the repair is complete, we will ship the device back to you using tracked delivery services. You’ll receive a tracking number to monitor the return journey.',
        },
        {
          title: '3. How does the mail-in repair process work?',
          content: 'Start by clicking "Start Repair" on our website and provide details about the issue. After receiving a pre-approved quote, you will mail the device to us. We’ll update you throughout the process, and once the repair is done, we’ll ship it back with a tracking number.',
        },
        {
          title: '4. What are the benefits of B2B partnerships with LabX?',
          content: 'Our B2B clients receive competitive pricing, faster turnaround times, and custom solutions to fit their business needs. We also offer repair tracking and automated updates to keep you informed.',
        },

      ],
    },
    {
      category: 'Payment & Pricing ',
      accordionData: [
        {
          title: '1. How do I pay for my repair?',
          content: 'Once the repair is complete, we will send you an invoice. You can pay via PayPal or credit card. For B2B clients, we also offer monthly billing options for bulk services.',
        },
        {
          title: '2. What is your pricing for repairs?',
          content: 'Pricing depends on the type of repair and device. Visit our Price List page for standard pricing. If your device requires a custom repair, we will provide a quote within 24 hours of your request',
        },


      ],
    },
    {
      category: 'Transparency ',
      accordionData: [
        {
          title: '1. How do I know the status of my repair?',
          content: 'We provide real-time updates via email throughout the repair process. If any additional issues are found, we’ll notify you with details and ask for approval before proceeding.',
        },
        {
          title: '2. Do you provide evidence for any downgraded parts or failed repairs?',
          content: 'Yes, we are fully transparent with our processes. If a part is downgraded or we encounter an issue, we will send photos and detailed reports to explain the situation.',
        },


      ],
    },
  ];



  return (
    <div>
      <Breadcrumb
        pageName="Frequently Asked Questions"
        pageDescription=""
        backgroundImage="/Images/BannerImages/about.png"
        AdminImage="/Images/faq.svg"
        link="/contact-us"
        buttonname="Request a Quote"
      />
      <div className=' hidden lg:block'>
        <Faqinner heading="Frequently Asked Questions" categories={faqData} />
      </div>

      <div className='block lg:hidden'>
        <TabFaq />
      </div>

      <FixLabx />


      <YouTubeHome />
    <BiginnerReviews reviews={reviewsData}  googletitle="Our Google Review"/>

    </div>
  )
}

export default FaqPageCall