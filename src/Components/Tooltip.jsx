import React from "react";
import "../Components/Tooltip.css";
function Tooltip({ icon }) {
  return (
    <div className="animate-div bg-gradient-to-tr from-fuchsia-500 via-purple-900 to-red-400 capitalize absolute font-semibold text-center w-full -top-8 left-1/2 transform -translate-x-1/2 py-1  text-white text-sm rounded shadow-md">
      {icon}
    </div>
  );
}

export default Tooltip;
