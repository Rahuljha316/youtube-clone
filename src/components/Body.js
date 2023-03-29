import MainContainer from "./MainContainer"
import SideBar from "./SideBar"



const Body = () =>{
    

    return (
        <div className="flex basis-2">
            <SideBar />
            <MainContainer />
        </div>
    )
}

export default Body;