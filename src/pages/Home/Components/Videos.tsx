import React from "react";
import { IonIcon } from "@ionic/react";
import { arrowForward, playCircle } from "ionicons/icons";
import { news1 } from "../../../Assets/Images";

// Define TypeScript interfaces for image content that can be replaced with video later
interface MediaItemProps {
  image: string;
  title: string;
  date: string;
  duration: string;
  // videoUrl will be used in the future when replacing with videos
  videoUrl?: string;
}

interface MediaItem extends MediaItemProps {
  id: number;
}

// MediaItem component shows an image that can be replaced with video later
const MediaItem: React.FC<MediaItemProps> = ({
  image,
  title,
  date,
  duration,
}) => {
  return (
    <div className="relative p-5">
      <div className="relative rounded-xl overflow-hidden w-full h-48">
        {/* Image with play button in bottom right corner */}
        <div className="relative">
          <img
            src={image}
            alt={title}
            className="w-full object-cover rounded-lg"
          />

          {/* Duration indicator in top left */}
          <div className="absolute bottom-20 right-2 z-50 bg-black bg-opacity-70 text-white text-xs px-2 py-1 rounded">
            {duration}
          </div>
        </div>
      </div>
      <div className="mt-2">
        <h3 className="text-white text-sm font-medium line-clamp-2">{title}</h3>
        <p className="text-gray-400 text-xs mt-1">{date}</p>
      </div>
    </div>
  );
};

// Main Videos component with one centered card
const VideosSection: React.FC = () => {
  // Single media item to be displayed in the center
  const mediaItem = {
    id: 1,
    image: news1,
    title: "Mumbai T20 Serving Thrillers Night After Night",
    date: "Apr 03, 2025",
    duration: "6:05",
    videoUrl: "",
  };

  return (
    <div className="bg-[linear-gradient(0deg,_#E35C16_-91.13%,_#000000_49.75%)] border p-6 pb-10">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-white text-2xl font-bold">
          Latest <span className="text-orange-500">videos</span>
        </h2>
        <button className="text-white">
          <IonIcon icon={arrowForward} className="w-6 h-6" />
        </button>
      </div>

      <div className="border rounded-2xl border-gray-600 flex justify-center">
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
