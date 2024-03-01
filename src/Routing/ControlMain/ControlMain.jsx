import Footers from "../../NavberFooter/Footer/Footers"; 
import Navber from "../../NavberFooter/Navber/Navber";
import { Outlet } from "react-router-dom"; 


const ControlMain = () => { 

    return (
        <div className=" container m-auto text-white bg-[#343a40]">
            <Navber/>
            <Outlet/>
            <Footers/>
        </div>
    );
};

export default ControlMain;