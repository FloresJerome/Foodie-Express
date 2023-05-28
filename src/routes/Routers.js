import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";

import Home from "../pages/Home";
import Pizzas from "../pages/Pizzas";
import PizzaDetails from "../pages/PizzaDetails";
import Cart from "../pages/Cart";
import Checkout from "../pages/Checkout";
import AllFoods from "../pages/AllFoods";
import FoodDetails from "../pages/FoodDetails";
import Contact from "../pages/Contact";
import Login from "../pages/Login";
import Register from "../pages/Register";
import Message from "../pages/Message";

const Routers = () => {
  return (
    <Routes> 
      <Route path="/" element={<Navigate to="/home" />} />
      <Route path="/home" element={<Home />} />
      <Route path="/pizzas" element={<Pizzas />} />
      <Route path="/cart" element={<Cart />} />
      <Route path="/checkout" element={<Checkout />} />
      <Route path="/allfoods" element={<AllFoods />} />
      <Route path="/allfoods/:id" element={<FoodDetails />} />
      <Route path="/fooddetails" element={<FoodDetails />} />
      <Route path="/pizzas/:id" element={<PizzaDetails />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/message" element={<Message />} />

    </Routes>
  );
};

export default Routers;
