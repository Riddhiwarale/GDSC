import React, { useState } from "react";
import Slider from "react-slick";
import { information } from "../../assets/data/teaminfo";
import NextArrow from "./NextArrow";
import PrevArrow from "./PreviousArrow";
import Slides from "./Slides";
import Header from "./Sliderheader";
const SliderFunction = () => {
  const [imageIndex, setImageIndex] = useState(0);
  const settings = {
    dots: true,
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
        breakpoint: 1024,
        settings: {
          slidesToShow: 5,
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
        breakpoint: 480,
        settings: {
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
    <>
      <Header />
      <div className="bg-slickBackground-color mt-10 px-5 lg:px-14 md:px-16 sm:px-5">
        <Slider {...settings}>
          {information.map((info, idx) => (
            <Slides
              idx={idx}
              imageIndex={imageIndex}
              name={info.name}
              status={info.status}
              image={info.image}
            />
          ))}
        </Slider>
      </div>
    </>
  );
};

export default SliderFunction;
