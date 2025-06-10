"use client";

import { useState, ChangeEvent, FormEvent } from "react";

interface FormData {
  name: string;
  mobile: string;
  email: string;
  date: string;
  timeSlot: string;
  phoneColor: string;
  comment: string;
}

interface Errors {
  name: string;
  mobile: string;
  email: string;
  date: string;
  timeSlot: string;
}

interface BookSlotProps {
  isModalOpen: boolean;
  setIsModalOpen: React.Dispatch<React.SetStateAction<boolean>>;
  defaultSelectedPart: any;
}

const BookSlot: React.FC<BookSlotProps> = ({
  isModalOpen,
  setIsModalOpen,
  defaultSelectedPart,
}) => {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    mobile: "",
    email: "",
    date: "",
    timeSlot: "",
    phoneColor: "",
    comment: "",
  });
  const [errors, setErrors] = useState<Errors>({
    name: "",
    mobile: "",
    email: "",
    date: "",
    timeSlot: "",
  });
  const [loading, setLoading] = useState<Boolean>(false);
  const closeModal = () => setIsModalOpen(false);

  const handleInputChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    if (loading) return;
    let isValid = true;
    let formErrors: Errors = {
      name: "",
      mobile: "",
      email: "",
      date: "",
      timeSlot: "",
    };

    if (!formData.name) {
      formErrors.name = "Name is required";
      isValid = false;
    }

    if (!formData.mobile) {
      formErrors.mobile = "Mobile is required";
      isValid = false;
    }

    if (!formData.email) {
      formErrors.email = "Email is required";
      isValid = false;
    }

    if (!formData.date) {
      formErrors.date = "Date is required";
      isValid = false;
    }

    if (!formData.timeSlot) {
      formErrors.timeSlot = "Time slot is required";
      isValid = false;
    }

    setErrors(formErrors);
    if (isValid) {
      const payload = {
        repair_service_id: defaultSelectedPart.repair_id,
        product_id: defaultSelectedPart.product_id,
        name: formData.name,
        mobile: formData.mobile,
        email: formData.email,
        store_location: 1, 
        date: formData.date,
        time_slot: formData.timeSlot,
        phone_color: formData.phoneColor,
        comment: formData.comment,
      };
      setLoading(true);
      try {
        const response = await fetch(
          "https://www.prc.repair/api/submit-appointment",
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(payload),
          }
        );

        const data = await response.json();

        if (response.ok) {
          alert("Appointment booked successfully!");
          closeModal();
          setLoading(false);
        } else {
          alert("Failed to book appointment. Please try again.");
          setLoading(false);
        }
      } catch (error) {
        console.error("Error booking appointment:", error);
        alert("Error booking appointment. Please try again.");
        setLoading(false);
      }
    }
  };

  const today = new Date().toISOString().split("T")[0];

  return (
    <>
      {isModalOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white p-6 rounded-lg w-96 relative">
            <h2 className="text-2xl font-bold mb-4">BOOK YOUR SLOT</h2>

            <form onSubmit={handleSubmit}>
              {/* Name Field */}
              <div className="relative mb-4">
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  className={`peer w-full p-2 border-2 rounded ${
                    errors.name ? "border-red-500" : "border-gray-300"
                  } focus:outline-none focus:ring-2 focus:ring-blue-500`}
                  placeholder="John Doe"
                />
                <label
                  htmlFor="name"
                  className={`absolute left-2 top-0 bg-white transform -translate-y-1/2 transition-all duration-200 ${
                    formData.name || errors.name
                      ? "scale-75 top-0 text-blue-500"
                      : "scale-100 text-gray-500"
                  }`}
                >
                  Name <span className="text-red-500">*</span>
                </label>
                {errors.name && (
                  <p className="text-red-500 text-sm">{errors.name}</p>
                )}
              </div>

              {/* Mobile Field */}
              <div className="relative mb-4">
                <input
                  type="tel"
                  name="mobile"
                  value={formData.mobile}
                  onChange={handleInputChange}
                  className={`peer w-full p-2 border-2 rounded ${
                    errors.mobile ? "border-red-500" : "border-gray-300"
                  } focus:outline-none focus:ring-2 focus:ring-blue-500`}
                  placeholder="Enter Your Mobile Number"
                />
                <label
                  htmlFor="mobile"
                  className={`absolute left-2 top-0 bg-white transform -translate-y-1/2 transition-all duration-200 ${
                    formData.mobile || errors.mobile
                      ? "scale-75 top-0 text-blue-500"
                      : "scale-100 text-gray-500"
                  }`}
                >
                  Mobile <span className="text-red-500">*</span>
                </label>
                {errors.mobile && (
                  <p className="text-red-500 text-sm">{errors.mobile}</p>
                )}
              </div>

              {/* Email Field */}
              <div className="relative mb-4">
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  className={`peer w-full p-2 border-2 rounded ${
                    errors.email ? "border-red-500" : "border-gray-300"
                  } focus:outline-none focus:ring-2 focus:ring-blue-500`}
                  placeholder="abc@mail.com"
                />
                <label
                  htmlFor="email"
                  className={`absolute left-2 top-0 bg-white transform -translate-y-1/2 transition-all duration-200 ${
                    formData.email || errors.email
                      ? "scale-75 top-0 text-blue-500"
                      : "scale-100 text-gray-500"
                  }`}
                >
                  Email <span className="text-red-500">*</span>
                </label>
                {errors.email && (
                  <p className="text-red-500 text-sm">{errors.email}</p>
                )}
              </div>

              {/* Date Field */}
              <div className="relative mb-4">
                <input
                  type="date"
                  name="date"
                  value={formData.date}
                  onChange={handleInputChange}
                  min={today}
                  className={`peer w-full p-2 border-2 rounded ${
                    errors.date ? "border-red-500" : "border-gray-300"
                  } focus:outline-none focus:ring-2 focus:ring-blue-500`}
                />
                <label
                  htmlFor="date"
                  className={`absolute left-2 top-0 bg-white transform -translate-y-1/2 transition-all duration-200 ${
                    formData.date || errors.date
                      ? "scale-75 top-0 text-blue-500"
                      : "scale-100 text-gray-500"
                  }`}
                >
                  Date <span className="text-red-500">*</span>
                </label>
                {errors.date && (
                  <p className="text-red-500 text-sm">{errors.date}</p>
                )}
              </div>

              {/* Time Slot Dropdown */}
              <div className="relative mb-4">
                <select
                  name="timeSlot"
                  value={formData.timeSlot}
                  onChange={handleInputChange}
                  className={`peer w-full p-2 border-2 rounded ${
                    errors.timeSlot ? "border-red-500" : "border-gray-300"
                  } focus:outline-none focus:ring-2 focus:ring-blue-500`}
                >
                  <option value="">Select</option>
                  {formData.date && (
                    <>
                      <option value="09:00:00 to 09:30:00">9:00 AM</option>
                      <option value="09:30:00 to 10:00:00">9:30 AM</option>
                      <option value="10:00:00 to 10:30:00">10:00 AM</option>
                      <option value="10:30:00 to 11:00:00">10:30 AM</option>
                      <option value="11:00:00 to 11:30:00">11:00 AM</option>
                      <option value="11:30:00 to 12:00:00">11:30 AM</option>
                      <option value="12:00:00 to 12:30:00">12:00 PM</option>
                      <option value="12:30:00 to 13:00:00">12:30 PM</option>
                      <option value="13:00:00 to 13:30:00">1:00 PM</option>
                      <option value="13:30:00 to 14:00:00">1:30 PM</option>
                      <option value="14:00:00 to 14:30:00">2:00 PM</option>
                      <option value="14:30:00 to 15:00:00">2:30 PM</option>
                      <option value="15:00:00 to 15:30:00">3:00 PM</option>
                      <option value="15:30:00 to 16:00:00">3:30 PM</option>
                      <option value="16:00:00 to 16:30:00">4:00 PM</option>
                      <option value="16:30:00 to 17:00:00">4:30 PM</option>
                      <option value="17:00:00 to 17:30:00">5:00 PM</option>
                    </>
                  )}
                </select>
                <label
                  htmlFor="timeSlot"
                  className={`absolute left-2 top-0 bg-white transform -translate-y-1/2 transition-all duration-200 ${
                    formData.timeSlot || errors.timeSlot
                      ? "scale-75 top-0 text-blue-500"
                      : "scale-100 text-gray-500"
                  }`}
                >
                  Time Slot <span className="text-red-500">*</span>
                </label>
                {errors.timeSlot && (
                  <p className="text-red-500 text-sm">{errors.timeSlot}</p>
                )}
              </div>

              {/* Phone Color Field */}
              <div className="relative mb-4">
                <input
                  type="text"
                  name="phoneColor"
                  value={formData.phoneColor}
                  onChange={handleInputChange}
                  className="peer w-full p-2 border-2 rounded border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Enter your phone color here"
                />
                <label
                  htmlFor="phoneColor"
                  className={`absolute left-2 top-0 bg-white transform -translate-y-1/2 transition-all duration-200 ${
                    formData.phoneColor
                      ? "scale-75 top-0 text-blue-500"
                      : "scale-100 text-gray-500"
                  }`}
                >
                  Phone Color
                </label>
              </div>

              {/* Comment Field */}
              <div className="relative mb-4">
                <textarea
                  name="comment"
                  value={formData.comment}
                  onChange={handleInputChange}
                  className="peer w-full p-2 border-2 rounded border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Enter your comment/message here"
                />
                <label
                  htmlFor="comment"
                  className={`absolute left-2 top-0 bg-white transform -translate-y-1/2 transition-all duration-200 ${
                    formData.comment
                      ? "scale-75 top-0 text-blue-500"
                      : "scale-100 text-gray-500"
                  }`}
                >
                  Comment
                </label>
              </div>

              <button
                type="submit"
                className="bg-blue-500 text-white py-2 px-4 rounded"
              >
                Book Now
              </button>
            </form>

            <button
              onClick={closeModal}
              className="absolute top-0 right-2 text-gray-500"
            >
              &times;
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default BookSlot;
