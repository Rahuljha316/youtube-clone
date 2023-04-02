import { Outlet } from "react-router-dom";
import MainContainer from "./MainContainer"
import SideBar from "./SideBar"



const Body = () =>{
    

    return (
        <div className="flex basis-2">
            <SideBar />
            <Outlet />
        </div>
    )
}

export default Body;