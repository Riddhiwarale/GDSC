import "./App.css";
import Slider from "./components/teamslider/Slider";
import Navbar from "./components/navbar/Navbar";
import Flipcard from "./components/flipcard/FlipCard";
import Opportunities from "./components/opportunities/Opportunity";
function App() {
  return (
    <>
      {/* <Navbar /> */}
      <Flipcard />
      <Slider />
      <Opportunities />
    </>
  );
}

export default App;
