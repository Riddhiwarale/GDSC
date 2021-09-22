import React from "react";
import { FaArrowLeft } from "react-icons/fa";
const PrevArrow = ({ onClick }) => {
  return (
    <div
      className="bg-slickBackground-color absolute cursor-pointer z-10 top-1/2 left-0"
      onClick={onClick}
    >
      <FaArrowLeft />
    </div>
  );
};

export default PrevArrow;
