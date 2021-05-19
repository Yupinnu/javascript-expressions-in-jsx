import React from "react";
import ReactDOM from "react-dom";

const name = "Yupin";
const name2 = "Yupenis";
const num = 69;
ReactDOM.render(
  <div>
    <h1>
      Hello {name} {name2}!
    </h1>
    <p>Your lucky number is {num}</p>
  </div>,
  document.getElementById("root")
);
