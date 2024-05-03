import Header from "./components/header.jsx";
import Hero from "./components/hero.jsx";
import Organizatons from "./components/organizations.jsx";
import Part from "./components/organizationsDemo.jsx";
import FeatureSection from "./components/featureSection.jsx";
import PictureData from "./components/pictureData.jsx";
import VotersRank from "./components/votersRank.jsx";
import Cta from "./components/cta.jsx";
import Footer from "./components/footer.jsx";
import Slider from "./components/slider.jsx";
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
        <Slider />
        <Statistic />
        <Cta />
        <Footer />
      </div>
    </>
  );
}

export default App;
