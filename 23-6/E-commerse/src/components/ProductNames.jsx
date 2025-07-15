import axios from "axios";
import React, { useEffect, useState } from "react";
import Cards from "./Cards";

const ProductNames = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    async function getProductNames() {
      const responce = await axios.get(`https://fakestoreapi.com/products`);
      setProducts(responce.data);
    }
    getProductNames();
  }, []);

  useEffect(() => {
    console.log(products);
  }, [products]);
  return (
    <div className="flex items-center w-full flex-col overflow-x-hidden stop-overflow hover:duration-200">
      <div className="w=11/12 grid grid-cols-3 gap-3 overflow-x-hidden hover:duration-200">
        {products.map((product, index) => (
          <Cards key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default ProductNames;
