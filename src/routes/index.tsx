import { createBrowserRouter } from "react-router-dom";
import Home from "../page/Home";
import App from "../App";
import Login from "../page/Login";
import NotFound from "../page/NotFound";


const routes = createBrowserRouter([
    {
      path: "/",
      element: <App/>
    },
    {
      path: "/login",
      element: <Login/>
    },
    {
      path: "/home",
      element: <Home/>
    },
    {
      path: "*",
      element: <NotFound/>
    }
  ]);

  export default routes