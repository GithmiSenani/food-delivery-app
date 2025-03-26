import React, { useContext, useState } from "react";
import "./Cart.css";
import { StoreContext } from "../../context/StoreContext";
import { useNavigate } from "react-router-dom";

const Cart = () => {
  // Accessing cart data and functions from StoreContext
  const { cartItems, food_list, removeFromCart, getTotalCartAmount } =useContext(StoreContext);

  const navigate = useNavigate();

  return (
    <div className="cart">
      {/* Cart Items Section */}
      <div className="cart-items">
        {/* Cart Header Row */}
        <div className="cart-items-title">
          <p>Items</p>
          <p>Title</p>
          <p>Price</p>
          <p>Quantity</p>
          <p>Total</p>
          <p>Remove</p>
        </div>
        <br />
        <hr />

        {/* Mapping through the food list to display items in the cart */}
        {food_list.map((item, index) => {
          if (cartItems[item._id] > 0) {
            return (
              <div key={index}>
                {/* Display each cart item */}
                <div className="cart-items-title cart-items-item">
                  <img src={item.image} alt="" /> {/* Product Image */}
                  <p>{item.name}</p> {/* Product Name */}
                  <p>${item.price}</p> {/* Product Price */}
                  <p>{cartItems[item._id]}</p> {/* Quantity of Item */}
                  <p>${item.price * cartItems[item._id]}</p>{" "}
                  {/* Total Price for Item */}
                  <p onClick={() => removeFromCart(item._id)} className="cross">
                    x
                  </p>{" "}
                  {/* Remove Item */}
                </div>
                <hr />
              </div>
            );
          }
        })}
      </div>

      {/* Bottom Section: Cart Total and Promo Code */}
      <div className="cart-bottom">
        {/* Cart Total Section */}
        <div className="cart-total">
          <h2>Cart Totals</h2>
          <div>
            <div className="cart-total-details">
              <p>Subtotal</p>
              <p>${getTotalCartAmount()}</p> {/* Display Subtotal */}
            </div>
            <hr />
            <div className="cart-total-details">
              <p>Delivery Fee</p>
              <p>${getTotalCartAmount() === 0 ? 0 : 2}</p>{" "}
              {/* Fixed Delivery Fee */}
            </div>
            <hr />
            <div className="cart-total-details">
              <b>Total</b>
              <b>
                ${getTotalCartAmount() === 0 ? 0 : getTotalCartAmount() + 2}
              </b>{" "}
              {/* Total Amount (Subtotal + Delivery) */}
            </div>
          </div>
          <button onClick={() => navigate("/order")}>
            PROCEED TO CHECKOUT
          </button>{" "}
          {/* Checkout Button */}
        </div>

        {/* Promo Code Section */}
        <div className="cart-promocode">
          <div>
            <p>If you have a promo code, Enter it here</p>
            <div className="cart-promocode-input">
              <input type="text" placeholder="promo code" />{" "}
              {/* Promo Code Input */}
              <button>Submit</button> {/* Submit Promo Code Button */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
