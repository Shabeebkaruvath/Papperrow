import React from "react";
import hero1 from "./hero-img.jpg";
import author from "./robin.avif";
import "./Home.css";

function Home() {
  return (
    <div className="index">
      <div className="index1">
        <div className="index11">
          <div className="home-new">
            <p>NEW RELEASE</p>
          </div>
          <h1 className="hero-title">The Monk Who Sold His Ferrari</h1>
          <p className="hero-discription">
            The Monk Who Sold His Ferrari is a self-help classic telling the
            story of fictional lawyer Julian Mantle, who sold his mansion and
            Ferrari to study the seven virtues of the Sages of Sivana in the
            Himalayan mountains.
          </p>
          <div className="index1-btn">
            <button className="hero-btn">Buy Now</button>
            <button className="hero-btn">Know More</button>
          </div>
        </div>
        <div className="index12">
          <img src={hero1} alt="" />
        </div>
      </div>
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
            Sold His Ferrari book series.Sharma worked as a litigation
            lawyer until age 25,when he self-published MegaLiving (1994), a
            book on stress management and spirituality.He initially also
            self-published The Monk Who Sold His Ferrari, which was then picked
            up for wider distribution by HarperCollins.Sharma has published
            12 other books, and founded the training company Sharma Leadership
            International.
          </p>
          <div className="index2-btn">
            <button className="author-btn">Read More</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;





