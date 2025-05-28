import Breadcrumb from '@/components/Breadcrumb/Breadcrumb'
import React from 'react'

const page = () => {
  return (
    <>
    <Breadcrumb
          pageName="B2B Phone Repair Service"
          pageDescription="We offer tailored B2B solutions designed to streamline your operations and ensure the highest quality mobile phone repairs for your customers. LabX provides specialized services that help you maintain your business efficiency and product quality."
          backgroundImage="/Images/BannerImages/about.png"
          AdminImage="/Images/B2BRepairServices.svg"
          link="/coming-soon"
          buttonname="Apply for B2B Account"
        />
    </>
  )
}

export default page