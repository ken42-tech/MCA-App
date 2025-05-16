import FixtureTabComponent from "./FixtureTabComponent";
import StatsTabComponent from "./StatsTabComponent";
import TableTabComponent from "./TableTabComponent";

const MatchContentSection: React.FC<MatchContentSectionProps> = ({
  activeTab,
}) => {
  return (
    <>
      {activeTab === "Fixtures" && <FixtureTabComponent />}
      {activeTab === "Table" && <TableTabComponent />}
      {activeTab === "Stats" && <StatsTabComponent />}
    </>
  );
};

export default MatchContentSection;
