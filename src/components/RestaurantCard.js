const RestaurantCard = ({ resData }) => {
    const {
        cloudinaryImageId,
        name,
        cuisines,
        avgRating,
        costForTwo,
        deliveryTime
    } = resData;

    return (
        <div className="res-card">
            <img
                className="res-logo"
                alt={name}
                src={`https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/${cloudinaryImageId}`}
            />
            <h3>{name}</h3>
            <h4 className="cuisines">{cuisines.join(", ")}</h4>
            <h4 className="rating">{avgRating} stars</h4>
            <h4 className="cost">{costForTwo}</h4>
            <h4 className="delivery-time">{deliveryTime} minutes</h4>
        </div>
    );
};
export default RestaurantCard;