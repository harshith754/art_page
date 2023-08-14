import type { NextPage } from "next";
import { Button } from "@mui/material";

const RecentArtworksContainer: NextPage = () => {
  return (
    <div className="self-stretch flex flex-col pt-[86px] px-0 pb-[139px] items-center justify-start gap-[39px] text-center text-21xl text-primary-800 font-heading-heading-1">
      <div className="self-stretch flex flex-col items-center justify-start gap-[40px] max-w-[95%px]">
        <div className="w-[688px] flex flex-col items-center justify-start gap-[24px] max-w-[95%px] lg:max-w-[95%] md:self-stretch md:w-auto">
          <div className="self-stretch relative leading-[48px] font-semibold">
            Recent Artworks.
          </div>
          <div className="self-stretch relative text-xl leading-[28px] text-gray-400">
            Like and Share to support me 😊
          </div>
        </div>
        <div className="self-stretch flex flex-row flex-wrap items-start justify-center gap-[40px] text-left text-base text-white">
          <div className="rounded-3xs w-[355px] h-[382px] flex flex-col p-6 box-border items-center justify-end bg-[url(/card-1@3x.png)] bg-cover bg-no-repeat bg-[top]">
            <div className="self-stretch h-6 flex flex-row items-end justify-center">
              <div className="flex flex-row items-start justify-end">
                <div className="relative leading-[24px] font-medium">
                  Washington
                </div>
              </div>
            </div>
          </div>
          <div className="rounded-3xs w-[355px] h-[382px] flex flex-col p-6 box-border items-center justify-end bg-[url(/card-1@3x.png)] bg-cover bg-no-repeat bg-[top]">
            <div className="self-stretch h-6 flex flex-row items-end justify-center">
              <div className="flex flex-row items-start justify-end">
                <div className="relative leading-[24px] font-medium">
                  Washington
                </div>
              </div>
            </div>
          </div>
          <div className="rounded-3xs w-[355px] h-[382px] flex flex-col p-6 box-border items-center justify-end bg-[url(/card-1@3x.png)] bg-cover bg-no-repeat bg-[top]">
            <div className="self-stretch h-6 flex flex-row items-end justify-center">
              <div className="flex flex-row items-start justify-end">
                <div className="relative leading-[24px] font-medium">
                  Washington
                </div>
              </div>
            </div>
          </div>
          <div className="rounded-3xs w-[355px] h-[382px] flex flex-col p-6 box-border items-center justify-end bg-[url(/card-1@3x.png)] bg-cover bg-no-repeat bg-[top]">
            <div className="self-stretch h-6 flex flex-row items-end justify-center">
              <div className="flex flex-row items-start justify-end">
                <div className="relative leading-[24px] font-medium">
                  Washington
                </div>
              </div>
            </div>
          </div>
          <div className="rounded-3xs w-[355px] h-[382px] flex flex-col p-6 box-border items-center justify-end bg-[url(/card-5@3x.png)] bg-cover bg-no-repeat bg-[top]">
            <div className="self-stretch h-6 flex flex-row items-end justify-center">
              <div className="flex flex-row items-start justify-end">
                <div className="relative leading-[24px] font-medium">
                  Washington
                </div>
              </div>
            </div>
          </div>
          <div className="rounded-3xs w-[355px] h-[382px] flex flex-col p-6 box-border items-center justify-end bg-[url(/card-5@3x.png)] bg-cover bg-no-repeat bg-[top]">
            <div className="self-stretch h-6 flex flex-row items-end justify-center">
              <div className="flex flex-row items-start justify-end">
                <div className="relative leading-[24px] font-medium">
                  Washington
                </div>
              </div>
            </div>
          </div>
          <div className="rounded-3xs w-[355px] h-[382px] flex flex-col p-6 box-border items-center justify-end bg-[url(/card-5@3x.png)] bg-cover bg-no-repeat bg-[top]">
            <div className="self-stretch h-6 flex flex-row items-end justify-center">
              <div className="flex flex-row items-start justify-end">
                <div className="relative leading-[24px] font-medium">
                  Washington
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Button variant="contained" color="primary">
        Load more listing
      </Button>
    </div>
  );
};

export default RecentArtworksContainer;
