import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const SideBar = () => {
  const isMenuOpen = useSelector((store) => store.menu.isMenuOpen);
  
  
  if(!isMenuOpen) return null;

  return (
    <div className="shadow-lg basis-1/5">
      <div className="font-bold"><Link to='/'>Home</Link></div>
      <div className="font-bold">
        Library
        <ul>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
        </ul>
      </div>
      <div className="font-bold">
        Subscription
        <ul className="font-normal">
          <li>News</li>
          <li>Music</li>
          <li>guitr</li>
          <li>random Channel</li>
        </ul>
      </div>
      <div className="font-bold">
        History
        <ul className="font-normal">
          <li>cricket</li>
          <li>somechaneel</li>
          <li>some other chanlle</li>
          <li>some more other channels</li>
        </ul>
      </div>
    </div>
  );
};

export default SideBar;
