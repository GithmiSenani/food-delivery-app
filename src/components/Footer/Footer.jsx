import React from "react";
import "./Footer.css";
import { assets } from "../../assets/assets";

const Footer = () => {
  return (
    <div className="footer" id="footer">
      <div className="footer-conent">
        <div className="footer-content-left">
            <img src={assets.logo} alt="" />
            <p>
            Lorem ipsum odor amet, consectetuer adipiscing elit. Blandit ridiculus sodales tempus mus pulvinar. Taciti odio aliquam nunc convallis; elit ridiculus. Amet morbi habitant lectus pretium; ligula tellus. Class primis ac mollis faucibus auctor quam tristique quisque suspendisse. Tempus id placerat tincidunt; tempor molestie tempor ullamcorper.
            </p>
            <div className="footer-social-icons">
                <img src={assets.facebook_icon} alt="" />
                <img src={assets.twitter_icon} alt="" />
                <img src={assets.linkedin_icon} alt="" />

            </div>

        </div>
        <div className="footer-content-center">
            <h2>COMPANY</h2>
            <ul>
                <li>Home</li>
                <li>About Us</li>
                <li>Delivery</li>
                <li>Privacy Policy</li>
            </ul>
        </div>
        <div className="footer-content-right">
            <h2>GET IN TOUCH</h2>
            <ul>
                <li>+1-212-456-7890</li>
                <li>contact@tomato.com</li>
            </ul>

        </div>
        
      </div>
      <hr />
      <p className="footer-copyright">Copyright 2025 © Tomato.com •• All Rights Reserved.</p>
    </div>
  );
};

export default Footer;
