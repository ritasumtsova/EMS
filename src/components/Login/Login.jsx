import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import {
  Button,
  Form,
  FormGroup,
  Input,
  Container,
} from 'reactstrap';
import './Login.css';

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      login: '',
      password: '',
      isAuth: false,
    };
  }

  loginInputHandler(e) {
    this.setState({
      login: e.target.value,
    });
  }

  passwordInputHandler(e) {
    this.setState({
      password: e.target.value,
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
        <h1>Login Form</h1>
        <Form
          className="Login__form"
          onSubmit={(e) => this.submitLogin(e)}
        >
          <FormGroup>
            <Input
              type="login"
              name="login"
              id="login"
              placeholder="Login"
              value={login}
              onChange={(e) => { this.loginInputHandler(e); }}
            />
          </FormGroup>
          <FormGroup>
            <Input
              type="password"
              name="password"
              id="password"
              placeholder="Password"
              value={password}
              onChange={(e) => { this.passwordInputHandler(e); }}
            />
          </FormGroup>
          <Button color="primary" size="lg">Login</Button>
        </Form>
      </Container>
    );
  }
}

export default Login;
