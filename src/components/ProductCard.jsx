import React from "react";

const ProductCard = ({ product }) => {
  return (
    <div className="bg-white p-4 rounded-lg shadow-md hover:shadow-xl transform transition-transform duration-300 hover:scale-105">
      <img
        src={product.image}
        alt={product.name}
        className="w-full h-60 object-cover rounded-md"
      />
      <h3 className="mt-3 text-lg font-semibold">{product.name}</h3>
      <p className="text-gray-600">{product.price} USD</p>
    </div>
  );
};

export default ProductCard;
