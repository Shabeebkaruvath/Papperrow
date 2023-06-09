import React, { useState } from "react";

import "./Navbar.css";
import cart from "./cart.png";
import search from "./search.png";
import account from "./male.png";
import menu from "./menu.png";
import close from "./close.png";
import { Link } from "react-router-dom";

function Navbar() {
  const [change, setChange] = useState(true);

  return (
    <div>
      <div className={change ? "nav-main" : "nav-main2"}>
        <div className="nav-1">
          <Link className="logo-main" to="/"><h1>PapeRow</h1></Link>
        </div>
        <div className="nav-2">
          <ul>
            <li>
              <Link to="/" className="nav-link">
                Home
              </Link>
            </li>
            <li>
              <Link to="/book" className="nav-link">
                Book
              </Link>
            </li>
            <li>
              <Link to="/blog" className="nav-link">
                Blog
              </Link>
            </li>
            <li>
              <Link to="/about" className="nav-link">
                About Us
              </Link>
            </li>
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
            <li>
              <Link to="/" className="nav-link">
                Home
              </Link>
            </li>
            <li>
              <Link to="/book" className="nav-link">
                Book
              </Link>
            </li>
            <li>
              <Link to="/blog" className="nav-link">
                Blog
              </Link>
            </li>
            <li>
              <Link to="/about" className="nav-link">
                About Us
              </Link>
            </li>
            <li>Cart</li>
            <li>My Account </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
