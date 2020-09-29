import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import logo from './logo.svg';
import './App.css';
import Dashboard from './pages/Dashboard';
import Register from './pages/Register';
import LoginQL from './pages/LoginQL';

function App() {
  return (
    <div>
      <Router>
        <div>
          <Switch>
            <Route path="/dashboard">
              <Dashboard />
            </Route>
            <Route path="/dang-ky">
              <Register />
            </Route>
            <Route path="/">
              <LoginQL/>
            </Route>
          </Switch>
        </div>
      </Router >
    </div>
  );
}

export default App;
