import {BrowserRouter, Routes, Route} from "react-router-dom";
import React from 'react';
import Navbar from './components/Navbar';
import Home from './components/Home';
import MyCart from "./components/MyCart";
import Product from "./components/Product";
import Description from "./components/Description";
import  { useState } from 'react';
 
const App =() => {

  const [cartItems, setCartItems] = useState([]);

  const addToCart = (product) => {
    setCartItems([...cartItems, product]);
  };
  const removeItem = (itemId) => {
    const updatedCartItems = cartItems.filter((item) => item.id !== itemId);
    setCartItems(updatedCartItems);
  };

  return (
<>

<BrowserRouter>
<Navbar/>
<Routes>
        <Route path="/Home" element={<Home addToCart={addToCart}/>} />
        <Route path="/mycart" element={<MyCart   cartItems={cartItems} removeItem={removeItem} />} />
        <Route path="/product" element={<Product />} />
        <Route path="/product/:id" element={<Description addToCart={addToCart} />} />
      
      </Routes>

      </BrowserRouter>
 
</>
  
  );
}

export default App
