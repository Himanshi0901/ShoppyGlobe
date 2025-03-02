import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { removeFromCart } from "../redux/cartSlice";

const Cart = () => {
  const cartItems = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  const totalPrice = cartItems.reduce((total, item) => total + item.price, 0); // Calculate total price

  return (
    <div className="p-4 bg-gray min-h-screen pt-20">
      <h1 className="text-3xl font-bold mb-6 text-gray-800">Shopping Cart</h1>
      {cartItems.length === 0 ? (
        <p className="text-gray-600">Your cart is empty. Add some products!</p>
      ) : (
        <div className="flex flex-col gap-4">
          {/* Cart Items */}
          <ul className="space-y-4">
            {cartItems.map((item) => (
              <li
                key={item.id}
                className="flex items-center justify-between border-b pb-2 bg-white p-4 rounded-lg shadow-md hover:shadow-lg hover:bg-slate-300 "
              >
                <div className="flex items-center gap-4">
                  <img
                    src={item.thumbnail}
                    alt={item.title}
                    className="w-16 h-16 object-cover rounded"
                  />
                  <div>
                    <h2 className="font-bold text-gray-800">{item.title}</h2>
                    <p className="text-sm text-gray-600">${item.price.toFixed(2)}</p>
                  </div>
                </div>
                <button
                  className="bg-black text-white px-3 py-1 rounded hover:bg-red-600 transition-all duration-300"
                  onClick={() => dispatch(removeFromCart(item.id))}
                >
                  Remove
                </button>
              </li>
            ))}
          </ul>

          {/* Total Price */}
          <div className="text-right border-t pt-4 mt-4">
            <h2 className="text-xl font-bold text-black">Total: ${totalPrice.toFixed(2)}</h2>
            <button className="bg-black text-white px-4 py-2 rounded hover:bg-slate-600 transition-transform transform hover:scale-105 mt-2">
              Proceed to Checkout
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Cart;
