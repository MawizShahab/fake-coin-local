import AboutUs from "./AboutUs";
import Additional from "./Additional";
import AdditionalContent from "./AdditionalContent";
import "./App.css";
import Header from "./Header";
import HeroContent from "./HeroContent";
import HowToBuy from "./HowToBuy";
import Marquee from "./Marquee";
import Reviews from "./Reviews";
import RugPull from "./RugPull";

function App() {
  return (
    <div className="App">
      <div className="hero-main">
        <div className="hero-container">
          <Header />
          <div className="hero-content-main">
            <HeroContent />
          </div>
          <AdditionalContent />
        </div>
      </div>
      <AboutUs />
      <RugPull />
      <Marquee />
      <Additional />
      <Reviews />
      <HowToBuy />
    </div>
  );
}

export default App;
