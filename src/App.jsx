import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Footer from "./Footer";
import Nav from "./Nav";
import Signup from "./Signup";
import Login from "./Login";
import Addproduct from "./Addproduct";
import Update from "./Update";
import Product from "./Product";
import "./App.css";
const App = () => {
  return (
    <>
      <div className="App">
        <BrowserRouter>
          <Nav></Nav>
          <Routes>
            <Route path="/" element={<Product/>}></Route>
            <Route path="/add" element={<Addproduct/>}></Route>
            <Route path="/update" element={<Update/>}></Route>
            <Route path="/login" element={<Login />}></Route>
            <Route path="/signup" element={<Signup />}></Route>
          </Routes>
        </BrowserRouter>
        <Footer />
      </div>
    </>
  );
};
export default App;
