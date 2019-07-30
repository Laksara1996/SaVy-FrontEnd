import React from 'react';
import './App.css';
import {BrowserRouter, Route,Redirect, Switch} from 'react-router-dom';

import Drawer from './Layout/Layout';
import Login from './Components/Login/Login';


function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Redirect from = "/" to = "/Login" exact/>
        <Route path = "/Login" component = {Login}/>
        <Route path = "/DashBoard" component = {Drawer}/>
      </Switch>

    </BrowserRouter>

  );
}

export default App;
