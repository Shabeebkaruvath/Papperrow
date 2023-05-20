import React from "react";
import "./Homethree.css";
import book1 from "./book1.jpg";
import book2 from "./book2.jpg";
import book3 from "./book4.jpg";
import book4 from "./book6.jpg";
import book5 from "./book8.jpg";
function homethree() {
  return (
    <div className="index3">
      <div className="index31">
        <h1 id="werty">Best Selling Books</h1>
      </div>
      <div className="index32">
        <img src={book1} alt="1" />
        <img src={book2} alt="2" />
        <img src={book3} alt="3" />
        <img src={book4} alt="4" />
        <img src={book5} alt="5" />
      </div>
      <div className="index33">
        <button className="btn-viewmore">View More</button>
      </div>
    </div>
  );
}

export default homethree;
