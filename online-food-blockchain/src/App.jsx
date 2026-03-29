import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";   // ✅ ADD THIS

import HomePage from "./pages/HomePage";
import MenuPage from "./pages/MenuPage";
import CartPage from "./pages/CartPage";
import CheckoutPage from "./pages/CheckoutPage";
import TrackingPage from "./pages/TrackingPage";
import OrdersPage from "./pages/OrdersPage";

function App() {
  return (
    <BrowserRouter>
      <Navbar />   {/* ✅ ADD THIS */}

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/restaurant/:id" element={<MenuPage />} />
        <Route path="/cart" element={<CartPage />} />
        <Route path="/checkout" element={<CheckoutPage />} />
        <Route path="/track" element={<TrackingPage />} />
        <Route path="/orders" element={<OrdersPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;