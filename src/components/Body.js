import React, { useState, useEffect } from "react";
import RestaurantCard from "./RestaurantCard";
import "../../index.css";

const Body = () => {
    const [restaurants, setRestaurants] = useState([]);
    const [filteredRestaurants, setFilteredRestaurants] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    const fetchData = async () => {
        try {
            setIsLoading(true);
            const response = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9351929&lng=77.62448069999999&collection=80424&tags=layout_CCS_Dosa&sortBy=&filters=&type=rcv2&offset=0&page_type=null");
            const json = await response.json();
            
            const restaurantData = json.data?.cards?.filter(
                card => card.card?.card?.["@type"] === "type.googleapis.com/swiggy.presentation.food.v2.Restaurant"
            ).map(card => card.card?.card?.info) ?? [];

            setRestaurants(restaurantData);
            setFilteredRestaurants(restaurantData);
        } catch (error) {
            console.error("Error fetching data:", error);
        } finally {
            setIsLoading(false);
        }
    };

    useEffect(() => {
        fetchData();
    }, []);

    const filterTopRated = () => {
        const filteredList = restaurants.filter((res) => res?.avgRating > 4.3);
        setFilteredRestaurants(filteredList);
    };

    return (
        <div className="body">
            <div className="filter">
                <button onClick={filterTopRated}>Top Rated Restaurants</button>
            </div>
            <div className="res-container">
                {isLoading ? (
                    <div className="loader-container">
                        <div className="spinner"></div>
                    </div>
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