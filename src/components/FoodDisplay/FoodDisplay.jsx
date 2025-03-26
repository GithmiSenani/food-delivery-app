import React, { useContext } from "react";
import "./FoodDisplay.css";
import { StoreContext } from "../../context/StoreContext";
import FoodItem from "../FoodItem/FoodItem";

// FoodDisplay component receives 'category' as a prop
const FoodDisplay = ({ category }) => {
  // Extracting food_list from StoreContext (global state)
  const { food_list } = useContext(StoreContext);

  return (
    <div className="food-display" id="food-display">
      <h2>Top dishes near you</h2>

      {/* Container for displaying food items */}
      <div className="food-display-list">
        {/* Mapping through the food_list and rendering FoodItem components */}
        {food_list.map((item, index) => {
          // Checking if the selected category matches the item category or if "All" is selected
          if (category === "All" || category === item.category) {
            return (
              <FoodItem
                key={index} // Unique key for each item
                id={item._id}
                name={item.name}
                description={item.description}
                price={item.price}
                image={item.image}
              />
            ); // Passing props
          }
        })}
      </div>
    </div>
  );
};

export default FoodDisplay; // Exporting FoodDisplay component
