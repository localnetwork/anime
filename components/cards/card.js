import { useEffect, React } from "react";
import Image from "next/image";
import initializeLazyLoading from "@/services/lazyLoadService";

import Heart from "../svg/heart";
import Link from "next/link";

export const Card = ({ card }) => {
  useEffect(() => {
    initializeLazyLoading();
  }, []);
  return (
    <div className="w-full px-[15px] xs:max-w-[50%] sm:max-w-[33.33%] md:max-w-[25%] lg:max-w-[20%] mb-[30px] md:mb-[50px]">
      <Link href={`anime/${card.mal_id}`}>
        <div className="relative h-[300px] bg-black flex items-center rounded-t-[10px] overflow-hidden">
          <Image
            className="lazy w-full object-contain"
            src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw=="
            data-src={card.images.webp.large_image_url}
            width={300}
            height={300}
            alt={card.title}
          />
          {card.airing == true ? (
            <div className="airing bg-[#0E0E0E] text-[#AAAAA5] mr-[5px] absolute bottom-[5px] left-[5px]  py-[3px] px-[10px] rounded-[10px] uppercase text-[10px] line-h-[100%] font-bold">
              {" "}
              Airing{" "}
            </div>
          ) : (
            ""
          )}
        </div>
        <div className="flex rounded-b-[10px] text-white px-[10px] py-[5px] text-[12px] bg-[#1C1C1C] font-bold relative overflow-hidden">
          <div className="relative bg-[#6735AE] rounded-l-[3px] flex items-center gap-1 rounded-[1px] px-[7px] pr-[15px]">
            <span className="bg-[#1C1C1C] w-[15px] h-full absolute right-[-8px] -skew-y-[75deg] z-[1]"></span>
            <span>
              <Heart color="#FFFFFF" width={10} height={10} />
            </span>
            {/* <span
            dangerouslySetInnerHTML={{
              __html:
                '<svg xmlns="http://www.w3.org/2000/svg" version="1.1" xmlns:xlink="http://www.w3.org/1999/xlink" xmlns:svgjs="http://svgjs.com/svgjs" width="10" height="10" x="0" y="0" viewBox="0 0 512.001 512" style="enable-background:new 0 0 512 512" xml:space="preserve"><g><path d="M256 455.516c-7.29 0-14.316-2.641-19.793-7.438-20.684-18.086-40.625-35.082-58.219-50.074l-.09-.078c-51.582-43.957-96.125-81.918-127.117-119.313C16.137 236.81 0 197.172 0 153.871c0-42.07 14.426-80.883 40.617-109.293C67.121 15.832 103.488 0 143.031 0c29.555 0 56.621 9.344 80.446 27.77C235.5 37.07 246.398 48.453 256 61.73c9.605-13.277 20.5-24.66 32.527-33.96C312.352 9.344 339.418 0 368.973 0c39.539 0 75.91 15.832 102.414 44.578C497.578 72.988 512 111.801 512 153.871c0 43.3-16.133 82.938-50.777 124.738-30.993 37.399-75.532 75.356-127.106 119.309-17.625 15.016-37.597 32.039-58.328 50.168a30.046 30.046 0 0 1-19.789 7.43zM143.031 29.992c-31.066 0-59.605 12.399-80.367 34.914-21.07 22.856-32.676 54.45-32.676 88.965 0 36.418 13.535 68.988 43.883 105.606 29.332 35.394 72.961 72.574 123.477 115.625l.093.078c17.66 15.05 37.68 32.113 58.516 50.332 20.961-18.254 41.012-35.344 58.707-50.418 50.512-43.051 94.137-80.223 123.469-115.617 30.344-36.618 43.879-69.188 43.879-105.606 0-34.516-11.606-66.11-32.676-88.965-20.758-22.515-49.3-34.914-80.363-34.914-22.758 0-43.653 7.235-62.102 21.5-16.441 12.719-27.894 28.797-34.61 40.047-3.452 5.785-9.53 9.238-16.261 9.238s-12.809-3.453-16.262-9.238c-6.71-11.25-18.164-27.328-34.61-40.047-18.448-14.265-39.343-21.5-62.097-21.5zm0 0" fill="#ffffff" data-original="#000000" opacity="1"></path></g></svg>',
            }}
          /> */}
            {card.favorites.toLocaleString()}
          </div>
        </div>

        <h2 className="text-primary mt-[10px]">{card.title}</h2>
      </Link>
    </div>
  );
};
