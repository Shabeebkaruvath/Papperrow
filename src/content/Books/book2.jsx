import React from "react";
import book1 from "./book-img.jpg";
function book2() {
  return (
    <div className="book2">
      <div className="book21">
        <div className="book-new">
          <p>NEW RELEASE</p>
        </div>
        <h1 className="book-title">
          The Everyday Hero Manifesto: Activate Your Positivity
        </h1>
        <p className="book-discription">
          For over twenty-five years, leadership legend and personal-mastery
          path-blazer Robin Sharma has mentored billionaires, business titans,
          professional-sports superstars and entertainment royalty via a
          revolutionary methodology that led them to accomplish rare-air
          results. Now, in this groundbreaking book, Sharma makes his
          transformational system available to anyone who is ready for
          undefeatable positivity, monumental productivity, deep spiritual
          freedom and a life of helping others. In The Everyday Hero Manifesto
          you will · The hidden habits used by many of the world’s most creative
          and successful people to realize their visionary ambitions.
        </p>
        <div className="book1-btn">
          <button className="book-btn">Buy Now</button>
        </div>
      </div>
      <div className="book12">
        <img src={book1} alt="" />
      </div>
    </div>
  );
}

export default book2;
