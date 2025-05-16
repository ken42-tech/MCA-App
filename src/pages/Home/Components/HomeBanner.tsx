import React, { useState, useEffect } from "react";
import { IonIcon } from "@ionic/react";
import { chevronBackOutline, chevronForwardOutline } from "ionicons/icons";
import { bgBannerImg } from "../../../assets/images";

const HomeBanner = () => {
  // Sample slide data - replace with your actual data
  const slides = [
    {
      id: 1,
      image: bgBannerImg,
      date: "06 May 2025",
      title: "Arcs Andheri won their 1st title",
    },
    {
      id: 2,
      image: bgBannerImg,
      date: "28 Apr 2025",
      title: "Semi Finals set to begin next week",
    },
    {
      id: 3,
      image: bgBannerImg,
      date: "15 Apr 2025",
      title: "Season highlights and top performances",
    },
    {
      id: 4,
      image: bgBannerImg,
      date: "15 Apr 2025",
      title: "Season highlights and top performances",
    },
  ];

  const [currentSlide, setCurrentSlide] = useState(0);

  // Auto-slide functionality
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  };

  return (
    <div className="relative w-full h-[258px] overflow-hidden">
      {/* Slider wrapper */}
      <div
        className="flex transition-transform duration-500 ease-in-out h-full"
        style={{ transform: `translateX(-${currentSlide * 100}%)` }}
      >
        {slides.map((slide) => (
          <div key={slide.id} className="min-w-full h-full flex-shrink-0">
            {/* Background image with overlay */}
            <div
              className="w-full h-full bg-cover bg-center relative"
              style={{ backgroundImage: `url(${slide.image})` }}
            >
              {/* Content overlay */}
              <div className="absolute bottom-[20%]  left-6 text-white">
                <div className="mb-1">
                  <span className="inline-block  text-xs text-white rounded-full">
                    {slide.date}
                  </span>
                </div>
                <h1 className="text-xl font-semibold italic">{slide.title}</h1>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Slider indicator */}
      <div className="absolute bottom-[15%] left-6 ">
        <div className="flex space-x-1">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`h-1 w-4 transition-all duration-300 ${
                index === currentSlide ? "bg-orange-500" : "bg-gray-500"
              }`}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default HomeBanner;
