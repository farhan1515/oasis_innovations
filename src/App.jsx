import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Services from "./components/Services";
import Careers from "./components/Careers";
import Contact from "./components/contact";
import Footer from "./components/footer";

function App() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <About />
      <Services />
      <Careers />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
