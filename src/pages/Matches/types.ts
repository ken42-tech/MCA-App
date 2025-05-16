interface MatchContentSectionProps {
  activeTab: string;
}
interface MatchHeaderSectionProps {
  tabs: string[];
  activeTab: string;
  setActiveTab: (tab: string) => void;
}
