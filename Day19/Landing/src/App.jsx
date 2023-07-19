import React from "react";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";
import Contactus from "./components/Contactus";
import Landing from './components/Landing'
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  return (
    <>
      <BrowserRouter>
        <div className="bg-black w-full h-screen text-white">
          <Navbar />
          <Routes>
          <Route path="/" element={<Landing />} />
            <Route path="/home" element={<Home />} />
         
            <Route path="/about" element={<About />} />
        
        
            <Route path="/contactus" element={<Contactus />} />
            <Route path="/" element={<Landing />} />
          </Routes>
        </div>
      </BrowserRouter>
    </>
  );
}

export default App;
