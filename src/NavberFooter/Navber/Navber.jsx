import { Button, Navbar } from "flowbite-react";
import { Link } from "react-router-dom";
import logo from "../../assets/obaydur-rahman-rifat.png"
const Navber = () => {
    const NavberMenu =
        <>
        

            <li><Link rel="stylesheet" href="#" to="/" >Home</Link> </li>
            <li><Link rel="stylesheet" href="#" to="/about" >About</Link> </li>
            <li><Link rel="stylesheet" href="#" to="/portfolio" >Portfolio</Link> </li> 
            <li><Link rel="stylesheet" href="#" to="/Service" >Service</Link> </li>
            <li><Link rel="stylesheet" href="#" to="/Contact" >Contact</Link> </li>
        </>
    return (
        <>
            <Navbar fluid rounded>
                <Navbar.Brand as={Link} href="https://flowbite-react.com">
                    <img src={logo} className="mr-3 h-6 sm:h-9" alt="Flowbite React Logo" />
                    <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">Obaydul_Kuasha</span>
                </Navbar.Brand>
                <Navbar.Toggle />
                <Navbar.Collapse >
                    {NavberMenu}
                </Navbar.Collapse>
                <Button gradientDuoTone="tealToLime">Login</Button>
            </Navbar>
        </>
    );
};

export default Navber;