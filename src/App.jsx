import React from "react";
import { Suspense, lazy } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";


const ProductList = lazy(() => import("./components/ProductList"));
const Cart = lazy(() => import("./components/Cart"));
const ProductDetail = lazy(() => import("./components/ProductDetail"));
const NotFound = lazy(() => import("./components/NotFound"));
const App = () => (
  <Router>
    <div className="min-h-screen bg-gray-300 transition-all duration-500">
      <Header />
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path="/" element={<ProductList />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/products/:id" element={<ProductDetail />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Suspense>
    </div>
  </Router>
);

export default App;
