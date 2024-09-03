import { LOGO_URL } from "../utils/constants";
import { useState } from "react";

// Header Component
const Header = () => {
    const [login,setlogin]=useState("Login");
    function toggle(){
        if(login==="Login"){
            setlogin("Logout");
        }else setlogin("Login");
    }
    return (
        <div className="header">
            <div className="logo-container">
                <img 
                    src={LOGO_URL} 
                    className="logo" 
                    alt="Logo"
                />
                <span>whynoteatmore</span>
            </div>
            <div className="nav-items">
                <ul>
                    <li><a href="/">Home</a></li>
                    <li><a href="/about">About Us</a></li>
                    <li><a href="/contact">Contact Us</a></li>
                    <li><a href="/cart">Cart</a></li>
                    <li><button onClick={toggle}>{login}</button></li>
                </ul>
            </div>
        </div>
    );
};
export default Header;