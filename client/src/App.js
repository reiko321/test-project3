import React from 'react';
import { BrowserRouter as Router, Route, Switch, withRouter } from "react-router-dom";
// import logo from './logo.svg';
import './App.css';
import Login from './components/Login/login'
import Search from './components/Search/search'
import Results from './components/Results/results'
import NoMatch from './components/NoMatch/noMatch'

function App() {
  return (
    <Router>
      <div>
        <Switch>
          <Route exact path="/" component={Login} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/search" component={Search} />
          <Route exact path="/results" component={Results} />
          <Route component={NoMatch} />
        </Switch>
      </div>
    </Router>
  );
}

export default withRouter(App);
