import MatchCard from "../Card/MatchCard";
import MatchDateComponent from "./MatchDateComponent";

const FixtureTabComponent = () => {
  return (
    <div className="flex flex-col gap-4">
      <MatchDateComponent date={"May 4, 2025"} />
      <MatchCard />
    </div>
  );
};

export default FixtureTabComponent;
