import React, { Component, Suspense } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { Col } from 'reactstrap';

import './App.scss';
import Login from './components/pages/Login/Login';
import Error from './components/pages/Error/Error';
import PrivateRoute from './routes/PrivateRoute';
import Header from './components/Header/Header';
import ModalManager from './components/Modals/common/ModalManager';

const Departments = React.lazy(() => import('./components/pages/Departments/Departments'));
const Department = React.lazy(() => import('./components/pages/Department/Department'));

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      modalOpen: false,
    };
  }

  openModal = (e) => {
    e.preventDefault();

    console.log(e);

    const {
      target: {
        dataset: { modal },
      },
    } = e;

    if (modal) {
      this.setState({
        modalOpen: modal,
      });
    }
  };

  closeModal = () => {
    this.setState({
      modalOpen: false,
    });
  };

  render() {
    const { modalOpen } = this.state;

    return (
      <BrowserRouter>
        <div aria-hidden="true" onClick={this.openModal}>
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
          <ModalManager closeFn={this.closeModal} modal={modalOpen} />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
