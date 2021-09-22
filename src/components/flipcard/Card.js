import React, { useState } from "react";
import "./flipcard.css";
export default function Card({ card }) {
  const [flip, setFlip] = useState(false);
  return (
    <div
      className={`card ${flip ? "flip" : ""}`}
      onClick={() => (flip ? setFlip(false) : flip)}
    >
      <div className="frontside">
        <img className="h-16 w-16 m-auto" src={card.image} alt={card.title} />
        <div className="text-topcolor font-bold m-2">{card.title}</div>
        <button
          className="py-2.5 px-8 cursor-pointer text-white rounded-lg text-sm bg-btncolor hover:bg-btncolor"
          onClick={() => setFlip(!flip)}
        >
          Learn more
        </button>
      </div>
      <div className="backside">{card.content}</div>
    </div>
  );
}
