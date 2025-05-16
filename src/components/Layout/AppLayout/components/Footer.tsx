import { useIonRouter } from "@ionic/react";
import { useLocation } from "react-router-dom";

const Footer: React.FC<FooterProps> = ({ navItems }) => {
  const router = useIonRouter();
  const location = useLocation();

  const handleNavClick = (path: string) => {
    router.push(path, "forward");
  };

  return (
    <div className="w-full flex justify-center items-center z-50 relative bg-[#ffffff15] backdrop-blur-xl ">
      <div className="h-[.5px] w-full absolute top-0 left-0 bg-gradient-to-r from-transparent via-gray-500 to-transparent" />
      <div className="flex items-center  shadow-md w-fit max-w-[400px] h-[68px] relative px-2 gap-[10px]">
        {navItems.map((item, index) => {
          const isActive = location.pathname === item.path;
          return (
            <div
              key={index}
              onClick={() => handleNavClick(item.path)}
              className="w-[70px] h-[70px] flex flex-col items-center justify-center cursor-pointer relative transition-all"
            >
              <img
                src={isActive ? item.activeIcon : item.icon}
                alt="icon"
                className={`text-[24px] text-[#fff] transition-transform duration-500 mb-1 ${
                  isActive ? "-translate-y-6 z-[100]" : ""
                }`}
              />
              <span
                className={`  text-xs  transition-all duration-500 ${
                  isActive
                    ? "opacity-100 -translate-y-[4px] text-[#fff]"
                    : "opacity-100 translate-y-[0px] text-[#BABABA]"
                }`}
              >
                {item.label}
              </span>
            </div>
          );
        })}

        <div
          className="absolute top-[-36px] w-[70px] h-[70px] bg-radial from-[#ECD815] via-[#F58220] to-[#F15A22] rounded-full border-[8px] border-[#000] transition-all duration-500"
          style={{
            transform: `translateX(${
              navItems.findIndex((n) => location.pathname === n.path) * 80
            }px)`,
          }}
        >
          <div className="absolute left-[-22px] top-[20px] w-5 h-5 bg-transparent border-t-[8px] border-t-[#020412] rounded-tr-[20px]" />
          <div className="absolute right-[-22px] top-[20px] w-5 h-5 bg-transparent border-t-[8px] border-t-[#020412] rounded-tl-[20px]" />
        </div>
      </div>
    </div>
  );
};

export default Footer;
