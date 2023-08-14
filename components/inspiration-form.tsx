import type { NextPage } from "next";
import { Button } from "@mui/material";

const InspirationForm: NextPage = () => {
  return (
    <div className="self-stretch bg-white flex flex-row flex-wrap py-[86px] px-[5px] items-start justify-center text-center text-21xl text-primary-800 font-heading-heading-1">
      <div className="flex-1 flex flex-col py-0 px-2.5 box-border items-center justify-start gap-[40px] max-w-[900px]">
        <div className="w-[688px] flex flex-col items-center justify-start max-w-[95%px] lg:max-w-[95%] md:self-stretch md:w-auto">
          <div className="self-stretch relative leading-[48px] font-semibold">
            Share Your Artistic Ideas or Commission Requests.
          </div>
        </div>
        <div className="self-stretch rounded-xl bg-white shadow-[0px_0px_24px_rgba(0,_0,_0,_0.03)] flex flex-col py-7 px-[30px] items-center justify-start gap-[17px] text-left text-5xl text-darkslategray-100 font-poppins">
          <div className="self-stretch flex flex-col items-center justify-start">
            <h3 className="m-0 self-stretch relative text-[inherit] leading-[36px] font-bold font-inherit">
              Inspiration Exchange
            </h3>
          </div>
          <form className="self-stretch flex flex-col items-center justify-start gap-[10px]">
            <div className="self-stretch flex flex-row items-start justify-center md:flex-col md:gap-[10px] md:items-start md:justify-center">
              <input
                className="font-roboto text-base bg-[transparent] self-stretch flex-1 rounded flex flex-col py-4 px-3 items-start justify-start border-[1px] border-solid border-gray md:flex-[unset] md:self-stretch"
                type="text"
                placeholder="First name"
              />
            </div>
            <input
              className="font-roboto text-base bg-[transparent] self-stretch rounded flex flex-col py-4 px-3 items-start justify-start border-[1px] border-solid border-gray"
              type="text"
              placeholder="Email id"
            />
            <textarea
              className="bg-[transparent] font-roboto text-base self-stretch rounded box-border h-[105px] flex flex-col p-3 items-start justify-start border-[1px] border-solid border-gray"
              placeholder="Comments or suggestions"
            />
            <Button sx={{ width: 222 }} variant="contained" color="primary">
              Submit
            </Button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default InspirationForm;
