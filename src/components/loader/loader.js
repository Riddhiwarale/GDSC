import React, { createRef, useEffect } from "react";
import lottie from "lottie-web";
import animation from "../../assets/animation/loader.json";

const Loader = () => {
  let animationContainer = createRef();

  useEffect(() => {
    lottie.loadAnimation({
      container: animationContainer.current,
      animationData: animation,
    });
  }, [animationContainer]);

  return <div ref={animationContainer} key="loaderJSON" />;
};

export default Loader;
