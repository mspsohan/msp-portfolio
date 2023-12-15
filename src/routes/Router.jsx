import { createBrowserRouter } from "react-router-dom";
import Main from "../layouts/Main";
import Home from "../pages/Home/Home";

const router = createBrowserRouter([
   {
      path: "/",
      element: <Main />,
      errorElement: <div>Error.....</div>,
      children: [
         {
            path: "/",
            element: <Home />
         }
      ]
   }
])

export default router;