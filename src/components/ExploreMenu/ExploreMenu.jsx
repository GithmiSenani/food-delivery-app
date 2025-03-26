import React from 'react'
import './ExploreMenu.css'
import { menu_list } from '../../assets/assets'

const ExploreMenu = ({category,setCategory}) => {

  return (
    <div className='explore-menu' id='explore-menu'> {/* Main container for the Explore Menu section */}
        <h1>Explore our menu</h1> {/* Title for the Explore Menu */}
        <p className='explore-menu-text'>Choose from a diverse menu featuring a delectable array of dishes. Our mission is to satisfy your cravings and elevate your dining experience, one delicious meat at a time.</p> {/* Description text for the Explore Menu */}
        
        <div className="explore-menu-list"> {/* Container for the menu items */}
          {menu_list.map((item,index)=>{ /* Iterating over the menu_list to display items */
            return(
                <div onClick={()=>setCategory(prev=>prev===item.menu_name?"All":item.menu_name)} key={index} className='explore-menu-list-item'> {/* Display each menu item */}
                    <img className={category===item.menu_name?"active":""}src={item.menu_image} alt="" /> {/* Display the menu item image and add 'active' class if the category is selected */}
                    <p>{item.menu_name}</p> {/* Display the menu item name */}
                </div>
            )
          })}  
        </div>
        
        <hr /> {/* Horizontal line after the menu list */}

    </div>
  )
}

export default ExploreMenu // Exporting the component