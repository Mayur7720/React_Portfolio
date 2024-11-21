import React,{memo} from "react";

function Label({ label = "no label", color = " bg-purple-800/60 " }) {
  return (
    <label
      className={`labels backdrop-blur-md bg-white/40 tracking-wide ml-2 font-semibold font-sans ${color}  py-1 px-2 rounded-full`}
    >
      {label}
    </label>
  );
}

export default memo(Label);
