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
}

const MainButton: React.FC<MainButtonProps> = ({ MainButton, link, color }) => {
  // Default color gradient if no color is provided
  const buttonColor = color || "bg-gradient-to-r from-[#E1F5C4] to-[#EDE574]";

  // Button styles
  const buttonStyles = `${buttonColor} text-[13px] 2xl:text-[13px] xl:text-[14px] font-semibold tracking-[2px] uppercase text-black py-3 2xl:py-[10px] xl:py-[10px] px-[15px] rounded-[50px] transition duration-300 ease-in-out transform hover:scale-90 hover:bg-gradient-to-r hover:from-[#EDE574] hover:to-[#E1F5C4] my-2`;

  return (
    <div>
      {link ? (
        <Link href={link}>
          <button className={buttonStyles} aria-label={`Click ${MainButton}`}>
            {MainButton}
          </button>
        </Link>
      ) : (
        <button className={buttonStyles} aria-label={MainButton}>
          {MainButton}
        </button>
      )}
    </div>
  );
};

export default MainButton;
