import React, { Component } from 'react';

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
                        <form>
                          <input placeholder="Login"/>
                          <input placeholder="Password"/>
                          <button type="submit" onClick={this.login}>Login</button>
                        </form>
                        <a href="./departments">departments</a>
                </div>
        );
    }
}

export default Login;
