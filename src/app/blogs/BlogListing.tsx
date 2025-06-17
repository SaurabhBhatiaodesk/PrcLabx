"use client";

import React, { useState, useEffect } from "react";
import axios from "axios";
import Image from "next/image";
import MainButton from "@/components/MainButton/MainButton";
import BlogImage from "../../../public/Images/adminimage.png"; // Fallback image
import Link from "next/link";
import BiginnerReviews from "@/components/GoogleReviews/BiginnerReviews";
import rname from "../../../public/Images/icons/rname.png";
import jname from "../../../public/Images/icons/E.png";
import Nname from "../../../public/Images/icons/N.png";
import Sname from "../../../public/Images/icons/S.png";
import Aname from "../../../public/Images/icons/A.png";
import hname from "../../../public/Images/icons/h.png";
import Googletest from "../../../public/Images/icons/Googletest.svg";
// Define types for the blog data
interface Blog {
  _id: string;
  heading: string;
  pageTitle: string;
  featuredImage: string[]; // Assuming the 'featuredImage' is an array of URLs
}

interface Pagination {
  totalBlogs: number;
  currentPage: number;
  totalPages: number;
}

const Blogs: React.FC = () => {
  const [blogs, setBlogs] = useState<Blog[]>([]);
  const [pagination, setPagination] = useState<Pagination | null>(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [limit] = useState(24); // Limit per page
  const apiUrl = process.env.NEXT_PUBLIC_LEAFYMANGO_API_URL;
  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const response = await axios.get(
          `${apiUrl}/api/admin/blogs?page=${currentPage}&limit=${limit}`
        );
        console.log(
          "response?.data?.blogresponse?.data?.blog",
          response?.data?.blog
        );

        setBlogs(response?.data?.blogs || []); // Set blogs
        setPagination(response?.data?.pagination || null); // Set pagination data
      } catch (error) {
        console.error("Error fetching blogs:", error);
      }
    };

    fetchBlogs();
  }, [currentPage, limit]); // Re-fetch on page change

  // Handle page change
  const handlePageChange = (page: number) => {
    setCurrentPage(page); // Update the current page
  };

  // console.log("blogs[0].pageTitleee",blogs)
 const reviewsData = [
    {
      name: "Liam Foster",
      date: "September 12, 2023",
      profileImage: hname,
      logoImage: Googletest,
      rating: 5,
      param:
        "The course was incredibly detailed, and the hands-on practice helped me build confidence. The instructors were patient and knowledgeable, making even complex micro soldering techniques easy to understand.",
    },
    {
      name: "Emma Williams",
      date: "September 12, 2023",
      profileImage: rname,
      logoImage: Googletest,
      rating: 5,
      param:
        "This course transformed my skills! I can now confidently repair motherboards and handle advanced micro soldering tasks. Highly recommend it for anyone serious about electronics repair.",
    },
    {
      name: "Jack O'Connor",
      date: "September 12, 2023",
      profileImage: Sname,
      logoImage: Googletest,
      rating: 5,
      param:
        "The one-week intensive program was perfect. I learned advanced diagnostics and component replacement with expert guidance. The hands-on approach made everything clear and practical. Excellent experience!",
    },
    {
      name: "Chloe Brown",
      date: "October 5, 2023",
      profileImage: jname,
      logoImage: Googletest,
      rating: 5,
      param:
        "Fantastic course! The instructors were highly experienced, and their step-by-step guidance on micro soldering was invaluable. I feel ready to handle complex motherboard repairs now. ",
    },
    {
      name: "Oliver Harris",
      date: "November 1, 2023",
      profileImage: Aname,
      logoImage: Googletest,
      rating: 5,
      param:
        "The training exceeded my expectations. From using advanced tools to mastering micro soldering techniques, I gained practical skills that I can apply immediately. Great value for time and money!",
    },
    {
      name: "Sophie Clark",
      date: "November 1, 2023",
      profileImage: Nname,
      logoImage: Googletest,
      rating: 5,
      param:
        "A must-attend course for repair professionals. The small class size allowed personalized attention, and the hands-on exercises helped me master motherboard repairs quickly. Truly worth every minute!",
    },
  ];
  return (
    <>
      <div className="main-blog-list">
        {blogs.length > 0 ? (
          <div className="container grid grid-cols-1 lg:grid-cols-3 xl:grid-cols-3 md:grid-cols-2 justify-center text-center gap-4 mb-2  mt-5">
            {blogs.map((blog) => {
              const featuredImage =
                blog.featuredImage && blog.featuredImage.length > 0
                  ? blog.featuredImage[0]
                  : BlogImage;
              //  console.log("blog.pageTitleblog.pageTitleeeeee",blog?.pageTitle)
              return (
                <div
                  key={blog._id}
                  className="blog-article p-4 rounded-[15px] border-2 border-[var(--prc)] shadow-lg shadow-[#ede57456] transition-shadow duration-300 flex flex-col justify-between hover:shadow-[0_0_20px_10px_#ede57456]"
                >
                  <Link href={`/blogs/${blog.pageTitle}`}>
                    <Image
                      src={featuredImage}
                      alt={blog.heading || "Blog Image"}
                      width={500}
                      height={300}
                      className="rounded-[20px] h-[250px] object-cover"
                    />
                  </Link>
                  <h3 className="mb-4 mt-4 text-prc">
                    {(blog.heading || "Blog Title").slice(0, 40)}...
                  </h3>
                  <div className="learnmore flex justify-center">
                    {/* <MainButton
                      MainButton="View Details"
                      link={`/blogs/${blog._id}`}
                    /> */}

                    <MainButton
                      MainButton="View Details"
                      link={`/blogs/${blog?.pageTitle}`}
                      color="bg-prc"
                    />
                  </div>
                </div>
              );
            })}
          </div>
        ) : (
          <div className="flex justify-center items-center h-[50vh] ">
            <p className="text-lg text-tertiary flex items-center">
              Loading blogs
              <span className="ml-2 flex space-x-1">
                <span className="w-2 h-2 bg-tertiary rounded-full animate-bounce"></span>
                <span className="w-2 h-2 bg-tertiary rounded-full animate-bounce delay-200"></span>
                <span className="w-2 h-2 bg-tertiary rounded-full animate-bounce delay-400"></span>
              </span>
            </p>
          </div>
        )}
      </div>

      {/* Pagination Controls */}
      {pagination && pagination.totalPages > 1 && (
        <div className="pagination-controls flex justify-center my-4">
          {Array.from({ length: pagination.totalPages }, (_, index) => (
            <button
              key={index + 1}
              onClick={() => handlePageChange(index + 1)}
              className={`mx-1 px-3 py-1 border rounded ${
                currentPage === index + 1
                  ? "bg-prc text-primary"
                  : "bg-gray-200 text-black"
              }`}
            >
              {index + 1}
            </button>
          ))}
        </div>
      )}
        <BiginnerReviews reviews={reviewsData}  googletitle="Our Google Review"/>
    </>
  );
};

export default Blogs;
