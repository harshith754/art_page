import type { NextPage } from "next";

const HeroSection: NextPage = () => {
  return (
    <div className="self-stretch flex flex-col py-[120px] px-[30px] items-center justify-start bg-[url(/hero-section@3x.png)] bg-cover bg-no-repeat bg-[top] text-center text-131xl text-white font-reenie-beanie">
      <div className="self-stretch rounded-81xl bg-darkslategray-200 flex flex-col py-[90px] px-[30px] box-border items-center justify-center mix-blend-normal max-w-[95%px]">
        <div className="self-stretch flex flex-col py-[30px] px-0 items-center justify-start md:max-w-full">
          <div className="self-stretch relative leading-[72px] [text-shadow:8px_8px_4px_rgba(0,_0,_0,_0.25)] [-webkit-text-stroke:1px_#85d1f0] mix-blend-normal lg:text-111xl md:text-101xl sm:text-81xl sm:self-stretch sm:w-auto">
            Welcome To My Art page.
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
