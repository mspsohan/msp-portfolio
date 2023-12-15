import { Link } from "react-router-dom";
import AOS from 'aos';
import 'aos/dist/aos.css';
const Footer = () => {
   AOS.init();
   return (
      <>
         <div className="">
            <footer className="rounded-lg shadow bg-white bg-opacity-10">
               <div className="w-full mx-auto p-4 md:py-[20px]">
                  <span className="block text-sm text-gray-200 text-center dark:text-gray-400">© 2023. Made By <Link to="http://linkedin.com/in/mspsohan" className="font-bold text-yellow-500">Sohan Perves.</Link> All Rights Reserved.</span>
               </div>
            </footer>
         </div>
      </>
   );
};

export default Footer;