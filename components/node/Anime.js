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
      {anime.title && (
        <h1 className="text-[#ababab] mt-[15px] font-bold text-[30px]">
          {anime.title}
          {anime.year && <>{`(${anime.year})`}</>}
        </h1>
      )}
      <div className="flex mt-[15px] text-[17px] text-[#666] justify-between">
        <div className="flex flex-col">
          {anime.aired.string && (
            <div className="">
              <span className="font-bold">Aired:</span> {anime.aired.string}{" "}
            </div>
          )}
          {anime.studios && (
            <div>
              <div className="font-bold">Studios:</div>
              {anime.studios.map((studio, index) => (
                <>
                  <div className="mb-[5px] text-[#6735AE]">
                    {console.log(studio, "studio")}
                    {studio.name}
                  </div>
                </>
              ))}
            </div>
          )}
        </div>
        <div className="">
          <div className="flex gap-x-[5px] ">
            <Heart className="mt-[5px]" color="#666" width={20} height={18} />
            {anime.favorites.toLocaleString()} favorites
          </div>
        </div>
      </div>
      <div
        className="text-[#666] mt-[15px]"
        dangerouslySetInnerHTML={{ __html: anime.synopsis }}
      ></div>
    </div>
  );
};

export default Anime;
