import React, { useState } from "react";
import "./index.css";
import { imgData } from "./data";
import Header from "./components/header";
import Lightbox from "./components/lightbox";
import minus from "./images/icon-minus.svg";
import plus from "./images/icon-plus.svg";
import prev from "./images/icon-previous.svg";
import next from "./images/icon-next.svg";
import cart from "./images/icon-cart.svg";

function App() {
  const [products] = useState(imgData);
  const [value, setValue] = useState(0);
  const [amount, setAmount] = useState(0);
  const [slideIndex, setSlideIndex] = useState(1);
  const [showLightBox, setShowLightBox] = useState(false);
  const [cartItems, setCartItems] = useState([]);

  const { mainImage } = products[value];

  const handleMinus = () => {
    setAmount(amount - 1);
    if (amount <= 0) setAmount(0);
  };

  const nextSlide = () => {
    if (slideIndex !== products.length) {
      setSlideIndex(slideIndex + 1);
    } else if (slideIndex === products.length) {
      setSlideIndex(1);
    }
  };

  const previousSlide = () => {
    if (slideIndex !== 1) {
      setSlideIndex(slideIndex - 1);
    } else if (slideIndex === 1) {
      setSlideIndex(products.length);
    }
  };

  const handleAddToCart = () => {
    // Add if the amount is greater than 0
    if (amount > 0) {
      const productToAdd = {
        id: products[value].id,
        name: "Autumn Limited Edition Sneakers",
        price: 125,
        thumbnail: products[value].thumbnail,
        quantity: amount,
      };

      // If the item is already in the cart
      const existingItem = cartItems.find(
        (item) => item.id === productToAdd.id
      );

      if (existingItem) {
        // If it exists, update the quantity
        setCartItems(
          cartItems.map((item) =>
            item.id === productToAdd.id
              ? { ...item, quantity: item.quantity + productToAdd.quantity }
              : item
          )
        );
      } else {
        // If it doesn't exist, add it to the cart
        setCartItems([...cartItems, productToAdd]);
      }
      // Reset the amount after adding to cart
      setAmount(0);
    }
  };

  // Remove item from the cart
  const handleRemoveFromCart = (productId) => {
    setCartItems(cartItems.filter((item) => item.id !== productId));
  };

  return (
    <>
      <Header cartItems={cartItems} handleRemoveFromCart={handleRemoveFromCart}/>
      {showLightBox && (
        <Lightbox
          products={products}
          slideIndex={slideIndex}
          nextSlide={nextSlide}
          previousSlide={previousSlide}
          setShowLightBox={setShowLightBox}
        />
      )}

      <section
        className="max-w-4xl mx-auto grid grid-cols-1 
      lg:grid-cols-2 gap-10 lg:py-20 place-items-center"
      >
        <article>
          <div className="lg:hidden">
            {products.map((item, index) => (
              <div
                key={index}
                className={slideIndex === index + 1 ? "relative" : "hidden"}
              >
                <img
                  src={item.mainImage}
                  alt=""
                  className="w-full lg:rounded-2xl cursor-pointer"
                  onClick={() => setShowLightBox(true)}
                />

                <ul className="lg:hidden">
                  <li>
                    <button
                      onClick={previousSlide}
                      className="bg-white rounded-full p-5 shadow 
                    absolute left-4 top-1/2 -translate-y-1/2 "
                    >
                      <img src={prev} alt="" />
                    </button>
                  </li>
                  <li>
                    <button
                      onClick={nextSlide}
                      className="bg-white rounded-full p-5 shadow 
                    absolute right-4 top-1/2 -translate-y-1/2"
                    >
                      <img src={next} alt="" />
                    </button>
                  </li>
                </ul>
              </div>
            ))}
          </div>

          <div className="hidden lg:block">
            <img
              src={mainImage}
              alt=""
              className="w-full lg:rounded-2xl cursor-pointer"
              onClick={() => setShowLightBox(true)}
            />
          </div>

          <ul className=" hidden lg:flex items-center justify-start gap-5 flex-wrap mt-5">
            {products.map((item, index) => (
              <li
                key={item.id}
                onClick={() => setValue(index)}
                className={`${
                  index === value && "border-2 border-orange-400 opacity-80"
                } 
                  border-1 border-orange-300 rounded-2xl overflow-hidden cursor-pointer `}
              >
                <img src={item.thumbnail} alt="" className="w-14" />
              </li>
            ))}
          </ul>
        </article>


        <article className="px-8 pb-10 text-sm">
          <h2
            className="bg-slate-100 py-1 px-2 uppercase 
          tracking-wide text-sm font-bold inline-block rounded shadow mb-5 text-orange-400"
          >
            Sneaker Company
          </h2>
          <h1 className="text-slate-900 mb-8 font-bold teext-3xl lg:text-4xl">
            Fall Limited Edition Sneakers
          </h1>
          <p className="text-slate-600 mb-5 leading-relaxed">
            These low-profile sneakers are your perfect casual wear companion.
            Featuring a durable rubber outer sole, they’ll withstand everything
            the weather can offer.
          </p>

          <div
            className="flex flex-wrap items-center 
          justify-between lg:flex-col lg:items-start lg:gap-2"
          >
            <ul className="flex items-center gap-5">
              <li className="text-slate-900 font-bold text-2xl">$125.00</li>
              <li
                className="bg-orange-100 py-1 px-2 
                tracking-wide text-sm font-bold inline-block text-orange-400 rounded shadow"
              >
                50%
              </li>
            </ul>

            <p className="text-slate-600 text-sm">
              <s>$250.00</s>
            </p>
          </div>

          <div className="mt-7 lg:flex items-center justify-between gap-2">
            <ul
              className="flex items-center justify-between 
            bg-slate-100 py-2 px-4 rounded shadow lg:flex-1"
            >
              <li onClick={handleMinus} className="cursor-pointer">
                <img src={minus} alt="" />
              </li>
              <li>{amount}</li>
              <li
                onClick={() => setAmount(amount + 1)}
                className="cursor-pointer"
              >
                <img src={plus} alt="" />
              </li>
            </ul>

            <div className="lg:flex-1">
              <button
                onClick={handleAddToCart}
                className="flex items-center justify-center 
                w-full gap-4 bg-orange-500 text-white font-bold
                py-2 px-4 rounded-lg shadow mt-5 w-full lg:mt-0 
                hover:bg-orange-600 transition-all duration-200"
              >
                <img className="w-6 h-6 fill-current" src={cart} alt="" />
                Add to Cart
              </button>
            </div>
          </div>
        </article>
      </section>
    </>
  );
}

export default App;
