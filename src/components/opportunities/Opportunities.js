import React, { Component } from "react";
import Slider from "react-slick";
import "./Item.css";
import image1 from "./OpportunitiesImages/google.svg";
import image2 from "./OpportunitiesImages/firebase.svg";
import image3 from "./OpportunitiesImages/microsoft.svg";
import image4 from "./OpportunitiesImages/kaggle.svg";
import image5 from "./OpportunitiesImages/javascript.svg";
import image6 from "./OpportunitiesImages/lockup.svg";
import image7 from "./OpportunitiesImages/angular.svg";
import image8 from "./OpportunitiesImages/tensorflow.svg";

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
        `Slider Changed to: ${
          index + 1
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
        <div>
          <div className="inline-block px-3">
            <div className="w-full h-240  sm:w-210 max-w-xs overflow-hidden rounded-lg  border-2 border-solid border-blue-300 shadow-xl bg-white hover:shadow-2xl transition-shadow duration-300 ease-in-out">
              <img
                className="rounded w-full h-135 object-contain object-center pl-3 pr-3"
                src={image8}
                alt="Image Size 720x400"
              />
              <h3 className="text-lg text-gray-900 font-medium text-center title-font mb-3">
                Tenserflow
              </h3>
              <p className="leading-relaxed text-base text-center">
                <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded shadow-2xl">
                  <a
                    href="https://developers.google.com/learn/pathways/tensorflow?hl=en#quiz-/learn/pathways/quizzes/tensorflow/tensorflow-for-developers"
                    target="_blank"
                    className="no-underline"
                  >
                    Apply Now
                  </a>
                </button>
              </p>
            </div>
          </div>
        </div>

        <div>
          <div className="inline-block px-3">
            <div className="w-full h-240 sm:w-210 max-w-xs overflow-hidden rounded-lg  border-2 border-solid border-blue-300 shadow-xl bg-white hover:shadow-2xl transition-shadow duration-300 ease-in-out">
              <img
                className="rounded w-full h-135 object-contain object-center pl-3 pr-3"
                src={image2}
                alt="Image Size 720x400"
              />
              <h3 className="text-lg text-gray-900 font-medium text-center title-font mb-3">
                Firebase for Flutter
              </h3>
              <p className="leading-relaxed text-base text-center">
                <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded shadow-2xl">
                  <a
                    href=" https://firebase.google.com/learn/pathways/firebase-flutter?hl=en"
                    target="_blank"
                    className="no-underline"
                  >
                    Apply Now
                  </a>
                </button>
              </p>
            </div>
          </div>
        </div>

        <div>
          <div className="inline-block px-3">
            <div className="w-full h-240  sm:w-210 max-w-xs overflow-hidden rounded-lg  border-2 border-solid border-blue-300 shadow-xl bg-white hover:shadow-2xl transition-shadow duration-300 ease-in-out">
              <img
                className="rounded w-full h-135 object-contain object-center pl-3 pr-3"
                src={image3}
                alt="Image Size 720x400"
              />
              <h3 className="text-lg text-gray-900 font-medium text-center title-font mb-3">
                Web Dev for beginners
              </h3>
              <p className="leading-relaxed text-base text-center">
                <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded shadow-2xl">
                  <a
                    href="https://github.com/microsoft/Web-Dev-For-Beginners"
                    target="_blank"
                    className="no-underline"
                  >
                    Apply Now
                  </a>
                </button>
              </p>
            </div>
          </div>
        </div>
        <div>
          <div className="inline-block px-3">
            <div className="w-full h-240 sm:w-210 max-w-xs overflow-hidden rounded-lg  border-2 border-solid border-blue-300 shadow-xl bg-white hover:shadow-2xl transition-shadow duration-300 ease-in-out">
              <img
                className="rounded w-full h-135 object-contain object-center pl-3 pr-3"
                src={image1}
                alt="Image Size 720x400"
              />
              <h3 className="text-lg text-gray-900 font-medium text-center title-font mb-3">
                Image classification
              </h3>
              <p className="leading-relaxed text-base text-center">
                <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded shadow-2xl">
                  <a
                    href="https://developers.google.com/learn/pathways/going-further-image-classification?hl=en"
                    target="_blank"
                    className="no-underline"
                  >
                    Apply Now
                  </a>
                </button>
              </p>
            </div>
          </div>
        </div>

        <div>
          <div className="inline-block px-3">
            <div className="w-full h-240 sm:w-210 max-w-xs overflow-hidden rounded-lg  border-2 border-solid border-blue-300 shadow-xl bg-white hover:shadow-2xl transition-shadow duration-300 ease-in-out">
              <img
                className="rounded w-full h-135 object-contain object-center pl-3 pr-3"
                src={image4}
                alt="Image Size 720x400"
              />
              <h3 className="text-lg text-gray-900 font-medium text-center title-font mb-3">
                Intro to ML
              </h3>
              <p className="leading-relaxed text-base text-center">
                <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded shadow-2xl">
                  <a
                    href="https://github.com/microsoft/Web-Dev-For-Beginners"
                    target="_blank"
                    className="no-underline"
                  >
                    Apply Now
                  </a>
                </button>
              </p>
            </div>
          </div>
        </div>

        <div>
          <div className="inline-block px-3">
            <div className="w-full h-240 sm:w-210 max-w-xs overflow-hidden rounded-lg  border-2 border-solid border-blue-300 shadow-xl bg-white hover:shadow-2xl transition-shadow duration-300 ease-in-out">
              <img
                className="rounded w-full h-135 object-contain object-center pl-3 pr-3"
                src={image5}
                alt="Image Size 720x400"
              />
              <h3 className="text-lg text-gray-900 font-medium text-center title-font mb-3">
                Learn Javascript
              </h3>
              <p className="leading-relaxed text-base text-center">
                <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded shadow-2xl">
                  <a
                    href=" https://learnjavascript.online/"
                    target="_blank"
                    className="no-underline"
                  >
                    Apply Now
                  </a>
                </button>
              </p>
            </div>
          </div>
        </div>

        <div>
          <div className="inline-block px-3">
            <div className="w-full h-240  sm:w-210 max-w-xs overflow-hidden rounded-lg  border-2 border-solid border-blue-300 shadow-xl bg-white hover:shadow-2xl transition-shadow duration-300 ease-in-out">
              <img
                className="rounded w-full h-135 object-contain object-center pl-3 pr-3"
                src={image7}
                alt=" Size 720x400"
              />
              <h3 className="text-lg text-gray-900 font-medium text-center title-font mb-3">
                Angular Cross Platform
              </h3>
              <p className="leading-relaxed text-base text-center">
                <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded shadow-2xl">
                  <a
                    href="https://developers.google.com/learn/pathways/cross-platform-apps-with-angular?hl=en"
                    target="_blank"
                    className="no-underline"
                  >
                    Apply Now
                  </a>
                </button>
              </p>
            </div>
          </div>
        </div>
        <div>
          <div className="inline-block px-3">
            <div className="w-full h-240  sm:w-210 max-w-xs overflow-hidden rounded-lg  border-2 border-solid border-blue-300 shadow-xl bg-white hover:shadow-2xl transition-shadow duration-300 ease-in-out">
              <img
                className="rounded w-full h-135 object-contain object-center pl-3 pr-3"
                src={image6}
                alt="Image Size 720x400"
              />
              <h3 className="text-lg text-gray-900 font-medium text-center title-font mb-3">
                Codelabs
              </h3>
              <p className="leading-relaxed text-base text-center">
                <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded shadow-2xl">
                  <a
                    href="https://codelabs.developers.google.com/"
                    target="_blank"
                    className="no-underline"
                  >
                    Apply Now
                  </a>
                </button>
              </p>
            </div>
          </div>
        </div>

        {/* <div>
          <div className="inline-block px-3">
            <div className="w-210 h-240 sm:w-210 max-w-xs overflow-hidden rounded-lg  border-2 border-solid border-blue-300 shadow-xl bg-white hover:shadow-2xl transition-shadow duration-300 ease-in-out">
              <img
                className="rounded w-full h-135 object-contain object-center pl-3 pr-3"
                src={image1}
                alt="Image Size 720x400"
              />
              <h3 className="text-lg text-gray-900 font-medium text-center title-font mb-3">
                Sample Testing
              </h3>
              <p className="leading-relaxed text-base text-center">
                <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded shadow-2xl">
                  <a href="#" target="_blank" className="no-underline">
                    Apply Now
                  </a>
                </button>
              </p>
            </div>
          </div>
        </div>

        <div>
          <div className="inline-block px-3">
            <div className="w-210 h-240 sm:w-210 max-w-xs overflow-hidden rounded-lg  border-2 border-solid border-blue-300 shadow-xl bg-white hover:shadow-2xl transition-shadow duration-300 ease-in-out">
              <img
                className="rounded w-full h-135 object-contain object-center pl-3 pr-3"
                src={image1}
                alt="Image Size 720x400"
              />
              <h3 className="text-lg text-gray-900 font-medium text-center title-font mb-3">
                Sample Testing
              </h3>
              <p className="leading-relaxed text-base text-center">
                <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded shadow-2xl">
                  <a href="#" target="_blank" className="no-underline">
                    Apply Now
                  </a>
                </button>
              </p>
            </div>
          </div>
        </div>

        <div>
          <div className="inline-block px-3">
            <div className="w-210 h-240 sm:w-210 max-w-xs overflow-hidden rounded-lg  border-2 border-solid border-blue-300 shadow-xl bg-white hover:shadow-2xl transition-shadow duration-300 ease-in-out">
              <img
                className="rounded w-full h-135 object-contain object-center pl-3 pr-3"
                src={image1}
                alt="Image Size 720x400"
              />
              <h3 className="text-lg text-gray-900 font-medium text-center title-font mb-3">
                Sample Testing
              </h3>
              <p className="leading-relaxed text-base text-center">
                <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded shadow-2xl">
                  <a href="#" target="_blank" className="no-underline">
                    Apply Now
                  </a>
                </button>
              </p>
            </div>
          </div>
        </div>

        <div>
          <div className="inline-block px-3">
            <div className="w-210 h-240 sm:w-210 max-w-xs overflow-hidden rounded-lg  border-2 border-solid border-blue-300 shadow-xl bg-white hover:shadow-2xl transition-shadow duration-300 ease-in-out">
              <img
                className="rounded w-full h-135 object-contain object-center pl-3 pr-3"
                src={image1}
                alt="Image Size 720x400"
              />
              <h3 className="text-lg text-gray-900 font-medium text-center title-font mb-3">
                Sample Testing
              </h3>
              <p className="leading-relaxed text-base text-center">
                <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded shadow-2xl">
                  <a href="#" target="_blank" className="no-underline">
                    Apply Now
                  </a>
                </button>
              </p>
            </div>
          </div>
        </div> */}
      </Slider>
    </div>
  );
};

export default Opportunites;
