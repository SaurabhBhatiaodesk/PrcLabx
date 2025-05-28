// "use client";
// import React, { useEffect } from "react";
// import AOS from "aos";
// import "aos/dist/aos.css";

// interface MainHeadingProps {
//   Heading: string;
//   color?: string; // Optional color prop
//   animation?: string; // Optional animation prop
// }

// const MainHeading: React.FC<MainHeadingProps> = ({ Heading, color, animation }) => {
//   useEffect(() => {
//     AOS.init({ duration: 1000 }); // Initialize AOS with a duration of 1000ms
//   }, []);

//   return (
//     <div data-aos={animation || "fade-up"} className="relative w-fit m-auto">
//       <h2
//         className="text-center w-fit m-auto"
//         style={{ color: color || "inherit" }}
//       >
//         {Heading}
//       </h2>
//       <div
//         className="absolute w-full h-1 left-0 top-full"
//         style={{
//           marginTop: "10px",
//           height: "2px",
//           width: "80%",
//           borderBottom: "2px solid #fff563",
//           borderRadius: "50%",
//           transform: "scaleX(1.5)",
//         }}
//       ></div>
//     </div>
//   );
// };

// export default MainHeading;

"use client";
import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

interface MainHeadingProps {
  Heading?: string;
  color?: string; // Optional color prop
  animation?: string; // Optional animation prop
}

const MainHeading: React.FC<MainHeadingProps> = ({
  Heading,
  color,
  animation,
}) => {
  useEffect(() => {
    AOS.init({ duration: 1000 }); // Initialize AOS with a duration of 1000ms
  }, []);

  return (
    <div data-aos={animation || "fade-up"} className="relative w-fit m-auto">
      <h2
        className="text-center w-fit m-auto"
        style={{ color: color || "inherit" }}
      >
        {Heading}
      </h2>
      <svg
        className="relative top-full left-0"
        width="100%"
        height="20"
        viewBox="0 0 100 30"
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="none"
      >
        <path
          d="M0 15 Q50 0 100 15"
          fill="none"
          stroke="#fff563"
          strokeWidth="6"
        />
      </svg>
    </div>
  );
};

export default MainHeading;
