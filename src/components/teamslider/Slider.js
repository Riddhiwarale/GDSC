import React, { useState } from "react";
import Slider from "react-slick";
import { information } from "../../assets/data/teaminfo";
import NextArrow from "./NextArrow";
import PrevArrow from "./PreviousArrow";
import Slides from "./Slides";
import Header from "./Sliderheader";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
const SliderFunction = () => {
  const [imageIndex, setImageIndex] = useState(0);
  const settings = {
    dots: false,
    infinite: true,
    speed: 300,
    slidesToShow: 5,
    centerMode: true,
    swipeToSlide: true,
    centerPadding: 0,
    autoplay: true,
    autoplaySpeed: 5000,
    responsive: [
      {
        breakpoint: 1050,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 900,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          initialSlide: 1,
          swipeToSlide: true,
        },
      },
      {
        breakpoint: 700,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1,
          swipeToSlide: true,
        },
      },
      {
        breakpoint: 500,
        settings: {
          dots: false,
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1,
        },
      },
    ],
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    beforeChange: (current, next) => setImageIndex(next),
  };
  return (
    <div className="w-full pt-10 pb-10">
      <Header />
      <div className="bg-slickBackground-color px-5 pt-10">
        <Slider {...settings}>
          {information.map((info, idx) => (
            <Slides
              idx={idx}
              imageIndex={imageIndex}
              name={info.name}
              status={info.status}
              image={info.image}
              linkedin={info.linkedin}
            />
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default SliderFunction;
