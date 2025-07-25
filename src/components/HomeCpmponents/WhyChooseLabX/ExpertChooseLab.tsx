// "use client";
// import React, { useEffect } from "react";
// import Image from "next/image";
// import Repairs from "../../../../public/Images/icons/Vector.svg";
// import Transparency from "../../../../public/Images/icons/Transparency.svg";
// import Recovery from "../../../../public/Images/icons/Recovery.svg";
// import B2BServices from "../../../../public/Images/icons/B2B Services.svg";
// import AOS from "aos";
// import "aos/dist/aos.css";
// import Link from "next/link";

// const WhyChooseLabX: React.FC = () => {
//   useEffect(() => {
//     AOS.init({ duration: 1000 });
//   }, []);

//   const sectionData = [
//     {
//       image: Repairs,
//       alt: "Beginner Phone Repair",
//       title: `Beginner Phone Repair Course`,
//       content:"Duration: 5 Days | Price: $1249 (Includes a free toolkit for each student)",
//       description: `Learn the fundamentals of mobile phone repair in our comprehensive beginner course, designed to give you hands-on experience with a wide range of repairs.`,
//       Background: "linear-gradient(74deg, #fff563, #000000)",
//       pageUrl: "/beginner-phone-repair-course"
//     },
//     {
//       image: Transparency,
//       alt: "Advanced Motherboard Repair",
//       title: "Advanced Motherboard Repair – Micro Soldering (Level 1)",
//       content:"Duration: 1 Week | Price: $2200",
//       description: `Our Level 1 course repairing mobile phones offers hands-on training in essential micro soldering techniques for mobile device motherboard repairs. Ideal for technicians ready to expand their skills, this course covers..`,
//       Background: "linear-gradient(74deg, #56c1c1, rgb(0, 0, 0)", 
//       pageUrl:'/advanced-motherboard'
//     },
//     {
//       image: Recovery,
//       alt: "Master Motherboard Repair",
//       title: "Master Motherboard Repair – Micro Soldering (Level 3)",
//       content:"Duration: 5 Days | Price: $5500",
//       description: `Our Level 3 Master Course is designed for experienced technicians seeking to master the most advanced techniques in mobile motherboard repair. This intensive phone repairing course covers complex repairs and data recovery, ensuring you can handle the most challenging issues in modern devices.`,
//       Background: "linear-gradient(74deg, rgba(213, 253, 51, 0.63), rgb(0, 0, 0))",
//       pageUrl:'/master-motherboard-repair'
//     },
//     {
//       image: B2BServices,
//       alt: "Professional Phone",
//       title: "Professional Phone Screen Refurbishing Course",
//       content:"Duration: 5 Days | Price: $5500",
//       description: `Our Professional Phone Screen Refurbishing Course is designed to teach technicians how to refurbish damaged or broken phone screens using industry-standard tools and techniques. This hands-on phone fixing course covers the entire refurbishing process, from screen disassembly to reassembly, ensuring high-quality results for both LCD and OLED screens.`,
//       Background: "linear-gradient(74deg, rgba(207, 35, 98, 0.655), rgb(0, 0, 0))",
//       pageUrl: "/professional-phone-screen"
//     },
//   ];

//   return (
//     <div>
//       <div className="container pt-4" data-aos="fade-up">
//         <MainHeading Heading="Our Other Training" />
//         <MainTitle Title="Enhancing Skills Through Diverse and Specialized Training Programs" />

//         <div className="lg:pb-8 py-4">
//           <div className="grid grid-cols-1 lg:grid-cols-3 xl:grid-cols-4 md:grid-cols-2 justify-center text-center gap-4">
//             {sectionData.map((section, index) => (
//               <div
//                 key={index}
//                 style={{ background: section.Background }} // Static background
//                 className="p-[20px] rounded-[15px] border-2 border-[#ede574] shadow-lg shadow-[#ede57456] flex flex-col justify-between"
//               >
//              <Link href={section.pageUrl} >
               
//                <h3 className="text-tertiary  xl:text-xl lg:w-[100%] m-auto mb-3">{section.title}</h3>
//                <p>{section.content}</p>
//                <p style={{
//                  display: "-webkit-box",
//                  WebkitLineClamp: 3,
//                  WebkitBoxOrient: "vertical",
//                  overflow: "hidden",
//                }}>
//                  {section.description}
//                </p>
//                <div className="learnmore">
//                  <MainButton
//                    MainButton="Learn More"
//                    link={section.pageUrl}
//                  />
//                </div>
//                </Link>
//               </div>
//             ))}
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default WhyChooseLabX;
