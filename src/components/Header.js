import Menu from "../assets/img/hamburger.png";
import Logo from "../assets/img/youtube.png";
import ProfileLogo from '../assets/img/profile.jpg'
import { CiSearch } from "react-icons/ci";
import { useDispatch } from "react-redux";
import { toggleMenu } from "../utils/menuSlice";

const Header = () => {
  const dispatch = useDispatch();
  const handleMenuClick = () => {
    dispatch(toggleMenu())
  };

  return (
    <div className="flex m-4 h-8 shadow-md place-content-between">
      <div className="flex ">
        <img
          className="px-2 py-3 mx-4 cursor-pointer"
          alt="hamburger"
          src={Menu}
          onClick={() => handleMenuClick()}
        />
        <img className="h-6" alt="logo" src={Logo} />
      </div>
      <div className=" flex items-center ">
        <input
          placeholder="Search"
          className="bg-gray-100 w-96 px-4 rounded-l-full "
        />
        <div className="bg-gray-200 w-12 h-6 rounded-r-full flex items-center px-3">
          <CiSearch />
        </div>
      </div>
      <div >

      <img className="h-8" alt="logo" src={ProfileLogo} />

        
      </div>
    </div>
  );
};

export default Header;
