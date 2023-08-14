import type { NextPage } from "next";

const Footer: NextPage = () => {
  return (
    <footer className="self-stretch bg-primary-50 flex flex-row p-[50px] items-start justify-start md:self-stretch md:w-auto md:flex-row md:gap-[0px] sm:flex-col">
      <footer className="flex-1 overflow-hidden flex flex-row items-center justify-center gap-[195px] text-center text-5xl text-primary-500 font-heading-heading-1 md:flex-col md:gap-[50px] sm:flex-col sm:gap-[50px] sm:flex-[unset] sm:self-stretch">
        <div className="flex-1 flex flex-row items-center justify-start md:flex-[unset] md:self-stretch sm:flex-[unset] sm:self-stretch">
          <div className="flex-1 flex flex-col items-start justify-start">
            <h3 className="m-0 relative text-[inherit] leading-[24px] font-semibold font-inherit">
              Harshith’s
            </h3>
            <div className="flex flex-row items-start justify-start text-sm">
              <div className="relative leading-[16px] font-medium">
                Art Page
              </div>
            </div>
          </div>
        </div>
        <div className="flex-1 flex flex-row items-center justify-end gap-[20px] md:flex-[unset] md:self-stretch sm:flex-[unset] sm:self-stretch">
          <div className="rounded bg-primary-50 flex flex-col p-3.5 items-center justify-center">
            <img
              className="relative w-5 h-[21.67px]"
              alt=""
              src="/social-media-logo.svg"
            />
          </div>
          <div className="rounded bg-primary-50 flex flex-col p-3.5 items-center justify-center">
            <img
              className="relative w-5 h-5 overflow-hidden shrink-0"
              alt=""
              src="/social-media-logo1.svg"
            />
          </div>
          <div className="rounded bg-primary-50 flex flex-col p-3.5 items-center justify-center">
            <img
              className="relative w-5 h-5 overflow-hidden shrink-0"
              alt=""
              src="/social-media-logo2.svg"
            />
          </div>
          <div className="rounded bg-primary-50 flex flex-col p-3.5 items-center justify-center">
            <img
              className="relative w-5 h-5 overflow-hidden shrink-0"
              alt=""
              src="/social-media-logo3.svg"
            />
          </div>
        </div>
      </footer>
    </footer>
  );
};

export default Footer;
