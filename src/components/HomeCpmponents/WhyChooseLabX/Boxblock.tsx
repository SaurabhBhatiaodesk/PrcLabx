  "use client";
  import MainTitle from "@/components/MainTitle/MainTitle";
  import MainHeading from "@/components/ManinHeading/MainHeading";
  import React, { useEffect } from "react";
  import Image from "next/image";
  import Repairs from "../../../../public/Images/icons/Vector.svg";
  import Transparency from "../../../../public/Images/icons/Transparency.svg";
  import Recovery from "../../../../public/Images/icons/Recovery.svg";
  import B2BServices from "../../../../public/Images/icons/B2B Services.svg";
  import MainButton from "@/components/MainButton/MainButton";
  import AOS from "aos";
  import "aos/dist/aos.css";
  import Link from "next/link";
  import { usePathname } from "next/navigation";

  const Boxblock: React.FC = () => {
    useEffect(() => {
      AOS.init({ duration: 1000 });
    }, []);

    const pathname = usePathname();

    const sectionData = [
      {
        image: Repairs,
        alt: "Beginner Phone Repair",
        title: `Beginner Phone Repair Course`,
        content: "Duration: 5 Days | Price: $1249 (Includes a free toolkit for each student)",
        description: `Learn the fundamentals of mobile phone repair in our comprehensive beginner course, designed to give you hands-on experience with a wide range of repairs.`,
        Background: "linear-gradient(74deg, #fff563, #000000)",
        pageUrl: "/beginner-phone-repair-course",
        bgcolor: "bg-prc",
      },
      {
        image: Transparency,
        alt: "Expert Motherboard Repair",
        title: "Expert Motherboard Repair – Micro Soldering (Level 2)",
        content: "Duration: 1 Week | Price: $2800",
        description: `The Level 2 cell phone repair course builds on foundational micro soldering techniques and focuses on advanced repairs for modern devices.`,
        Background: "linear-gradient(74deg, #f35520c0, rgb(0, 0, 0))",
        pageUrl: "/expert-motherboard-repair",
        bgcolor: "bg-prc",
      },
      {
        image: Recovery,
        alt: "Master Motherboard Repair",
        title: "Master Motherboard Repair – Micro Soldering (Level 3)",
        content: "Duration: 5 Days | Price: $5500",
        description: `Our Level 3 Master Course is designed for experienced technicians seeking to master the most advanced techniques in mobile motherboard repair.`,
        Background: "linear-gradient(74deg, #d5fd33a1, rgb(0, 0, 0))",
        pageUrl: "/master-motherboard-repair",
        bgcolor: "bg-prc",
      },
      {
        image: B2BServices,
        alt: "Professional Phone",
        title: "Professional Phone Screen Refurbishing Course",
        content: "Duration: 5 Days | Price: $5500",
        description: `Our Professional Phone Screen Refurbishing Course is designed to teach technicians how to refurbish damaged or broken phone screens using industry-standard tools and techniques.`,
        Background: "linear-gradient(74deg, rgba(207, 35, 98, 0.655), rgb(0, 0, 0))",
        pageUrl: "/professional-phone-screen",
        bgcolor: "bg-prc",
      },
      {
        image: Repairs,
        alt: "Advanced Motherboard Repair",
        title: `Advanced Motherboard Repair – Micro Soldering (Level 1)`,
        content: "Duration: 1 Week | Price: $2200",
        description: `Our Level 1 course repairing mobile phones offers hands-on training in essential micro soldering techniques for mobile device motherboard repairs.`,
        Background: "linear-gradient(74deg, rgb(86, 193, 193), rgb(0, 0, 0))",
        pageUrl: "/advanced-motherboard",
        bgcolor: "bg-prc",
      },
    ];

    // Define paths where this section should be visible
    const visiblePaths = [
      "/advanced-motherboard",
      "/professional-phone-screen",
      "/beginner-phone-repair-course",
      "/expert-motherboard-repair",
      "/master-motherboard-repair",
    ];

    console.log("Current Pathname:", pathname); // Log the current pathname for debugging  
    // Check if the current pathname matches any of the paths where the block should be visible

return (
    <div>
      <div className="container pt-4" data-aos="fade-up">
        <MainHeading Heading="Our Other Training" svg_stroke="var-(--alpha)" color="var-(--prc)" />
        <MainTitle Title="Enhancing Skills Through Diverse and Specialized Training Programs" />
        <div className="lg:pb-8 py-4">
          <div className="grid grid-cols-1 lg:grid-cols-3 xl:grid-cols-4 md:grid-cols-2 justify-center text-center gap-4">
            {sectionData
              .filter((section) => !visiblePaths.includes(pathname) || pathname !== section.pageUrl)
              .map((section, index) => (
                <div
                  key={index}
                  style={{ background: section.Background }} // Set background directly
                  className="p-[20px] rounded-[15px] border-2 border-[#ede574] shadow-lg shadow-[#ede57456] transition-shadow duration-300 flex flex-col justify-between"
                >
                  {/* {console.log("Rendering section:", section.title)} */}
                  <Link href={section.pageUrl}>
                    <h3 className="text-tertiary xl:text-xl lg:w-[100%] m-auto mb-3">
                      {section.title}
                    </h3>
                    <p className="text-primary" style={{color:"var-(--primary)"}}>{section.content}</p>
                    <p className="text-primary"
                      style={{
                        display: "-webkit-box", 
                        WebkitLineClamp: 3,
                        WebkitBoxOrient: "vertical",
                        overflow: "hidden",
                        color:"var-(--primary)"
                      }}
                    >
                      {section.description}
                    </p>
                    <div className="learnmore">
                      <MainButton
                        MainButton="Learn More"
                        link={section.pageUrl}
                        color={section.bgcolor}
                      />
                    </div>
                  </Link>
                </div>
              ))}
          </div>
        </div>
      </div>
    </div>
  );
    }



  export default Boxblock;
