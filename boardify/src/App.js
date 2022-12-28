import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import About from "./components/About";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import FinishedTasks from "./components/FinishedTasks";

function App() {
  return (
    <div className="app text-black dark:text-white bg-neutral-100 dark:bg-neutral-900">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/finished" element={<FinishedTasks />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
