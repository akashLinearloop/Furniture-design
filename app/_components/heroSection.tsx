import React from "react";
import ArrowIcon from "./theme/icons/arrow";
import Image from "next/image";

const HeroSection = () => {
  return (
    <div>
      <div className="bg-[url('/images/hero-bg.png')] bg-cover bg-no-repeat w-full h-[1000px]">
        <div className="container pt-28 grid grid-cols-3 gap-6">
          <div>
            <p className="text-xl font-normal text-white pr-24">
              Having a home you love means having furnishing that you’re proud
              of. We are proud to bring you trendy furniture for every room in
              the house, with the added bonus.
            </p>
            <div className="flex items-center gap-5 mt-4">
              <p className="text-[#D2FFAF] text-2xl font-medium">Read more</p>
              <ArrowIcon className="text-[#D2FFAF]"/>
            </div>
            <div className="flex mt-24 justify-center mr-8">
              <div className="bg-[#F1F1F1] flex gap-4 p-4 rounded-full shadow-lg">
                <div className="bg-black rounded-full h-8 w-8 shadow-md shadow-black border-2"></div>
                <div className="bg-[#6CD6C3] rounded-full h-8 w-8 shadow-md shadow-black border-2"></div>
                <div className="bg-[#F68129] rounded-full h-8 w-8 shadow-md shadow-black border-2"></div>
              </div>
            </div>
          </div>
          <h3 className="text-5xl leading-tight text-center font-bold text-white syneFont">
            Make a room comfortable & elegant
          </h3>
          <div className="">
            <h3 className="text-4xl font-bold text-white syneFont text-right">
              Featured
            </h3>
            <div className="mt-12">
              <div className="flex justify-end">
                <div className="relative">
                  <Image
                    src={"/images/sofa-image.png"}
                    width={145}
                    height={145}
                    alt="sofa"
                    className="absolute -top-6 -left-6"
                  />
                  <div className="w-52 h-52 border rounded-[23px] bg-custom-gradient">
                    <div className="absolute bottom-3 left-5">
                      <p className="text-xl font-medium text-white">
                        Black Sofa
                      </p>
                      <p className="text-3xl font-medium text-white">$250</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex justify-end mt-12">
                <div className="relative">
                  <Image
                    src={"/images/chair-image.png"}
                    width={145}
                    height={145}
                    alt="sofa"
                    className="absolute -top-6 -left-6"
                  />
                  <div className="w-52 h-52 border rounded-[23px] bg-custom-gradient">
                    <div className="absolute bottom-3 left-5">
                      <p className="text-xl font-medium text-white">
                        Black Chair
                      </p>
                      <p className="text-3xl font-medium text-white">$100</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex justify-end mt-8 mr-2">
                <button className="text-2xl font-semibold text-white bg-button-gradient px-5 py-3 rounded-xl border">
                  More Product
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
