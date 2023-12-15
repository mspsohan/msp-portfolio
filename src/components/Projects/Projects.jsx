import img1 from "../../assets/inventohub.png"
import img2 from "../../assets/cosmico.png"
import img3 from "../../assets/library.png"
import { Link } from "react-router-dom";
import { FaGithub } from "react-icons/fa";
import AOS from 'aos';
import 'aos/dist/aos.css';
const Projects = () => {
   AOS.init();
   return (
      <>
         <div id="project" className="min-h-[100vh] pt-20 ">
            <div className="text-white mx-auto">
               <div className="max-w-xl mx-auto">
                  <div className="text-center ">
                     <div className="relative flex flex-col items-center">
                        <div className="absolute hidden md:block -top-10 left-12 text-[100px] text-gray-400 font-bold opacity-10">
                           PROJECTS
                        </div>
                        <h1 className="text-5xl font-bold leading-tight dark:text-white"><span
                           className="text-white"> Projects
                        </span> </h1>
                        <div className="flex w-24 mt-1 mb-10 overflow-hidden rounded">
                           <div className="flex-1 h-2 bg-blue-200">
                           </div>
                           <div className="flex-1 h-2 bg-blue-400">
                           </div>
                           <div className="flex-1 h-2 bg-blue-600">
                           </div>
                        </div>
                     </div>
                  </div>
               </div>
               <div className="flex items-center ">
                  <div className="p-4 mx-auto max-w-7xl">
                     <div className="grid grid-cols-1 gap-4 lg:gap-8 sm:gap-4">
                        {/* 1st */}
                        <div data-aos="fade-up" className="flex flex-col flex-wrap mb-0 overflow-hidden rounded lg:flex-row group shadow-[4.0px_8.0px_8.0px_rgba(200,0,0,0.38)]" >
                           <div className="relative w-full overflow-hidden lg:w-2/4 h-80">
                              <img src={img1} alt="" className="absolute duration-[3s] group-hover:-translate-y-[calc(100%-320px)] " />
                              <Link to="https://inventohub.netlify.app" className="absolute px-4 py-2 text-xs text-white bg-blue-500 rounded top-4 left-4 hover:bg-yellow-100 hover:text-black font-semibold">
                                 Preview
                              </Link>
                           </div>
                           <div
                              className="relative self-center flex-1 p-8 ml-0 rounded lg:items-center ">
                              <span className="block mb-2 text-xs font-semibold text-blue-700 capitalize dark:text-blue-300">
                                 Time Period: 7 days
                              </span>
                              <h2 className="mb-3 text-2xl font-bold leading-9 text-white">
                                 InventoHub - Inventory Management
                              </h2>
                              <p className="text-sm leading-7 text-gray-400">
                                 InventoHub is a web-based Inventory Management System built using the MERN (MongoDB, Express.js, React.js, Node.js) stack.
                              </p>
                              <Link to="https://github.com/mspsohan/inventohub-client" className="flex items-center justify-center gap-2 mt-3 hover:bg-yellow-100 hover:text-black font-semibold w-36 py-1 px-3 rounded-3xl bg-blue-800 text-white"><FaGithub />Source Code</Link>
                           </div>
                        </div>
                        {/* 2nd */}
                        <div data-aos="fade-up" className="flex flex-col flex-wrap mb-0 overflow-hidden rounded lg:flex-row-reverse   group shadow-[-4.0px_8.0px_8.0px_rgba(200,0,0,0.38)]" >
                           <div className="relative w-full overflow-hidden lg:w-2/4 h-80">
                              <img src={img2} alt="" className="absolute duration-[3s] group-hover:-translate-y-[calc(100%-320px)]" />
                              <Link to="https://cosmico-brand-shop.netlify.app" className="absolute px-4 py-2 text-xs text-white bg-blue-500 rounded top-4 right-4 hover:bg-yellow-100 hover:text-black font-semibold">Preview</Link>
                           </div>
                           <div className="relative self-center flex-1 p-8 mr-0 rounded lg:items-center ">
                              <span className="block mb-2 text-xs font-semibold text-blue-700 capitalize dark:text-blue-300">
                                 Time Period: 5 days
                              </span>
                              <h2 className="mb-3 text-2xl font-bold leading-9 text-white">
                                 Cosmico - Online Shop
                              </h2>
                              <p className="text-sm leading-7 text-gray-400">
                                 Cosmico is an online platform for purchasing a variety of cosmetic and beauty products from renowned brands such as L{"'"}OREAL, Chanel, Urban Decay, Procter & Gamble, Revlon, and Avon.
                              </p>
                              <Link to="https://github.com/mspsohan/cosmico-brand-shop-client" className="flex items-center gap-2 mt-3 hover:bg-yellow-100 hover:text-black font-semibold w-36 justify-center py-1 px-3 rounded-3xl bg-blue-800 text-white"><FaGithub />Source Code</Link>
                           </div>
                        </div>
                        {/* 3rd */}
                        <div data-aos="fade-up" className="flex flex-col flex-wrap mb-0 overflow-hidden shadow-[4.0px_8.0px_8.0px_rgba(200,0,0,0.38)] rounded lg:flex-row group">
                           <div className="relative w-full overflow-hidden lg:w-2/4 h-80">
                              <img src={img3} alt="" className="absolute duration-[3s] group-hover:-translate-y-[calc(100%-318px)]" />
                              <Link to="https://the-library-0.netlify.app" className="absolute px-4 py-2 text-xs text-white bg-blue-500 rounded top-4 left-4 hover:bg-yellow-100 hover:text-black font-semibold">
                                 Preview
                              </Link>
                           </div>
                           <div
                              className="relative self-center flex-1 p-8 ml-0 rounded lg:items-center">
                              <span className="block mb-2 text-xs font-semibold text-blue-700 capitalize dark:text-blue-300">
                                 Time Period: 4 days
                              </span>
                              <h2 className="mb-3 text-2xl font-bold leading-9 text-white">
                                 The Library - Library Management
                              </h2>
                              <p className="text-sm leading-7 text-gray-400">
                                 The Library - Online Library Management System - The Library is an online library management website where users can explore and find books across different categories.
                              </p>
                              <Link to="https://github.com/mspsohan/library-managements-client" className="flex items-center gap-2 mt-3 hover:bg-yellow-100 hover:text-black font-semibold w-36 justify-center py-1 px-3 rounded-3xl bg-blue-800 text-white"><FaGithub />
                                 Source Code</Link>
                           </div>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </>
   );
};

export default Projects;