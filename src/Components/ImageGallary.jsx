import React, { useState, memo } from "react";
import ReactDOM from "react-dom";
import "../Pages/projects.css";
function ImageGallary({ screenShots }) {
  const [screenShot] = useState(screenShots.screenShots);
  const [showPreview, setShowPreview] = useState(false);
  const [index, setIndex] = useState(0);

  const handleIndex = (idx) => {
    setIndex(idx);
  };

  const togglePreview = () => {
    setShowPreview((prev) => !prev);
  };

  const renderPreview = () => {

    return ReactDOM.createPortal(
      <div
        className="bg-black bg-opacity-80 backdrop-blur-md fixed inset-0 flex items-center justify-center z-50"
        onClick={togglePreview}
      >
        <img
          className="max-w-[90vw] max-h-[90vh] object-contain"
          src={screenShot[index]}
          alt={`Preview ${index + 1}`}
          onClick={(e) => e.stopPropagation()}
        />
      </div>,
      document.body
    );
  };

  return (
    <div className="main-image relative project-screenshots bg-transparent shrink-0 md:h-[26rem] md:w-[30rem]">
      <div
        className="transition ease-in duration-200 w-full mt-4 md:h-[16rem] bg-red-50  bg-transparent cursor-pointer"
        onClick={togglePreview}
      >
        <img
          src={screenShot[index]}
          alt={`Screenshot ${index + 1}`}
          className="w-full h-full bg-transparent object-contain"
        />
      </div>

      <div className="screen-shots  flex flex-wrap gap-1 mt-2 w-fit bg-transparent bg-gray-950">
        {screenShot.map((el, idx) => (
          <div
            key={idx}
            onClick={() => handleIndex(idx)}
            className={`transition ease-in duration-200 bg-slate-500 rounded-md screen-shot-image h-12 overflow-hidden  border-2 cursor-pointer ${
              idx === index ? "border-red-600 " : " border-transparent "
            } w-20`}
          >
            <img
              src={el}
              className="w-full h-full object-fit"
              alt={`Thumbnail ${idx + 1}`}
            />
          </div>
        ))}
      </div>

      {showPreview && renderPreview()}
    </div>
  );
}

export default memo(ImageGallary);
