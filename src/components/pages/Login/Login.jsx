import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import {
  Button,
  Form,
  FormGroup,
  Input,
  Container,
} from 'reactstrap';

import AuthAPI from '../../../API/Auth';
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

  submitLogin = async () => {
    const { login, password } = this.state;
    const { error, data } = await AuthAPI.login(login, password);

    if (error) {
      console.log(error);
    } else {
      localStorage.setItem(process.env.REACT_APP_TOKEN, data.token);
      console.log(localStorage.getItem(process.env.REACT_APP_TOKEN));

      this.setState({
        isAuth: true,
      });
    }
  };

  inputHandler(e) {
    this.setState({
      [e.target.name]: e.target.value,
    });
  }

  // loginHandler() {
  //   const { login, password } = this.state;

  //   AuthAPI.login(login, password);
  // }

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
            <Button onClick={this.submitLogin} color="primary" size="lg">Login</Button>
          </Form>
        </Container>
      </Container>
    );
  }
}
