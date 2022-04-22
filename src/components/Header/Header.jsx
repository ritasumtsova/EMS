import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Container } from 'reactstrap';

import LogoutButton from '../LogoutButton/LogoutButton';
import './Header.scss';

export default class Header extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isAuth: false,
    };
  }

  componentDidMount() {
    if (localStorage.getItem(process.env.REACT_APP_TOKEN)) {
      this.setState({
        isAuth: true,
      });
    }
  }

  render() {
    const { isAuth } = this.state;
    const title = isAuth
      ? <Link className="Header__info-title" to="/departments">Employee management system</Link>
      : <h6 className="Header__info-title">Employee management system</h6>;

    return (
      <div className="Header">
        <Container className="Header__info-wrapper">
          {title}
          <LogoutButton />
        </Container>
      </div>
    );
  }
}
