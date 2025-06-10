/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: [
      'labxbackend.s3.us-east-2.amazonaws.com', // Your existing domain
      'www.facebook.com', // Your existing domain
      'fdn2.gsmarena.com', // Add the new domain here
    ],
  },
};

export default nextConfig;
