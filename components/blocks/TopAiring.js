import React, { useState, useEffect } from "react";
import axios from "axios";
import Image from "next/image";
import Users from "../svg/users";
export const TopAiring = ({ ...props }) => {
  const [topAnimes, setTopAnimes] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `${process.env.NEXT_PUBLIC_BASE_URL}/v4/top/anime?filter=airing&limit=5`
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
    <div
      className={`${props.className} text-white bg-[#1C1C1C] py-[15px] rounded-t-[5px] rounded-b-[5px] flex flex-col`}
    >
      <h2 className="font-bold text-[20px] px-[15px] mt-0 mb-[15px]">
        Top Airing Anime
      </h2>
      {isLoading ? (
        <>
          <div className="w-full mb-[10px] rounded-t-[15px]">
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
                className="w-full mb-[10px] flex items-center gap-x-[15px] md:mb-[50px]"
              >
                <div className="max-w-[15%] w-full h-[30px] bg-[#282828]"></div>
                <div className="flex gap-x-[15px] w-full max-w-[85%]">
                  <div className="max-w-[20%] w-full h-[80px] bg-[#282828]"></div>
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
            <div className="nospace-last ">
              {topAnimes.map((post, index) => (
                <div className="mb-[15px]" key={index}>
                  {index === 0 ? (
                    <div className="w-full relative rounded-t-[15px] ">
                      <span className="shadow-fill"></span>
                      <Image
                        className="w-full h-full object-cover absolute"
                        src={post.images.webp.large_image_url}
                        width={500}
                        height={300}
                        alt={post.title}
                      />

                      <div className="z-[20] relative">
                        <div className="h-[100px] w-full"></div>
                        <div className="flex gap-x-[15px] text-white px-[15px] py-[10px] text-[12px] ">
                          <div className="flex items-center gap-1 rounded-[3px] p-[3px] bg-[#fff] text-black text-center text-[20px] font-bold">
                            <div className="rounded-[10px] w-[40px]">
                              {index + 1}
                            </div>
                          </div>
                          <div className="d-flex w-full">
                            <div className="font-bold text-[16px]">
                              {post.title}
                            </div>
                            <div className="w-full flex text-[14px] items-center gap-x-[5px]">
                              <Users color="#fff" width={30} height={30} />
                              {post.members.toLocaleString()}
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  ) : (
                    <div
                      key={index}
                      className=" w-full px-[15px] flex items-center gap-x-[15px] [&:not(:last-of-type)]:mb-[30px]"
                    >
                      <div className="rounded-[5px] flex items-center justify-center h-[50px] max-w-[50px] w-full text-[20px] text-center w-full p-[15px] border-[2px] border-[#666] text-[#666]">
                        {index + 1}
                      </div>
                      <div className="flex gap-x-[15px] w-full max-w-[85%]">
                        <div className="max-w-[20%] w-full ">
                          <Image
                            className="object-cover w-full h-[80px]"
                            src={post.images.webp.large_image_url}
                            width={100}
                            height={100}
                            alt={post.title}
                          />
                        </div>
                        <div className="w-full max-w-[80%]">
                          <div className="max-w-[100%] w-full mb-[5px] text-[#ababab]">
                            {post.title}
                          </div>
                          <div className="w-full flex text-[14px] items-center gap-x-[5px] text-[#666]">
                            <Users color="#666" width={30} height={30} />
                            {post.members.toLocaleString()}
                          </div>
                        </div>
                      </div>
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
