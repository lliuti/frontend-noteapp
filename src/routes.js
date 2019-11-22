import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Main from './pages/Main/index';
import Login from './pages/Login/index';

export default function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/feed" exact component={Main}/>
        <Route path="/" exact component={Login}/>
      </Switch>
    </BrowserRouter>
  );
}