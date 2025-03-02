import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addToCart } from "../redux/cartSlice";
import useFetchProduct from "../hooks/useFetchProducts";

const ProductDetail = () => {
  const { id } = useParams();
  const {product, loading, error} = useFetchProduct(id);
  const dispatch = useDispatch();

    if (loading) return <div className="p-4 text-center">Loading product details...</div>;
    if (!product) return <div className="p-4 text-center">Product not found.</div>;
    if (error) return <div className="p-4 text-center">Error Fetchinf Product details: {error.message}</div>
  return (
    <div className="p-4 bg-gray min-h-screen pt-20">
      <div className="flex flex-col md:flex-row gap-8">
        {/* Product Image */}
        <div className="flex-1">
          <img
            src={product.thumbnail}
            alt={product.title}
            className="w-full max-w-lg mx-auto bg-white rounded-lg shadow-md"
          />
        </div>

        {/* Product Details */}
        <div className="flex-1 bg-white p-6 rounded-lg shadow-md">
          <h1 className="text-3xl font-bold mb-4 text-gray-800">{product.title}</h1>
          <p className="text-gray-600 mb-6">{product.description}</p>
          <p className="text-2xl text-sky-600 font-semibold mb-6">${product.price.toFixed(2)}</p>
          <p className="text-sm text-gray-500 mb-6">Category: {product.category}</p>
          <button
            className="bg-black text-white px-4 py-2 rounded hover:bg-slate-600 transition"
            onClick={() => dispatch(addToCart(product))}
          >
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
