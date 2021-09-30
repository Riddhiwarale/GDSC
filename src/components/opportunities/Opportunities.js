import React from "react";
import "./opportunities.css";
function Opportunities({ image, title, opp_url }) {
  return (
    <div className="inline-block px-3  pt-3">
      <div className="w-210 h-240 sm:w-260  max-w-xs overflow-hidden rounded-lg  border-2 border-solid border-blue-300 shadow-xl bg-white hover:shadow-2xl transition-shadow duration-300 ease-in-out">
        <img
          className="rounded w-full h-135 object-contain object-center pl-3 pr-3"
          src={image}
          alt="Image Size 720x400"
        />
        <h3 className="text-lg text-gray-900 font-medium text-center title-font mb-3">
          {title}
        </h3>
        <p className="leading-relaxed text-base text-center">
          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-lg shadow-2xl">
            <a href={opp_url} target="_blank" className="no-underline">
              Apply Now
            </a>
          </button>
        </p>
      </div>
    </div>
  );
}

export default Opportunities;
