import React from "react";
import HomeBanner from "./Components/HomeBanner";
import Matches from "./Components/Matches";
import News from "./Components/News";
import Videos from "./Components/Videos";

const Home = () => {
  return (
    <div className="bg-black">
      <HomeBanner />
      <Matches />
      <News />
      <Videos />
    </div>
  );
};

export default Home;
