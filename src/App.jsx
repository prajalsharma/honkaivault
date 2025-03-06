import Header from "./components/Header";
import Hero from "./components/Hero";
import LogoCarousel from "./components/LogoCarousel";

function App() {
  return (
    <>
      <Header />
      <main className="pb-20">
        <Hero />
        <LogoCarousel />
      </main>
    </>
  );
}

export default App;
