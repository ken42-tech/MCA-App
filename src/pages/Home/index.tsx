import React from "react";
import HomeBanner from "./Components/HomeBanner";
import Matches from "./Components/Matches";
import TeamsLogo from "./Components/TeamsLogo";
import TopPerformers from "./Components/TopPerformers";

const Home = () => {
  return (
    <div className="bg-black">
      <HomeBanner />
      <Matches />
      <TeamsLogo />
      <TopPerformers />
    </div>
  );
};

export default Home;
