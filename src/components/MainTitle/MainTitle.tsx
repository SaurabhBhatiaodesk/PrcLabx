// import React from "react";

// interface TitleProps {
//     Title: string;
// }

// const MainHeading: React.FC<TitleProps> = ({ Title }) => {
//   return (
//     <div className="title-text text-center xl:w-[50%] lg:w-[70%] md:w-[90%] m-auto py-3">
//       <p>{Title}</p>
//     </div>
//   );
// };

// export default MainHeading;

"use client"
import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

interface TitleProps {
  Title: string;
  color?: string;
  animation?: string; // New prop for AOS animation
}

const MainTitle: React.FC<TitleProps> = ({ Title, color, animation }) => {
  useEffect(() => {
   
    AOS.init({ duration: 1500 }); // Initialize AOS with a duration of 1000ms
  }, []);

  return (
    <div
      data-aos={animation || 'fade-up'} 
      className="title-text text-center 3xl:w-[70%] lg:w-[70%] 2xl:w-[60%] md:w-[90%] m-auto"
    >
      <p style={{ color: color || 'inherit' }}>{Title}</p>
    </div>
  );
};

export default MainTitle;

// sm: '100%',
// md: '100%',
// lg: '1024px',
// xl: '1280px',
// '2xl': '1440px',
// '3xl': '1600px',
// '4xl': '1920px',