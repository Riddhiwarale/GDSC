import React from "react";
import "./opportunities.css";
import Opportunities from "./Opportunities";
import opportunities from "../../assets/data/opportunities";
function Opportunity() {
  return (
    <>
      <div className="flex flex-col bg-white"></div>
      <div className="flex flex-wrap w-full  p-4 bg-slickBackground">
        <div className="w-full lg:mb-0">
          <h1 className="text-center font-normal text-topcolor xl:text-4xl lg:text-4xl text-2xl">
            Opportunities
          </h1>
        </div>
      </div>
      <div className="flex overflow-x-scroll pb-10 hide-scroll-bar bg-slickBackground">
        <div className="flex flex-nowrap lg:ml-10 md:ml-10 ml-0">
          {opportunities.map((opp) => (
            <Opportunities
              key={opp.id}
              image={opp.image}
              title={opp.title}
              opp_url={opp.url}
            />
          ))}
        </div>
      </div>
    </>
  );
}

export default Opportunity;
