"use client";

import { useState, ChangeEvent, FormEvent } from "react";
import { RxCross2 } from "react-icons/rx";

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
          setFormData({
            name: "",
            mobile: "",
            email: "",
            date: "",
            timeSlot: "",
            phoneColor: "",
            comment: "",
          });
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
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-[1000]">
          <div className="bg-white md:p-6 p-2 rounded-lg md:w-1/2 w-full relative m-2">
            <h2 className="text-2xl font-bold mb-4 text-prc">BOOK YOUR SLOT</h2>

            <form onSubmit={handleSubmit}>
              {/* Name Field */}
              <div className="grid grid-cols-1 gap-2">
                <div className="relative mb-2">
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    className={`h-12  text-base peer w-full p-2 border-2 rounded ${errors.name ? "border-red-500" : "border-prc "
                      } focus:outline-none focus:ring-2 focus:ring-prc`}
                    placeholder="John Doe"
                  />
                  <label
                    htmlFor="name"
                    className={` leading-5 absolute left-2 top-0 bg-white transform -translate-y-1/2 transition-all duration-200 text-[16px] ${formData.name || errors.name
                        ? "scale-100 top-0 text-prc"
                        : "scale-100 text-prc "
                      }`}
                  >
                    Name <span className="text-red-500">*</span>
                  </label>
                  {errors.name && (
                    <p className="text-red-500 text-sm m-0">{errors.name}</p>
                  )}
                </div>
                <div className="grid md:grid-cols-2 gap-2">
                  {/* Mobile Field */}
                  <div className="relative mb-2">
                    <input
                      type="tel"
                      name="mobile"
                      value={formData.mobile}
                      onChange={handleInputChange}
                      className={`h-12  text-base peer w-full p-2 border-2 rounded   ${errors.mobile ? "border-red-500" : " border-prc "
                        } focus:outline-none focus:ring-2 focus:ring-prc`}
                      placeholder="Enter Your Mobile Number"
                    />
                    <label
                      htmlFor="mobile"
                      className={`leading-5 absolute left-2 top-0 bg-white transform -translate-y-1/2 transition-all duration-200 text-[16px] ${formData.mobile || errors.mobile
                          ? "scale-100 top-0 text-prc"
                          : "scale-100 text-prc "
                        }`}
                    >
                      Mobile <span className="text-red-500">*</span>
                    </label>
                    {errors.mobile && (
                      <p className="text-red-500 text-sm m-0">{errors.mobile}</p>
                    )}
                  </div>

                  {/* Email Field */}
                  <div className="relative mb-2">
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      className={`h-12  text-base peer w-full p-2 border-2 rounded ${errors.email ? "border-red-500" : "border-prc "
                        } focus:outline-none focus:ring-2 focus:ring-prc`}
                      placeholder="abc@mail.com"
                    />
                    <label
                      htmlFor="email"
                      className={`leading-5 absolute left-2 top-0 bg-white transform -translate-y-1/2 transition-all duration-200  text-[16px] ${formData.email || errors.email
                          ? "scale-100 top-0 text-prc"
                          : "scale-100 text-prc "
                        }`}
                    >
                      Email <span className="text-red-500">*</span>
                    </label>
                    {errors.email && (
                      <p className="text-red-500 text-sm m-0">{errors.email}</p>
                    )}
                  </div>

                  {/* Date Field */}
                  <div className="relative mb-2">
                    <input
                      type="date"
                      name="date"
                      value={formData.date}
                      onChange={handleInputChange}
                      min={today}
                      className={`h-12  text-base peer w-full p-2 border-2 rounded ${errors.date ? "border-red-500" : "border-prc "
                        } focus:outline-none focus:ring-2 focus:ring-prc`}
                    />
                    <label
                      htmlFor="date"
                      className={`leading-5 absolute left-2 top-0 bg-white transform -translate-y-1/2 transition-all duration-200  text-[16px] ${formData.date || errors.date
                          ? "scale-100 top-0 text-prc"
                          : "scale-100 text-prc "
                        }`}
                    >
                      Date <span className="text-red-500">*</span>
                    </label>
                    {errors.date && (
                      <p className="text-red-500 text-sm m-0">{errors.date}</p>
                    )}
                  </div>

                  {/* Time Slot Dropdown */}
                  <div className="relative mb-2">
                    <select
                      name="timeSlot"
                      value={formData.timeSlot}
                      onChange={handleInputChange}
                      className={`h-12  text-base peer w-full p-2 border-2 rounded ${errors.timeSlot ? "border-red-500" : "border-prc "
                        } focus:outline-none focus:ring-2 focus:ring-prc`}
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
                      className={`leading-5 absolute left-2 top-0 bg-white transform -translate-y-1/2 transition-all duration-200 text-[16px] ${formData.timeSlot || errors.timeSlot
                          ? "scale-100 top-0 text-prc"
                          : "scale-100 text-prc "
                        }`}
                    >
                      Time Slot <span className="text-red-500">*</span>
                    </label>
                    {errors.timeSlot && (
                      <p className="text-red-500 text-sm m-0">{errors.timeSlot}</p>
                    )}
                  </div>
                </div>

                {/* Phone Color Field */}
                <div className="relative mb-2">
                  <input
                    type="text"
                    name="phoneColor"
                    value={formData.phoneColor}
                    onChange={handleInputChange}
                    className="h-12  text-base peer w-full p-2 border-2 rounded border-prc focus:outline-none focus:ring-2 focus:ring-prc"
                    placeholder="Enter your phone color here"
                  />
                  <label
                    htmlFor="phoneColor"
                    className={`leading-5 absolute left-2 top-0 bg-white transform -translate-y-1/2 transition-all duration-200 text-prc text-[16px] ${formData.phoneColor
                        ? "scale-100 top-0 text-prc"
                        : "scale-100 text-prc"
                      }`}
                  >
                    Phone Color
                  </label>
                </div>

                {/* Comment Field */}
                <div className="relative mb-2">
                  <textarea
                    name="comment"
                    rows={8}
                    value={formData.comment}
                    onChange={handleInputChange}
                    className="  text-base peer w-full p-2 border-2 rounded border-prc focus:outline-none focus:ring-2 focus:ring-prc"
                    placeholder="Enter your comment/message here"
                  />
                  <label
                    htmlFor="comment"
                    className={`leading-5 absolute left-2 top-0 bg-white transform -translate-y-1/2 transition-all duration-200 text-[16px] ${formData.comment
                        ? "scale-100 top-0 text-prc"
                        : "scale-100 text-prc "
                      }`}
                  >
                    Comment
                  </label>
                </div>
              </div>

              <button
                type="submit"
                className="bg-prc text-white py-2 px-4 rounded w-full"
              >
                Book Now
              </button>
            </form>

            <button
              onClick={closeModal}
              className="absolute top-2 right-2 text-prc "
            >
              <RxCross2 fontSize={30} />
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default BookSlot;
