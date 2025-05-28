/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
      domains: ['labxbackend.s3.us-east-2.amazonaws.com','www.facebook.com'], // Add your S3 bucket domain here
    },
  };

  export default nextConfig;
