"use client";
import React, { useState } from "react";
import axios from "axios";
import { usePathname } from "next/navigation";
import Image from "next/image";
import Link from "next/link";

import {
  TextField,
  Button,
  MenuItem,
  Select,
  FormControl,
  InputLabel,
  SelectChangeEvent,
} from "@mui/material";
import { TextareaAutosize } from "@mui/base";
import "./Contactus.css";
import ToastNotification from "../../components/ToastNotification/ToastNotification";

const ContactForm: React.FC = () => {
  const pathname = usePathname()
  const [isLoading, setIsLoading] = useState(false); // State for loader
  const [toast, setToast] = useState<{
    message: string;
    type: "success" | "error";
  } | null>(null);
  const [formData, setFormData] = useState({
    first_name: "",
    last_name: "",
    email_address: "",
    contact_no: "",
    enquiry_message: "",
  });

  const [formErrors, setFormErrors] = useState({
    first_name: "",
    last_name: "",
    email_address: "",
    contact_no: "",
  });
  const apiUrl = process.env.NEXT_PUBLIC_LEAFYMANGO_API_URL;
  // Handle changes for all form fields
  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | { name?: string; value: unknown }>
  ) => {
    const { name, value } = e.target;

    // Ensure `value` is treated as a string (type assertion)
    const valueAsString = value as string;

    // Prevent spaces in specific fields
    if (
      name === "first_name" ||
      name === "last_name" ||
      name === "email_address" ||
      name === "contact_no"
    ) {
      const trimmedValue = valueAsString.replace(/\s/g, ""); // Remove spaces
      setFormData((prev) => ({
        ...prev,
        [name!]: trimmedValue,
      }));
      // Validate the field as the user types
      validateField(name!, trimmedValue);
    } else {
      setFormData((prev) => ({
        ...prev,
        [name!]: valueAsString,
      }));
      // Validate the field as the user types
      validateField(name!, valueAsString);
    }
  };

  const validateField = (name: string, value: string) => {
    let errors = { ...formErrors };
    switch (name) {
      case "first_name":
        errors.first_name = value === "" ? "First name is required" : "";
        break;
      case "last_name":
        errors.last_name = value === "" ? "Last name is required" : "";
        break;
      case "email_address":
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        errors.email_address =
          value === ""
            ? "Email is required"
            : emailPattern.test(value)
            ? ""
            : "Please enter a valid email address";
        break;
      case "contact_no":
        const phonePattern = /^[0-9]{10}$/;
        errors.contact_no =
          value === ""
            ? "Phone number is required"
            : phonePattern.test(value)
            ? ""
            : "Please enter a valid 10-digit phone number";
        break;
      default:
        break;
    }
    setFormErrors(errors); // Update errors state after validation
  };

  const validateAllFields = () => {
    let errors = {
      first_name: "",
      last_name: "",
      email_address: "",
      contact_no: "",
    }; // Reset errors first

    // Manually validate each field
    validateField("first_name", formData.first_name);
    validateField("last_name", formData.last_name);
    validateField("email_address", formData.email_address);
    validateField("contact_no", formData.contact_no);

    // Check the state of the form data before returning errors
    return errors;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    // setIsLoading(true);
    e.preventDefault();

    // Early validation: Check if any required field is empty
    const errors: {
      first_name: string;
      last_name: string;
      email_address: string;
      contact_no: string;
    } = {
      first_name: "",
      last_name: "",
      email_address: "",
      contact_no: "",
    };

    // Check if the required fields are empty and set errors immediately
    if (formData.first_name === "") {
      errors.first_name = "First name is required";
    }

    if (formData.last_name === "") {
      errors.last_name = "Last name is required";
    }

    if (formData.email_address === "") {
      errors.email_address = "Email is required";
    }

    if (formData.contact_no === "") {
      errors.contact_no = "Phone number is required";
    }

    // If there are errors, prevent the form submission and display validation messages
    if (
      errors.first_name ||
      errors.last_name ||
      errors.email_address ||
      errors.contact_no
    ) {
      setFormErrors(errors);
      return; // Prevent API call if any required field is empty
    }

    // Perform the usual field validation after the initial check
    validateAllFields();

    // If validation fails after the field check, stop the submission
    if (
      formErrors.first_name ||
      formErrors.last_name ||
      formErrors.email_address ||
      formErrors.contact_no
    ) {
      return;
    }
    setIsLoading(true);
    // If everything is validated, proceed with the form submission
    const requestData = {
      first_name: formData.first_name || "",
      last_name: formData.last_name || "",
      email: formData.email_address,
      contact_no: formData.contact_no,
      enquiry_message: formData.enquiry_message || "", // Always include enquiry_message
    };

    try {
      const response = await axios.post(
        `${apiUrl}/api/create/contact-us`, // Replace with your actual API endpoint
        requestData
      );
      // console.log(await response.data, "Form submitted successfully");
      // const responseData = await response.data.json();
      // console.log('responseDatasss',responseData)
      if (response) {
        // alert("Form submitted successfully!");
        setToast({
          message: "your request has been submitted successfully.",
          type: "success",
        });
        // Reset form state with all fields, including enquiry_message
        setFormData({
          first_name: "",
          last_name: "",
          email_address: "",
          contact_no: "",
          enquiry_message: "", // Ensure enquiry_message is reset
        });
      } else {
        // alert("Error submitting the form.");
        setToast({
          message: "Something went wrong. Please try again.",
          type: "error",
        });
      }
    } catch (error) {
      console.error("Error submitting the form", error);
      alert("An error occurred while submitting the form.");
    } finally {
      setIsLoading(false); // Hide loader after processing
    }
  };
  const handleToastHide = () => {
    setToast(null); // Reset the toast state
  };

  return (
    <>
      {isLoading && (
        <div
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            backgroundColor: "rgba(0, 0, 0, 0.5)",
            zIndex: 9999,
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <div
            style={{
              width: "50px",
              height: "50px",
              border: "5px solid #f3f3f3",
              borderTop: "5px solid #3498db",
              borderRadius: "50%",
              animation: "spin 1s linear infinite",
            }}
          ></div>
        </div>
      )}
      {toast && (
        <ToastNotification
          message={toast.message}
          type={toast.type}
          onHide={handleToastHide}
          notiClass="googleadd"
        />
      )}
      <div
        className="p-2 lg:p-10 "
        id="contactId"
      >
        <form onSubmit={handleSubmit}>
          <div className="flex flex-col gap-4">
            <div className="grid lg:grid-cols-2 grid-cols-1 gap-4 form-label">
              {/* {/ Business Name Input /} */}
              <TextField
                label="First Name*"
                name="first_name"
                className=""
                fullWidth
                variant="outlined"
                value={formData.first_name}
                onChange={handleChange}
                error={!!formErrors.first_name}
                helperText={formErrors.first_name}
               sx={{
  '& label.Mui-focused': {
    color: 'var(--prc)', // Custom label color when focused
  },
  '& .MuiOutlinedInput-root': {
    borderRadius: '20px', // ⬅️ Rounded corners
    '& fieldset': {
      borderColor: 'gray',
      borderRadius: '20px', // Ensure fieldset has rounded corners too
    },
    '&.Mui-focused fieldset': {
      borderColor: 'var(--prc)', // Focus border color
      borderWidth: '1.5px', // Focus border width
    },
  },
}}
              />

              <TextField
                label="Last Name*"
                name="last_name"
                fullWidth
                variant="outlined"
                value={formData.last_name}
                onChange={handleChange}
                error={!!formErrors.last_name}
                helperText={formErrors.last_name}
            sx={{
  '& label.Mui-focused': {
    color: 'var(--prc)', // Custom label color when focused
  },
  '& .MuiOutlinedInput-root': {
    borderRadius: '20px', // ⬅️ Rounded corners
    '& fieldset': {
      borderColor: 'gray',
      borderRadius: '20px', // Ensure fieldset has rounded corners too
    },
    '&.Mui-focused fieldset': {
      borderColor: 'var(--prc)', // Focus border color
      borderWidth: '1.5px', // Focus border width
    },
  },
}}
              />

              <TextField
                label="Your Email *"
                name="email_address"
                fullWidth
                variant="outlined"
                value={formData.email_address}
                onChange={handleChange}
                error={!!formErrors.email_address}
                helperText={formErrors.email_address}
            sx={{
  '& label.Mui-focused': {
    color: 'var(--prc)', // Custom label color when focused
  },
  '& .MuiOutlinedInput-root': {
    borderRadius: '20px', // ⬅️ Rounded corners
    '& fieldset': {
      borderColor: 'gray',
      borderRadius: '20px', // Ensure fieldset has rounded corners too
    },
    '&.Mui-focused fieldset': {
      borderColor: 'var(--prc)', // Focus border color
      borderWidth: '1.5px', // Focus border width
    },
  },
}}
              />
              {/*
                      {/ Phone Number Input with validation /} */}
              {/* <TextField
                label="Phone Number *"
                name="contact_no"
                type="number"
                fullWidth
                variant="outlined"
                value={formData.contact_no}
                onChange={handleChange}
                error={!!formErrors.contact_no}
                helperText={formErrors.contact_no}
              /> */}

              <TextField
                label="Phone Number *"
                name="contact_no"
                type="tel" // Changed to "text" to remove number spinner
                fullWidth
                variant="outlined"
                value={formData.contact_no}
                onChange={(e) => {
                  if (/^\d{0,10}$/.test(e.target.value)) {
                    // Allows only up to 10 digits
                    setFormData({
                      ...formData,
                      contact_no: e.target.value,
                    });
                  }
                }}
                error={!!formErrors.contact_no}
                helperText={formErrors.contact_no}
      sx={{
  '& label.Mui-focused': {
    color: 'var(--prc)', // Custom label color when focused
  },
  '& .MuiOutlinedInput-root': {
    borderRadius: '20px', // ⬅️ Rounded corners
    '& fieldset': {
      borderColor: 'gray',
      borderRadius: '20px', // Ensure fieldset has rounded corners too
    },
    '&.Mui-focused fieldset': {
      borderColor: 'var(--prc)', // Focus border color
      borderWidth: '1.5px', // Focus border width
    },
  },
}}
              />
            </div>

            {/* {/ Training Message /} */}
            <div>
              <h3 className="text-[20px] lg:text-[26px] text-prc text-sm mb-2">Write Your Enquiry</h3>
          <TextField
  className="w-full rounded-lg border border-gray-400 focus:outline-none focus:border-prc focus:border-2 p-3 placeholder:text-lg placeholder:text-gray-500"
  minRows={6}
  multiline
  placeholder="Enter your message here"
  value={formData.enquiry_message}
  onChange={handleChange}
  name="enquiry_message"
  sx={{
  '& label.Mui-focused': {
    color: 'var(--prc)', // Custom label color when focused
  },
  '& .MuiOutlinedInput-root': {
    borderRadius: '20px', // ⬅️ Rounded corners
    '& fieldset': {
      borderColor: 'gray',
      borderRadius: '20px', // Ensure fieldset has rounded corners too
    },
    '&.Mui-focused fieldset': {
      borderColor: 'var(--prc)', // Focus border color
      borderWidth: '1.5px', // Focus border width
    },
  },
}}
/>

            </div>
          </div>

          {/* {/ Submit Button /} */}
          <div className="py-2">
            {/* <Button
              variant="contained"
              sx={{
                background: "linear-gradient(to right, #E1F5C4, #EDE574)",
                color: "black",
                textTransform: "uppercase",
                fontSize: "14px",
                padding: "12px 18px",
                borderRadius: "50px",
                "&:hover": {
                  background: "linear-gradient(to right, #EDE574, #E1F5C4)",
                },
                opacity: isLoading ? 0.5 : 1,
                cursor: isLoading ? "not-allowed" : "pointer",
              }}
              type="submit"
              disabled={isLoading}
            >
              {isLoading ? "Submitting..." : "Submit"}
            </Button> */}
            <button  type="submit"
              disabled={isLoading} className=" uppercase bg-[#EF0000] text-white text-[18px] py-[8px] px-[15px] rounded-3xl border-[2px] border-[#FFFFFF] flex justify-center items-center  bg-prc">   {isLoading ? "Submitting..." : "Submit"}</button>
          </div>
        </form>
      </div>
    </>
  );
};

export default ContactForm;
