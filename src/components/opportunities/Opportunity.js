import React from "react";
import "./opportunities.css";
import Opportunities from "./Opportunities";
import opportunities from "../../assets/data/opportunities";
function Opportunity() {
  return (
    <>
      <div className="flex flex-col bg-white"></div>
      <div className="flex flex-wrap w-full mb-4 p-4 ">
        <div className="w-full mb-6 lg:mb-0">
          <h1 className="text-4xl font-medium title-font mb-2 text-red-500">
            Opportunities
          </h1>
          <div className="h-1 w-60 bg-blue-500 rounded" />
        </div>
      </div>
      <div className="flex overflow-x-scroll pb-10 hide-scroll-bar">
        <div className="flex flex-nowrap lg:ml-20 md:ml-20 ml-0">
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
