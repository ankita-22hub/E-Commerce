import React from "react";

const Cards = ({ product }) => {
  // Avoid error if product is not passed
  if (!product) return null;

  const description = product.description.slice(0, 60);

  return (
    <div className="bg-white p-3 flex flex-col text-black rounded shadow-md hover:shadow-lg">
      <div className="h-48 overflow-hidden">
        <img
          src={product.image}
          className="h-full w-full object-contain"
          alt="product"
        />
      </div>

      <div className="mt-2">
        <h1 className="font-bold text-lg">{product.title}</h1>
        <p className="text-sm text-gray-600">{description}...</p>
      </div>

      <div className="mt-2 font-semibold text-green-600">${product.price}</div>

      <button className="mt-3 p-2 bg-slate-500 text-white hover:scale-95 hover:bg-slate-600 transition">
        Buy Now
      </button>
    </div>
  );
};

export default Cards;
