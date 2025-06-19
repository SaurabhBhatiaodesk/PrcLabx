"use client";
import React, { useState } from "react";
import axios from "axios";
import Image from "next/image";
import Link from "next/link";
import "./Contactus.css";
import callcontactus from "../../../public/Images/icons/callcontactus.svg";
import contactusmail from "../../../public/Images/icons/contactusmail.svg";
import ContactForm from "./ContactForm";
const ContactUsForm: React.FC = () => {
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
  //  / Handle changes for all form fields
  // Handle changes for all form fields
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
      console.log(await response.data, "Form submitted successfully");
      if (response) {
        alert("Form submitted successfully!");
        // Reset form state with all fields, including enquiry_message
        setFormData({
          first_name: "",
          last_name: "",
          email_address: "",
          contact_no: "",
          enquiry_message: "", // Ensure enquiry_message is reset
        });
      } else {
        alert("Error submitting the form.");
      }
    } catch (error) {
      console.error("Error submitting the form", error);
      alert("An error occurred while submitting the form.");
    }
  };

  return (
    <>
      <section
        className="py-4 lg:py-[30px]  bg-[#EFF7FF]"
        // style={{
        //   backgroundImage: "url('/images/Home/back-banner.svg')",
        //   backgroundRepeat: "no-repeat",
        //   backgroundSize: "cover",
        // }}
      >
        <div className="max-container">
          <div className="grid lg:grid-cols-[3fr_5fr] grid-cols-1">
           <div
  className="w-full flex flex-col items-center justify-center md:bg-[url('/images/contactusimage.png')]  bg-no-repeat bg-cover"
>
              <div className="relative w-full h-[100%] flex flex-col justify-center lg:right-4 right-0 mb-2">
                <div className=" w-full">
                  <div className="flex gap-3 flex-col justify-center p-4 lg:p-6 bg-prc text-prc rounded-3xl">
                 
                    <div className="flex items-center gap-3">
                      <span className="flex-shrink-0">
                        <Image
                          className="w-[50px] h-[50px] object-contain" // Ensure size is same
                          src={callcontactus}
                          alt="Phone Icon"
                          quality={1000}
                        />
                      </span>
                      <Link href="tel:+61455777077" passHref>
                        <p className="m-0 text-primary lg:font-semibold font-medium text-xl cursor-pointer">
                          +61455777077
                        </p>
                      </Link>
                    </div>
                    {/* {/ Email /} */}
                    <div className="flex items-center gap-3">
                      <span className="flex-shrink-0">
                        <Image
                          className="w-[50px] h-[50px] object-contain" // Ensure size is same
                          src={contactusmail}
                          alt="Email Icon"
                        />
                      </span>
                      <Link href="mailto:service@prcrepair.com.au " passHref>
                        <p className="m-0 text-primary lg:font-semibold font-medium text-xl cursor-pointer">
                          service@prcrepair.com.au  
                        </p>
                      </Link>
                    </div>
                   
                    <div>
                      <h3 className="text-primary text-center lg:text-xl text-lg ">
                        We DO NOT accept walk-ins{" "}
                      </h3>
                    </div>
                  </div>
                </div>
              </div>
             
            </div>

            <div>
              <ContactForm />
            
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ContactUsForm;
