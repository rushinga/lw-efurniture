import { useState } from "react";
import Footer from "./components/Footer";
import Header from "./components/Header";
import OurService from "./components/OurService";
import Hero from "./components/Hero";
import Testimonials from "./components/Testimonials";
import AboutUs from "./components/AboutUs";

const App = () => {
  return (
    <>
      <div>
        <Header />
        <Hero />
        <OurService />
        <Testimonials />
        <AboutUs />
        <Footer />{" "}
      </div>
    </>
  );
};
export default App;
