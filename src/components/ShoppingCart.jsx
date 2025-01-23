import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addCart, decreaseCartItemQuantity, increaseCartItemQuantity, removeItemFromCart } from "../Slice/Cart";



const ShoppingCart = () => {
  const [quantity, setQuantity] = useState(1);
  const products = useSelector((state) => state.cart.Cart)
  console.log(products);
  const dispatch = useDispatch();
  function handleIncrement(id) {
    dispatch(increaseCartItemQuantity(id))
  }
  const handleDecrement = (id) => {
    dispatch(decreaseCartItemQuantity(id));
  };

  const handleDelete = (id) =>{dispatch(removeItemFromCart(id))}
  const handleSaveForLater = () => alert("Item saved for later.");

  
  
  return (
    <div className="w-full px-4">
      <h2 className="font-semibold mb-4 pb-4 border-b text-lg">
        Shopping Cart
      </h2>

      {products.length > 0 ? (
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Products Section */}
          <div className="flex-1">
            {products.map((product) => (
              <div
                className="p-4 bg-white border rounded-md mb-6 "
                key={product.id}
              >
                {/* Cart Item */}
                <div className="flex items-start border-b pb-4 gap-4 ">
                  {/* Product Image */}
                  <img
                    src={product.image}
                    alt={product.brand}
                    className="w-28 h-28 object-contain mt-4 flex-shrink-0"
                  />

                  {/* Product Details */}
                  <div className="flex-1">
                    <h3 className="text-md font-semibold text-black">
                      {product.brand}
                    </h3>
                    <h3 className="text-sm font-semibold text-black">
                      {product.title}
                    </h3>
                    <p className="text-green-600 text-sm">In stock</p>
                    <p className="text-gray-500 text-sm">
                      Eligible for FREE Shipping
                    </p>
                    <p className="text-sm text-black">
                      <strong>discount :</strong> {product.discountPercentage} %
                    </p>
                    <p className="text-sm text-black">
                      <strong>Price:</strong> ₹
                      {product.originalPrice.toLocaleString()}
                    </p>
                    

                    {/* Actions */}
                    <div className="flex items-center gap-4 mt-3">
                      {/* Quantity Selector */}
                      <div className="flex items-center border rounded">
                        <button
                          className="px-3 py-1 bg-gray-200 hover:bg-gray-300 rounded-l text-black"
                          onClick={() => handleDecrement(product.id)}
                        >
                          -
                        </button>
                        <span className="px-4 text-black">
                          {product.quantity}
                        </span>
                        <button
                          className="px-3 py-1 bg-gray-200 hover:bg-gray-300 rounded-r  text-black"
                          onClick={() => handleIncrement(product.id)}
                        >
                          +
                        </button>
                      </div>

                      {/* Action Buttons */}
                      <button
                        className="text-sm text-blue-600 hover:underline"
                        onClick={() => handleDelete(product.id)}
                      >
                        Delete
                      </button>
                      <button
                        className="text-sm text-blue-600 hover:underline"
                        onClick={() => handleSaveForLater(product.id)}
                      >
                        Save for later
                      </button>
                    </div>
                  </div>

                  {/* Product Price */}
                  <div className="text-right">
                    <p className="text-lg font-semibold">
                      ₹{product.originalPrice.toLocaleString()}
                    </p>
                  </div>
                </div>

                {/* Subtotal */}
                <div className="flex justify-between items-center mt-4">
                  <p className="text-lg font-semibold">
                    Subtotal ({product.quantity} item
                    {product.quantity > 1 ? "s" : ""}):
                  </p>
                  <p className="text-lg font-semibold">
                    ₹
                    {(
                      product.originalPrice * product.quantity
                    ).toLocaleString()}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Sidebar Section */}
          <div className="w-full lg:w-1/3 bg-white p-6 rounded-md shadow-md">
            <h3 className="text-xl font-bold mb-4">Order Summary</h3>
            <p className="text-lg font-semibold mb-2">
              Total Price: ₹
              {products
                .reduce((total, p) => total + p.originalPrice * p.quantity, 0)
                .toLocaleString()}
            </p>
            <button className="w-full py-2 bg-blue-600 text-white font-semibold rounded hover:bg-blue-700">
              Proceed to Checkout
            </button>
          </div>
        </div>
      ) : (
        <p className="text-center text-lg text-gray-500">Your cart is empty.</p>
      )}
    </div>
  );
};

export default ShoppingCart;
