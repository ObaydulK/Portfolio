import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'

import { RouterProvider } from "react-router-dom";
import { router } from './Routing/Route/Route.jsx';

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <div className=" bg-rose-300 ">
      <RouterProvider router={router} />
    </div>
  </React.StrictMode>
);