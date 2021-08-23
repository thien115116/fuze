import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import React, { Fragment, Suspense, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

// Load

const Music = React.lazy(() => import("./feature/Music/index"));
const Home = React.lazy(() => import("./feature/Home/index"));
function App(props) {
  return (
    <>
      <Router>
        <Fragment>
          <Suspense fallback={<div>load...</div>}>
            <Switch>
              <Route exact path="/">
                <Home props={props} />
              </Route>
              <Route exact path="/music">
                <Music />
              </Route>
            </Switch>
          </Suspense>
        </Fragment>
      </Router>
    </>
  );
}

export default App;
