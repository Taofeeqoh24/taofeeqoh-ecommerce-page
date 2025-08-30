// import React from "react";
import iconDelete from "../images/icon-delete.svg";

interface CartItem {
  id: number;
  name: string;
  price: number;
  quantity: number;
  thumbnail?: string;
}

interface CartProps {
  cartItems: CartItem[]; 
  handleRemoveFromCart: (productId: number) => void; 
  openCart: boolean;
}

function Cart({ cartItems, handleRemoveFromCart, openCart }: CartProps) {
  return (
    <>
      <article
        className={`bg-white rounded-2xl shadow-2xl 
        p-8 absolute right-8 top-32 left-8 lg:w-96 lg:left-auto lg:top-20
        transition-all duration-300 
        transform ${
          openCart
            ? "scale-100 opacity-100"
            : "scale-95 opacity-0 pointer-events-none"
        }`}
        style={{
          zIndex: 1000,
        }}
      >
        <h2
          className="border-b border-slate-400
            font-bold pb-2 mb-8"
        >
          Cart
        </h2>

        {cartItems.length === 0 ? (
          <div className="h-20 flex items-center justify-center">
            <p className="text-center text-slate-500">Your Cart is empty</p>
          </div>
        ) : (
          <div>
            {cartItems.map((item) => (
              <div
                key={item.id}
                className="flex items-center justify-between mb-6"
              >
                <img
                  src={item.thumbnail}
                  alt={item.name}
                  className="rounded-lg w-14"
                />
                <ul>
                  <li className="text-slate-600 truncate max-w-[150px]">
                    {item.name}
                  </li>
                  <li className="text-slate-600">
                    ${item.price.toFixed(2)} x {item.quantity}{" "}
                    <span className="font-bold text-slate-900">
                      ${(item.price * item.quantity).toFixed(2)}
                    </span>
                  </li>
                </ul>
                <button onClick={() => handleRemoveFromCart(item.id)}>
                  <img
                    src={iconDelete}
                    alt="Delete item"
                    className="w-4 h-4 hover:opacity-70 transition-opacity duration-200"
                  />
                </button>
              </div>
            ))}

            <button
              className="w-full gap-4 bg-orange-500 text-white font-bold
                py-2 px-4 rounded-lg shadow mt-5
                hover:bg-orange-600 transition-all duration-200"
            >
              Checkout
            </button>
          </div>
        )}
      </article>
    </>
  );
}

export default Cart;
