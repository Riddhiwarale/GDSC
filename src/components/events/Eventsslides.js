import React from "react";
const Slides = ({ idx, imageIndex, event }) => {
  return (
    <div
      className={
        idx === imageIndex
          ? "xl:mt-10 mb-10 w-full p-2 xl:p-0 lg:p-0 md:p-0 sm:p-0  rounded-md "
          : " xl:mt-10 mb-10 w-full p-2 xl:p-0 lg:p-0 md:p-0 sm:p-0 rounded-md"
      }
    >
      <div
        className={
          idx === imageIndex
            ? "h-eheight  transform scale-90  opacity-100 shadow-2xl bg-white"
            : "h-eheight transform scale-75  transition duration-300 opacity-100  shadow-lg  bg-white"
        }
      >
      <img src={event}  alt="events" /> 
      </div>
    </div>
  );
};

export default Slides;
