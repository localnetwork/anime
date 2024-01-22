import React, { useEffect, useState } from "react";
import axios from "axios";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import Image from "next/image";
import ArrowCircleRight from "../svg/arrow-circle-right";
import ArrowCircleLeft from "../svg/arrow-circle-left";
function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={`z-[20] absolute bottom-[50px] cursor-pointer right-[30px] ${
        className.includes("slick-disabled") ? "hidden" : ""
      }`}
      onClick={onClick}
    >
      <ArrowCircleRight
        width={60}
        height={60}
        color="#b47fff"
        className="bg-[#fff] p-[15px] rounded-full hover:drop-shadow-md"
      />
    </div>
  );
}

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={`z-[20] absolute bottom-[50px] cursor-pointer right-[120px] ${
        className.includes("slick-disabled") ? "hidden" : ""
      }`}
      onClick={onClick}
    >
      <ArrowCircleLeft
        width={60}
        height={60}
        color="#b47fff"
        className="bg-[#fff] p-[15px] rounded-full hover:drop-shadow-md"
      />
    </div>
  );
}

const Carousel = ({ animes }) => {
  const settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
  };
  return (
    <div className="text-white rounded-[10px] overflow-hidden">
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
                  {post.aired.string.includes("Not") ? (
                    <div className="inline-block rounded-[5px] px-[10px] mt-[15px] py-[5px] text-[12px] bg-[#6735AE] text-white">
                      Aired: No info available yet.
                    </div>
                  ) : (
                    <div className="inline-block rounded-[5px] px-[10px] mt-[15px] py-[5px] text-[12px] bg-[#6735AE] text-white">
                      Aired: {post.aired.string}
                    </div>
                  )}
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
