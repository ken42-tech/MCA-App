interface navItemsProps {
  icon: string;
  activeIcon: string;
  label: string;
  path: string;
}
interface FooterProps {
  navItems: navItemsProps[];
  activeNavIndex: number;
  setActiveNavIndex: (index: number) => void;
}
