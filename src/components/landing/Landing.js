import React from "react";
import landingimage from "../../assets/svg/Logo.svg";
const Landing = () => {
  return (
    <div className="w-full 2xl:h-landingPage xl:h-landingPage lg:h-landingPage md:h-landingPage sm:h-landingPage h-landingPage">
      <div className="container">
        <div className="flex flex-col-reverse xl:flex-row lg:flex-row md:flex-col-reverse  w-full 2xl:pt-10 xl:pt-10 lg:pt-10 sm:pt-16 pt-20">
          <div className="xl:w-2/4 w-full 2xl:mt-32 xl:mt-32 lg:mt-32 sm:mt-10">
            <div className="w-full mb-10 ">
              <div className="flex flex-col justify-center align-center">
                <p className="font-bold text-sm xl:text-lg lg:text-lg sm:text-md pb-1 xl:pb-2 lg:pb-2 pl-1 2xl:pt-10 xl:pt-10 lg:pt-10 ">
                  Our Aim
                </p>

                <div className="w-full h-auto block 2xl:pt-5 xl:pt-5 lg:pt-5 ">
                  <p className="xl:text-exl lg:text-exsl sm:text-exsl md:text-exsl  xs:text-mfont  text-lfont block">
                    <span className="text-redc">Converting</span>
                    <span className="ml-1 text-greenc">Ideas</span>
                    <span className="ml-1 text-yellowc">into</span>
                    <span className="ml-1 text-bluec">Reality!</span>
                  </p>
                </div>
                <div className="w-full mt-3 mb-3 xl:text-lg lg:text-lg md:text-md sm:text-landingfont text-xs pl-1 2xl:pt-5 xl:pt-5 lg:pt-5">
                  <p className="flex flex-col xl:text-lg lg:text-lg md:text-sm sm:text-sm text-xs">
                    <span className="pb-2">
                      Google Developer Student Club Vit
                    </span>
                    <span className="pb-2">
                      is community of students from all undergraduate or
                      graduate
                    </span>
                    <span className="pb-2">
                      programs with an internet and growing as a developer are
                    </span>
                    <span className="pb-2">welcome</span>
                  </p>
                </div>
              </div>
              <div className="mt-5 w-full xl:w-11/12 border p-1 rounded-xl text-left feont-bold flex justify-between 2xl:mt-10 xl:mt-10 lg:mt-10 sm:mt-5">
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
          <div className=" w-full  block my-auto 2xl:pt-20 xl:pt-20 ">
            <img
              src={landingimage}
              alt="Landing"
              className="w-full xl:h-lheight lg:h-lheight md:h-mheight sm:h-mheight"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Landing;
