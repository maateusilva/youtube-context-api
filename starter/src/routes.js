import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Login from './pages/Login';
import Users from './pages/Users';

export default function Routes() {
  return (
    <Switch>
      <Route exact path="/login" component={Login} />
      <Route exact path="/users" component={Users} />
    </Switch>
  );
}