import Image from "next/image";
import HeroSection from "./_components/heroSection";
import WhyChoosingUsSection from "./_components/whyChoosingUsSection";
import ShopRoomSection from "./_components/shopRoomSection";
import BestSellingSection from "./_components/bestSellingSection";
import OurCreationSetion from "./_components/ourCreationSetion";

export default function Home() {
  return (
    <>
      <div>
        <HeroSection />
        <div className="absolute w-full top-[880px]">
          <WhyChoosingUsSection />
        </div>
        <div className="mt-[700px]">
          <ShopRoomSection />
        </div>
        <div className="mt-32">
          <BestSellingSection />
        </div>
        <div>
          <OurCreationSetion />
        </div>
      </div>
    </>
  );
}
