import { Outlet } from "react-router-dom";
import MainContainer from "./MainContainer"
import SideBar from "./SideBar"



const Body = () =>{
    

    return (
        <div className="flex">
            <div className="w-1/8">
                <SideBar />

            </div>
            <div className="w-3/8">
                <Outlet />

            </div>
            
        </div>
    )
}

export default Body;