import { Swiper } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/effect-fade";
import "swiper/css/navigation";

import { Autoplay, Pagination, Navigation, EffectFade } from "swiper/modules";

interface CarouselProps {
  sliderPerView?: number;
  spaceBetween?: number;
  loop?: boolean;
  children: any;
  sectionName: string;
  effect?: string;
  onSlideChange?: (index: number) => void; // Add callback to handle slide change
}

export const Carousel = ({
  sliderPerView,
  spaceBetween,
  loop,
  children,
  sectionName,
  effect,
  onSlideChange,
}: CarouselProps) => {
  const blogAutoPlayConfig = {
    delay: 2500,
    disableOnInteraction: false,
  };
  const financialSummaryAutoPlayConfig = {
    delay: 2000,
    disableOnInteraction: false,
  };

  const moduleConfig = [];

  let autoPlayConfig: { delay?: number; disableOnInteraction?: boolean } = {};

  switch (sectionName) {
    case "newsFeed":
      autoPlayConfig = blogAutoPlayConfig;
      moduleConfig.push(Autoplay);
      break;
    case "financialSummary":
      autoPlayConfig = financialSummaryAutoPlayConfig;
      moduleConfig.push(Autoplay);
      break;
    case "companies":
      moduleConfig.push(Pagination, Navigation);
      break;
    case "imageSlider":
      autoPlayConfig = blogAutoPlayConfig;
      moduleConfig.push(Autoplay, Navigation, EffectFade);
      break;
    case "testimonial":
      moduleConfig.push(Pagination, Navigation);
      break;
    case "clientLogo":
      autoPlayConfig = blogAutoPlayConfig;
      moduleConfig.push(Autoplay);
      break;
    case "homeSwipper":
      autoPlayConfig = blogAutoPlayConfig;
      moduleConfig.push(Autoplay, Pagination, Navigation);
      break;
    default:
      break;
  }

  return (
    <>
      <Swiper
        slidesPerView={sliderPerView}
        spaceBetween={spaceBetween}
        pagination={{ clickable: true }}
        autoplay={autoPlayConfig}
        effect={effect}
        modules={moduleConfig}
        loop={loop}
        className="mySwiper"
        onSlideChange={(swiper) => onSlideChange?.(swiper.realIndex)}
      >
        <style>
          {`
          .swiper-pagination-bullet {
            background: #4b5563; /* Gray-600 */
            opacity: 1;
            padding-top:10px;
          }
          .swiper-pagination-bullet-active {
            background: #ffffff !important; /* Active: White */
          }
        `}
        </style>

        {children}
      </Swiper>
    </>
  );
};
