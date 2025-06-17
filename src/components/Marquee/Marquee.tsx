"use client";
import React from "react";

type MarqueeProps = {
  marquee_bg: string;      // Background class (e.g., "bg-yellow-400")
  marquee_text: string;    // Text color class (e.g., "text-black")
  marquee_messages: string; // The marquee message string
};

const Marquee = ({ marquee_bg, marquee_text, marquee_messages }: MarqueeProps) => {
  const repetitions = 50;

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
          animation: marquee 1000s linear infinite;
          display: flex;
          white-space: nowrap;
        }

        .marquee-item {
          animation: none;
        }
      `}</style>

      <section className={`w-full relative h-[40px] hidden md:block ${marquee_bg} overflow-hidden`}>
        <div className="absolute top-0 animate-marquee">
          <div className="flex gap-6">
            {Array.from({ length: repetitions }).map((_, index) => (
              <span
                key={index}
                style={{ color: "#000", WebkitTextFillColor: "#000" }} // Ensures solid black text
                className={`px-[10px] py-[5px] lg:text-[20px] text-[12px] font-bold tracking-[1px] uppercase marquee-item ${marquee_text}`}
              >
                {marquee_messages}
              </span>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Marquee;
