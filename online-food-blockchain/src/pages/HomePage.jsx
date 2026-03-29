import { restaurants } from "../data/restaurants";
import { Link } from "react-router-dom";

export default function HomePage() {
  return (
    <div className="bg-gray-100 min-h-screen p-8">
      <h1 className="text-3xl font-bold mb-6">Popular Restaurants 🍽️</h1>

      <div className="grid grid-cols-3 gap-6">
        {restaurants.map((r) => (
          <Link to={`/menu/${r.id}`} key={r.id}>
            <div className="bg-white rounded-xl shadow-md hover:scale-105 transition overflow-hidden">
              <img
                src={r.image}
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <h2 className="text-xl font-semibold">{r.name}</h2>
                <p className="text-gray-500">Click to view menu</p>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}