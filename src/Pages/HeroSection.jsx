import { useState, useEffect } from "react";
import "../Pages/HeroSection.css";
import person1 from "../assets/person1.jpeg";
import person2 from "../assets/person2.png";
import person3 from "../assets/person3.png";
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
    <section className="hero-section-container  h-[calc(100vh-7rem)] md:h-[500px] ">
      <div className="grid-background">
        {cells.map((idx) => (
          <div
            key={idx}
            className="grid-net hover:border-emerald-300 transition-all  ease duration-300"
          ></div>
        ))}
      </div>
      <section className="md:w-full items-center gap-10 sm:flex  justify-around p-4   md:px-16">
        <div className=" my-2 mx-auto md:my-auto w-[15rem] h-[15rem] md:w-[19rem] md:h-[19rem] rounded-full ">
          <img
            className=" relative w-full h-full object-cover md:object-cover rounded-full "
            srcSet={`${person1} 320w,
            ${person2} 480w,
            ${person3} 800w`}
            sizes="(max-width: 320px) 280px,
           (max-width: 480px) 440px,
           800px"
            src="image-800w.jpg"
            alt="Description"
          />
        </div>
        <div className=" text-left space-y-0 md:space-y-2 relative md:my-auto intro bg-transparent">
          <p className=" bg-clip-text bg-transparent text-transparent bg-gradient-to-r from-amber-400 from-10% via-emerald-400 via-30% to-red-400 to-90% text-5xl md:text-6xl font-bold font-mono tracking-wide ">
            {greet},
          </p>

          <span className="bg-transparent text-2xl md:text-4xl tracking-wide font-semibold font-serif">
            My Name is Mayur Kondhare,{" "}
          </span>
          <br />
          <div className=" space-y-0 md:tracking-wide bg-transparent">
            <p className=" text-emerald-100 bg-transparent text-xl md:text-4xl  font-serif font-semibold ">
              I am Software Developer, based on Pune.
            </p>
            <p className="contents text-small font-bold font-serif text-emerald-500">
              I Like to Learn & Build new technologies
            </p>
          </div>
        </div>
      </section>
    </section>
  );
}

export default HeroSection;
