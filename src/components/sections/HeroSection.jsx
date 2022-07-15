import React, { useState } from "react";


import image from "../../components/mobile.gif";
const HeroSection = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <section className="relative bg-white pt-[140px] bg-opacity-5 pb-24">
      <span className="absolute bg-purple-400 -left-28 -top-28 rounded-full opacity-[20%] blur-3xl aspect-square h-[350px] -z-10 animate-pulse" />


      <div className="container sm:px-10 md:px-10 px-10 mx-auto grid md:grid-cols-2">
        <div className="flex items-center">
          <div className="relative">
            <p className="text-primary">Download Now</p>
            <h1 className="text-3xl md:text-5xl lg:text-5xl font-bold leading-normal">
              Google PlayStore
              <br />
              <span className="text-blue-gradient">
                Highest Downloaded
              </span>{" "}
              <br />
              Scanner App
            </h1>
            <div className="mt-4 mb-8">
              <p className="text-gray">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              </p>
              <p className="text-gray">
               Lorem ipsum dolor sit amet.
              </p>
            </div>
            <div className="col-span-2 lg:flex gap-4 lg:mb-12 h-full">
              <button className="w-full h-max lg:w-auto mb-2 lg:mb-0 bg-primary p-4 rounded-lg text-white ">
                Get Started
              </button>
              <div className="w-full lg:w-auto ">
                <button
                  className="w-full border-2 px-5 py-2 rounded-lg border-primary  flex items-center justify-center md:py-3 hover:bg-primary "
                  onClick={() => setIsOpen(!isOpen)}
                >
                  <div className="flex items-center gap-x-2">Download App</div>
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="relative hidden md:block">
          <img src={image} alt="Globe" className="bg-primary" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
