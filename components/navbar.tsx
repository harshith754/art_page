import type { NextPage } from "next";

const Navbar: NextPage = () => {
  return (
    <header className="self-stretch bg-white h-[98px] flex flex-row py-[22px] px-20 box-border items-center justify-center sticky w-full top-[0] [background:white] z-[2] text-center text-5xl text-primary-500 font-heading-heading-1 lg:pl-10 lg:pr-10 lg:box-border md:pl-6 md:pr-6 md:box-border">
      <div className="flex-1 flex flex-row items-center justify-between">
        <div className="flex flex-row items-center justify-center">
          <div className="flex flex-col items-start justify-start">
            <h3 className="m-0 relative text-[inherit] leading-[24px] font-semibold font-inherit">
              Harshith’s
            </h3>
            <div className="relative text-sm leading-[16px] font-medium">
              Art Page
            </div>
          </div>
        </div>
        <div className="flex flex-row items-center justify-end gap-[36px] sm:flex">
          <div className="flex flex-row items-start justify-start gap-[30px] lg:hidden">
            <button className="cursor-pointer [border:none] p-0 bg-[transparent] relative text-sm leading-[22px] font-heading-heading-1 text-primary-900 text-center inline-block">
              HOME
            </button>
            <button className="cursor-pointer [border:none] p-0 bg-[transparent] relative text-sm leading-[22px] font-heading-heading-1 text-primary-900 text-center inline-block">
              ABOUT ME
            </button>
            <button className="cursor-pointer [border:none] p-0 bg-[transparent] relative text-sm leading-[22px] font-heading-heading-1 text-primary-900 text-center inline-block">
              GALLERY
            </button>
            <button className="cursor-pointer [border:none] p-0 bg-[transparent] relative text-sm leading-[22px] font-heading-heading-1 text-primary-900 text-center inline-block">
              CONTACT ME
            </button>
          </div>
          <button className="cursor-pointer [border:none] p-0 bg-[transparent] flex flex-row items-center justify-center">
            <img
              className="relative w-6 h-6 overflow-hidden shrink-0 hidden lg:flex md:flex"
              alt=""
              src="/notification.svg"
            />
          </button>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
