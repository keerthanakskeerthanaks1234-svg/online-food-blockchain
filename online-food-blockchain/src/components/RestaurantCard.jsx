import { Link } from "react-router-dom";

const RestaurantCard = ({ restaurant }) => {
  return (
    <Link to={`/restaurant/${restaurant.id}`}>
      <div className="bg-white rounded-xl shadow hover:scale-105 transition overflow-hidden">
        
        <img
          src={restaurant.image}
          alt={restaurant.name}
          className="w-full h-48 object-cover"
          loading="lazy"
        />

        <div className="p-4">
          <h2 className="font-bold text-lg">{restaurant.name}</h2>
          <p className="text-gray-500">{restaurant.cuisine}</p>

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