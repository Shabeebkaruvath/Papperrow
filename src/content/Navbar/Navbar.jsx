import React, { useState } from "react";
import "./Navbar.css";
import cart from "./cart.png";
import search from "./search.png";
import account from "./male.png";
import menu from "./menu.png";
import close from "./close.png";

function Navbar() {
  const [change, setChange] = useState(true);

  return (
    <div>
      <div className={change ? "nav-main" : "nav-main2"}>
        <div className="nav-1">
          <h1 className="logo">PapeRow</h1>
        </div>
        <div className="nav-2">
          <ul>
            <li>Home</li>
            <li>Books</li>
            <li>Blog</li>
            <li>About Us</li>
          </ul>
        </div>
        <div className="nav-3">
          <div className="nav-31">
            <img src={search} alt="search" className="search-icon" />
            <img src={cart} alt="cart" className="cart-icon" />
            <div className="ac-img">
              <img src={account} alt="account" className="account-icon" />
            </div>
            <img
              src={change ? menu : close}
              alt="menu"
              className="menu-icon"
              onClick={() => {
                setChange(!change);
              }}
            />
          </div>
        </div>
      </div>
      <div>
        <div className={change ? "nope" : "nav-2-mobile"}>
          
          <ul>
            <li>Home</li>
            <li>Books</li>
            <li>Blog</li>
            <li>About Us</li>
            <li>Cart</li>
            <li>My Account </li>
            
          </ul>
  
        </div>
      </div>
    </div>
  );
}

export default Navbar;
