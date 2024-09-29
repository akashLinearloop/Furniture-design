import Image from "next/image";
import React from "react";
import ArrowIcon from "./theme/icons/arrow";

const ShopRoomSection = () => {
  return (
    <div className="flex justify-between items-center gap-10">
      <div className="w-1/2">
        <div className="flex justify-center relative">
          <Image
            src={"/images/shop-room-img3.png"}
            width={180}
            height={180}
            alt="shop"
            className="absolute -top-11 left-14 z-10"
          />
          <div className="w-96 h-32 bg-black rounded-3xl -rotate-[8deg] flex justify-end items-center">
            <p className="text-4xl font-medium text-white mr-10">Living Room</p>
          </div>
        </div>
        <div className="flex gap-20 mt-14 relative">
          <div className="w-1/2 relative">
            <div className="w-96 h-32 bg-[#556652] rounded-e-3xl -rotate-[8deg] flex justify-end items-center absolute -left-40"></div>
          </div>
          <div className="w-1/2 relative">
            <Image
              src={"/images/shop-room-img2.png"}
              width={180}
              height={180}
              alt="shop"
              className="absolute -top-11 -left-20 z-10"
            />
            <div className="w-96 h-32 bg-[#556652] rounded-3xl -rotate-[8deg] flex justify-end items-center">
              <p className="text-4xl font-medium text-white mr-10">
                Dining Room
              </p>
            </div>
          </div>
        </div>
        <div className="flex justify-center relative mt-14">
          <Image
            src={"/images/shop-room-img1.png"}
            width={180}
            height={180}
            alt="shop"
            className="absolute -top-11 left-14 z-10"
          />
          <div className="w-96 h-32 bg-black rounded-3xl -rotate-[8deg] flex justify-end items-center">
            <p className="text-4xl font-medium text-white mr-10">Office Room</p>
          </div>
        </div>
      </div>
      <div className="w-1/2 pl-20">
        <h3 className="text-6xl font-bold syne-font">Shop by room</h3>
        <p className="text-xl font-normal mt-8 pr-20">
          Having a home you love means having furnishing that you’re proud of.
          We are proud to bring you trendy furniture for every room in the
          house, with the added bonus.
        </p>
        <div className="flex items-center gap-5 mt-10">
          <p className="text-[#556652] text-2xl font-medium">Read more</p>
          <ArrowIcon className="text-[#556652]" />
        </div>
      </div>
    </div>
  );
};

export default ShopRoomSection;
