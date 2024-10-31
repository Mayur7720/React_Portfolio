import React, { useState } from "react";
import { FaEye } from "react-icons/fa";
import { projectDetails } from "../Icons";
import ImageGallary from "../Components/ImageGallary";
import Label from "../Components/Label";
import Button from "../Components/Button";
function Projects() {
  const [projectInfo] = useState(projectDetails);
  return (
    <section className="project-section bg-transparent px-6 my-4 ">
      <h2 className="mb-8 text-5xl font-mono font-extrabold">
        Personal Project
      </h2>
      {projectInfo.map((info, idx) => (
        <div
          key={idx}
          className="px-6 py-3 my-3 drop-shadow-sm hover:bg-gray-900/60 bg-gray-900/100 border border-transparent  hover:border-dashed hover:border-slate-600 transition-all ease duration-200 pb-4 rounded-xl"
        >
          <div className="bg-transparent flex  items-center gap-4 ">
            <div className="bg-transparent project-details font-mono">
              <p className="bg-transparent text-7xl  tracking-widest font-extrabold text-emerald-300">
                0{idx + 1}
              </p>
              <br />
              <p className="bg-transparent text-2xl font-serif font-semibold">
                {info.title}:
              </p>
              <br />
              <p className="bg-transparent ml-2 pr-28 ">{info.description}</p>
              <br />
              <p className="bg-transparent text-2xl font-semibold font-serif">
                Framework/Technologies :
              </p>
              <br />
              <div className=" project-skills flex flex-wrap gap-1 bg-transparent">
                {info.label.map((el, idx) => (
                  <Label key={idx} label={el} />
                ))}
              </div>
              <br />
              <br />
              <div className="  bg-transparent ">
                {info.link.map((url, idx) => (
                  <div
                    key={idx}
                    className=" bg-transparent flex gap-4 font-sans"
                  >
                    <Button target="." href={url.github_Url}>
                      {"</> View Code"}
                    </Button>
                    <Button
                      target="."
                      href={url.live_Url}
                      style={" flex gap-2 items-center justify-center "}
                    >
                      <FaEye className="bg-transparent" /> Live
                    </Button>
                  </div>
                ))}
              </div>
            </div>
            <ImageGallary screenShots={info} />
          </div>
        </div>
      ))}
    </section>
  );
}

export default Projects;
