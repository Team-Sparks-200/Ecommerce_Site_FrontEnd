import React from 'react';
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import CheckOutPage from "./component/checkout/CheckOutPage";
import Home from "./component/Home";
import AboutUs from "./component/OtherPages/AboutUs";
import Faq from "./component/OtherPages/Faq";
import ContactUs from "./component/OtherPages/ContactUs";

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
            <Route exact path='/about' render={() => (
                <AboutUs/>
            )}/>
            <Route exact path='/faq' render={() => (
                <Faq/>
            )}/>
            <Route exact path='/contact' render={() => (
                <ContactUs/>
            )}/>
          </Switch>
        </Router>
  );
}

export default App;
