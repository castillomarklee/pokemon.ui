import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import MainPage from "../components/MainPage/MainPage";

const MainRouter = () => (
  <Switch>
    <Route exact path="/" component={MainPage} />
    <Redirect from='*' to='/' />
  </Switch>
);

export default MainRouter;
