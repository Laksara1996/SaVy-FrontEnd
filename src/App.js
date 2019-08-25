import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import Navigation from './Components/Navigation'

import Login from './Components/Login/Login';
import SignUp from './Components/Login/SignUp'
import Home from './Layout/Home';

import * as ROUTES from './Constants/Routes';


/* function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Redirect from = "/" to = "/Login" exact/>
        <Route path = "/Login" component = {Login}/>
        <Route path = "/DashBoard" component = {Drawer}/>
      </Switch>

    </BrowserRouter>

  );
} */

const App = () => (
  <Router>
    <div>
      <Navigation />

      <hr />

      <Route exact path = {ROUTES.DEFAULT} component = {Login}/>
      <Route path = {ROUTES.HOME} component = {Home}/>

      <Route path = {ROUTES.LOGIN} component = {Login}/>
      <Route path = {ROUTES.SIGN_UP} component = {SignUp}/>


    </div>

  </Router>
);

export default App;
