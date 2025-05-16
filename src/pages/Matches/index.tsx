import { useState } from "react";
import MatchHeaderSection from "./components/MatchHeaderSection";
import MatchContentSection from "./components/MatchContentSection";

const tabs: string[] = ["Fixtures", "Table", "Stats"];

const Matches = () => {
  const [activeTab, setActiveTab] = useState("Fixtures");
  return (
    <>
      <MatchHeaderSection
        setActiveTab={setActiveTab}
        activeTab={activeTab}
        tabs={tabs}
      />
      <MatchContentSection activeTab={activeTab} />
    </>
  );
};

export default Matches;
