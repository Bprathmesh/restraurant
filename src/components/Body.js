import React, { useState, useEffect } from "react";
import RestaurantCard from "./RestaurantCard";
import "../../index.css";

const Shimmer = () => {
    return (
        <div className="shimmer-container">
            {Array(10).fill("").map((_, index) => (
                <div key={index} className="shimmer-card">
                    <div className="shimmer-img stroke animate"></div>
                    <div className="shimmer-title stroke animate"></div>
                    <div className="shimmer-tags stroke animate"></div>
                    <div className="shimmer-details stroke animate"></div>
                </div>
            ))}
        </div>
    );
};

const Body = () => {
    const [restaurants, setRestaurants] = useState([]);
    const [filteredRestaurants, setFilteredRestaurants] = useState([]);
    const [filter, setFilter] = useState("");

    const fetchData = async () => {
        try {
            const response = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9351929&lng=77.62448069999999&collection=80424&tags=layout_CCS_Dosa&sortBy=&filters=&type=rcv2&offset=0&page_type=null");
            const json = await response.json();
            
            const restaurantData = json.data?.cards?.filter(
                card => card.card?.card?.["@type"] === "type.googleapis.com/swiggy.presentation.food.v2.Restaurant"
            ).map(card => card.card?.card?.info) ?? [];

            setRestaurants(restaurantData);
            setFilteredRestaurants(restaurantData);
        } catch (error) {
            console.error("Error fetching data:", error);
        }
    };

    useEffect(() => {
        fetchData();
    }, []);

    const filterTopRated = () => {
        const filteredList = restaurants.filter((res) => res?.avgRating > 4.3);
        setFilteredRestaurants(filteredList);
    };

    const search = () => {
        const searchResults = restaurants.filter((restaurant) =>
            restaurant.name.toLowerCase().includes(filter.toLowerCase())
        );
        setFilteredRestaurants(searchResults);
    };

    return (
        <div className="body">
            <div className="filter">
                <div>
                    <input 
                        value={filter} 
                        type="text"  
                        onChange={(e) => setFilter(e.target.value)}
                        onKeyPress={(e) => e.key === 'Enter' && search()}
                        placeholder="Search for restaurants"
                    />
                    <button onClick={search}>Search</button>
                </div>
                <div><button onClick={filterTopRated}>Top Rated Restaurants</button></div>
            </div>
            <div className="res-container">
                {restaurants.length === 0 ? (
                    <Shimmer />
                ) : filteredRestaurants.length === 0 ? (
                    <h1>No restaurants found matching your search!</h1>
                ) : (
                    filteredRestaurants.map((restaurant) => (
                        <RestaurantCard key={restaurant?.id} resData={restaurant} />
                    ))
                )}
            </div>
        </div>
    );
};

export default Body;