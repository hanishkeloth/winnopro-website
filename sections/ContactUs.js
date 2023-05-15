import React from "react";
import CustomHeader from "../components/CustomHeader";

const ContactForm = () => {
  return (
    <div
      id="contact"
      className="w-screen-xl min-h-screen font-cambria px-4 py-8 sm:px-6 sm:py-12 lg:px-24 lg:py-14 bg-main-orange "
    >
      <CustomHeader sub="CONTACT US" main="Get In Touch" classes="text-white" />

      <div className="mt-10 max-w-screen ">
        <div className="grid grid-cols-1 gap-x-16 gap-y-8 lg:grid-cols-5">
          <div className="lg:col-span-2 h-[408px] bg-green "></div>

          <div className=" lg:col-span-3 ">
            <form action="" className="space-y-4">
              <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
                <input
                  className="w-full text-subHeader opacity-80 placeholder:text-black p-3 "
                  placeholder="Name"
                  type="text"
                  id="name"
                />
                <input
                  className="w-full text-subHeader opacity-80 placeholder:text-black p-3 "
                  placeholder="Email"
                  type="email"
                  id="email"
                />
              </div>

              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                <input
                  className="w-full text-subHeader opacity-80 placeholder:text-black p-3 "
                  placeholder="Contact Number"
                  type="number"
                  id="phone"
                />
                <input
                  className="w-full text-subHeader opacity-80 placeholder:text-black p-3 "
                  placeholder="Subject"
                  type="text"
                  id="subject"
                />
              </div>

              <div>
                <textarea
                  className="w-full h-64 text-subHeader opacity-80 placeholder:text-black p-3 "
                  placeholder=" Your Message"
                  rows="12"
                  id="message"
                ></textarea>
              </div>

              <div className="mt-4 grid grid-cols-1 gap-4 sm:grid-cols-2">
                <button
                  type="submit"
                  className="inline-block w-full bg-black py-3  text-white text-subHeader opacity-80 sm:w-auto"
                >
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;
