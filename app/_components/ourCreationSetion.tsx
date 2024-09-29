import React from "react";
import ArrowIcon from "./theme/icons/arrow";
import Image from "next/image";
import OurSectionArrowIcon from "./theme/icons/ourSctionArrowIcon";

const OurCreationSetion = () => {
  return (
    <div className="relative flex">
      <div className="w-[45%]">
        <div className="h-[450px] border rounded-e-3xl pl-20 pr-10 pt-20">
          <h3 className="text-5xl font-bold syneFont">Our Creations</h3>
          <p className="text-base font-normal mt-5">
            This is an example of our creations, we are very happy to be able to
            make something like this for you too
          </p>
          <div className="flex items-center gap-5 mt-4">
            <p className="text-[#556652] text-2xl font-medium">Read more</p>
            <ArrowIcon className="text-[#556652]" />
          </div>
        </div>
        <div className="flex justify-between gap-10 absolute top-[350px] left-20">
          <div className="w-1/2">
            <Image
              src={"/images/our-section-img2.png"}
              width={250}
              height={250}
              alt="our-section-img1"
            />
            <div className="mt-5">
              <p className="text-2xl font-medium">Exploration Concept</p>
              <p className="text-lg font-normal mt-3 w-[250px]">
                exploration concept is just looking for a new layout to arrange
                furniture
              </p>
            </div>
          </div>
          <div className="w-1/2 pt-2 z-20">
            <Image
              src={"/images/our-section-img3.png"}
              width={400}
              height={400}
              alt="our-sectio-img2"
            />
          </div>
        </div>
      </div>
      <div className="w-[55%] flex justify-end pt-8">
        <div>
          <div className="bg-[#F1F1F1] w-[400px] h-52 rounded-s-3xl ml-auto"></div>
          <div className="flex relative w-[650px]">
            <div className="bg-[#556652] w-52 h-72 rounded-3xl absolute -left-16 -z-10"></div>
            <div className="absolute -top-36">
              <Image
                src={"/images/our-section-img1.png"}
                width={800}
                height={600}
                alt="our-section-img3"
                className="w-full h-[450px]"
              />
              <div className="flex gap-10 items-center pl-28 mt-4">
                <OurSectionArrowIcon />
                <div className="w-96">
                  <p className="text-4xl font-semibold syneFont">
                    Interior exhibition in Italy
                  </p>
                  <p className="text-xl font-normal mt-3">
                    We take part in several exhibitions around the world one of
                    which is in italy
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurCreationSetion;
