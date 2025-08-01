import dynamic from "next/dynamic";
import React from 'react'
// import ProfessionalPhone from './ProfessionalScreen'
const ProfessionalPhone = dynamic(() => import('./ProfessionalScreen'), { ssr: false });
export const metadata = {
  title: "Mobile Screen Repair | Phone Screen Replacement Australia | PRC",
  description:
    "Enroll in PRC Repair's specialized course to learn advanced techniques in phone screen refurbishing. Gain hands-on experience & expert guidance in mobile restoration.",
};
const page = () => {
  return (
    <div>
        <ProfessionalPhone/>
    </div>
  )
}

export default page
