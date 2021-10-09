import React from "react";
import Slider from "react-slick";
import partners from "../../assets/data/partners";
import "../../App.css";

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

function Partners(props) {
  return (
    <div className="flex flex-col m-2 bg-slickBackground pb-16">
      <h1 className="text-center font-bold text-topcolor xl:text-4xl lg:text-4xl text-2xl mt-8 pt-8">
        Our <span className="font-bold text-redc"> Partners</span>
      </h1>
      <div className="text-center mt-4 xl:place-self-end xl:mr-8 xl:pr-8 lg:place-self-end lg:mr-8 lg:pr-8 ">
        Interested in Partnering?
      </div>
      <div className="text-center xl:place-self-end xl:mr-8 xl:pr-8 lg:place-self-end lg:mr-8 lg:pr-8">
        Contact us:{" "}
        <a href="mailto:gdsc@vit.edu.in" className="text-redc">
          gdsc@vit.edu.in
        </a>
      </div>

      {/* <hr className="m-6" /> */}

      <Slider {...settings}>
        {partners.map((partner) => (
          <div>
            <div className="inline-block px-3" key={partner.id}>
              <div className="w-full h-240  sm:w-210 max-w-xs overflow-hidden rounded-lg  border-2 border-solid border-blue-300 shadow-xl bg-white hover:shadow-2xl transition-shadow duration-300 ease-in-out">
                <img
                  className="rounded w-full h-135 object-contain object-center pl-3 pr-3"
                  src={partner.src}
                  alt={partner.heading}
                />
                <h2 className="text-2xl text-gray-900 font-medium text-center title-font pt-6 mt-6 ">
                  {partner.heading}
                </h2>
                
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
}

export default Partners;
