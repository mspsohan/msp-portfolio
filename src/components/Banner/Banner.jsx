import { Link } from "react-router-dom";
import pdf from "../../assets/Sohan_Perves_Resume.pdf"
import AOS from 'aos';
import 'aos/dist/aos.css';
import { FaFacebookF, FaLinkedinIn, FaInstagram, FaGithub } from "react-icons/fa";
import { Link as ScrollLink } from 'react-scroll';
import { Tooltip } from "@mui/material";

const Banner = () => {
   AOS.init();
   return (
      <>
         <div id="banner" className="min-h-screen lg:h-screen">
            <div className="grid grid-cols-1 md:grid-cols-2 content-center h-full mx-auto pt-24 md:pt-20 px-5">
               <div data-aos="fade-up" className="text-white space-y-2 flex flex-col justify-center flex-1 text-center md:text-left">
                  <div className="relative flex flex-col">
                     <div className="absolute hidden md:block -top-14 left-0 text-[70px] text-gray-400 font-bold opacity-10">
                        Hello Visitor!
                     </div>
                     <h1 className="text-5xl font-bold dark:text-white">
                        <span
                           className="text-white"> Hello Visitor!
                        </span>
                     </h1>

                  </div>
                  <p className="text-[#fbfc03] text-2xl">My Name is Md. Sohan Perves</p>
                  <p className="text-green-400 text-2xl">Frontent Developer</p>
                  <p className="md:w-[460px] lg:w-[600px]">I have hands-on experience in developing and implementing frontend architecture for web applications. My work involves collaborating with cross-functional teams to deliver high-quality and scalable solutions. I am committed to staying updated with the latest industry trends and continuously expanding my skill set.</p>
                  <div className="space-x-2 lg:py-2 flex justify-center md:justify-start">
                     <a href={pdf} download>
                        <button className="bn5 py-2 border rounded-full hover:font-semibold">Download CV</button></a>
                     <ScrollLink smooth={true}
                        duration={500} to="contact">
                        <button className="bn5 py-2 border rounded-full flex items-center gap-2 font-semibold hover:font-semibold">Contact Me</button></ScrollLink>
                  </div>

                  <div className="flex md:block">
                     <div className="flex items-center gap-2 relative">
                        <h3 style={{ letterSpacing: '3px' }} className=" uppercase text-sm text-slate-300 z-10">Find Me With</h3>
                        <div className="find-border mr-3 md:mr-0"></div>
                     </div>
                     <div className="flex items-center gap-5 pt-3">
                        <Tooltip title="Github" placement="top">
                           <Link
                              to="http://github.com/mspsohan"
                              target="_blank"
                              style={{ boxShadow: "0px 0px 10px 2px #5715ff" }}
                              className="border bn10 rounded-full bg-transparent border-[#5715ff] text-[#5715ff] hover:bg-[#5715ff] hover:text-white  hover:border-white">
                              <FaGithub className="text-3xl p-1" />
                           </Link>
                        </Tooltip>
                        <Tooltip title="Facebook" placement="top">
                           <Link
                              to="https://www.facebook.com/sohanperves.sp"
                              target="_blank"
                              style={{ boxShadow: "0px 0px 10px 2px #5715ff" }}
                              className="border rounded-full bn10 bg-transparent border-[#5715ff] text-[#5715ff] hover:bg-[#5715ff] hover:text-white  hover:border-white">
                              <FaFacebookF className="text-3xl p-1" />
                           </Link>
                        </Tooltip>
                        <Tooltip title="LinkedIn" placement="top">
                           <Link
                              to="https://www.linkedin.com/in/mspsohan"
                              target="_blank"
                              style={{ boxShadow: "0px 0px 10px 2px #5715ff" }}
                              className="border rounded-full bn10 bg-transparent border-[#5715ff] text-[#5715ff] hover:bg-[#5715ff] hover:text-white  hover:border-white">
                              <FaLinkedinIn className="text-3xl p-[6px]" />
                           </Link>
                        </Tooltip>
                        <Tooltip title="Instagram" placement="top">
                           <Link
                              to="https://www.instagram.com/mspsohan"
                              target="_blank"
                              style={{ boxShadow: "0px 0px 10px 2px #5715ff" }}
                              className="border rounded-full bn10 bg-transparent border-[#5715ff] text-[#5715ff] hover:bg-[#5715ff] hover:text-white  hover:border-white">
                              <FaInstagram className="text-3xl p-1" />
                           </Link>
                        </Tooltip>


                     </div>
                  </div>
               </div>

               <div className="scale-105 flex-1 flex justify-center md:justify-end pt-12 md:pt-0">
                  <img src="https://i.imgur.com/32ZzWxe.png" alt="" className=" hover:scale-110 w-[85%]" />

               </div>
            </div>
         </div>
      </>
   );
};

export default Banner;