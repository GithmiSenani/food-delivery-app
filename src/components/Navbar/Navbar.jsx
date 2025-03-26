import React,{useContext, useState}from 'react'
import './Navbar.css'
import { assets } from '../../assets/assets'
import { Link } from 'react-router-dom';
import { StoreContext } from '../../context/StoreContext';


const Navbar = ({setShowLogin}) => {

    // State to track the active menu item
    const [menu, setMenu] = useState("home");

    const{getTotalCartAmount}=useContext(StoreContext)

  return (
    <div className='navbar'> {/* Navbar container */}
      <Link to='/'><img src={assets.logo} alt="Logo" className="logo" /></Link>  {/* Website logo */}

        {/* Navigation menu */}
        <ul className="navbar-menu">
            <Link to='/' onClick={() => setMenu("home")} className={menu === "home" ? "active" : ""}>home</Link>
            <a href='#explore-menu' onClick={() => setMenu("menu")} className={menu === "menu" ? "active" : ""}>menu</a>
            <a href='#app-download' onClick={() => setMenu("mobile-app")} className={menu === "mobile-app" ? "active" : ""}>mobile-app</a>
            <a href='#footer' onClick={() => setMenu("contact-us")} className={menu === "contact-us" ? "active" : ""}>contact us</a>
        </ul>

        {/* Right section of the navbar */}
        <div className='navbar-right'>
        <img src={assets.search_icon} alt="Search" />{/* Search icon */}
            
            {/* Shopping cart with notification dot */}
            <div className="navbar-search-icon">
            <Link to={'/cart'}> <img src={assets.basket_icon} alt="Basket" /></Link>  {/* Basket icon */}
                <div className={getTotalCartAmount()===0?"":"dot"}></div> {/* Notification dot for cart */}
            </div>

            <button onClick={()=>setShowLogin(true)}>sign in</button> {/* Sign-in button */}
        </div>
    </div>
  )
}

export default Navbar // Exporting Navbar component as default