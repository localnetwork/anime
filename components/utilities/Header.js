import React from "react";
import Image from "next/image";
import { Searchbar } from "../forms/Searchbar";

export const Header = () => {
  return (
    <header className="z-50 bg-[#1C1C1C] py-[15px] sticky top-[0] text-white mb-[15px]">
      <div className="container mx-auto">
        <div className="flex justify-between flex-wrap mx-[-15px]">
          <div className="flex flex-wrap items-center px-[15px]">
            <div className="toggle cursor-pointer w-[30px] flex mr-[15px] flex-col">
              <div className="w-full rounded-full h-[3px] bg-[#AAAAAA] mb-[5px]"></div>
              <div className="w-full rounded-full h-[3px] bg-[#AAAAAA] mb-[5px]"></div>
              <div className="w-full rounded-full h-[3px] bg-[#AAAAAA]"></div>
            </div>
            {/* <Image className="max-w-[110px]" src="/images/logo.png" width={335} height={92} /> */}

            <div className="font-bold">
              Anime <span className="text-[#b47fff] font-bold">Universe</span>
            </div>

            <Searchbar />
          </div>
          <div className="px-[15px]">Menu</div>
        </div>
      </div>
    </header>
  );
};
