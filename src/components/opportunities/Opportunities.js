import React, { Component } from "react";
import Slider from "react-slick";
import opportunities from "../../assets/data/opportunities";
import "./Item.css";

const Opportunites = () => {
  const settings = {
    className: "center",
    infinite: true,
    centerPadding: "100px",
    leftPadding: "50px",
    slidesToShow: 5,
    swipeToSlide: true,
    autoplay: true,
    autoplaySpeed: 2000,
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
        breakpoint: 500,
        settings: {
          dots: false,
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1,
        },
      },
    ],
    afterChange: function (index) {
      console.log(
        `Slider Changed to: ${index + 1
        }, background:   #f5deb3; color:   #f5deb3`
      );
    },
  };
  return (
    <div id="item-list">
      <h1
        id="resources-title"
        className="text-center font-bold text-topcolor xl:text-4xl lg:text-4xl text-2xl mt-8 pt-8"
      >
        Our <span className="font-bold text-bluec"> Opportunites</span>
      </h1>

      <Slider {...settings}>
        {opportunities.map((opportunity) => (
          <div>
            <div className="inline-block px-3" key={opportunity.id}>
              <div className="w-full h-240  sm:w-210 max-w-xs overflow-hidden rounded-lg  border-2 border-solid border-blue-300 shadow-xl bg-white hover:shadow-2xl transition-shadow duration-300 ease-in-out">
                <img
                  className="rounded w-full h-135 object-contain object-center pl-3 pr-3"
                  src={opportunity.src}
                  alt={opportunity.heading}
                />
                <h3 className="text-lg text-gray-900 font-medium text-center title-font mb-3">
                  {opportunity.heading}
                </h3>
                <p className="leading-relaxed text-base text-center">
                  <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded shadow-2xl">
                    <a
                      href={opportunity.link}
                      target="_blank"
                      className="no-underline"
                      rel="noreferrer"
                    >
                      Apply Now
                    </a>
                  </button>
                </p>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Opportunites;
