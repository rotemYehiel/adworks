import React from 'react';
import { createBrowserHistory } from 'history';
import { HashRouter as Router, Route, Switch } from "react-router-dom";
import './App.css';


import JobList from './pages/JobList'

const history = createBrowserHistory();

function App() {
  return (
    <div className="App">
      <Router history={history}>
        <header className="main-header">Get A Job!</header>
        <main>
          <Switch>
            <Route path="/" exact component={JobList} />
          </Switch>
        </main>
      </Router>
    </div>
  );
}

export default App;
