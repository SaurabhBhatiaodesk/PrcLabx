import dynamic from "next/dynamic";
import React from 'react'
// import ProfessionalPhone from './ProfessionalScreen'
const ProfessionalPhone = dynamic(() => import('./ProfessionalScreen'), { ssr: false });
const page = () => {
  return (
    <div>
        <ProfessionalPhone/>
    </div>
  )
}

export default page
