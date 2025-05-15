import { IonContent } from "@ionic/react";
import "./ExploreContainer.css";

interface ContainerProps {}

const ExploreContainer: React.FC<ContainerProps> = () => {
  return (
    <div id="container">
      <div className="bg-gray-900 text-white p-6 bg-red-500">
        <h1 className="text-5xl font-bold">Welcome to Tailwind + Ionic</h1>
      </div>
      <strong className="text-xl">Ready to create an app?</strong>
      <p className="text-blue-500">
        Start with Ionic{" "}
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://ionicframework.com/docs/components"
        >
          UI Components
        </a>
      </p>
    </div>
  );
};

export default ExploreContainer;
