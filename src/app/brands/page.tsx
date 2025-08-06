import React from 'react'
import BrandDetailPage from './[...slug]/BrandDetail';
export const metadata = {
  title: "Mobile Phone Repair for All Major Brands | Phone Repair Center",
  description:
    "Explore PRC Repair's comprehensive mobile repair services. Select your device brand and model to access tailored repair solutions, including screen replacements, battery changes, and more.",
};
const page = () => {
  return (
    <div><BrandDetailPage/></div>
  )
}

export default page