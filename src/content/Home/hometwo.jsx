import React from "react";
import author from "./robin.avif";
import "./Home.css";
function hometwo() {
  return (
    <div>
      <div className="index2">
        <div className="index22">
          <img src={author} alt="author" />
        </div>
        <div className="index21">
          <div className="home-author">
            <p>About Author</p>
          </div>
          <h1 className="author-title">Robin Sharma</h1>
          <p className="author-discription">
            Robin Sharma is a Canadian writer, best known for his The Monk Who
            Sold His Ferrari book series.Sharma worked as a litigation lawyer
            until age 25,when he self-published MegaLiving (1994), a book on
            stress management and spirituality.He initially also self-published
            The Monk Who Sold His Ferrari, which was then picked up for wider
            distribution by HarperCollins.Sharma has published 12 other books,
            and founded the training company Sharma Leadership International.
          </p>
          <div className="index2-btn">
            <button className="author-btn">Read More</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default hometwo;
