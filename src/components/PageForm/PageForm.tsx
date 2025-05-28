// 'use client';

// import { useState, useEffect } from 'react';
// import { TextField, Button, Box, Checkbox, FormControlLabel, IconButton } from '@mui/material';
// // import ReactQuill from 'react-quill';
// import 'react-quill/dist/quill.snow.css';
// import { useRouter, useSearchParams } from 'next/navigation';
// import { FiX } from "react-icons/fi";
// import Image from 'next/image';
// import dynamic from 'next/dynamic';


// const ReactQuill = dynamic(() => import('react-quill'), { ssr: false });

// interface PageFormProps {
//   onSubmit: (formData: { title: string; keywords: string; description: string; content: string }) => void;
// }


// export default function CreatePage({ onSubmit }: PageFormProps) {
//   const router = useRouter();
//   const searchParams = useSearchParams();
//   const pageId = searchParams.get("id"); // Get page ID from query params to determine edit mode


//   console.log('pageIddd',pageId)
//   const [formData, setFormData] = useState({
//     pageName: "",
//     pageEditor: "",
//     seoPageTitle: "",
//     pageKeywords: "",
//     pageDescription: "",
//     status: true, // Default checked for creation
//     images: [] as string[],
//   });

//   const [errors, setErrors] = useState<{ [key: string]: string }>({});

//   useEffect(() => {
//     if (pageId) {
//       fetchPageDetails();
//     }
//   }, [pageId]);

//   const fetchPageDetails = async () => {
//     try {
//       const response = await fetch(`https://labxbackend.labxrepair.com.au/api/admin/getPageById/${pageId}`);
//       if (!response.ok) throw new Error("Failed to fetch page details");
//       const data = await response.json();
//       setFormData({
//         ...data.data,
//         images: data.data.images || [], // Ensure images field is handled
//       });
//     } catch (error) {
//       console.error("Error fetching page details:", error);
//     }
//   };

//   const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
//     const { name, value } = e.target;
//     setFormData((prev) => ({ ...prev, [name]: value }));
//   };

//   const handleCheckboxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
//     const { checked } = e.target;
//     setFormData((prev) => ({ ...prev, status: checked }));
//   };

//   const handleEditorChange = (content: string) => {
//     setFormData((prev) => ({ ...prev, pageEditor: content }));
//   };

//   const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
//     if (e.target.files) {
//       const files = Array.from(e.target.files);
//       const base64Images: string[] = [];

//       files.forEach((file) => {
//         const reader = new FileReader();
//         reader.readAsDataURL(file);
//         reader.onloadend = () => {
//           base64Images.push(reader.result as string);
//           setFormData((prev) => ({
//             ...prev,
//             images: [...prev.images, ...base64Images],
//           }));
//         };
//       });
//     }
//   };

//   const handleRemoveImage = (index: number) => {
//     setFormData((prev) => ({
//       ...prev,
//       images: prev.images.filter((_, i) => i !== index),
//     }));
//   };

//   const handleSubmit = async (e: React.FormEvent) => {
//     e.preventDefault();

//     const url = pageId
//       ? `https://labxbackend.labxrepair.com.au/api/admin/updatePage/${pageId}` // Update URL
//       : "https://labxbackend.labxrepair.com.au/api/admin/createpage"; // Create URL
//     const method = pageId ? "PUT" : "POST";

//     const dataToSend = {
//       ...formData,
//       pageName: formData.pageName.replace(/\s+/g, '_'), // Replace spaces with underscores
//     };

//     try {
//       const response = await fetch(url, {
//         method,
//         headers: { "Content-Type": "application/json" },
//         body: JSON.stringify(dataToSend),
//       });

//       if (response.ok) {
//         alert(pageId ? "Page updated successfully!" : "Page created successfully!");
//         router.push("/adminDeshboard/crmlist");
//       } else {
//         const errorData = await response.json();
//         alert(`Error: ${errorData.message}`);
//       }
//     } catch (error) {
//       console.error("Request failed:", error);
//       alert("Failed to save the page");
//     }
//   };

//   return (
//     <Box component="form" onSubmit={handleSubmit} sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
//       <TextField
//         required
//         label="Page Name"
//         name="pageName"
//         value={formData.pageName}
//         onChange={handleChange}
//         helperText={errors.pageName}
//         error={!!errors.pageName}
//       />
//       <label>Description</label>
//       <ReactQuill value={formData.pageEditor} onChange={handleEditorChange} theme="snow" />
//       <TextField
//         required
//         label="SEO Page Title"
//         name="seoPageTitle"
//         value={formData.seoPageTitle}
//         onChange={handleChange}
//       />
//       <TextField
//         required
//         label="Page Keywords"
//         name="pageKeywords"
//         value={formData.pageKeywords}
//         onChange={handleChange}
//       />
//       <TextField
//         required
//         label="Page Description"
//         name="pageDescription"
//         value={formData.pageDescription}
//         onChange={handleChange}
//       />
//       <FormControlLabel
//         control={<Checkbox checked={formData.status} onChange={handleCheckboxChange} />}
//         label="Status"
//       />
//       <input type="file" multiple accept="image/*" onChange={handleImageChange} />
//       {formData.images.length > 0 && (
//         <div>
//           {formData.images.map((image, index) => (
//             <div key={index} style={{ position: "relative", display: "inline-block" }}>
//               <Image src={image} alt={`Selected ${index}`} style={{ width: 100, height: 100 }} />
//               <IconButton onClick={() => handleRemoveImage(index)}>
//                 <FiX color="red" />
//               </IconButton>
//             </div>
//           ))}
//         </div>
//       )}
//       <Button type="submit" variant="contained">
//         {pageId ? "Update Page" : "Create Page"}
//       </Button>
//     </Box>
//   );
// }















'use client';

import { useState, useEffect, useCallback } from 'react';
import { TextField, Button, Box, Checkbox, FormControlLabel, IconButton } from '@mui/material';
import { useRouter, useSearchParams } from 'next/navigation';
import { FiX } from "react-icons/fi";
import Image from 'next/image';
import dynamic from 'next/dynamic';
const ReactQuill = dynamic(() => import('react-quill'), { ssr: false });
import "react-quill/dist/quill.snow.css";

interface PageFormProps {
  onSubmit: (formData: { title: string; keywords: string; description: string; content: string }) => void;
}

export default function CreatePage({ onSubmit }: PageFormProps) {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [pageId, setPageId] = useState<string | null>(null); // Using local state to store pageId
  const [formData, setFormData] = useState({
    pageName: "",
    pageEditor: "",
    seoPageTitle: "",
    pageKeywords: "",
    pageDescription: "",
    status: true, // Default checked for creation
    images: [] as string[],
  });

  const [errors, setErrors] = useState<{ [key: string]: string }>({});

  // Fetch page ID from searchParams when the component mounts
  useEffect(() => {
    const id = searchParams.get("id");
    setPageId(id); // Set the page ID from query params
  }, [searchParams]);

  const fetchPageDetails = useCallback(async () => {
    if (!pageId) return; // Only fetch if there's a pageId

    try {
      const response = await fetch(`https://labxbackend.labxrepair.com.au/api/admin/getPageById/${pageId}`);
      if (!response.ok) throw new Error("Failed to fetch page details");
      const data = await response.json();
      setFormData({
        ...data.data,
        images: data.data.images || [], // Ensure images field is handled
      });
    } catch (error) {
      console.error("Error fetching page details:", error);
    }
  }, [pageId]); // Add pageId as a dependency

  useEffect(() => {
    fetchPageDetails(); // Fetch page details if pageId is available
  }, [fetchPageDetails]); // Run fetchPageDetails when pageId changes

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleCheckboxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { checked } = e.target;
    setFormData((prev) => ({ ...prev, status: checked }));
  };

  const handleEditorChange = (content: string) => {
    setFormData((prev) => ({ ...prev, pageEditor: content }));
  };

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      const files = Array.from(e.target.files);
      const base64Images: string[] = [];

      files.forEach((file) => {
        const reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onloadend = () => {
          base64Images.push(reader.result as string);
          setFormData((prev) => ({
            ...prev,
            images: [...prev.images, ...base64Images],
          }));
        };
      });
    }
  };

  const handleRemoveImage = (index: number) => {
    setFormData((prev) => ({
      ...prev,
      images: prev.images.filter((_, i) => i !== index),
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const url = pageId
      ? `https://labxbackend.labxrepair.com.au/api/admin/updatePage/${pageId}` // Update URL
      : "https://labxbackend.labxrepair.com.au/api/admin/createpage"; // Create URL
    const method = pageId ? "PUT" : "POST";

    const dataToSend = {
      ...formData,
      pageName: formData.pageName.replace(/\s+/g, '_'), // Replace spaces with underscores
    };

    try {
      const response = await fetch(url, {
        method,
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(dataToSend),
      });

      if (response.ok) {
        alert(pageId ? "Page updated successfully!" : "Page created successfully!");
        router.push("/adminDeshboard/crmlist");
      } else {
        const errorData = await response.json();
        alert(`Error: ${errorData.message}`);
      }
    } catch (error) {
      console.error("Request failed:", error);
      alert("Failed to save the page");
    }
  };

  return (
    <Box component="form" onSubmit={handleSubmit} sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
      <TextField
        required
        label="Page Name"
        name="pageName"
        value={formData.pageName}
        onChange={handleChange}
        helperText={errors.pageName}
        error={!!errors.pageName}
      />
      <label>Description</label>
      <ReactQuill value={formData.pageEditor} onChange={handleEditorChange} theme="snow" />
      <TextField
        required
        label="SEO Page Title"
        name="seoPageTitle"
        value={formData.seoPageTitle}
        onChange={handleChange}
      />
      <TextField
        required
        label="Page Keywords"
        name="pageKeywords"
        value={formData.pageKeywords}
        onChange={handleChange}
      />
      <TextField
        required
        label="Page Description"
        name="pageDescription"
        value={formData.pageDescription}
        onChange={handleChange}
      />
      <FormControlLabel
        control={<Checkbox checked={formData.status} onChange={handleCheckboxChange} />}
        label="Status"
      />
      <input type="file" multiple accept="image/*" onChange={handleImageChange} />
      {formData.images.length > 0 && (
        <div>
          {formData?.images?.length > 0 ? (
                  <div className="flex flex-wrap gap-2">
                    {formData?.images.map((image, index) => (
                      <div
                        key={index}
                        style={{
                          position: "relative",
                          display: "inline-block",
                        }}
                      >
                        <Image
                          src={image} // Base64 image string or image URL
                          alt={`Image ${index + 1}`}
                          width={400}
                          height={300}
                          className="rounded-md"
                        />
                      </div>
                    ))}
                  </div>
                ) : (
                  "No Image"
                )}
        </div>
      )}
      <Button type="submit" variant="contained">
        {pageId ? "Update Page" : "Create Page"}
      </Button>
    </Box>
  );
}
