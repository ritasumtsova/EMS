import React, { Component } from 'react';
// import { FormControl, TextField, Button } from '@mui/material';

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      // login: '',
      // password: '',
    };
  }

  // login() {}

  render() {
    return (
      <div>
        <h4>Login Form</h4>
        <a href="./departments">departments</a>
      </div>
    );
  }
}

export default Login;
