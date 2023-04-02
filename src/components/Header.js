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
    <div className="flex m-4 shadow-md">
      <div className="flex ">
        <img
          className="h-14 px-2 py-3 cursor-pointer"
          alt="hamburger"
          src={Menu}
          onClick={() => handleMenuClick()}
        />
        <img className="h-14 " alt="logo" src={Logo} />
      </div>
      <div className="items-center px-48 ">
        <input
          placeholder="Search"
          className="bg-gray-100 h-10 w-96 rounded-l-full "
        />
        <button className="bg-gray-200 h-10 w-12 rounded-r-full  items-center">
          <CiSearch />
        </button>
      </div>
      <div >

      <img className="h-14 " alt="logo" src={ProfileLogo} />

        
      </div>
    </div>
  );
};

export default Header;
