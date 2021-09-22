import React from "react";
import Card from "./Card";
import "./flipcard.css";
export default function FlipCardList({ cards }) {
  return (
    <div className="grid justify-center items-center grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-4">
      {cards.map((card) => {
        return <Card card={card} key={card.id} />;
      })}
    </div>
  );
}
