import React, { useContext, useState } from "react";
import "./PlaceOrder.css";
import { StoreContext } from "../../context/StoreContext";

const PlaceOrder = () => {
  // Accessing the function to get the total cart amount from context
  const { getTotalCartAmount } = useContext(StoreContext);

  return (
    <form className="place-order"> {/* Main form container */}
      <div className="place-order-left"> {/* Left section for delivery information */}
        <p className="title">Delivery Information</p> {/* Title for the section */}
        
        {/* Input fields for user details */}
        <div className="multi-fields">
          <input type="text" placeholder="First name" />
          <input type="text" placeholder="Last name" />
        </div>
        <input type="text" placeholder="Email address" />
        <input type="text" placeholder="Street" />
        
        {/* Input fields for city, state */}
        <div className="multi-fields">
          <input type="text" placeholder="City" />
          <input type="text" placeholder="State" />
        </div>
        
        {/* Input fields for zip code, country */}
        <div className="multi-fields">
          <input type="text" placeholder="Zip code" />
          <input type="text" placeholder="Country" />
        </div>
        
        <input type="text" placeholder="Phone number" />
      </div>
      

      <div className="place-order-right"> {/* Right section for order summary */}
        <div className="cart-total">
          <h2>Cart Totals</h2> {/* Title for the cart totals */}
          
          <div>
            {/* Displaying subtotal */}
            <div className="cart-total-details">
              <p>Subtotal</p>
              <p>${getTotalCartAmount()}</p>
            </div>
            <hr />
            
            {/* Displaying delivery fee */}
            <div className="cart-total-details">
              <p>Delivery Fee</p>
              <p>${getTotalCartAmount() === 0 ? 0 : 2}</p>
            </div>
            <hr />
            
            {/* Displaying total amount (Subtotal + Delivery Fee) */}
            <div className="cart-total-details">
              <b>Total</b>
              <b>
                ${getTotalCartAmount() === 0 ? 0 : getTotalCartAmount() + 2}
              </b>
            </div>
          </div>
          
          {/* Proceed to payment button */}
          <button>PROCEED TO PAYMENT</button>
        </div>
      </div>
    </form>
  );
};

export default PlaceOrder; // Exporting the component