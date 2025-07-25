

"use client";
import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

interface MainHeadingProps {
  Heading?: string;
  color?: string; // Optional color prop
  animation?: string; // Optional animation prop
  text_align?:string
  svg_stroke?:string
}

const MainHeading: React.FC<MainHeadingProps> = ({
  Heading,
  color,
  animation,
  text_align,
  svg_stroke
}) => {
  useEffect(() => {
    AOS.init({ duration: 1000 }); // Initialize AOS with a duration of 1000ms
  }, []);

  return (
    <div data-aos={animation || "fade-up"} 
     className={`relative  w-fit ${text_align == 'start' ? 'm-0': 'm-auto' }`}
    >
      <h2
        className={` w-fit mb-3 leter tracking-normal`}
        style={{ color: color || "inherit" }}
      >
        {Heading}
      </h2>
      <svg
        className={`absolute left-0  rotate-[180deg] z-[-1] bottom-[-3px] `}
        width="100%"
        height="20"
        viewBox="0 0 100 30"
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="none"
      >
        <path
          d="M0 15 Q50 0 100 15"
          fill="none"
          stroke={svg_stroke}
          strokeWidth="6"
        />
      </svg>
    </div>
  );
};

export default MainHeading;
