import React, { useState } from "react";
import {
  RiInstagramFill,
  RiWhatsappFill,
  RiTwitterXFill,
  RiGithubFill,
  RiCloseFill,
} from "react-icons/ri";
import { MdEmail } from "react-icons/md";

function Contact() {
  const [sendForm, setSendForm] = useState(false);
  const [error, setError] = useState({ error: "", show: false });
  const [showEmail, setShowEmail] = useState({
    show: false,
    email: "mayurkondhare7875@gmail.com",
  });
  const sendEmail = (e) => {
    e.preventDefault();
    const { value, name } = e.target;
    setSendForm(true);
    setTimeout(() => {
      setSendForm(false);
      setError((prev) => ({
        ...prev,
        error: "unable to send details, please try other medium",
        show: true,
      }));
    }, 3000);
    setError((prev) => ({ ...prev, error: "", show: false }));
  };

  const handleMouseEnter = () => {
    setShowEmail((prev) => ({ ...prev, show: true }));
    setTimeout(() => {
      setShowEmail((prev) => ({ ...prev, show: false }));
    }, 4000);
  };

  return (
    <section className="p-2 md:p-4 bg-transparent">
      <h1 className=" text-3xl md:text-5xl px-6 py-4 font-mono font-extrabold">
        Contact
      </h1>
      {error.show && (
        <div className="bg-red-400 flex items-center text-slate-950 mb-3 py-1 px-1 rounded font-semibold w-fit z-10 ">
          {error.error}
          <RiCloseFill
            onClick={() =>
              setError((prev) => ({ ...prev, error: "", show: false }))
            }
            size={20}
            className="ml-5 cursor-pointer stroke-black bg-transparent fill-black stroke-2"
          />
        </div>
      )}
      <div className=" md:mt-3 md:flex">
        <form
          ref={form}
          onSubmit={sendEmail}
          className=" md:w-3/5 md:px-2 py-5 mb-4 drop-shadow-md bg-gray-900/60 border border-dashed  border-slate-600 transition-all ease duration-200 pb-4 rounded-xl  mx-auto"
        >
          <div className="bg-transparent my-4 md:my-5 px-2 flex items-center justify-between ">
            <label
              className="bg-transparent text-xl md:text-xl font-mono font-semibold "
              htmlFor="user_name"
            >
              Name
            </label>
            <input
              className="p-2 md:p-3 w-2/3  md:text-xl rounded-md outline-none ring-1 ring-transparent focus:ring-fuchsia-600 hover:ring-blue-500"
              name="user_name"
              type="text"
            />
          </div>
          <div className="bg-transparent my-4 md:my-5 px-2 flex items-center justify-between ">
            <label
              className="bg-transparent text-lg md:text-xl font-mono font-semibold "
              htmlFor="email"
            >
              Email
            </label>
            <input
              className="p-2 md:p-3 w-2/3  md:text-xl rounded-md outline-none ring-1 ring-transparent focus:ring-fuchsia-600 hover:ring-blue-500"
              name="email"
              type="email"
            />
          </div>

          <div className="bg-transparent my-4 md:my-5 px-2 flex  justify-between ">
            <label
              className="bg-transparent text-lg md:text-xl font-mono font-semibold "
              htmlFor="message"
            >
              Message
            </label>
            <textarea
              name="message"
              className="p-3 md:h-32 w-2/3 rounded-md outline-none ring-1 ring-transparent focus:ring-fuchsia-600 hover:ring-blue-500"
              type="text"
            />
          </div>
          <div className="bg-transparent text-center">
            <button
              disabled={sendForm == false ? false : true}
              className={` ${
                !sendForm && "hover:bg-blue-700"
              } hover:shadow-black/30 shadow-md shadow-black/80  mt-2 px-3 md:px-4 py-2 md:py-3 rounded-lg font-semibold ${
                !sendForm ? "bg-blue-600" : "bg-blue-700"
              }`}
            >
              {sendForm ? " Sending... " : "Submit "}
            </button>
          </div>
        </form>

        <div className="flex md:flex-col items-center justify-center gap-4 mx-4  w-fit">
          {/* <a className="w-10 mb-4" target="." href={"https://github.com/Mayur7720"}>{<RiInstagramFill size={30} />}</a> */}
          <a className="w-10 mb-4 " target="." href={"https://x.com/Mayur7720"}>
            {
              <RiTwitterXFill
                className="hover:bg-gray-500 bg-gray-600 rounded-md w-full   md:py-1"
                size={38}
              />
            }
          </a>
          <a
            className="w-10 mb-4 "
            target="."
            href={"https://Wa.me/+9860375496"}
          >
            {
              <RiWhatsappFill
                className="hover:bg-green-700 bg-green-600 rounded-md w-full   md:py-1"
                size={38}
              />
            }
          </a>
          <a
            className="w-10 mb-4 "
            target="."
            href={"https://github.com/Mayur7720"}
          >
            {
              <RiGithubFill
                className="hover:bg-purple-600 bg-purple-900 rounded-md w-full  md:py-1"
                size={38}
              />
            }
          </a>
          <a className="w-10 mb-4 relative">
            {
              <MdEmail
                onMouseEnter={handleMouseEnter}
                className="hover:bg-red-700 bg-red-600 rounded-md w-full  md:py-1"
                size={38}
              />
            }
            {showEmail.show && (
              <span className="text-slate-50 -left-52 -top-7 bg-transparent absolute  ">
                {showEmail.email}
              </span>
            )}
          </a>
        </div>
      </div>
    </section>
  );
}

export default Contact;
