import AboutUs from "./components/AboutUs";
import DashboardSection from "./components/DashboardSection";
import Header from "./components/Header";
import Hero from "./components/Hero";
import LogoCarousel from "./components/LogoCarousel";
import Services from "./components/Services";
import TrackRecord from "./components/TrackRecord";

function App() {
  return (
    <>
      <Header />
      <main className="pb-20">
        <Hero />
        <div className="text-center mt-14">
          <h2 className="font-bold text-xl text-white">We’ve successfully secured funding from </h2>
          <LogoCarousel />
        </div>
        <DashboardSection />
        <Services />
        <AboutUs />
        {/* <TrackRecord /> */}
      </main>
    </>
  );
}

export default App;
