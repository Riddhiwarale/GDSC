import React from "react";
const Slides = ({ name, status, idx, imageIndex, image }) => {
  return (
    <div className="mt-10 mb-10">
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
              ? "bg-cover h-96 sm:h-60 md:h-52 xl:h-72 w-full rounded-t-md opacity-100"
              : "bg-cover h-96 sm:h-60 md:h-52 xl:h-72 w-full rounded-t-md opacity-50 bg-blue-400"
          }
          // style={{ backgroundImage: `url(${image})` }}
        >
          <img src={image} alt={name} className="h-full  w-full" />
        </div>
        <div
          class={
            idx === imageIndex
              ? "px-6 py-4 bg-blue-500 rounded-b-md"
              : "px-6 py-4"
          }
        >
          <div class="font-bold text-xl mb-2 text-center">{name}</div>
          <p class="text-gray-700 text-base text-center">{status}</p>
        </div>
      </div>
    </div>
  );
};

export default Slides;
