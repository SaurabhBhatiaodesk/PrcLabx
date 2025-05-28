import React from 'react'
import FaqPageCall from './FaqPageCall'
export const metadata = {
  title: "Frequently Asked Questions - Phone Repair Training | Labx Repair",
  description: "Get answers to your questions about phone repair training. Learn about our mobile phone repair courses and phone screen repair services. Contact us for more info!",
  keywords: ["LabX", "tech solutions", "data recovery", "client reviews", "tech services"],
  openGraph: {
    title: "Frequently Asked Questions - Phone Repair Training | Labx Repair",
    description: "Get answers to your questions about phone repair training. Learn about our mobile phone repair courses and phone screen repair services. Contact us for more info!",
    url: "/", // Replace with your actual page URL
    type: "website",
    images: [
      {
        url: "", // Replace with your image URL
        width: 1200,
        height: 630,
        alt: "LabX Tech Solutions Banner",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Frequently Asked Questions - Phone Repair Training | Labx Repair",
    description: "Get answers to your questions about phone repair training. Learn about our mobile phone repair courses and phone screen repair services. Contact us for more info!",
    images: ["https://example.com/path-to-your-image.jpg"], // Replace with your image URL
  },
  alternates: {
    canonical: "https://labxrepair.com.au/faq",
  },

};

const page = () => {
  return (
    <div>
      <FaqPageCall/>
    </div>
  )
}

export default page