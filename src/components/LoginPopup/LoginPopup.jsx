import './LoginPopup.css';
import { assets } from '../../assets/assets';
import React, { useState } from 'react';

const LoginPopup = ({ setShowLogin }) => {  // The component accepts setShowLogin function as a prop.

    // State to manage whether the user is in "Sign Up" or "Login" view.
    const [currState, setCurrState] = useState("Sign Up"); 

    return (
        <div className='login-popup'> {/* Wrapper div for the popup.*/} 
            <form className="login-popup-container"> {/* The form container. */} 
                <div className="login-popup-title"> {/* Header for the form. */} 
                    <h2>{currState}</h2>  {/* Display the current state, "Sign Up" or "Login". */}
                    <img 
                        onClick={() => setShowLogin(false)} 
                        src={assets.cross_icon} 
                        alt="" 
                    /> {/* Close button to hide the login popup. */}
                </div>

                <div className="login-popup-inputs"> {/* The input fields section. */}
                    {/* If the state is "Login", skip the name input field, else show it. */}
                    {currState === "Login" ? <></> : <input type="text" placeholder='Your Name' required />}  
                    <input type="email" placeholder="Your Email" required /> {/* Email input field. */}
                    <input type="password" placeholder="Password" required />  {/* Password input field. */}
                </div>

                {/* Button text changes based on the current state */}
                <button>{currState === "Sign Up" ? "Create account" : "Login"}</button>
                
                {/* Checkbox for terms and conditions */}
                <div className="login-popup-condition">
                    <input type="checkbox" required /> 
                    <p>By continuing, I agree to the terms of use & privacy policy.</p>
                </div>

                {/* Conditional rendering based on the current state (Login/Sign Up) */}
                {currState === "Login" 
                    ? <p>Create a new account? <span onClick={() => setCurrState("Sign Up")}>Click here</span></p>  // If login, show the option to sign up.
                    : <p>Already have an account? <span onClick={() => setCurrState("Login")}>Login here</span></p>  // If sign up, show the option to log in.
                }
            </form>
        </div>
    );
}

export default LoginPopup;  // Export the LoginPopup component.
