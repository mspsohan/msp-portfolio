
const SkillCard = ({ skill }) => {
   return (
      <div>
         <div className="w-full shadow-[-5px_5px_15px_5px_#1a202c] p-2 bg-gray-50 bg-opacity-10 hover:scale-105 hover:translate-x-2">
            <img src={skill.img} alt="" className="w-32 h-28 mx-auto p-5" />
            <div className="flex justify-between items-baseline text-white">
               <h3 className=" font-semibold text-xl">{skill.name}</h3>
            </div>
         </div>
      </div>
   );
}
export default SkillCard