import { useContext } from "react";
import { CartContext } from "../context/CartContext";
import toast from "react-hot-toast";

const MenuItemCard = ({ item }) => {
  const { addToCart } = useContext(CartContext);

  return (
    <div className="flex justify-between items-center border p-4 rounded-lg shadow-sm hover:shadow-md">
      
      <div>
        <h2 className="font-bold text-lg">{item.name}</h2>
        <p className="text-gray-600">₹ {item.price}</p>
        <p className="text-sm text-gray-400">ETH {item.ethPrice}</p>

        <button
          onClick={() => {
            addToCart(item);
            toast.success("Added to cart 🛒");
          }}
          className="mt-2 bg-[#FC8019] text-white px-4 py-1 rounded"
        >
          Add
        </button>
      </div>

      <img
        src={item.image}
        className="w-24 h-24 object-cover rounded-lg"
        loading="lazy"
      />

    </div>
  );
};

export default MenuItemCard;