import React from "react";
import landingimage from "../../assets/images/LandingImages/landingday.png";
const Landing = () => {
  return (
    <div>
      <div className="container">
        <div className="flex flex-col-reverse xl:flex-row lg:flex-row md:flex-row sm:flex-row w-full">
          <div className="xl:w-2/4 w-full xl:mt-20 lg:mt-20 md:mt-20 sm:mt-10 mt-5">
            <div className="w-full mb-10 ">
              <div>
                <p className="font-bold text-sm xl:text-lg lg:text-lg pb-1 xl:pb-2 lg:pb-2 pl-1">
                  Our Aim
                </p>

                <div className="w-full h-auto block">
                  <p className="xl:text-exl lg:text-e2xl text-gfont block">
                    <span className="text-redc">Converting</span>
                    <span className="ml-1 text-greenc">Ideas</span>
                    <span className="ml-1 text-yellowc">into</span>
                    <span className="ml-1 text-bluec">Reality !</span>
                  </p>
                </div>
                <div className="w-full mt-3 mb-3 xl:text-xl lg:text-xl text-xs pl-1">
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
                  className="xl:w-full w-full lg:w-full p-2 font-bold ml-2 text-join xl:text-lg lg:text-lg focus:outline-none"
                />
                <button className="font-bold xl:p-1 lg:p-1 w-24 xl:w-32 xl:rounded-lg lg:rounded-lg rounded-md bg-blue-500 text-white xl:text-lg lg:text-md text-join cursor-pointer">
                  Join Now
                </button>
              </div>
            </div>
          </div>
          <div className="xl:w-2/4 w-full md:pt-10 sm:pt-5">
            <img src={landingimage} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Landing;
