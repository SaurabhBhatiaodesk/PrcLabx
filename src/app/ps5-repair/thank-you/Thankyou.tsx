// "use client";
// import React, { useEffect, useState } from "react";
// import { DotLottieReact } from "@lottiefiles/dotlottie-react";
// import MainHeading from "../../../components/ManinHeading/MainHeading";
// import MainTitle from "../../../components/MainTitle/MainTitle";
// import Link from "next/link";
// import MainButton from "@/components/MainButton/MainButton";

// interface Params {
//   id: string | null; // id can be a string or null if not found
// }

// const Thankyou = () => {
//   const [params, setParams] = useState<Params>({ id: null });

//   useEffect(() => {
//     const searchParams = new URLSearchParams(window.location.search);
//     const id = searchParams.get("id");
//     setParams({ id });
//   }, []);

//   useEffect(() => {
//     console.log("params ::", params);
//   }, [params]);

//   const steps = [
//     {
//       title: "Print & Pack",
//       content:
//         "Print the PDF attachment in your email and place it inside the package.",
//       subtitle: "",
//       subcontent:
//         "Read our Shipping Policy or Shipping FAQ for more information.",
//       link: "/Shipping_Policy",
//       buttonad:"Shipping Policy",
//     },
//     {
//       title: "What to Send",
//       content:
//         "Please keep all accessories with you (cover, sim, etc.). Any third-party accessories attached to the device may be removed during the disassembly process. We do not take responsibility for any third-party accessories.",
//       link: "",
//     },
//     {
//       title: "Confirmation",
//       content:
//         "You will get an email confirmation when your package has been received. It’s your responsibility to get a quote before mailing your device.",
//       link: "",
//     },
//     {
//       title: "Repair",
//       content:
//         "Once we receive your device, it will be repaired in a queue system. If the repair cost exceeds the initial quote, we will contact you for confirmation before proceeding.",
//       link: "",
//     },
//     {
//       title: "Payment",
//       content:
//         "Once we reach a conclusion, we will send you a final invoice detailing all the agreed-upon charges. We will await your payment confirmation before releasing the device.",
//       link: "",
//     },
//     {
//       title: "Mail Back",
//       content:
//         "Your device will be mailed back to you once the repair is complete and the invoice is paid. The tracking number will be emailed to you and updated on your ticket.",
//       link: "",
//     },
//   ];

//   return (
//     <>
//       <div>
//         <div className="bg-gradient-to-r from-[#EDE574] to-[#E1F5C4] p-4 rounded-md">
//           <div className="max-container">
//           <div className="flex flex-col">
//             <DotLottieReact
//               src="/Images/jsonfile/thank-you.json"
//               loop
//               autoplay
//               className="lg:h-[200px] h-[100px]"
//             />
//             <div className="Removeborder-Heading">
//               <MainHeading
//                 Heading="We have received your request. Thank you!"
//                 color="black"
//               />
//             </div>
//             {params.id && (
//               <MainTitle
//                 Title={`Your order reference ID: #${params.id}`}
//                 color="black"
//               />
//             )}
//               <p className="text-secondary text-center"> If you opted for LabX’s shipping label, we will send you the connote details shortly. Otherwise, please include your own shipping information with the reference number provided.  </p>
             
//           <p className="text-secondary text-center">If you choose LabX’s shipping label, we will email you the connote details shortly. Please remember to include the provided reference number with your device when sending it to us. This reference number is essential for tracking your repair and will serve as the primary communication method. </p>
//           </div>
//           </div>
//         </div>

//         <div className="container lg:py-8 py-3">

//           <MainHeading Heading="What Will Happen Next"/>
//           <div className="grid grid-cols-1 xl:grid-cols-3 lg:grid-cols-2 gap-5 my-4">
//             {steps.map((step, index) => (
//               <Link href={step.link || "#"} key={index}>
//                 <div
//                   className="p-4 bg-gray-800 rounded-md shadow-lg text-white transition-all duration-300 border-[1px] border-[#5b5b5b99] hover:bg-gradient-to-r hover:from-[#56c1c1] hover:to-[#000000] h-full"
//                   style={{ cursor: "pointer" }}
//                 >
//                   <h3 className="text-xl text-[#EDE574] mb-2">{step.title}</h3>
//                   <p className="text-base mb-2">{step.content}</p>
//                   {step.subtitle && (
//                     <p className="text-xl text-[#EDE574] mb-2">
//                       {step.subtitle}
//                     </p>
//                   )}
//                   {step.subcontent && (
//                     <p className="text-base mb-2">{step.subcontent}</p>
//                   )}
//                    {step.buttonad && (
//                     // <button className="text-base mb-2"></button>
//                     <MainButton MainButton={{step.buttonad}}/>
//                   )}
//                 </div>
//               </Link>
//             ))}
//           </div>
//           <div className="flex lg:py-8 py-3 lg:my-3 xl-my-4 my-2"></div>
//         </div>
//       </div>
//     </>
//   );
// };

// export default Thankyou;




"use client";
import React, { useEffect, useState } from "react";
import { DotLottieReact } from "@lottiefiles/dotlottie-react";
import MainHeading from "../../../components/ManinHeading/MainHeading";
import MainTitle from "../../../components/MainTitle/MainTitle";
import ThanksData from "../../mail-in-repair/ThanksData";


interface Params {
  id: string | null; // ID can be a string or null if not found
}



const Thankyou: React.FC = () => {
  const [params, setParams] = useState<Params>({ id: null });

  useEffect(() => {
    const searchParams = new URLSearchParams(window.location.search);
    const id = searchParams.get("id");
    setParams({ id });
  }, []);

  useEffect(() => {
    console.log("params ::", params);
  }, [params]);



  const ShippingMessage = (
    <p className="text-secondary text-center">
      If you choose LabX’s shipping label, we will email you the connote details shortly. Please include the reference number with your device when sending it to us. This reference number is essential for tracking your repair and will serve as the primary communication method.
    </p>
  );
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
        <div className="bg-gradient-to-r from-[#EDE574] to-[#E1F5C4] p-4 rounded-md">
          <div className="max-container">
            <div className="flex flex-col">
              <DotLottieReact
                src="/Images/jsonfile/thank-you.json"
                loop
                autoplay
                className="lg:h-[200px] h-[100px]"
              />
              <div className="Removeborder-Heading">
                <MainHeading
                  Heading="We have received your request. Thank you!"
                  color="black"
                />
              </div>
              {params.id && (
                <MainTitle
                  Title={`Your order reference ID: #${params.id}`}
                  color="black"
                />
              )}
              {ShippingMessage}
            </div>
          
          </div>
        </div>
        <ThanksData steps={stepsData} HeadingData="What Will Happen Next"/>

       
      </div>
    </>
  );
};

export default Thankyou;





























