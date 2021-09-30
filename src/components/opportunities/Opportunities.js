import React, { Component } from "react";
import Slider from "react-slick";
import './Item.css'
import image1 from "./OpportunitiesImages/zomato.png";
import image2 from "./OpportunitiesImages/cred.png";
import image3 from "./OpportunitiesImages/ibm.png";
import image4 from "./OpportunitiesImages/l&t_infotech.png";
import image5 from "./OpportunitiesImages/prime_video.png";
import image6 from "./OpportunitiesImages/swiggy.png";
import image7 from "./OpportunitiesImages/groww.png";

export default class SwipeToSlide extends Component {
  render() {
    const settings = {
      className: "center",
      infinite: true,
      centerPadding: "100px",
      leftPadding: "50px",
      slidesToShow: 5,
      swipeToSlide: true,
      autoplay: true,
      autoplaySpeed: 2000,
      afterChange: function(index) {
        console.log(
          `Slider Changed to: ${index + 1}, background:   #f5deb3; color:   #f5deb3`
        );
      }
    };
    return (

      <div id="item-list">
        <h1 id="resources-title" className="text-center font-bold text-topcolor xl:text-4xl lg:text-4xl text-2xl mt-8 pt-8">
        Our <span className="font-bold text-redc" > Resources</span>
        </h1>

        <Slider {...settings}>
          
          <div>
          <div className="inline-block px-3">
            <div className="w-190 h-240 sm:w-210 max-w-xs overflow-hidden rounded-lg  border-2 border-solid border-blue-300 shadow-xl bg-white hover:shadow-2xl transition-shadow duration-300 ease-in-out">
                <img className="rounded w-full h-135 object-contain object-center pl-3 pr-3" src={image1}  alt="Image Size 720x400"/>
                <h3 className="text-lg text-gray-900 font-medium text-center title-font mb-3">Sample Testing</h3>
                <p className="leading-relaxed text-base text-center">
                    <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded shadow-2xl">
                        <a href="#" target="_blank" className="no-underline">Apply Now</a>   
                    </button>
                </p>
            </div>
         </div>
         </div>

         <div>
          <div className="inline-block px-3">
            <div className="w-210 h-240 sm:w-210 max-w-xs overflow-hidden rounded-lg  border-2 border-solid border-blue-300 shadow-xl bg-white hover:shadow-2xl transition-shadow duration-300 ease-in-out">
                <img className="rounded w-full h-135 object-contain object-center pl-3 pr-3" src={image2}  alt="Image Size 720x400"/>
                <h3 className="text-lg text-gray-900 font-medium text-center title-font mb-3">Sample Testing</h3>
                <p className="leading-relaxed text-base text-center">
                    <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded shadow-2xl">
                        <a href="#" target="_blank" className="no-underline">Apply Now</a>   
                    </button>
                </p>
            </div>
         </div>
         </div>

         <div>
          <div className="inline-block px-3">
            <div className="w-210 h-240 sm:w-210 max-w-xs overflow-hidden rounded-lg  border-2 border-solid border-blue-300 shadow-xl bg-white hover:shadow-2xl transition-shadow duration-300 ease-in-out">
                <img className="rounded w-full h-135 object-contain object-center pl-3 pr-3" src={image3}  alt="Image Size 720x400"/>
                <h3 className="text-lg text-gray-900 font-medium text-center title-font mb-3">Sample Testing</h3>
                <p className="leading-relaxed text-base text-center">
                    <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded shadow-2xl">
                        <a href="#" target="_blank" className="no-underline">Apply Now</a>   
                    </button>
                </p>
            </div>
         </div>
         </div>

         <div>
          <div className="inline-block px-3">
            <div className="w-210 h-240 sm:w-210 max-w-xs overflow-hidden rounded-lg  border-2 border-solid border-blue-300 shadow-xl bg-white hover:shadow-2xl transition-shadow duration-300 ease-in-out">
                <img className="rounded w-full h-135 object-contain object-center pl-3 pr-3" src={image4}  alt="Image Size 720x400"/>
                <h3 className="text-lg text-gray-900 font-medium text-center title-font mb-3">Sample Testing</h3>
                <p className="leading-relaxed text-base text-center">
                    <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded shadow-2xl">
                        <a href="#" target="_blank" className="no-underline">Apply Now</a>   
                    </button>
                </p>
            </div>
         </div>
         </div>

         <div>
          <div className="inline-block px-3">
            <div className="w-210 h-240 sm:w-210 max-w-xs overflow-hidden rounded-lg  border-2 border-solid border-blue-300 shadow-xl bg-white hover:shadow-2xl transition-shadow duration-300 ease-in-out">
                <img className="rounded w-full h-135 object-contain object-center pl-3 pr-3" src={image5}  alt="Image Size 720x400"/>
                <h3 className="text-lg text-gray-900 font-medium text-center title-font mb-3">Sample Testing</h3>
                <p className="leading-relaxed text-base text-center">
                    <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded shadow-2xl">
                        <a href="#" target="_blank" className="no-underline">Apply Now</a>   
                    </button>
                </p>
            </div>
         </div>
         </div>

         <div>
          <div className="inline-block px-3">
            <div className="w-210 h-240 sm:w-210 max-w-xs overflow-hidden rounded-lg  border-2 border-solid border-blue-300 shadow-xl bg-white hover:shadow-2xl transition-shadow duration-300 ease-in-out">
                <img className="rounded w-full h-135 object-contain object-center pl-3 pr-3" src={image6}  alt="Image Size 720x400"/>
                <h3 className="text-lg text-gray-900 font-medium text-center title-font mb-3">Sample Testing</h3>
                <p className="leading-relaxed text-base text-center">
                    <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded shadow-2xl">
                        <a href="#" target="_blank" className="no-underline">Apply Now</a>   
                    </button>
                </p>
            </div>
         </div>
         </div>

         <div>
          <div className="inline-block px-3">
            <div className="w-210 h-240 sm:w-210 max-w-xs overflow-hidden rounded-lg  border-2 border-solid border-blue-300 shadow-xl bg-white hover:shadow-2xl transition-shadow duration-300 ease-in-out">
                <img className="rounded w-full h-135 object-contain object-center pl-3 pr-3" src={image7}  alt="Image Size 720x400"/>
                <h3 className="text-lg text-gray-900 font-medium text-center title-font mb-3">Sample Testing</h3>
                <p className="leading-relaxed text-base text-center">
                    <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded shadow-2xl">
                        <a href="#" target="_blank" className="no-underline">Apply Now</a>   
                    </button>
                </p>
            </div>
         </div>
         </div>

        </Slider>
      </div>
    );
  }
}
