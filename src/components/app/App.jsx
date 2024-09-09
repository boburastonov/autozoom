import React from "react";
import { Route, Routes } from "react-router-dom";
import Layout from "../../components/layout/layout";
import Home from "../../pages/Home";
import Cars from "../../pages/Cars";
import Brands from "../../pages/Brands";
import Services from "../../pages/Services";
import About from "../../pages/About";
import Contact from "../../pages/Contact";
import Blog from "../../pages/Blog";
function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route path="/" element={<Home />} />
        <Route path="/cars" element={<Cars />} />
        <Route path="/brands" element={<Brands />} />
        <Route path="/services" element={<Services />} />
        <Route path="/services" element={<Services />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/blog" element={<Blog />} />
      </Route>
    </Routes>
  );
}

export default App;
