import "./App.css";
import Slider from "./components/teamslider/Slider";
import Navbar from "./components/navbar/Header";
import Flipcard from "./components/flipcard/FlipCard";
import Opportunities from "./components/opportunities/Opportunity";
import Landing from "./components/landing/Landing";
import Partners from "./components/partners/Partners";
import Events from "./components/events/EventSlider";
import Footer from "./components/footer/FooterGrid";
function App() {
  return (
    <>
      <Navbar />
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
