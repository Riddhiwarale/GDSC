import "./App.css";
import Slider from "./components/teamslider/Slider";
import Navbar from "./components/navbar/Header";
import Flipcard from "./components/flipcard/FlipCard";
import Landing from "./components/landing/Landing";
import Partners from "./components/partners/Partners";
import Events from "./components/events/Events";
import Footer from "./components/footer/FooterGrid";
import SwipeToSlide from "./components/opportunities/Opportunities";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
function App() {
  return (
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
  );
}

export default App;
