import React from "react";
import ArrowIcon from "./theme/icons/arrow";
import Image from "next/image";

const ShinningLightSection = () => {
  return (
    <div className="flex">
      <div className="w-2/5">
        <div className="relative">
          <div className="bg-[#556652] w-[250px] h-[200px] rounded-e-3xl"></div>
          <Image
            src={"/images/shinningLight-img1.png"}
            width={350}
            height={350}
            alt="shinningLight-img1"
            className="absolute top-20"
          />
        </div>
      </div>
      <div className="w-3/5">
        <div className="border-t border-l rounded-s-3xl flex justify-between relative">
          <div className="absolute -left-32 top-40">
            <Image
              src={"/images/shinningLight-img2.png"}
              width={200}
              height={200}
              alt="shinningLight-img2"
            />
            <div className="absolute top-32 left-10 -z-10 w-[200px] h-[200px] bg-[#F1F1F1] rounded-3xl"></div>
          </div>
          <div className="flex flex-col justify-end w-[500px] h-[400px] mx-auto">
            <p>About us</p>
            <p className="text-6xl font-bold syneFont mt-4">
              Shinning a light on furniture
            </p>
            <p className="text-xl font-normal mt-4">
              We have a passion to deliver furniture for all. Bringing you
              quality furniture at the best value, so you’ll always be able to
              find something you adore at the right price.
            </p>
            <div className="flex items-center gap-5 mt-4">
              <p className="text-[#556652] text-2xl font-medium">Read more</p>
              <ArrowIcon className="text-[#556652]" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShinningLightSection;
