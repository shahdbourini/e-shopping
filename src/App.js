import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Link, Routes } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar.js";
import Banner from "./components/banner/Banner";
import Types from "./components/types/Types";
import ProductsOption from "./components/productsOption/ProductsOption";
import Products from "./components/products/Products";
import Footer from "./components/footer/Footer";
import data from "./components/products/data";
import Home from "./pages/Home";
import Shop from "./pages/Shop";
import Features from "./pages/Features";
import Contact from "./pages/Contact";
import About from "./pages/About";
import Blog from "./pages/Blog";
import BlogDetails from "./pages/BlogDetails";
import Test from "./Test";

import "./App.css";

function App() {
  const [result, setResult] = useState(data);

  const childResFilter = (products) => {
    // 👇️ take parameter passed from Child component
    setResult(products);
  };

  return (
    <div >
      <Router>
        <Navbar />
        <Routes>
          <Route
            path="/"
            element={<Home childResFilter={childResFilter} result={result} />}
          ></Route>

          <Route
            path="/shop"
            element={<Shop childResFilter={childResFilter} result={result} />}
          ></Route>

          <Route path="/features" element={<Features />}></Route>

          <Route path="/contact" element={<Contact />}></Route>
          <Route path="/about" element={<About />}></Route>
          <Route path="/blog" element={<Blog />}></Route>
          {/* <Route path="/blogDetails/:imgID,:title,:discription" element={<BlogDetails />}></Route> */}
          <Route path = '/blogDetails/:imgID/:title/:discription/:fullDisc' element={<BlogDetails />} />
        </Routes>
      </Router>

      <Footer />
    </div>
  );
}

export default App;
