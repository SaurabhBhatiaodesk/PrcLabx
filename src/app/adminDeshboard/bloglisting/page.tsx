"use client";
import React, { useEffect, useState } from "react";
import { FaEdit, FaTrashAlt } from "react-icons/fa";
import { useRouter } from "next/navigation";
import Image from "next/image";

interface BlogData {
  _id: string;
  heading: string;
  content: string;
  pageTitle: string;
  metaDescription: string;
  pageKeywords: string;
  featuredImage: string[];
  status: boolean;
  createdAt: string;
  updatedAt: string;
}

interface PaginationData {
  totalBlogs: number;
  currentPage: number;
  totalPages: number;
  hasNextPage: boolean;
  hasPrevPage: boolean;
}

const BlogsListing: React.FC = () => {
  const [blogs, setBlogs] = useState<BlogData[]>([]);
  const [pagination, setPagination] = useState<PaginationData | null>(null);
  const [page, setPage] = useState<number>(1);
  const [showModal, setShowModal] = useState<boolean>(false); // Modal state
  const [deleteId, setDeleteId] = useState<string | null>(null); // Blog ID to delete
  const router = useRouter();

  const limit = 10; // Items per page

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const response = await fetch(
          `https://labxbackend.labxrepair.com.au/api/admin/blogs?page=${page}&limit=${limit}`
        );
        const data = await response.json();
        console.log("datadata", data);
        setBlogs(data.blogs);
        setPagination(data.pagination);
      } catch (error) {
        console.error("Error fetching blogs:", error);
      }
    };

    fetchBlogs();
  }, [page]);

  // Handle edit action
  const handleEdit = (id: string) => {
    router.push(`/adminDeshboard/blogs?id=${id}`); // Navigate to edit page
  };

  // Handle delete confirmation
  const confirmDelete = (id: string) => {
    setDeleteId(id);
    setShowModal(true); // Show the modal
  };

  // Handle delete action
  const handleDelete = async () => {
    if (!deleteId) return;

    try {
      const response = await fetch(
        `https://labxbackend.labxrepair.com.au/api/admin/blog/${deleteId}`,
        {
          method: "DELETE",
        }
      );
      if (response.ok) {
        alert("Blog deleted successfully!");
        setBlogs((prev) => prev.filter((blog) => blog._id !== deleteId)); // Remove deleted blog from UI
      } else {
        alert("Failed to delete blog.");
      }
    } catch (error) {
      console.error("Error deleting blog:", error);
    } finally {
      setShowModal(false); // Close the modal
      setDeleteId(null); // Reset the delete ID
    }
  };

  return (
    <div
      style={{ backgroundColor: "skyblue" }}
      className="container mx-auto my-10 p-6 bg-white shadow-lg rounded-lg"
    >
      <h2 className="text-2xl font-semibold text-center mb-6">Blogs List</h2>
      <table className="table-auto w-full border-collapse border border-gray-300">
        <thead>
          <tr className="bg-indigo-600 text-white">
            <th className="py-2 px-4 border w-1/5">Heading</th>
            <th className="py-2 px-4 border w-1/5">Page Title</th>
            <th className="py-2 px-4 border w-1/10">Status</th>
            <th className="py-2 px-4 border w-1/5">Images</th>
            <th className="py-2 px-4 border w-1/10">Actions</th>
          </tr>
        </thead>
        <tbody>
          {blogs.map((blog) => (
            <tr key={blog._id} className="hover:bg-gray-100">
              <td className="py-2 px-4 border">{blog.heading}</td>
              <td className="py-2 px-4 border">{blog.pageTitle}</td>
              <td className="py-2 px-4 border">
                {blog.status ? "Active" : "Inactive"}
              </td>
              <td className="py-2 px-4 border">
                {blog?.featuredImage?.length > 0 ? (
                  <div className="flex flex-wrap gap-2">
                    {blog?.featuredImage.map((image, index) => (
                      <div
                        key={index}
                        style={{
                          position: "relative",
                          display: "inline-block",
                        }}
                      >
                        <Image
                          src={image} // Image URL from the S3 bucket
                          alt={`Image ${index + 1}`}
                          width={400}
                          height={300}
                          className="rounded-md"
                          priority={index === 0} // Preload the first image
                        />
                      </div>
                    ))}
                  </div>
                ) : (
                  "No Image"
                )}
              </td>
              <td className="py-2 px-4 border">
                <div className="flex justify-center gap-2">
                  <button
                    onClick={() => handleEdit(blog._id)} // Handle edit
                    className="text-blue-500 hover:text-blue-700"
                    title="Edit"
                  >
                    <FaEdit />
                  </button>
                  <button
                    onClick={() => confirmDelete(blog._id)} // Handle delete confirmation
                    className="text-red-500 hover:text-red-700"
                    title="Delete"
                  >
                    <FaTrashAlt />
                  </button>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* Pagination Controls */}
      {pagination && (
        <div className="flex justify-center mt-6 space-x-4">
          {[...Array(pagination.totalPages)].map((_, index) => (
            <button
              key={index}
              className={`px-4 py-2 rounded-md ${
                pagination.currentPage === index + 1
                  ? "bg-blue-500 text-white"
                  : "bg-gray-300 text-gray-700 hover:bg-gray-400"
              }`}
              onClick={() => setPage(index + 1)}
            >
              {index + 1}
            </button>
          ))}
        </div>
      )}

      {/* Delete Confirmation Modal */}
      {showModal && (
        <div className="confirmation-modal-os fixed inset-0 bg-gray-800 bg-opacity-50 flex justify-center items-center">
          <div className="bg-white p-6 rounded-lg shadow-lg w-1/3">
            <h3 className="text-lg font-semibold mb-4">
              Are you sure you want to delete this blog?
            </h3>
            <div className="flex justify-end gap-4">
              <button
                onClick={() => {
                  setShowModal(false);
                  setDeleteId(null);
                }}
                className="px-4 py-2 bg-gray-300 rounded hover:bg-gray-400"
              >
                Cancel
              </button>
              <button
                onClick={handleDelete}
                className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600"
              >
                Delete
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default BlogsListing;
