import "./App.css";
import React from "react";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import { Routes,Route } from "react-router-dom";
import Products from "./components/Products";
import Product from "./components/Product";
import Favorites from "./components/Favorites";
import AddProduct from "./components/AddProduct";
const App = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route exact path="/" element={<Home/>}/>
        <Route exact path="/products" element={<Products/>}/>
        <Route exact path="/products/:id" element={<Product/>}/>
        <Route exact path="/favorites" element={<Favorites/>}/>
        <Route exact path="/add-Products" element={<AddProduct/>}/>
      </Routes>
      {/* <Home /> */}
      
    </>
  );
};

export default App;
