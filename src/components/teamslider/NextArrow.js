import React from "react";
import { FaArrowRight } from "react-icons/fa";
const NextArrow = ({ onClick }) => {
  return (
    <div
      className="bg-slickBackground-color absolute cursor-pointer z-10 top-1/2 right-0"
      onClick={onClick}
    >
      <FaArrowRight />
    </div>
  );
};

export default NextArrow;
