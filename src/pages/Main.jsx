import OurSpeciality from "components/OurSpeciality";
import React from "react";
import Header from "components/Header";
import Hero from "components/Hero";
import About from "components/About";
import CoreValue from "components/CoreValue";
import Footer from "components/Footer";

export default function Main() {
  return (
    <>
      <Header />
      <Hero />
      <About />
      <CoreValue />
      <OurSpeciality />
      <Footer />
    </>
  );
}
