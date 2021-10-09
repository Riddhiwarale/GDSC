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
      <div>
        {/* <div
          class={
            idx === imageIndex
              ? "px-6 py-4 h-full rounded-md"
              : "px-6 py-4 h-full rounded-md"
          }
        > */}
        <img
          src={event}
          alt="events"
          className={
            idx === imageIndex
              ? "xl:h-eheight lg:h-eheight md:h-mheight h-mheight  transform scale-90 w-full opacity-100 shadow-2xl bg-white rounded-lg"
              : "xl:h-eheight lg:h-eheight md:h-mheight h-mheight  transform scale-75 w-full transition duration-300 opacity-100  shadow-lg  bg-white rounded-lg"
          }
        />
        {/* </div> */}
      </div>
    </div>
  );
};

export default Slides;
