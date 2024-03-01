import { createBrowserRouter } from "react-router-dom";
import ControlMain from "../ControlMain/ControlMain"; 
import Home from "../../Pages/Home/Home";
import About from "../../Pages/About/About";
import Portfolio from "../../Pages/Portfolio/Portfolio";
import Service from "../../Pages/Services/Service";
import Contact from "../../Pages/Contact/Contact";
import Login from "../../LoginSign/Login/Login";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <ControlMain />,
    children: [
      {
        path: "/",
        element: <Home />
      },
      {
        path:"/about",
        element:<About/>
      },
      {
        path:"/portfolio",
        element:<Portfolio/>
      },
      {
        path:"/Service",
        element:<Service/>
      },
      {
        path:"/Contact",
        element:<Contact/>
      },
      {
        path:"/login",
        element:<Login/>
      },
    ]
  },

]);