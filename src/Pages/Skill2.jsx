// import React, { useState } from "react";
// import { icons } from "../Icons/";
// import Tooltip from "../Components/Tooltip";

// function Skill2() {
//   const [allIcons] = useState(icons);
//   const [showTip, setShowTip] = useState(false);
//   const [iconName, setIconName] = useState("");
//   const [hoveredIndex, setHoveredIndex] = useState(null);

//   const getPyramidStructure = () => {
//     let rows = [];
//     let index = 0;
//     for (let i = 1; index < allIcons.length; i++) {
//       rows.push(allIcons.slice(index, index + i));
//       index += i;
//     }
//     return rows;
//   };

//   const iconRows = getPyramidStructure();

//   const handleMouseIn = (iconName, index) => {
//     setIconName(iconName);
//     setHoveredIndex(index);
//     setShowTip(true);
//   };

//   const handleMouseOut = () => {
//     setShowTip(false);
//     setHoveredIndex(null);
//   };

//   return (
//     <section className="w-full h-screen bg">
//       <div className="relative flex flex-col items-center">
//         {iconRows.map((row, rowIndex) => (
//           <div key={rowIndex} className="flex justify-center space-x-8 my-2">
//             {row.map((icon, iconIndex) => (
//               <div
//                 key={iconIndex}
//                 className="relative inline-block"
//                 onMouseEnter={() =>
//                   handleMouseIn(icon.iconName, `${rowIndex}-${iconIndex}`)
//                 }
//                 onMouseLeave={handleMouseOut}
//               >
//                 <img
//                   src={icon.url}
//                   className="bg-transparent rotate-12 hover:-rotate-[1rem] w-20 hover:scale-100 transition-transform ease-in-out duration-500"
//                   alt="icon"
//                 />
//                 {showTip && hoveredIndex === `${rowIndex}-${iconIndex}` && (
//                   <Tooltip icon={iconName} />
//                 )}
//               </div>
//             ))}
//           </div>
//         ))}
//       </div>
//     </section>
//   );
// }

// export default Skill2;
