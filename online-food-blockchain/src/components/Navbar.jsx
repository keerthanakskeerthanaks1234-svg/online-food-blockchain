import { Link } from "react-router-dom";
import { useContext } from "react";
import { CartContext } from "../context/CartContext";

export default function Navbar() {
  const { cart } = useContext(CartContext);

  return (
    <div className="bg-[#E23744] text-white px-8 py-4 flex justify-between items-center shadow-lg">
      <h1 className="text-2xl font-bold tracking-wide">ChainBite 🍔</h1>

      <div className="flex gap-6 text-lg">
        <Link className="hover:underline" to="/">Home</Link>
        <Link className="hover:underline" to="/cart">
          Cart ({cart.length}) 🛒
        </Link>
        <Link className="hover:underline" to="/orders">Orders</Link>
      </div>
    </div>
  );
}