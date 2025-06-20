import { useState } from "react";
import { MdKeyboardArrowDown } from "react-icons/md";
import { GrSubtract } from "react-icons/gr";
import { LuPlus } from "react-icons/lu";

const TabFaq = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const [activeAccordionIndex, setActiveAccordionIndex] = useState<number | null>(
    null
  );

  const handleToggle = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const handleAccordionToggle = (index: number) => {
    setActiveAccordionIndex(activeAccordionIndex === index ? null : index);
  };

  // Gradient colors for active state
  const gradientColors = [
    "linear-gradient(74deg, #56c1c1, #000000)",
    "linear-gradient(74deg, #f35520c0, #000000)",
    "linear-gradient(74deg, #d5fd33a1, #000000)",
    "linear-gradient(74deg, #A044FF, #000000)",
    "linear-gradient(74deg, #2052e8a5, #000000)",
    "linear-gradient(74deg, #56c1c1, #000000)",
    "linear-gradient(74deg, #c35520c0, #000000)",
    "linear-gradient(74deg, #2055e8a5, #000000)",
  ];

  // Function to get gradient color based on active tab index
  const getGradientColor = (index: number) => {
    return activeIndex === index
      ? gradientColors[index % gradientColors.length] // Select color for active tab
      : "transparent"; // Default transparent background for inactive tabs
  };

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
                title: '4. What are the benefits of B2B partnerships with PRC ?',
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
                title: '4. What are the benefits of B2B partnerships with PRC ?',
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
    <div className="container mx-auto p-[12px] mt-4">
      {faqData.map((categoryData, categoryIndex) => (
        <div key={categoryIndex} className="mb-4">
          <div
            className="flex justify-between items-center p-[12px] rounded-[10px] cursor-pointer border-[1px]"
            onClick={() => handleToggle(categoryIndex)}
            style={{
              background: getGradientColor(categoryIndex), // Set gradient color for active category
            }}
          >
            <span className="text-[17px] tracking-[1.5px] ">
              {categoryData.category}
            </span>
            <MdKeyboardArrowDown
              className={`transition-transform duration-300 ${
                activeIndex === categoryIndex ? "rotate-180" : ""
              }`}
            />
          </div>

          <div
            className={`overflow-hidden transition-max-height duration-500 ease-in-out ${
              activeIndex === categoryIndex ? "max-h-screen" : "max-h-0"
            }`}
          >
            {categoryData.accordionData.map((accordionItem, accordionIndex) => (
              <div key={accordionIndex} className="mb-[5px]">
                <div
                  className={`flex justify-between p-[8px] ${
                    activeAccordionIndex === accordionIndex
                      ? ""
                      : "border-b-[1px] border-[#42404071]"
                  }`}
                  onClick={() => handleAccordionToggle(accordionIndex)}
                >
                  <span className="text-primary text-[18px]">
                    {accordionItem.title}
                  </span>
                  <div>
                    {activeAccordionIndex === accordionIndex ? (
                      <GrSubtract color="text-primary" />
                    ) : (
                      <LuPlus color="text-primary" />
                    )}
                  </div>
                </div>

                <div
                  className={`overflow-hidden transition-max-height duration-500 ease-in-out ${
                    activeAccordionIndex === accordionIndex
                      ? "max-h-screen"
                      : "max-h-0"
                  }`}
                >
                  <p className="p-[8px] border-b-1 border-[#1f1f1f79] ">
                    {accordionItem.content}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default TabFaq;
