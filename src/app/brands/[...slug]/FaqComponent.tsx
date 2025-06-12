"use client"
import React, { useState, useEffect } from "react";
import axios from "axios";

const FaqComponent: React.FC = () => {
  const [faqData, setFaqData] = useState<any[]>([]); // State to hold the FAQ data
  const [loading, setLoading] = useState<boolean>(true); // State to handle loading status
  const [error, setError] = useState<string>(""); // State to handle errors
  const [activeFAQ, setActiveFAQ] = useState<number | null>(null); // State to handle the active (toggled) FAQ

  // Fetch FAQ data from API on component mount
  useEffect(() => {
    const api = `https://www.prc.repair/api/getFaq/apple/48`;

    axios
      .get(api)
      .then((res) => {
        setFaqData(res.data.faqs); // Store fetched FAQ data in state
        setLoading(false); // Set loading to false once data is fetched
      })
      .catch((err) => {
        setError("Failed to load FAQ data"); // Set error message if fetch fails
        setLoading(false);
      });
  }, []);

  // Toggle FAQ visibility
  const handleToggleFAQ = (id: number) => {
    setActiveFAQ(activeFAQ === id ? null : id); // Toggle FAQ answer visibility
  };

  return (
    <>
      {faqData.length > 0 && (
        <div className="max-w-screen-lg mx-auto px-4 py-8">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-semibold text-center text-[#00303E] mb-8">
            Frequently Asked Questions
          </h2>

          {loading && <p className="text-center text-lg">Loading...</p>}
          {error && <p className="text-center text-lg text-red-500">{error}</p>}

          <div className="space-y-4">
            {faqData.map((faq: any) => (
              <div
                key={faq.id}
                className="border rounded-lg shadow-md overflow-hidden"
              >
                <div
                  onClick={() => handleToggleFAQ(faq.id)}
                  className="bg-[#00303E] text-white px-6 py-4 cursor-pointer hover:bg-[#005063] transition-all duration-300 ease-in-out flex justify-between items-center"
                >
                  <h3
                    className="text-sm sm:text-xl md:text-2xl font-semibold"
                    dangerouslySetInnerHTML={{ __html: faq.question }}
                  />
                  {/* Chevron Icon */}
                  <span
                    className={`transition-transform duration-300 ${
                      activeFAQ === faq.id ? "rotate-180" : ""
                    }`}
                  >
                    &#9660; {/* Unicode for downward chevron */}
                  </span>
                </div>

                {/* Show/Hide Answer on Toggle */}
                <div
                  className={`overflow-hidden transition-all duration-300 ease-in-out max-h-0 ${
                    activeFAQ === faq.id ? "max-h-[500px]" : ""
                  }`}
                >
                  <div className="p-6 bg-white">
                    <div
                      className="faq-answer text-gray-700 space-y-4 text-sm sm:text-base md:text-lg"
                      dangerouslySetInnerHTML={{ __html: faq.answer }}
                    ></div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </>
  );
};

export default FaqComponent;
