// "use client";

// import React, { useEffect, useState } from "react";
// import dynamic from "next/dynamic";
// import {
//   TextField,
//   Button,
//   Box,
//   Checkbox,
//   FormControlLabel,
//   IconButton,
// } from "@mui/material";
// import { FiX } from "react-icons/fi";
// import { useRouter, useSearchParams } from "next/navigation";

// // Dynamically import ReactQuill to avoid SSR issues
// const ReactQuill = dynamic(() => import("react-quill"), { ssr: false });
// import "react-quill/dist/quill.snow.css";
// import Image from "next/image";

// type PrivacyPolicyData = {
//   heading: string;
//   content: string;
//   pageTitle: string;
//   pageKeywords: string;
//   metaDescription: string;
//   status: boolean;
//   images: string[];
// };

// const PrivacyPolicyPage: React.FC = () => {
//   const [policyData, setPolicyData] = useState<PrivacyPolicyData>({
//     heading: "",
//     content: "",
//     pageTitle: "",
//     pageKeywords: "",
//     metaDescription: "",
//     status: true,
//     images: [],
//   });
//   const [errors, setErrors] = useState<{ [key: string]: string }>({});
//   const [isEditMode, setIsEditMode] = useState(false);
//   const router = useRouter();
//   const searchParams = useSearchParams();
//   const policyId = searchParams.get("id"); // Get policy ID from URL if editing

//   useEffect(() => {
//     if (policyId) {
//       setIsEditMode(true);
//       const fetchPolicy = async () => {
//         try {
//           const response = await fetch(
//             `https://labxbackend.labxrepair.com.au/api/admin/privacypolicybyId/${policyId}`
//           );
//           if (!response.ok)
//             throw new Error(`Error fetching policy: ${response.statusText}`);
//           const data = await response.json();
//           setPolicyData({
//             heading: data.heading,
//             content: data.content,
//             pageTitle: data.pageTitle,
//             pageKeywords: data.pageKeywords,
//             metaDescription: data.metaDescription,
//             status: data.status,
//             images: data.images || [],
//           });
//         } catch (error) {
//           console.error("Error fetching privacy policy:", error);
//         }
//       };

//       fetchPolicy();
//     }
//   }, [policyId]);

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
//     setPolicyData((prev) => ({ ...prev, [name]: value }));
//   };

//   const handleEditorChange = (content: string) => {
//     setPolicyData((prev) => ({ ...prev, content }));
//   };

//   const handleStatusChange = (e: React.ChangeEvent<HTMLInputElement>) => {
//     setPolicyData((prev) => ({ ...prev, status: e.target.checked }));
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
//           setPolicyData((prev) => ({
//             ...prev,
//             images: [...prev.images, ...base64Images],
//           }));
//         };
//       });
//     }
//   };

//   const handleRemoveImage = (index: number) => {
//     const updatedImages = policyData.images.filter((_, i) => i !== index);
//     setPolicyData((prev) => ({ ...prev, images: updatedImages }));
//   };

//   const validate = (): boolean => {
//     const newErrors: { [key: string]: string } = {};
//     if (!policyData.heading) newErrors.heading = "Heading is required";
//     if (!policyData.content) newErrors.content = "Content is required";
//     if (!policyData.pageTitle) newErrors.pageTitle = "Page title is required";
//     if (!policyData.pageKeywords)
//       newErrors.pageKeywords = "Page keywords are required";
//     if (!policyData.metaDescription)
//       newErrors.metaDescription = "Meta description is required";

//     setErrors(newErrors);
//     return Object.keys(newErrors).length === 0;
//   };

//   const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
//     e.preventDefault();

//     if (!validate()) return;

//     try {
//       const url = isEditMode
//         ? `https://labxbackend.labxrepair.com.au/api/admin/privacypolicy/${policyId}`
//         : "https://labxbackend.labxrepair.com.au/api/admin/privacypolicy";
//       const method = isEditMode ? "PUT" : "POST";

//       const response = await fetch(url, {
//         method,
//         headers: {
//           "Content-Type": "application/json",
//         },
//         body: JSON.stringify({
//           ...policyData,
//         }),
//       });

//       if (response.ok) {
//         alert(
//           isEditMode
//             ? "Privacy Policy updated successfully!"
//             : "Privacy Policy created successfully!"
//         );
//         setPolicyData({
//           heading: "",
//           content: "",
//           pageTitle: "",
//           pageKeywords: "",
//           metaDescription: "",
//           status: true,
//           images: [],
//         });
//         router.push("/adminDeshboard/privacypolicyListing");
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
//     <Box sx={{ backgroundColor: "skyBlue", p: 4, borderRadius: 2 }}>
//       <h2
//         style={{ textAlign: "center", marginBottom: "20px", color: "#1976d2" }}
//       >
//         {isEditMode ? "Edit Privacy Policy" : "Create Privacy Policy"}
//       </h2>
//       <form
//         onSubmit={handleSubmit}
//         style={{ display: "flex", flexDirection: "column", gap: "20px" }}
//       >
//         <TextField
//           required
//           label="Heading"
//           name="heading"
//           fullWidth
//           value={policyData.heading}
//           onChange={handleChange}
//           error={!!errors.heading}
//           helperText={errors.heading}
//         />
//         <label> Description*</label>
//         {typeof window !== "undefined" && (
//           <ReactQuill
//             value={policyData.content}
//             onChange={handleEditorChange}
//             modules={modules}
//             theme="snow"
//             style={{ height: "300px", marginBottom: "20px" }}
//           />
//         )}
//         {errors.content && <p style={{ color: "red" }}>{errors.content}</p>}
//         <TextField
//           required
//           label="Page Title"
//           name="pageTitle"
//           fullWidth
//           value={policyData.pageTitle}
//           onChange={handleChange}
//           error={!!errors.pageTitle}
//           helperText={errors.pageTitle}
//         />
//         <TextField
//           required
//           label="Page Keywords"
//           name="pageKeywords"
//           fullWidth
//           value={policyData.pageKeywords}
//           onChange={handleChange}
//           error={!!errors.pageKeywords}
//           helperText={errors.pageKeywords}
//         />
//         <TextField
//           required
//           label="Meta Description"
//           name="metaDescription"
//           fullWidth
//           value={policyData.metaDescription}
//           onChange={handleChange}
//           error={!!errors.metaDescription}
//           helperText={errors.metaDescription}
//         />
//         <FormControlLabel
//           control={
//             <Checkbox
//               checked={policyData.status}
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
//         {policyData.images.length > 0 && (
//           <Box sx={{ display: "flex", flexWrap: "wrap", gap: 2, mt: 2 }}>
//             {policyData.images.map((image, index) => (
//               <Box key={index} sx={{ position: "relative" }}>
//                 <Image
//                   src={image}
//                   alt={`Image ${index + 1}`}
//                   style={{
//                     maxWidth: "150px",
//                     maxHeight: "150px",
//                     borderRadius: "8px",
//                   }}
//                 />
//                 <IconButton
//                   onClick={() => handleRemoveImage(index)}
//                   sx={{
//                     position: "absolute",
//                     top: 0,
//                     right: 0,
//                     backgroundColor: "#fff",
//                   }}
//                 >
//                   <FiX color="red" />
//                 </IconButton>
//               </Box>
//             ))}
//           </Box>
//         )}
//         <Button type="submit" variant="contained" color="primary" fullWidth>
//           {isEditMode ? "Update Privacy Policy" : "Create Privacy Policy"}
//         </Button>
//       </form>
//     </Box>
//   );
// };

// export default PrivacyPolicyPage;


















"use client";

import dynamic from "next/dynamic";

// Dynamically import the PrivacyPolicyPage component with ssr: false
const PrivacyPolicyPage = dynamic(() => import("./PrivacyPolicyPage/PrivacyPolicyPage"), {
  ssr: false, // Disable SSR for this component
});

export default function Page() {
  return (
    <div style={{ padding: "20px" }}>
      <PrivacyPolicyPage />
    </div>
  );
}
