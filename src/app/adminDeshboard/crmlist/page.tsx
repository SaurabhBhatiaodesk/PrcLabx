"use client";

import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { FiClipboard, FiEdit, FiTrash } from "react-icons/fi";
import IconButton from "@mui/material/IconButton";

type Page = {
  _id: string;
  pageName: string;
  pageEditor: string;
  seoPageTitle: string;
  pageKeywords: string;
  pageDescription: string;
  status: boolean;
  images: string[];
};

const CreatePageList: React.FC = () => {
  const [pages, setPages] = useState<Page[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string>("");
  const router = useRouter();

  useEffect(() => {
    fetchPages();
  }, []);

  const fetchPages = async () => {
    try {
      const response = await fetch("https://labxbackend.labxrepair.com.au/api/admin/createpage");

      if (!response.ok) {
        throw new Error("Failed to fetch pages");
      }

      const data = await response.json();
      if (data.status === 200) {
        setPages(data.data);
      } else {
        throw new Error("Error retrieving pages");
      }
    } catch (error: any) {
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };

  const handleEdit = (id: string) => {
    router.push(`/adminDeshboard/createpage?id=${id}`);
  };

  const handleDelete = async (id: string) => {
    if (window.confirm("Are you sure you want to delete this page?")) {
      try {
        const response = await fetch(`https://labxbackend.labxrepair.com.au/api/admin/deletepage/${id}`, {
          method: "DELETE",
          headers: { "Content-Type": "application/json" },
        });

        if (response.ok) {
          setPages((prevPages) => prevPages.filter((page) => page._id !== id));
          alert("Page deleted successfully");
        } else {
          const errorData = await response.json();
          alert(`Failed to delete page: ${errorData.message}`);
        }
      } catch (error) {
        console.error("Error deleting page:", error);
      }
    }
  };




  const handleCopyClick = (pageName: string) => {
    const pageUrl = `https://labxrepair.com.au/${pageName.replace(/\s+/g, '_')}`;
    navigator.clipboard.writeText(pageUrl).then(() => {
      alert("URL copied to clipboard!");
    });
  };

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  const stripHtmlTags = (text: string) => {
    return text.replace(/<[^>]*>/g, "");
  };

  return (
    <div className="page-list table-os">
      <h2>Pages List</h2>
      <table className="table-auto w-full border-collapse">
        <thead>
          <tr>
            <th className="px-4 py-2 border">Page Name</th>
            {/* <th className="px-4 py-2 border">Description</th> */}
            <th className="px-4 py-2 border">SEO Title</th>
            <th className="px-4 py-2 border">Status</th>
            <th className="px-4 py-2 border">Actions</th>
          </tr>
        </thead>
        <tbody>
          {pages.map((page) => (
            <tr key={page._id}>
              <td className="px-4 py-2 border">{page.pageName.replace(/_/g, " ")}</td>
              {/* <td className="px-4 py-2 border">{stripHtmlTags(page.pageEditor)}</td> */}
              <td className="px-4 py-2 border">{page.seoPageTitle}</td>
              <td className="px-4 py-2 border">{page.status ? "Active" : "Inactive"}</td>
              <td className="px-4 py-2 border">
                <IconButton onClick={() => handleEdit(page._id)} color="primary">
                  <FiEdit />
                </IconButton>
                <IconButton onClick={() => handleDelete(page._id)} color="error">
                  <FiTrash />
                </IconButton>
                <IconButton onClick={() => handleCopyClick(page.pageName)} color="default">
                  <FiClipboard />
                </IconButton>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default CreatePageList;
