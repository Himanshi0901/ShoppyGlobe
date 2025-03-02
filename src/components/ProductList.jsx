import React, { useState, useEffect } from "react";
import axios from "axios";
import ProductItem from "./ProductItem";

const ProductList = () => {
  const [products, setProducts] = useState([]);
  const [search, setSearch] = useState("");
  const [sortBy, setSortBy] = useState("");

  useEffect(() => {
    axios.get("https://dummyjson.com/products").then((res) => {
      setProducts(res.data.products);
    });
  }, []);

  const handleSort = (criteria) => {
    const sorted = [...products].sort((a, b) => {
      if (criteria === "price") return a.price - b.price;
      if (criteria === "title") return a.title.localeCompare(b.title);
      return 0;
    });
    setProducts(sorted);
    setSortBy(criteria);
  };

  const filteredProducts = products.filter((product) =>
    product.title.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="pt-20 p-4 bg-gray min-h-screen">
      <div className="flex flex-col md:flex-row gap-4 mb-6 items-center ">
        <input
          type="text"
          placeholder="Search products..."
          className="p-3 border rounded-lg shadow-sm focus:ring-2 focus:ring-sky-500 w-full md:w-1/3"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <select
          className="p-3 border rounded-lg shadow-sm focus:ring-2 focus:ring-sky-500 w-full md:w-1/3"
          value={sortBy}
          onChange={(e) => handleSort(e.target.value)}
        >
          <option value="">Sort By</option>
          <option value="price">Price</option>
          <option value="title">Title</option>
        </select>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {filteredProducts.map((product) => (
          <ProductItem key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default ProductList;
