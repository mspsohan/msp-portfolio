import AOS from 'aos';
import 'aos/dist/aos.css';
const AboutMe = () => {
   AOS.init();
   return (
      <>
         <div id="about" className="min-h-[100vh] lg:h-screen text-white pt-20 content-center">
            <div className="mx-auto px-4 lg:px-0 grid grid-cols-1 md:grid-cols-12 content-center h-full gap-2">
               <div data-aos="fade-up" className="col-span-8 order-1 md:order-2">
                  <h2 className="text-4xl font-semibold mb-5">About Me</h2>
                  <div className="col-span-8 p-2">
                     <p className="">I am passionate frontend Developer seeking a challenging role to develop scalable solutions through problem-solving and analytical skills. Committed to excellence attention to detail, and continuous learning in a dynamic, collaborative environment.</p>
                     <div className="grid grid-cols-10 col-span-7 mt-7">
                        <div className="space-y-2 col-span-4 text-xl">
                           <h1>Name:</h1>
                           <h1>Date of Birth:</h1>
                           <h1>Addresh:</h1>
                           <h1>Phone:</h1>
                           <h1>Email:</h1>
                        </div>
                        <div className="space-y-2 col-span-6 text-xl">
                           <h2>Md Sohan Perves</h2>
                           <h2>25 Dec 1996</h2>
                           <h2>Jhenaidah, Bangladesh</h2>
                           <h2>+8801789216063</h2>
                           <h2>mspsohan@gmail.com</h2>
                        </div>
                     </div>
                  </div>
               </div>
               <div data-aos="fade-up" className="col-span-4 rounded order-1 md:order-1">
                  <img src="https://i.imgur.com/7zQGSQb.jpg" alt="" className="max-h-80 mx-auto rounded" />
               </div>

               {/* <div className="grid grid-cols-1 md:grid-cols-12 gap-5">
                  <h2 className="text-5xl mb-5">About me</h2>
                  
                  <div className="col-span-4 flex justify-center ml-12 ">
                     
                  </div>
               </div> */}
            </div>
         </div>
      </>
   );
};

export default AboutMe;