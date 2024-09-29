import Image from "next/image";
import HeroSection from "./_components/heroSection";
import WhyChoosingUsSection from "./_components/whyChoosingUsSection";
import ShopRoomSection from "./_components/shopRoomSection";
import BestSellingSection from "./_components/bestSellingSection";
import OurCreationSetion from "./_components/ourCreationSetion";
import ShinningLightSection from "./_components/shinningLightSection";
import ClientsReviewsSection from "./_components/clientsReviewsSection";

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
        <div className="mt-20">
          <OurCreationSetion />
        </div>
        <div className="mt-96">
          <ShinningLightSection />
        </div>
        <div className="mt-52">
          <ClientsReviewsSection />
        </div>
      </div>
    </>
  );
}
