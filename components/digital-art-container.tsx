import type { NextPage } from "next";

type DigitalArtContainerType = {
  artworkId?: string;
  artworkType?: string;
};

const DigitalArtContainer: NextPage<DigitalArtContainerType> = ({
  artworkId,
  artworkType,
}) => {
  return (
    <div className="rounded-6xl bg-white shadow-[5px_5px_30px_rgba(0,_0,_0,_0.33)] w-[340px] flex flex-col py-[22px] px-2.5 box-border items-start justify-start min-w-[300px] max-w-[340px] text-center text-5xl text-gray-700 font-heading-heading-1">
      <div className="self-stretch h-[174px] flex flex-row items-center justify-center gap-[24px]">
        <img
          className="relative w-[98px] h-[97px] overflow-hidden shrink-0 object-cover"
          alt=""
          src={artworkId}
        />
        <div className="flex flex-col items-start justify-start">
          <div className="relative leading-[32px] font-semibold [text-shadow:0px_2px_4px_rgba(0,_0,_0,_0.25)]">
            {artworkType}
          </div>
        </div>
      </div>
    </div>
  );
};

export default DigitalArtContainer;
