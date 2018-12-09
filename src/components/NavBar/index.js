import React from "react";
import "./style.css";

const NavBar = props => (
  <nav>
    <ul>
      <li className="brand">
        <a href="/clicky-game/">{props.title}</a>
      </li>

      <li id="result">{props.result}</li>

      <li id="current-score">Current Score: {props.currentScore}</li>

      <li id="top-score">Top Score: {props.topScore}</li>
    </ul>
  </nav>
);

export default NavBar;