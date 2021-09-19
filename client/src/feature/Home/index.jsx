import React from "react";
import MouseRing from "components/MouseRing";
import Header from "./components/HomePart/Header";
import Navbar from "./components/HomePart/Navbar";
import EffectWrap from "./components/HomePart/EffectWrap";
import HomeSection from "./MainPage/HomeSection";
export default function Home() {
  return (
    <div className="section">
      <header className="header">
        <Header />
      </header>
      <nav className="nav-menu">
        <Navbar />
      </nav>
      <div className="fade-out-effect"></div>
      <section className="home-section" id="home">
        <div className="effect-wrap">
          <EffectWrap />
        </div>
        <div className="container">
          <div className="row full-screen align-items-center">
            <HomeSection />
          </div>
        </div>
      </section>
      <MouseRing />
    </div>
  );
}
