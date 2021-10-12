import "./App.css";
import Slider from "./components/teamslider/Slider";
import Navbar from "./components/navbar/Header";
import Flipcard from "./components/flipcard/FlipCard";
import Landing from "./components/landing/Landing";
import Partners from "./components/partners/Partners";
import Events from "./components/events/EventSlider";
import Footer from "./components/footer/FooterGrid";
import SwipeToSlide from "./components/opportunities/Opportunities";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import React, { useEffect, useState } from "react";
import Loader from "./components/loader/loader";


function App() {
 
   const [loading, setLoading] = useState(false)

  useEffect(() => {
    setLoading(true)
    setTimeout(() => {
      setLoading(false)
      
    }, 3500);

    } , [] )
  

  return (
    
    <>
    <div >
      {
        loading ?

        <Loader/>

        :
      <>
       <Navbar />
      <Landing />

      <Flipcard />
      <Slider />
      <Events />

      <SwipeToSlide />
      <Partners />
      <Footer />
      </>
         
      }
    
    </div>

    </>
  );
}

export default App;
