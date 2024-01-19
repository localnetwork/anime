import React, { useEffect, useState } from "react";
import axios from "axios";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import Image from "next/image";
const Carousel = () => {
  const [animeData, setAnimeData] = useState();
  const settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get(
          `${process.env.NEXT_PUBLIC_BASE_URL}/v4/seasons/upcoming?limit=5`
        );

        if (res.status != 200) {
          throw new Error("Error!");
        } else {
          setAnimeData(res.data.data);
        }
      } catch (error) {
        console.error("Error: ", error);
      }
    };
    fetchData();
  }, []);

  return (
    <div className="text-white">
      {animeData && (
        <>
          <Slider {...settings}>
            {animeData.map((post, index) => (
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
                <div className="absolute z-[2] left-0 bottom-0 p-[50px]">
                  <h2 className="font-bold text-[30px]">{post.title}</h2>
                  <div>{console.log(post.synopsis)}</div>
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
