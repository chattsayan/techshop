import { Link } from "react-router-dom";
import { textLogo, profile_icon } from "../assets/textLogo.png";
import { PiShoppingCartSimpleBold, PiUserBold } from "react-icons/pi";

const Header = () => {
  return (
    <div className="flex items-center justify-between py-5 px-5 font-medium">
      <img src={textLogo} alt="" className="w-60 h-10" />

      {/* <ul className="hidden sm:flex gap-5 text-sm text-gray-700">
        <li className="flex items-center gap-1">
          <PiShoppingCartSimpleBold size={24} />
          <Link to="/cart">Cart</Link>
        </li>
        <li className="flex items-center gap-1">
          <PiUserBold size={24} />
          <Link to="/login">Sign In</Link>
        </li>
      </ul> */}

      <div className="flex items-center gap-6">
        <img className="w-5 cursor-pointer" src={profile_icon} />
      </div>
    </div>
  );
};

export default Header;
