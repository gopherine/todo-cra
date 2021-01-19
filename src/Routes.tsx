import React, { FC } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

//importing components
import Home from "./components/Home";
import NotFound404 from "./components/NotFound404";

const Routes: FC = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route component={NotFound404} />
      </Switch>
    </Router>
  );
};

export default Routes;
