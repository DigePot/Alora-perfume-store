import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaEye, FaHeart } from "react-icons/fa";
import perfume1 from "../assets/perfume5.png"
import perfume2 from "../assets/perfume6.png"
import perfume3 from "../assets/perfume4.png"
import perfume4 from "../assets/perfume3.png"

const MostSold = () => {
  const [hoveredProduct, setHoveredProduct] = useState(null);

  const mostSold = [
    {
      id: 1,
      name: "Alora Collection 35",
      description: "New 150ml and elegant 5ml perfume",
      price: 199,
      oldPrice: 359,
      image: perfume1,
    },
    {
      id: 2,
      name: "Wild Pegasus 150ml",
      description: "Premium fragrance collection",
      price: 128,
      oldPrice: 275,
      image: perfume2,
    },
    {
      id: 3,
      name: "Brooklyn Pegasus 150ml",
      description: "Urban inspired scent",
      price: 128,
      oldPrice: 275,
      image: perfume3,
    },
    {
      id: 4,
      name: "Incense Pegasus 150ml",
      description: "Mystical aromatic blend",
      price: 128,
      oldPrice: 275,
      image: perfume4,
    },
  ];

  return (
    <section className="py-16 px-4 sm:px-8">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-12 text-gray-800">Most Sold</h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {mostSold.map((product, index) => (
            <div
              key={product.id}
              className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 group flex flex-col h-full"
              onMouseEnter={() => setHoveredProduct(index)}
              onMouseLeave={() => setHoveredProduct(null)}
            >
              {/* === Product Image & Info Link === */}
              <Link to={`/product/${product.id}`} className="flex flex-col flex-grow">
                <div className="relative overflow-hidden">
                  <img
                    src={product.image || "/placeholder.svg"}
                    alt={product.name}
                    className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                  />

                  {/* Icons */}
                  <div
                    className={`absolute top-4 right-4 flex flex-col gap-2 transition-opacity duration-300 ${
                      hoveredProduct === index ? "opacity-100" : "opacity-0"
                    }`}
                  >
                    <button className="bg-white/90 hover:bg-white p-2 rounded-full shadow-md transition-all duration-300 hover:scale-110">
                      <FaEye className="text-gray-600 hover:text-blue-600" />
                    </button>
                    <button className="bg-white/90 hover:bg-white p-2 rounded-full shadow-md transition-all duration-300 hover:scale-110">
                      <FaHeart className="text-gray-600 hover:text-red-500" />
                    </button>
                  </div>
                </div>

                {/* Product Info */}
                <div className="p-6 flex flex-col flex-grow">
                  <h3 className="font-bold text-lg text-gray-800 mb-2">{product.name}</h3>
                  <p className="text-gray-600 text-sm mb-4 flex-grow">{product.description}</p>

                  {/* Pricing */}
                  <div className="flex items-center gap-3 mb-4">
                    <span className="text-red-500 font-bold text-xl">${product.price}</span>
                    <span className="text-gray-400 line-through text-sm">${product.oldPrice}</span>
                  </div>
                </div>
              </Link>

              {/* === Add to Cart Button Link === */}
              <Link to={`/checkout/${product.id}`} className="px-6 pb-6 mt-auto">
                <button className="w-full bg-black text-white py-3 rounded-lg font-semibold hover:bg-gray-800 transition-colors duration-300">
                  Add to cart
                </button>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MostSold;
