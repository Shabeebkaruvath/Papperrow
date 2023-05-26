import React from "react";
import "./Book.css";
import pic1 from "./book1.jpg";
import pic2 from "./book2.jpg";
import pic3 from "./book3.jpg";
import pic4 from "./book4.jpg";
import pic5 from "./book5.jpg";
import pic6 from "./book6.jpg";
import pic7 from "./book8.jpg";
import pic8 from "./book9.jpg";

function book3() {
  return (
    <div className="book-three">
      <div className="more-book">
        <h1>More Books</h1>
      </div>
      <div className="more-img">
        <div className="img-book">
          <img src={pic1} alt="" />
          <p>
            <b>THE MONK WHO SOLD HIS FERRARI</b>
          </p>
          <pre><del>$50</del> $40</pre>
        </div>
        <div className="img-book">
          <img src={pic2} alt="" />
          <p>
            <b>LEADERSHIP WISDOM</b>
          </p>
          <pre>$40</pre>
        </div>
        <div className="img-book">
          <img src={pic3} alt="" />
          <p>
            <b>The Grateness Guide</b>
          </p>
          <pre>$40</pre>
        </div>
        <div className="img-book">
          <img src={pic4} alt="" />
          <p>
            <b>THE SAINT THE SURFER AND THE CEO</b>
          </p>
          <pre>$40</pre>
        </div>
        <div className="img-book">
          <img src={pic5} alt="" />
          <p>
            <b>THE LEADER WHO HAD NO TITLE</b>
          </p>
          <pre>$40</pre>
        </div>
        <div className="img-book">
          <img src={pic6} alt="" />
          <p>
            <b>THE 5AM CLUB</b>
          </p>
          <pre>$40</pre>
        </div>
        <div className="img-book">
          <img src={pic7} alt="" />
          <p>
            <b>WHO WILL CRY WHEN YOU DIE</b>
          </p>
          <pre>$40</pre>
        </div>
        <div className="img-book">
          <img src={pic8} alt="" />
          <p>
            <b>The Monk Who Sold His Ferrari</b>
          </p>
          <pre>$40</pre>
        </div>
      </div>
    </div>
  );
}

export default book3;
