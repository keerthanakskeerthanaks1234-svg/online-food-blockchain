import { useContext } from "react";
import { CartContext } from "../context/CartContext";
import { Link } from "react-router-dom";

export default function CartPage() {
  const { cart } = useContext(CartContext);

  const total = cart.reduce((sum, item) => sum + item.price, 0);

  return (
    <div className="p-8 bg-gray-100 min-h-screen">
      <h1 className="text-3xl font-bold mb-6">Your Cart 🛒</h1>

      {cart.length === 0 ? (
        <p className="text-lg">Your cart is empty</p>
      ) : (
        <div className="bg-white p-6 rounded-xl shadow">
          {cart.map((item, i) => (
            <div key={i} className="flex justify-between border-b py-2">
              <p>{item.name}</p>
              <p>₹{item.price}</p>
            </div>
          ))}

          <h2 className="text-xl font-bold mt-4">
            Total: ₹{total}
          </h2>

          <Link to="/checkout">
            <button className="mt-4 bg-[#E23744] text-white px-6 py-2 rounded">
              Proceed to Checkout
            </button>
          </Link>
        </div>
      )}
    </div>
  );
}