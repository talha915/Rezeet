import React from 'react';
import { Switch, Route } from 'react-router-dom';
import About from '../About';

function Router() {
  return (
    <div >
      <Switch>
        <Route path="/about" component={About} />
      </Switch>
    </div>
  );
}

export default Router;
