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
      <Header /> {/* Rendering Header component */}

      {/* Add this ID so the menu link scrolls here */}
      <div id="explore-menu">
        <ExploreMenu category={category} setCategory={setCategory} />
      </div>

      <FoodDisplay category={category} />

      {/* Add this ID so the mobile-app link scrolls here */}
      <div id="app-download">
        <AppDownload />
      </div>

      <ScrollToTopButton />
    </div>
  );
}

export default Home // Exporting Home component as default
