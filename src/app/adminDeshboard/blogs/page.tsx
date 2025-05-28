// "use client";

// import React, { useEffect, useState } from "react";
// import {
//   TextField,
//   Button,
//   Box,
//   Checkbox,
//   FormControlLabel,
//   IconButton,
// } from "@mui/material";
// // import ReactQuill from 'react-quill';
// import "react-quill/dist/quill.snow.css";
// import { FiX } from "react-icons/fi";
// import { useRouter, useSearchParams } from "next/navigation";
// import Head from "next/head";
// import Image from "next/image";
// import dynamic from "next/dynamic";

// const ReactQuill = dynamic(() => import("react-quill"), { ssr: false });

// type BlogData = {
//   heading: string;
//   content: string; // Treated as page description
//   pageTitle: string;
//   pageKeywords: string; // Meta keywords field
//   metaDescription: string; // New meta description field
//   status: boolean;
//   featuredImages: string[];
// };

// const BlogPage: React.FC = () => {
//   const [blogData, setBlogData] = useState<BlogData>({
//     heading: "",
//     content: "",
//     pageTitle: "",
//     pageKeywords: "",
//     metaDescription: "", // Initialize meta description
//     status: true,
//     featuredImages: [],
//   });
//   const [errors, setErrors] = useState<{ [key: string]: string }>({});
//   const [isEditMode, setIsEditMode] = useState(false);
//   const router = useRouter();
//   const searchParams = useSearchParams();
//   const blogId = searchParams.get('id'); // Get blog ID from the URL if editing

//   useEffect(() => {
//     if (blogId) {
//       setIsEditMode(true);
//       const fetchBlog = async () => {
//         try {
//           const response = await fetch(
//             `https://labxbackend.labxrepair.com.au/api/admin/blog/${blogId}`
//           );
//           const data = await response.json();
//           setBlogData({
//             heading: data.heading,
//             content: data.content,
//             pageTitle: data.pageTitle,
//             pageKeywords: data.pageKeywords,
//             metaDescription: data.metaDescription, // Populate meta description
//             status: data.status,
//             featuredImages: data.featuredImage || [],
//           });
//         } catch (error) {
//           console.error("Error fetching blog:", error);
//         }
//       };

//       fetchBlog();
//     } else {
//       setIsEditMode(false);
//     }
//   }, [blogId]);

//   const modules = {
//     toolbar: [
//       [{ header: "1" }, { header: "2" }, { font: [] }],
//       [{ list: "ordered" }, { list: "bullet" }],
//       ["bold", "italic", "underline"],
//       ["link", "blockquote"],
//       [{ align: [] }],
//     ],
//   };

//   const handleChange = (
//     e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
//   ) => {
//     const { name, value } = e.target;
//     setBlogData((prev) => ({ ...prev, [name]: value }));
//   };

//   const handleEditorChange = (content: string) => {
//     setBlogData((prev) => ({ ...prev, content }));
//   };

//   const handleStatusChange = (e: React.ChangeEvent<HTMLInputElement>) => {
//     setBlogData((prev) => ({ ...prev, status: e.target.checked }));
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
//           setBlogData((prev) => ({
//             ...prev,
//             featuredImages: [...prev.featuredImages, ...base64Images],
//           }));
//         };
//       });
//     }
//   };

//   const handleRemoveImage = (index: number) => {
//     const updatedImages = blogData.featuredImages.filter((_, i) => i !== index);
//     setBlogData((prev) => ({ ...prev, featuredImages: updatedImages }));
//   };

//   const validate = (): boolean => {
//     const newErrors: { [key: string]: string } = {};
//     if (!blogData.heading) newErrors.heading = "Heading is required";
//     if (!blogData.content) newErrors.content = "Content is required";
//     if (!blogData.pageTitle) newErrors.pageTitle = "Page title is required";
//     if (!blogData.pageKeywords)
//       newErrors.pageKeywords = "Page keywords are required";
//     if (!blogData.metaDescription)
//       newErrors.metaDescription = "Meta description is required";

//     setErrors(newErrors);
//     return Object.keys(newErrors).length === 0;
//   };

//   const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
//     e.preventDefault();

//     if (!validate()) return;

//     try {
//       const url = isEditMode
//         ? `https://labxbackend.labxrepair.com.au/api/admin/blog/${blogId}`
//         : "https://labxbackend.labxrepair.com.au/api/admin/blog";
//       const method = isEditMode ? "PUT" : "POST";

//       const response = await fetch(url, {
//         method,
//         headers: {
//           "Content-Type": "application/json",
//         },
//         body: JSON.stringify({
//           ...blogData,
//           featuredImages: blogData.featuredImages,
//         }),
//       });

//       if (response.ok) {
//         alert(
//           isEditMode
//             ? "Blog updated successfully!"
//             : "Blog created successfully!"
//         );
//         setBlogData({
//           heading: "",
//           content: "",
//           pageTitle: "",
//           pageKeywords: "",
//           metaDescription: "",
//           status: true,
//           featuredImages: [],
//         });
//         router.push("/adminDeshboard/bloglisting");
//       } else {
//         const error = await response.json();
//         alert(`Error: ${error.error}`);
//       }
//     } catch (error) {
//       console.error("Request failed", error);
//       alert("Request failed");
//     }
//   };

//   return (
//     <div
//       className="container mx-auto my-10 p-6 bg-white shadow-lg rounded-lg"
//       style={{ backgroundColor: "skyBlue" }}
//     >
//       <Head>
//         <title>
//           {isEditMode ? `Edit: ${blogData.heading}` : "Create New Blog"}
//         </title>
//         <meta name="description" content={blogData.metaDescription} />
//         <meta name="keywords" content={blogData.pageKeywords} />
//       </Head>
//       <h2 className="text-2xl font-semibold text-center mb-6">
//         {isEditMode ? "Edit Blog" : "Create New Blog"}
//       </h2>
//       <form onSubmit={handleSubmit} className="space-y-4">
//         <TextField
//           required
//           label="Heading"
//           name="heading"
//           fullWidth
//           value={blogData.heading}
//           onChange={handleChange}
//           error={!!errors.heading}
//           helperText={errors.heading}
//         />
//         <label> Description*</label>
//         <ReactQuill
//           value={blogData.content}
//           onChange={handleEditorChange}
//           modules={modules}
//           theme="snow"
//           className="border rounded-lg"
//           style={{ height: "300px", marginBottom: "20px" }}
//         />
//         {errors.content && <p className="text-red-500">{errors.content}</p>}
//         <TextField
//           required
//           label="Page Title"
//           name="pageTitle"
//           fullWidth
//           value={blogData.pageTitle}
//           onChange={handleChange}
//           error={!!errors.pageTitle}
//           helperText={errors.pageTitle}
//         />
//         <TextField
//           required
//           label="Page Keywords"
//           name="pageKeywords"
//           fullWidth
//           value={blogData.pageKeywords}
//           onChange={handleChange}
//           error={!!errors.pageKeywords}
//           helperText={errors.pageKeywords}
//         />
//         <TextField
//           required
//           label="Meta Description"
//           name="metaDescription"
//           fullWidth
//           value={blogData.metaDescription}
//           onChange={handleChange}
//           error={!!errors.metaDescription}
//           helperText={errors.metaDescription}
//         />
//         <FormControlLabel
//           control={
//             <Checkbox
//               name="status"
//               checked={blogData.status}
//               onChange={handleStatusChange}
//             />
//           }
//           label="Status"
//         />
//         <input
//           type="file"
//           multiple
//           accept="image/*"
//           onChange={handleImageChange}
//         />
//         {blogData?.featuredImages?.length > 0 && (
//           <div style={{ display: "flex", flexWrap: "wrap", gap: "10px" }}>
//             {blogData?.featuredImages?.map((image, index) => (
//               <div
//                 key={index}
//                 style={{ position: "relative", display: "inline-block" }}
//               >
//                 <Image
//                   src={image}
//                   alt={`Selected Image ${index + 1}`}
//                   width={150}
//                   height={150}
//                   style={{ borderRadius: "8px" }}
//                   objectFit="cover"
//                 />
//                 <IconButton
//                   onClick={() => handleRemoveImage(index)}
//                   style={{
//                     position: "absolute",
//                     top: 0,
//                     right: 0,
//                     backgroundColor: "white",
//                     borderRadius: "50%",
//                   }}
//                 >
//                   <FiX color="red" />
//                 </IconButton>
//               </div>
//             ))}
//           </div>
//         )}
//         <Button type="submit" variant="contained" color="primary" fullWidth>
//           {isEditMode ? "Update Blog" : "Create Blog"}
//         </Button>
//       </form>
//     </div>
//   );
// };

// export default BlogPage;

import React, { Suspense } from "react";

// Dynamically import the BlogPage component to disable SSR
const BlogPageWrapper = React.lazy(
  () => import("./BlogPageWrapper/BlogPageWrapper")
);

const BlogPage: React.FC = () => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <BlogPageWrapper />
    </Suspense>
  );
};

export default BlogPage;
