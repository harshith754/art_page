import type { NextPage } from "next";
import DigitalArtContainer from "./digital-art-container";

const CategoryContainer: NextPage = () => {
  return (
    <div className="self-stretch bg-primary-50 flex flex-col py-[70px] px-0 items-center justify-start text-center text-21xl text-primary-800 font-heading-heading-1">
      <div className="self-stretch flex flex-col py-10 px-0 box-border items-center justify-start gap-[54px] max-w-[95%px]">
        <div className="self-stretch flex flex-col py-0 px-[30px] box-border items-center justify-start max-w-[95%px]">
          <div className="self-stretch relative leading-[48px] font-semibold">
            Check out by category.
          </div>
        </div>
        <div className="self-stretch flex flex-row flex-wrap items-center justify-center gap-[86px] text-5xl text-gray-700">
          <DigitalArtContainer
            artworkId="/icon@2x.png"
            artworkType="Digital Art"
          />
          <DigitalArtContainer
            artworkId="/icon1@2x.png"
            artworkType="Traditional Art"
          />
        </div>
      </div>
    </div>
  );
};

export default CategoryContainer;
