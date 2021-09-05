import React from "react";
import "./asset/style.css";
import Effect1 from "./SideBarEffect/Effect_1";
import { Switch, Route, useRouteMatch } from "react-router-dom";
import MainTable from "./Main/MainTable";
import CircleTextAnimation from "./MouseEffect/CircleTextAnimation";
import Load from "./LoadEffect/Load";
import CardResponsive from "./CardResponsive/CardResponsive";
export default function EffectArea() {
  const { path } = useRouteMatch();
  return (
    <>
      <Switch>
        <Route exact path={`${path}`}>
          <MainTable path={path} />
        </Route>
        <Route path={`${path}/effect-1`}>
          <Effect1 />
        </Route>
        <Route path={`${path}/effect-2`}>
          <CircleTextAnimation />
        </Route>
        <Route path={`${path}/effect-3`}>
          <Load />
        </Route>
        <Route path={`${path}/effect-4`}>
          <CardResponsive />
        </Route>
      </Switch>
    </>
  );
}
