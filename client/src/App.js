import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import React, { Fragment, Suspense } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./assets/css/reset.css";
import "./assets/css/global.css";
import Load from "components/Load";
// Load

const Music = React.lazy(() => import("./feature/Music/index"));
const Home = React.lazy(() => import("./feature/Home/index"));
const VoiceControl = React.lazy(() => import("./feature/VoiceControl/index"));
const DragContent = React.lazy(() => import("./feature/DragContent/index"));
const EffectArea = React.lazy(() => import("./feature/EffectArea/index"));

function App(props) {
  return (
    <>
      <Router>
        <Fragment>
          <Suspense fallback={<Load></Load>}>
            <Switch>
              <Route exact path="/">
                <Home props={props} />
              </Route>
              <Route exact path="/music">
                <Music />
              </Route>
              <Route exact path="/drag">
                <DragContent />
              </Route>
              <Route path="/effect">
                <EffectArea />
              </Route>
              <Route path="/voice">
                <VoiceControl />
              </Route>
            </Switch>
          </Suspense>
        </Fragment>
      </Router>
    </>
  );
}

export default App;
