import React from "react";
import landingimage from "../../assets/images/LandingImages/landingday.png";
const Landing = () => {
  return (
    <div className="flex flex-col-reverse xl:flex-row lg:flex-row w-full">
      <div className="xl:w-2/4 w-full xl:mt-20 lg:mt-20 mt-5">
        <div className="w-full mb-10 xl:pl-20 lg:pl-10 pl-5">
          <div>
            <p className="font-bold text-sm xl:text-lg lg:text-lg pb-1 xl:pb-2 lg:pb-2 pl-1">
              Our Aim
            </p>
            {/* <h1>
            <span style="color: #ff2442">Converting</span>
            <span style="color: #50cb93">Ideas</span>
            <span style="color: #ffe459">Into</span>
            <span style="color: #3db2ff">Reality</span>
          </h1> */}
            <div className="w-full h-auto block">
              <p className="xl:text-exl lg:text-e2xl text-xl block">
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
          <div className="mt-5 w-11/12 xl:w-4/5 border p-1 rounded-xl text-left feont-bold flex justify-between">
            <input
              type="text"
              name=""
              placeholder="Join us with your email address"
              id=""
              className="xl:w-2/4 w-full lg:w-2/4 font-bold ml-2 text-xs xl:text-lg focus:outline-none"
            />
            <button className="font-bold xl:p-2 lg:p-2 w-32 xl:w-32 xl:rounded-lg lg:rounded-lg rounded-md bg-blue-500 text-white xl:text-md lg:text-md text-sm cursor-pointer">
              Join Now
            </button>
          </div>
        </div>
      </div>
      <div className="xl:w-2/4 w-full">
        <img src={landingimage} alt="" />
      </div>
    </div>
  );
};

export default Landing;
