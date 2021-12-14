import React from 'react';
import {BrowserRouter as Router, Link, Route, Switch} from "react-router-dom";
import CheckOutPage from "./component/checkout/CheckOutPage";
import Home from "./component/Home";

function App() {
  return (
        <Router>
          <Switch>
            <Route exact path='/' render={() => (
                <Home/>
            )}/>
            <Route exact path='/checkout' render={() => (
                <CheckOutPage/>
            )}/>
          </Switch>
        </Router>
  );
}

export default App;
