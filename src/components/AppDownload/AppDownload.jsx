import React from "react";
import "./AppDownload.css";
import { assets } from "../../assets/assets";

const AppDownload = () => {
  return (
    <div className="app-download" id="app-download">
      {" "}
      {/* Container for the app download section */}
      <p>
        For Better Experience Download <br /> Tomato App{" "}
      </p>{" "}
      {/* Text prompting users to download the app */}
      <div className="app-download-platforms">
        {" "}
        {/* Container for app store buttons */}
        <img src={assets.play_store} alt="Download from Play Store" />{" "}
        {/* Play Store image */}
        <img src={assets.app_store} alt="Download from App Store" />{" "}
        {/* App Store image */}
      </div>
    </div>
  );
};

export default AppDownload; // Exporting AppDownload component as default
