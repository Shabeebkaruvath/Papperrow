import React from "react";
import Homeone from "./Homeone";
import Hometwo from "./hometwo";
import Homethree from "./homethree";
import "./Home.css";

function Home() {
  return (
    <div className="index">
      <Homeone />
      <Hometwo />
      <Homethree />
    </div>
  );
}

export default Home;
