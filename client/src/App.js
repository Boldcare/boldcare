import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Patient from "./pages/Patient";
import Appointment from "./pages/Appointment";
import Main from "./pages/main";
import Detail from "./pages/Detail";
import NoMatch from "./pages/NoMatch";
import Nav from "./components/Nav";

const App = () =>
  <Router>
    <div>
      <Nav />
      <Switch>
        <Route exact path="/" component={Main} />
        <Route exact path="/patients" component={Patient} />
        <Route exact path="/appointment" component={Appointment} />
        <Route exact path="/patients/patients" component={Patient} />
        <Route exact path="/patients/:id" component={Detail} />
        <Route component={NoMatch} />
      </Switch>
    </div>
  </Router>;

export default App;
