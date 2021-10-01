import React from "react";
import { FaLinkedin } from "react-icons/fa";
const Slides = ({ name, status, idx, imageIndex, image, linkedin }) => {
  return (
    <div className="xl:mt-10 mb-10 w-full p-2 xl:p-0 lg:p-0 md:p-0 sm:p-0">
      <div
        className={
          idx === imageIndex
            ? "transform scale-90  opacity-100 shadow-2xl bg-white rounded-md"
            : "transform scale-75  transition duration-300 opacity-100 rounded-md shadow-lg  bg-white"
        }
      >
        <div
          className={
            idx === imageIndex
              ? "bg-cover h-70  md:h-52 xl:h-64 w-full rounded-t-md opacity-100"
              : "bg-cover h-70  md:h-52 xl:h-64 w-full rounded-t-md opacity-50 bg-blue-400"
          }
          // style={{ backgroundImage: `url(${image})` }}
        >
          <img src={image} alt={name} className="h-full w-full" />
        </div>
        <div
          class={
            idx === imageIndex
              ? "px-6 py-4 bg-blue-500 rounded-b-md"
              : "px-6 py-4"
          }
        >
          <div
            className={
              idx === imageIndex
                ? "font-bold text-lg  md:text-md lg:text-lg xl:text-lg mb-2 text-center text-white"
                : "font-bold text-lg  md:text-md lg:text-lg xl:text-lg  mb-2 text-center"
            }
          >
            {name}
          </div>
          <p
            className={
              idx === imageIndex
                ? "text-white text-md sm:text-md md:text-sm lg:text-sm xl:text-sm text-center"
                : "text-gray-700 text-md sm:text-md md:text-sm lg:text-sm xl:text-sm text-center"
            }
          >
            {status}
          </p>
          {
            <a
              href={linkedin}
              className={
                idx === imageIndex
                  ? "text-white cursor-pointer"
                  : "text-blue-500 cursor-pointer"
              }
            >
              <FaLinkedin className="w-5 h-5" />
            </a>
          }
        </div>
      </div>
    </div>
  );
};

export default Slides;
