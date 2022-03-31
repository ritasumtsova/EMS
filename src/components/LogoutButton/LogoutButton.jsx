import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Button } from 'reactstrap';
import './LogoutButton.scss';

export default class LogoutButton extends Component {
  constructor(props) {
    super(props);

    this.state = {

    };

    this.logoutHandler = this.logoutHandler.bind(this);
  }

  // eslint-disable-next-line class-methods-use-this
  logoutHandler() {
    localStorage.removeItem(process.env.REACT_APP_TOKEN);
  }

  render() {
    return (
      <Link to="/">
        <Button
          color="primary"
          onClick={this.logoutHandler}
        >
          Logout
        </Button>
      </Link>
    );
  }
}
