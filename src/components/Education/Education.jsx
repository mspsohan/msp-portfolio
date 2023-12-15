import { FaUserGraduate } from "react-icons/fa6"
import AOS from 'aos';
import 'aos/dist/aos.css';
const Education = () => {
   AOS.init();
   return (
      <div id="education" className="min-h-[100vh] pt-16 content-center px-3">
         <div className="flex flex-col h-full justify-center items-center content-center">
            <div className="mx-auto">
               <div className="text-center ">
                  <div className="relative flex flex-col items-center">
                     <div className="absolute hidden md:block -top-10 -left-[160px] text-[100px] text-gray-400 font-bold opacity-10">
                        EDUCATION
                     </div>
                     <h1 className="text-5xl font-bold leading-tight dark:text-white"><span
                        className="text-white"> Education
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
            {/* <div className="shadow-[rgba(6,_24,_44,_0.4)_0px_0px_0px_2px,_rgba(6,_24,_44,_0.65)_0px_4px_6px_-1px,_rgba(255,_255,_255,_0.08)_0px_1px_0px_inset] max-w-6xl mx-auto px-3" >
               <div className="text-white flex flex-col md:flex-row gap divide-x-2">
                  <div className="grid grid-cols-12 content-center my-5 lg:mr-10">
                     <div className="w-14 rounded-full content-center col-span-2 px-3" >
                        <FaUserGraduate className="text-white text-3xl" />
                     </div>
                     <div className="col-span-10">
                        <h5 className="text-xs mb-2 p-1 font-semibold w-[135px] bg-yellow-300 text-black rounded-3xl">Jan - 2018 to Present</h5>
                        <h3 className="text-[24px] md:text-[24px] pr-2">Bachelor of Social Science (BSS)</h3>
                        <h2 className="text-gray-300">Govt. K.C. College, Jhenaidah</h2>
                     </div>
                  </div>
                  <hr className="my-5 border-white mx-2 md:hidden" />
                  <div className="grid grid-cols-12 content-center my-5 lg:pl-10">
                     <div className="w-14 rounded-full content-center col-span-2 px-3">
                        <FaUserGraduate className="text-white text-3xl" />
                     </div>
                     <div className="col-span-10">
                        <h1 className="text-xs mb-2 p-1 font-semibold w-[135px] bg-yellow-300 text-black rounded-3xl">Jun - 2012 to July-2014</h1>
                        <h3 className="text-[24px] md:text-[24px] pr-2">Higher School Certificate</h3>
                        <h2 className="text-gray-300">Shishukunja School & College, Jhenaidah</h2>
                     </div>
                  </div>
               </div>
            </div> */}
            {/* Extra */}
            <div className="items-center   font-poppins">
               <div className="justify-center max-w-6xl px-4 py-4 mx-auto lg:py-8">
                  <div className="w-full mx-auto lg:max-w-3xl">
                     {/* University */}
                     <div data-aos="fade-up" className="relative flex justify-between">
                        <div className="flex flex-col items-center w-10 mr-4 md:w-24">
                           <div>
                              <div
                                 className="flex items-center justify-center w-8 h-8  rounded-full bg-gray-600">
                                 <div className="w-4 h-4  rounded-full "><FaUserGraduate className="text-white" /></div>
                              </div>
                           </div>
                           <div className="w-px h-full bg-blue-300 dark:bg-gray-600"></div>
                        </div>
                        <div>
                           <h2
                              className="inline-block px-4 py-2 mb-4 text-xs font-medium text-gray-100 bg-gradient-to-r from-blue-500 to-blue-900 dark:from-blue-400 dark:to-blue-500 rounded-3xl dark:text-gray-100">
                              Jan 2018 - Present</h2>
                           <div
                              className="relative flex-1 mb-10 bg-slate-500 border-b-4 border-blue-200 shadow dark:border-gray-700 rounded-3xl dark:bg-gray-900">
                              <div className="relative z-1 p-6 w-full md:w-[580px] xl:w-[780px]">
                                 <p className="mb-2 text-xl font-bold text-gray-100">Bachelor of Social Science (BSS)</p>
                                 <p className="text-gray-200">
                                    Govt. K.C. College, Jhenaidah
                                 </p>
                              </div>
                           </div>
                        </div>
                     </div>
                     {/* College */}
                     <div data-aos="fade-up" className="relative flex justify-between">
                        <div className="flex flex-col items-center w-10 mr-4 md:w-24">
                           <div>
                              <div
                                 className="flex items-center justify-center w-8 h-8 rounded-full bg-gray-600">
                                 <div className="w-4 h-4  rounded-full "><FaUserGraduate className="text-white" /></div>
                              </div>
                           </div>
                           <div className="w-px h-full bg-blue-300 dark:bg-gray-600"></div>
                        </div>
                        <div>
                           <h2
                              className="inline-block px-4 py-2 mb-4 text-xs font-medium text-gray-100 bg-gradient-to-r from-blue-500 to-blue-900 dark:from-blue-400 dark:to-blue-500 rounded-3xl dark:text-gray-100">
                              Jun 2012 - Jul 2014</h2>
                           <div
                              className="relative flex-1 mb-10 bg-slate-500 border-b-4 border-blue-200 shadow dark:border-gray-700 rounded-3xl dark:bg-gray-900">
                              <div className="relative z-2 p-6 w-full md:w-[580px] xl:w-[780px]">
                                 <p className="mb-2 text-xl font-bold text-gray-100">Higher School Certificate</p>
                                 <p className="text-gray-200">
                                    Shishukunja School & College, Jhenaidah
                                 </p>
                              </div>
                           </div>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </div>
   );
};

export default Education;