import React from "react";
import ReactDOM from "react-dom/client";
import './index.css';

// Header Component
const Header = () => {
    return (
        <div className="header">
            <div className="logo-container">
                <img 
                    src="https://cdn.dribbble.com/userupload/4288549/file/original-438b97178ade9d02cb34fd941adc6357.jpg?resize=400x300&vertical=center" 
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

// RestaurantCard Component
const RestaurantCard = (props) => {
    // Constructing the image URL using the cloudinaryImageId
    const imageUrl = `https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/${props.cloudinaryImageId}`;

    return (
        <div className="res-card">
            <img 
                className="res-card-food" 
                src={imageUrl}
                alt={props.resName}
            />
            <h3>{props.resName}</h3>
            <h4>{props.cuisine.join(", ")}</h4>
            <h4>{props.rating} stars</h4>
            <h4>{props.deliveryTime} mins</h4>
        </div>
    );
};

// Body Component
const Body = () => {
    const restaurantData = [
        {
            resName: "La Pino'z Pizza",
            cloudinaryImageId: "ntjshqsv2k7vxtv7vmib",
            cuisine: ["Pizzas", "Pastas", "Italian", "Desserts", "Beverages"],
            rating: 4.3,
            deliveryTime: 27
        },
        {
            resName: "Meghana Biryani",
            cloudinaryImageId: "6e44fd7f1e5cd9967edfe47c10247671",
            cuisine: ["Biryani", "North Indian", "Asian"],
            rating: 4.4,
            deliveryTime: 38
        },
        {
            resName: "KFC",
            cloudinaryImageId: "X_THUMBNAIL/IMAGES/VENDOR/2024/4/17/69e69c55-d2bb-4207-8310-131fc693f78a_25620.JPG",
            cuisine: ["Fast Food", "Fried Chicken"],
            rating: 4.0,
            deliveryTime: 30
        },
        {
            resName: "Burger King",
            cloudinaryImageId: "r5h3ej2gfh6r8gh5gh6g",
            cuisine: ["Burgers", "Fast Food"],
            rating: 4.1,
            deliveryTime: 25
        },
        {
            resName: "Domino's Pizza",
            cloudinaryImageId: "p8uh4jk9s7d8f4j8fj8g",
            cuisine: ["Pizzas", "Fast Food"],
            rating: 4.2,
            deliveryTime: 20
        },
        {
            resName: "Subway",
            cloudinaryImageId: "X_THUMBNAIL/IMAGES/VENDOR/2024/8/2/3ecd2586-6a02-4421-9a35-1a7f24ec0045_656392.jpg",
            cuisine: ["Sandwiches", "Fast Food"],
            rating: 4.0,
            deliveryTime: 28
        },
        {
            resName: "Starbucks",
            cloudinaryImageId: "q4e2d6k8f5d9h8j9k8g5",
            cuisine: ["Coffee", "Snacks"],
            rating: 4.5,
            deliveryTime: 15
        },
        {
            resName: "Chili's",
            cloudinaryImageId: "v6h3f5j9d8f9e8k5d2j8",
            cuisine: ["American", "Mexican"],
            rating: 4.2,
            deliveryTime: 35
        },
        {
            resName: "Sushi Place",
            cloudinaryImageId: "b2k9d6e7f5g8h8j5k9d6",
            cuisine: ["Japanese", "Sushi"],
            rating: 4.4,
            deliveryTime: 32
        },
        {
            resName: "The Great Indian Kitchen",
            cloudinaryImageId: "c9d7k5e8f6j9h4k5d2g8",
            cuisine: ["Indian", "North Indian"],
            rating: 4.3,
            deliveryTime: 40
        },
        {
            resName: "Taco Bell",
            cloudinaryImageId: "f4j2d7e9k6g5h8k9d8j7",
            cuisine: ["Mexican", "Fast Food"],
            rating: 4.1,
            deliveryTime: 30
        },
        {
            resName: "Papa John's",
            cloudinaryImageId: "h6d2k9f5j8e7g4k9d6f8",
            cuisine: ["Pizzas", "Fast Food"],
            rating: 4.0,
            deliveryTime: 25
        }
    ];
    

    return (
        <div className="body">
            <div className="search">Search</div>
            <div className="res-container">
                {restaurantData.map((restaurant, index) => (
                    <RestaurantCard 
                        key={index}
                        resName={restaurant.resName}
                        cloudinaryImageId={restaurant.cloudinaryImageId}
                        cuisine={restaurant.cuisine}
                        rating={restaurant.rating}
                        deliveryTime={restaurant.deliveryTime}
                    />
                ))}
            </div>
        </div>
    );
};

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
