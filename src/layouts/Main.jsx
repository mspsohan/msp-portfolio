import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";

const Main = () => {
   return (
      <>
         <Navbar />
         <div className="">
            <Outlet />
         </div>
         <Footer />
      </>
   );
};

export default Main;