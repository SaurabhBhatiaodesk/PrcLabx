"use client";
import React, { useState } from "react";
import lottiearrow from "../../../public/Images/jsonfile/scrolling.json";
import axios from "axios";
import {
  TextField,
  Button,
  MenuItem,
  Select,
  FormControl,
  InputLabel,
  SelectChangeEvent,
} from "@mui/material";
import { TextareaAutosize } from "@mui/base"; // For the message input
import "./Form.css";
import ToastNotification from "../../components/ToastNotification/ToastNotification";
import Lottie from "lottie-react";

const FormCode: React.FC = () => {
  const [isLoading, setIsLoading] = useState(false); // State for loader

  const [toast, setToast] = useState<{
    message: string;
    type: "success" | "error";
  } | null>(null);
  const [formData, setFormData] = useState({
    business_name: "",
    email_address: "",
    contact_no: "",
    course_name: "",
    training_message: "",
  });

  const [formErrors, setFormErrors] = useState({
    email: "",
    phoneNumber: "",
    course_name: "",
  });

  // Handle changes for all form fields
  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | { name?: string; value: unknown }>
  ) => {
    const { name, value } = e.target;

    // Prevent spaces in email and phone number fields
    let valueAsString = value as string;
    if (name === "email_address" || name === "contact_no") {
      valueAsString = valueAsString.replace(/\s/g, ""); // Remove spaces
    }

    setFormData((prev) => ({
      ...prev,
      [name!]: valueAsString, // Update form data with trimmed value
    }));

    // Validate the field as the user types
    validateField(name!, valueAsString);
  };

  // Handle course selection change
  const handleCourseChange = (e: SelectChangeEvent<string>) => {
    const value = e.target.value;
    setFormData((prev) => ({
      ...prev,
      course_name: value,
    }));

    // Log the updated course name
    console.log("Selected Course:", value);

    // Validate course field
    validateField("course_name", value);
  };

  const validateField = (name: string, value: string) => {
    let errors = { ...formErrors };
    switch (name) {
      case "email_address":
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        errors.email =
          value === ""
            ? "Email is required"
            : emailPattern.test(value)
            ? ""
            : "Please enter a valid email address";
        break;
      case "contact_no":
        const phonePattern = /^[0-9]{10}$/;
        errors.phoneNumber =
          value === ""
            ? "Phone number is required"
            : phonePattern.test(value)
            ? ""
            : "Please enter a valid 10-digit phone number";
        break;
      case "course_name":
        errors.course_name = value ? "" : "Please select a course";
        break;
      default:
        break;
    }
    setFormErrors(errors); // Update errors state after validation
  };

  const validateAllFields = () => {
    let errors = { email: "", phoneNumber: "", course_name: "" }; // Reset errors first

    // Manually validate each field
    validateField("email_address", formData.email_address);
    validateField("contact_no", formData.contact_no);
    validateField("course_name", formData.course_name);

    // Check the state of the form data before returning errors
    console.log("All Errors After Validation:", errors);

    return errors;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Early validation: Check if any required field is empty
    const errors: { email: string; phoneNumber: string; course_name: string } =
      {
        email: "",
        phoneNumber: "",
        course_name: "",
      };

    // Check if the required fields are empty and set errors immediately
    if (formData.email_address === "") {
      errors.email = "Email is required";
    }

    if (formData.contact_no === "") {
      errors.phoneNumber = "Phone number is required";
    }

    if (formData.course_name === "") {
      errors.course_name = "Please select a course";
    }

    // If there are errors, prevent the form submission and display validation messages
    if (errors.email || errors.phoneNumber || errors.course_name) {
      setFormErrors(errors);
      return; // Prevent API call if any required field is empty
    }

    // Perform the usual field validation after the initial check
    validateAllFields();

    // If validation fails after the field check, stop the submission
    if (formErrors.email || formErrors.phoneNumber || formErrors.course_name) {
      return;
    }

    setIsLoading(true);

    // If everything is validated, proceed with the form submission
    const requestData = {
      business_name: formData.business_name || undefined,
      email_address: formData.email_address,
      contact_no: formData.contact_no,
      course_name: formData.course_name,
      training_message: formData.training_message || undefined,
    };

    try {
      const response = await axios.post(
        "https://labxbackend.labxrepair.com.au/api/create/training",
        requestData
      );
      console.log(await response.data, "Form submitted successfully");
      if (response) {
        // alert("Form submitted successfully!");
        setToast({
          message: "Thank you for showing your interest in LABx training.",
          type: "success",
        });
        setFormData({
          business_name: "",
          email_address: "",
          contact_no: "",
          course_name: "",
          training_message: "",
        });
      } else {
        setToast({
          message: "Some thing went wrong, Please try again.",
          type: "error",
        });
        alert("Error submitting the form.");
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
    <div className="container">
      <div className=" steper-form-section-os " id="Kickstart">
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
            notiClass="tracking-page"
          />
        )}
        <form onSubmit={handleSubmit}>
          <div className="flex flex-col gap-4 bg-black text-white">
            <div className="grid lg:grid-cols-2 grid-cols-1 gap-4 form-label">
              {/* Business Name Input */}
              <TextField
                id="business-name"
                label="Business Name (if any)"
                name="business_name"
                fullWidth
                variant="outlined"
                value={formData.business_name}
                onChange={handleChange}
              />

              {/* Email Input with validation */}
              <TextField
                label="Your Email *"
                name="email_address"
                fullWidth
                variant="outlined"
                value={formData.email_address}
                onChange={handleChange}
                error={!!formErrors.email}
                helperText={formErrors.email}
              />

              {/* Phone Number Input with validation */}
              {/* <TextField
              label="Phone Number *"
              name="contact_no"
              type="number"
              fullWidth
              variant="outlined"
              value={formData.contact_no}
              onChange={handleChange}
              error={!!formErrors.phoneNumber}
              helperText={formErrors.phoneNumber}
            /> */}
              <TextField
                label="Phone Number *"
                name="contact_no"
                type="text" // Prevent spinner controls
                fullWidth
                variant="outlined"
                value={formData.contact_no}
                onChange={(e) => {
                  const value = e.target.value;
                  if (/^\d*$/.test(value) && value.length <= 10) {
                    // Allow only numeric input with max length 10
                    handleChange(e);
                  }
                }}
                error={!!formErrors.phoneNumber}
                helperText={formErrors.phoneNumber}
              />

              {/* Course Selection */}
              <FormControl fullWidth variant="outlined">
                <InputLabel>Select Your Course *</InputLabel>
                <Select
                  label="Select Your Course *"
                  name="course_name"
                  value={formData.course_name} // This is binding the course name to the Select value
                  onChange={handleCourseChange}
                  error={!!formErrors.course_name} // Show error if course is not selected
                  sx={{
                    color: "white", // Set the text color of the selected option to white
                    "& .MuiSelect-icon": {
                      color: "white", // Set the dropdown icon color to white
                    },
                    "& .MuiOutlinedInput-notchedOutline": {
                      borderColor: "white", // Set the border color of the select input
                    },
                  }}
                >
                  <MenuItem value="">-- Select a Course --</MenuItem>
                  <MenuItem value="Beginner_Phone_Repair">
                    Beginner Phone Repair Course ( $1249)
                  </MenuItem>
                  <MenuItem value="Advanced_Motherboard_Repair">
                    Advanced Motherboard Repair – Micro Soldering (Level 1)
                    ($2200)
                  </MenuItem>
                  <MenuItem value="Expert_Motherboard_Repair">
                    Expert Motherboard Repair – Micro Soldering (Level 2)
                    ($2800){" "}
                  </MenuItem>
                  <MenuItem value="Master_Motherboard_Repair">
                    Master Motherboard Repair – Micro Soldering (Level 3)
                    ($5500)
                  </MenuItem>
                  <MenuItem value="Professional_Phone_Screen">
                    Professional Phone Screen Refurbishing Course ($5500)
                  </MenuItem>
                  {/* <MenuItem value="Broken_Ripped_Pads_Repair_Jumbers">Broken/ Ripped Pads Repair Jumbers</MenuItem> */}
                </Select>

                {formErrors.course_name && (
                  <p style={{ color: "#d32f2f", fontSize: "12px" }}>
                    {formErrors.course_name}
                  </p>
                )}
              </FormControl>
            </div>

            {/* Training Message */}
            <TextareaAutosize
              className="border-[1.5px]"
              minRows={4}
              placeholder="Enter your message here"
              value={formData.training_message}
              onChange={handleChange}
              name="training_message"
              style={{
                width: "100%",
                padding: "10px",
                marginTop: "10px",
                backgroundColor: "black",
                color: "white",
                borderRadius: "8px",
                borderColor: "white",
                fontSize: "17px",
                textTransform: "capitalize",
              }}
            />
          </div>

          {/* Submit Button */}
          <div className="py-4 text-center">
            <Button
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
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default FormCode;
