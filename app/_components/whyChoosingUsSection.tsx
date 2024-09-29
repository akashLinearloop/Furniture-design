import React from "react";
import ArrowIcon from "./theme/icons/arrow";
import CarIcon from "./theme/icons/carIcon";
import GuaranteedIcon from "./theme/icons/guaranteedIcon";
import ShieldIcon from "./theme/icons/shieldIcon";
import ToolIcon from "./theme/icons/toolIcon";

const WhyChoosingUsSection = () => {
  return (
    <>
      <div className="container flex justify-between items-center gap-40">
        <div>
          <h3 className="text-6xl font-bold text-black syne-font">
            Why <br /> choosing us
          </h3>
          <p className="text-xl font-normal text-black mt-6">
            Having a home you love means having furnishing that you’re proud of.
            We are proud to bring you trendy furniture for every room in the
            house, with the added bonus.
          </p>
          <div className="flex items-center gap-5 mt-4">
            <p className="text-[#556652] text-2xl font-medium">Read more</p>
            <ArrowIcon className="text-[#556652]"/>
          </div>
        </div>
        <div className="flex justify-between gap-8">
          <div className="mt-20">
            <div className="w-72 h-72 bg-[#556652] rounded-3xl flex flex-col items-center justify-center">
              <div className="bg-card-gradient h-40 w-40 rounded-full flex justify-center items-center border">
                <CarIcon />
              </div>
              <p className="text-3xl font-medium text-white mt-6">
                FREE Delivery
              </p>
            </div>
            <div className="w-72 h-72 bg-[#242424] mt-10 rounded-3xl flex flex-col items-center justify-center">
              <div className="bg-card-gradient h-40 w-40 rounded-full flex justify-center items-center border">
                <ToolIcon />
              </div>
              <p className="text-3xl font-medium text-white mt-6">
                FREE Installation
              </p>
            </div>
          </div>
          <div className="">
            <div className="w-72 h-72 bg-[#242424] rounded-3xl flex flex-col items-center justify-center">
              <div className="bg-card-gradient h-40 w-40 rounded-full flex justify-center items-center border">
                <ShieldIcon />
              </div>
              <p className="text-3xl font-medium text-white mt-6">
                Safe & Reliable
              </p>
            </div>
            <div className="w-72 h-72 bg-[#556652] mt-10 rounded-3xl flex flex-col items-center justify-center">
              <div className="bg-card-gradient h-40 w-40 rounded-full flex justify-center items-center border">
                <GuaranteedIcon />
              </div>
              <p className="text-3xl font-medium text-white mt-6">Guaranteed</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default WhyChoosingUsSection;
