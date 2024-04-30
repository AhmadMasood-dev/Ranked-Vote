import "./App.css";
import FeatureSection from "./components/Feature_section.jsx";
import Header from "./components/header.jsx";
import Hero from "./components/hero.jsx";
import Organizatons from "./components/organizatons.jsx";
function App() {
  return (
    <>
      <div className="w-full h-screen ">
        <Header />
        <Hero />
        <Organizatons/>
        <FeatureSection/>
      </div>
    </>
  );
}

export default App;
