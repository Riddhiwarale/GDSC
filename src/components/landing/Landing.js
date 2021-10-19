import React from "react";

import "./Landing.css";
// import { ReactComponent as Landingimage } from "assets/svg/Copy.svg";

import landingimage from "../../assets/images/LandingImages/idea.jpg";
import { Header } from "components/navbar/Header";
const Landing = () => {
  return (
    <>
      <Header key="header" />
      <div className="flex p-10 sm:p-0 sm:pl-6 flex-col-reverse xl:flex-row lg:flex-row md:flex-row sm:flex-row w-full">
        <div className=" xl:w-2/4 w-full xl:mt-20 lg:mt-20 md:mt-5 sm:mt-5 mt-5">
          <div className=" w-full mb-10 ">
            <p className="font-bold text-sm xl:text-lg lg:text-lg pb-1 xl:pb-2 lg:pb-2 pl-1">
              Our Aim
            </p>

            <div className="w-full h-auto block">
              <p className="xl:text-exl lg:text-exsl sm:text-md md:text-xl  xs:text-mfont  text-lfont block">
                <span className="text-red-core">Converting</span>
                <span className="ml-1 text-green-core">Ideas</span>
                <span className="ml-1 text-yellow-core">into</span>
                <span className="ml-1 text-blue-core">Reality!</span>
              </p>
            </div>
            <div className="w-full mt-3 mb-3 xl:text-lg lg:text-lg md:text-md sm:text-landingfont text-xs pl-1 2xl:pt-5 xl:pt-5 lg:pt-5">
              <p className="flex flex-col xl:text-lg lg:text-lg md:text-sm sm:text-sm text-xs">
                <span className="pb-2">
                  Welcome to the first ever chapter of Google Developer Students
                  Club - VIT. Students develop their skills in this thriving
                  environment and build solutions for organizations and the
                  community.
                </span>

                <span className="pb-2 text-bold">
                  Be a part of this growing community now !
                </span>
              </p>
            </div>

            <div className="mt-5 w-full xl:w-11/12 border p-1 rounded-xl text-left feont-bold flex justify-between 2xl:mt-10 xl:mt-10 lg:mt-10 sm:mt-5">
              <input
                type="text"
                name=""
                placeholder="Enter your Mail ID"
                id=""
                className="xl:w-full w-full lg:w-full p-2 font-bold ml-2 text-sm xl:text-lg lg:text-lg md:text-xs focus:outline-none"
              />
              <button className="font-bold xl:p-1 lg:p-1 w-24 xl:w-32 xl:rounded-lg lg:rounded-lg rounded-md bg-blue-500 text-white xl:text-lg lg:text-md text-join cursor-pointer">
                Join Us
              </button>
            </div>
          </div>
        </div>
        <div
          className="xl:w-2/4 w-full mx-auto max-w-sm block my-auto"
          style={{}}
        >
          <img src={landingimage} alt="" />
          {/* <Landingimage/> */}
        </div>
      </div>
    </>
  );
};

export default Landing;
//Bhagwan uthale
