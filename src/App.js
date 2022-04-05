import React, { Suspense } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { Col } from 'reactstrap';
import './App.scss';
import Login from './components/Login/Login';
import Error from './components/Error/Error';
import PrivateRoute from './routes/PrivateRoute';
import Header from './components/Header/Header';

const Departments = React.lazy(() => import('./components/Departments/Departments'));
const Department = React.lazy(() => import('./components/Department/Department'));

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Col className="App" xs="12">
        <Switch>
          <Route exact path="/" component={Login} />
          <Suspense fallback={<p>Loading...</p>}>
            <Switch>
              <PrivateRoute path="/departments/:id" component={Department} />
              <PrivateRoute path="/departments" component={Departments} />
              <Route path="*" component={Error} />
            </Switch>
          </Suspense>
        </Switch>
      </Col>
    </BrowserRouter>
  );
}

export default App;
