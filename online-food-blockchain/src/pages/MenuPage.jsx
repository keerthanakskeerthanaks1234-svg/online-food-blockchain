import { useParams } from "react-router-dom";
import { useContext } from "react";
import { CartContext } from "../context/CartContext";
import { restaurants } from "../data/restaurants";

const MenuPage = () => {
  const { id } = useParams();
  const { addToCart } = useContext(CartContext);

  const restaurant = restaurants.find((res) => res.id == id);

  if (!restaurant) return <h1>Not found</h1>;

  return (
    <div className="p-6">
      <h1 className="text-3xl text-orange-500 font-bold">
        {restaurant.name}
      </h1>

      <div className="mt-6 space-y-4">
        {restaurant.items.map((item, index) => (
          <div
            key={index}
            className="flex justify-between items-center border p-4 rounded-lg"
          >
            <div>
              <h2 className="font-bold">{item.name}</h2>
              <p>₹ {item.price}</p>
            </div>

            <button
              onClick={() => addToCart(item)}
              className="bg-orange-500 text-white px-4 py-2 rounded"
            >
              Add 🛒
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MenuPage;