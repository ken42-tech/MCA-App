import { useState } from "react";
import { SwiperSlide } from "swiper/react";
import { Carousel } from "../../../components/common/Carousel";
import { i1 } from "../../../Assets/Images";
const photoData = [
  {
    id: 1,
    image: i1,
    title: "Under-23 mens one day 2024-25 Champions",
  },
  {
    id: 2,
    image: i1,
    title: "Under-23 mens one day 2024-25 Champions",
  },
  {
    id: 3,
    image: i1,
    title: "Team Victory Celebration",
  },
  {
    id: 4,
    image: i1,
    title: "Junior Cricket Tournament",
  },
];

const HomePhoto: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <div className="bg-black text-white mt-12  w-full">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-2xl font-bold">
          Latest <span className="text-orange-500">photos</span>
        </h2>
      </div>

      <Carousel
        sliderPerView={2}
        spaceBetween={16}
        loop={true}
        sectionName="homeSwipper"
        onSlideChange={setActiveIndex} // Handle slide change
      >
        {photoData.map((photo) => (
          <SwiperSlide key={photo.id}>
            <div className="relative rounded-lg overflow-hidden">
              <img
                src={photo.image}
                alt={photo.title}
                className="w-full h-64 object-cover"
              />
              <div className="absolute bottom-0 left-0 right-0 p-2 bg-gradient-to-t from-black/90 to-transparent">
                <p className="text-white font-semibold text-xs">
                  {photo.title}
                </p>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Carousel>
    </div>
  );
};

export default HomePhoto;
