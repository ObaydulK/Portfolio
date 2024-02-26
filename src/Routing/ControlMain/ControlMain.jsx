import Footers from "../../NavberFooter/Footer/Footers";
import Footer from "../../NavberFooter/Footer/Footers";
import Navber from "../../NavberFooter/Navber/Navber";
import { Outlet } from "react-router-dom"; 


const ControlMain = () => { 

    return (
        <div className=" container m-auto">
            <Navber/>
            <Outlet/>
            <Footers/>
        </div>
    );
};

export default ControlMain;