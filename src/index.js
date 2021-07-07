import React from "react";
import ReactDOM from "react-dom";
// import App from "./components/lesson1/App";
// import Lesson2 from "./components/lesson2/App";
// import Lesson3 from "./components/lesson6/App";
import Lesson1 from "./components/lesson1/App";
// import Lesson5 from "./components/lesson5/App"
// import { BrowserRouter, Route, Switch } from "react-router-dom";
// import { routes } from "./routes/routes.config";
// import { Header } from "./components/lesson7_MST_1/pages/header";
// import { Input } from "./components/lesson7_MST_1/components/Input";
// import { rootStore as rs } from "./components/lesson7_MST_1/stores/rootStore";

// console.log("123" + rs.groups.list);
const Add = () => (
  <Lesson1 />
  // <BrowserRouter>
  //   <Header />
  //   <Input />
  //   <Switch>
  //     <Route exact path={routes.HOME} render={() => <div>Home page</div>} />
  //     <Route path={routes.ABOUT} render={() => <div>About page</div>} />
  //     <Route path={routes.LISTS} component={Lesson3} />
  //     <Route path={routes.CUSTOMLISTS} component={Input} />
  //     {rs.groups.list.map((item) => (
  //       <Route path={`/${item.title}`} component={Input} />
  //     ))}
  //   </Switch>
  // </BrowserRouter>
);
const rootElement = document.getElementById("root");
ReactDOM.render(
  <React.StrictMode>
    <Add />
  </React.StrictMode>,
  rootElement
);
