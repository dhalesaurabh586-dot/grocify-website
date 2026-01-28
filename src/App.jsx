import React from "react";
import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import Category from "./components/Category/Category";
import Values from "./components/Values/Values";
import Products from "./components/Products/Products";
import Discount from "./components/Discount/Discount";
import Process from "./components/Process/Process";
import Testimonials from "./components/Testimonials/Testimonials";
import Footer from "./components/Footer/Footer";

const App = () => {

  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <Hero />
      <Category />
      <Values />
      <Products />
      <Discount />
      <Process />
      <Testimonials />
      <Footer />
    </div>
  );
};

export default App;