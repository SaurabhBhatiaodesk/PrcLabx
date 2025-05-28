"use client"
import React, { useEffect, useState, useRef } from "react";
import Image from "next/image";
import AOS from "aos";
import "aos/dist/aos.css";
import "./RecentNews.css";
import { useRouter } from "next/navigation";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import MainHeading from "../ManinHeading/MainHeading";

interface BlogData {
  _id: string;
  featuredImage: string[]; // Array of base64 image strings
  heading: string;
  content: string; // This is treated as the page description
  pageTitle: string;
  status: boolean;
}

// Utility function to strip HTML tags
const stripHtmlTags = (html: string): string => {
  const div = document.createElement("div");
  div.innerHTML = html;
  return div.textContent || div.innerText || "";
};

const RecentNews: React.FC = () => {
  const [blogs, setBlogs] = useState<BlogData[]>([]); // State to store blogs
  const [loading, setLoading] = useState<boolean>(true); // State to track loading status
  const swiperRef = useRef<any>(null); // Ref for Swiper instance
  const router = useRouter();

  useEffect(() => {
    AOS.init({ duration: 1000 }); // Initialize AOS animations

    // Fetch blogs from the API
    const fetchBlogs = async () => {
      try {
        const response = await fetch(
          `https://labxbackend.labxrepair.com.au/api/admin/blogs`
        ); // No pagination required
        const data = await response.json();
        const filteredBlogs = data.blogs.filter(
          (blog: BlogData) => blog.status
        ); // Filter blogs where status is true

        // Get the latest 3 blogs
        setBlogs(filteredBlogs.slice(0, 3)); // Set the latest 3 blogs
      } catch (error) {
        console.error("Error fetching blogs:", error);
      } finally {
        setLoading(false); // Set loading to false once the request is finished
      }
    };

    fetchBlogs();
  }, []);

  const sendId = (pageTitle: string) => {
    router.push(`/blogs/${pageTitle}`);
  };

  return (
    <div className="RecentNews-os">
      <div className="container">
        <div className="py-3 xl:py-5" data-aos="fade-up">
          <MainHeading Heading="Read Our Blogs" />
          <p className="text-center text-lg mt-2 mb-6">
            Explore our latest blogs for insights, news, and expert tips on
            mobile phone repair and technology. Stay updated with LabX’s tech
            knowledge!
          </p>
          <div>
            {loading ? (
              <p>Loading...</p>
            ) : blogs.length > 0 ? (
              <Swiper
              modules={[Autoplay, Navigation]}
              loop={true}
              autoplay={{ delay: 3000 }}
              // navigation={true}
              onSwiper={(swiper) => (swiperRef.current = swiper)}
              breakpoints={{
                640: { slidesPerView: 1, spaceBetween: 10 },
                768: { slidesPerView: 2, spaceBetween: 15 },
                1024: { slidesPerView: 3, spaceBetween: 20 },
              }}
              className="blogs-swiper"
            >
              {blogs.map((blog) => (
                <SwiperSlide key={blog._id}>
                  <div
                    onClick={() => sendId(blog.pageTitle)}
                    className="blogs-row-col-os cursor-pointer"
                    data-aos="zoom-in"
                  >
                    <div>
                      {blog.featuredImage.length > 0 && (
                        <Image
                          src={blog.featuredImage[0]}
                          alt={blog.heading}
                          width={500}
                          height={350}
                          className="rounded-md object-cover blog-image-home"
                        />
                      )}
                    </div>
                    <div className="mt-4">
                      <h2 className="font-bold text-lg text-[#EDE574]">
                        {blog.heading.slice(0, 40)}...
                      </h2>
                      <p className="text-base mt-2 text-white">
                        {stripHtmlTags(blog.content).length > 160
                          ? `${stripHtmlTags(blog.content).slice(0, 160)}...`
                          : stripHtmlTags(blog.content)}
                      </p>
                      <div className="flex justify-end items-center mt-4">
                        <button
                          onClick={() => sendId(blog.pageTitle)}
                          className="capitalize text-[16px] text-[#EDE574]"
                        >
                          Read More
                        </button>
                      </div>
                    </div>
                    
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
            
            ) : (
              <p className="text-center text-gray-500 italic">
                No blogs available.
              </p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default RecentNews;
