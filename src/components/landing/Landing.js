import React from "react";
import landingimage from "../../assets/images/LandingImages/landingday.png";
import jQuery from "jquery";
import './Landing.css';
const Landing = () => {
  jQuery(document).ready(function () {
		jQuery(".container-wrap").append(
			"<ul class='circles'><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li></ul>"
		);
	});

  return (
    <div>
      <div className="container" style={{ paddingTop: "3rem" }}>
      <ul class='circles'>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
        </ul>
        <div className="flex flex-col-reverse xl:flex-row lg:flex-row md:flex-row sm:flex-row w-full">


          <div className="xl:w-2/4 w-full xl:mt-20 lg:mt-20 md:mt-5 sm:mt-5 mt-5">
            <div className="w-full mb-10 ">
              
              <div>
                
                <p className="font-bold text-sm xl:text-lg lg:text-lg pb-1 xl:pb-2 lg:pb-2 pl-1">
                  Our Aim
                </p>

                <div className="w-full h-auto block">
                
                  <p className="xl:text-exl lg:text-exsl sm:text-md md:text-xl  xs:text-mfont  text-lfont block">
                    <span className="text-redc">Converting</span>
                    <span className="ml-1 text-greenc">Ideas</span>
                    <span className="ml-1 text-yellowc">into</span>
                    <span className="ml-1 text-bluec">Reality!</span>
                  </p>
                </div>
                <div className="w-full mt-3 mb-3 xl:text-lg lg:text-lg sm:text-xs text-xs pl-1">
                  <p>
                    Google Developer Student Club Vit
                    <br />
                    is community of students from all undergraduate
                    <br />
                    or graduate programs with an internet and
                    <br />
                    growing as a developer are welcome
                  </p>
                </div>
              </div>
              <div className="mt-5 w-full xl:w-11/12 border p-1 rounded-xl text-left feont-bold flex justify-between">
                <input
                  type="text"
                  name=""
                  placeholder="Join us with your email address"
                  id=""
                  className="xl:w-full w-full lg:w-full p-2 font-bold ml-2 text-sm xl:text-lg lg:text-lg md:text-xs focus:outline-none"
                />
                <button className="font-bold xl:p-1 lg:p-1 w-24 xl:w-32 xl:rounded-lg lg:rounded-lg rounded-md bg-blue-500 text-white xl:text-lg lg:text-md text-join cursor-pointer">
                  Join Now
                </button>
              </div>
            </div>
          </div>
          <div className="xl:w-2/4 w-full  block my-auto" style={{}}>
            <img src={landingimage} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Landing;
