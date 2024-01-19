import React, { useEffect, useState } from "react";
import axios from "axios";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import Image from "next/image";
const Carousel = ({ animes }) => {
  const settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <div className="text-white">
      {animes && (
        <>
          <Slider {...settings}>
            {animes.map((post, index) => (
              <div key={index} className="relative">
                <div className="pb-[56.25%]"></div>
                <span
                  className="bg-gradient-to-r from-black z-[1] via-transparent to-transparent absolute top-0 left-0 w-full h-full"
                  style={{
                    backgroundImage:
                      "linear-gradient(77deg, rgba(0,0,0,.9), transparent 99%)",
                  }}
                ></span>
                <Image
                  src={
                    post?.trailer.images.maximum_image_url ||
                    post?.images.webp.large_image_url
                  }
                  width={1200}
                  height={400}
                  className="absolute top-0 left-0 w-full h-full object-cover bg-[#000]"
                  alt={post.title}
                />
                <div className="absolute z-[2] left-0 bottom-0 px-[30px] pb-[50px]">
                  <h2 className="font-bold text-[25px]">{post.title}</h2>
                  <div className="mt-[5px]">{post.synopsis}</div>
                </div>
              </div>
            ))}
          </Slider>
        </>
      )}
    </div>
  );
};

export default Carousel;
