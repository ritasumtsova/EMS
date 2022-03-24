import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './index.css';
import App from './App';

import Login from './components/Login';
import Departments from './components/Departments';
import Department from './components/Department';
import Error from './components/Error';

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <App>
        <Switch>
          <Route exact path="/" component={Login} />
          <Route exact path="/departments" component={Departments} />
          <Route path="/departments/:id" component={Department} />
          <Route path="*" component={Error} />
        </Switch>
      </App>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root'),
);
