/* eslint-disable react/prop-types */
import React from 'react';
import './App.css';
import { Container } from '@mui/material';

function App({ children }) {
  return (
    <Container>
      {children}
    </Container>
  );
}

export default App;
