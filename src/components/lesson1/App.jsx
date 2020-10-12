//import React from "react";
var createElement = function (type, text, id) {
  var element = document.createElement(type);
  element.innerHTML = text;
  element.id = id;
  document.body.append(element);
  return element;
};

var render = function (template, node) {
  node.innerHTML = template;
  return node;
};

var test = createElement("h1", "test", "");
var test1 = createElement("h2", "test", "");
var test2 = createElement("h3", "test", "");
var text_container = createElement("div", "", "test");
function show() {
  render(text_container, document.querySelector("#root"));
  render(test, document.querySelector("#test"));
  render(test1, document.querySelector("#test"));
  render(test2, document.querySelector("#test"));
}
/* console.log(typeof(test)); */

function App() {
  return show;
}
export default App;
