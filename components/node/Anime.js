import React from "react";
import Heart from "../svg/heart";
const Anime = ({ ...props }) => {
  const { anime } = props;
  return (
    <div>
      {anime.trailer.embed_url && (
        <div className="pb-[56.25%] relative">
          <iframe
            width="100%"
            height="450"
            className="absolute w-full h-full top-0 left-0  object-cover"
            src={anime.trailer.embed_url}
          />
        </div>
      )}
      <h1 className="text-[#ababab] mt-[15px] font-bold text-[30px]">
        {anime.title_english}

        {anime.year && <>{`(${anime.year})`}</>}
      </h1>
      <div className="flex mt-[15px] text-[17px] text-[#666] justify-between">
        <div className="">Aired: {anime.aired.string} </div>
        <div className="flex justify-end">
          <div className="flex gap-x-[10px] items-center ">
            <Heart className="" color="#666" width={20} height={18} />
            {anime.favorites.toLocaleString()} favorites
          </div>
        </div>
      </div>
    </div>
  );
};

export default Anime;
