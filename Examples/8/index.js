import React from "react";
import { Switch, Route } from "react-router-dom";

const Routes = () => (
  <Switch>
    <Route path="/" exact={true} component={() => <div>Index</div>} />
    <Route path="/form" exact={true} component={DemoEight} />
  </Switch>
);

export default Routes;
