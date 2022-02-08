import React from "react";
import "./App.css";
import { Container } from '@mui/material';


function App({children}) {
    return (
        <React.Fragment>
            <Container>
                {children}
            </Container>
        </React.Fragment>
    );
}

export default App;
