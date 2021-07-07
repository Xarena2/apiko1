var createElement = function (type, text, id) {
  var element = document.createElement(type);
  element.innerHTML = text;
  element.id = id;
  document.body.querySelector("#root").append(element);
  return element;
};
var createTextElement = function (type, text, id) {
  var element = document.createElement(type);
  element.innerHTML = text;
  element.id = id;
  document.body.querySelector("#test").append(element);
  return element;
};

var render = function (template, id) {
  document.querySelector(id).append(template);
};
var text_container = createElement("div", "", "test");
text_container.style.background = "red";
var test = createTextElement("p", "Hello world", "p");
var test1 = createTextElement("p", "This is just a node tet", "p");
var test2 = createTextElement("p", "Text content", "p");
test.style.fontWeight = "bold";
test1.style.fontWeight = "bold";
test2.style.fontWeight = "bold";
test.style.fontSize = "18px";
test1.style.fontSize = "18px";
test2.style.fontSize = "18px";

function show() {
  render(text_container, "#root");
  render(test, "#test");
  render(test1, "#test");
  render(test2, "#test");
}
/* console.log(typeof(test)); */

function App() {
  return show;
}
export default App;
