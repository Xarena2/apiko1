import React from "react";
import ReactDOM from "react-dom";

// import App from "./components/lesson1/App";
// import Lesson2 from "./components/lesson2/App";
import Lesson3 from "./components/lesson3-4/App";

const rootElement = document.getElementById("root");
ReactDOM.render(
  <React.StrictMode>
    <Lesson3 />
  </React.StrictMode>,
  rootElement
);
