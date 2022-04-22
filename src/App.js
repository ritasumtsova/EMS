import React, { Suspense } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { Col } from 'reactstrap';

import './App.scss';
import Login from './components/pages/Login/Login';
import Error from './components/pages/Error/Error';
import PrivateRoute from './routes/PrivateRoute';
import Header from './components/Header/Header';
import ModalContextProvider from './contexts/ModalContext/ModalContextProvider';

const Departments = React.lazy(() => import('./components/pages/Departments/Departments'));
const Department = React.lazy(() => import('./components/pages/Department/Department'));

function App() {
  return (
    <BrowserRouter>
      <ModalContextProvider>
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
      </ModalContextProvider>
    </BrowserRouter>
  );
}

export default App;
