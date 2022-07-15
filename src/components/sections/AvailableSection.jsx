import React from "react";

import plattform from "../../components/plattform.png";
const AvailableSection = () => {
  return (
    <section className="container mx-auto py-32">
      <div className="grid md:grid-cols-2 gap-6 items-center justify-center">
        <div className="mb-12 px-4 md:px-4 flex justify-center">
          <div>
            <img src={plattform} alt="" className="h-64 w-80 block" />
          </div>
        </div>
        <div className="flex justify-center">
          <div className="max-w-md ">
            <h2 className="font-bold text-4xl mb-6 leading-normal">
              Available on
              <span className="text-blue-gradient">
                {" "}
                Google Playstore
              </span> and{" "}
              <span className="text-blue-gradient"> Apple Appstore</span>
            </h2>
            <p className="text-gray">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam,
              vitae?
            </p>

            <button className="border-2 px-5 rounded-md border-primary text-primary py-3 flex items-center mt-6">
              Download Now
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AvailableSection;
