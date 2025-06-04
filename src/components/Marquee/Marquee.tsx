"use client";
import React from "react";

type marquee_props = {
  marquee_bg: string
  marquee_text:string
  marquee_messages:any
}



const Marquee = ({ marquee_bg,marquee_text, marquee_messages}: marquee_props) => {
  const messages =[marquee_messages];
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
        }

        .marquee-item:hover {
          box-shadow: 0 0 25px 10px rgba(255, 255, 255, 0.8); /* Accessible glow */
        }
      `}</style>
      <section className={`w-full relative h-[50px] ${marquee_bg} overflow-hidden`}>
        <div className="absolute top-[-20px] whitespace-nowrap animate-marquee">
          <div className="flex gap-2">
            {Array.from({ length: repetitions }).map((_, repetitionIndex) =>
              messages.map((message, messageIndex) => (
                <span
                  key={`${repetitionIndex}-${messageIndex}`}
                  className={`px-[10px] py-[5px] border-[1px] rounded-full marquee-item lg:text-[20px] text-[12px] font-bold tracking-[1px] relative top-6 border-transparent ${marquee_text}`}
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
