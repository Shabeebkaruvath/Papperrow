import React from "react";
import "./Footer.css";
import instagram from "./instagram.png";
import facebook from "./facebook.png";
import youtube from "./youtube.png";
import twitter from "./twitter.png";
function Footer() {
  return (
    <div className="foot-main">
       
      <div className="foot2">
        <div className="logo">
          <h1>PAPEROW</h1>
        </div>
        <div className="foot-link">
          <ul>
            <li>Contact Us</li>
            <li>Shipping Information</li>
            <li>Return Policy</li>
          </ul>
          <ul>
            <li>FAQ</li>
            <li>Privacy Policy</li>
            <li>Terms and Conditions</li>
          </ul>
        </div>
        <div className="social-media">
          <img src={facebook} alt="facebook" />
          <img src={instagram} alt="instagram" />
          <img src={youtube} alt="youtube" />
          <img src={twitter} alt="twitter" />
        </div>
      </div>

      <div className="foot3">
        <p>
          Copyright © 2023 <span className="logo">PAPEROW</span> | Devoleped by{" "}
          <a href="https://shabeebkaruvath.github.io/Shabeeb/" className="me">
            shabeeb
          </a>
        </p>
      </div>
    </div>
  );
}

export default Footer;
