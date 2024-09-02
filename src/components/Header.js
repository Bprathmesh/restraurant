import { LOGO_URL } from "../utils/constants";

// Header Component
const Header = () => {
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
                </ul>
            </div>
        </div>
    );
};
export default Header;