import React from "react";
const Slides = ({ name, status, idx, imageIndex, image }) => {
  return (
    <div className="xl:mt-10 mb-10 xl:w-60 w-full">
      <div
        className={
          idx === imageIndex
            ? "transform scale-75 opacity-100 shadow-lg bg-white rounded-md"
            : "transform scale-50 transition duration-300 opacity-100 rounded-md shadow-lg  bg-white"
        }
      >
        <div
          className={
            idx === imageIndex
              ? "bg-cover h-70 sm:h-60 md:h-52 xl:h-56 w-full rounded-t-md opacity-100"
              : "bg-cover h-70 sm:h-60 md:h-52 xl:h-56 w-full rounded-t-md opacity-50 bg-blue-400"
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
                ? "font-bold text-xl mb-2 text-center text-white"
                : "font-bold text-xl mb-2 text-center"
            }
          >
            {name}
          </div>
          <p
            className={
              idx === imageIndex
                ? "text-white text-base text-center"
                : "text-gray-700 text-base text-center"
            }
          >
            {status}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Slides;
