import HomeBanner from "./Components/HomeBanner";
import HomeMatches from "./Components/HomeMatches";
import HomePhoto from "./Components/HomePhoto";
import News from "./Components/News";
import Videos from "./Components/Videos";

const Home = () => {
  return (
    <div className="pb-20">
      <HomeBanner />
      <HomeMatches />
      <News />
      <Videos />
      <HomePhoto />
    </div>
  );
};

export default Home;
