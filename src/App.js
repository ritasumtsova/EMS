/* eslint-disable react/prop-types */
import React from 'react';
// import PropTypes from 'prop-types';
import './App.css';
import { Container } from '@mui/material';

function App({ children }) {
  return (
    <Container>
      {children}
    </Container>
  );
}

// App.propTypes = {
//   children: PropTypes.element.isRequired,
// };

export default App;
