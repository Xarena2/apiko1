import React from "react";
import { BrowserRouter, Switch, Route, } from "react-router-dom";
import { Header } from "./header";
import { routes } from "./routes";
import { HomePage } from "./HomePage";


const App = () => {
  return (
    <BrowserRouter>
      <Header />
      <Switch>
        <Route exact path={routes.HOME} component={HomePage} />
        <Route path={routes.ABOUT} render={() => <div>About Page</div>} />
        <Route path={routes.FAQ} render={() => <div>FAQ Page</div>} />
      </Switch>
    </BrowserRouter>
  );
};
export default App;
