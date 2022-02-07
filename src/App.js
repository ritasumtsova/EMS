import React from "react";
import "./App.css";


function App({children}) {
    return (
        <React.Fragment>
            {children}
        </React.Fragment>
    );
}

export default App;
