import React, { Component } from 'react';
import { FormControl, TextField, Button } from '@mui/material';

class Login extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
          login: '',
          password: '',

      }
    }

    login = () => {
        
    }
    
    render() {
        return (
            <div>
                <h4>Login Form</h4>
                <FormControl>
                    <TextField id="login" margin="normal" label="Login" variant="filled" />
                    <TextField id="password" margin="normal" label="Password" variant="filled" />
                    <Button variant="contained" type="submit" onClick={this.login}>Login</Button>
                </FormControl>
                <a href="./departments">departments</a>
            </div>
        );
    }
}

export default Login;
