import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import {
  Button,
  Form,
  FormGroup,
  Input,
  Container,
} from 'reactstrap';

import './Login.scss';

export default class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      login: '',
      password: '',
      isAuth: false,
    };

    this.inputHandler = this.inputHandler.bind(this);
    this.submitLogin = this.submitLogin.bind(this);
  }

  inputHandler(e) {
    this.setState({
      [e.target.name]: e.target.value,
    });
  }

  submitLogin(e) {
    e.preventDefault();

    localStorage.setItem(process.env.REACT_APP_TOKEN, process.env.REACT_APP_TOKEN);

    this.setState({
      isAuth: true,
    });
  }

  render() {
    const { login, password, isAuth } = this.state;

    if (isAuth) {
      return <Redirect to="/departments" />;
    }

    return (
      <Container className="Login__wrapper">
        <Container className="Login__wrapper-inner">
          <h1>Login Form</h1>
          <Form
            className="Login__wrapper-inner-form"
            onSubmit={this.submitLogin}
          >
            <FormGroup>
              <Input
                type="login"
                name="login"
                id="login"
                placeholder="Login"
                value={login}
                onChange={this.inputHandler}
              />
            </FormGroup>
            <FormGroup>
              <Input
                type="password"
                name="password"
                id="password"
                placeholder="Password"
                value={password}
                onChange={this.inputHandler}
              />
            </FormGroup>
            <Button color="primary" size="lg">Login</Button>
          </Form>
        </Container>
      </Container>
    );
  }
}
