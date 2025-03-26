import React, { useState } from "react";
import Navbar from "./components/Navbar/Navbar";
import { Route, Routes } from "react-router-dom";
import PlaceOrder from "./pages/PlaceOrder/PlaceOrder";
import Cart from "./pages/Cart/Cart";
import Home from "./pages/Home/Home";
import Footer from "./components/Footer/Footer";
import LoginPopup from "./components/LoginPopup/LoginPopup";

const App = () => {
 
  // State to track login popup visibility
  const[showLogin,setShowLogin]=useState(false)

  return (
    <>
    {showLogin?<LoginPopup setShowLogin={setShowLogin} />:<></>} {/*Conditional Rendering*/}

      <div className="app">
         {/* Rendering Navbar component and passing setShowLogin as prop */}
        <Navbar setShowLogin={setShowLogin} /> 

         {/* Defining routes for different pages */}
        <Routes>
          <Route path='/' element={<Home />} /> {/* Route for Home page */}
          <Route path='/cart' element={<Cart />} /> {/* Route for Cart page */}
          <Route path='/order' element={<PlaceOrder />} /> {/* Route for PlaceOrder page */}
        </Routes>
      </div>
      <Footer /> {/* Rendering Footer component at the bottom */}
    </>
  );
};

export default App; // Exporting App component as default
