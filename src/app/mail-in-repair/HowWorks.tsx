"use client"; // Add this at the top to mark this as a client component
import MainTitle from '@/components/MainTitle/MainTitle';
import MainHeading from '@/components/ManinHeading/MainHeading';
import React from 'react';
import Link from 'next/link';

const HowWorks = () => {
  const steps = [
    {
      title: 'Review Our Pricing',
      content:
        'Check out our Price List for no-fix, no-fee pricing on common logic board issues. If your issue isn’t listed, contact us for a custom quote. Please note, a $66 service fee is charged for any device that has undergone a previous repair attempt by another technician, whether or not we’re able to fix the device and it includes B2B repair.',
      button: 'View Pricing',
      link: '/price', // Add the correct link here
    },
    {
      title: 'Start Mail in Repair',
      content:
        'Click on "Start Repair" and provide details about your device and its issue, including its repair history (e.g., prior repairs, water damage). You’ll receive a quote and mailing instructions within 24 hours.',
      button: 'Mail in Repair',
      link: '/mail-in-repair', // Add the correct link here
    },
    {
      title: 'For Immediate Help Call Directly',
      content:
        'For immediate assistance with your mobile repair needs, call us directly. Our team is ready to guide you through the mail-in phone repairs process and get your device fixed fast.',
      button: 'Call Me',
      link: 'tel:+0455777077', // Add the correct link here
    },
    {
      title: 'Post Phone for Repair',
      content:
        'Once your repair is pre-approved, follow the Mailing Instructions to ship your device to us.',
      button: 'Shipping Information',
      link: '/Shipping_Policy', // Add the correct link here
    },
    {
      title: 'Device Intake and Repair',
      content:
        'Upon receiving your device, we’ll send an automated confirmation email and place your device in the repair queue. If we have questions or updates during the repair, we’ll notify you via email. Otherwise, you’ll receive a notification once your device is fixed.',
      link: '/repair-status', // Add the correct link here
    },
    {
      title: 'Payment & Return',
      content:
        'After your device is repaired, we’ll send an invoice with a secure payment link (via PayPal or credit card). Once payment is complete, we’ll ship your device back to you with tracking information to follow its return journey.',
      link: '/payment-return', // Add the correct link here
    },
  ];

  const hoverGradients = [
    'linear-gradient(74deg, #56c1c1, #000000)',
    'linear-gradient(74deg, #f35520c0, #000000)',
    'linear-gradient(74deg, #d5fd33a1, #000000)',
    'linear-gradient(74deg, #cf2362a7, #000000)',
    'linear-gradient(74deg, #2052e8a5, #000000)',
  ];

  return (
    <div className="py-5">
      <div className="container">
        <div>
          <MainHeading Heading="How Mail in Phone Repair Service Work?" />
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 2xl:gap-5 xl:gap-4 gap-3 my-4">
          {steps.map((step, index) => (
            <div
              key={index}
              className="p-4 bg-gray-800 rounded-md shadow-lg text-white transition-all duration-300 border-[1px] border-[#5b5b5b99] flex flex-col justify-between"
              style={{ cursor: 'pointer' }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = hoverGradients[index % hoverGradients.length];
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = '#1f1f1f';
              }}
            >
              <h3 className="text-lg font-bold mb-2">{step.title}</h3>
              <p className="text-sm">{step.content}</p>
              <Link href={step.link}>
                {step.button && (
                  <button className="text-[13px] font-semibold tracking-[2px] uppercase py-[10px] px-[10px] rounded-[50px] border-[1px] w-fit transition duration-300 ease-in-out transform hover:scale-105">
                    {step.button}
                  </button>
                )}
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default HowWorks;
