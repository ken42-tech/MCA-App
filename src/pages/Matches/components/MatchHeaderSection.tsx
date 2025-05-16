import { PiSlidersHorizontalBold } from "react-icons/pi";

const MatchHeaderSection: React.FC<MatchHeaderSectionProps> = ({
  tabs,
  activeTab,
  setActiveTab,
}) => {
  return (
    <div className="full-width ">
      <div className="relative">
        <div className="  grid grid-cols-3 gap-4 text-center pt-4 pb-2 text-sm font-medium">
          {tabs.map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`relative pb-1 transition-all ${
                activeTab === tab
                  ? "text-white"
                  : "text-gray-400 hover:text-white"
              }`}
            >
              {tab}
              {activeTab === tab && (
                <div className="absolute left-1/2 -translate-x-1/2 bottom-[-8px] w-full h-[2px] rounded-full bg-gradient-to-r from-[#ECD815] via-[#F58220] to-[#F15A22]" />
              )}
            </button>
          ))}
        </div>
        <div className="w-full h-[0.5px] w-full h-[0.5px]  bg-radial from-[#ECD815] via-[#F58220] to-[#F15A22]" />
      </div>
      <div className="flex justify-between section-width items-center py-2">
        <h2>Mumbai T20 - 2025</h2>
        <div className="w-8 h-8 flex items-center justify-center rounded-full bg-[#ffffff15] backdrop-blur-xl border-[0.5px] border-[#ffffff] shadow-md">
          <PiSlidersHorizontalBold className="text-xl" />
        </div>
      </div>
    </div>
  );
};

export default MatchHeaderSection;
