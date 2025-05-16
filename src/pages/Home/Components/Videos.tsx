import React from "react";
import { IonIcon } from "@ionic/react";
import { arrowForward } from "ionicons/icons";
import { news1 } from "../../../Assets/Images";

interface MediaItemProps {
  image: string;
  title: string;
  date: string;
  duration: string;
  videoUrl?: string;
}

const MediaItem: React.FC<MediaItemProps> = ({
  image,
  title,
  date,
  duration,
}) => {
  return (
    <div className="w-full  border p-5 rounded-2xl border-gray-700 ">
      {" "}
      {/* Limit max width if needed */}
      <div className="relative w-full h-40 rounded-xl overflow-hidden">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover rounded-lg"
        />

        <div className="absolute bottom-2 right-2 z-50 bg-black bg-opacity-80 text-white text-xs px-2 py-1 rounded">
          {duration}
        </div>
      </div>
      <div className="mt-2">
        <h3 className="text-white text-sm font-medium line-clamp-2">{title}</h3>
        <p className="text-gray-400 text-xs mt-1">{date}</p>
      </div>
    </div>
  );
};

const VideosSection: React.FC = () => {
  const mediaItem = {
    id: 1,
    image: news1,
    title: "Mumbai T20 Serving Thrillers Night After Night",
    date: "Apr 03, 2025",
    duration: "6:05",
    videoUrl: "",
  };

  return (
    <div className="w-full bg-[linear-gradient(0deg,_#E35C16_-91.13%,_#000000_49.75%)] mt-12 pb-10 ">
      <div className="flex justify-between items-center mb-4 max-w-7xl mx-auto">
        <h2 className="text-white text-2xl font-bold">
          Latest <span className="text-orange-500">videos</span>
        </h2>
        <button className="text-white">
          <IonIcon icon={arrowForward} className="w-6 h-6" />
        </button>
      </div>

      <div className="w-full flex justify-center max-w-7xl mx-auto">
        <MediaItem
          key={mediaItem.id}
          image={mediaItem.image}
          title={mediaItem.title}
          date={mediaItem.date}
          duration={mediaItem.duration}
        />
      </div>
    </div>
  );
};

export default VideosSection;
