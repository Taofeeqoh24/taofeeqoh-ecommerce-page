import React, { useState } from "react";
import logo from "../images/logo.svg";
import avatar from "../images/image-avatar.png";
import cart from "../images/icon-cart.svg";
import menu from "../images/icon-menu.svg";
import close from "../images/icon-close.svg";
import Cart from "./cart";

function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [openCart, SetOpenCart] = useState(false);
  return (
    <>
      <header
        className=" relative flex items-center justify-between p-8 border-b border-slate-400 
      max-w-4xl mx-auto "
      >
        <div className="flex items-center justify-start gap-4 ">
          <ul className="flex items-center justify-start gap-4">
            {!isOpen && (
              <li onClick={() => setIsOpen(true)} className="lg:hidden">
                <img src={menu} alt="" className="cursor-pointer w-5" />
              </li>
            )}
            {isOpen && (
              <li
                onClick={() => setIsOpen(false)}
                className="lg:hidden close absolute top-8 left-8 w-10"
              >
                <img
                  src={close}
                  alt=""
                  className="cursor-pointer w-5 p-1 border-2"
                />
              </li>
            )}
            <li>
              <img src={logo} alt="" />
            </li>
          </ul>

          <nav className={isOpen && "open shadow-2xl p-8 lg:shadow-none lg:p-0 "}>
            <ul className="pt-12 flex items-start flex-col gap-4 lg:flex-row">
              <li>Collections</li>
              <li>Men</li>
              <li>Women</li>
              <li>About</li>
              <li>Contact</li>
            </ul>
          </nav>
        </div>
        <div>
          <ul className="flex items-center justify-start gap-4 ">
            <li>
              <button onClick={() => SetOpenCart(!openCart)}>
                <img
                  src={cart}
                  alt=""
                  className="w-6 h-6 fill-current cursor-pointer text-2xl text-slate-600"
                />
              </button>
            </li>
            <li>{openCart && <Cart />}</li>
            <li>
              <img src={avatar} alt="" className="w-10" />
            </li>
          </ul>
        </div>
      </header>
    </>
  );
}

export default Header;
