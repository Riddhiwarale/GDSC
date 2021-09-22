import React, { useState } from "react";
import FlipCardList from "./FlipCardList";
import "./flipcard.css";
import learn from "../../assets/images/OurIdeasImages/learn.png";
import connect from "../../assets/images/OurIdeasImages/connect.png";
import grow from "../../assets/images/OurIdeasImages/grow.png";
import build from "../../assets/images/OurIdeasImages/build.png";

function FlipCard() {
  const [cards, setCards] = useState(CONTENT);
  return (
    <div className="bg-slickBackground m-auto p-4">
      <div className="container">
        <div className="header">
          <h1 className="text-center font-normal text-topcolor xl:text-4xl lg:text-4xl text-2xl">
            Our <span className="font-bold ">Ideas</span>
          </h1>
          <p className="w-full p-3 m-auto text-paracolor text-center text-sm">
            DSC is collaborative event of 100+ DSCs from India, who have joined
            hands to
            <br /> bring together students, developers and communities
            <br /> under the same roof.
          </p>
        </div>
        <div className="max-full  mt-0.5 mb-0.5">
          <FlipCardList cards={cards} />
        </div>
      </div>
    </div>
  );
}
const CONTENT = [
  {
    id: 1,
    image: connect,
    title: "Connect",
    content:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit ullam id officia ratione sint facilis odio quod totam nulla eaque!",
  },

  {
    id: 2,
    image: learn,
    title: "Learn",
    content:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit ullam id officia ratione sint facilis odio quod totam nulla eaque!",
  },

  {
    id: 3,
    image: build,
    title: "Build",
    content:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit ullam id officia ratione sint facilis odio quod totam nulla eaque!",
  },

  {
    id: 4,
    image: grow,
    title: "Grow",
    content:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit ullam id officia ratione sint facilis odio quod totam nulla eaque!",
  },
];

export default FlipCard;
