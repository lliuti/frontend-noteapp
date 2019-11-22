import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Main from './pages/main/index';
import Login from './pages/login/index';

export default function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Main}/>
        <Route path="/auth" exact component={Login}/>
      </Switch>
    </BrowserRouter>
  );
}