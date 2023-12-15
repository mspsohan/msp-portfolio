import { Link } from "react-router-dom";

const Footer = () => {
   return (
      <>
         <div className=" bg-gradient-to-t from-blue-800 to-slate-800">
            <footer className="rounded-lg shadow p-4">
               <div className="w-full mx-auto p-4 md:py-4">
                  <span className="block text-sm text-gray-500 text-center dark:text-gray-400">Made By <Link to="/" className="font-bold text-yellow-500">Sohan Perves.</Link> All Rights Reserved.</span>
               </div>
            </footer>
         </div>
      </>
   );
};

export default Footer;