import MainContainer from "./MainContainer"
import SideBar from "./SideBar"
import { useSelector } from "react-redux"


const Body = () =>{
    

    return (
        <div className="flex">
            <SideBar />
            <MainContainer />
        </div>
    )
}

export default Body;