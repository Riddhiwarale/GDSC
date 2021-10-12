import React from "react";
const Slides = ({ idx, imageIndex, event }) => {
  return (
    <img
      className={`max-h-full transform shadow transition duration-300 xl:mt-10 ${
        idx === imageIndex ? "scale-90" : "scale-75 "
      }`}
      src={event}
      alt="events"
    />
  );
};

export default Slides;
