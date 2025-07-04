"use client";

import { useState, ChangeEvent, FormEvent, useEffect } from "react";
import { RxCross2 } from "react-icons/rx";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer, toast } from "react-toastify";
interface FormData {
  name: string;
  mobile: string;
  email: string;
  date: string;
  timeSlot: string;
  phoneColor: string;
  comment: string;
  storeLocation: string;
}

interface Errors {
  name: string;
  mobile: string;
  email: string;
  date: string;
  timeSlot: string;
  storeLocation: string;
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
    storeLocation: "",
  });
  const [errors, setErrors] = useState<Errors>({
    name: "",
    mobile: "",
    email: "",
    date: "",
    timeSlot: "",
    storeLocation: "",
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
  const handleCheckboxChange = (location: string) => {
    // Toggle the location value
    setFormData((prevData) => ({
      ...prevData,
      storeLocation: location, // Set selected store location
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
      storeLocation: "",
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
    if (!formData.storeLocation) {
      formErrors.storeLocation = "Please select a store location";
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
        store_location: formData.storeLocation,
        date: formData.date,
        time_slot: formData.timeSlot,
        phone_color: formData.phoneColor,
        comment: formData.comment,
        address_no:
          formData.storeLocation ===
            "122 Queen St, St Marys NSW 2760, Australia"
            ? `(02) 8678 3298`
            : `(02) 7252 7141`,
        direction_url:
          formData.storeLocation ===
            "122 Queen St, St Marys NSW 2760, Australia"
            ? `https://www.google.com/maps/place/122+Queen+St,+St+Marys+NSW+2760,+Australia/@-33.7586704,150.756797,5340m/data=!3m1!1e3!4m6!3m5!1s0x6b129ab1929d4f97:0x103feb9784d7d023!8m2!3d-33.766127!4d150.7743917!16s%2Fg%2F11b8y9vjx6?entry=ttu&g_ep=EgoyMDI1MDYwMi4wIKXMDSoASAFQAw%3D%3D`
            : `https://www.google.com/maps/place/TechCity+Schofields+Phone+Repair/@-33.7057889,150.8759664,859m/data=!3m2!1e3!4b1!4m6!3m5!1s0x6b129f1f16bc4395:0xf55b68eeebf4e2e2!8m2!3d-33.7057889!4d150.8759664!16s%2Fg%2F11smlzr8dn?entry=ttu&g_ep=EgoyMDI1MDYzMC4wIKXMDSoASAFQAw%3D%3D`,
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
          toast.success("Appointment booked successfully!");
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
            storeLocation: "",
          });
        } else {
          toast.error("Failed to book appointment. Please try again.");
          setLoading(false);
        }
      } catch (error) {
        console.error("Error booking appointment:", error);
        toast.error("Error booking appointment. Please try again.");
        setLoading(false);
      }
    }
  };

  const today = new Date().toISOString().split("T")[0];
  const getHeight = () => {
    if (typeof window !== "undefined" && window.innerWidth < 768) {
      return "h-[100px]";
    } else if (window.innerWidth < 1024) {
      return "h-[130px]";
    } else {
      return "h-[100px]";
    }
  };

  // useEffect(() => {
  //  toast.success("Appointment booked successfully!");

  // }, [])

  return (
    <>
      {isModalOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-[1000]">
          <div className="bg-white md:p-6 p-4 rounded-lg md:w-1/2 w-full relative m-3 md:h-auto h-[600px] md:overflow-auto overflow-y-scroll ">
            <h2 className="text-2xl font-bold mb-4 text-prc text-center">
              BOOK YOUR SLOT
            </h2>

            <form onSubmit={handleSubmit}>
              {/* Name Field */}
              <div className="grid grid-cols-1 md:gap-2 gap-2">
                <div className="relative mb-2">
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    className={`md:h-12 h-10 text-base peer w-full p-2 border rounded border-prc  focus:border-prc custom-focus ${errors.name ? "border-red-500" : "border-prc "
                      } focus:ring-prc`}
                    placeholder="John Doe"
                  />
                  <label
                    htmlFor="name"
                    className={` leading-5 absolute left-2 top-0 bg-white transform -translate-y-1/2 transition-all duration-200 md:text-[16px]  text-[13px] ${formData.name || errors.name
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
                <div className="grid md:grid-cols-2 md:gap-2 gap-1">
                  {/* Mobile Field */}
                  <div className="relative mb-2">
                    <input
                      type="tel"
                      name="mobile"
                      value={formData.mobile}
                      onChange={handleInputChange}
                      className={`md:h-12 h-10 text-base peer w-full p-2 border rounded border-prc  focus:border-prc custom-focus  ${errors.mobile ? "border-red-500" : " border-prc "
                        } focus:ring-prc`}
                      placeholder="Enter Your Mobile Number"
                    />
                    <label
                      htmlFor="mobile"
                      className={`leading-5 absolute left-2 top-0 bg-white transform -translate-y-1/2 transition-all duration-200 md:text-[16px]  text-[13px] ${formData.mobile || errors.mobile
                          ? "scale-100 top-0 text-prc"
                          : "scale-100 text-prc "
                        }`}
                    >
                      Mobile <span className="text-red-500">*</span>
                    </label>
                    {errors.mobile && (
                      <p className="text-red-500 text-sm m-0">
                        {errors.mobile}
                      </p>
                    )}
                  </div>

                  {/* Email Field */}
                  <div className="relative mb-2">
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      className={`md:h-12 h-10 text-base peer w-full p-2 border rounded border-prc  focus:border-prc custom-focus ${errors.email ? "border-red-500" : "border-prc "
                        }  focus:ring-prc`}
                      placeholder="abc@mail.com"
                    />
                    <label
                      htmlFor="email"
                      className={`leading-5 absolute left-2 top-0 bg-white transform -translate-y-1/2 transition-all duration-200  md:text-[16px]  text-[13px] ${formData.email || errors.email
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
                  <div className="mb-2 ">
                    <div className="relative w-full max-w-full m-auto">
                      <input
                        type="date"
                        name="date"
                        value={formData.date}
                        onChange={handleInputChange}
                        min={today}
                        className={`md:h-12 h-10 text-base peer w-full p-2 border rounded border-prc focus:border-prc custom-focus overflow-hidden box-border ${errors.date ? "border-red-500" : "border-prc"} focus:ring-prc`}
                        style={{ appearance: "none" }}
                      />
                      <label
                        htmlFor="date"
                        className={`leading-5 absolute left-2 top-0 bg-white transform -translate-y-1/2 transition-all duration-200 md:text-[16px] text-[13px] ${formData.date || errors.date ? "scale-100 top-0 text-prc" : "scale-100 text-prc"}`}
                      >
                        Date <span className="text-red-500">*</span>
                      </label>
                      {errors.date && (
                        <p className="text-red-500 text-sm m-0">{errors.date}</p>
                      )}
                    </div>
                  </div>


                  {/* Time Slot Dropdown */}
                  <div className="relative mb-2">
                    <select
                      name="timeSlot"
                      value={formData.timeSlot}
                      onChange={handleInputChange}
                      className={`md:h-12 h-10 text-base peer w-full p-2 border rounded border-prc  focus:border-prc custom-focus ${errors.timeSlot ? "border-red-500" : "border-prc "
                        }  focus:ring-prc`}
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
                      className={`leading-5 absolute left-2 top-0 bg-white transform -translate-y-1/2 transition-all duration-200 md:text-[16px]  text-[13px] ${formData.timeSlot || errors.timeSlot
                          ? "scale-100 top-0 text-prc"
                          : "scale-100 text-prc "
                        }`}
                    >
                      Time Slot <span className="text-red-500">*</span>
                    </label>
                    {errors.timeSlot && (
                      <p className="text-red-500 text-sm m-0">
                        {errors.timeSlot}
                      </p>
                    )}
                  </div>
                </div>

                <div className="grid grid-cols-1 md:gap-3 gap-1 mb-1 md:grid-cols-2">
                  <div className="border rounded border-prc  focus:border-prc custom-focus p-3   focus:ring-prc flex items-center cursor-pointer">
                    <input
                      type="checkbox"
                      checked={
                        formData.storeLocation ===
                        "122 Queen St, St Marys NSW 2760, Australia"
                      }
                      onChange={() =>
                        handleCheckboxChange(
                          "122 Queen St, St Marys NSW 2760, Australia"
                        )
                      }
                    />
                    <label
                      className="md:text-[14px] text-[13px] line-clamp-2 ml-2 cursor-pointer"
                      htmlFor="address"
                    >
                      122 Queen St, St Marys NSW 2760, Australia
                    </label>
                  </div>
                  <div className="border rounded border-prc  focus:border-prc custom-focus p-3   focus:ring-prc flex items-center cursor-pointer">
                    <input
                      type="checkbox"
                      checked={
                        formData.storeLocation ===
                        "Kiosk 1/227 Railway Terrace, Schofields NSW 2762,Australia"
                      }
                      onChange={() =>
                        handleCheckboxChange(
                          "Kiosk 1/227 Railway Terrace, Schofields NSW 2762,Australia"
                        )
                      }
                    />
                    <label
                      className="md:text-[14px] text-[13px] line-clamp-2 ml-2 cursor-pointer"
                      htmlFor="address"
                    >
                      Kiosk 1/227 Railway Terrace, Schofields NSW 2762,
                      Australia
                    </label>
                  </div>
                  {errors.storeLocation && (
                    <p className="text-red-500 text-sm m-0">
                      {errors.storeLocation}
                    </p>
                  )}
                </div>

                {/* Phone Color Field */}
                <div className="relative mb-2">
                  <input
                    type="text"
                    name="phoneColor"
                    value={formData.phoneColor}
                    onChange={handleInputChange}
                    className="md:h-12 h-10 text-base peer w-full p-2 border rounded   focus:border-prc custom-focus border-prc  focus:ring-prc"
                    placeholder="Enter your phone color here"
                  />
                  <label
                    htmlFor="phoneColor"
                    className={`leading-5 absolute left-2 top-0 bg-white transform -translate-y-1/2 transition-all duration-200 text-prc md:text-[16px]  text-[13px] ${formData.phoneColor
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
                    // rows={6}
                    value={formData.comment}
                    onChange={handleInputChange}
                    className={`text-base peer w-full p-2 border rounded border-prc  focus:border-prc custom-focus focus:ring-prc ${getHeight()}`}
                    placeholder="Enter your comment/message here"
                  />
                  <label
                    htmlFor="comment"
                    className={`leading-5 absolute left-2 top-0 bg-white transform -translate-y-1/2 transition-all duration-200 md:text-[16px]  text-[13px] ${formData.comment
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
                className="bg-prc text-white py-1 px-4 rounded w-full text-base"
              >
                {loading ? "Loading..." : "Book Now"}
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
