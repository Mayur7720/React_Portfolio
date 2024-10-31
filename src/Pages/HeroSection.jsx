import { useState, useEffect } from "react";
import "../Pages/HeroSection.css";
import personImg from "../assets/SAVE_20230119_105112.jpg";
function HeroSection() {
  const grid = { row: 6, col: 12 };
  const cells = Array.from({ length: grid.row * grid.col }, (_, idx) => idx);
  const greets = ["Welcome", "नमस्कार", "नमस्ते", "ನಮಸ್ಕಾರ", "Hello"];
  const [greet, setGreet] = useState("Hi");
  useEffect(() => {
    let id = setInterval(() => {
      const showGreet = () => {
        let idx = Math.floor(Math.random() * 5);
        setGreet(greets[idx]);
      };
      showGreet();
    }, 3000);
    return () => clearTimeout(id);
  }, [greet]);
  return (
    <section className="hero-section-container h-[500px] w-full">
      <div className="grid-background">
        {cells.map((idx) => (
          <div
            key={idx}
            className="grid-net hover:border-emerald-400 hover:shadow-emerald-300/35 transition-all  ease duration-300"
          ></div>
        ))}
      </div>
      <section className="w-full flex justify-around px-16">
        <div className=" my-auto w-[21rem] h-[23rem] rounded-full ">
          <img
            className=" relative w-full h-full bg-red-900 rounded-full "
            src={personImg}
            alt=""
          />
        </div>
        <div className=" text-left space-y-2 relative my-auto intro bg-transparent">
          <p className=" bg-clip-text bg-transparent text-transparent bg-gradient-to-r from-amber-400 from-10% via-emerald-400 via-30% to-red-400 to-90% text-6xl font-bold font-mono tracking-wide ">
            {greet},
          </p>

          <span className="bg-transparent text-4xl tracking-wide font-semibold font-serif">
            My Name is Mayur Kondhare,{" "}
          </span>
          <br />
          <div className=" space-y-0 tracking-wide bg-transparent">
            <p className=" text-emerald-100 bg-transparent text-4xl  font-serif font-semibold ">
              I am Software Developer, based on Pune.
            </p>
            <p className="contents text-md font-bold font-serif text-emerald-500">
              I Like to Learn & Build new technologies
            </p>
          </div>
        </div>
      </section>
    </section>
  );
}

export default HeroSection;
