import React, { useState, useRef } from "react";
import emailjs from "@emailjs/browser";
import {
  RiInstagramFill,
  RiWhatsappFill,
  RiTwitterXFill,
  RiGithubFill,
  RiCloseFill,
} from "react-icons/ri";
import { MdEmail } from "react-icons/md";

function Contact() {
  const [sendNewForm, setSendNewForm] = useState(false);
  const [error, setError] = useState({ error: "", show: false, success: "" });
  const [showEmail, setShowEmail] = useState({
    show: false,
    email: `mayurkondhare7875@gmail.com`,
  });
  const form = useRef();

  const sendEmail = async (e) => {
    e.preventDefault();
    const formData = {
      name: form.current.user_name.value,
      email: form.current.email.value,
      message: form.current.message.value,
    };
    try {
      const response = await emailjs.send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        formData,
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      );

      if (response.status === 200) {
        console.log("Email sent successfully!");
        setError({
          error: "",
          show: true,
          success: "Email sent successfully!",
        });
        setSendNewForm(false);
      } else {
        console.error("Failed to send email.");
        setSendNewForm(false);
        setError({ error: "Failed to send message. Try again!", show: true });
      }
    } catch (error) {
      setSendNewForm(false);
      console.error("Failed to send email:", error);
      setError({ error: "Failed to send message. Try again!", show: true });
    }
  };

  const handleMouseEnter = () => {
    setShowEmail((prev) => ({ ...prev, show: true }));
    setTimeout(() => {
      setShowEmail((prev) => ({ ...prev, show: false }));
    }, 4000);
  };

  return (
    <section className="p-2 md:p-4 bg-transparent">
      <h1 className="text-3xl md:text-5xl md:px-6 py-4 font-mono font-extrabold">
        Contact
      </h1>
      {error.success == "" && error.show && (
        <div className="bg-red-400 flex items-center text-slate-950 mb-3 py-1 px-1 rounded font-semibold w-fit z-10 ">
          {error.error}
          <RiCloseFill
            onClick={() => setError({ error: "", show: false })}
            size={20}
            className="ml-5 cursor-pointer stroke-black bg-transparent fill-black stroke-2"
          />
        </div>
      )}
      {error.error == "" && error.show && (
        <div className="bg-green-500 flex items-center text-slate-950 mb-3 py-1 px-1 rounded font-semibold w-fit z-10 ">
          {error.success}
          <RiCloseFill
            onClick={() => setError({ error: "", show: false, success: "" })}
            size={20}
            className="ml-5 cursor-pointer stroke-black bg-transparent fill-black stroke-2"
          />
        </div>
      )}
      <div className="mt-3 md:flex">
        <form
          ref={form}
          onSubmit={sendEmail}
          className="md:w-3/5 px-2 py-5 mb-4 drop-shadow-md bg-gray-900/60 border border-dashed border-slate-600 transition-all ease duration-200 pb-4 rounded-xl mx-auto"
        >
          <div className="bg-transparent my-5 pl-1 md:px-2 flex items-center justify-between">
            <label
              className="bg-transparent text-lg md:text-xl font-mono font-semibold"
              htmlFor="user_name"
            >
              Name
            </label>
            <input
              className="p-2 md:p-3 w-3/4 md:w-2/3 md:text-xl rounded-md outline-none ring-1 ring-transparent focus:ring-fuchsia-600 hover:ring-blue-500"
              name="user_name"
              type="text"
              required
            />
          </div>
          <div className="bg-transparent my-5 pl-1 md:px-2 flex items-center justify-between">
            <label
              className="bg-transparent text-lg md:text-xl font-mono font-semibold"
              htmlFor="email"
            >
              Email
            </label>
            <input
              className="p-2 md:p-3 w-3/4 md:w-2/3 md:text-xl rounded-md outline-none ring-1 ring-transparent focus:ring-fuchsia-600 hover:ring-blue-500"
              name="email"
              type="email"
              required
            />
          </div>

          <div className="bg-transparent my-5 pl-1 md:px-2 flex justify-between">
            <label
              className="bg-transparent text-lg md:text-xl font-mono font-semibold"
              htmlFor="message"
            >
              Message
            </label>
            <textarea
              name="message"
              className="p-3 md:h-32 w-3/4 md:w-2/3 rounded-md outline-none ring-1 ring-transparent focus:ring-fuchsia-600 hover:ring-blue-500"
              required
            />
          </div>
          <div className="bg-transparent text-center">
            <button
              disabled={sendNewForm}
              className={`hover:shadow-black/30 shadow-md shadow-black/80 mt-2 px-3 md:px-4 py-2 md:py-3 rounded-lg font-semibold ${
                sendNewForm ? "bg-blue-800" : "bg-blue-600 hover:bg-blue-700"
              }`}
            >
              {sendNewForm ? " Sending... " : "Submit "}
            </button>
          </div>
        </form>

        <div className="flex md:flex-col items-center mx-auto justify-center gap-4 md:mx-4 w-fit">
          <a
            className="w-10 mb-4"
            target="_blank"
            rel="noopener noreferrer"
            href="https://x.com/Mayur7720"
          >
            <RiTwitterXFill
              className="hover:bg-gray-500 bg-gray-600 rounded-md w-full md:py-1"
              size={38}
            />
          </a>
          <a
            className="w-10 mb-4"
            target="_blank"
            rel="noopener noreferrer"
            href="https://Wa.me/+9860375496"
          >
            <RiWhatsappFill
              className="hover:bg-green-700 bg-green-600 rounded-md w-full md:py-1"
              size={38}
            />
          </a>
          <a
            className="w-10 mb-4"
            target="_blank"
            rel="noopener noreferrer"
            href="https://github.com/Mayur7720"
          >
            <RiGithubFill
              className="hover:bg-purple-600 bg-purple-900 rounded-md w-full md:py-1"
              size={38}
            />
          </a>
          <a className="w-10 mb-4 relative">
            <MdEmail
              onMouseEnter={handleMouseEnter}
              className="hover:bg-red-700 bg-red-600 rounded-md w-full md:py-1"
              size={38}
            />
            {showEmail.show && (
              <span className="text-slate-50 -left-52 -top-7 bg-transparent absolute">
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
