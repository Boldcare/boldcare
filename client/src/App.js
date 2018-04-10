import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Appointment from "./pages/Appointment";
import Patient from "./pages/Patient";
import main from "./pages/main";
import NoMatch from "./pages/NoMatch";
import Nav from "./components/Nav";

const App = () =>
  <Router>
    <div>
      <Nav />
      <Switch>
        <Route exact path="/" component={main} />
        <Route exact path="/patient" component={Patient} />
        <Route exact path="/appointment" component={Appointment} />
        <Route exact path="/patient/:id" component={Appointment} />
        <Route component={NoMatch} />
      </Switch>
    </div>
  </Router>;

export default App;
