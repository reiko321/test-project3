import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
// import logo from './logo.svg';
import './App.css';
import Login from './components/Login/login.js'
import Search from './components/Search/search.js'
import Results from './components/Results/results.js'
import NoMatch from './components/NoMatch/noMatch.js'

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

export default App;
