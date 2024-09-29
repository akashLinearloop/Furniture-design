import Image from "next/image";
import React from "react";
import StarIcon from "./theme/icons/starIcon";
import ArrowIcon from "./theme/icons/arrow";

const BestSellingSection = () => {
  return (
    <div className="container">
      <div>
        <h2 className="text-6xl font-bold text-center syneFont">
          Best Selling Product
        </h2>
        <div className="grid grid-cols-4 gap-10 mt-10">
          <div>
            <Image
              src={"/images/lamp-img.png"}
              width={300}
              height={300}
              alt="lamp"
              className="w-full h-[300px]"
            />
            <div className="mt-4">
              <p className="text-2xl font-medium syneFont">LED Work Lamp</p>
              <div className="flex justify-between items-center mt-3">
                <p className="text-4xl font-medium">$40</p>
                <div className="flex gap-3">
                  {[...Array(5)].map((item, index) => (
                    <StarIcon key={index} />
                  ))}
                </div>
              </div>
            </div>
          </div>
          <div>
            <Image
              src={"/images/plant-img.png"}
              width={300}
              height={300}
              alt="plant"
              className="w-full h-[300px]"
            />
            <div className="mt-4">
              <p className="text-2xl font-medium syneFont">
                FEJKA Potted Plant
              </p>
              <div className="flex justify-between items-center mt-3">
                <p className="text-4xl font-medium">$24</p>
                <div className="flex gap-3">
                  {[...Array(5)].map((item, index) => (
                    <StarIcon key={index} />
                  ))}
                </div>
              </div>
            </div>
          </div>
          <div>
            <Image
              src={"/images/chair-img2.png"}
              width={300}
              height={300}
              alt="chair"
              className="w-full h-[300px]"
            />
            <div className="mt-4">
              <p className="text-2xl font-medium syneFont">FEJKA Work Chair</p>
              <div className="flex justify-between items-center mt-3">
                <p className="text-4xl font-medium">$80</p>
                <div className="flex gap-3">
                  {[...Array(5)].map((item, index) => (
                    <StarIcon key={index} />
                  ))}
                </div>
              </div>
            </div>
          </div>
          <div>
            <Image
              src={"/images/table-img.png"}
              width={300}
              height={300}
              alt="table"
              className="w-full h-[300px]"
            />
            <div className="mt-4">
              <p className="text-2xl font-medium syneFont">MICKE Desk, Black</p>
              <div className="flex justify-between items-center mt-3">
                <p className="text-4xl font-medium">$120</p>
                <div className="flex gap-3">
                  {[...Array(5)].map((item, index) => (
                    <StarIcon key={index} />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex justify-center mt-8">
          <div className="flex items-center gap-5 mt-10">
            <p className="text-[#556652] text-2xl font-medium">More Product</p>
            <ArrowIcon className="text-[#556652]" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default BestSellingSection;
