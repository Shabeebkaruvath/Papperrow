import React from "react";
import hero1 from "./hero-img.jpg";
import "./Home.css";
function Homeone() {
  return (
    <div>
      <div className="index1">
        <div className="index11">
          <div className="home-new">
            <p>NEW RELEASE</p>
          </div>
          <h1 className="hero-title">
            The Everyday Hero Manifesto: Activate Your Positivity
          </h1>
          <p className="hero-discription">
            For over twenty-five years, leadership legend and personal-mastery
            path-blazer Robin Sharma has mentored billionaires, business titans,
            professional-sports superstars and entertainment royalty via a
            revolutionary methodology that led them to accomplish rare-air
            results. Now, in this groundbreaking book, Sharma makes his
            transformational system available to anyone who is ready for
            undefeatable positivity, monumental productivity, deep spiritual
            freedom and a life of helping others. In The Everyday Hero Manifesto
            you will · The hidden habits used by many of the world’s most
            creative and successful people to realize their visionary ambitions.
            
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
    </div>
  );
}

export default Homeone;
