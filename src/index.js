import React, { Suspense } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './index.css';
import App from './App';
import Login from './components/Login';
import Error from './components/Error';

const Departments = React.lazy(() => import('./components/Departments'));
const Department = React.lazy(() => import('./components/Department'));

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <App>
        <Switch>
          <Route exact path="/" component={Login} />
          <Suspense fallback={<p>Loading...</p>}>
            <Switch>
              <Route exact path="/departments" component={Departments} />
              <Route path="/departments/:id" component={Department} />
              <Route path="*" component={Error} />
            </Switch>
          </Suspense>
        </Switch>
      </App>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root'),
);
