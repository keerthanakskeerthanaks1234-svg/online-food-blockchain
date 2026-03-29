import { Link } from "react-router-dom";

const RestaurantCard = ({ restaurant }) => {
  return (
    <Link to={`/restaurant/${restaurant.id}`}>
      <div className="border rounded-xl overflow-hidden shadow-md hover:scale-105 transition">
        
        <img
          src={restaurant.image}
          alt={restaurant.name}
          loading="lazy"
          className="w-full h-48 object-cover"
        />

        <div className="p-4">
          <h2 className="text-lg font-bold">{restaurant.name}</h2>
          <p className="text-gray-600">{restaurant.cuisine}</p>

          <div className="flex justify-between mt-2 text-sm">
            <span>⭐ {restaurant.rating}</span>
            <span>{restaurant.deliveryTime}</span>
          </div>
        </div>

      </div>
    </Link>
  );
};

export default RestaurantCard;