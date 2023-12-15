import { Link } from "react-router-dom";
import pdf from "../../assets/Sohan_Perves_Resume.pdf"
import AOS from 'aos';
import 'aos/dist/aos.css';

const Banner = () => {
   AOS.init();
   return (
      <>
         <div id="banner" className="min-h-screen lg:h-screen bg-gradient-to-t from-slate-800  to-blue-800">
            <div className="grid grid-cols-1 md:grid-cols-2 content-center max-w-6xl h-full mx-auto pt-24 md:pt-20 px-5">
               <div data-aos="fade-up" className="text-white space-y-2 flex-1 text-center md:text-left">
                  <div className="relative flex flex-col">
                     <div className="absolute hidden md:block -top-14 left-0 text-[70px] text-gray-400 font-bold opacity-10">
                        Hello Visitor!
                     </div>
                     <h1 className="text-5xl font-bold dark:text-white"><span
                        className="text-white"> Hello Visitor!
                     </span> </h1>

                  </div>
                  <p className="text-[#fbfc03] text-2xl">My Name is Md. Sohan Perves</p>
                  <p className="text-green-400 text-2xl">Frontent Developer</p>
                  <p className="md:w-[460px] lg:w-[600px]">I have hands-on experience in developing and implementing frontend architecture for web applications. My work involves collaborating with cross-functional teams to deliver high-quality and scalable solutions. I am committed to staying updated with the latest industry trends and continuously expanding my skill set.</p>
                  <div className="space-x-2 lg:pt-5">
                     <a href={pdf} download>
                        <button className="py-2 w-36 border rounded-full hover:bg-yellow-300 hover:text-black hover:font-semibold">Download CV</button></a>
                     <Link to="https://linkedin.com/in/mspsohan">
                        <button className="py-2 w-36 border rounded-full hover:bg-green-400 hover:text-black hover:font-semibold">LinkedIn</button></Link>
                  </div>
               </div>
               <div className="scale-105 flex-1 flex justify-center md:justify-end pt-12 md:pt-0">
                  <img src="https://i.imgur.com/xXDwD6l.png" alt="" className="w-72 md:w-60 lg:w-72 hover:scale-110 rounded-full " />
               </div>
            </div>
         </div>
      </>
   );
};

export default Banner;