"use client";
import Image from "next/image";
import React, { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import Facebook from "../../../public/Images/blog/facebook.svg";
import Telegram_logo from "../../../public/Images/blog/Telegram_logo.svg";
import Instagram from "../../../public/Images/blog/instagram.svg";
import Twitter from "../../../public/Images/blog/twitter.svg";
interface BlogData {
  _id: string;
  pageTitle:string;
  heading: string;
  featuredImage: string[];
  createdAt: string;
}

async function fetchPaginatedBlogs(
  page: number,
  limit: number
): Promise<{
  blogs: BlogData[];
  totalPages: number;
}> {
  const res = await fetch(
    `https://labxbackend.labxrepair.com.au/api/admin/blogs?page=${page}&limit=${limit}`,
    {
      cache: "no-store",
    }
  );

  if (!res.ok) {
    throw new Error("Failed to fetch blogs data");
  }

  const data = await res.json();
  return { blogs: data.blogs, totalPages: data.pagination.totalPages };
}

export default function BlogSidebar() {
  const [blogs, setBlogs] = useState<BlogData[]>([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [currentUrl, setCurrentUrl] = useState<string>("");
  const blogsPerPage = 20;
  const router = useRouter();

  useEffect(() => {
    fetchBlogs(currentPage, blogsPerPage);
    // Set the current URL only on the client side
    if (typeof window !== "undefined") {
      setCurrentUrl(window.location.href); // Access window only on the client side
    }
  }, [currentPage]);

  useEffect(() => {
    fetchBlogs(currentPage, blogsPerPage);
  }, [currentPage]);

  const fetchBlogs = async (page: number, limit: number) => {
    try {
      const { blogs, totalPages } = await fetchPaginatedBlogs(page, limit);
      setBlogs(blogs);
      setTotalPages(totalPages);
    } catch (error) {
      console.error(error);
    }
  };

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };
  const sendId = (id: string) => {
    router.push(`/blogs/${id}`);
  };
  return (
    <div>
      <div className="social_section">
      <h4>Share</h4>
      <div className="social__icon">
        <a href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(currentUrl)}`} target="_blank" rel="noopener noreferrer">
          <Image alt="Facebook" src={Facebook} />
        </a>
        <a href={`https://t.me/share/url?url=${encodeURIComponent(currentUrl)}`} target="_blank" rel="noopener noreferrer">
          <Image alt="Telegram" src={Telegram_logo} />
        </a>
        <a href={`https://www.instagram.com/sharer.php?u=${encodeURIComponent(currentUrl)}`} target="_blank" rel="noopener noreferrer">
          <Image alt="Instagram" src={Instagram} />
        </a>
        <a href={`https://twitter.com/intent/tweet?url=${encodeURIComponent(currentUrl)}`} target="_blank" rel="noopener noreferrer">
          <Image alt="Twitter" src={Twitter} />
        </a>
      </div>
    </div>
      <div className="side_bg_img"></div>
      <h3 className="text-lg font-semibold mb-4">More Posts</h3>
      <ul>
        {blogs.map((blog) => (
          <li
            onClick={() => sendId(blog.pageTitle)}
            key={blog._id} style={{zIndex:'444', position:'relative'}}
            className="flex items-start mb-4 shadow-sm rounded-lg p-2 hover:shadow-md gap-4 cursor-pointer border border-tertiary hover:scale-105 transition-transform duration-200 ease-in-out"

          >
            {blog.featuredImage.length > 0 && (
              <Image
                src={blog.featuredImage[0]}
                alt={blog.heading}
                className="blog_slide_img rounded-md object-cover"
                width={100}
                height={100}
                style={{ border: "2px solid #EDE574" }}
                layout="responsive"
              />
            )}
            <div>
              <h4 className="text-sm font-medium text-white">{blog.heading}</h4>
              {/* <p className="text-xs text-white">
                {new Date(blog.createdAt).toLocaleDateString()}
              </p> */}
            </div>
          </li>
        ))}
      </ul>
      {/* Pagination Buttons */}
      {totalPages > 1 && (
      <div className="flex justify-center mt-4">
        {[...Array(totalPages)].map((_, index) => (
          <button
            key={index}
            onClick={() => handlePageChange(index + 1)}
            className={`px-4 py-2 text-black mx-1 rounded-full text-sm ${
              currentPage === index + 1 ? "active" : "bg-gray-200 text-gray-700"
            }`}
            style={
              currentPage === index + 1
                ? {
                    background: "linear-gradient(45deg, #E1F5C4, #EDE574)",
                    color: "black",
                  }
                : {}
            }
          >
            {index + 1}
          </button>
        ))}
      </div>
)}
    </div>
  );
}
