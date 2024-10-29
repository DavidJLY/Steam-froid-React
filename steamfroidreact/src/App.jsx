import React from "react";
import "./style/App.css";
import { Header } from "./Components/Layout";
import { Footer } from "./Components/Layout";
import { About } from "./Components/About";
import { Title } from "./Components/Title";
import { Activities } from "./Components/Activities";
import { CarouselSection } from "./Components/CarouselSection";
import { Engage } from "./Components/Engage";
import { ModalFroid, ModalPlombElec } from "./Components/Modales";

// function App() {
//   return (
//     <div className="container-fluid">
//       <Header />
//       <Title />
//       <About />
//       <Activities />
//       <CarouselSection />
//       <Engage />
//       <Footer />
//     </div>
//   );
// }

function App() {
  return (
    <div className="container-fluid d-flex flex-column">
      <Header />
      <div className="flex-grow-1 col-md-10 content-section">
        <Title />
        <About />
        <Activities />
      </div>
      <div className="fixed-section row justify-content-evenly">
        <ModalFroid />
        <ModalPlombElec />
        <CarouselSection />
      </div>
      <div className="engage-section col-md-10">
        <Engage />
      </div>
      <Footer />
    </div>
  );
}

export default App;
