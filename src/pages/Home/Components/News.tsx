import React from "react";
import { IonIcon } from "@ionic/react";
import { arrowForward } from "ionicons/icons";
import { news1, news2, news3 } from "../../../Assets/Images";
import { Link } from "react-router-dom";

// Define TypeScript interfaces
interface NewsItemProps {
  image: string;
  title: string;
  time: string;
}

interface NewsItem extends NewsItemProps {
  id: number;
}

// NewsItem component with proper type annotations
const NewsItem: React.FC<NewsItemProps> = ({ image, title, time }) => {
  return (
    <div className="flex items-center gap-3 bg-[linear-gradient(0deg,_rgba(255,255,255,0.05),_rgba(255,255,255,0.05)),_linear-gradient(108.05deg,_rgba(204,229,255,0.12)_6.36%,_rgba(122,137,153,0.12)_78.32%)] rounded-lg p-4 ">
      <div className="flex-shrink-0">
        <img
          src={image}
          alt={title}
          className="w-24 h-16 rounded-md object-cover"
        />
      </div>
      <div className="flex-grow">
        <h3 className="text-white text-sm font-medium leading-5 mb-2">
          {title}
        </h3>
        <p className="text-gray-400 text-sm">{time}</p>
      </div>
    </div>
  );
};

// Main News component
const News: React.FC = () => {
  // News data with proper type annotation
  const newsItems: NewsItem[] = [
    {
      id: 1,
      image: news1,
      title: "Thane Strikers Rock Andheri with Triple Strike",
      time: "7h ago",
    },
    {
      id: 2,
      image: news2,
      title: "Big Names Facing Heat from Hungry Newcomers",
      time: "2 days ago",
    },
    {
      id: 3,
      image: news3,
      title: "Batting Blitz: Top 5 Knockouts That Lit Up the League",
      time: "3 days ago",
    },
  ];

  return (
    <div className="bg-black p-6">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-white text-2xl font-bold">
          Latest <span className="text-orange-500">news</span>
        </h2>
        <Link to="/latest-news">
          <button className="text-white">
            <IonIcon icon={arrowForward} className="w-6 h-6" />
          </button>
        </Link>
        {/* <button className="text-white">
          <IonIcon icon={arrowForward} className="w-6 h-6" />
        </button> */}
      </div>

      <div className="space-y-4">
        {newsItems.map((item) => (
          <NewsItem
            key={item.id}
            image={item.image}
            title={item.title}
            time={item.time}
          />
        ))}
      </div>
    </div>
  );
};

export default News;
