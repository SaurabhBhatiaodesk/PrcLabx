"use client";
import React from "react";

const Marquee = () => {
  const messages = ["We Don’t Provide Walk-In Service"];
  const repetitions = 100;

  return (
    <>
      <style jsx>{`
        @keyframes marquee {
          from {
            transform: translateX(0);
          }
          to {
            transform: translateX(-100%);
          }
        }

        .animate-marquee {
          animation: marquee 800s linear infinite;
          display: flex;
        }

        .marquee-item {
          animation: pulse 32s infinite;
          transition: all 2s ease-in-out;
          background-color: #333; /* Darker background for better contrast */
          color: #fff; /* White text for accessibility */
          border-color: #fff; /* White border for clarity */
        }

        .marquee-item:hover {
          box-shadow: 0 0 25px 10px rgba(255, 255, 255, 0.8); /* Accessible glow */
        }
      `}</style>
      <section className="w-full relative h-[50px] bg-black overflow-hidden">
        <div className="absolute top-[-13px] whitespace-nowrap animate-marquee">
          <div className="flex gap-2">
            {Array.from({ length: repetitions }).map((_, repetitionIndex) =>
              messages.map((message, messageIndex) => (
                <span
                  key={`${repetitionIndex}-${messageIndex}`}
                  className="px-[10px] py-[5px] border-[1px] rounded-full shadow-[5px_4px_28px_1px_rgba(0,0,0,0.2)] marquee-item lg:text-[14px] text-[12px] tracking-[1.5px] relative top-6"
                >
                  {message}
                </span>
              ))
            )}
          </div>
        </div>
      </section>
    </>
  );
};

export default Marquee;
