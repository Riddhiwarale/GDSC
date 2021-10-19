import "./App.css";
import Slider from "./components/teamslider/Slider";
import Flipcard from "./components/flipcard/FlipCard";
import Landing from "./components/landing/Landing";
import Partners from "./components/partners/Partners";
import Events from "./components/events/EventSlider";
import Footer from "./components/footer/FooterGrid";
import Opportunities from "./components/opportunities/Opportunities";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
function App() {
  return (
    <>
      <Landing />

      <Flipcard />
      <Slider />
      <Events />

      <Opportunities />
      <Partners />
      <Footer />
    </>
  );
}

export default App;

/* 
  TODO: @footer Community Guidelines
  TODO: @ALL Google Sans Font
*/
