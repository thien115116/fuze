import React from "react";
import "./asset/style.css";
import Effect1 from "./SideBarEffect/Effect_1";
import { Switch, Route, Link, useRouteMatch } from "react-router-dom";
import MainTable from "./Main/MainTable";
export default function EffectArea() {
  const { path, url } = useRouteMatch();
  return (
    <>
      <Switch>
        <Route exact path={`${path}`}>
          <MainTable path={path} />
        </Route>
        <Route path={`${path}/effect-1`}>
          <Effect1 />
        </Route>
      </Switch>
    </>
  );
}
