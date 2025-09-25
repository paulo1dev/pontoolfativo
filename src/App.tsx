import React from "react";
import "./App.css";
import Navbar from "./Components/Navbar/Navbar";
import Hero from "./Components/Hero/Hero";
import Collections from "./Components/Collections/Collections";

const App = () => {
  return <div>
    <Navbar />
    <Hero />
    <Collections />
  </div>;
};

export default App;
