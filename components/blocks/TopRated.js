import React, { useState, useEffect } from "react";
import axios from "axios";
import Image from "next/image";

export const TopRated = () => {
  const [topAnimes, setTopAnimes] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `${process.env.NEXT_PUBLIC_BASE_URL}/v4/top/anime?limit=5`
        );
        if (response.status === 200) {
          setIsLoading(false);
        }
        if (response.status != 200) {
          throw new Error("Fetching data failed.");
        }
        setTopAnimes(response.data.data);
      } catch (error) {
        console.error("Error fetching JSON data:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="text-white bg-[#1C1C1C] py-[15px] flex flex-col">
      <h2 className="font-bold text-[30px] px-[15px] mt-0 mb-[15px]">
        Top Anime
      </h2>
      {isLoading ? (
        <>
          <div className="w-full mb-[30px] rounded-t-[15px]">
            <div className="relative">
              <div className="bg-[#282828] h-[100px] w-full"></div>
              <div className="shimmer__block max-w-[150px]"></div>
            </div>
            <div className="flex gap-x-[15px] bg-[#282828] border-t border-t-[#1C1C1C] text-white px-[15px] py-[10px] text-[12px] ">
              <div className="flex items-center gap-1 rounded-[3px] p-[3px] bg-[#1C1C1C]">
                <div className="rounded-[10px] w-[40px] h-[10px] "></div>
              </div>
              <div className="d-flex w-full">
                <div className="max-w-[50%] h-[10px]  bg-[#1C1C1C] mb-[10px]"></div>
                <div className="max-w-[30%] h-[10px] bg-[#1C1C1C]"></div>
              </div>
            </div>
          </div>
          <div className="px-[15px]">
            {Array.from({ length: 4 }, (_, index) => (
              <div
                key={index}
                className="w-full mb-[30px] flex items-center gap-x-[15px] md:mb-[50px]"
              >
                <div className="max-w-[15%] w-full h-[30px] bg-[#282828]"></div>
                <div className="flex gap-x-[15px] w-full max-w-[85%]">
                  <div className="max-w-[20%] w-full h-[50px] bg-[#282828]"></div>
                  <div className="w-full max-w-[80%]">
                    <div className="max-w-[100%] w-full h-[10px] mb-[10px] bg-[#282828]"></div>
                    <div className="max-w-[20%] w-full h-[10px] bg-[#282828]"></div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </>
      ) : (
        <>
          {topAnimes && (
            <div>
              {topAnimes.map((post, index) => (
                <div key={index}>
                  {index === 0 ? (
                    <div>{post.title}</div>
                  ) : (
                    <div className="item-wrapper">
                      <Image
                        className="object-contain w-full h-[150px] bg-[#000]"
                        src={post.images.webp.large_image_url}
                        width={270}
                        height={379}
                        alt={post.title}
                      />
                      {post.title}
                    </div>
                  )}
                </div>
              ))}
            </div>
          )}
        </>
      )}
    </div>
  );
};
