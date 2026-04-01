import { Link } from "react-router-dom";
import { useContext } from "react";
import { CartContext } from "../context/CartContext";
import { ShoppingCart, MapPin, Search } from "lucide-react";

const Navbar = () => {
  const { cart } = useContext(CartContext);

  return (
    <div className="flex justify-between items-center px-6 py-4 shadow-md bg-white sticky top-0 z-50">
      
      {/* Logo */}
      <h1 className="text-2xl font-bold text-[#FC8019]">
        ChainBite 🍔
      </h1>

      {/* Location */}
      <div className="hidden md:flex items-center gap-2 text-gray-600">
        <MapPin size={18} />
        <span>Deliver to Home</span>
      </div>

      {/* Search */}
      <div className="hidden md:flex items-center border px-3 py-1 rounded-lg">
        <Search size={18} />
        <input
          type="text"
          placeholder="Search food..."
          className="outline-none ml-2"
        />
      </div>

      {/* Links */}
      <div className="flex items-center gap-6">
        <Link to="/">Home</Link>
        <Link to="/orders">Orders</Link>

        <Link to="/cart" className="relative">
          <ShoppingCart />
          <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs px-2 rounded-full">
            {cart.length}
          </span>
        </Link>
      </div>

    </div>
  );
};

export default Navbar;