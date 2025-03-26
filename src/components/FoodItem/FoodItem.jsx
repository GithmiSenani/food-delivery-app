import './FoodItem.css'
import { assets } from '../../assets/assets'
import { useContext } from 'react'
import { StoreContext } from '../../context/StoreContext'

// FoodItem component receives props from FoodDisplay.jsx
const FoodItem = ({ id, name, price, description, image }) => {
    
    // Accessing cartItems state and functions from StoreContext
    const { cartItems, addToCart, removeFromCart } = useContext(StoreContext);

    return (
        <div className='food-item'>
            {/* Container for the entire food item */}
            <div className="food-item-img-container">
                {/* Displaying food image */}
                <img className='food-item-image' src={image} alt={name} />

                {/* Conditional rendering based on cartItems count for this food item */}
                {!cartItems[id] 
                    ? (
                        // If the item is not in the cart, show the 'add' icon
                        <img className='add' onClick={() => addToCart(id)} src={assets.add_icon_white} alt="Add" />
                    ) : (
                        // If the item is in the cart, show the counter with increment & decrement buttons
                        <div className='food-item-counter'>
                            {/* Remove item button */}
                            <img onClick={() => removeFromCart(id)} src={assets.remove_icon_red} alt="Remove" />
                            
                            {/* Displaying the item count */}
                            <p>{cartItems[id]}</p>
                            
                            {/* Add more of the same item */}
                            <img onClick={() => addToCart(id)} src={assets.add_icon_green} alt="Add More" />
                        </div>
                    )
                }
            </div>

            {/* Container for food details */}
            <div className="food-item-info">
                {/* Displaying food name and rating */}
                <div className="food-item-name-rating">
                    <p>{name}</p>
                    <img src={assets.rating_starts} alt="Rating" />
                </div>

                {/* Displaying food description */}
                <p className="food-item-desc">{description}</p>

                {/* Displaying food price */}
                <p className="food-item-price">${price}</p>
            </div>
        </div>
    );
}

export default FoodItem;  // Exporting FoodItem component

/*
    Explanation of how this component works:

    1. FoodDisplay.js fetches food items from StoreContext.
    2. FoodDisplay.js passes each food item as props to FoodItem.js.
    3. FoodItem.js renders the details of each dish, including:
       - Image
       - Name & Rating
       - Description
       - Price
       - Add/Remove buttons (if already in the cart)
*/
