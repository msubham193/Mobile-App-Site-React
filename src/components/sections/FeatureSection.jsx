import React from "react";
import Accuracy from "../../components/accuracy.jpg";
import Call from "../../components/call.png";
import Scan from "../../components/scan.jpg";

const FeatureSection = () => {
  return (
    <section className="px-6">
      <div className="rounded-3xl bg-gradient-to-b from-[#FFFFFF] to-[#F4F9FF] py-20">
        <div className="container mx-auto text-center">
          <h2 className="font-bold text-4xl mb-6 leading-normal">
            Top Features
          </h2>
          <div className="md:flex justify-center gap-20">
            <div>
              <div className="text-center relative px-4">
                <div className="relative">
                  <img
                    src={Scan}
                    className="mb-4 h-40 w-40 mx-auto hover:-translate-y-6 hover:scale-105 transition-all duration-300"
                    alt=""
                  />
                </div>
                <h3 className="text-2xl font-bold mb-4">Scan visiting card</h3>
                <p className="text-gray max-w-sm">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                </p>
              </div>
            </div>
            <div>
              <div className="text-center relative px-4">
                <div className="relative">
                  <img
                    src={Accuracy}
                    className="mb-4 h-40 w-40 mx-auto hover:-translate-y-6 hover:scale-105 transition-all duration-300"
                    alt=""
                  />
                  {/* <img src={arrow} alt="" className="hidden md:block absolute top-1/2 -right-36" /> */}
                </div>
                <h3 className="text-2xl font-bold mb-4">98% Accuracy</h3>
                <p className="text-gray max-w-sm">
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              
                </p>
              </div>
            </div>
            <div>
              <div className="text-center relative px-4">
                <img
                  src={Call}
                  className="mb-4 h-40 w-40 mx-auto hover:-translate-y-6 hover:scale-105 transition-all duration-300"
                  alt=""
                />
                <h3 className="text-2xl font-bold mb-4">Save to contact</h3>
                <p className="text-gray max-w-sm">
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeatureSection;
