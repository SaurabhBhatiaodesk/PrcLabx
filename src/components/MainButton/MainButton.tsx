// import React from "react";
// import Link from "next/link";

// interface MainButtonProps {
//   MainButton: string;
//   link?: string; // Optional link prop
//   color?: string; // Optional color prop
// }

// const MainButton: React.FC<MainButtonProps> = ({ MainButton, link, color }) => {
//   // Set default color gradient if color is not provided
//   const buttonColor = color || "bg-gradient-to-r from-[#E1F5C4] to-[#EDE574]";

//   return (
//     <div>
//       {link ? (
//        <Link href={link} style={{ borderRadius: '50px', display: 'block', overflow: 'hidden' }}>
//           <button
//             className={`${buttonColor} text-[13px] 2xl:text-[13px] xl:text-[14px] font-semibold tracking-[2px] uppercase text-black py-3 2xl:py-[10px] xl:py-[10px] px-[15px] rounded-[50px] transition duration-300 ease-in-out transform hover:scale-90 hover:bg-gradient-to-r hover:from-[#EDE574] hover:to-[#E1F5C4] my-2`}
//           >
//             {MainButton}
//           </button>
//         </Link>
//       ) : (
//         <button
//           className={`${buttonColor} text-[13px] 2xl:text-[13px] xl:text-[14px] font-semibold tracking-[2px] uppercase text-black py-3 2xl:py-[10px] xl:py-[10px] px-[15px] rounded-[50px] transition duration-300 ease-in-out transform hover:scale-90 hover:bg-gradient-to-r hover:from-[#EDE574] hover:to-[#E1F5C4]`}
//         >
//           {MainButton}
//         </button>
//       )}
//     </div>
//   );
// };

// export default MainButton;

import React from "react";
import Link from "next/link";

interface MainButtonProps {
  MainButton: string; // Button text
  link?: string; // Optional link prop
  color?: string; // Optional color prop
  onClick?: () => void; // Optional onClick handler
}

const MainButton: React.FC<MainButtonProps> = ({
  MainButton,
  link,
  color,
  onClick,
}) => {
  return (
    <div>
      {link ? (
        <Link href={link}>
          <button
            className={`uppercase bg-[#EF0000] text-white lg:text-[18px] text-[14px] lg:py-[8px] lg:px-[15px] p-[5px] rounded-3xl  border-[#FFFFFF] justify-center items-center  flex cursor-pointer    border-[1.58px]  x-5 md:py-3  font-medium  shadow-md transition-all duration-300 hover:[transform:translateY(-.335rem)] hover:shadow-xl ${color}`}
            aria-label={`Click ${MainButton}`}
          >
            {MainButton}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
            >
              <path
                d="M5 12H19"
                stroke="white"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M12 5L19 12L12 19"
                stroke="white"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </button>
        </Link>
      ) : (
        <button
          className={` uppercase bg-[#EF0000] text-white lg:text-[18px] text-[14px] lg:py-[8px] lg:px-[15px] p-[5px] rounded-3xl  border-[#FFFFFF] justify-center items-center  flex cursor-pointer    border-[1.58px]  x-5 md:py-3  font-medium  shadow-md transition-all duration-300 hover:[transform:translateY(-.335rem)] hover:shadow-xl
              
              ${color}`}
          aria-label={`Click ${MainButton}`}
        >
          {MainButton}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
          >
            <path
              d="M5 12H19"
              stroke="white"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M12 5L19 12L12 19"
              stroke="white"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        </button>
      )}
    </div>
  );
};

export default MainButton;
