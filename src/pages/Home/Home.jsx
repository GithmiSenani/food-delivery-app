import React, { useState } from 'react'
import './Home.css'
import Header from '../../components/Header/Header'
import ExploreMenu from '../../components/ExploreMenu/ExploreMenu'
import FoodDisplay from '../../components/FoodDisplay/FoodDisplay'
import AppDownload from '../../components/AppDownload/AppDownload'
import ScrollToTopButton from '../../components/ScrollToTopButton/ScrollToTopButton' // adjust path based on your structure

const Home = () => {

  const [category, setCategory] = useState("All"); // State to manage selected food category, default is "All"

 return (
   <div>
     <Header/> {/* Rendering Header component */}
     <ExploreMenu category={category} setCategory={setCategory}/> {/* Passing category state and setter function to ExploreMenu */}
     <FoodDisplay category={category}/> {/* Passing selected category to FoodDisplay */}
     <AppDownload/> {/* Rendering AppDownload component */}
     <ScrollToTopButton /> {/* Add scroll-to-top button here */}
   </div>
 )
}

export default Home // Exporting Home component as default