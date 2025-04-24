import React from 'react'
import './Header.css'

const Header = () => {

  // Function to scroll smoothly to the Explore Menu section
  const handleScrollToMenu = () => {
    const menuSection = document.getElementById('explore-menu'); // Get the element with ID 'explore-menu'
    
    if (menuSection) {
      menuSection.scrollIntoView({ behavior: 'smooth' }); // Scroll to the element smoothly
    }
  };


  return (
    <div className='header'>
        <div className="header-contents">
            <h2>Order your favourite food here</h2>
            <p>Choose from a diverse menu featuring a delectable array of dishes crafted with the finest ingredients and culinary expertise, Our mission is to satisfy your cravings and elevate your  dining experience, one delicious meat at a time</p>
            <button onClick={handleScrollToMenu}>View Menu</button>
        </div>
    </div>
  )
}

export default Header