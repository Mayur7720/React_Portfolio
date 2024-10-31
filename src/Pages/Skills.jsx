import React, { useState } from "react";
import { icons } from "../Icons";
// import allIcons from "../Icons";
import "../Pages/skills.css";
import Tooltip from "../Components/Tooltip";

function Skills() {
  // const [allIcons] = useState(icons);
  // const [hoveredIdx, setHoveredIdx] = useState(null); // Track hovered index

  const [allIcons] = useState(icons);
  const [showTip, setShowTip] = useState(false);
  const [iconName, setIconName] = useState("");
  const [hoveredIndex, setHoveredIndex] = useState(null);

  const getPyramidStructure = () => {
    let rows = [];
    let index = 0;
    for (let i = 1; index < allIcons.length; i++) {
      rows.push(allIcons.slice(index, index + i));
      index += i;
    }
    return rows;
  };

  const iconRows = getPyramidStructure();

  const handleMouseIn = (iconName, index) => {
    setIconName(iconName);
    setHoveredIndex(index);
    setShowTip(true);
  };

  const handleMouseOut = () => {
    setShowTip(false);
    setHoveredIndex(null);
  };
  return (
    <section className="px-4 md:px-6 mt-4 md:mt-8 mb-8 skills-section">
      <h2 className="mb-8 text-4xl md:text-5xl font-mono font-extrabold">Skills</h2>

      <div className="relative items-center flex flex-col ">
        {iconRows.map((row, rowIndex) => (
          <div key={rowIndex} className=" flex justify-center space-x-4 md:space-x-10 bg-transparent my-2">
            {row.map((icon, iconIndex) => (
              <div
                key={iconIndex}
                className="relative inline-block bg-transparent"
                onMouseEnter={() =>
                  handleMouseIn(icon.iconName, `${rowIndex}-${iconIndex}`)
                }
                onMouseLeave={handleMouseOut}
              >
                <img
                  src={icon.url}
                  className="bg-transparent rotate-12 hover:-rotate-[1rem] w-20 hover:scale-100 transition-transform ease-in-out duration-500"
                  alt="icon"
                />
                {showTip && hoveredIndex === `${rowIndex}-${iconIndex}` && (
                  <Tooltip icon={iconName} />
                )}
              </div>
            ))}
          </div>
        ))}
      </div>
    </section>
  );
}

export default Skills;
