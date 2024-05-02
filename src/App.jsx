import "./App.css";
import FeatureSection from "./components/featureSection.jsx";
import Header from "./components/header.jsx";
import Hero from "./components/hero.jsx";
import Organizatons from "./components/organizatons.jsx";
import Part from "./components/organizatonsPart2.jsx";
import PictureData from "./components/pictureData.jsx";
import VotersRank from "./components/votersRank.jsx";
import Cta from "./components/cta.jsx";
import Footer from "./components/footer.jsx";
// import Slider from './components/slider.jsx'
import Statistic from "./components/statistic.jsx";
function App() {
  return (
    <>
      <div className="w-full h-screen ">
        <Header />
        <Hero />
        <Organizatons />
        <Part />
        <FeatureSection />
        <PictureData />
        <VotersRank />
        <Statistic />
        <Cta />
        <Footer />
      </div>
    </>
  );
}

export default App;
