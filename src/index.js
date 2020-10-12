import React from "react";
import ReactDOM from "react-dom";

// import App from "./components/lesson1/App";
import Lesson2 from "./components/lesson2/App";

const rootElement = document.getElementById("root");
ReactDOM.render(
  <React.StrictMode>
    <Lesson2 />
  </React.StrictMode>,
  rootElement
);
