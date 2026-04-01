import { useContext } from "react";
import { CartContext } from "../context/CartContext";

const CartSidebar = () => {
  const { cart } = useContext(CartContext);

  const total = cart.reduce((sum, item) => sum + item.price, 0);

  return (
    <div className="fixed right-0 top-0 w-80 h-full bg-white shadow-lg p-4">
      
      <h2 className="text-xl font-bold mb-4">Your Cart 🛒</h2>

      {cart.length === 0 ? (
        <p>Empty</p>
      ) : (
        <>
          {cart.map((item, i) => (
            <div key={i} className="flex justify-between mb-2">
              <span>{item.name}</span>
              <span>₹ {item.price}</span>
            </div>
          ))}

          <h3 className="mt-4 font-bold">Total: ₹ {total}</h3>
        </>
      )}
    </div>
  );
};

export default CartSidebar;