import SkillCard from "./SkillCard";
import AOS from 'aos';
import 'aos/dist/aos.css';

const skills = [
   { "id": 1, "name": "ReactJS", "img": "https://i.imgur.com/L6FDyU9.png" },
   { "id": 6, "name": "JavaScript", "img": "https://upload.wikimedia.org/wikipedia/commons/6/6a/JavaScript-logo.png" },
   { "id": 10, "name": "ExpressJS", "img": "https://i.imgur.com/U1WzJpS.png" },
   { "id": 12, "name": "MongoDB", "img": "https://i.imgur.com/CltLRCx.png" },
   { "id": 2, "name": "Tailwind Css", "img": "https://i.imgur.com/WrB4cbE.png" },
   { "id": 7, "name": "Material UI", "img": "https://i.imgur.com/i4fbuus.png" },
   { "id": 11, "name": "Firebase", "img": "https://i.imgur.com/xCcLscQ.png" },
   { "id": 13, "name": "Next JS", "img": "https://i.imgur.com/JXlSl8S.png" },
]


const Skills = () => {
   AOS.init({ duration: 2000 });
   return (
      <>
         <div id="skill" className="min-h-[100vh] pt-20  content-center">
            <div className="mx-auto h-full flex items-center flex-col justify-center">
               <div className="max-w-xl mx-auto">
                  <div className="text-center ">
                     <div className="relative flex flex-col items-center">
                        <div className="absolute hidden md:block -top-12 -left-[100px] text-[100px] text-gray-400 font-bold opacity-10">
                           SKILLS
                        </div>
                        <h1 className="text-5xl font-bold leading-tight dark:text-white">
                           <span className="text-white">
                              Skill
                           </span>
                        </h1>
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
               <div data-aos="fade-up" className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 lg:gap-10  mt-12 p-5 ">
                  {
                     skills.map(skill => <SkillCard key={skill.id} skill={skill} />)
                  }
               </div>
            </div>
         </div>
      </>
   );
};

export default Skills;