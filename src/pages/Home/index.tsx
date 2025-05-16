import React from "react";
import HomeBanner from "./Components/HomeBanner";
import Matches from "./Components/Matches";

const Home = () => {
  return (
    <div className="bg-black">
      <HomeBanner />
      <Matches />
    </div>
  );
};

export default Home;
