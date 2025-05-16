import { logo } from "../../../../Assets/Images";

const Navbar = () => {
  return (
    <div className="flex items-center justify-center h-20">
      <img src={logo} className="h-full p-4" alt="logo" />
    </div>
  );
};

export default Navbar;
