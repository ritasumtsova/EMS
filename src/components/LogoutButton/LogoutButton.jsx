import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import { Button } from 'reactstrap';
import './LogoutButton.scss';

class LogoutButton extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isAuth: true,
    };

    this.logoutHandler = this.logoutHandler.bind(this);
  }

  logoutHandler() {
    localStorage.removeItem(process.env.REACT_APP_TOKEN);

    this.setState({
      isAuth: false,
    });
  }

  render() {
    const { isAuth } = this.state;

    if (!isAuth) { //  DOES NOT WORK IN THE RIGHT WAY
      <Redirect to="/" />;
    }

    return (
      <Button
        color="primary"
        onClick={this.logoutHandler}
      >
        Logout
      </Button>
    );
  }
}

export default LogoutButton;
