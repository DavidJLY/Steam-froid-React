import React from "react";
import "./style/App.css";
import { Header } from "./Components/Layout";
import { Footer } from "./Components/Layout";
import { About } from "./Components/About";
import { Title } from "./Components/Title";
import { Activities } from "./Components/Activities";
import { CarouselSection } from "./Components/CarouselSection";
import { Engage } from "./Components/Engage";

function App() {
  return (
    <div className="container-fluid background">
      <Header />
      <Title />
      <About />
      <Activities />
      <CarouselSection />
      <Engage />
      <Footer />
    </div>
  );
}

export default App;
