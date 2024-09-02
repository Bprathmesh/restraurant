import React from "react";
import ReactDOM from "react-dom/client";
import '../index.css';
import Header from "./components/Header"
import Body from "./components/Body";




// AppLayout Component
const AppLayout = () => {
    return (
        <div className="app">
            <Header />
            <Body />
        </div>
    );
};

// Rendering the App
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout />);

export default AppLayout;
