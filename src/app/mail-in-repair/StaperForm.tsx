"use client";
import "./mail-in-repair.css";
import Lottie from "lottie-react";
import lottiearrow from "../../../public/Images/jsonfile/scrolling.json";
import correct from "../../../public/Images/jsonfile/lottieflow-fill.json";
// import { Input, Textarea } from "@nextui-org/react";
import React, { useState, useRef, useEffect } from "react";
import SignatureCanvas from "react-signature-canvas";
import { IoCheckmarkDoneOutline } from "react-icons/io5";
import MainHeading from "../../components/ManinHeading/MainHeading";
import StaperForm1 from "../../../public/Images/StaperForm1.png";
import StaperForm3 from "../../../public/Images/StaperForm3.png";
import mailinrepairbg from "../../../public/Images/mailinrepairbg.png";

// import Textarea from "@mui/joy/Textarea";
import { FormControlLabel, Modal, Radio, TextField, Select, MenuItem, colors, } from "@mui/material";
import Image from "next/image";
// import { MenuItem, Select, SelectItem } from "@nextui-org/react";
// Example library for pattern drawing
import "./mail-in-repair.css";
import Link from "next/link";
import axios from "axios";
import { usePathname, useRouter } from "next/navigation";
import { IoIosArrowRoundForward } from "react-icons/io";
import { ReactCanvasPatternLock } from "react-canvas-pattern-lock";

// import PatternLock from "react-pattern-lock";

type Errors = {
  businessName?: string;
  fullName?: string;
  contactNo?: string;
  emailAddress?: string;
  returnShippingAddress?: string;
  deviceType?: string;
  brand?: string;
  model?: string;
  imeiOrSerialNo?: string;
  repairDeviceType?: string;
  issueDescription?: string;
  termsAndConditions?: string;
  signature?: string;
  pricingAgreement?: string;
  previousRepairAttempts?: string;
  jumpQueueForFasterService?: string;
  additionalComments?: string;
  requireReturnLabel?: string;
  requirePickupLabel?: string;
  previousRepairAttemptsComments?: string;
  returnLabelDetails?: string;
  pickupLabelDetails?: string;
};

type PersonalDetails = {
  businessName: string;
  fullName: string;
  contactNo: string;
  emailAddress: string;
  returnShippingAddress: string;
};

type DeviceDetails = {
  deviceType: string;
  brand: string;
  model: string;
  imeiOrSerialNo: string;
  passwordType: string; // New field
  devicePassword: string;
};

type RepairDetails = {
  issueDescription: string;
  previousRepairAttempts: string;
  jumpQueueForFasterService: string;
  additionalComments: string;
};
type ShippingDetails = {
  requireReturnLabel: string;
  requirePickupLabel: string;
  termsAndConditions: boolean;
  signature: string;
};

interface CustomPatternLockProps {
  onFinish: (pattern: string) => void;
}

type HandleSubmitParams = {
  personalDetails: PersonalDetails;
  deviceDetails: DeviceDetails;
  repairDetails: RepairDetails;
  shippingDetails: ShippingDetails;
  pricingAgreement: boolean;
};

const StaperForm: React.FC = () => {
  const formContainerRef = useRef<HTMLDivElement>(null);
  const router = useRouter();
  const pathname = usePathname();
  const sigPad = useRef<SignatureCanvas>(null);
  const selectOptions = [
    { key: "Yes", label: "Yes" },
    { key: "No", label: "No" },
  ];
  const [email, setEmail] = useState("");
  const [isInvalid, setIsInvalid] = useState(false);
  const [activeStep, setActiveStep] = useState(0);
  const [errors, setErrors] = useState<Errors>({});
  const [isLoading, setIsLoading] = useState(false); // State for loader
  const [pinModalOpen, setPinModalOpen] = useState(false); // Modal state for PIN
  const [passwordType, setPasswordType] = useState("PIN"); // Track password type (PIN or Pattern)
  const [patternModalOpen, setPatternModalOpen] = useState(false); // Modal state for pattern
  const [patternValue, setPatternValue] = useState(""); // Pattern-drawn value
  const [pinValue, setPinValue] = useState(""); // Temp storage for PIN
  const [personalDetails, setPersonalDetails] = useState({
    businessName: "",
    fullName: "",
    contactNo: "",
    emailAddress: "",
    returnShippingAddress: "",
  });
  const [deviceDetails, setDeviceDetails] = useState<DeviceDetails>({
    deviceType: "",
    brand: "",
    model: "",
    imeiOrSerialNo: "",
    passwordType: "None", // Default to an empty string
    devicePassword: "",
  });

  const [repairDetails, setRepairDetails] = useState({
    issueDescription: "",
    previousRepairAttempts: "No",
    previousRepairAttemptsComments: "", // New field
    jumpQueueForFasterService: "No",
    additionalComments: "",
  });

  const [shippingDetails, setShippingDetails] = useState({
    requireReturnLabel: "I will arrange pickup myself",
    requirePickupLabel: "No,I will send the device myself",
    termsAndConditions: false,
    signature: "",
  });

  const [pricingAgreement, setPricingAgreement] = useState(false);
  const apiUrl = process.env.NEXT_PUBLIC_LEAFYMANGO_API_URL;
  class PasswordPattern extends React.Component<{
    onFinish: (path: string) => void;
  }> {
    state = {
      path: [],
      isLoading: false,
      error: false,
      success: false,
      disabled: false,
      size: 3,
    };

    errorTimeout = 0;

    componentDidMount() {
      window.addEventListener("keydown", ({ which }) => {
        if (which === 38) {
          this.setState({
            size: this.state.size >= 10 ? 10 : this.state.size + 1,
          });
        } else if (which === 40) {
          this.setState({
            size: this.state.size > 3 ? this.state.size - 1 : 3,
          });
        }
      });
    }

    onReset = () => {
      this.setState({
        path: [],
        success: false,
        error: false,
        disabled: false,
      });
    };

    onChange = (path: any) => {
      this.setState({ path: [...path] });
    };

    // onFinish = () => {
    //   const { onFinish } = this.props; // Access the onFinish callback from props
    //   const patternPath = this.state.path.join("-");
    //   console.log("patternPathhhhhh", patternPath);
    //   this.setState({ isLoading: true });

    //   // Simulate an API call or validation
    //   setTimeout(() => {
    //     this.setState({ isLoading: false, success: true, disabled: true });
    //     onFinish(patternPath); // Pass the detected pattern back to the parent
    //   }, 1000);
    // };

    onFinish = () => {
      const transformedPath = this.state.path.map((point) => point + 1); // Transform only when needed
      const patternPath = transformedPath.join("-");
      console.log("Transformed Pattern Path:", patternPath);

      this.setState({ isLoading: true });

      // Simulate an API call or validation
      setTimeout(() => {
        this.setState({ isLoading: false, success: true, disabled: true });
        this.props.onFinish(patternPath); // Pass the transformed pattern back
      }, 1000);
    };

    render() {
      const { size, path, disabled, success, error, isLoading } = this.state;
      return (
        <React.Fragment>
          <div className="center">
            {/*  <PatternLock
              size={size}
              onChange={this.onChange}
              path={path}
              error={error}
              onFinish={this.onFinish}
              connectorThickness={5}
              disabled={disabled || isLoading}
              success={success}
            /> */}
          </div>
          {/* <div className="output">
            Select the top 3 points starting from the left
          </div> */}
          {/* <div className="output">Output : {this.state.path.join(", ")}</div> */}
          {/* {success && (
            <button
              style={{ margin: "0 auto", display: "block" }}
              onClick={this.onReset}
            >
              Click here to reset
            </button>
          )} */}
          {/* <div className="output">
            Press the up/down arrow keys to increase/decrease the size of the
            input
          </div> */}
        </React.Fragment>
      );
    }
  }

  // Function to handle password type change
  // const handlePasswordTypeChange = (
  //   e: React.ChangeEvent<HTMLSelectElement>
  // ) => {
  //   const selectedType = e.target.value;
  //   setPasswordType(selectedType);

  //   if (selectedType === "Pattern") {
  //     setPatternModalOpen(true); // Open modal when "Pattern" is selected
  //   }
  // };

  const handlePatternComplete = (pattern: number[]) => {
    const numericPattern = pattern.join(""); // Convert pattern to a numeric string
    setPatternValue(numericPattern);
    setPatternModalOpen(false); // Close modal
  };

  useEffect(() => {
    // Check if there's saved signature in localStorage gauravb code  window
    if (typeof window !== "undefined") {
      const savedSignature = localStorage.getItem("signatureData");
      if (savedSignature) {
        setShippingDetails((prevState) => ({
          ...prevState,
          signature: savedSignature,
        }));
      }
    }
  }, []);

  const saveSignature = () => {
    if (sigPad?.current) {
      const signatureData = sigPad.current.toDataURL("image/png"); // Get the base64 image
      setShippingDetails((prevState) => ({
        ...prevState,
        signature: signatureData,
      }));

      // Save signature to localStorage
      localStorage.setItem("signatureData", signatureData);
    }
  };

  // Function to clear the signature
  const clearSignature = () => {
    sigPad.current?.clear();
    setShippingDetails((prevState) => ({
      ...prevState,
      signature: "",
    }));
    localStorage.removeItem("signatureData"); // Clear from localStorage as well
  };

  // const sigPad = useRef(null);

  useEffect(() => {
    // Load the signature from localStorage or shippingDetails on component mount
    const savedSignature = localStorage.getItem("signatureData");
    if (savedSignature && sigPad?.current) {
      sigPad.current.fromDataURL(savedSignature); // Load the signature into the canvas
    }
  }, [shippingDetails?.signature]); // Re-run when signature changes

  const handleValidation = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setEmail(value);
    // Simple validation: check if the email format is invalid
    setIsInvalid(!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value));
  };

  useEffect(() => {
    setPersonalDetails({
      businessName: personalDetails?.businessName || "",
      fullName: personalDetails?.fullName || "",
      contactNo: personalDetails?.contactNo || "",
      emailAddress: personalDetails?.emailAddress || "",
      returnShippingAddress: personalDetails?.returnShippingAddress || "",
    });

    setDeviceDetails({
      deviceType: deviceDetails.deviceType || "",
      brand: deviceDetails.brand || "",
      model: deviceDetails.model || "",
      imeiOrSerialNo: deviceDetails.imeiOrSerialNo || "",
      passwordType: deviceDetails.passwordType || "PIN", // Default to "PIN"
      devicePassword: deviceDetails.devicePassword || "",
    });
    setRepairDetails({
      issueDescription: repairDetails.issueDescription || "",
      previousRepairAttempts: repairDetails.previousRepairAttempts || "",
      previousRepairAttemptsComments:
        repairDetails.previousRepairAttemptsComments || "", // New field
      jumpQueueForFasterService:
        repairDetails.jumpQueueForFasterService || "No",
      additionalComments: repairDetails.additionalComments || "",
    });

    setShippingDetails({
      requireReturnLabel:
        shippingDetails.requireReturnLabel || "I will arrange pickup myself",
      requirePickupLabel:
        shippingDetails.requirePickupLabel ||
        "No,I will send the device myself",
      termsAndConditions: shippingDetails.termsAndConditions || false,
      signature: shippingDetails.signature || "", // Assume this is captured
    });

    setPricingAgreement(false);
  }, []);

  const validateStep = () => {
    const newErrors: Errors = {};

    setPersonalDetails({
      businessName: personalDetails?.businessName || "",
      fullName: personalDetails?.fullName || "",
      contactNo: personalDetails?.contactNo || "",
      emailAddress: personalDetails?.emailAddress || "",
      returnShippingAddress: personalDetails?.returnShippingAddress || "",
    });
    setDeviceDetails({
      deviceType: deviceDetails.deviceType || "",
      brand: deviceDetails.brand || "",
      model: deviceDetails.model || "",
      imeiOrSerialNo: deviceDetails.imeiOrSerialNo || "",
      passwordType: deviceDetails.passwordType || "PIN", // Default to "PIN"
      devicePassword: deviceDetails.devicePassword || "",
    });
    setRepairDetails({
      issueDescription: repairDetails.issueDescription || "",
      previousRepairAttempts: repairDetails.previousRepairAttempts || "",
      previousRepairAttemptsComments:
        repairDetails.previousRepairAttemptsComments || "", // New field
      jumpQueueForFasterService:
        repairDetails.jumpQueueForFasterService || "No",
      additionalComments: repairDetails.additionalComments || "",
    });

    setShippingDetails({
      requireReturnLabel:
        shippingDetails.requireReturnLabel || "I will arrange pickup myself",
      requirePickupLabel: shippingDetails.requirePickupLabel || "No",
      termsAndConditions: shippingDetails.termsAndConditions || false,
      signature: shippingDetails.signature || "", // Assume this is captured
    });

    setPricingAgreement(false);

    if (activeStep === 0) {
      // Only validate required fields for Step 0
      if (
        !personalDetails?.fullName.trim() ||
        !personalDetails.hasOwnProperty("fullName")
      )
        newErrors.fullName = "Full name is required";

      // Contact number validation: 10 digits only
      if (!/^\d{10}$/.test(personalDetails?.contactNo))
        newErrors.contactNo = "Contact number must be 10 digits";

      // Email validation
      if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(personalDetails?.emailAddress))
        newErrors.emailAddress = "Invalid email format";

      if (!repairDetails.issueDescription.trim())
        newErrors.issueDescription = "Description is required";
      if (repairDetails.previousRepairAttempts === undefined)
        newErrors.previousRepairAttempts =
          "Please indicate if there were previous attempts";

      if (
        repairDetails.previousRepairAttempts == "Yes" &&
        !repairDetails.previousRepairAttemptsComments.trim()
      ) {
        newErrors.previousRepairAttemptsComments =
          "Explanation of previous repair attempts is required";
      }

      if (repairDetails.jumpQueueForFasterService === undefined)
        newErrors.jumpQueueForFasterService =
          "Please indicate if you want to jump the queue";
    }

    if (activeStep === 1) {
      // Check for return label details
      // if (
      //   shippingDetails.requireReturnLabel === "Yes" &&
      //   !shippingDetails.returnLabelDetails.trim()
      // )
      //   newErrors.requireReturnLabel = "Return label details are required";

      // // Check for pickup label details
      // if (
      //   shippingDetails.requirePickupLabel === "Yes" &&
      //   !shippingDetails.pickupLabelDetails.trim()
      // )
      //   newErrors.requirePickupLabel = "Pickup label details are required";
      if (!personalDetails?.returnShippingAddress.trim())
        newErrors.returnShippingAddress = "Return shipping address is required";
      if (!shippingDetails.termsAndConditions)
        newErrors.termsAndConditions =
          "Accepting terms and conditions is required";

      if (!shippingDetails.signature.trim())
        newErrors.signature = "Signature is required";
      if (!pricingAgreement)
        newErrors.pricingAgreement = "You must agree to the pricing agreement";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handlePasswordTypeChange = (
    e: React.ChangeEvent<HTMLSelectElement>
  ) => {
    const selectedType = e.target.value;
    setDeviceDetails((prevDetails) => ({
      ...prevDetails,
      passwordType: selectedType,
      devicePassword: "", // Clear previous password
    }));

    if (selectedType === "PIN") {
      setPinModalOpen(true);
    } else if (selectedType === "Pattern") {
      setPatternModalOpen(true);
    }
  };

  const handleNextStep = () => {
    if (validateStep()) {
      setActiveStep((prev) => prev + 1);
      setTimeout(() => {
        formContainerRef.current?.scrollIntoView({
          behavior: "smooth",
          block: "start", // Ensure the top of the form is aligned with the top of the viewport
        });
      }, 100);
    }
  };
  // const handlePrevStep = () => {
  //   if (activeStep > 0) {
  //     setActiveStep((prev) => prev - 1);
  //   }
  // };

  const handlePrevStep = () => {
    if (activeStep > 0) {
      setActiveStep((prev) => prev - 1);
      setTimeout(() => {
        formContainerRef.current?.scrollIntoView({
          behavior: "smooth",
          block: "start", // Ensure the top of the form is aligned with the top of the viewport
        });
      }, 100);
    }
  };
  const handleSubmit = async () => {
    if (validateStep()) {
      setIsLoading(true);
      const payload = {
        personalDetails,
        deviceDetails,
        repairDetails,
        shippingDetails,
        pricingAgreement,
        type: `${pathname === "/mail-in-repair"
          ? "mail-in"
          : pathname === "/data-recovery"
            ? "data-recovery"
            : "ps5"
          }`,
      };

      try {
        const response = await axios.post(
          `${apiUrl}/api/repair_info`,
          payload,
          {
            headers: {
              "Content-Type": "application/json",
            },
          }
        );

        if (response.status === 200 || response.status === 201) {
          const { orderReferenceId } = response.data.data; // Assuming the orderReferenceId is returned in the response data

          if (typeof window !== "undefined") {
            localStorage.removeItem("formData");

            // Pass orderReferenceId as query parameter in the URL
            const cleanOrderReferenceId = orderReferenceId.startsWith("#")
              ? orderReferenceId.slice(1)
              : orderReferenceId;

            // Handle Google Ads conversion tracking
            const callback = function () {
              // Navigate after conversion
              if (typeof window !== "undefined") {
                pathname === "/mail-in-repair"
                  ? router.push(`/thank-you`)
                  : pathname === "/data-recovery"
                    ? router.push(`/thank-you`)
                    : router.push(`/thank-you`);
              }
            };

            // Google Ads Conversion Tracking
            window.gtag("event", "conversion", {
              send_to: "AW-16874061920/mR6jCKzNgr0aEOCAl-4-",
              event_callback: callback,
            });
          }
        } else {
          alert("Failed to submit the form. Please try again.");
        }
      } catch (error) {
        console.error("Error submitting the form:", error);
        alert("An error occurred while submitting the form.");
      } finally {
        setIsLoading(false); // Hide loader after processing
      }
    }
  };

  useEffect(() => {
    // When 'requireReturnLabel' is set to 'No', clear returnLabelDetails
    if (shippingDetails.requireReturnLabel === "No") {
      setShippingDetails((prevState) => ({
        ...prevState,
        returnLabelDetails: "", // Clear returnLabelDetails when 'No' is selected
      }));
    }

    // When 'requirePickupLabel' is set to 'No', clear pickupLabelDetails
    if (shippingDetails.requirePickupLabel === "No") {
      setShippingDetails((prevState) => ({
        ...prevState,
        pickupLabelDetails: "", // Clear pickupLabelDetails when 'No' is selected
      }));
    }

    // Save the updated state to localStorage
    const formData = {
      shippingDetails,
      repairDetails,
      personalDetails,
      deviceDetails,
    };

    localStorage.setItem("formData", JSON.stringify(formData));
  }, [
    shippingDetails.requireReturnLabel, // Watch for changes in requireReturnLabel
    shippingDetails.requirePickupLabel, // Watch for changes in requirePickupLabel
  ]);

  useEffect(() => {
    // You can use `localStorage` or the `useEffect` hook to persist form values
    if (typeof window !== "undefined") {
      const storedData = JSON.parse(localStorage.getItem("formData") || "{}");
      if (storedData) {
        setShippingDetails(storedData.shippingDetails || {});
        setRepairDetails(storedData.repairDetails || {});
        setPersonalDetails(storedData.personalDetails || {});
        setDeviceDetails(storedData.deviceDetails || {});
      }
    }
  }, []);

  useEffect(() => {
    const repairType = sessionStorage.getItem("repairType");

    if (repairType) {
      // Scroll to the element with id="stapergkform"
      const element = document.getElementById("stapergk");
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
      // Once the scroll is done, remove the sessionStorage item
      sessionStorage.removeItem("repairType");
    }
  }, []);

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

      <section className="steper-form-section-os bg-no-repeat bg-cover bg-center" style={{ backgroundImage: `url(${mailinrepairbg.src})` }} // Using .src here
      >
        <div className="container gaurav-bg-trans ">
          <div className="py-3 xl:py-6 2xl:py-6">
            <MainHeading
              Heading={`${pathname === "/mail-in-repair" ? "PRC Mail-In Repair Submission Form" : pathname === "/data-recovery" ? "PRC data-recovery Submission Form" : "PRC PS5 Repair Submission Form"}`

              }
              color="var(--primary)"
              svg_stroke="var(--alpha)"
            />
          </div>

          <div
            ref={formContainerRef}
            className="max-w-5xl mx-auto lg:p-4 "
            id="stapergk"
          >

            <div className="grid grid-cols-2 mb-8  relative text-primary gaurav-line" >
              <style jsx>{`
    .gaurav-line::after {
      position: absolute;
      content: "";
      width: 50%;
      height: 2px;
      background: var(--tertiary);
      top: 37%;
      left: 0;
      right: 0;
      margin: 0 auto;
      z-index: 1;
    }
  `}</style>
              {["Personal Details", "Repair Details"].map((step, index) => (
                <div
                  key={index}
                  className="flex items-center flex-col  relative z-10"
                >
                  <div
                    className={`w-[3rem] h-[3rem] xl:w-20 xl:h-20 rounded-full flex items-center justify-center text-white font-bold border-[1px] bg-black  ${activeStep === index
                      ? "bg-yellow-500"
                      : activeStep > index
                        ? "bg-primary"
                        : " relative z-10"
                      }`}
                  >
                    {activeStep > index ? (
                      <Lottie
                        animationData={correct}
                        style={{ width: 50, height: 50 }}
                        className="lottie-icon"
                      />
                    ) : (
                      index + 1
                    )}
                  </div>
                  <p
                    className={`font-medium lg:text-lg text-[12px] leading-[14px] text-center m-0 text-primary  ${activeStep === index
                      ? "font-medium lg:text-lg text-[12px] leading-[14px]  text-center m-0 "
                      : ""
                      }`}
                  >
                    {step}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <div className="">
            {activeStep === 0 && (
              <>
                <div className="grid md:grid-cols-2 gap-[20px] py-2 lg:py-8 border-y-[1px] border-[#81818175]" >
                  <div className="hidden md:block">
                    <div className="relative w-full h-full block pb-[61%]">
                      <Image
                        src={StaperForm1}
                        alt="Step Form Image"
                        className="absolute top-0 left-0 right-0 bottom-0 w-full h-full object-cover rounded-[10px]"
                      />
                    </div>
                  </div>
                  <div>
                    <div className="">
                      <div className="flex flex-col xl:gap-4 lg:gap-3 gap-4  text-secondary">
                        <h4 className="lg:text-lg text-sm text-primary">Personal Details</h4>

                        <div className="grid lg:grid-cols-2 grid-cols-1 gap-4 form-label">
                          {/* Business Name (Optional) */}
                          <div className="">
                            <TextField
                              label="Business Name(If any)"
                              name="business_name"
                              fullWidth
                              value={personalDetails.businessName}
                              onChange={(e) =>
                                setPersonalDetails({
                                  ...personalDetails,
                                  businessName: e.target.value,
                                })
                              }
                              InputLabelProps={{
                                shrink: true, // ⬅️ Keeps the label on top
                              }}
                              sx={{
                                '& label': {
                                  color: 'white',
                                },
                                '& label.Mui-focused': {
                                  color: 'white',
                                },
                                '& .MuiOutlinedInput-root': {
                                  color: 'white',
                                  borderRadius: '12px', // 👈 custom border radius here
                                  '& fieldset': {
                                    borderColor: 'white',
                                    borderRadius: '12px', // 👈 also apply to the fieldset
                                  },
                                  '&:hover fieldset': {
                                    borderColor: 'white',
                                  },
                                  '&.Mui-focused fieldset': {
                                    borderColor: 'white',
                                    borderWidth: 2,
                                  },
                                },
                              }}
                            />
                          </div>

                          <div className="">
                            <TextField
                              required
                              label="Full Name"
                              name="full_name"
                              fullWidth
                              value={personalDetails.fullName}
                              onChange={(e) => {
                                setPersonalDetails({
                                  ...personalDetails,
                                  fullName: e.target.value,
                                });
                                setErrors((prevErrors) => ({
                                  ...prevErrors,
                                  fullName: "",
                                }));
                              }}
                              InputLabelProps={{
                                shrink: true, // ⬅️ Keeps the label on top
                              }}
                              sx={{
                                '& label': {
                                  color: 'white',
                                },
                                '& label.Mui-focused': {
                                  color: 'white',
                                },
                                '& .MuiOutlinedInput-root': {
                                  color: 'white',
                                  borderRadius: '12px', // 👈 custom border radius here
                                  '& fieldset': {
                                    borderColor: 'white',
                                    borderRadius: '12px', // 👈 also apply to the fieldset
                                  },
                                  '&:hover fieldset': {
                                    borderColor: 'white',
                                  },
                                  '&.Mui-focused fieldset': {
                                    borderColor: 'white',
                                    borderWidth: 2,
                                  },
                                },
                              }}
                            />
                            {errors.fullName && (
                              <p className="text-[red] text-sm mb-0">
                                {errors.fullName}
                              </p>
                            )}
                          </div>

                          <div className="">
                            <TextField
                              required
                              label="Contact Number"
                              name="contact_number"
                              type="tel"
                              fullWidth
                              value={personalDetails.contactNo}
                              onChange={(e) => {
                                if (/^\d{0,10}$/.test(e.target.value)) {
                                  setPersonalDetails({
                                    ...personalDetails,
                                    contactNo: e.target.value,
                                  });
                                }
                                if (e.target.value.length === 10) {
                                  setErrors((prevErrors) => ({
                                    ...prevErrors,
                                    contactNo: "",
                                  }));
                                }
                              }}
                              InputLabelProps={{
                                shrink: true, // ⬅️ Keeps the label on top
                              }}
                              sx={{
                                '& label': {
                                  color: 'white',
                                },
                                '& label.Mui-focused': {
                                  color: 'white',
                                },
                                '& .MuiOutlinedInput-root': {
                                  color: 'white',
                                  borderRadius: '12px', // 👈 custom border radius here
                                  '& fieldset': {
                                    borderColor: 'white',
                                    borderRadius: '12px', // 👈 also apply to the fieldset
                                  },
                                  '&:hover fieldset': {
                                    borderColor: 'white',
                                  },
                                  '&.Mui-focused fieldset': {
                                    borderColor: 'white',
                                    borderWidth: 2,
                                  },
                                },
                              }}
                              inputProps={{ maxLength: 10 }}
                            />

                            {errors.contactNo && (
                              <p className="text-[red] text-sm mb-0">
                                {errors.contactNo}
                              </p>
                            )}
                          </div>

                          <div className=" ">
                            <TextField
                              required
                              label="Your Email"
                              name="email"
                              fullWidth
                              value={personalDetails.emailAddress}
                              onChange={(e) => {
                                setPersonalDetails({
                                  ...personalDetails,
                                  emailAddress: e.target.value,
                                });
                                setErrors((prevErrors) => ({
                                  ...prevErrors,
                                  emailAddress: "",
                                }));
                              }}
                              InputLabelProps={{
                                shrink: true, // ⬅️ Keeps the label on top
                              }}
                              sx={{
                                '& label': {
                                  color: 'white',
                                },
                                '& label.Mui-focused': {
                                  color: 'white',
                                },
                                '& .MuiOutlinedInput-root': {
                                  color: 'white',
                                  borderRadius: '12px', // 👈 custom border radius here
                                  '& fieldset': {
                                    borderColor: 'white',
                                    borderRadius: '12px', // 👈 also apply to the fieldset
                                  },
                                  '&:hover fieldset': {
                                    borderColor: 'white',
                                  },
                                  '&.Mui-focused fieldset': {
                                    borderColor: 'white',
                                    borderWidth: 2,
                                  },
                                },
                              }} className={`w-full  text-secondary  ${isInvalid ? "border-red-500" : ""
                                }`}
                              type="email"
                            />
                            {errors.emailAddress && (
                              <p className="text-[red] text-sm mb-0">
                                {errors.emailAddress}
                              </p>
                            )}
                          </div>
                        </div>

                        <div>
                          {pathname !== "/ps5-repair" && (
                            <h4 className="lg:text-lg text-sm pb-[10px] text-primary">
                              Device Details
                            </h4>
                          )}
                          <div className="grid lg:grid-cols-2 grid-cols-1 gap-4 form-label">
                            {(pathname === "/mail-in-repair" ||
                              pathname === "/data-recovery") && (
                                <>
                                  <div className="w-full ">
                                    <TextField
                                      type="text"
                                      label="Enter Device Type(eg:Mobile Phone/Tablet/laptop) "
                                      name="deviceType"
                                      fullWidth
                                      value={deviceDetails.deviceType}
                                      onChange={(
                                        e: React.ChangeEvent<HTMLInputElement>
                                      ) =>
                                        setDeviceDetails({
                                          ...deviceDetails,
                                          deviceType: e.target.value,
                                        })
                                      }
                                      InputLabelProps={{
                                        shrink: true, // ⬅️ Keeps the label on top
                                      }}
                                      sx={{
                                        '& label': {
                                          color: 'white',
                                        },
                                        '& label.Mui-focused': {
                                          color: 'white',
                                        },
                                        '& .MuiOutlinedInput-root': {
                                          color: 'white',
                                          borderRadius: '12px', // 👈 custom border radius here
                                          '& fieldset': {
                                            borderColor: 'white',
                                            borderRadius: '12px', // 👈 also apply to the fieldset
                                          },
                                          '&:hover fieldset': {
                                            borderColor: 'white',
                                          },
                                          '&.Mui-focused fieldset': {
                                            borderColor: 'white',
                                            borderWidth: 2,
                                          },
                                        },
                                      }}
                                    />
                                  </div>
                                  <div className="w-full ">
                                    <TextField
                                      id="brandModel"
                                      type="text"
                                      label="Enter Brand/Model (e.g:Apple-iPhone 13 Pro)"
                                      name="brandModel"
                                      fullWidth
                                      value={deviceDetails.brand}
                                      onChange={(
                                        e: React.ChangeEvent<HTMLInputElement>
                                      ) =>
                                        setDeviceDetails({
                                          ...deviceDetails,
                                          brand: e.target.value,
                                        })
                                      }
                                      InputLabelProps={{
                                        shrink: true, // ⬅️ Keeps the label on top
                                      }}
                                      sx={{
                                        '& label': {
                                          color: 'white',
                                        },
                                        '& label.Mui-focused': {
                                          color: 'white',
                                        },
                                        '& .MuiOutlinedInput-root': {
                                          color: 'white',
                                          borderRadius: '12px', // 👈 custom border radius here
                                          '& fieldset': {
                                            borderColor: 'white',
                                            borderRadius: '12px', // 👈 also apply to the fieldset
                                          },
                                          '&:hover fieldset': {
                                            borderColor: 'white',
                                          },
                                          '&.Mui-focused fieldset': {
                                            borderColor: 'white',
                                            borderWidth: 2,
                                          },
                                        },
                                      }} />
                                  </div>
                                  <div className=" w-full ">
                                    <TextField
                                      type="text"
                                      label="IMEI/Serial No.(If known)"
                                      name="imei_serial_no"
                                      fullWidth
                                      value={deviceDetails.imeiOrSerialNo}
                                      onChange={(e) =>
                                        setDeviceDetails({
                                          ...deviceDetails,
                                          imeiOrSerialNo: e.target.value,
                                        })
                                      }
                                      InputLabelProps={{
                                        shrink: true, // ⬅️ Keeps the label on top
                                      }}
                                      sx={{
                                        '& label': {
                                          color: 'white',
                                        },
                                        '& label.Mui-focused': {
                                          color: 'white',
                                        },
                                        '& .MuiOutlinedInput-root': {
                                          color: 'white',
                                          borderRadius: '12px', // 👈 custom border radius here
                                          '& fieldset': {
                                            borderColor: 'white',
                                            borderRadius: '12px', // 👈 also apply to the fieldset
                                          },
                                          '&:hover fieldset': {
                                            borderColor: 'white',
                                          },
                                          '&.Mui-focused fieldset': {
                                            borderColor: 'white',
                                            borderWidth: 2,
                                          },
                                        },
                                      }}
                                    />
                                  </div>
                                </>
                              )}
                            <div className="w-full set_lable_color">
                              {/* <Select
                                defaultSelectedKeys={
                                  deviceDetails?.passwordType == "None"
                                    ? ["None"]
                                    : [deviceDetails?.passwordType]
                                }
                                className="bg-primary text-secondary focus:ring-[2px] focus:ring-[var(--prc)] rounded-[2px]"
                                label="Password Type (Must Be Correct One)*"
                                name="password_type"
                                value={deviceDetails.passwordType || "None"}
                                onChange={(e) => {
                                  const selectedType = e.target.value;
                                  setDeviceDetails((prevDetails) => ({
                                    ...prevDetails,
                                    passwordType: selectedType,
                                    devicePassword: "",
                                  }));

                                  if (selectedType === "PIN") {
                                    setPinModalOpen(true);
                                  } else if (selectedType === "Pattern") {
                                    setPatternModalOpen(true);
                                  }
                                }}
                                fullWidth
                                
                                
                              >
                                <MenuItem key="None" value="None" >
                                  None
                                </MenuItem>
                                <MenuItem key="PIN" value="PIN">
                                  PIN
                                </MenuItem>
                                {pathname === "/mail-in-repair" ||
                                  pathname === "/data-recovery" ? (
                                  <MenuItem key="Pattern" value="Pattern">
                                    Pattern
                                  </MenuItem>
                                ) : null}
                              </Select> */}
                              <Select
                                labelId="password-type-label"
                                name="password_type"
                                value={deviceDetails.passwordType || "None"}
                                onChange={(e) => {
                                  const selectedType = e.target.value;
                                  setDeviceDetails((prevDetails) => ({
                                    ...prevDetails,
                                    passwordType: selectedType,
                                    devicePassword: "",
                                  }));

                                  if (selectedType === "PIN") {
                                    setPinModalOpen(true);
                                  } else if (selectedType === "Pattern") {
                                    setPatternModalOpen(true);
                                  }
                                }}
                                sx={{
                                  color: "white",
                                  backgroundColor: "transparent",
                                  borderRadius: "12px",
                                  "& .MuiOutlinedInput-notchedOutline": {
                                    borderColor: "white",
                                  },
                                  "&:hover .MuiOutlinedInput-notchedOutline": {
                                    borderColor: "white",
                                  },
                                  "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
                                    borderColor: "white",
                                    borderWidth: 2,
                                  },
                                  "& .MuiSelect-icon": {
                                    color: "white", // dropdown arrow color
                                  },
                                }}
                                fullWidth
                              >
                                <MenuItem value="None">None</MenuItem>
                                <MenuItem value="PIN">PIN</MenuItem>
                                {(pathname === "/mail-in-repair" || pathname === "/data-recovery") && (
                                  <MenuItem value="Pattern">Pattern</MenuItem>
                                )}
                              </Select>
                              <div className="mt-2">
                                {deviceDetails.passwordType !== "None" &&
                                  deviceDetails.devicePassword && (
                                    <p className="text-green-500 text-sm">
                                      {deviceDetails.passwordType} password
                                      saved successfully.
                                    </p>
                                  )}
                              </div>

                              <Modal
                                open={pinModalOpen}
                                onClose={() => {
                                  if (!pinValue) {
                                    setDeviceDetails((prevDetails) => ({
                                      ...prevDetails,
                                      passwordType: "None",
                                      devicePassword: "",
                                    }));
                                  }
                                  setPinModalOpen(false);
                                }}
                                className="flex items-center justify-center"
                              >
                                <div className="bg-primary p-5 rounded-lg  lg:w-[30%] w-[90%] px-3 border-[1px] border-[#81818175]">
                                  <h2 className="text-center text-2xl mb-2 text-prc">
                                    Enter Device PIN
                                  </h2>
                                  <TextField
                                    type="password"
                                    label="PIN"
                                    value={pinValue}
                                    fullWidth
                                    onChange={(e) =>
                                      setPinValue(e.target.value)
                                    }
                                    InputLabelProps={{
                                      shrink: true, // ⬅️ Keeps the label on top
                                    }}
                                    sx={{
                                      '& label.Mui-focused': {
                                        color: 'var(--prc)', // Label color when focused
                                      },
                                      '& label': {
                                        color: 'var(--prc)', // Default label color
                                      },
                                      '&:hover label': {
                                        color: 'var(--prc)', // Label color on hover
                                      },
                                      '& .MuiOutlinedInput-root': {
                                        '& fieldset': {
                                          borderColor: 'var(--prc)',
                                        },
                                        '&:hover fieldset': {
                                          borderColor: 'var(--prc)', // Border color on hover
                                        },
                                        '&.Mui-focused fieldset': {
                                          borderColor: 'var(--prc)',
                                          borderWidth: 2,
                                        },
                                        '& input::placeholder': {
                                          color: 'var(--prc)', // Placeholder color
                                          opacity: 1, // Optional: make placeholder fully opaque
                                        },
                                        '& input': {
                                          color: 'black', // Input text color
                                        },
                                      },
                                    }}
                                  />
                                  <div className="flex justify-end mt-4">
                                    <button
                                      onClick={() => {
                                        setPinModalOpen(false);
                                      }}
                                      className="btn bg-gray-500 text-white px-4 py-2 rounded mr-2"
                                    >
                                      Cancel
                                    </button>
                                    <button
                                      onClick={() => {
                                        setDeviceDetails((prevDetails) => ({
                                          ...prevDetails,
                                          devicePassword: pinValue,
                                        }));
                                        setPinModalOpen(false);
                                      }}
                                      className="btn bg-green-500 text-white px-4 py-2 rounded"
                                    >
                                      Save PIN
                                    </button>
                                  </div>
                                </div>
                              </Modal>

                              <Modal
                                open={patternModalOpen}
                                onClose={() => {
                                  if (!deviceDetails.devicePassword) {
                                    setDeviceDetails((prevDetails) => ({
                                      ...prevDetails,
                                      passwordType: "None",
                                      devicePassword: "",
                                    }));
                                  }
                                  setPatternModalOpen(false);
                                }}
                                className="flex items-center justify-center p-[15px]"
                              >
                                <div className="bg-primary p-5 rounded-lg lg:w-[30%] w-full overflow-auto max-h py-3 border-[1px] border-primary">
                                  <h2 className="text-center text-2xl mb-2 text-prc">
                                    Draw Your Pattern
                                  </h2>
                                  <div
                                    style={{
                                      width: "320px",
                                      height: "320px",
                                      backgroundColor: "var(--primary)",
                                      borderRadius: "10px",
                                      display: "flex",
                                      justifyContent: "center",
                                      alignItems: "center",
                                      margin: "0 auto",
                                      color: "var(--prc)"
                                    }}
                                  >
                                    <ReactCanvasPatternLock
                                      width={300}
                                      height={300}
                                      rows={3}
                                      cols={3}
                                      onComplete={(
                                        code: number[],
                                        nodes: any
                                      ) => {
                                        const pattern = code.join("-");
                                        setDeviceDetails((prevDetails) => ({
                                          ...prevDetails,
                                          passwordType: "Pattern",
                                          devicePassword: pattern,
                                        }));
                                        setPatternModalOpen(false);
                                      }}

                                    />
                                  </div>
                                  <div className="flex justify-end mt-4">
                                    <button
                                      onClick={() => setPatternModalOpen(false)}
                                      className="btn bg-red-500 text-white px-4 py-2 rounded"
                                    >
                                      Cancel
                                    </button>
                                  </div>
                                </div>
                              </Modal>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className=" ">
                        <div>
                          <div className="">
                            <div className="">
                              {/* Description of Issue */}
                              <div className="mt-2 ">
                                <TextField
                                  multiline
                                  placeholder="Please provide a detailed information of the damage(The more information you include, the better chances of successfully repairing the device).*"
                                  className="w-full"
                                  minRows={3}
                                  value={repairDetails.issueDescription}
                                  onChange={(e) => {
                                    setRepairDetails({
                                      ...repairDetails,
                                      issueDescription: e.target.value,
                                    });
                                    setErrors((prevErrors) => ({
                                      ...prevErrors,
                                      issueDescription: "",
                                    }));
                                  }}
                                  required
                                  sx={{
                                    '& label': {
                                      color: 'white',
                                    },
                                    '& label.Mui-focused': {
                                      color: 'white',
                                    },
                                    '& .MuiOutlinedInput-root': {
                                      color: 'white',
                                      borderRadius: '12px', // 👈 custom border radius here
                                      '& fieldset': {
                                        borderColor: 'white',
                                        borderRadius: '12px', // 👈 also apply to the fieldset
                                      },
                                      '&:hover fieldset': {
                                        borderColor: 'white',
                                      },
                                      '&.Mui-focused fieldset': {
                                        borderColor: 'white',
                                        borderWidth: 2,
                                      },
                                    },
                                  }}
                                />
                                {errors.issueDescription && (
                                  <p className="text-[red] text-sm mb-0">
                                    {errors.issueDescription}
                                  </p>
                                )}
                              </div>
                              <div className="grid md:grid-cols-2 gap-3 mt-3 ">
                                {/* Previous Repair Attempts */}
                                <div>
                                  <p className="text-base leading-5 mb-2 text-primary">
                                    Any Previous Repair Attempts?
                                  </p>

                                  {/* Radio buttons for Yes or No */}
                                  <div className="flex gap-4">
                                    <FormControlLabel
                                      className="text-primary"
                                      control={
                                        <Radio
                                          sx={{
                                            color: "var(--primary)", // Unchecked color
                                            "&.Mui-checked": {
                                              color: "var(--alpha)", // Checked color
                                            },
                                          }}
                                          checked={
                                            repairDetails?.previousRepairAttempts ===
                                            "Yes"

                                          }
                                          className="text-primary"
                                          onChange={() =>
                                            setRepairDetails({
                                              ...repairDetails,
                                              previousRepairAttempts: "Yes",
                                            })
                                          }
                                        />
                                      }
                                      label="Yes"
                                      sx={{
                                        color: "#fff", // White text for the label
                                      }}// This is the label that will be shown next to the radio button
                                    />
                                    <FormControlLabel
                                      className="text-primary"
                                      control={
                                        <Radio
                                          sx={{
                                            color: "var(--primary)", // Unchecked color
                                            "&.Mui-checked": {
                                              color: "var(--alpha)", // Checked color
                                            },
                                          }}

                                          checked={
                                            repairDetails?.previousRepairAttempts ===
                                            "No"
                                          }
                                          className="text-primary"
                                          onChange={() =>
                                            setRepairDetails({
                                              ...repairDetails,
                                              previousRepairAttempts: "No",
                                            })
                                          }
                                        />
                                      }
                                      label="No"
                                      sx={{
                                        color: "#fff", // White text for the label
                                      }}// This is the label that will be shown next to the radio button
                                    />
                                  </div>

                                  {repairDetails.previousRepairAttempts ===
                                    "Yes" && (
                                      <div className="steper-textarea-os mt-2">
                                        <p className="text-primary text-sm mt-2 italic">
                                          A $66 service fee will be required to
                                          release the device, regardless of
                                          whether it is fixed or not.
                                        </p>
                                        <TextField
                                          className="w-full"
                                          placeholder="Little explanation about previous attempts"
                                          minRows={5}
                                          value={
                                            repairDetails.previousRepairAttemptsComments
                                          }
                                          onChange={(e) =>
                                            setRepairDetails({
                                              ...repairDetails,
                                              previousRepairAttemptsComments:
                                                e.target.value,
                                            })
                                          }
                                          required
                                          sx={{
                                            '& label': {
                                              color: 'white',
                                            },
                                            '& label.Mui-focused': {
                                              color: 'white',
                                            },
                                            '& .MuiOutlinedInput-root': {
                                              color: 'white',
                                              borderRadius: '12px', // 👈 custom border radius here
                                              '& fieldset': {
                                                borderColor: 'white',
                                                borderRadius: '12px', // 👈 also apply to the fieldset
                                              },
                                              '&:hover fieldset': {
                                                borderColor: 'white',
                                              },
                                              '&.Mui-focused fieldset': {
                                                borderColor: 'white',
                                                borderWidth: 2,
                                              },
                                            },
                                          }}
                                        />
                                        {errors.previousRepairAttemptsComments && (
                                          <p className="text-[red] text-sm mb-0">
                                            {
                                              errors.previousRepairAttemptsComments
                                            }
                                          </p>
                                        )}
                                      </div>
                                    )}
                                </div>

                                {/* Jump the Queue */}
                                <div>
                                  <p className="text-base leading-5 mb-2 text-primary">
                                    Do you require Priority Repair Service?
                                  </p>

                                  {/* Radio buttons for Yes or No */}
                                  <div className="flex gap-4">

                                    <FormControlLabel
                                      className="text-primary"
                                      control={

                                        <Radio
                                          sx={{
                                            color: "var(--primary)", // Unchecked color
                                            "&.Mui-checked": {
                                              color: "var(--alpha)", // Checked color
                                            },
                                          }}
                                          checked={
                                            repairDetails?.jumpQueueForFasterService ===
                                            "Yes"
                                          }
                                          onChange={() =>
                                            setRepairDetails({
                                              ...repairDetails,
                                              jumpQueueForFasterService: "Yes",
                                            })
                                          }
                                        />
                                      }
                                      label="Yes" // This is the label that will be shown next to the radio button
                                    />
                                    <FormControlLabel
                                      control={
                                        <Radio
                                          sx={{
                                            color: "var(--primary)", // Custom color for the radio button
                                            "&.Mui-checked": {
                                              color: "var(--alpha)", // Color when radio is checked
                                            },
                                          }}
                                          checked={
                                            repairDetails?.jumpQueueForFasterService ===
                                            "No"
                                          }
                                          onChange={() =>
                                            setRepairDetails({
                                              ...repairDetails,
                                              jumpQueueForFasterService: "No",
                                            })
                                          }
                                        />
                                      }
                                      label="No"
                                      sx={{
                                        color: "#fff", // White text for the label
                                      }}// This is the label that will be shown next to the radio button
                                    />
                                  </div>

                                  {/* Displaying fee message when "Yes" is selected */}
                                  {repairDetails.jumpQueueForFasterService ===
                                    "Yes" && (
                                      <p className="text-primary text-sm mt-2 mb-0 italic ">
                                        A minimum fee of $100 (or higher) will be
                                        charged for priority service.
                                      </p>
                                    )}
                                </div>
                              </div>

                              {/* Additional Comments (Optional) */}
                              <div className="steper-textarea-os mt-2">
                                <p className=" text-base leading-5 mb-2 text-primary">
                                  Additional Comments
                                </p>
                                <TextField
                                  className="w-full"
                                  placeholder="Any other comments or notes"
                                  minRows={5}
                                  value={repairDetails.additionalComments || ""}
                                  onChange={(e) =>
                                    setRepairDetails({
                                      ...repairDetails,
                                      additionalComments: e.target.value,
                                    })
                                  }
                                  sx={{
                                    '& label': {
                                      color: 'white',
                                    },
                                    '& label.Mui-focused': {
                                      color: 'white',
                                    },
                                    '& .MuiOutlinedInput-root': {
                                      color: 'white',
                                      borderRadius: '12px', // 👈 custom border radius here
                                      '& fieldset': {
                                        borderColor: 'white',
                                        borderRadius: '12px', // 👈 also apply to the fieldset
                                      },
                                      '&:hover fieldset': {
                                        borderColor: 'white',
                                      },
                                      '&.Mui-focused fieldset': {
                                        borderColor: 'white',
                                        borderWidth: 2,
                                      },
                                    },
                                  }}
                                />
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="py-4">
                        <div className="flex justify-end mt-4">
                          {activeStep > 0 && (
                            <button
                              onClick={handlePrevStep}
                              className="btn hidden lg:block"
                            >
                              Previous
                            </button>
                          )}
                          {activeStep < 3 ? (
                            <button
                              onClick={handleNextStep}
                              className=" uppercase bg-prc text-white text-[18px] lg:py-[8px] lg:px-[15px] p-2 text-sm rounded-3xl border-[2px] border-[#FFFFFF] flex justify-center items-center"
                            >
                              Next
                              <IoIosArrowRoundForward />
                            </button>
                          ) : (
                            <button className="bg-green-500 hover:bg-green-600 text-white py-2 px-4 rounded-md">
                              <IoCheckmarkDoneOutline className="mr-2" />
                              Complete
                            </button>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </>
            )}

            {activeStep === 1 && (
              <>
                <div className="grid md:grid-cols-2 gap-[20px] py-2 lg:py-8 border-y-[1px] border-[#81818175]">
                  <div className="hidden md:block">
                    <div className="relative w-full h-full block pb-[100%]">
                      <Image
                        src={StaperForm3}
                        alt="Step Form Image"
                        className="absolute top-0 left-0 right-0 bottom-0 w-full h-full object-cover rounded-[10px]"
                      />
                    </div>
                  </div>
                  <div className="">
                    <div className="flex flex-col gap-4 ">
                      {/* Require Pickup Label */}
                      <div className="steper-textarea-os space-y-4">
                        <p className="text-base leading-5 mb-2 text-primary">
                          Would you like PRC to arrange a pickup from your
                          location?
                        </p>
                        {/* <Select
                          defaultSelectedKeys={
                            shippingDetails.requirePickupLabel ==
                              "Yes,Please arrange pickup from my location"
                              ? ["Yes,Please arrange pickup from my location"]
                              : ["No,I will send the device myself"]
                          }
                          className=" text-white "
                          value={shippingDetails.requireReturnLabel}
                          onChange={(e: React.ChangeEvent<HTMLSelectElement>) =>
                            setShippingDetails({
                              ...shippingDetails,
                              requirePickupLabel: e.target.value,
                            })
                          }
                        >
                          <SelectItem
                            key="No,I will send the device myself"
                            value="No,I will send the device myself"
                          >
                            No, I will send the device myself
                          </SelectItem>
                          <SelectItem
                            key="Yes,Please arrange pickup from my location"
                            value="Yes,Please arrange pickup from my location"
                          >
                            Yes, please arrange pickup from my location
                          </SelectItem>
                        </Select> */}
                        <Select
                          labelId="pickup-label"
                          value={shippingDetails.requirePickupLabel}
                          onChange={(e) =>
                            setShippingDetails({
                              ...shippingDetails,
                              requirePickupLabel: e.target.value,
                            })
                          }
                          sx={{
                            color: "white",
                            backgroundColor: "transparent",
                            borderRadius: "12px",
                            "& .MuiOutlinedInput-notchedOutline": {
                              borderColor: "white",
                            },
                            "&:hover .MuiOutlinedInput-notchedOutline": {
                              borderColor: "white",
                            },
                            "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
                              borderColor: "white",
                              borderWidth: 2,
                            },
                            "& .MuiSelect-icon": {
                              color: "white",
                            },
                          }}
                          fullWidth
                        >
                          <MenuItem value="No,I will send the device myself">
                            No, I will send the device myself
                          </MenuItem>
                          <MenuItem value="Yes,Please arrange pickup from my location">
                            Yes, please arrange pickup from my location
                          </MenuItem>
                        </Select>

                        {shippingDetails.requirePickupLabel ==
                          "Yes,Please arrange pickup from my location" && (
                            <p className="text-primary text-sm mt-2 mb-0 italic break-words">
                              A one-way shipping fee of $15-$20 will be added to
                              your invoice, regardless of whether the device is
                              repaired or not. Connote label will be sent to your
                              email.
                            </p>
                          )}

                        {shippingDetails.requirePickupLabel ===
                          "No,I will send the device myself" && (
                            <p className="text-primary text-sm mt-2 mb-0 italic">
                              No, I will send the device myself.
                            </p>
                          )}
                      </div>
                      {/* Shipping Address (Required) */}
                      <div className="w-full">
                        <TextField
                          required
                          className=""
                          label="Return Shipping Address"
                          name="return_shipping_address"
                          fullWidth
                          value={personalDetails.returnShippingAddress}
                          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                            setPersonalDetails({
                              ...personalDetails,
                              returnShippingAddress: e.target.value,
                            })
                          }
                          InputLabelProps={{
                            shrink: true, // forces the label to stay on top
                          }}
                          sx={{
                            '& label': {
                              color: 'white',
                            },
                            '& label.Mui-focused': {
                              color: 'white',
                            },
                            '& .MuiOutlinedInput-root': {
                              color: 'white',
                              borderRadius: '12px', // 👈 custom border radius here
                              '& fieldset': {
                                borderColor: 'white',
                                borderRadius: '12px', // 👈 also apply to the fieldset
                              },
                              '&:hover fieldset': {
                                borderColor: 'white',
                              },
                              '&.Mui-focused fieldset': {
                                borderColor: 'white',
                                borderWidth: 2,
                              },
                            },
                          }}
                        />
                        {errors.returnShippingAddress && (
                          <p className="text-[red] text-sm mb-0 w-full">
                            {errors.returnShippingAddress}
                          </p>
                        )}
                      </div>
                      {/* Require Return Label */}
                      <div className="steper-textarea-os space-y-3">
                        <p className="text-base leading-5 mb-2 text-primary">
                          How would PRC return your device?
                        </p>
                        {/* <Select
                          defaultSelectedKeys={
                            shippingDetails.requireReturnLabel ==
                              "Please ship the device back to me"
                              ? ["Please ship the device back to me"]
                              : ["I will arrange pickup myself"]
                          }
                          className=""
                          value={
                            shippingDetails.requireReturnLabel ||
                            "I will arrange pickup myself"
                          }
                          onChange={(e: React.ChangeEvent<HTMLSelectElement>) =>
                            setShippingDetails({
                              ...shippingDetails,
                              requireReturnLabel: e.target.value,
                            })
                          }
                        >
                          <SelectItem key="I will arrange pickup myself">
                            I will arrange pickup myself
                          </SelectItem>
                          <SelectItem key="Please ship the device back to me">
                            Please ship the device back to me
                          </SelectItem>
                        </Select> */}
                        <Select
                          labelId="return-label"
                          value={shippingDetails.requireReturnLabel || "I will arrange pickup myself"}
                          onChange={(e) =>
                            setShippingDetails({
                              ...shippingDetails,
                              requireReturnLabel: e.target.value,
                            })
                          }
                          sx={{
                            color: "white",
                            backgroundColor: "transparent",
                            borderRadius: "12px",
                            "& .MuiOutlinedInput-notchedOutline": {
                              borderColor: "white",
                            },
                            "&:hover .MuiOutlinedInput-notchedOutline": {
                              borderColor: "white",
                            },
                            "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
                              borderColor: "white",
                              borderWidth: 2,
                            },
                            "& .MuiSelect-icon": {
                              color: "white",
                            },
                          }}
                          fullWidth
                        >
                          <MenuItem value="I will arrange pickup myself">
                            I will arrange pickup myself
                          </MenuItem>
                          <MenuItem value="Please ship the device back to me">
                            Please ship the device back to me
                          </MenuItem>
                        </Select>

                        {shippingDetails.requireReturnLabel ===
                          "Please ship the device back to me" && (
                            <p className="text-primary text-sm mt-2 mb-0 italic">
                              Additional shipping fee of $15-$20 will be added to
                              your invoice.
                            </p>
                          )}
                      </div>

                      {/* Terms and Conditions */}
                      <div className="border-b-[1px] border-[#6161617b] xl:py-2">
                        <h4 className=" lg:text-basic text-sm mb-1 text-primary ">
                          Terms and Conditions Acknowledgment *
                        </h4>
                        <div>
                          <input
                            type="checkbox"
                            className="check__box"
                            checked={
                              shippingDetails.termsAndConditions == true
                                ? true
                                : false
                            } // Retain state when revisited
                            onChange={(
                              e: React.ChangeEvent<HTMLInputElement>
                            ) =>
                              setShippingDetails({
                                ...shippingDetails,
                                termsAndConditions: e.target.checked, // Update state based on checkbox value
                              })
                            }
                          />
                          <span className="lg:text-base text-sm text-primary ml-2  ">
                            By checking this box, I confirm that I have read and
                            agree to the PRC
                            <Link
                              className="text-primary  font-semibold "
                              href="/Terms_and_Conditions"
                            >
                              {" "}
                              Terms and Conditions{" "}
                            </Link>
                            <Link
                              className="text-primary font-semibold  "
                              href="/Shipping_Policy"
                            >
                              Privacy Policy
                            </Link>{" "}
                            and{" "}
                            <Link
                              className="text-primary  font-semibold  "
                              href="/Warranty_and_Terms"
                            >
                              Warranty Terms
                            </Link>
                            .{" "}
                          </span>
                          {errors.termsAndConditions && (
                            <p className="text-[red] text-sm mb-0">
                              {errors.termsAndConditions}
                            </p>
                          )}
                        </div>
                      </div>

                      {/* Signature */}
                      <div className="my-2">
                        <div className="flex justify-between  rounded-[5px_5px_0px_0px] overflow-hidden">
                          <span className=" bg-alpha text-[14px] 2xl:text-lg xl:text-base uppercase text-primary py-3 2xl:py-3 xl:py-[10px] px-[18px]   w-full">
                            Draw Your Signature *
                          </span>
                          <button
                            className=" italic text-primary  border-[--F1-btn-color] bg-[red] px-2  text-sm"
                            onClick={clearSignature}
                          >
                            Clear
                          </button>
                        </div>
                        {/* <SignatureCanvas
                          ref={sigPad}
                          penColor="black"
                          canvasProps={{
                            className:
                              "w-full h-[200px] bg-white border border-white rounded-md",
                          }}
                          onEnd={saveSignature} // Save signature on end
                          backgroundColor={
                            shippingDetails?.signature ? "red" : "#fff"
                          }
                        /> */}

                        <div className="grid grid-cols-2 gap-3  border-2 border-primary">
                          <div className="">
                            <SignatureCanvas
                              ref={sigPad}
                              penColor="black"
                              canvasProps={{
                                className:
                                  "w-full h-[200px] bg-white border border-white border-2 border-secondary",
                              }}
                              onEnd={saveSignature} // Save signature when drawing ends
                              backgroundColor={
                                shippingDetails?.signature ? "white" : "#fff"
                              }
                            />
                          </div>

                          {shippingDetails?.signature && (
                            <div className="w-full h-[200px] bg-white  border-white border-2 border-secondary">
                              <Image
                                src={shippingDetails.signature}
                                alt="Saved Signature"
                                width={200}
                                height={400}
                              />
                              {/* <button onClick={clearSignature}>
                                Clear Signature
                              </button> */}
                            </div>
                          )}
                        </div>

                        {errors.signature && (
                          <p className="text-[red] text-sm mb-0">
                            {errors.signature}
                          </p>
                        )}

                        {/* {shippingDetails.signature === "" && (
                          <p className="text-[red] text-sm mb-0">
                            Signature is required
                          </p>
                        )} */}
                      </div>
                      <div className="p-2 lg:p-2 rounded-md">
                        <h2 className="text-3xl font-bold mb-4 text-primary">
                          Pricing Agreement*
                        </h2>
                        <div className="flex items-start gap-4 text-yellow-400">
                          <input
                            type="checkbox"
                            className="check__boxs"
                            checked={pricingAgreement == true ? true : false}
                            onChange={() => {
                              setPricingAgreement(!pricingAgreement);
                              setErrors((prevErrors) => ({
                                ...prevErrors,
                                pricingAgreement: !pricingAgreement
                                  ? ""
                                  : "You must agree to the pricing agreement",
                              }));
                            }}
                          />

                          <p className="text-primary">
                            By submitting this form, I agree to proceed with
                            repairs or data recovery based on the prices
                            displayed on the PRC website. PRC will not provide
                            a separate quote if the repair can be completed
                            within the listed prices. If costs exceed the
                            displayed prices, PRC will contact me before
                            proceeding. I am pre-approving repairs or services
                            at the prices shown on the website. If a price is
                            not listed on the website, PRC will provide a
                            separate quotation before proceeding.
                          </p>
                        </div>
                        {errors.pricingAgreement && (
                          <p className="text-[red] text-sm mb-0">
                            {errors.pricingAgreement}
                          </p>
                        )}
                      </div>
                      <div className="flex justify-between mt-4">
                        <button className=" uppercase bg-alpha text-white text-[18px] lg:py-[8px] lg:px-[15px] p-2 text-sm rounded-3xl border-[2px] border-[#FFFFFF] flex justify-center items-center " onClick={handlePrevStep}>
                          Previous
                        </button>
                        <button
                          onClick={handleSubmit}
                          disabled={!pricingAgreement || isLoading} // Disable when loading
                          className={`uppercase bg-alpha text-white text-[18px] lg:py-[8px] lg:px-[15px] p-2 text-sm rounded-3xl border-[2px] border-[#FFFFFF] flex justify-center items-center ${!pricingAgreement || isLoading
                            ? "opacity-50 cursor-not-allowed"
                            : ""
                            }`}
                        >
                          {isLoading ? "Processing..." : "Submit"}
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </>
            )}
          </div>
        </div>
      </section>
    </>
  );
};

export default StaperForm;
