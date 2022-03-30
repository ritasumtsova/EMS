import React from 'react';
import { Link } from 'react-router-dom';
import { Container } from 'reactstrap';
import LogoutButton from '../LogoutButton/LogoutButton';
import './Header.scss';

function Header() {
  const title = localStorage.getItem(process.env.REACT_APP_TOKEN)
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

export default Header;
