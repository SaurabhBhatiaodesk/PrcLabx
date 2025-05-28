"use client";
import React, { useRef, useState, memo } from "react";
import MainTitle from "@/components/MainTitle/MainTitle";
import MainHeading from "@/components/ManinHeading/MainHeading";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";
import { Swiper as SwiperType } from "swiper";
import "swiper/css";
import "swiper/css/navigation";

// Define props for LazyYouTube
interface LazyYouTubeProps {
  videoId: string;
}

// Lazy loading YouTube video component
export const LazyYouTube: React.FC<LazyYouTubeProps> = memo(({ videoId }) => {
  const [isLoaded, setIsLoaded] = useState(false);

  const handleLoadVideo = () => {
    if (!isLoaded) {
      setIsLoaded(true);
    }
  };

  const thumbnail = `https://img.youtube.com/vi/${videoId}/hqdefault.jpg`;

  return (
    <div className="youtube-1" style={{ position: "relative" }}>
      {isLoaded ? (
        <iframe
          className="rounded-[30px]"
          width="100%"
          height="400"
          src={`https://www.youtube.com/embed/${videoId}?autoplay=1`}
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen
        ></iframe>
      ) : (
        <div
          className="thumbnail-wrapper"
          style={{
            width: "100%",
            height: "400px",
            backgroundImage: `url(${thumbnail})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            cursor: "pointer",
            borderRadius: "30px",
            position: "relative",
          }}
          onClick={handleLoadVideo}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 68 48"
            width="68"
            height="48"
            style={{
              position: "absolute",
              top: "50%",
              left: "50%",
              transform: "translate(-50%, -50%)",
              zIndex: 2,
            }}
          >
            <path
              d="M66.52,7.2A8.34,8.34,0,0,0,60,1.67C53.7,0,34,0,34,0S14.3,0,8,1.67A8.34,8.34,0,0,0,1.48,7.2,87.94,87.94,0,0,0,0,24a87.94,87.94,0,0,0,1.48,16.8A8.41,8.41,0,0,0,8,46.33C14.3,48,34,48,34,48s19.7,0,26-1.67a8.41,8.41,0,0,0,6.55-6.53A87.94,87.94,0,0,0,68,24,87.94,87.94,0,0,0,66.52,7.2ZM27,34.4V13.6L45,24Z"
              fill="#ff0000"
              className="cursor-pointer"
            />
          </svg>
          <div
            style={{
              position: "absolute",
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              backgroundColor: "rgba(0, 0, 0, 0.4)",
              borderRadius: "30px",
            }}
          ></div>
        </div>
      )}
    </div>
  );
});

LazyYouTube.displayName = "LazyYouTube";


const YouTubeHome: React.FC = () => {
  const swiperRef = useRef<SwiperType | null>(null);

  const handlePrev = () => {
    if (swiperRef.current) {
      swiperRef.current.slidePrev();
    }
  };

  const handleNext = () => {
    if (swiperRef.current) {
      swiperRef.current.slideNext();
    }
  };

  return (
    <>
      <div className="bg-[#0b0b0b] py-3">
        <div className="max-container relative">
          <MainHeading Heading="Learn Like a Pro: Video Guides" />
          <MainTitle Title="Discover our YouTube channel featuring informative videos on mobile phone repairs, tutorials, and expert tips. Join our community and enhance your skills while staying updated on the latest repair techniques!" />

          <Swiper
            onSwiper={(swiper) => (swiperRef.current = swiper)}
            className="arrow-top-right w-[100%] py-4 my-5"
            modules={[Autoplay, Navigation]}
            spaceBetween={20}
            loop={true}
            autoplay={false}
            speed={600}
            breakpoints={{
              320: { slidesPerView: 1 },
              450: { slidesPerView: 1 },
              768: { slidesPerView: 2 },
              1024: { slidesPerView: 2 },
              1440: { slidesPerView: 2 },
            }}
          >
            <SwiperSlide>
              <LazyYouTube videoId="I5t-cizP1hg" />
            </SwiperSlide>
            <SwiperSlide>
              <LazyYouTube videoId="g51-l5-h8Cc" />
            </SwiperSlide>
            <SwiperSlide>
              <LazyYouTube videoId="Fq8geFUeZkM" />
            </SwiperSlide>
          </Swiper>

          <div
            className="custom-nav"
            style={{
              position: "absolute",
              top: "62%",
              zIndex: 5,
              width: "100%",
              left: 0,
              right: 0,
            }}
          >
            <div className="custom-navigation221 flex justify-between">
              <button
                onClick={handlePrev}
                className="prev-button bg-gray-300 p-[4px] rounded-full"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                >
                  <path
                    d="M15 18L9 12L15 6"
                    stroke="black"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </button>
              <button
                onClick={handleNext}
                className="next-button bg-gray-300 p-[4px] rounded-full ml-2"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                >
                  <path
                    d="M9 18L15 12L9 6"
                    stroke="black"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default YouTubeHome;
