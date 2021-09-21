import React from "react";
import Carousel from "react-elastic-carousel";
import partners from "../../assets/data/partners";
import "../../App.css";

/* React Elastic Carousel Settings */
// Breakpoints:
const breakPoints = [
  { width: 1, itemsToShow: 1 },
  { width: 550, itemsToShow: 1 },
  { width: 850, itemsToShow: 3 },
  { width: 1150, itemsToShow: 4, itemsToScroll: 2 },
  { width: 1450, itemsToShow: 5 },
  { width: 1750, itemsToShow: 6 },
];

function Partners(props) {
  return (
    <div className="flex flex-col">
      <h1 className="text-center font-normal text-topcolor xl:text-4xl lg:text-4xl text-2xl mt-8 pt-8">
        Our <span className="font-bold ">Product Partners</span>
      </h1>
      <div className="text-center mt-4 xl:place-self-end xl:mr-8 xl:pr-8 lg:place-self-end lg:mr-8 lg:pr-8 ">
        Interested in Partnering?
      </div>
      <div className="text-center xl:place-self-end xl:mr-8 xl:pr-8 lg:place-self-end lg:mr-8 lg:pr-8">
        Contact us:{" "}
        <a href="mailto:gdsc@vit.edu.in" className="text-bluec">
          gdsc@vit.edu.in
        </a>
      </div>

      <hr className="m-6" />

      <div className="flex flex-nowrap lg:ml-10 md:ml-10 ml-0 max-w-full">
        <Carousel breakPoints={breakPoints}>
          {partners.map((partner) => (
            <div key={partner.id}>
              <img
                src={partner.src}
                alt={partner.alt}
                style={{ height: "100px" }}
              />
            </div>
          ))}
        </Carousel>
      </div>

      <hr className="m-6" />
    </div>
  );
}

export default Partners;
