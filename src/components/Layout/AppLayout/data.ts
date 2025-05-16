import {
  aboutActiveIcon,
  aboutIcon,
  homeActiveIcon,
  homeIcon,
  matchesActiveIcon,
  matchesIcon,
  statsActiveIcon,
  statsIcon,
} from "../../../Assets/Images";
import routes from "../../../utils/routes";

export const navItems: navItemsProps[] = [
  {
    icon: homeIcon,
    activeIcon: homeActiveIcon,
    label: "Home",
    path: routes.home,
  },
  {
    icon: matchesIcon,
    activeIcon: matchesActiveIcon,
    label: "Matches",
    path: routes.home,
  },
  {
    icon: statsIcon,
    activeIcon: statsActiveIcon,
    label: "Stats",
    path: routes.home,
  },
  {
    icon: aboutIcon,
    activeIcon: aboutActiveIcon,
    label: "About us",
    path: routes.home,
  },
];
