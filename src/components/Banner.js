"use client"; // Mark as Client Component

import { useState, useEffect } from "react";
import Image from "next/image";
import BannerImg1 from "../../public/assets/banner/1.jpg"; // Path to first image
import BannerImg2 from "../../public/assets/banner/2.jpg"; // Path to second image
import BannerImg3 from "../../public/assets/banner/3.jpg"; // Path to third image

const Banner = () => {
  // State to manage the active index of the carousel
  const [activeIndex, setActiveIndex] = useState(0);
  const images = [BannerImg1, BannerImg2, BannerImg3];

  // Move to the next or previous image
  const moveSlide = (direction) => {
    setActiveIndex((prevIndex) => {
      let newIndex = prevIndex + direction;
      if (newIndex < 0) newIndex = images.length - 1;
      if (newIndex >= images.length) newIndex = 0;
      return newIndex;
    });
  };

  // Auto sliding functionality (optional)
  useEffect(() => {
    const interval = setInterval(() => {
      moveSlide(1);
    }, 5000); // Change every 5 seconds

    return () => clearInterval(interval); // Cleanup interval on unmount
  }, []);

  return (
    <div className="min-h-[550px] flex justify-center items-center py-12 sm:py-0 bg-gray-100">
      <div className="container mx-auto relative">
        {/* Carousel wrapper */}
        <div className="relative overflow-hidden w-full h-[550px]">
          {/* Image items */}
          <div
            className="transition-all duration-1000 ease-in-out flex w-full"
            style={{
              transform: `translateX(-${activeIndex * 100}%)`, // Corrected interpolation syntax
            }}
          >
            {images.map((img, index) => (
              <div key={index} className="w-full h-full flex-shrink-0">
                <Image
                  src={img}
                  alt={`Banner Image ${index + 1}`} // Fixed alt text formatting
                  width={1920}
                  height={550}
                  className="w-full h-full object-cover"
                />
              </div>
            ))}
          </div>

          {/* Navigation buttons */}
          <button
            onClick={() => moveSlide(-1)}
            className="absolute top-1/2 left-0 transform -translate-y-1/2 p-4 bg-gray-800 text-white rounded-full"
          >
            ❮
          </button>
          <button
            onClick={() => moveSlide(1)}
            className="absolute top-1/2 right-0 transform -translate-y-1/2 p-4 bg-gray-800 text-white rounded-full"
          >
            ❯
          </button>
        </div>
      </div>
    </div>
  );
};

export default Banner;

