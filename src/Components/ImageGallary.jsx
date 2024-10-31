import React, { useState } from "react";
import pic from "../assets/screen2.png";
function ImageGallary({ screenShots }) {
  const [screenShot, setScreenShot] = useState(screenShots.screenShots);
  const [index, setIndex] = useState(0);

  const handleIndex = (idx) => {
    setIndex(idx);
  };
  return (
    <div className="project-screnshots bg-transparent min-w-[25rem]">
      <picture>
        <img src={screenShot[index]} alt="" style={{ width: "auto" }} />
      </picture>
      <div className="screen-shots flex flex-wrap gap-1 mt-2 w-fit bg-gray-950">
        {screenShot.map((el, idx) => (
          <div
            key={idx}
            className={`screen-shot-image border-2 cursor-pointer ${
              idx == index ? "border-red-600" : " "
            } w-[5rem]`}
          >
            <img
              onClick={() => handleIndex(idx)}
              src={el}
              className="w-full object-fill"
              alt=""
            />
          </div>
        ))}
      </div>
    </div>
  );
}

export default ImageGallary;
